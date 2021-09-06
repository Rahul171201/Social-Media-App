import "./topbar.css";
import {Search} from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import {Person, Chat, Notifications} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Stoklod</span>
            </div>
        
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"></Search>
                    <input placeholder="Search for friends,posts,..." className="searchInput"></input>
                </div>
            </div>

            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLinkItem">Homepage</span>
                    <span className="topbarLinkItem">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem"><Person />
                    <span className="topbarIconBadge">49</span>
                    </div>
                    <div className="topbarIconItem"><Chat />
                    <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem"><Notifications />
                    <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                    <img src="/assets/persons/person1.jfif" alt="profile picture" className="topbarImage"></img>
            </div>
        </div>
    )
}
