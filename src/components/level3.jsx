import { useState } from "react";
import { LVL3ANIME } from "../utils/constants";
import Card from "./card";
import { shuffleArr } from "../utils/utils";
import { Header } from "./levels";
import { message, ConfigProvider } from "antd";
import WinModal from "./win";

export default function Level3({ setLevel, bestScore, setBestScore }) {
  LVL3ANIME.splice(0, LVL3ANIME.length, ...shuffleArr(LVL3ANIME));
  const [currScore, setCurrScore] = useState(0);
  const [arr, setArr] = useState(LVL3ANIME);
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const warningMsg = () => {
    messageApi.open({
      type: "error",
      content: "You clicked on the same card twice! Try Again",
      duration: 5,
    });
  };

  const hardCards = arr.map((anime, index) => {
    return (
      <Card
        item={anime}
        level={3}
        key={`Lvl 3 ${index}`}
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
            if (currScore + 1 == 10) {
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
        level={3}
        setLevel={setLevel}
        currScore={currScore}
        bestScore={bestScore}
      />
      <section className="grid grid-cols-2 gap-6 justify-items-center w-fit lg:grid-cols-3 lg:max-xl:[&>*:last-child]:col-start-2 xl:grid-cols-5 ">
        <WinModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          level={3}
          setLevel={setLevel}
        />
        {hardCards}
      </section>
    </>
  );
}
