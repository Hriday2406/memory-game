import { InfoCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Info() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <div className="absolute flex flex-col text-xs info bottom-2 right-2 sm:bottom-10 sm:right-10 sm:text-base">
        <div
          className={`infoContainer flex flex-col gap-2 -translate-x-12 select-none transition-all duration-500 ${
            visible && "opacity-0 hidden"
          } `}
        >
          <p className="p-2 px-4 text-center text-black bg-white border-2 border-black rounded-2xl">
            Don't click on the same card twice!
          </p>
          <p className="p-2 px-4 text-center text-black bg-white border-2 border-black rounded-2xl">
            Click on the Anime Memory Game logo to go back.
          </p>
        </div>
        <InfoCircleOutlined
          className="self-end text-5xl transition-all duration-500 hover:scale-110"
          onMouseEnter={() => {
            setVisible(false);
          }}
          onMouseLeave={() => {
            setVisible(true);
          }}
        />
      </div>
    </>
  );
}
