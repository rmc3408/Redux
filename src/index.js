import store from './store';
import { bugAddiction, bugRemotion, bugResolution} from './actioncreators';

const unSubscribe = store.subscribe(() => {
    console.log('store changed ', store.getState());
});

store.dispatch(bugAddiction('first bug'));
store.dispatch(bugAddiction('second bug'));
store.dispatch(bugResolution(2));
store.dispatch(bugRemotion(1));

unSubscribe();
