import { Button, ConfigProvider } from "antd";

function LvlBtnSelector({ level, setLevel, bestScore }) {
  let lvlName, btnStyles, winBtnStyles;
  if (level == 1) {
    lvlName = "Easy";
    btnStyles = {
      defaultHoverColor: "#0af",
      defaultHoverBorderColor: "#0af",
      defaultActiveColor: "#0af",
      defaultActiveBorderColor: "#0af",
    };
    if (bestScore == 6) {
      winBtnStyles = {
        defaultColor: "#0af",
        defaultBorderColor: "#0af",
        defaultHoverColor: "#fff",
        defaultHoverBorderColor: "#fff",
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
      winBtnStyles = {
        defaultColor: "#0f0",
        defaultBorderColor: "#0f0",
        defaultHoverColor: "#fff",
        defaultHoverBorderColor: "#fff",
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
      winBtnStyles = {
        defaultColor: "#f00",
        defaultBorderColor: "#f00",
        defaultHoverColor: "#fff",
        defaultHoverBorderColor: "#fff",
      };
    }
  }

  return (
    <div className="flex flex-col items-center gap-7">
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
              ...winBtnStyles,
            },
          },
        }}
      >
        <Button
          className={`p-5 border-2 shadow-lg btn font-body justify-self-start 
          ${level == 1 && bestScore == 6 && "shadow-easy hover:shadow-white"} 
          ${level == 2 && bestScore == 8 && "shadow-med hover:shadow-white"} 
          ${level == 3 && bestScore == 10 && "shadow-hard hover:shadow-white"}`}
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
        <div className="flex flex-col items-center justify-center gap-4 text-6xl select-none font-display py-36">
          <h1>Anime</h1>
          <h1>Memory</h1>
          <h1>Game</h1>
        </div>
      </div>
      <div className="flex items-start justify-center gap-3 py-32 btnContainer sm:gap-8">
        <LvlBtnSelector level={1} setLevel={setLevel} bestScore={best1Score} />
        <LvlBtnSelector level={2} setLevel={setLevel} bestScore={best2Score} />
        <LvlBtnSelector level={3} setLevel={setLevel} bestScore={best3Score} />
      </div>
    </>
  );
}
