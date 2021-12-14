import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "./Profile";

import './Navigation.css'


const Navigation = ({isLoaded, connected, setConnected, setLoaded}) => {
    const user = useSelector(state => state.session.user)

    let naviLinks
    if (user) {
        naviLinks = (
            <>
                <Profile user={user} setLoaded={setLoaded} setConnected={setConnected} />
            </>
        )
    } else {
        naviLinks = (
            <>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>Sign up</NavLink>
            </>
        )
    }


    return (
        <div className="navigation-bar">
            <div className="navi-buttons">
                <ul className="navigation-unordered">
                    <li>
                        <NavLink to='/'>Home</NavLink>
                        {isLoaded && naviLinks}
                        {connected && <NavLink to='/connect'>Connect</NavLink>}
                        <NavLink to='/about'>About</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
