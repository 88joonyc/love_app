import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as connectAction from '../../actions/connection'

import './connect.css'

const Connect = () => {

    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.session.user)
    const connectStatus = useSelector(state => state.connection.connection)

    let num = Math.floor(Math.random() * 100000000)

    const handleBreak = e => {
        e.preventDefault()
        dispatch(connectAction.disconnect(connectStatus.id))
    }

    const handleConnect = e => {
        e.preventDefault()
        dispatch(connectAction.connect({
            loveyId: currentUser.id,
            validator: num
        }))
    }

    return (
        <div className="connect-body">
            <div className="connect-box">
                {connectStatus && <div className="connect-code">
                    {connectStatus?.validator}
                </div>}
                <form className="connect-form">
                    <input hidden type='number' value={currentUser?.id}/>
                    <input hidden type='number' value={num}/>
                    {!connectStatus && <button onClick={e => handleConnect(e)} className="connect-button">make a new connection</button>}
                    <button onClick={e => handleBreak(e)} className="delete-button">break connection</button>
                </form>
            </div>
        </div>
    )
}

export default Connect
