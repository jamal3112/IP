import React from "react";

// Подробная информация об игре
const GamePage = ({ gameInfo }) => {
  return (
    <div className="row row-cols-2 pt-2">
      <img
        src="https://cdn-products.eneba.com/resized-products/t0zqmqhdcxppyol3mtlg_390x400_1x-0.jpg"
        className="rounded img-fluid"
      />
      <div className="col">
        <h1>{gameInfo.name}</h1>
        <div>
          <h2>{gameInfo.cost} руб</h2>
          <button className="btn btn-primary">В корзину</button>
        </div>
        <h3>Осталось: {gameInfo.count}</h3>
        <h3>Платформа: {gameInfo.cat}</h3>
        <h3>Описание:</h3>
        <p>{gameInfo.description}</p>
      </div>
    </div>
  );
};

export default GamePage;
