import { useEffect, useState } from 'react';
import Post from './Post';
import { getAllPost ,deletePost} from './api';
import { Link,useNavigate } from 'react-router-dom';
import avatar from './images/user.png';
import postImage from './images/no-image.jpeg';
export default function Posts() {
    const navigate=useNavigate();
    const user=JSON.parse(localStorage.getItem('user'))
    if(!user){
        navigate("/about")
    }
    const [flag, setFlag] = useState(false);
    function changeFlag() {
        setFlag(!flag);
    }
    const [posts, setPost] = useState([]);

    useEffect(() => {
        const getAllData = async () => {
            const response = await getAllPost();
            setPost(response);
        };
        getAllData();
    }, []);
    return (
      <div className='main'>
        <div className='content'>
        {posts.map((item, index) => {
                        const post = item[0];
                        const username = item[1];
                        return (
        <div className="post">
                <div className="post-container">
                    <div className="post-header">
                        <div className="post-profile">
                            <img src={avatar} alt="User Avatar" className="post-user-avatar" />
                            <div>
                                <div className="post-username">{username}</div>
                            </div>
                        </div>
                        <div>
                            <a href="">
                                <div className="post-more">
                                    <span>
                                        <svg aria-label="More options" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>More options</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <img src={post.image} alt="Post Image" className="post-image" />
                    <div className="post-actions">
                        <div class="post-action-icons">
                          <div style={{padding: "6px 4px", borderRadius: "10px"}}>
                            <svg aria-label="Like" className="x1lliihq x1n2onr6 x1cp0k07" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                            <span style={{paddingLeft: "5px"}}>24</span>
                          </div>
                          <div style={{padding: "6px 4px", borderRadius: "10px"}}>
                            <svg aria-label="Comment" className="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                            <span style={{paddingLeft: "5px"}}>1</span>
                          </div>
                        </div>
                        <svg aria-label="Share Post" className="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                    </div>
                    <div className="post-caption">
                        <span className="post-username">{username}</span> <span>{post.content}</span>
                    </div>
                </div>
            </div>
        )})}
        </div>
      </div>
    );
}