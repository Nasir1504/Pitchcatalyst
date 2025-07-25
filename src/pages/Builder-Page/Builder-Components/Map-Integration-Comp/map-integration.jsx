import React from "react";

//styles
import "./map-integration.scss";

//imgs
const bgImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/map-bg.png";
const mapIntegrationImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/map.png";

export default function MapIntegration({
  ElementFloatOne,
  PageProgress,
  Progress,
  Query,
}) {
  const progress1 = Progress[2];
  const progress2 = Progress[3];

  return (
    <div className="map-integration-main-container">
      {/* <p style={{ position: 'fixed', top: '10%', color: 'red', zIndex: '10' }}>{progress1.toString()}</p> */}

      <div
        className="map-integration-main"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <img
          src={mapIntegrationImg}
          alt=""
          className="map-integration-img"
          style={{
            transform:
              ElementFloatOne && PageProgress < progress1
                ? "translateY(2vh)"
                : !ElementFloatOne && PageProgress < progress1
                ? "translateY(0vh)"
                : ElementFloatOne && PageProgress > progress1
                ? "translateY(2vh) scale(1.1) rotate(-10deg)"
                : !ElementFloatOne &&
                  PageProgress > progress1 &&
                  "translateY(0vh) scale(1.1) rotate(-15deg) ",
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
          MAP <br /> <span>Integration</span>
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
            Locate perfection with our intuitive map interfaces.
          </span>
        </div>
      </div>
    </div>
  );
}
