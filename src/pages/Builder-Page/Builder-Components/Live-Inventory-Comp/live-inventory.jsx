import React from "react";

//styles
import "./live-inventory.scss";

//images
const bgImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/live-inventory-bg.png";
const liveInventoryImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/live-inventory.png";
const bgVectorImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/live-inventory-vector-bg.png";

export default function LiveInventory({
  ElementFloatOne,
  PageProgress,
  Progress,
  Query,
}) {
  const progress1 = !Query ? Progress[8] : Progress[10];
  const progress2 = !Query ? Progress[9] : Progress[11];
  return (
    <div className="live-inventory-main-container">
      <img
        src={bgVectorImg}
        alt=""
        className="bg-vector-img"
        style={{
          transform:
            ElementFloatOne && PageProgress < progress1
              ? "translateY(2vh)  scale(0.4)"
              : !ElementFloatOne && PageProgress < progress1
              ? "translateY(0vh) scale(0.4)"
              : ElementFloatOne && PageProgress > progress1
              ? "translateY(2vh) scale(0.9)"
              : !ElementFloatOne &&
                PageProgress > progress1 &&
                "translateY(0vh) scale(1)",
        }}
      />
      <div
        className="live-inventory-main"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <img
          src={liveInventoryImg}
          alt=""
          className="marketing-integration-tool-img"
          style={{
            transform:
              ElementFloatOne && PageProgress < progress1
                ? "translateY(2vh) "
                : !ElementFloatOne && PageProgress < progress1
                ? "translateY(0vh)"
                : ElementFloatOne && PageProgress > progress1
                ? "translateY(-2vh) scale(1.2)"
                : !ElementFloatOne &&
                  PageProgress > progress1 &&
                  "translateY(0vh) scale(1.2)",
          }}
        />

        <p
          style={{
            transform: !Query
              ? PageProgress > progress1 &&
                PageProgress < progress2 &&
                "translate(-4vw)"
              : "none",
          }}
        >
          LIVE <br /> <span>INVENTORY</span>
        </p>
        <div
          className="bottom-text"
          style={{
            opacity:
              PageProgress > progress1 && PageProgress < progress2 && "1",
            transform:
              PageProgress > progress1 &&
              PageProgress < progress2 &&
              "translate(-4vw)",
          }}
        >
          <span className="text-span">
            Always in the know; showcase live property availability at a glance.
          </span>
        </div>
      </div>
    </div>
  );
}
