import { v4 as uuidv4 } from 'uuid';

const initialState = [
    { id: uuidv4(), name: 'gym', duration: 1 },
    { id: uuidv4(), name: 'running', duration: 0.5}
];

const actReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "CREATE":
            return [...state, { id: uuidv4(), name: payload.name, duration: payload.duration }];
        case "DELETE":
            return [...state.filter(act => act.id !== payload.id)];
        default:
            return state;
    }
}
export default actReducer;