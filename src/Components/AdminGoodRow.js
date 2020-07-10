import React, { useState } from "react";
import axios from "axios";

const AdminGoodRow = ({ good, setGoods }) => {
  const [costInput, setCostInput] = useState(good.cost);
  const [countInput, setCountInput] = useState(good.count);
  const [sub, setSub] = useState(false);

  const handleUpdate = () => {
    axios
      .put(`http://localhost:3000/games/${good.id}`, {
        ...good,
        cost: costInput,
        count: countInput,
      })
      .then((res) => {
        axios
          .get("http://localhost:3000/games")
          .then((res) => setGoods(res.data));
        setSub(false);
      });
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/games/${good.id}`).then((resp) => {
      axios
        .get("http://localhost:3000/games")
        .then((res) => setGoods(res.data));
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <p className="mr-2">{good.name}</p>
      <p>
        Цена:{" "}
        <input
          type="number"
          value={costInput}
          onChange={(e) => {
            setSub(true);
            setCostInput(e.target.value);
          }}
        />{" "}
        руб
      </p>
      <p>
        Количество:{" "}
        <input
          type="number"
          value={countInput}
          onChange={(e) => {
            setSub(true);
            setCountInput(e.target.value);
          }}
        />
      </p>
      {sub ? (
        <button
          onClick={() => {
            handleUpdate();
          }}
          className="btn btn-primary"
        >
          V
        </button>
      ) : (
        <button
          onClick={() => {
            handleDelete();
          }}
          className="btn btn-danger"
        >
          X
        </button>
      )}
    </li>
  );
};

export default AdminGoodRow;
