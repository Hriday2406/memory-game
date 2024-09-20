import { useState } from "react";
import { LVL3ANIME } from "../utils/constants";
import { Card } from "./card";
import { shuffleArr } from "../utils/utils";
import { Header } from "./levels";

export default function Level3({ setLevel, bestScore, setBestScore }) {
  LVL3ANIME.splice(0, LVL3ANIME.length, ...shuffleArr(LVL3ANIME));
  const [currScore, setCurrScore] = useState(0);
  const [arr, setArr] = useState(LVL3ANIME);

  const hardCards = arr.map((anime, index) => {
    return (
      <Card
        item={anime}
        level={3}
        key={`Lvl 3 ${index}`}
        onClick={() => {
          if (anime.clicked) {
            setCurrScore(0);
            arr.forEach((item) => (item.clicked = false));
          } else {
            anime.clicked = true;
            setCurrScore(currScore + 1);
            if (bestScore <= currScore) setBestScore(currScore + 1);
            if (currScore + 1 == 10) {
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
        level={3}
        setLevel={setLevel}
        currScore={currScore}
        bestScore={bestScore}
      />
      <section className="grid grid-cols-5 gap-10  justify-items-center w-fit">
        {hardCards}
      </section>
    </>
  );
}
