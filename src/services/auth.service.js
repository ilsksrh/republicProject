import api from "./api";
import TokenService from "./token.service";

class AuthService {
  login(username, password) {
    return api
      .post("/auth/signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          TokenService.setUser(response.data);
        }

        return response.data;
      });
  }

  logout() {
    TokenService.removeUser();
  }

  register(username, email, password, confirmPassword) {
    return api.post("/auth/signup", {
      username,
      email,
      password,
      confirmPassword
    });
  }
  

  getCurrentUser() {
    return TokenService.getUser();
  }

  updateUser(user) {
    TokenService.updateUser(user);
  }
  
}

export default new AuthService();