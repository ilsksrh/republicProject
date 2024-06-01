import { authHeader } from "./auth_service";

export const fetchOnePost = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/api/posts/${id}`, {
            headers: authHeader()
        });
        if (response.ok) {
            const postData = await response.json();
            // console.log(postData)
            return postData
        } 
    } catch (error) {
        console.error('Error fetching post:', error.message);
    }
};

export const deletePost = async (postId) => {
    try {
        const response = await fetch(`http://localhost:8080/api/posts/${postId}`, {
            method: 'DELETE',
            headers: authHeader()
        });
        if (response.ok) {
            console.log('Post deleted successfully');
            // navigate('/user');
        }
    } catch (error) {
        console.error('Error deleting post:', error.message);
    }
};