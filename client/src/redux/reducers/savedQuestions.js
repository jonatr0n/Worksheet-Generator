import {
  SAVED_QUICKQUESTION,
  SAVED_QUESTIONARR,
  REMOVE_QUESTION
} from '../actions/types';

const initialState = {
  quickQuestions: [],
  worksheetQuestion: []
};

export default function savedQuickQuestion(state = initialState, action) {
  switch (action.type) {
    case SAVED_QUICKQUESTION:
      return {
        quickQuestions: [...state.quickQuestions, action.payload],
        worksheetQuestion: [...state.worksheetQuestion, action.payload]
      };
    case SAVED_QUESTIONARR:
      return {
        ...state,
        worksheetQuestion: [...state.worksheetQuestion, ...action.payload]
      };
    case REMOVE_QUESTION:
      return {
        ...state,
        worksheetQuestion: [
          ...state.worksheetQuestion.filter(
            element => element !== action.payload
          )
        ]
      };
    default:
      return state;
  }
}
