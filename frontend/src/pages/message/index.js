import React, { useEffect, useState } from 'react';
import { loadMessages } from '../../actions/message';
import { connect, useDispatch, useSelector } from 'react-redux';

import ConnectedNavi from '../../components/ConnectedNavi';


import './Message.css'

const Message = () => {
    const dispatch = useDispatch()

    const [ message, setMessage ] = useState('')

    const user = useSelector(state => state.session.user)
    const messages = useSelector(state => state.messages.message)
    const connected = useSelector(state => state.connection.connection)

    console.log(messages)

    useEffect(() => {
        dispatch(loadMessages())
    }, [])


    return (
        <>
            <ConnectedNavi />
            <div className='message-container'>
                <div className='messages-container'>{
                messages?.map(mess => (
                    mess.connectionId === connected.id ?
                        mess.senderId === user.id ? <div className='user-message'>{mess.content}</div> : <div className='sender-message'>{mess.content}</div>
                    : null
                ))
                }</div>
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
