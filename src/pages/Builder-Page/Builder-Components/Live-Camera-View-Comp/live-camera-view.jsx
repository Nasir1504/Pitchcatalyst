import React from "react";

//styles
import "./live-camera-view.scss";

//images
const bgImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/live-bg.png";
const liveImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/live.png";
const ringVector = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/ring-vector.png";

export default function LiveCameraView({
  ElementFloatOne,
  PageProgress,
  Progress,
  Query,
}) {
  const progress1 = !Query ? Progress[6] : Progress[7];
  const progress2 = !Query ? Progress[7] : Progress[8];
  return (
    <div className="live-camera-view-main-container">
      <div
        className="live-camera-view-main"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <img
          src={liveImg}
          alt=""
          className="marketing-integration-tool-img"
          style={{
            transform:
              ElementFloatOne && PageProgress < progress1
                ? "translateX(2vh)  rotate(-55deg)"
                : !ElementFloatOne && PageProgress < progress1
                ? "translateX(0vh)  rotate(-55deg)"
                : ElementFloatOne && PageProgress > progress1
                ? "translateX(-2vh) rotate(-60deg) scale(1.3)"
                : !ElementFloatOne &&
                  PageProgress > progress1 &&
                  "translateX(0vh) rotate(-60deg) scale(1.3)",
          }}
        />
        <img
          src={ringVector}
          alt=""
          className="ring-vector-img"
          style={{
            transform:
              ElementFloatOne && PageProgress < progress1
                ? "translate(1.5vw, 2vh) scale(0.4)  rotate(-55deg)"
                : !ElementFloatOne && PageProgress < progress1
                ? "translate(1.5vw, 0vh) scale(0.4) rotate(-55deg)"
                : ElementFloatOne && PageProgress > progress1
                ? "translate(8vw, 0vh) rotate(-55deg)"
                : !ElementFloatOne &&
                  PageProgress > progress1 &&
                  "translate(10vw, 0vh) rotate(-55deg)",
          }}
        />

        <p>
          LIVE <br /> <span>Camera View</span>
        </p>

        <div
          className="bottom-text"
          style={{
            opacity:
              PageProgress > progress1 && PageProgress < progress2 && "1",
            transform:
              PageProgress > progress1 &&
              PageProgress < progress2 &&
              "translate(-4vw) rotate(-55deg)",
          }}
        >
          <span className="text-span">
            Experience real-time views, bringing properties closer to your
            audience.
          </span>
        </div>
      </div>
    </div>
  );
}
