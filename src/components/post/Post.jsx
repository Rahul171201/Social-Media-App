import './post.css'
import {More, MoreVert} from '@material-ui/icons';
import {Users} from '../../dummyData';

export default function Post({post}) {
    
    let userName = "";
    let userImage = "";
    Users.forEach((element)=>{
        if(element.id === post.userId){
            userImage = element.profilePic;
            userName = element.username;
        }
    }) ;

    return (
        <div className="postContainer">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={userImage} className="postProfileImage" alt=""></img>
                        <span className="postUsername">{userName}</span>
                        <span className="postTime">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert className="showMore"></MoreVert>
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postText">{post.desc}</div>
                    <img className="postImage" src={post.img} alt="post image"></img>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                    <img src="/assets/heart.png" alt="" className="heartIcon"></img>
                    <img src="/assets/like.png" alt="" className="likeIcon"></img>
                    <span className="likeCounter">{post.like} people liked it</span>
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
