import React from 'react';
import './info.css';

export default function Info() {
    return (
        <div className="infoContainer">
            <h3 className="infoheader">Gender :   <span className="info">Male</span> </h3>
            <h3 className="infoheader">Age :   <span className="info">20</span> </h3>
            <h3 className="infoheader">DOB :   <span className="info">17-12-2001</span> </h3>
            <h3 className="infoheader">Contact :   <span className="info">9337094734</span> </h3>
            <h3 className="infoheader">Holiday :   <span className="info">None</span> </h3>
        </div>
    )
}
