import store from './store';
console.log(store);

import { bugAddiction, bugRemotion, bugResolution } from './actioncreators';

const unSubscribe = store.subscribe(() => {
    console.log('store changed ', store.getState());
});

store.dispatch(bugAddiction('First bug'));
store.dispatch(bugAddiction('Second bug'));
store.dispatch(bugAddiction('Third bug'));
store.dispatch(bugResolution(2));
store.dispatch(bugRemotion(1));

unSubscribe();

// import store from './customStore';
// import * as actions from './actioncreators';

// store.state = 1;
// console.log(store.getState());

// store.subscribe(() => console.log('store changed'));

// store.dispatch(actions.bugAddiction('First Report Bug'));
// console.log(store);
// console.log(store.getState());
