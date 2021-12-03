import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import * as sessionActions from '../../actions/session';

export default function LoginForm() {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const  [ credential, setCredential ] = useState('')
    const  [ password, setPassword ] = useState('')
    const  [ errors, setErrors ] = useState([])

    if (sessionUser) return (
        <Navigate replace to='/' />
    );

    const handleSubmit = e =>  {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async res => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    const form = (
        <form onSubmit={handleSubmit} >
            <ul>
                {errors.map((error, idx) =>
                    <li key={idx}>{error}</li>
                )}
            </ul>
            <input
                type='text'
                value={credential}
                onChange={e => setCredential(e.target.value)}
                required
            />
            <input
                type='text'
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
            <button type='submit'>Login</button>
        </form>
    );

    return (
        <>
            {form}
        </>
    );

};
