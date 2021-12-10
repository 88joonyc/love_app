import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import * as sessionActions from '../../actions/session'

import './SignupForm.css'

export default function SignupForm() {
    const dispatch = useDispatch()
    const [ bday, setBday ] = useState({})
    const [ info, setInfo ] = useState({})
    const [ errors, setErrors ] = useState([])
    const [ custom, setCustom ] = useState(false)
    const [ sex, toggleSex ] = useState("")

    const handleBday = e => {
        setBday({...bday, [e.target.name]: e.target.value})
    }

    const handleInput = e => {
        setInfo({...info, [e.target.name]: e.target.value})
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors([])

        const bdayd = `${bday.year}-${bday.month}-${bday.day}`
        setInfo({...info, 'birthday': bdayd})

        if (info.password === info.checkPass && bday.month && bday.day && bday.year) {
            return dispatch(sessionActions.signup(info))
                .catch(async res => {
                    const data = await res.json()
                    if (data && data.errors) setErrors(data.errors);

                })
            }
    };
    const date = new Date()

    const dayRange = () => {
        let a = []
        for (let i = 1; i <= 31; i++) {
            a.push(i)
        }
        return a
    }

    const yearRange = () => {
        let a = []
        for (let i = 1905; i <= date.getFullYear(); i++) {
            a.push(i)
        }
        return a
    }

    const form = (
        <div className="login-wrapper">
            <div className='logo-container'>
                <img className='luvApp-logo' />
            </div>
            <div className="signup-form-container">

                <form className="signup-form" onSubmit={handleSubmit} >
                    <ul>
                        {errors.map((e, i) => (
                            <div key={`${e-i}`}>{e}</div>
                            ))}
                    </ul>
                    <div className="signup-top-msg"> Create a new account</div>
                    <div className="signup-msg"> and connect with your special someone.</div>
                    <div className="name-container">
                        <input
                            type='text'
                            name="firstName"
                            placeholder='First name'
                            onChange={handleInput}
                            className="signup-input signup-name"
                        />
                        <input
                            type='text'
                            name="lastName"
                            placeholder='Last name'
                            onChange={handleInput}
                            className="signup-input signup-name"
                        />
                    </div>
                    <input
                        type='text'
                        name="email"
                        placeholder='Email address'
                        onChange={handleInput}
                        className="signup-input signup-email"
                    />
                    <div className="input-label">Birthday</div>
                    <div className="birthday-box" className=''>
                        <select className='signup-select' onChange={handleBday} name='month'>
                            <option value={1}>Jan</option>
                            <option value={2}>Feb</option>
                            <option value={3}>Mar</option>
                            <option value={4}>Apr</option>
                            <option value={5}>May</option>
                            <option value={6}>Jun</option>
                            <option value={'07'}>Jul</option>
                            <option value={'08'}>Aug</option>
                            <option value={'09'}>Sep</option>
                            <option value={'Oct'}>Oct</option>
                            <option value={'Nov'}>Nov</option>
                            <option value={'Dec'}>Dec</option>
                        </select>
                        <select className='signup-select' onChange={handleBday} name='day'>
                            {dayRange().map(el => (
                                <option value={el} key={`day-${el}`}>{el}</option>
                                ))}
                        </select>
                        <select className='signup-select' onChange={handleBday} name='year'>
                            {yearRange().reverse().map(el => (
                                <option value={el} key={`day-${el}`}>{el}</option>
                                ))}
                        </select>
                    </div>
                    <div className="input-label">Gender</div>
                    <div className="gender-box">
                        <span className="signup-gender" onChange={handleInput, () => setCustom(false)}>
                            <label for='male'>Female</label>
                            <input type='radio' value='female' name='gender'/>
                        </span>
                        <span className="signup-gender" onChange={handleInput, () => setCustom(false)}>
                            <label for='male'>Male</label>
                            <input type='radio' value='male' name='gender'/>
                        </span>
                        <span className="signup-gender" onChange={() => setCustom(true)}>
                            <label for='male'>Custom</label>
                            <input type='radio' value='custom' name='gender'/>
                        </span>
                    </div>
                    {custom && <input
                        type='text'
                        name="gender"
                        placeholder='Gender (optional)'
                        onChange={handleInput}
                        className="signup-input signup-gender-input"
                    />}
                    <br />
                    <input
                        type='password'
                        name="password"
                        placeholder='Password'
                        onChange={handleInput}
                        className="signup-input"
                        required
                    />
                    <input
                        type='password'
                        name="checkPass"
                        placeholder='Confirm password'
                        onChange={handleInput}
                        className="signup-input"
                        required
                    />
                    <br />
                    <button className="signup-button" type='submit'>Sign up</button>
                </form>
                <div className="login-signup">
                    <NavLink className='signup-loginto' to='/login'>Log into your account</NavLink>
                </div>
            </div>
        </div>
    )


    return (
        <>
            {form}
        </>
    )

}
