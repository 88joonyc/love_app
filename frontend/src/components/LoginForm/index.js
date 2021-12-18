import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import * as sessionActions from '../../actions/session';

import './LoginForm.css'

export default function LoginForm({setLoaded}) {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const  [ credential, setCredential ] = useState('')
    const  [ password, setPassword ] = useState('')
    const  [ errors, setErrors ] = useState([])

    const demoLogin = () => {
        dispatch(sessionActions.login({ 'credential': 'lovey@dove.com', 'password': 'password' }))
        .then(() => setLoaded(true))
    }
    const demoLogin2 = () => {
        dispatch(sessionActions.login({ 'credential': 'lover1@email.com', 'password': 'password' }))
        .then(() => setLoaded(true))
    }
    const demoLogin3 = () => {
        dispatch(sessionActions.login({ 'credential': 'lover2@email.com', 'password': 'password' }))
        .then(() => setLoaded(true))
    }


    if (sessionUser) return (
        <Navigate replace to='/' />
    );

    const handleSubmit = e =>  {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).then(() => setLoaded(true))
            .catch(async res => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    const form = (
        <div className='login-wrapper'>
            <div className='logo-container'>
                <img alt='luvapp-logo' className='luvApp-logo' />
            </div>
            <div className='login-form-container'>
                <div className='loginto-msg'>Log into LuvApp</div>
                <form className='login-form' onSubmit={handleSubmit} >
                    <input
                        type='email'
                        value={credential}
                        onChange={e => setCredential(e.target.value)}
                        required
                        placeholder='Email Address'
                        className='login-input'
                        />
                    <ul>
                        {errors.map((error, idx) =>
                            <div className='login-error' key={idx}>{error}</div>
                        )}
                    </ul>
                    <input
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        placeholder='Password'
                        className='login-input'
                        />
                    <button
                        type='submit'
                        className='login-button'
                    >Log In</button>
                    <div className='demo-group'>
                        <button
                            type='button'
                            className='login-button demo-login'
                            onClick={demoLogin}
                            >Demo User</button>
                        <button
                            type='button'
                            className='login-button demo-login'
                            onClick={demoLogin2}
                            >Demo 2</button>
                        <button
                            type='button'
                            className='login-button demo-login'
                            onClick={demoLogin3}
                            >Demo 2</button>
                    </div>
                </form>
                <div className='or-break'> ━━━━━━━━━━━ or ━━━━━━━━━━━ </div>
                <div className='signup-link-container'>
                    <NavLink className='signup-link' to='/signup'>Dont have an account?</NavLink>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {form}
        </>
    );

};
