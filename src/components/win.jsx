import { Modal, ConfigProvider, Button } from "antd";

export default function WinModal({
  isModalOpen,
  setIsModalOpen,
  level,
  setLevel,
}) {
  const handleOk = () => {
    setLevel(0);
  };
  const handleCancel = () => {
    setLevel(level);
    setIsModalOpen(false);
  };

  let accentColor;
  if (level == 1) accentColor = "#0af";
  if (level == 2) accentColor = "#0f0";
  if (level == 3) accentColor = "#f00";

  return (
    <>
      <ConfigProvider
        modal={{
          styles: {
            mask: {
              backdropFilter: "blur(8px)",
            },
          },
        }}
        theme={{
          token: {
            colorIcon: "#fff",
            colorIconHover: "#aaa",
          },
          components: {
            Modal: {
              contentBg: "#111",
              headerBg: "#111",
              titleColor: "#fff",
            },
          },
        }}
      >
        <Modal
          title="You Win!"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={282}
          footer={[
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    defaultBg: accentColor,
                    defaultColor: "#000",
                    defaultBorderColor: accentColor,
                    defaultHoverBg: accentColor,
                    defaultHoverColor: "#fff",
                    defaultHoverBorderColor: accentColor,
                    defaultActiveBg: "#111",
                    defaultActiveColor: "#fff",
                    defaultActiveBorderColor: accentColor,
                    fontWeight: "700",
                  },
                },
              }}
            >
              <Button className="mt-6 mr-6" onClick={handleOk} size="large">
                Continue
              </Button>
            </ConfigProvider>,
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    defaultBg: "#111",
                    defaultColor: accentColor,
                    defaultBorderColor: accentColor,
                    defaultHoverBg: "#111",
                    defaultHoverColor: "#fff",
                    defaultHoverBorderColor: "#fff",
                    defaultActiveBg: accentColor,
                    defaultActiveColor: "#fff",
                    defaultActiveBorderColor: accentColor,
                    fontWeight: "600",
                  },
                },
              }}
            >
              <Button className="" onClick={handleCancel} size="large">
                Try Again
              </Button>
            </ConfigProvider>,
          ]}
          centered
        ></Modal>
      </ConfigProvider>
    </>
  );
}
