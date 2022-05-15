import React, { useRef } from 'react';
import './register.css';
import TextField from '@material-ui/core/TextField';
import { use } from 'express/lib/application';

export default function Register() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmpassword = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        console.log(email.current.value);
    }

    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h1 className="titletemp">Stoklod</h1>
                    <p className="content">Connect with the world around you in a moment!</p>
                    <img className="logoImg" src="/assets/logo.png" alt=""></img>
                </div>
                <div className="loginRight">

                    <form onSubmit={handleClick} className="loginRightBox">
                        <input className="usernameTexttemp" id="outlined-basic" variant="outlined" placeholder="Username" required ref={username}/>
                        <input className="emailTexttemp" id="outlined-basic" variant="outlined" placeholder="Email" type='email' required ref={email}/>
                        <br></br>
                        <input className="passwordTexttemp" id="outlined-basic" variant="outlined" placeholder="Password" type='password' required ref={password}/>
                        <br></br>
                        <input className="confirmPasswordTexttemp" id="outlined-basic" variant="outlined" placeholder="Confirm Password" type='password' required ref={confirmpassword}/>
                        <button className="registerButtontemp">Sign Up</button>
                        <button className="loginButtontemp">Login Into Account</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
