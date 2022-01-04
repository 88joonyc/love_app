import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadAlbums } from '../../actions/album';
import ConnectedNavi from '../../components/ConnectedNavi';

const PhotoGallery = () => {

    const connected = useSelector(state => state.connection.connection)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadAlbums(connected?.id))
    }, [])

    return (
        <>
            <ConnectedNavi />

        </>
    )
}

export default PhotoGallery
