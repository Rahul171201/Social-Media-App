import './post.css'
import { More, MoreVert } from '@material-ui/icons';
// import { Users } from '../../dummyData';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';

export default function Post({ post }) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [noOfLikes, setNoOfLikes] = useState(0);
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async() => {
            console.log("New Post : " + post.userId);
            const res = await axios.get(`http://localhost:8800/api/user/${post.userId}`);
            console.log(res.data);
            setUser(res.data);
        }
        fetchUser();
    }, [post.userId]);

    function handleLike() {
        if (noOfLikes === 0) {
            setNoOfLikes(1);
        }
        else {
            setNoOfLikes(0);
        }
    }

    return (
        <div className="postContainer">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.profilePic ? PF + user.profilePic : PF + "blackprofile.webp"} className="postProfileImage" alt=""></img>
                        <span className="postUsername">{user.username}</span>
                        <span className="postTime">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className="showMore"></MoreVert>
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postText">{post.desc}</div>
                    <img className="postImage" src={post.img ? PF + post.img : PF + 'blankpost.png'} alt="post"></img>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/heart.png" alt="" className="heartIcon"></img>
                        <img src="/assets/like.png" alt="" className="likeIcon" onClick={handleLike}></img>
                        <span className="likeCounter">{post.like ? post.like + noOfLikes : 0 + noOfLikes} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            {post.comment} comments
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}
