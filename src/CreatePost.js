import './css/createform.css';
import { Link } from 'react-router-dom';
import avatar from './images/user.png';
import { useEffect, useState } from "react";
import { addPost, addFile } from "./api";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    
    useEffect(() => {
        if (!user) {
            navigate("/about");
        }
    }, []); // Empty dependency array ensures the effect runs only once on component mount

    const [post, setPost] = useState({
        content: "",
        image: '',
        userId: user ? user.id : null // Ensure user object exists before accessing its id property
    });

    function handle(ex) {
        const { name, value } = ex.target;
        setPost({
            ...post,
            [name]: value
        });
    }

    const handleAdd = async (event) => {
        event.preventDefault();
        try {
            const response = await addPost(post);
            console.log(response);
            navigate(-1);
        } catch (error) {
            console.error("Error adding post or file:", error);
        }
    };

    return (
        <div className="edit-main">
            <div className="edit-post">
                <form className="edit-post-form" encType="multipart/form-data" onSubmit={handleAdd}>
                    <input type="hidden" name="id" />
                    <div className="edit-post-submit">
                        <Link to={-1}>
                            <span>Cancel</span>
                        </Link>
                        <input type="submit" name="save" value="Create" />
                    </div>
                    <div className="edit-post-container">
                        <div className="image_div">
                            <div className="edit-post-profile">
                                <img src={avatar} alt="User Avatar" className="edit-post-user-avatar" />
                                <div>
                                    <div className="edit-post-username">{user ? user.username : ''}</div>
                                </div>
                            </div>
                        </div>
                        <div className="edit-post-main">
                            <div className="edit-post-main-container">
                                <div className="am">
                                    <div className="edit-post-caption">
                                        <textarea className="edit-content" name="content" id="contentInput" placeholder="..." value={post.content || ''} onChange={handle} />
                                    </div>
                                    <div className="edit-post-file"> <input type="url" name="image" onChange={handle} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
