import React, { useState } from 'react';
import { addUser } from "../api";
import {useNavigate } from "react-router-dom";
import foto from '../images/animals.png';
import cancel from '../images/free-icon-close-4096127.png';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const navigate=useNavigate()
  const[user,setUser]=useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
  })
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [confirmError, setConfirmError] = useState('');
  function handle(ex){
      const {name,value}=ex.target;
      setUser({
          ...user,
          [name]: value
      });
  }
  const handleAdd = async (event) => {
      event.preventDefault();
      const response = await addUser(user);
      console.log(response)
      if(response.success){
          navigate("/login")}else{
            if (response.data && response.data.errors) {
              setErrorMessage(response.data.message);
              const errors = {};
              response.data.errors.forEach((error) => {
                if(error.field){
                errors[error.field] = error.defaultMessage;}
                else{
                  setConfirmError(error.defaultMessage)
                }
              });
              setValidationErrors(errors);        } else if(response.data.field){
                setValidationErrors({})
                setErrorMessage({[response.data.field]:response.data.message});                    
                  }else{
                    setValidationErrors({})
            setErrorMessage('An error occurred. Please try again later.');
          } 
          }
  }
  console.log(errorMessage)
  return (
    <div className="login-page">
      <div className="form">
          <form className="register-form" onSubmit={handleAdd}>
            <Link to={"/"}><img src={cancel} height={12} style={{position: "absolute", right: "30px", top: "20px"}} /></Link>
            <h2><i className="fas fa-lock"></i>Регистрация</h2>
            <input type="text" placeholder="username" name="username" value={user.username || ''} onChange={handle}/>
            {validationErrors.username && (
            <p style={{ color: 'red' }}>{validationErrors.username}</p>
          )}
          { errorMessage && (
          <p style={{ color: 'red' }}>{errorMessage.username}</p>
        )}
            <input type="email" placeholder="email" name="email" value={user.email || ''} onChange={handle}/>
            {validationErrors.email && (
            <p style={{ color: 'red' }}>{validationErrors.email}</p>
          )}{ errorMessage.email && (
            <p style={{ color: 'red' }}>{errorMessage.email}</p>
        )}
            <input type="password" placeholder="password" name="password" value={user.password || ''} onChange={handle}/>
            {validationErrors.password && (
            <p style={{ color: 'red' }}>{validationErrors.password}</p>
          )}
            <input type="password" placeholder="confirmpassword" name="confirmPassword" value={user.confirmPassword || ''} onChange={handle}/>
            {confirmError && (
            <p style={{ color: 'red' }}>{confirmError}</p>
          )}
            <button type="submit">Создать</button>
            <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
          </form>
      </div>
    </div>
  );
}
