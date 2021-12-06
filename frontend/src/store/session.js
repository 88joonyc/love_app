// this is where the reducer belongs

import { csrfFetch } from "../store/csrf";
export const SET_USER = 'session/setUser';
export const REMOVE_USER = 'session/removeUser';

const initialState = { user: {} }

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

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

export const login = user => async dispatch => {
    const { credential, password } = user;
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        }),
    });
    const data = await res.json();
    dispatch(setUser(data.user))
    return res
}
