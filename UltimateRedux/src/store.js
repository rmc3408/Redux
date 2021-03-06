import { createStore } from 'redux';
import reducer from './reducer';
import { devToolsEnhancer } from 'redux-devtools-extension'

//const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducer, devToolsEnhancer({ trace: true }));

export default store;