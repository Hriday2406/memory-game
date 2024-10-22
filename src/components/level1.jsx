import { useState } from "react";
import { Header } from "./levels";
import { LVL1ANIME } from "../utils/constants";
import { shuffleArr } from "../utils/utils";
import { message, ConfigProvider } from "antd";
import WinModal from "./win";

export default function Level1({ setLevel, bestScore, setBestScore }) {
  LVL1ANIME.splice(0, LVL1ANIME.length, ...shuffleArr(LVL1ANIME));
  const [currScore, setCurrScore] = useState(0);
  const [arr, setArr] = useState(LVL1ANIME);
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const warningMsg = () => {
    messageApi.open({
      type: "error",
      content: "You clicked on the same card twice! Try Again",
      duration: 5,
    });
  };

  const easyCards = arr.map((anime, index) => {
    return (
      <div
        className="transition-all duration-100 p-4 border-2 border-easy rounded-[32px] flex flex-col items-center gap-3 hover:scale-105 uppercase group hover:shadow-lg hover:shadow-easy backdrop-blur-sm active:scale-90 w-44 sm:w-44 sm:gap-5 lg:w-56 lg:p-5 xl:w-48 2xl:w-52 "
        key={`Lvl 1 ${index}`}
        onClick={() => {
          const tempArr = [...arr];
          if (anime.clicked) {
            warningMsg();
            setCurrScore(0);
            tempArr.forEach((item) => (item.clicked = false));
          } else {
            tempArr[index].clicked = true;
            setCurrScore(currScore + 1);
            if (bestScore <= currScore) setBestScore(currScore + 1);
            if (currScore + 1 == 6) {
              setIsModalOpen(true);
              setCurrScore(0);
              tempArr.forEach((item) => (item.clicked = false));
            }
          }
          tempArr.splice(0, tempArr.length, ...shuffleArr(tempArr));
          setArr(tempArr);
        }}
      >
        <div className="overflow-hidden transition-all duration-200 select-none rounded-xl group-hover:scale-90 ">
          <img
            src={anime.src}
            alt={anime.alias}
            className="h-40 sm:h-44 lg:h-64 xl:h-40 2xl:h-60"
          />
        </div>
        <h2>{anime.name}</h2>
      </div>
    );
  });

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorText: "#fff",
            fontSize: 18,
          },
          components: {
            Message: {
              contentBg: "#111",
            },
          },
        }}
      >
        {contextHolder}
      </ConfigProvider>
      <Header
        level={1}
        setLevel={setLevel}
        currScore={currScore}
        bestScore={bestScore}
      />
      <section className="container grid grid-cols-2 gap-4 justify-items-center max-lg:[&>*:nth-child(odd)]:justify-self-end max-lg:[&>*:nth-child(even)]:justify-self-start sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:[&>*:nth-child(1)]:justify-self-end lg:[&>*:nth-child(4)]:justify-self-end lg:[&>*:nth-child(3n)]:justify-self-start lg:gap-y-28 xl:gap-y-10  xl:gap-x-0">
        <WinModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          level={1}
          setLevel={setLevel}
        />
        {easyCards}
      </section>
    </>
  );
}
