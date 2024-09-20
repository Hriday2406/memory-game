import { useEffect } from "react";
import "../styles/App.css";
import Info from "./info";
import { Levels } from "./levels";
import { LVL2ANIME, LVL3ANIME } from "../utils/constants";

function App() {
  useEffect(() => {
    let newArr = [...LVL3ANIME];
    newArr.forEach((item) => {
      let itemName = item.name;
      if (item.name == "One Piece") itemName = "One Piece Anime";
      if (item.name == "Attack on Titan") itemName = "Attack on Titan Anime";
      async function getGif() {
        try {
          const response = await fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=lBrsd0g5fB5uXIMcDspDfrGNduov7EH4&q=${itemName}&limit=25`,
            { mode: "cors" }
          );
          const gif = await response.json();
          if (gif.meta.status == 200) {
            const gifs = gif.data;
            gifs.forEach((gifItem) => {
              item.url.push(gifItem.images.original.url);
            });
          } else {
            console.log(gif.meta.status, gif.meta.msg);
          }
        } catch (error) {
          throw new Error(error);
        }
      }
      // Comment this function below to stop calling the API
      getGif();
      console.log("api called");
    });
    LVL3ANIME.splice(0, LVL3ANIME.length, ...newArr);
    LVL2ANIME.splice(
      0,
      LVL2ANIME.length,
      ...LVL3ANIME.slice(0, LVL3ANIME.length - 2)
    );
  }, []);
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
