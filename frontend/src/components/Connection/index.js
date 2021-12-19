import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { connectDovey, couple } from "../../actions/connection";

import './Connection.css'

const ConnectForm = ({ currentUser }) => {

    const [ validator, setValidator ] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(connectDovey({
            validator,
            doveyId: currentUser.id
        }))
        dispatch(couple({id: currentUser?.id}))
    }

    return (
        <>
            <div className="connecter-container">
                <form onSubmit={e => handleSubmit(e)} className="connecter-form">
                    <input name='validator' type='number' max={99999999} onChange={(e) => setValidator(e.target.value)} className="connect-input"/>
                    <button type='submit' className="connect-submit">submit</button>
                </form>
            </div>
        </>
    )
}

export default ConnectForm
