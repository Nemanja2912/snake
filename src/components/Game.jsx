import React, { useEffect, useState } from "react";
import Tile from "./Tile";

let currentArr = [];

for (let i = 0; i < 400; i++) {
  currentArr.push(i);
}

let interval;

const Game = () => {
  const [snakePos, setPos] = useState({ 0: 0 });
  const [direction, setDirection] = useState("ArrowRight");
  const [food, setFood] = useState(60);

  const checkSuicide = () => {
    let num = Object.keys(snakePos).length - 1;

    console.log(snakePos, food);

    for (let i = 0; i < num; i++) {
      if (snakePos[i] === snakePos[num]) {
        alert("Game Over");
        window.location.reload(true);
      }
    }
  };

  const getFood = () => {
    let num = Object.keys(snakePos).length - 1;

    if (snakePos[num] === food) {
      let newObj = {};
      newObj[0] = -1;
      for (let i = num + 1; i > 0; i--) {
        newObj[i] = snakePos[i - 1];
      }

      let randomNum;

      const getRandom = () => {
        randomNum = Number((Math.random() * 400).toFixed());

        let loop = false;

        for (let key in snakePos) {
          if (randomNum === snakePos[key]) {
            loop = true;
          }
        }

        loop ? getRandom() : setFood(randomNum);
      };

      getRandom();

      setPos({ ...newObj });
    }
  };

  const move = (way) => {
    if (way === "ArrowRight" && direction !== "ArrowLeft") {
      setPos((prev) => {
        let newObj = {};
        for (let key in prev) {
          if (Object.keys(prev).length - 1 === Number(key)) {
            if ((prev[key] + 1) % 20 === 0) {
              newObj[key] = prev[key] - 19;
            } else {
              newObj[key] = prev[key] + 1;
            }
          } else {
            newObj[key] = prev[Number(key) + 1];
          }
        }

        return newObj;
      });

      setDirection("ArrowRight");
    }

    if (way === "ArrowLeft" && direction !== "ArrowRight") {
      setPos((prev) => {
        let newObj = {};
        for (let key in prev) {
          if (Object.keys(prev).length - 1 === Number(key)) {
            if (prev[key] % 20 === 0) {
              newObj[key] = prev[key] + 19;
            } else {
              newObj[key] = prev[key] - 1;
            }
          } else {
            newObj[key] = prev[Number(key) + 1];
          }
        }

        return newObj;
      });

      setDirection("ArrowLeft");
    }

    if (way === "ArrowDown" && direction !== "ArrowUp") {
      setPos((prev) => {
        let newObj = {};
        for (let key in prev) {
          if (Object.keys(prev).length - 1 === Number(key)) {
            if (prev[key] + 20 >= 400) {
              newObj[key] = prev[key] - 380;
            } else {
              newObj[key] = prev[key] + 20;
            }
          } else {
            newObj[key] = prev[Number(key) + 1];
          }
        }

        return newObj;
      });

      setDirection("ArrowDown");
    }

    if (way === "ArrowUp" && direction !== "ArrowDown") {
      setPos((prev) => {
        let newObj = {};
        for (let key in prev) {
          if (Object.keys(prev).length - 1 === Number(key)) {
            if (prev[key] - 20 < 0) {
              newObj[key] = prev[key] + 380;
            } else {
              newObj[key] = prev[key] - 20;
            }
          } else {
            newObj[key] = prev[Number(key) + 1];
          }
        }

        return newObj;
      });

      setDirection("ArrowUp");
    }
  };

  const handleMove = (e) => {
    if (e.code === "ArrowLeft" && direction !== "ArrowLeft") {
      if (direction !== "ArrowRight") clearInterval(interval);

      move("ArrowLeft");
    }
    if (e.code === "ArrowRight" && direction !== "ArrowRight") {
      if (direction !== "ArrowLeft") clearInterval(interval);

      move("ArrowRight");
    }
    if (e.code === "ArrowUp" && direction !== "ArrowUp") {
      if (direction !== "ArrowDown") clearInterval(interval);

      move("ArrowUp");
    }
    if (e.code === "ArrowDown" && direction !== "ArrowDown") {
      if (direction !== "ArrowUp") clearInterval(interval);

      move("ArrowDown");
    }
  };

  useEffect(() => {
    getFood();

    checkSuicide();
  });

  useEffect(() => {
    interval = setInterval(() => {
      move(direction);
    }, 150);
  }, [direction]);

  return (
    <div tabIndex="-1" className="game" onKeyDown={handleMove}>
      {currentArr.map((x, i) => (
        <Tile key={i} id={i} snake={snakePos} food={food} />
      ))}
    </div>
  );
};

export default Game;
