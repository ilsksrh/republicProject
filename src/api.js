// api.js
import axios from 'axios';

export const authHeaders = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.accessToken) {
        return { Authorization: "Bearer " + user.accessToken }
    } else {
        return {}
    }
}
export const url = "localhost"
export async function getOneUser(stuId) {
    try {
        const response = await axios.get('http://'+url+':8080/home/user/' + stuId, { headers: authHeaders() });
        return response.data
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}
export async function getUserByUsername(stuId) {
    try {
        const response = await axios.get('http://'+url+':8080/home/users/' + stuId, { headers: authHeaders() });
        return { success: true, data: response.data }
    } catch (error) {
        return { success: false, data: error.response.data }
    }
}
export async function deletePost(id){
    const response=await axios.delete('http://localhost:8080/home/post/'+id,{headers:authHeaders()});
    console.log(response)
    return response.data
}
export async function updateUser(id,userData) {
    try {
        console.log(id)
        const response = await axios.put('http://'+url+':8080/home/user/' + id, userData, { headers: authHeaders() });
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error.response);
        throw error;
    }
}

export async function addPost(spe) {
    try {
        const response = await axios.post('http://'+url+':8080/home/post', spe, { headers: authHeaders() });
        return response.data;
    } catch (error) {
        console.error('Error adding post:', error.response);
        throw error;
    }
}

export async function addFile(spe) {
    try {
        const response = await axios.post('http://'+url+':8080/home/upload', spe, { headers: authHeaders() });
        return response.data;
    } catch (error) {
        console.error('Error adding file:', error.response);
        throw error;
    }
}

export async function getAllPost() {
    try {
        const response = await axios.get('http://'+url+':8080/home/posts', { headers: authHeaders() });
        return response.data
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}
export async function imageQuery(spe) {
    try {
        const response = await axios.get('http://'+url+':8080/home/image/'+spe, { headers: authHeaders() });
        return response.data
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}
export async function getOnePost(stuId) {
    try {
        const response = await axios.get('http://'+url+':8080/home/post/' + stuId, { headers: authHeaders() });
        return response.data
    } catch (error) {
        console.error('Error fetching post:', error);
        throw error;
    }
}
export async function addAvatar(id,spe) {
    try {
        const response = await axios.put('http://'+url+':8080/home/user/avatar/'+id, spe,{ headers: authHeaders() });
        return { success: true, data: response.data }
    } catch (error) {
        console.error('Error adding user:', error.response);
        return { success: false, data: error.response.data }
    }
}
export async function addUser(spe) {
    try {
        const response = await axios.post('http://'+url+':8080/auth/register', spe);
        return { success: true, data: response.data }
    } catch (error) {
        console.error('Error adding user:', error.response);
        return { success: false, data: error.response.data }
    }
}

export async function login(spe) {
    try {
        const response = await axios.post('http://'+url+':8080/auth/login', spe);
        localStorage.setItem("user", JSON.stringify(response.data))
        return { success: true, data: "You have registered" };
    } catch (error) {
        console.error('Error logging in:', error.response);
        return { success: false, data: error.response.data }
    }
}
