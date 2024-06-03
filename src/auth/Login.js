import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import animalsImage from '../images/animals.png';
import { login } from "../services/auth_service";
import { getCurrentUser } from "../services/auth_service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;

    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }

    setLoading(true);

    try {
      const response = await login(username, password);
      setLoading(false);
      const user = getCurrentUser();
      if (user && user.accessToken) {
        console.log("Token activated:", user.accessToken);
        localStorage.setItem('showToast', 'true');
        navigate('/profile');
        window.location.reload()
      } else {
        setError("Login failed, no token found");
      }
    } catch (error) {
      setError("Invalid username or password");
      setLoading(false);
    }
  };

  const showToastReg = localStorage.getItem('showToastReg');
  if (showToastReg) {
    toast.success("Registration successful! Please login.");
    localStorage.removeItem('showToastReg');
  }

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-8 col-xl-6 ">
          <div className="card rounded-3">
            <img src={animalsImage} alt="Animals" className="mb-3" />
            <div className="card-body p-4 p-md-5">
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
                {error && <div style={{ color: 'red' }} className="text-center pt-4">{error}</div>}
                <div className="pt-4">
                  {loading ? <div className="text-center pt-4">Loading...</div> : <button className="btn btn-success btn-block">Login</button>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Include ToastContainer component here */}
    </div>
  );
};

export default LoginForm;
