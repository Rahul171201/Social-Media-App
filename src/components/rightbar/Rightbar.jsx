import './rightbar.css'
import {Users} from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar() {
    return (
        
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImage"></img>
                    <span className="birthdayText">
                        <b>Riyan Roy</b> and <b>3 others</b> have birthday today
                    </span>
                </div>

                <img src="/assets/ad.jpg" alt="" className="adImage"></img>

                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u)=>{
                        return <Online user={u} key={u.id}></Online>
                    })}
                </ul>
            </div>
        </div>
    )
}
