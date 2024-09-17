import { Button, ConfigProvider } from "antd";

function LvlBtnSelector({ level, setLevel }) {
  let lvlName, btnStyles;
  if (level == 1) {
    lvlName = "Easy";
    btnStyles = {
      defaultHoverColor: "#0af",
      defaultHoverBorderColor: "#0af",
      defaultActiveColor: "#0af",
      defaultActiveBorderColor: "#0af",
    };
  } else if (level == 2) {
    lvlName = "Medium";
    btnStyles = {
      defaultHoverColor: "#0f0",
      defaultHoverBorderColor: "#0f0",
      defaultActiveColor: "#0f0",
      defaultActiveBorderColor: "#0f0",
    };
  } else if (level == 3) {
    lvlName = "Hard";
    btnStyles = {
      defaultHoverColor: "#f00",
      defaultHoverBorderColor: "#f00",
      defaultActiveColor: "#f00",
      defaultActiveBorderColor: "#f00",
    };
  }

  return (
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
        className="p-6 border-2 border-white btn font-body hover:text-black"
        onClick={() => {
          setLevel({ level });
        }}
      >
        {lvlName}
      </Button>
    </ConfigProvider>
  );
}

export default function Home({ level, setLevel }) {
  return (
    <>
      <div className="top">
        <div
          className="flex flex-col items-center justify-center gap-4 text-5xl logo font-display py-36"
          onClick={() => {
            setLevel(0);
          }}
        >
          <h1>Anime</h1>
          <h1>Memory</h1>
          <h1>Game</h1>
        </div>
      </div>
      <div className="flex items-center justify-center gap-10 py-40 btnContainer">
        <LvlBtnSelector level={1} setLevel={setLevel} />
        <LvlBtnSelector level={2} setLevel={setLevel} />
        <LvlBtnSelector level={3} setLevel={setLevel} />
      </div>
    </>
  );
}
