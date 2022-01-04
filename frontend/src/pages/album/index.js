import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';

import { loadAlbums } from '../../actions/album';
import ConnectedNavi from '../../components/ConnectedNavi';

const PhotoGallery = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadAlbums())
    }, [])

    return (
        <>
            <ConnectedNavi />

        </>
    )
}

export default PhotoGallery
