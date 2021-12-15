import { csrfFetch } from "../store/csrf";
import { MAKE_CONNECTION, REMOVE_CONNECTION, LOAD_CONNECTION } from "../store/connection";

const load = (connection) => {
    return {
        type: LOAD_CONNECTION,
        payload: connection
    }
}

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

export const loadConnection = () => async dispatch => {
    const connection = await csrfFetch('/api/connection')
    const res = await connection.json()
    dispatch(load(res))
}

export const couple = connection => async dispatch => {
    const { id } = connection;
    const res = await csrfFetch('/api/connection/connect', {
        method: 'POST',
        body: JSON.stringify({
            id
        })
    });
    const data = await res.json();
    dispatch(makeConnection(data));
    return res;
};

export const connect = connection => async dispatch => {
    const { loveyId, validator } = connection;
    const res = await csrfFetch('/api/connection/make', {
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

// export const disconnect = (id) => async dispatch => {
//     const res = csrfFetch(`/api/connection/${id}`, {
//         method: 'DELETE'
//     });
//     dispatch(removeConnection());
//     return res;
// };

export const disconnect = id => async dispatch => {
    const res = csrfFetch(`/api/connection/${id}`, {
        method: 'DELETE',
    });
    dispatch(removeConnection());
    return res;
};
