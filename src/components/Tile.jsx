import React from "react";

const Tile = ({ snake, id, food }) => {
  let snakeBG = false;
  let foodBG = false;

  for (let some in snake) {
    if (snake[some] === id) {
      snakeBG = true;
    }
  }

  if (id === food) {
    foodBG = true;
  }

  return (
    <div
      className={`tile ${snakeBG ? "snake" : ""} ${foodBG ? "food" : ""}`}
    ></div>
  );
};

export default Tile;
