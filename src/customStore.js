import reducer from './reducer';

function createStore(reducer) {
    let state;
    let listeners = [];

    function subscribe(evt) {
        listeners.push(evt);
    }

    function getState() {
        return state;
    }

    function dispatch(action) {
        state = reducer(state, action);

        for (let i = 0; i < listeners.length; i++){
            listeners[i]();
        }
    }

    return { getState, dispatch, subscribe };
}

export default createStore(reducer);