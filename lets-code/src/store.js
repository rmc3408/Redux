import { createstore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootreducer';

const store = createstore(rootReducer, composeWithDevTools());

export default store;