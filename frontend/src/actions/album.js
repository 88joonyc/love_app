import { csrfFetch } from '../store/csrf/'
import * as albumHander from '../store/album'

const load = (album) => {
    return {
        type: albumHander.LOAD_ALBUM,
        payload: album
    };
};

const make = (album) => {
    return {
        type: albumHander.MAKE_ALBUM,
        payload: album
    };
};

const remove = () => {
    return {
        type: albumHander.DELETE_ALBUM
    }
}

export const loadAlbums = (id) => async dispatch => {
    const res = await csrfFetch(`/api/albums/${id}`)
    const album = await res.json()
    dispatch(load(album))
};
