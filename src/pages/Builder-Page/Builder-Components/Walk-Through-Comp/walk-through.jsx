import React from "react";

//styles
import "./walk-through.scss";

//imgs
const bgImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/walk-bg.png";
const walkThroughImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/walk.png";

export default function WalkThrough({
  ElementFloatOne,
  PageProgress,
  Progress,
  Query,
}) {
  const progress1 = Progress[1];
  const progress2 = Progress[2];

  return (
    <div className="walk-through-main-container">
      {/* <p style={{ position: 'fixed', top: '10%', color: 'red', zIndex: '10' }}>{progress1.toString()}</p> */}

      <div
        className="walk-through-main"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <img
          src={walkThroughImg}
          alt=""
          className="walk-through-img"
          style={{
            transform:
              ElementFloatOne && PageProgress < progress1
                ? "translateY(2vh)"
                : !ElementFloatOne && PageProgress < progress1
                ? "translateY(0vh)"
                : ElementFloatOne && PageProgress > progress1
                ? "translateY(2vh) scale(1) rotate(-15deg)"
                : !ElementFloatOne &&
                  PageProgress > progress1 &&
                  "translateY(0vh) scale(1) rotate(-15deg) ",
          }}
        />
        <p
          style={{
            transform: !Query
              ? PageProgress > progress1 &&
                PageProgress < progress2 &&
                "translate(-2vw)"
              : "none",
          }}
        >
          WALK
          <br />
          <span>Through</span>
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
            Navigate your property dream with immersive walkthroughs.
          </span>
        </div>
      </div>
    </div>
  );
}
