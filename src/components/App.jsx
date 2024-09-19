import "../styles/App.css";
import Info from "./info";
import { Levels } from "./levels";

function App() {
  return (
    <>
      <main className="relative flex flex-col items-center w-screen h-screen text-white bg-black page font-body">
        <Levels />
        <Info />
      </main>
    </>
  );
}

export default App;
