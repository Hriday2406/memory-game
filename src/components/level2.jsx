import { useState } from "react";
import { Header } from "./levels";
import { LVL2ANIME } from "../utils/constants";
import { shuffleArr } from "../utils/utils";
import Card from "./card";

export default function Level2({ setLevel, bestScore, setBestScore }) {
  LVL2ANIME.splice(0, LVL2ANIME.length, ...shuffleArr(LVL2ANIME));
  const [currScore, setCurrScore] = useState(0);
  const [arr, setArr] = useState(LVL2ANIME);

  const medCards = arr.map((anime, index) => {
    return (
      <Card
        item={anime}
        level={2}
        key={`Lvl 2 ${index}`}
        onClick={() => {
          if (anime.clicked) {
            setCurrScore(0);
            arr.forEach((item) => (item.clicked = false));
          } else {
            anime.clicked = true;
            setCurrScore(currScore + 1);
            if (bestScore <= currScore) setBestScore(currScore + 1);
            if (currScore + 1 == 8) {
              alert("you win");
              setCurrScore(0);
              arr.forEach((item) => (item.clicked = false));
              setLevel(0);
            }
          }
          setArr((prev) => shuffleArr(prev));
        }}
      />
    );
  });

  return (
    <>
      <Header
        level={2}
        setLevel={setLevel}
        currScore={currScore}
        bestScore={bestScore}
      />
      <section className="container grid grid-cols-4 gap-10 justify-items-center w-fit ">
        {medCards}
      </section>
    </>
  );
}
