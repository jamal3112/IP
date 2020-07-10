import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ search, setSearch, setCurrentUser, currentUser, setCat }) => {
  const handleExit = () => {
    setCurrentUser();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        GamePoint
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown mr-5">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Категории
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a onClick={() => setCat("")} className="dropdown-item">
                Все
              </a>
              <a onClick={() => setCat("ps")} className="dropdown-item">
                PlayStation
              </a>
              <a onClick={() => setCat("xbox")} className="dropdown-item">
                Xbox
              </a>
              <a onClick={() => setCat("switch")} className="dropdown-item">
                Switch
              </a>
            </div>
          </li>
          <li>
            <form className="form-inline my-2 my-lg-0">
              <div className="col pl-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="GTA 5"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
            </form>
          </li>
        </ul>
        {/* TODO: make btn-block on smartphones */}
        {currentUser !== undefined ? (
          <>
            <h5>Здраствуйте {currentUser.email}</h5>
            <button className="btn btn-secondary ml-2" onClick={handleExit}>
              Bыход
            </button>
          </>
        ) : (
          <Link to="login" className="btn btn-primary">
            Вход
          </Link>
        )}
        {currentUser !== undefined && currentUser.email === "admin" ? (
          <Link to="admin" className="btn btn-primary ml-2">
            Редактировать
          </Link>
        ) : currentUser !== undefined ? (
          <Link to="store" className="btn btn-primary ml-2">
            Корзина
          </Link>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;
