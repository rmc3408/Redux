import { bindActionCreators } from "redux";
import * as action from './actiontypes'

export function bugAddiction(txt) {
    return {
        type: "ADD_BUG",
        payload: {
            description: txt
        }
    }
}

export function bugResolution(id) {
    return {
        type: action.RESOLVED,
        payload: {
            id
        }
    }
}

export function bugRemotion(num) {
    return {
        type: "REMOVE_BUG",
        payload: {
            id: num
        }
    }
}

