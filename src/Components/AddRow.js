import React, { useState } from "react";
import axios from "axios";

const AddRow = ({ goods, setGoods, setShowAdd }) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [count, setCount] = useState("");
  const [cat, setCat] = useState("");

  const handleAdd = () => {
    axios
      .post("http://localhost:3000/games", {
        id: goods.count + 1,
        img: "",
        name: name,
        cost: cost,
        description: "lorem ipsun",
        count: count,
        cat: cat,
      })
      .then((res) => {
        console.log(res);
        axios.get("http://localhost:3000/games").then((res) => {
          setGoods(res.data);
          setShowAdd(false);
        });
      });
  };

  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <p>
          Название:{" "}
          <input
            className="form"
            placeholder="введите название"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <select value={cat} onChange={(e) => setCat(e.target.value)}>
            <option value="">Выберите платформу</option>
            <option value="ps">playstation</option>
            <option value="xbox">xbox</option>
            <option value="switch">switch</option>
          </select>
        </p>
        <p>
          Цена:{" "}
          <input
            className="form"
            placeholder="введите цену"
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />{" "}
          руб
        </p>
        <p>
          Количество:{" "}
          <input
            className="form"
            placeholder="введите количество"
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </p>
        <button
          onClick={() => {
            handleAdd();
          }}
          className="btn btn-primary"
        >
          V
        </button>
      </li>
    </>
  );
};

export default AddRow;
