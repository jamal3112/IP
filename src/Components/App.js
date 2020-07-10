import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Navbar from "./Navbar";
import GamePage from "./GamePage";
import Login from "./Login";
import Reg from "./Reg";
import axios from "axios";
import Admin from "./Admin";

const App = () => {
  const [gamePageInfo, setGamePageInfo] = useState({});
  const [gameList, setGameList] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("");

  const handleGamePage = (gameInfo) => {
    setGamePageInfo(gameInfo);
    sessionStorage.setItem("gameInfo", JSON.stringify(gameInfo));
  };

  // Получаем список игр
  useEffect(() => {
    axios.get("http://localhost:3000/games").then((resp) => {
      setGameList(resp.data);
      setGamePageInfo(JSON.parse(sessionStorage.getItem("gameInfo")));
    });
  }, []);

  return (
    <>
      <Router>
        <Navbar
          setSearch={setSearch}
          search={search}
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
          setCat={setCat}
        />

        <div className="container">
          <Switch>
            <Route path="/login">
              <Login setCurrentUser={setCurrentUser} />
            </Route>
            <Route path="/admin">
              <Admin goods={gameList} setGoods={setGameList} />
            </Route>
            <Route path="/reg">
              <Reg />
            </Route>
            <Route path="/gameInfo">
              <GamePage gameInfo={gamePageInfo} />
            </Route>
            <Route path="/">
              <Main
                gameList={gameList}
                handleGamePage={handleGamePage}
                search={search}
                cat={cat}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
