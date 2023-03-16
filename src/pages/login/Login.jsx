import React, { useState } from 'react';
import './login.css'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();
    const URL = "https://reqres.in/api/login"

    const userInfo = {
        email: '',
        password: ''
    }

    const [data, setData] = useState(userInfo);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const onChangeFunc = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const loginFunc = async (e) => {
        setLoading(true)
        e.preventDefault()
        const response = await fetch(URL,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

        const res = await response.json()
        if (!res.token) {
            setError(res)
        }
        else {
            localStorage.setItem('token', res.token)
            navigate('/')
        }

        setLoading(false)
    }

    return (
        <div className='container'>
            <div className="login-wrapper">
                <div className="login-left">
                    <div className="form-wrapper">
                        <form className='form' onSubmit={loginFunc}>
                            <h2 className='form-heading'>Welcome</h2>
                            <p className='form-disc'>Enter your Username and Passoword.</p>
                            <div className='inputfield'>
                                <Person2OutlinedIcon style={{ color: '#686687' }} />
                                <input type='text' name='email' values={userInfo.email}
                                    onChange={onChangeFunc} placeholder='Username' />
                            </div>
                            <div className='inputfield'>
                                <LockOutlinedIcon style={{ color: '#686687' }} />
                                <input type={showPassword?'text':'password'} name='password' values={userInfo.password}
                                    onChange={onChangeFunc} placeholder='password' />
                                <RemoveRedEyeOutlinedIcon 
                                style={{ color: '#686687', cursor: 'pointer'}} 
                                onClick={()=>{setShowPassword(!showPassword)}}
                                />
                            </div>
                            <button className='login-btn' type='submit'>
                                {loading ? <CircularProgress style={{ color: 'white', height: '15px', width: '15px' }} /> : 'Login'}</button>
                            <p className='error-message'>{error?.error}</p>
                            <p className='forget-passowrd'>Forgot password?</p>
                        </form>
                    </div>
                    <div className="form-footer">
                        <span className='footer-links'>
                            <p className='footer-link'>
                                Term of Use
                            </p>
                            <p className='footer-link'>
                                Privacy Policy
                            </p>
                        </span>

                        <p>© Punctualiti 2022. All rights reserved</p>
                    </div>
                </div>
                <div className="login-right">
                    <div className="box-wrapper">
                        <div className="box">
                        </div>
                        <div className="box-info">
                            <p className='box-heading'>360° Solution for Asset Management</p>
                            <p className='box-disc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login