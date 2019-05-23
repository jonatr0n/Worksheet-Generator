import { combineReducers } from 'redux';
import savedQuestion from './savedQuestions';
import worksheetSaver from './worksheetSaver';
import worksheetData from './worksheetData';
import savedUsername from './savedUsername';

export default combineReducers({
  savedQuestion: savedQuestion,
  worksheetSaver: worksheetSaver,
  worksheetData: worksheetData,
  savedUsername
});
