export const LOAD_ALBUM = 'albums/loadAlbums';
export const MAKE_ALBUM = 'albums/makeAlbum';
export const DELETE_ALBUM = 'albums/deleteAlbum'

const initialState = {
    albums: null
}

export const albumReducer = (state = initialState, action) => {
    let newStete
    switch (action.type) {
        case LOAD_ALBUM:
            if (action.albums) {
                return {'albums': action.albums}
            }
        case MAKE_ALBUM:
            newStete = Object.assign({}, state)
            newStete.albums = action.payload
            return newStete
        case DELETE_ALBUM:
            newStete = Object.assign({}, state)
            return
        default:
            return state
    };
};
