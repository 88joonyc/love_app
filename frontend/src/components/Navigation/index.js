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
                <Profile className='navlink' user={user} setLoaded={setLoaded} setConnected={setConnected} />
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
                <div className="navigation-unordered">
                    <div className="navigation-links">
                        <NavLink className='navlink' to='/'>Home</NavLink>
                        {<NavLink className='navlink' to='/connect'>Connect</NavLink>}
                        <NavLink className='navlink' to='/about'>About</NavLink>
                        {isLoaded && naviLinks}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation
