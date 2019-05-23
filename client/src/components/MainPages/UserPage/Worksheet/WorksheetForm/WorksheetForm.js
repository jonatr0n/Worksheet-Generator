import React from 'react';
import './WorksheetForm.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import WorksheetData from './WorksheetData';
import jsPDF from "jspdf";
import html2canvas from 'html2canvas'
import SavedQuickQuestions from '../../../../Features/QuickQuestion/SavedQuickQuestions';
import {
  saveWorksheet,
  worksheetData,
  helperSavePopulatedQuestionArr
} from "../../../../../redux/actions";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";



class WorksheetForm extends React.Component {
  constructor() {
    super();
    this.state = {
      max: 30,
      min: 0,
      numOfQuestions: 10,
      question: [],
      displayAnswers: false
    };
  }

  handleChange = event => {
    const target = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: target
    });
    console.log(name);
  };

  getEquations = () => {
    return axios.get(
      `/slope_intercept?min=${this.state.min}&max=${
      this.state.max
      }&numOfQuestions=${this.state.numOfQuestions}`
    );
  };

  handleEquations = event => {
    event.preventDefault();
    this.getEquations().then(response => {
      console.log(response.data);
      this.props.worksheetData(response.data);
      this.props.helperSavePopulatedQuestionArr(response.data);
    });
  };

  handleClick = () => {
    this.setState({ displayAnswers: !this.state.displayAnswers });
  };

  handleSaveWorksheet = async () => {
    const { question } = this.props;
    await this.props.saveWorksheet(question, this.props.userName);
    axios.post('worksheets', {
      data: question
    });
  };

  printDocument = () => {
    window.html2canvas = html2canvas;
    let doc = new jsPDF();
    let elWidth = document.querySelector('#divToPrint').offSetWidth;
    doc.html(document.querySelector('#divToPrint'), {
      html2canvas: {
        scale: .28,
      },
      callback: function (doc) {
        console.log(doc);
        doc.save();
      }
    })
  }

  render() {
    return (
      <div>
        <div className="savedQuestion-container">
          <SavedQuickQuestions />
        </div>
        <Typography variant="h4" component="h4">
          Create a Worksheet
        </Typography>
        <form className="workshett-form">
          <div>
            <TextField
              id="filled-number"
              label="Min Number"
              name="min"
              value={this.state.min}
              onChange={this.handleChange}
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              variant="filled"
            />
            <TextField
              id="filled-number"
              label="Max Number"
              name="max"
              value={this.state.max}
              onChange={this.handleChange}
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              variant="filled"
            />
            <TextField
              id="filled-number"
              label="Number of Equations"
              name="numOfQuestions"
              value={this.state.numOfQuestions}
              onChange={this.handleChange}
              type="number"
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              variant="filled"
            />
          </div>
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleEquations}
              className="submit-btn"
              type="submit"
              value="Save"
            >
              Populate
            </Button>
          </div>
        </form>
        <br />

        <Typography variant="h4" component="h4">
          WorkSheet Section
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClick}
          className="submit-btn"
          type="submit"
        >
          Show Answer
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.printDocument}
          className="submit-btn"
          type="submit"
        >
          download
        </Button>
        <Button
          variant="contained"
          onClick={this.handleSaveWorksheet}
          className="submit-btn"
          type="submit"
        >
          save
        </Button>
        <div id="divToPrint" className="Worksheet" >
          <div className="equation-container">
            {this.props.question.map((e, i) => (
              <WorksheetData
                key={i}
                index={Number(i + 0)}
                equations={e.question}
                answer={e.answer}
                displayAnswers={this.state.displayAnswers}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    question: state.worksheetData.data,
    worksheet: state.worksheetSaver,
    userName: state.savedUsername
  };
};

export default connect(
  mapStateToProps,
  { worksheetData, saveWorksheet, helperSavePopulatedQuestionArr }
)(WorksheetForm);
