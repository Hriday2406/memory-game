import { useState } from "react";
import Home from "./home";
import ScoreCard from "./scoreCard";

export default function Levels() {
  const [level, setLevel] = useState(0);
  if (level == 0) return <Home level={level} setLevel={setLevel} />;
  if (level == 1) return <Level1 setLevel={setLevel} />;
  if (level == 2) return <Level2 setLevel={setLevel} />;
  if (level == 3) return <Level3 setLevel={setLevel} />;
}

function Header({ setLevel }) {
  return (
    <div className="flex items-center justify-around">
      <div
        className="flex items-start gap-4 text-3xl cursor-pointer select-none py-14 font-display"
        onClick={() => {
          setLevel(0);
        }}
      >
        <h1>Anime</h1>
        <h1>Memory</h1>
        <h1>Game</h1>
      </div>
      <ScoreCard />
    </div>
  );
}

function Level1({ setLevel }) {
  return (
    <>
      <Header setLevel={setLevel} />1
    </>
  );
}
function Level2({ setLevel }) {
  return (
    <>
      <Header setLevel={setLevel} />2
    </>
  );
}
function Level3({ setLevel }) {
  return (
    <>
      <Header setLevel={setLevel} />3
    </>
  );
}
