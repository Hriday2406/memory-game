import { InfoCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Info() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <div className="absolute flex flex-col info bottom-8 right-20">
        <div
          className={`infoContainer flex flex-col gap-2 -translate-x-12 select-none ${
            visible && "hidden"
          } `}
        >
          <p className="p-2 px-4 text-center text-black bg-white rounded-2xl">
            Don't click on the same card twice!
          </p>
          <p className="p-2 px-4 text-center text-black bg-white rounded-2xl">
            Click on the Anime Memory Game logo to go back.
          </p>
        </div>
        <InfoCircleOutlined
          className="self-end text-5xl transition-all hover:scale-110"
          onClick={() => {
            let temp = visible;
            setVisible(!temp);
          }}
        />
      </div>
    </>
  );
}
