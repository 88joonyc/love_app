import { csrfFetch } from "../store/csrf";
import { LOAD_MESSAGES, CREATE_MESSAGE, REMOVE_MESSAGE } from '../store/message';

const load = (message) => {
    return {
        type: LOAD_MESSAGES,
        payload: message
    }
};

const post = (message) => {
    return {
        type: CREATE_MESSAGE,
        payload: message
    }
};

export const loadMessages = ()=> async dispatch => {
    const message = await csrfFetch('/api/message')
    const res = await message.json();
    dispatch(load(res));
};

export const postMessage = payload => async dispatch => {
    const res = await csrfFetch('/api/message', {
        method: 'POST',
        body: JSON.stringify(payload)
    });
    const data = await res.json();
    dispatch(post(data));
    return res
};

const removeMessage = id => async dispatch => {
    // const res = csrfFetch
}
