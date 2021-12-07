import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from '../../actions/session'

const Profile = ({ user }) => {
    const dispatch = useDispatch()
    const [ showMenu, setShowMenu ] = useState(false)

    const open = () => {
        if (showMenu) return
        setShowMenu(true)
    }


    useEffect(() => {
        if (!showMenu) return

        const close = () => {
            if (!showMenu) return
            setShowMenu(false)
        }

        document.addEventListener('click', close)
        return () => document.removeEventListener('click', close)
    }, [showMenu])

    const logout = e => {
        e.preventDefault()
        dispatch(sessionActions.logout())
    }

    return (
        <>
            <button onClick={open}>
                <i className='profile-button' />
            </button>
            {showMenu && (
                <ul className='profile-dropdown'>
                    <li>{user.user}</li>
                    <li>{user.email}</li>
                    <li>
                        <button onClick={logout}>Log Out</button>
                    </li>
                </ul>
            )}
        </>
    )
};

export default Profile
