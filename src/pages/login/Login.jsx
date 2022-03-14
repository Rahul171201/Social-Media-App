import React from 'react';
import './login.css';
import TextField from '@material-ui/core/TextField';

export default function Login() {
    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h1 className="title">Stoklod</h1>
                    <p className="content">Connect with the world around you in a moment!</p>
                    <img className="logoImg" src="/assets/logo.png" alt=""></img>
                </div>
                <div className="loginRight">
                    <div className="loginRightBox">
                    <TextField className="usernameText" id="outlined-basic" variant="outlined" placeholder="Username"/>
                    <TextField className="passwordText" id="outlined-basic" variant="outlined" placeholder="Password"/>
                    <button className="loginButton">Log In</button>
                    <button className="registerButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
