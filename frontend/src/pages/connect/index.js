import React from "react";
import { useSelector } from "react-redux";

import './connect.css'

const Connect = () => {

    const currentUser = useSelector(state => state.session.user)

    let num = Math.floor(Math.random() * 100000000)

    return (
        <div className="connect-body">
            <div className="connect-box">
                <div className="connect-code">
                    {num}
                </div>
                <form className="connect-form">
                    <input hidden type='number' value={currentUser.id}/>
                    <input hidden type='number' value={num}/>
                    <button className="connect-button">make a new connection</button>
                </form>
            </div>
        </div>
    )
}

export default Connect
