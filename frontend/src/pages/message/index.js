import React from 'react';
import { loadMessages } from '../../actions/message';
import ConnectedNavi from '../../components/ConnectedNavi';

const Message = () => {



    return (
        <>
            <ConnectedNavi />
            <div className='message-container'>
                <div>hello</div>
            </div>
        </>
    )
}

export default Message
