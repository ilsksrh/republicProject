import React, { useState } from "react";
import { isEmail } from "validator";
import animalsImage from '../images/animals.png';
import { registerUser } from "../services/api";
import 'bootstrap/dist/css/bootstrap.min.css';



const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { username, email, password, confirmPassword } = formData;

    if (!username || !email || !password || !confirmPassword) {
      return "Please fill all the fields";
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return "Password must contain at least one digit, one lowercase letter, one special character, and be at least 8 characters long";
    }

    if (!isEmail(email)) {
      return "Invalid email format";
    }

    if (password !== confirmPassword) {
      return "Passwords do not match";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const response = await registerUser(formData);
      setSuccessMessage(response.data.message);
      setError("");
    } catch (error) {
      setError(error.response?.data?.message || "Error registering user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5 h-100">
       <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-lg-8 col-xl-6 ">
    <div className="card rounded-3">
        <img src={animalsImage} className="w-100" alt="Animals" />
        
        <div className="card-body p-4 p-md-5">

        {!successMessage && (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            
          
            {error && <div style={{ color: 'red' }} className="text-center pt-4">{error}</div>}
          <div className="pt-4">

          {loading ? <div className="text-center pt-4">Loading...</div > : <button className="btn btn-primary btn-block">Login</button>}
          </div>
          </form>
        )}
          </div>
             {successMessage && <div style={{ color: 'green' }} className="text-center pb-4">{successMessage}</div>}
      </div>
    </div>
    </div>
    </div>

  );
};

export default Register;