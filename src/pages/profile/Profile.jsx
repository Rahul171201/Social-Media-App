import './profile.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Info from '../../components/info/Info';
import {React, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

export default function Profile() {

    const [user, setUser] = useState({});
    const params = useParams();
    console.log(params.username);

    useEffect(() => {
        const fetchUser = async() => {
            const res = await axios.get(`http://localhost:8800/api/user/?username=${params.username}`);
            console.log(res);
            setUser(res.data);
        }
        fetchUser();
    }, []);

    return (
        <>
            <Topbar></Topbar>
            <div className="profile">
                <Sidebar></Sidebar>
                <div className="profileRight">
                    <div className=" profileRightTop">
                        <div className="profileCover">
                            <img src={user.coverPic ? "/assets" + user.coverPic : '/assets/blankpost.jpg'} alt="" className="profileCoverImg"></img>
                            <img src={user.profilePic ? "/assets" + user.profilePic : '/assets/blackprofile.webp'} alt="" className="profileUserImg"></img>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDescription">{user.desc}</span>
                        </div>
                    </div>
                    <div className=" profileRightBottom">
                        <Info city={user.city ? user.city : "Unknown"} relationship={user.relationship ? user.relationship : "Single"} name={user.username} about={user.desc ? user.desc : "Unknown"} email={user.email}></Info>
                    </div>
                </div>
            </div>
        </>
    )
}
