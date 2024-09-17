import "./App.css";
import Info from "./info";
import { useState } from "react";
import Home from "./home";

function App() {
  const [level, setLevel] = useState(0);

  return (
    <>
      <main className="relative w-screen h-screen text-white bg-black page font-body">
        <Home level={level} setLevel={setLevel} />
        <Info />
      </main>
    </>
  );
}

export default App;

