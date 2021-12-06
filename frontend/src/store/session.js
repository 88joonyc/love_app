// this is where the reducer belongs
export const SET_USER = 'session/setUser';
export const REMOVE_USER = 'session/removeUser';

const initialState = { user: null }

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
