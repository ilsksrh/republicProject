import React, { useState} from 'react';
import { login ,url} from "../api";
import foto from '../images/animals.png';
import cancel from '../images/free-icon-close-4096127.png';
import { Link,useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
      username: "",
      password: ""
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  function handle(ex) {
      const { name, value } = ex.target;
      setUser({
          ...user,
          [name]: value
      });
  }
  const handleAdd = async (event) => {
    event.preventDefault();
    const response = await login(user);
    console.log(response);
    if(response.success){
      navigate("/")}else{
        if (response.data && response.data.errors) {
          const errors = {};
          response.data.errors.forEach((error) => {
            console.log(error.defaultMessage)
            errors[error.field] = error.defaultMessage;
            setErrorMessage('');
          });
          setValidationErrors(errors);        } else {
          setValidationErrors({})
          setErrorMessage('Логин или пароль неверный');
        }
      }
}

  return (
    <div className="login-page">
      <div className="form">
        {
          console.log(url)
        }
        <form className="login-form" method="post" onSubmit={handleAdd}>
          <img src={foto} height={60} style={{position: "absolute", left: "50px", top: "80px"}} />
          <Link to={"/"}><img src={cancel} height={12} style={{position: "absolute", right: "30px", top: "20px"}} /></Link>
          <h2 style={{paddingBottom: "30px"}}><i className="fas fa-lock"></i>Вход</h2>
          <input type="text" placeholder="username" name="username" value={user.username || ''} onChange={handle}/>
          {validationErrors.username && (
            <p style={{ color: 'red' }}>{validationErrors.username}</p>
          )}
          <input type="password" placeholder="password" name="password" value={user.password || ''} onChange={handle}/>
          {validationErrors.password && (
            <p style={{ color: 'red' }}>{validationErrors.password}</p>
          )}
          {errorMessage && (
            <p style={{ color: 'red' }}>{errorMessage}</p>
          )}
          <button type="submit" name="send2">Войти</button>
          <p className="message">Not registered? <Link to={"/register"}>Создать аккаунт?</Link></p>
        </form>
      </div>
    </div>
  );
}
