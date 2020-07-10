import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminGoodRow from "./AdminGoodRow";
import AddRow from "./AddRow";

const Admin = ({ goods, setGoods }) => {
  const [users, setUsers] = useState(undefined);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((resp) => {
      setUsers(resp.data);
    });
  }, []);

  const handleDeleteUser = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`).then((resp) => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  return (
    <>
      <h1>Админ</h1>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#goods"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Товары
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profiles"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Пользователи
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="goods"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          {goods !== undefined ? (
            <>
              <ul className="list-group">
                {goods.map((good) => (
                  <AdminGoodRow key={good.id} good={good} setGoods={setGoods} />
                ))}
                {showAdd ? (
                  <AddRow
                    goods={goods}
                    setGoods={setGoods}
                    setShowAdd={setShowAdd}
                  />
                ) : (
                  ""
                )}
              </ul>
              <button
                onClick={() => setShowAdd(true)}
                className="btn btn-primary mt-3"
              >
                Добавить
              </button>
            </>
          ) : (
            "нет товаров"
          )}
        </div>
        <div
          className="tab-pane fade"
          id="profiles"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          {users !== undefined ? (
            <ul className="list-group">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="list-group-item d-flex justify-content-between"
                >
                  {user.login}
                  <button
                    onClick={() => {
                      handleDeleteUser(user.id);
                    }}
                    className="btn btn-danger"
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            "нет пользователей"
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
