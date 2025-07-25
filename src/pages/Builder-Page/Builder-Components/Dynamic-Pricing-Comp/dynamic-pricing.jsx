import React from "react";

//styles
import "./dynamic-pricing.scss";

// images
const bgImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/dyamic-pricing-bg.png";
const dynamicPricingImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/dyamic-pricing.png";

export default function DynamicPricing({
  ElementFloatOne,
  PageProgress,
  Progress,
  Query,
}) {
  const progress1 = Progress[3];
  const progress2 = Progress[4];
  return (
    <div className="dynamic-pricing-main-container">
      {/* <p style={{ position: 'fixed', top: '10%', color: 'red', zIndex: '10' }}>{progress1.toString()}</p> */}

      <div
        className="dynamic-pricing-main"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <img
          src={dynamicPricingImg}
          alt=""
          className="dynamic-pricing-img"
          style={{
            transform:
              ElementFloatOne && PageProgress < progress1
                ? "translateY(2vh)"
                : !ElementFloatOne && PageProgress < progress1
                ? "translateY(0vh)"
                : ElementFloatOne && PageProgress > progress1
                ? "translateY(2vh) scale(1.2) rotate(-2deg)"
                : !ElementFloatOne &&
                  PageProgress > progress1 &&
                  "translateY(0vh) scale(1.2) rotate(0deg) ",
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
          DYNAMIC <br /> <span>Pricing</span>
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
            Stay competitive with adaptive, real-time pricing strategies.
          </span>
        </div>
      </div>
    </div>
  );
}
