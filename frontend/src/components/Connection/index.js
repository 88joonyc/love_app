import React from "react";

import './Connection.css'

const ConnectForm = ({ currentUser }) => {



    const handleSubmit = e => {
        e.preventDefault()

    }

    return (
        <>
            <div className="connecter-container">
                <form onSubmit={e => handleSubmit(e)} className="connecter-form">
                    <input name='doveyId' type='number' className="connect-input"/>
                    <button type='submit' className="connect-submit">submit</button>
                </form>
            </div>
        </>
    )
}

export default ConnectForm
