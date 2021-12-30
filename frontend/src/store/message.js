export const LOAD_MESSAGES = 'messages/LOAD_MESSAGES';
export const CREATE_MESSAGE = 'messages/CREATE_MESSAGE';
export const REMOVE_MESSAGE = 'messages/DELETE_MESSAGE'

const initialState = {
    message: null
}

export const messageReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case LOAD_MESSAGES:
            newState = Object.assign({}, state)
            newState.message = action.payload
            return newState
        case CREATE_MESSAGE:
            newState = Object.assign({}, state)
            newState.message = [...state, action.payload]
            return newState
        case REMOVE_MESSAGE:
            return
        default:
            return state
    };
};
