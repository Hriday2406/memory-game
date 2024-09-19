import { useState } from "react";
import { Header } from "./levels";
import { LVL1ANIME } from "../utils/constants";

function shuffleArray({ arr, setArr }) {
  let newArr = [...arr];
  let currentIndex = newArr.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [newArr[currentIndex], newArr[randomIndex]] = [
      newArr[randomIndex],
      newArr[currentIndex],
    ];
  }
  setArr(newArr);
}

export default function Level1({ setLevel, bestScore, setBestScore }) {
  const [currScore, setCurrScore] = useState(0);
  const [arr, setArr] = useState(LVL1ANIME);

  const easyCards = arr.map((anime, index) => {
    return (
      <div
        className="transition-all duration-200 p-5 border-2 border-easy rounded-[32px] flex flex-col items-center gap-5 hover:scale-105 uppercase"
        key={`Lvl 1 ${index}`}
        onClick={() => {
          if (anime.clicked) {
            setCurrScore(0);
            arr.forEach((item) => (item.clicked = false));
          } else {
            anime.clicked = true;
            setCurrScore(currScore + 1);
            if (bestScore <= currScore) setBestScore(currScore + 1);
            if (currScore + 1 == 6) {
              alert("you win");
              setCurrScore(0);
              arr.forEach((item) => (item.clicked = false));
              setLevel(0);
            }
          }
          shuffleArray({ arr, setArr });
        }}
      >
        <div className="overflow-hidden select-none rounded-xl">
          <img src={anime.src} alt={anime.alias} className="h-64 " />
        </div>
        <h2>{anime.name}</h2>
      </div>
    );
  });

  return (
    <>
      <Header
        level={1}
        setLevel={setLevel}
        currScore={currScore}
        bestScore={bestScore}
      />
      <section className="container grid grid-cols-3 gap-6 justify-items-center [&>*:nth-child(1)]:justify-self-end [&>*:nth-child(4)]:justify-self-end [&>*:nth-child(3n)]:justify-self-start  ">
        {easyCards}
      </section>
    </>
  );
}
