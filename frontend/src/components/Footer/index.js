import React, { useState } from "react";
import { useSelector } from "react-redux";

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
                    <div>no</div>
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
