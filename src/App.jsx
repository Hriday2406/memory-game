import "./App.css";
import Info from "./info";
import { useState } from "react";
import { LvlSelector } from "./levels";

function App() {
  const [level, setLevel] = useState(0);

  return (
    <>
      <main className="relative w-screen h-screen text-white bg-black page font-body">
        <LvlSelector level={level} setLevel={setLevel} />
        <Info />
      </main>
    </>
  );
}

export default App;

