// this is where the reducer belongs
const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const initialState = { user: {} }

export const sessionReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case SET_USER:
            newState = Object.assign({}, state)
            newState.user = action.payload;
            return newState
        case REMOVE_USER:
            newState = Object.assign({}, state)
            newState.user = null;
            return newState
        default:
            return state;
    }
}
