import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ handleGamePage, gameInfo }) => {
  const clickHandle = () => {
    handleGamePage(gameInfo);
  };

  return (
    <div className="col mb-4">
      <div className="card text-center h-100">
        <img
          src="https://cdn-products.eneba.com/resized-products/t0zqmqhdcxppyol3mtlg_390x400_1x-0.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">
            <Link
              onClick={() => {
                handleGamePage(gameInfo);
              }}
              to="gameInfo"
            >
              {gameInfo.name}
            </Link>
          </h5>
          <h5 className="card-title">{gameInfo.cost} руб</h5>
          <button className="btn btn-primary">В корзину</button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
