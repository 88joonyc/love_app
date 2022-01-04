import React from "react";
import { NavLink } from "react-router-dom";

import './ConnectedNavi.css';

const ConnectedNavi = () => {


    return (
        <>
            <div className="connected-navi">
                <div className="conn-navi-butts">
                    <div className="navi-msg-container" >
                        <NavLink className='navi-messages' to='/photos'>photos</NavLink>
                        <NavLink className='navi-messages' to='/messages'>messages</NavLink>
                        <NavLink className='navi-messages' to='/adventures'>adventures</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConnectedNavi
