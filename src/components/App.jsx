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
          } else if (gif.meta.status == 429) {
            console.log(gif.meta.status, gif.meta.msg);
            const newResponse = await fetch(
              `https://api.giphy.com/v1/gifs/search?api_key=SA5LeTVtgRiIdurzTOcS6qePLhr0gIxO&q=${itemName}&limit=25`,
              { mode: "cors" }
            );
            const newGif = await newResponse.json();
            if (newGif.meta.status == 200) {
              const newGifs = newGif.data;
              newGifs.forEach((newGifItem) => {
                item.url.push(newGifItem.images.original.url);
              });
            } else console.log("2nd API", newGif.meta.status, newGif.meta.msg);
          } else console.log(gif.meta.status, gif.meta.msg);
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
      <main className="relative flex flex-col items-center w-screen min-h-screen text-white bg-black page font-body bg-[url('https://res.cloudinary.com/dbpe1wf5i/image/upload/v1727198077/bg_mj9l3a.png')] bg-center bg-cover bg-fixed ">
        <Levels />
        <Info />
      </main>
    </>
  );
}

export default App;
