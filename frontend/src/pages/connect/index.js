import React from "react";
import { useSelector } from "react-redux";

import './connect.css'

const Connect = () => {

    const currentUser = useSelector(state => state.session.user)

    return (
        <div className="connect-body">
            <div className="connect-box">
                {/* <div className="connect-code">
                    1214 1314
                </div> */}
                <form className="connect-form">
                    <input hidden type='text'/>
                    <input hidden type='text'/>
                    <button className="connect-button">make a new connection</button>
                </form>
            </div>
        </div>
    )
}

export default Connect
