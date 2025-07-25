import React from "react";

//styles
import "./lead-collection-form.scss";

//images
const bgImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/lead-bg.png";
const leadImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/lead.png";

export default function LeadCollectionForm({
  ElementFloatOne,
  PageProgress,
  Progress,
  Query,
}) {
  const progress1 = !Query ? Progress[5] : Progress[6];
  const progress2 = !Query ? Progress[6] : Progress[7];
  return (
    <div className="lead-collection-form-main-container">
      <div
        className="lead-collection-form-main"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <img
          src={leadImg}
          alt=""
          className="lead-collection-form-img"
          style={{
            transform:
              ElementFloatOne && PageProgress < progress1
                ? "translateY(2vh)  rotate(-15deg)"
                : !ElementFloatOne && PageProgress < progress1
                ? "translateY(0vh)  rotate(-15deg)"
                : ElementFloatOne && PageProgress > progress1
                ? "translateY(-2vh) scale(0.9) rotate(-2deg)"
                : !ElementFloatOne &&
                  PageProgress > progress1 &&
                  "translateY(0vh) scale(0.9) rotate(0deg)",
          }}
        />
        <p
          style={{
            transform: !Query
              ? PageProgress > progress1 &&
                PageProgress < progress2 &&
                "translateY(-1vw)"
              : "none",
          }}
        >
          LEAD <br /> <span>Collection Form</span>
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
            Harness the power of every interaction; capture leads seamlessly.
          </span>
        </div>
      </div>
    </div>
  );
}
