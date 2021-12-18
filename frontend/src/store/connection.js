export const MAKE_CONNECTION = 'connection/makeConnection';
export const REMOVE_CONNECTION = 'connection/removeConnection';
export const LOAD_CONNECTION = 'connection/loadConnection';
export const UPDATE_CONNECTION = 'connection/updateConnection';

const initialState = {
    connection: null
}

export const connectionReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case LOAD_CONNECTION:
            if (action.connection) {
                return {'connection': action.connection}
            }
        case MAKE_CONNECTION:
            newState = Object.assign({}, state)
            newState.connection = action.payload
            return newState
        case REMOVE_CONNECTION:
            newState = Object.assign({}, state)
            newState.connection = null
            return newState
        case UPDATE_CONNECTION:
            newState = Object.assign({}, state)
            newState.connection = action.payload
            return newState
        default:
            return state;
    }
}
