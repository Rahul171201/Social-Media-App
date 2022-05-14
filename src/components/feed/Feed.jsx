import './feed.css';
import Share from '../../components/share/Share';
import Post from '../../components/post/Post';
import {Posts} from '../../dummyData';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async() => {
            const res = await axios.get('http://localhost:8800/api/post/timeline/623314c2a4b89e305cc29f1e');
            console.log(res.data);
            setPosts(res.data);
        }
        fetchPosts();
    }, []);

    return (
        <div className="feed">
            <div className = "feedWrapper">
                <Share></Share>
                {posts.map((p) =>{
                    return <Post key={p._id} post={p}></Post>
                })}
            </div>
        </div>
    )
}
