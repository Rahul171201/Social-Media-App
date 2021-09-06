import './feed.css';
import Share from '../../components/share/Share';
import Post from '../../components/post/Post';
import {Posts} from '../../dummyData';

export default function Feed() {
    return (
        <div className="feed">
            <div className = "feedWrapper">
                <Share></Share>
                {Posts.map((p) =>{
                    return <Post key={p.id} post={p}></Post>
                })}
            </div>
        </div>
    )
}
