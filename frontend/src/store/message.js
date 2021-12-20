export const LOAD_MESSAGES = 'messages/LOAD_MESSAGES';
export const CREATE_MESSAGE = 'messages/CREATE_MESSAGE';
export const REMOVE_MESSAGE = 'messages/DELETE_MESSAGE'

initialState= {
    message: null
}

export const messageReudcer = (state= initialState, action) => {
    let newState;
    switch(action.type) {
        case LOAD_CONNECTION:
            if (action.message) {
                return {'message': action.message}
            }
        case CREATE_MESSAGE:
            newState = Object.assign({}, state)
            newState.message = action.payload
            return newState
        case REMOVE_MESSAGE:
            return
        default:
            return state
    };
};
