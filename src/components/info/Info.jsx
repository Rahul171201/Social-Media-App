import React from 'react';
import './info.css';

export default function Info(props) {
    return (
        <div className="infoContainer">
            <h3 className="infoheader">Name :   <span className="info">{props.name}</span> </h3>
            <h3 className="infoheader">Email :   <span className="info">{props.email}</span> </h3>
            <h3 className="infoheader">City :   <span className="info">{props.city}</span> </h3>
            <h3 className="infoheader">About :   <span className="info">{props.about}</span> </h3>
            <h3 className="infoheader">Relationship Status :   <span className="info">{props.relationship}</span> </h3>
        </div>
    )
}
