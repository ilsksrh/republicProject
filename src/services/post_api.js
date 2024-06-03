import { authHeader } from "./auth_service";

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

    if (!response.ok) {
      throw new Error(`Failed to delete post: ${response.statusText}`);
    }

    console.log('Post deleted successfully');
    return true;
  } catch (error) {
    console.error('Error deleting post:', error.message);
    throw error;
  }
};


export const likePost = async (userId, postId) => {
  try {
    const response = await fetch(`http://localhost:8080/api/posts/${postId}/like`, {
      method: 'POST',
      headers: authHeader(),
    });

    if (!response.ok) {
      throw new Error('Failed to like post');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error liking post:', error.message);
    throw error;
  }
};

export const unlikePost = async (userId, postId) => {
  try {
    const response = await fetch(`http://localhost:8080/api/users/${userId}/unlike/${postId}`, {
      method: 'POST',
      headers: authHeader(),
    });

    if (!response.ok) {
      throw new Error('Failed to unlike post');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error unliking post:', error.message);
    throw error;
  }
};
