import React, { useState } from "react";
import AuthService from "../services/auth.service";
import animalsImage from '../images/animals.png'; 
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    else if (name === "password") setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }

    setLoading(true);

    AuthService.login(username, password)
      .then((response) => {
        console.log(response);
        setLoading(false);
        navigate('/profile');
        window.location.reload();
      })
      .catch((error) => {
        setError("Invalid username or password");
        setLoading(false);
      });
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img src={animalsImage} alt="Animals" />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          {error && <div style={{ color: 'red' }}>{error}</div>}
          {loading ? <div>Loading...</div> : <button className="btn btn-primary btn-block">Login</button>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
