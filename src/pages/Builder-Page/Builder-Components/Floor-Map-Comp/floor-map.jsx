import React from "react";

//styles
import "./floor-map.scss";

//images
const bgImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/3dmodel-bg.png";
const floorMapImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/shared-image.png";

export default function FloorMap({
  ElementFloatTwo,
  PageProgress,
  Progress,
  Query,
}) {
  const progress1 = Progress[0];
  const progress2 = Progress[1];

  return (
    <div className="floor-map-main-container">
      <div
        className="floor-map-main"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <img
          src={floorMapImg}
          alt=""
          className="floor-map-img"
          style={{
            transform:
              ElementFloatTwo && PageProgress < progress1
                ? "translateY(2vh)"
                : !ElementFloatTwo && PageProgress < progress1
                ? "translateY(0vh)"
                : ElementFloatTwo && PageProgress > progress1
                ? "translateY(2vh) scale(1) rotate(15deg)"
                : !ElementFloatTwo &&
                  PageProgress > progress1 &&
                  "translateY(0vh) scale(1) rotate(15deg) ",
          }}
        />
        <p
          style={{
            transform: !Query
              ? PageProgress > progress1 &&
                PageProgress < progress2 &&
                "translate(-5vw)"
              : "none",
          }}
        >
          <span className="span1">3D</span>
          MODEL <br />& &nbsp;<span>Floor Plan</span>
        </p>

        <div
          className="bottom-text"
          style={{
            opacity:
              PageProgress > progress1 && PageProgress < progress2 && "1",
            transform:
              PageProgress > progress1 &&
              PageProgress < progress2 &&
              "translate(-5vw)",
          }}
        >
          <span className="text-span">
            Visualize every corner with detailed 3D models and interactive floor
            plans.
          </span>
        </div>
      </div>
    </div>
  );
}
