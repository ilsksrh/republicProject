import { authHeader } from "./auth_service";
import axios from "axios";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const fetchOnePost = async (postId) => {
  try {
    const response = await fetch(`http://localhost:8080/api/posts/${postId}`, {
      headers: authHeader(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const postData = await response.json();
    console.log('Post Data:', postData);

    return postData;
  } catch (error) {
    console.error('Error fetching post:', error.message);
    throw error;
  }
};

export const deletePost = async (postId) => {
    try {
        const response = await fetch(`http://localhost:8080/api/posts/${postId}`, {
            method: 'DELETE',
            headers: authHeader()
        });
        if (response.ok) {
            toast.success('Post deleted successfully');
        }
    } catch (error) {
        console.error('Error deleting post:', error.message);
        toast.error("Error delete post")

    }
};

export const createPost = async (title, photo, description, categoryId) => {
    const userId = JSON.parse(localStorage.getItem('user')).id;
    const newPost = {
        title,
        photo,
        description,
        userId,
        categoryId
    };
    try {
        const response = await axios.post('http://localhost:8080/api/posts', newPost, {
            headers: authHeader()
        });
        if(response.ok){
            toast.success('Post created successfully');
        }
    } catch (error) {
        toast.error("Error create post")
    }
};
