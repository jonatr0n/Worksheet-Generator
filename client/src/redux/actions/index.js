import {
  ADD_QUESTION_TO_WORKSHEETDATA,
  DELETE_QUESTION_TO_WORKSHEETDATA,
  SAVED_QUICKQUESTION,
  WORKSHEET_SAVER,
  WORKSHEET_DATA,
  SAVE_USERNAME,
  SAVED_QUESTIONARR,
  REMOVE_QUESTION
} from './types';

export const addQuestionToWorksheetdata = question => {
  return {
    type: ADD_QUESTION_TO_WORKSHEETDATA,
    payload: question
  };
};

export const deleteQuestionToWorksheetdata = question => {
  return {
    type: DELETE_QUESTION_TO_WORKSHEETDATA,
    payload: question
  };
};

export const deleteQuestionToSaved = question => {
  return {
    type: REMOVE_QUESTION,
    payload: question
  };
};

export const helperSaveQuickQuestion = question => {
  return {
    type: SAVED_QUICKQUESTION,
    payload: question
  };
};

export const helperSavePopulatedQuestionArr = question => {
  return {
    type: SAVED_QUESTIONARR,
    payload: question
  };
};

export const saveWorksheet = (equations, username) => {
  return {
    type: WORKSHEET_SAVER,
    payload: { equations, username }
  };
};

export const worksheetData = question => {
  return {
    type: WORKSHEET_DATA,
    payload: question
  };
};

export const saveUsername = userName => {
  return {
    type: SAVE_USERNAME,
    payload: userName
  };
};
