import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import Axios from 'axios';
import HistoryWorksheetForm from './HistoryWorksheetForm';
import { connect } from 'react-redux';

class UserPref extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [],
      chosenHistory: []
    };
  }

  handleClick = e => {
    this.setState({
      chosenHistory: e
    });
  };

  componentDidMount() {
    Axios.get(`/worksheets/history?userName=${this.props.username}`).then(
      res => {
        let timesArr = Array.from(new Set(res.data.map(cur => cur.date_saved)));
        let completeArray = timesArr.map(cur => {
          let familyArr = [];
          for (var question of res.data) {
            if (question.date_saved === cur) {
              familyArr.push(question);
            }
          }
          return familyArr;
        });
        this.setState({
          history: completeArray
        });
      }
    );
  }
  handleChange = event => {
    const target = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: target
    });
  };

  render() {
    const { dense, secondary } = this.state;

    return (
      <div className="historyList">
        <Typography variant="h4" component="h4">
          History
        </Typography>
        <List dense={dense}>
          {this.state.history &&
            this.state.history.length &&
            this.state.history.map((cur, index) => {
              return (
                <ListItem
                  key={cur.id}
                  onClick={() => this.handleClick(cur)}
                  button
                >
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={cur[0].date_saved}
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
              );
            })}
        </List>
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleSubmit}
            className="submit-btn"
            type="submit"
          >
            Preview
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleSubmit}
            className="submit-btn"
            type="submit"
          >
            Download
          </Button>
          <HistoryWorksheetForm displayQuestions={this.state.chosenHistory} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.savedUsername
  };
};

export default connect(mapStateToProps)(UserPref);
