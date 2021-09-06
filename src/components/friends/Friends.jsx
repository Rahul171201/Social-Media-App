import React from 'react'
import './friends.css';

export default function Friends({user}) {
    return (
        <li className="sidebarFriendListItem">
            <img src={user.profilePic} alt="friend image" className="sidebarFriendImage"></img>
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}
