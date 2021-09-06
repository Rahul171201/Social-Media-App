import './share.css';
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';
import Button from '@material-ui/core/Button'

export default function Share() {
    return (
        <div className="shareContainer">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/persons/person1.jfif" alt="profile image" className="shareImage"></img>
                    <input placeholder="What's on your mind?" className="shareInput"></input>
                </div>
                <hr className="shareHr"></hr>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOptionsItem">
                            <PermMedia className="shareOptionIcon"></PermMedia>
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOptionsItem">
                            <Label htmlColor="blue" className="shareOptionIcon"></Label>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOptionsItem">
                            <Room htmlColor="green" className="shareOptionIcon"></Room>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOptionsItem">
                            <EmojiEmotions htmlColor="yellow" className="shareOptionIcon"></EmojiEmotions>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                </div>
                <Button variant="contained" color="secondary" className="shareButton">
                    Share
                </Button>
            </div>
        </div>
    )
}
