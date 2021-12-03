import React, { useState } from "react";
import * as sessionActions from '../../actions/session'

export default function SignupForm() {


    const [ info, setInfo ] = useState({})
    const [ errors, setErrors ] = useState([])

    const handleInput = e => {
        setInfo({...info, [e.target.name]: e.target.value})
    };

    const handleSubmit = e => {
        e.preventDefault();

    };

    const form = (
        <form onSubmit={handleSubmit} >
            <input
                type='text'
                name="email"
                placeholder='Nickname'
                value
            />
            <input
                type='text'
                name="password"
                placeholder='Password'
                value={}
            />
            <button type='submit'>Sign up</button>
        </form>
    )


    return (
        <>

        </>
    )

}
