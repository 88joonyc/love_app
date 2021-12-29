import React, { useEffect, useState } from 'react';
import { loadMessages } from '../../actions/message';
import { useDispatch } from 'react-redux';

import ConnectedNavi from '../../components/ConnectedNavi';


import './Message.css'

const Message = () => {
    const dispatch = useDispatch()

    const [ message, setMessage ] = useState('')

    useEffect(() => {
        dispatch(loadMessages())
    }, [])


    return (
        <>
            <ConnectedNavi />
            <div className='message-container'>
                <div>hello</div>
                <div className='message-input-container'>
                    <form className='message-form'>
                        <input
                            className='message-input'
                            onChange={e => setMessage(e.target.value)}
                        />
                        {message && <button className='submit-message'><img className='up-arrow'/></button>}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Message
