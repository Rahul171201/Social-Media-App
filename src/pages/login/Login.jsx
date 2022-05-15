import React, { useRef } from 'react';
import './login.css';
import TextField from '@material-ui/core/TextField';

export default function Login() {

    const email = useRef();
    const password = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        console.log(email.current.value);
    }

    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h1 className="title">Stoklod</h1>
                    <p className="content">Connect with the world around you in a moment!</p>
                    <img className="logoImg" src="/assets/logo.png" alt=""></img>
                </div>
                <div className="loginRight">

                    <form onSubmit={handleClick} className="loginRightBox">
                        <input className="usernameText" id="outlined-basic" variant="outlined" placeholder="Email" type='email' ref={email} required/>
                        <input className="passwordText" id="outlined-basic" variant="outlined" placeholder="Password" type='password' ref={password} required/>
                        <button className="loginButton">Log In</button>
                        <button className="registerButton">Create a New Account</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
