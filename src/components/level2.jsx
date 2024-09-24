import { useState } from "react";
import { Header } from "./levels";
import { LVL2ANIME } from "../utils/constants";
import { shuffleArr } from "../utils/utils";
import Card from "./card";
import { message, ConfigProvider } from "antd";
import WinModal from "./win";

export default function Level2({ setLevel, bestScore, setBestScore }) {
  LVL2ANIME.splice(0, LVL2ANIME.length, ...shuffleArr(LVL2ANIME));
  const [currScore, setCurrScore] = useState(0);
  const [arr, setArr] = useState(LVL2ANIME);
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const warningMsg = () => {
    messageApi.open({
      type: "error",
      content: "You clicked on the same card twice! Try Again",
      duration: 5,
    });
  };

  const medCards = arr.map((anime, index) => {
    return (
      <Card
        item={anime}
        level={2}
        key={`Lvl 2 ${index}`}
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
            if (currScore + 1 == 8) {
              setIsModalOpen(true);
              setCurrScore(0);
              tempArr.forEach((item) => (item.clicked = false));
            }
          }
          tempArr.splice(0, tempArr.length, ...shuffleArr(tempArr));
          setArr(tempArr);
        }}
      />
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
        level={2}
        setLevel={setLevel}
        currScore={currScore}
        bestScore={bestScore}
      />
      <section className="container grid grid-cols-2 gap-6 justify-items-center w-fit [&>*:nth-child(odd)]:justify-self-end [&>*:nth-child(even)]:justify-self-start">
        <WinModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          level={2}
          setLevel={setLevel}
        />
        {medCards}
      </section>
    </>
  );
}
