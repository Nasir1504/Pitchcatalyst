import React from "react";

//styles
import "./data-updating.scss";

// images
const bgImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/live-data-bg.png";
const liveInventoryImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/live-data.png";
const ecllipseVector = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/ellipse904.png";
const circleGroupImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/Frame1216.png";

export default function DataUpdating({
  ElementFloatOne,
  PageProgress,
  Progress,
  Query,
}) {
  const progress1 = !Query ? Progress[9] : Progress[11];
  // const progress2 = Progress[10]
  return (
    <div className="data-updating-main-container">
      <img
        src={circleGroupImg}
        alt=""
        className="bg-group-circle-img"
        style={{
          transform: PageProgress > progress1 && "scale(1)",
        }}
      />
      <img src={ecllipseVector} alt="" className="bg-circle-img" />

      <div
        className="data-updating-main"
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

        <div
          className="bottom-text"
          style={{
            opacity: PageProgress > progress1 && "1",
            transform: PageProgress > progress1 && "translate(-4vw)",
          }}
        >
          <span className="text-span">
            Stay current effortlessly with real-time backend data
            synchronization.
          </span>
        </div>
      </div>
    </div>
  );
}
