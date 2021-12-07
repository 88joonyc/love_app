import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "./Profile";


const Navigation = ({isLoaded}) => {
    const user = useSelector(state => state.session.user)

    let naviLinks
    if (user) {
        naviLinks = (
            <>
                <Profile user={user} />
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
        <>
            <ul>
                <li>
                    <NavLink exact to='/'>Home</NavLink>
                    {!isLoaded && naviLinks}
                </li>
            </ul>
        </>
    )
}

export default Navigation
