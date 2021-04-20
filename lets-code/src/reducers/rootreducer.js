import { combineReducers } from 'redux';
import actReducer from './actReducer';

const rootReducer = combineReducers({ activity: actReducer });

export default rootReducer;