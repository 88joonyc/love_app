import { csrfFetch } from "../store/csrf";
import { MAKE_CONNECTION, REMOVE_CONNECTION } from "../store/connection";

const makeConnection = (connection) => {
    return {
        type: MAKE_CONNECTION,
        payload: connection
    };
};

const removeConnection = () => {
    return {
        type: REMOVE_CONNECTION
    };
};

export const connect = connection => async dispatch => {
    const { loveyId, validator } = connection;
    const res = await csrfFetch('/api/connection', {
        method: 'POST',
        body: JSON.stringify({
            loveyId,
            validator
        })
    });
    const data = await res.json();
    dispatch(makeConnection(data.connection));
    return res;
};

export const disconnect = () => async dispatch => {
    const res = csrfFetch('/api/connection', {
        method: 'DELETE'
    });
    dispatch(removeConnection());
    return res;
};
