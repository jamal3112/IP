import React from "react";
import GameCard from "./GameCard";

// Отображает список игр
const Main = ({ gameList, handleGamePage, search, cat }) => {
  return (
    <>
      <h1>Каталог: {cat === "" ? "Все" : cat}</h1>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5">
        {gameList.count === 0
          ? ""
          : gameList
              .filter(
                (game) =>
                  game.name.toLowerCase().includes(search.toLowerCase()) &&
                  (cat === "" || game.cat === cat)
              )
              .map((game) => (
                <GameCard
                  key={game.name + game.id}
                  handleGamePage={handleGamePage}
                  gameInfo={game}
                />
              ))}
      </div>
    </>
  );
};

export default Main;
