import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loadConnection } from "../../actions/connection";

const Footer = () => {
    const sessUser = useSelector(state => state.session.user)
    const conn = useSelector(state => state.connection)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadConnection())
    }, [])


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
