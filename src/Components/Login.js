import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = ({ setCurrentUser }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [users, setUsers] = useState([{}]);
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    let userExist = false;
    users.map((user) => {
      if (user.login === email && user.pass === pass) {
        userExist = true;
        setShowAlert(false);
      }
    });

    if (userExist) {
      setShowSuccess(true);
      setCurrentUser({ email: email, pass: pass });
      setEmail("");
      setPass("");
    } else {
      setShowSuccess(false);
      setShowAlert(true);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((resp) => {
      setUsers(resp.data);
    });
  }, []);

  return (
    <>
      <h1>Вход</h1>
      {showAlert ? (
        <div className="alert alert-danger" role="alert">
          Неправильный логин или пароль
        </div>
      ) : (
        ""
      )}
      {showSuccess ? (
        <div className="alert alert-success" role="alert">
          Вы успешно вошли
        </div>
      ) : (
        ""
      )}
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email адресс</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Пароль</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button
          onClick={(e) => handleLogin(e)}
          type="submit"
          className="btn btn-primary mr-2"
        >
          Войти
        </button>
        <Link to="/reg" className="btn btn-secondary">
          Регистрация
        </Link>
      </form>
    </>
  );
};

export default Login;
