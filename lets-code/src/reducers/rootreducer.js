import { combineReducers } from 'redux';
import actReducer from './actReducer';

const rootReducer = combineReducers({ activities: actReducer });

export default rootReducer;