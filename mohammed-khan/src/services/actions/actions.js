import * as actions from './actiontypes';


export const addCart = (item) => {
    return {
        type: actions.addCart,
        payload: item
    }
}

export const removeCart = () => {
    return {
        type: actions.remCart
    }
} 