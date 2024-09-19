import { useState } from "react";
import Home from "./home";
import ScoreCard from "./scoreCard";
import Level1 from "./level1";

function Levels() {
  const [level, setLevel] = useState(0);
  const [best1Score, setBest1Score] = useState(0);
  const [best2Score, setBest2Score] = useState(0);
  const [best3Score, setBest3Score] = useState(0);
  if (level == 0)
    return (
      <Home
        setLevel={setLevel}
        best1Score={best1Score}
        best2Score={best2Score}
        best3Score={best3Score}
      />
    );
  if (level == 1)
    return (
      <Level1
        setLevel={setLevel}
        bestScore={best1Score}
        setBestScore={setBest1Score}
      />
    );
  if (level == 2)
    return (
      <Level2
        setLevel={setLevel}
        bestScore={best2Score}
        setBestScore={setBest2Score}
      />
    );
  if (level == 3)
    return (
      <Level3
        setLevel={setLevel}
        bestScore={best3Score}
        setBestScore={setBest3Score}
      />
    );
}

function Header({ level, setLevel, currScore, bestScore }) {
  return (
    <div className="flex items-center justify-around w-screen">
      <div
        className="text-3xl cursor-pointer select-none my-14 font-display"
        onClick={() => {
          setLevel(0);
        }}
      >
        <h1>Anime Memory Game</h1>
      </div>
      <ScoreCard level={level} currScore={currScore} bestScore={bestScore} />
    </div>
  );
}

function Level2({ setLevel }) {
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <>
      <Header
        level={2}
        setLevel={setLevel}
        currScore={currScore}
        bestScore={bestScore}
      />
      2
    </>
  );
}
function Level3({ setLevel }) {
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <>
      <Header
        level={3}
        setLevel={setLevel}
        currScore={currScore}
        bestScore={bestScore}
      />
      3
    </>
  );
}

export { Levels, Header };
