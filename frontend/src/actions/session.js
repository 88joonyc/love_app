import { csrfFetch } from "../store/csrf";
import {  REMOVE_USER } from '../store/session'



const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}


export const signup = user => async dispatch => {
//     const { email, password } = user
//     const res = await csrfFetch('/api/session', {
//         method: 'POST',
//         body: JSON.stringify({
//             email,
//             password
//         }),
//     })
//     const data = await res.json();
//     dispatch(setUser(data.user))
//     return res
}
