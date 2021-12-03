import { csrfFetch } from "../store/csrf";
import { SET_USER, REMOVE_USER } from '../store/session'

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

const removeUser = () => {
    return {
        type: REMOVE_USER
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

export const signup = user => async dispatch => {
    const { email, password } = user
    const res = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        }),
    })
    const data = await res.json();
    dispatch(setUser(data.user))
    return res
}
