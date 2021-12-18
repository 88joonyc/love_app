import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";

import * as sessionActions from '../../actions/session'
import { disconnect } from "../../actions/connection";

import './profile.css'

const Profile = ({ user, setConnected }) => {
    const dispatch = useDispatch()
    const [ showMenu, setShowMenu ] = useState(false)

    const open = () => {
        if (showMenu) return
        setShowMenu(true)
    }


    useEffect(() => {
        if (!showMenu) return

        const close = () => {
            setShowMenu(false)
        }

        document.addEventListener('click', close)
        return () => document.removeEventListener('click', close)
    }, [showMenu])

    const logout = e => {
        e.preventDefault()
        dispatch(sessionActions.logout())
        dispatch(disconnect())
        setConnected(true)
    }

    return (
        <>
            {!showMenu ? <div className='profile-button navi-menu' onClick={open}></div> : <div className='profile-button navi-menu2' onClick={open}></div>}
            {showMenu && (
                <div className='profile-dropdown'>
                    <div className="dropdown-links">{user.id}</div>
                    <div className="dropdown-links">{user.email}</div>
                    <div>
                        <button className="logout-button" onClick={logout}>Log Out</button>
                    </div>
                </div>
            )}
        </>
    )
};

export default Profile
