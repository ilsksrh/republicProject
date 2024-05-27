import { post } from './api';
import { setUser, removeUser } from './token.service';

const API_URL = '/auth/';

export const login = async (username, password) => {
  try {
    const response = await post(API_URL + 'signin', { username, password });
    if (response.accessToken) {
      setUser(response);
    }
    return response;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const logout = () => {
  removeUser();
};

// export const register = async (username, email, password, confirmPassword) => {
//   try {
//     const response = await post(API_URL + 'signup', { username, email, password, confirmPassword });
//     return response;
//   } catch (error) {
//     console.error('Error registering user:', error);
//     throw error;
//   }
// };

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const authHeader = () => {
  const user = getCurrentUser();
  if (user && user.token) {
      return { Authorization: 'Bearer ' + user.token };
  } else {
      return {};
  }
};
