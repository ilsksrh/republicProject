import axios from 'axios';
import { getLocalAccessToken } from './token.service';

const getHeaders = () => {
  const token = getLocalAccessToken();
  if (token) {
    return { Authorization: 'Bearer ' + token };
  }
  return {};
};

export const get = async (url) => {
  try {
    const response = await axios.get(url, { headers: getHeaders() });
    return response.data;
  } catch (error) {
    console.error('GET request error:', error);
    throw error;
  }
};

export const post = async (url, data) => {
  try {
    const response = await axios.post(url, data, { headers: getHeaders() });
    return response.data;
  } catch (error) {
    console.error('POST request error:', error);
    throw error;
  }
};

export const put = async (url, data) => {
  try {
    const response = await axios.put(url, data, { headers: getHeaders() });
    return response.data;
  } catch (error) {
    console.error('PUT request error:', error);
    throw error;
  }
};

export const del = async (url) => {
  try {
    const response = await axios.delete(url, { headers: getHeaders() });
    return response.data;
  } catch (error) {
    console.error('DELETE request error:', error);
    throw error;
  }
};

export const fetchPosts = async (categoryId = null, userId = null, searchTerm = '') => {
  try {
    let url = 'http://localhost:8080/api/posts';
    const params = [];
    if (categoryId) {
      params.push(`categoryId=${categoryId}`);
    }
    if (userId) {
      params.push(`userId=${userId}`);
    }
    if (searchTerm) {
      params.push(`keyword=${searchTerm}`);
    }
    if (params.length > 0) {
      url += '?' + params.join('&');
    }
    return await get(url);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    throw error;
  }
};

export const getUserInfo = async (userId) => {
  try {
    return await get(`http://localhost:8080/api/users/${userId}`);
  } catch (error) {
    console.error('Error fetching user info:', error.message);
    throw error;
  }
};
