import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from '../../actions/session'

export default function SignupForm() {
    const dispatch = useDispatch()
    const [ info, setInfo ] = useState({})
    const [ errors, setErrors ] = useState([])

    const handleInput = e => {
        setInfo({...info, [e.target.name]: e.target.value})
        console.log(info)
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors([])
        return dispatch(sessionActions.signup(info))
            .catch(async res => {
                const data = await res.json()
                if (data && data.errors) setErrors(data.errors);
            })
    };

    const form = (
        <form onSubmit={handleSubmit} >
            <input
                type='text'
                name="email"
                placeholder='Email Address'
                onChange={handleInput}
            />
            <input
                type='text'
                name="password"
                placeholder='Password'
                onChange={handleInput}
            />
            <button type='submit'>Sign up</button>
        </form>
    )


    return (
        <>
            {form}
        </>
    )

}
