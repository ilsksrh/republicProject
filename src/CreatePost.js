import './css/createform.css';
import { Link ,useNavigate} from 'react-router-dom';
import avatar from './images/user.png';
import { useEffect, useState } from "react";
import { addPost, getOneUser } from "./api"; 

export default function CreatePost() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!user) {
                    navigate("/about");
                } else {
                    const response = await getOneUser(user.id);
                    setUserData(response);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                // Handle error or navigate to another page if needed
            }
        };
        fetchData();
    }, [user, navigate]);

    const [post, setPost] = useState({
        content: "",
        image: null,
        userId: user ? user.id : null 
    });

    const handle = (event) => {
        const { name, value } = event.target;
        setPost({
            ...post,
            [name]: value
        });
    };

    const handleFileChange = (event) => {
        setPost({
            ...post,
            image: event.target.files[0]
        });
    };

    const handleAdd = async (event) => {
        event.preventDefault();
        try {
            if (!user) {
                console.error("No user found");
                return;
            }
            
            const formData = new FormData();
            formData.append('file', post.image);
            formData.append('userId', post.userId);
            formData.append('content', post.content);
            
            const response = await addPost(formData);
            navigate("/post");
        } catch (error) {
            console.error("Error adding post:", error);
        }
    };

    return (
        <div className="edit-main">
            <div className="edit-post">
                <form className="edit-post-form" onSubmit={handleAdd} enctype='multipart/form-data'>
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
                                <img src={userData && userData.image ? `http://localhost:8080/image/${userData.image.name}` : avatar} alt="User Avatar" className="edit-post-user-avatar" />
                                <div>
                                    <div className="edit-post-username">{user ? user.username : ''}</div>
                                </div>
                            </div>
                        </div>
                        <div className="edit-post-main">
                            <div className="edit-post-main-container">
                                <div className="am">
                                    <div className="edit-post-caption">
                                        <textarea className="edit-content" name="content" id="contentInput" placeholder="..." value={post.content} onChange={handle} />
                                    </div>
                                    <div className="edit-post-file">
                                        <input type="file" name="image" onChange={handleFileChange} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
