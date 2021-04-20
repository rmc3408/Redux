import * as actionTypes from '../actions/actiontypes';

const initialState = [];

const cartItems = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.addCart:
            return [...state, action.payload]
        case actionTypes.remCart:
            const newCopy = [...state];
            newCopy.pop();
            return newCopy;
        default:
            return state;
    }
}

export default cartItems;