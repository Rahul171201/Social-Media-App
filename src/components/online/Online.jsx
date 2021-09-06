import React from 'react';
import './online.css';

export default function Online({user}) {
    return (
            <li className="rightbarFriendItem">
                <div className="rightbarImageContainer">
                    <img src={user.profilePic} className="rightbarProfileImage" alt=""></img>
                    <div className="rightbarOnline"></div>
                </div>
                <span className="rightbarUsername">{user.username}</span>
            </li>
    )
}
