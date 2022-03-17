import React from 'react';
import './online.css';

export default function Online({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
            <li className="rightbarFriendItem">
                <div className="rightbarImageContainer">
                    <img src={PF + user.profilePic} className="rightbarProfileImage" alt=""></img>
                    <div className="rightbarOnline"></div>
                </div>
                <span className="rightbarUsername">{user.username}</span>
            </li>
    )
}
