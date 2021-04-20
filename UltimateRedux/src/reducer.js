import * as actions from './actiontypes';
let count = 0;

function reducer(state = [], action) {
    if (action.type === actions.ADDED) {
        return ([
            ...state,
            {
                id: ++count,
                description: action.payload.description,
                resolved: false
            }
        ]);
    } else if (action.type === actions.REMOVED) {
        return state.filter(p => p.id !== action.payload.id);

    } else if (action.type === actions.RESOLVED) {
        return state.map(bug => bug.id !== action.payload.id ? bug : {
            ...bug,
            resolved: true
        });
    }
    return state;
}
export default reducer;
