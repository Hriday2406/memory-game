import { Button, ConfigProvider } from "antd";

function LvlBtnSelector({ level, setLevel, bestScore }) {
  let lvlName, btnStyles;
  if (level == 1) {
    lvlName = "Easy";
    btnStyles = {
      defaultHoverColor: "#0af",
      defaultHoverBorderColor: "#0af",
      defaultActiveColor: "#0af",
      defaultActiveBorderColor: "#0af",
    };
    if (bestScore == 6) {
      btnStyles = {
        defaultColor: "#0af",
        defaultBorderColor: "#0af",
      };
    }
  } else if (level == 2) {
    lvlName = "Medium";
    btnStyles = {
      defaultHoverColor: "#0f0",
      defaultHoverBorderColor: "#0f0",
      defaultActiveColor: "#0f0",
      defaultActiveBorderColor: "#0f0",
    };
    if (bestScore == 8) {
      btnStyles = {
        defaultColor: "#0f0",
        defaultBorderColor: "#0f0",
      };
    }
  } else if (level == 3) {
    lvlName = "Hard";
    btnStyles = {
      defaultHoverColor: "#f00",
      defaultHoverBorderColor: "#f00",
      defaultActiveColor: "#f00",
      defaultActiveBorderColor: "#f00",
    };
    if (bestScore == 10) {
      btnStyles = {
        defaultColor: "#f00",
        defaultBorderColor: "#f00",
      };
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <ConfigProvider
        theme={{
          components: {
            Button: {
              contentFontSize: 24,
              defaultBg: "#000",
              defaultColor: "#fff",
              defaultHoverBg: "#000",
              defaultActiveBg: "#000",
              ...btnStyles,
            },
          },
        }}
      >
        <Button
          className="p-6 border-2 btn font-body justify-self-start "
          onClick={() => {
            setLevel(level);
          }}
        >
          {lvlName}
        </Button>
      </ConfigProvider>
      <p
        className={`font-bold underline uppercase  decoration-wavy ${
          level == 1 && "text-easy"
        } ${level == 2 && "text-med"} ${level == 3 && "text-hard"}`}
      >
        {level == 1 && bestScore == 6 && "Completed!"}
        {level == 2 && bestScore == 8 && "Completed!"}
        {level == 3 && bestScore == 10 && "Completed!"}
      </p>
    </div>
  );
}

export default function Home({ setLevel, best1Score, best2Score, best3Score }) {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center gap-4 text-5xl select-none font-display py-36">
          <h1>Anime</h1>
          <h1>Memory</h1>
          <h1>Game</h1>
        </div>
      </div>
      <div className="flex items-start justify-center gap-10 py-40 btnContainer">
        <LvlBtnSelector level={1} setLevel={setLevel} bestScore={best1Score} />
        <LvlBtnSelector level={2} setLevel={setLevel} bestScore={best2Score} />
        <LvlBtnSelector level={3} setLevel={setLevel} bestScore={best3Score} />
      </div>
    </>
  );
}
