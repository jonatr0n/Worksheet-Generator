import {
  ADD_QUESTION_TO_WORKSHEETDATA,
  DELETE_QUESTION_TO_WORKSHEETDATA,
  WORKSHEET_DATA
} from '../actions/types';

const initialState = {
  data: [],
  // loading: true,
  // expandedIds: [],
  displayAnswers: false
};

export default function worksheetData(state = initialState, action) {
  switch (action.type) {
    case WORKSHEET_DATA:
      return {
        ...state,
        data: [...state.data, ...action.payload]
      };
    case ADD_QUESTION_TO_WORKSHEETDATA:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case DELETE_QUESTION_TO_WORKSHEETDATA:
      return {
        ...state,
        data: state.data.filter(element => element.id !== action.payload.id)
      };
    default:
      return state;
  }
}
