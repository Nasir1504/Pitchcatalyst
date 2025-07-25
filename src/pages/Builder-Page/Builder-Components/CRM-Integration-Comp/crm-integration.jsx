import React from "react";

//styles
import "./crm-integration.scss";

//images
const bgImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/crm-bg.png";
const crmImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/crm.png";

export default function CRMIntegration({
  ElementFloatTwo,
  PageProgress,
  Progress,
  Query,
}) {
  const progress1 = Progress[4];
  const progress2 = Progress[5];
  return (
    <div className="crm-integration-main-container">
      <div
        className="crm-integration-main"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <img
          src={crmImg}
          alt=""
          className="dynamic-pricing-img"
          style={{
            transform:
              ElementFloatTwo && PageProgress < progress1
                ? "translateY(2vh)  rotate(-15deg)"
                : !ElementFloatTwo && PageProgress < progress1
                ? "translateY(0vh)  rotate(-15deg)"
                : ElementFloatTwo && PageProgress > progress1
                ? "translateY(-2vh) scale(1.2) rotate(-2deg)"
                : !ElementFloatTwo &&
                  PageProgress > progress1 &&
                  "translateY(0vh) scale(1.2) rotate(0deg)",
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
          CRM <br /> <span>Integration</span>
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
            Streamline your client relations with seamless CRM integrations.
          </span>
        </div>
      </div>
    </div>
  );
}
