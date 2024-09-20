import { useEffect, useState } from "react";
import { Header } from "./levels";
import { LVL2ANIME } from "../utils/constants";
import { shuffleArray } from "../utils/utils";
import { Card } from "./card";

export default function Level2({ setLevel, bestScore, setBestScore }) {
  const [currScore, setCurrScore] = useState(0);
  const [arr, setArr] = useState(LVL2ANIME);

  useEffect(() => {
    shuffleArray({ arr, setArr });
    let newArr = [...arr];
    newArr.forEach((item) => {
      async function getGif() {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/translate?api_key=SA5LeTVtgRiIdurzTOcS6qePLhr0gIxO&s=${item.name}`,
          { mode: "cors" }
        );
        const gif = await response.json();
        item.url = gif.data.images.original.url;
      }
      // Comment this function below to stop calling the API
      // getGif();
    });
    setArr(newArr);
  }, []);

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
          shuffleArray({ arr, setArr });
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
      <section
        className="container grid grid-cols-4 gap-10 justify-items-center w-fit "
        // onLoad={() => shuffleArray({ arr, setArr })}
      >
        {medCards}
      </section>
    </>
  );
}
