import React, { useState, useEffect } from "react";
import axios from "axios";

const Reg = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [users, setUsers] = useState([{}]);
  const [showAlert, setShowAlert] = useState(false);

  const handleReg = (e) => {
    e.preventDefault();
    // Проверка существования пользователя
    let userExist = false;
    users.map((user) => {
      if (user.login === email) {
        userExist = true;
        setShowAlert(true);
      }
    });
    // Регистрация нового пользователя
    if (!userExist) {
      axios.post("http://localhost:3000/users", {
        id: users.count + 1,
        login: email,
        pass: pass,
      });
      setEmail("");
      setPass("");
      setShowAlert(false);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((resp) => {
      setUsers(resp.data);
    });
  }, []);

  return (
    <>
      <h1>Регистрация</h1>
      {showAlert ? (
        <div className="alert alert-danger" role="alert">
          Такой пользователь уже есть
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
          onClick={(e) => {
            handleReg(e);
          }}
          className="btn btn-primary mr-2"
        >
          Зарегистрироваться
        </button>
      </form>
    </>
  );
};

export default Reg;
