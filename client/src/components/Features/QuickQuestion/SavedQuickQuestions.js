import React from "react";
import { connect } from "react-redux";
import {
  addQuestionToWorksheetdata,
  deleteQuestionToWorksheetdata,
  deleteQuestionToSaved
} from "../../../redux/actions";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Flex = styled.div`
  width: 100px;
`;

const SavedQuickQuestion = props => {
  const handleClickAdd = question => {
    props.addQuestionToWorksheetdata(question);
  };

  const handleClickDelete = question => {
    props.deleteQuestionToWorksheetdata(question);
  };

  const handleRemoveFromSaved = question => {
    props.deleteQuestionToSaved(question);
  };

  return (
    <div>
      <Typography variant="h4" component="h4">
        Saved Equations
      </Typography>
      {props.question.map(e => {
        return (
          <div>
            <Paper>
              <Wrapper>
                <br />
                <Flex>
                  <div>{e.question}</div>
                </Flex>
                <Flex>
                  <div>{e.answer}</div>
                </Flex>
                <br />
                <div>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleClickAdd(e)}
                  >
                    +
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleClickDelete(e)}
                  >
                    -
                  </Button>
                  <Button variant="contained" color="secondary" size="xs">
                    <DeleteOutlinedIcon
                      onClick={() => handleRemoveFromSaved(e)}
                    />
                  </Button>
                </div>
              </Wrapper>
            </Paper>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    question: state.savedQuestion.worksheetQuestion
  };
};
export default connect(
  mapStateToProps,
  {
    addQuestionToWorksheetdata,
    deleteQuestionToWorksheetdata,
    deleteQuestionToSaved
  }
)(SavedQuickQuestion);
