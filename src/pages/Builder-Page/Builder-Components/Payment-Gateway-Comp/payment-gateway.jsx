import React from "react";

//styles
import "./payment-gateway.scss";

//images
const bgImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/payment-bg.png";
const paymentImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/payment.png";

export default function PaymentGateway({
  ElementFloatOne,
  PageProgress,
  Progress,
  Query,
}) {
  const progress1 = !Query ? Progress[6] : Progress[8];
  const progress2 = !Query ? Progress[8] : Progress[9];
  return (
    <div className="payment-gateway-main-conatiner">
      <div
        className="payment-gateway-main"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <img
          src={paymentImg}
          alt=""
          className="marketing-integration-tool-img"
          style={{
            transform:
              ElementFloatOne && PageProgress < progress1
                ? "translateY(2vh) "
                : !ElementFloatOne && PageProgress < progress1
                ? "translateY(0vh)"
                : ElementFloatOne && PageProgress > progress1
                ? "translateY(-2vh) rotate(-20deg) scale(1)"
                : !ElementFloatOne &&
                  PageProgress > progress1 &&
                  "translateY(0vh) rotate(-20deg) scale(1)",
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
          PAYMENT <br /> <span>GATEWAY</span>
        </p>
        <div
          className="bottom-text"
          style={{
            opacity:
              PageProgress > progress1 && PageProgress < progress2 && "1",
            transform:
              PageProgress > progress1 &&
              PageProgress < progress2 &&
              "translate(-2vw)",
          }}
        >
          <span className="text-span">
            Simplify bookings and payments with our integrated solutions.
          </span>
        </div>
      </div>
    </div>
  );
}
