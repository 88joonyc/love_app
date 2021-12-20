import { csrfFetch } from "../store/csrf";
import { LOAD_MESSAGES, CREATE_MESSAGE, REMOVE_MESSAGE } from '../store/message'

const load = (message) => {
    return {
        type: LOAD_MESSAGES,
        payload: message
    }
}

const postMessage = (message) => {
    return {
        type: CREATE_MESSAGE,
        payload: message
    }
}

export const loadMessages = () => {
    const message = await csrfFetch('/api/messages')
}
