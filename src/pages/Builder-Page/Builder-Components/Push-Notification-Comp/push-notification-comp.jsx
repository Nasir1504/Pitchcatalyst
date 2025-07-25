import React from "react";

//styles
import "./push-notification-comp.scss";

// images
const pushImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/push.png";

export default function PushNotificationComp({
  ElementFloatTwo,
  PageProgress,
  Progress,
  Query,
}) {
  const progress1 = !Query ? Progress[7] : Progress[9];
  const progress2 = !Query ? Progress[9] : Progress[10];
  return (
    <div className="push-notification-comp-main-container">
      <div className="push-notification-comp-main">
        <img
          src={pushImg}
          alt=""
          className="marketing-integration-tool-img"
          style={{
            transform:
              ElementFloatTwo && PageProgress < progress1
                ? "translateY(2vh) "
                : !ElementFloatTwo && PageProgress < progress1
                ? "translateY(0vh)"
                : ElementFloatTwo && PageProgress > progress1
                ? "translateY(-2vh) scale(1)"
                : !ElementFloatTwo &&
                  PageProgress > progress1 &&
                  "translateY(0vh) scale(1)",
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
          PUSH <br /> <span>NOTIFICATION</span>
        </p>
        <div
          className="bottom-text"
          style={{
            opacity:
              PageProgress > progress1 && PageProgress < progress2 && "1",
            transform:
              PageProgress > progress1 &&
              PageProgress < progress2 &&
              "translate(-3vw)",
          }}
        >
          <span className="text-span">
            Keep your prospects engaged with timely and relevant push updates.
          </span>
        </div>
      </div>
    </div>
  );
}
