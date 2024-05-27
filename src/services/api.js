import axios from 'axios';
import { getLocalAccessToken } from './token.service';

const API_URL = 'http://localhost:8080/api';
const CATEGORY_API_URL = '/categories';

const getHeaders = () => {
  const token = getLocalAccessToken();
  if (token) {
    return { Authorization: 'Bearer ' + token };
  }
  return {};
};

export const get = async (url) => {
  try {
    const response = await axios.get(API_URL + url, { headers: getHeaders() });
    return response.data;
  } catch (error) {
    console.error('GET request error:', error);
    throw error;
  }
};

export const post = async (url, data) => {
  try {
    const response = await axios.post(API_URL + url, data, { headers: getHeaders() });
    return response.data;
  } catch (error) {
    console.error('POST request error:', error);
    throw error;
  }
};

export const put = async (url, data) => {
  try {
    const response = await axios.put(API_URL + url, data, { headers: getHeaders() });
    return response.data;
  } catch (error) {
    console.error('PUT request error:', error);
    throw error;
  }
};

export const del = async (url) => {
  try {
    const response = await axios.delete(API_URL + url, { headers: getHeaders() });
    return response.data;
  } catch (error) {
    console.error('DELETE request error:', error);
    throw error;
  }
};

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token };
  } else {
    return {};
  }
}

export const registerUser = async (formData) => {
  try {
    const response = await axios.post('http://localhost:8080/api/auth/signup', formData, {
      headers: {
        'Content-Type': 'application/json',
        ...authHeader()
      }
    });

    return response;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}

export const fetchCategories = async () => {
  try {
    return await get(CATEGORY_API_URL);
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    throw error;
  }
};

export const createCategory = async (categoryData) => {
  try {
    return await post(CATEGORY_API_URL, categoryData);
  } catch (error) {
    console.error("Error creating category:", error.message);
    throw error;
  }
};

export const deleteCategory = async (categoryId) => {
  try {
    return await del(`${CATEGORY_API_URL}/${categoryId}`);
  } catch (error) {
    console.error("Error deleting category:", error.message);
    throw error;
  }
};

export const getUserInfo = async (userId) => {
  try {
    return await get(`/users/${userId}`);
  } catch (error) {
    console.error('Error fetching user info:', error.message);
    throw error;
  }
};




// export const doLogin = async (username, password) => {
//   try {
//     const response = await axios.post('http://localhost:8080/api/auth/signin', {
//       username: username,
//       password: password
//     }, {
//       headers: authHeader()
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error logging in:', error);
//     throw error;
//   }
// }

