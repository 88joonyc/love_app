import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const sessUser = useSelector(state => state.session.user)

    let footer;
    if (sessUser) {
        footer = (
            <>
                <div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                    <div>hi</div>
                </div>
            </>
        )
    } else {
        footer = (
            <>
                <div>
                    <div>no</div>
                    <div>no</div>
                    <div>no</div>
                    <NavLink to='/'>home</NavLink>
                    <br />
                    <NavLink to='/login'>login</NavLink>
                    <br />
                    <NavLink to='/signup'>signup</NavLink>
                    <div>no</div>
                </div>
            </>
        )
    }

    return (
        <>
            {footer}
        </>
    )
}

export default Footer
