import React, { useState } from "react";
import { useDispatch } from "react-redux";

import * as sessionActions from '../../actions/session'

import './SignupForm.css'

export default function SignupForm() {
    const dispatch = useDispatch()
    const [ info, setInfo ] = useState({})
    const [ errors, setErrors ] = useState([])

    const handleInput = e => {
        setInfo({...info, [e.target.name]: e.target.value})
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors([])
        if (info.password === info.checkPass) {
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
        <>
            <form onSubmit={handleSubmit} >
                <ul>
                    {errors.map((e, i) => (
                        <li key={`${e-i}`}>{e}</li>
                    ))}
                </ul>
                <div> Create a new account</div>
                <div> and connect with your special someone.</div>
                <input
                    type='text'
                    name="firstName"
                    placeholder='First name'
                    onChange={handleInput}
                />
                <input
                    type='text'
                    name="lastName"
                    placeholder='Last name'
                    onChange={handleInput}
                />
                <input
                    type='text'
                    name="email"
                    placeholder='Email address'
                    onChange={handleInput}
                />
                {/* <input
                    type='date'
                    name="birthday"
                    placeholder='Birthday'
                    onChange={handleInput}
                /> */}
                <div className="input-label">Birthday</div>
                <div className="birthday-box">
                    <select>
                        <option value={1}>Jan</option>
                        <option value={2}>Feb</option>
                        <option value={3}>Mar</option>
                        <option value={4}>Apr</option>
                        <option value={5}>May</option>
                        <option value={6}>Jun</option>
                        <option value={7}>Jul</option>
                        <option value={8}>Aug</option>
                        <option value={9}>Sep</option>
                        <option value={10}>Oct</option>
                        <option value={11}>Nov</option>
                        <option value={12}>Dec</option>
                    </select>
                    <select>
                        {dayRange().map(el => (
                            <option key={`day-${el}`}>{el}</option>
                        ))}
                    </select>
                    <select>
                        {yearRange().map(el => (
                            <option key={`day-${el}`}>{el}</option>
                        ))}

                    </select>
                </div>
                <div className="input-label">Gender</div>
                <div className="gender-box">
                    <span className="gender">
                        <label for='male'>Female</label>
                        <input type='radio' value='Male' name='gender'/>
                    </span>
                    <span className="gender">
                        <label for='male'>Male</label>
                        <input type='radio' value='Male' name='gender'/>
                    </span>
                    <span className="gender">
                        <label for='male'>Custom</label>
                        <input type='radio' value='Male' name='gender'/>
                    </span>
                </div>
                <input
                    type='text'
                    name="gender"
                    placeholder='Gender'
                    onChange={handleInput}
                />
                <input
                    type='text'
                    name="password"
                    placeholder='Password'
                    onChange={handleInput}
                />
                <input
                    type='text'
                    name="checkPass"
                    placeholder='Confirm password'
                    onChange={handleInput}
                />
                <button type='submit'>Sign up</button>
            </form>
        </>
    )


    return (
        <>
            {form}
        </>
    )

}
