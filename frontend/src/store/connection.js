export const MAKE_CONNECTION = 'connection/makeConnection';
export const REMOVE_CONNECTION = 'connection/removeConnection';

const initialState = {
    connection: null
}

const connectionReducer = (state = initialState, action ) => {
    let newState
    switch (action.type) {
        case MAKE_CONNECTION:
            newState = Object.assign({}, state)
            newState.connection = action.payload
            return newState
        case REMOVE_CONNECTION:
            newState = Object.assign({}, state)
            newState.connection = null
            return newState
        default:
            return state;
    }
}
