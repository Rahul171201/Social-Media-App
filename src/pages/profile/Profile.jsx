import React from 'react';
import './profile.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Info from '../../components/info/Info';

export default function Profile() {
    return (
        <>
            <Topbar></Topbar>
            <div className="profile">
                <Sidebar></Sidebar>
                <div className="profileRight">
                    <div className=" profileRightTop">
                        <div className="profileCover">
                            <img src="/assets/posts/post1.jpg" alt="" className="profileCoverImg"></img>
                            <img src="/assets/persons/person1.jfif" alt="" className="profileUserImg"></img>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Rahul</h4>
                            <span className="profileInfoDescription">Exploring Life with the thought of being alone but independent. Soon to reach my goal!</span>
                        </div>
                    </div>
                    <div className=" profileRightBottom">
                        <Info></Info>
                    </div>
                </div>
            </div>
        </>
    )
}
