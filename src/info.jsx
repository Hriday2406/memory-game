import { InfoCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Info() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <div className="info flex flex-col absolute bottom-8 right-20">
        <div
          className={`infoContainer flex flex-col gap-2 -translate-x-12 select-none ${
            visible && "hidden"
          } `}
        >
          <p className="bg-white text-black text-center p-2 px-4 rounded-2xl">
            Don't click on the same card twice!
          </p>
          <p className="bg-white text-black text-center p-2 px-4 rounded-2xl">
            Click on the Anime Memory Game logo to go back.
          </p>
        </div>
        <InfoCircleOutlined
          className="text-5xl self-end"
          onClick={() => {
            let temp = visible;
            setVisible(!temp);
          }}
        />
      </div>
    </>
  );
}
