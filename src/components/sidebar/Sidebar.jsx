import './sidebar.css'
import { RssFeed, Chat, Videocam, Group, Bookmark, Help, Event } from '@material-ui/icons'
import Button from '@material-ui/core/Button';
import Friends from '../friends/Friends';
import {Users} from '../../dummyData';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"></RssFeed>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"></Chat>
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <Videocam className="sidebarIcon"></Videocam>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"></Group>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"></Bookmark>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"></Event>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <Help className="sidebarIcon"></Help>
                        <span className="sidebarListItemText">Help</span>
                    </li>
                </ul>
                <Button variant="contained" color="primary">
                    Show more
                </Button>
                <hr className="sidebarhrline"></hr>
                <ul className="sidebarFriendList">
                    {Users.map((u)=>{
                        return <Friends key={u.id} user={u}></Friends>;
                    })}
                </ul>
            </div>
        </div>
    )
}
