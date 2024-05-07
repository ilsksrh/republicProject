import React, { useState } from "react";
import { isEmail } from "validator";
import animalsImage from '../images/animals.png';
import AuthService from "../services/auth.service";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "confirmPassword") setConfirmPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill all the fields");
      return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must contain at least one digit, one lowercase letter, one special character, and be at least 8 characters long");
      return;
    }

    if (!isEmail(email)) {
      setError("Invalid email format");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    AuthService.register(username, email, password, confirmPassword)
      .then((response) => {
        setSuccessMessage(response.data.message);
        setError("");
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response.data.message);
        setLoading(false);
      });
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img src={animalsImage} alt="Animals" />

        {!successMessage && (
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
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
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

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            {error && <div style={{ color: 'red' }}>{error}</div>}
            {loading ? <div>Loading...</div> : <button className="btn btn-primary btn-block">Sign Up</button>}
          </form>
        )}

        {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      </div>
    </div>
  );
};

export default RegistrationForm;
