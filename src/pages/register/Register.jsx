import React from 'react';
import './register.css';
import TextField from '@material-ui/core/TextField';

export default function Register() {
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
                    <TextField className="emailText" id="outlined-basic" variant="outlined" placeholder="Email"/>
                    <TextField className="passwordText" id="outlined-basic" variant="outlined" placeholder="Password"/>
                    <TextField className="confirmPasswordText" id="outlined-basic" variant="outlined" placeholder="Confirm Password"/>
                    <button className="registerButton">Sign Up</button>
                    <button className="loginButton">Login Into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
