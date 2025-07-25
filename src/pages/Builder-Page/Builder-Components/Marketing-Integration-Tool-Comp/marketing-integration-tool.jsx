import React from "react";

//styles
import "./marketing-integration-tool.scss";

//images
const bgImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/marketing-bg.png";
const marketingImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/marketing.png";

export default function MarketingIntegrationTool({
  ElementFloatTwo,
  PageProgress,
  Progress,
  Query,
}) {
  const progress1 = Progress[5];
  const progress2 = Progress[6];
  return (
    <div className="marketing-integration-tool-main-container">
      <div
        className="marketing-integration-tool-main"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <img
          src={marketingImg}
          alt=""
          className="marketing-integration-tool-img"
          style={{
            transform:
              ElementFloatTwo && PageProgress < progress1
                ? "translateY(2vh)  rotate(-15deg)"
                : !ElementFloatTwo && PageProgress < progress1
                ? "translateY(0vh)  rotate(-15deg)"
                : ElementFloatTwo && PageProgress > progress1
                ? "translateY(-2vh) scale(0.85) rotate(-2deg)"
                : !ElementFloatTwo &&
                  PageProgress > progress1 &&
                  "translateY(0vh) scale(0.85) rotate(0deg)",
          }}
        />
        <p
          style={{
            transform: !Query
              ? PageProgress > progress1 &&
                PageProgress < progress2 &&
                "translateY(-1.5vw)"
              : "",
          }}
        >
          MARKETING <br /> <span>Integration</span>
        </p>
        <div
          className="bottom-text"
          style={{
            opacity:
              PageProgress > progress1 && PageProgress < progress2 && "1",
            transform:
              PageProgress > progress1 &&
              PageProgress < progress2 &&
              "translateY(3vw)",
          }}
        >
          <span className="text-span">
            Amplify your reach with integrated top-tier marketing platforms.
          </span>
        </div>
      </div>
    </div>
  );
}
