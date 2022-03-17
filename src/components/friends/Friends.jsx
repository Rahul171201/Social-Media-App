import React from 'react'
import './friends.css';


export default function Friends({user}) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
        
    return (
        <li className="sidebarFriendListItem">
            
            <img src={PF + user.profilePic} alt="friend image" className="sidebarFriendImage"></img>
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}
