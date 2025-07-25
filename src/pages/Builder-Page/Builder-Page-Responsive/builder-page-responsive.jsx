import React, { useState, useEffect } from "react";

//styles
import styles from "./builder-page-responsive.module.scss";

//libraries
import Stickyroll from "@stickyroll/react/stickyroll";

//components
import MapIntegration from "../Builder-Components/Map-Integration-Comp/map-integration";
import FloorMap from "../Builder-Components/Floor-Map-Comp/floor-map";
import WalkThrough from "../Builder-Components/Walk-Through-Comp/walk-through";
import DynamicPricing from "../Builder-Components/Dynamic-Pricing-Comp/dynamic-pricing";
import CRMIntegration from "../Builder-Components/CRM-Integration-Comp/crm-integration";
import MarketingIntegrationTool from "../Builder-Components/Marketing-Integration-Tool-Comp/marketing-integration-tool";
import LeadCollectionForm from "../Builder-Components/Lead-Collection-Form-Comp/lead-collection-form";
import LiveCameraView from "../Builder-Components/Live-Camera-View-Comp/live-camera-view";
import PushNotificationComp from "../Builder-Components/Push-Notification-Comp/push-notification-comp";
import PaymentGateway from "../Builder-Components/Payment-Gateway-Comp/payment-gateway";
import LiveInventory from "../Builder-Components/Live-Inventory-Comp/live-inventory";
import DataUpdating from "../Builder-Components/Data-Updating-Comp/data-updating";

//images
const Vector1 =
  "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/Frame1187.png";
const Vector2 =
  "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/Frame1205.png";
const _3DModelText =
  "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/3d-model-floor-mobile.png";
const walkThroughText =
  "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/walk-through-mobile.png";
const mapText =
  "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/map-integration-mobile.png";
const dynamicText =
  "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/dynamic-pricing-mobile.png";
const crmText =
  "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/crm-mobile.png";
const marketingText =
  "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/marketing-mobile.png";
const leadText =
  "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/lead-mobile.png";
const bgGroupedCircle =
  "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/bg-grouped-circle.png";
const liveTextImg =
  "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/live-camera-mobile.png";
const coinVector =
  "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/coin-vector.png";
const Vector3 =
  "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/vector3.png";
const pushNotificationText =
  "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/push-notif-mobile.png";
const paymentGatewayText =
  "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/payment-gateway-mobile.png";
const liveInventory =
  "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/live-inventory-mobile.png";
const blackPatternBG =
  "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/black-pattern-bg.png";
const vector4 =
  "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/builder-page/Frame1215.png";
const bgSphare =
  "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame915.png";

export default function BuilderPageResponsive() {
  const [pageProgress, setPageProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  const progress = [
    0.08, 0.16, 0.24, 0.32, 0.4, 0.48, 0.56, 0.64, 0.72, 0.8, 0.88, 0.96, 0.98,
  ];
  const [elementFloatOne, setElementFloatOne] = useState(false);
  const [elementFloatTwo, setElementFloatTwo] = useState(false);

  useEffect(() => {
    !elementFloatOne &&
      setTimeout(() => {
        setElementFloatOne(true);
      }, 4000);

    elementFloatOne &&
      setTimeout(() => {
        setElementFloatOne(false);
      }, 2000);
  }, [elementFloatOne]);

  useEffect(() => {
    !elementFloatOne &&
      setTimeout(() => {
        setElementFloatTwo(true);
      }, 6000);

    elementFloatOne &&
      setTimeout(() => {
        setElementFloatTwo(false);
      }, 4000);
  }, [elementFloatOne]);

  return (
    <div className={styles.BuilderPageMainContainer}>
      {/* <p style={{ position: "fixed", top: "0", color: "red", zIndex: "10" }}>
        {pageProgress}
      </p> */}

      <Stickyroll pages={1} factor={10} onProgress={(p) => setPageProgress(p)}>
        <div
          className={styles.BuilderPageMain}
          style={{
            backgroundColor: pageProgress > progress[11] && "#264ECC",
          }}
        >
          <img
            src={Vector2}
            alt=""
            className={styles.ElementOne}
            style={{
              transform: elementFloatOne && "translateY(5vh)",
              marginTop:
                pageProgress > progress[0] && pageProgress < progress[1]
                  ? "-85vh"
                  : pageProgress > progress[1] && "-140vh",
              marginRight: pageProgress > progress[1] && "-80vw",
              opacity: pageProgress < progress[1] && "1",
            }}
          />
          <img
            src={Vector1}
            alt=""
            className={styles.ElementTwo}
            style={{
              transform: elementFloatOne
                ? "translateY(10vh) rotate(18.5deg)"
                : !elementFloatOne && "translateY(0vh) rotate(18.5deg)",
              marginTop:
                pageProgress > progress[0] && pageProgress < progress[1]
                  ? "-10vh"
                  : pageProgress > progress[1] && "-50vh",
              marginLeft: pageProgress > progress[1] && "-140vw",
              opacity: pageProgress < progress[1] && "1",
            }}
          />
          <img
            src={Vector1}
            alt=""
            className={styles.ElementThree}
            style={{
              transform: elementFloatTwo
                ? "translateY(-5vh) rotate(18.5deg)"
                : !elementFloatTwo && "translateY(0vh) rotate(18.5deg)",

              marginBottom:
                pageProgress > progress[2] && pageProgress < progress[3]
                  ? "0vh"
                  : pageProgress > progress[3] && pageProgress < progress[4]
                  ? "100vh"
                  : pageProgress > progress[4] && "160vh",

              marginRight:
                pageProgress > progress[1] && pageProgress < progress[2]
                  ? "100vw"
                  : pageProgress > progress[2] && pageProgress < progress[3]
                  ? "200vw"
                  : pageProgress > progress[3] && pageProgress < progress[4]
                  ? "0vw"
                  : pageProgress > progress[4] && "-120vw",

              opacity: pageProgress > progress[2] && "0",
            }}
          />
          <img
            src={Vector1}
            alt=""
            className={styles.ElementFour}
            style={{
              transform: elementFloatOne
                ? "translateY(-5vh) rotate(18.5deg)"
                : !elementFloatOne && "translateY(0vh) rotate(18.5deg)",

              marginBottom:
                pageProgress > progress[0] && pageProgress < progress[1]
                  ? "-98vh"
                  : pageProgress > progress[1] && "0vh",
              marginLeft:
                pageProgress > progress[1] && pageProgress < progress[2]
                  ? "-102vw"
                  : pageProgress > progress[2] && "-140vw",
              // opacity: pageProgress < progress[2] && "1",
            }}
          />
          <img
            src={Vector1}
            alt=""
            className={styles.ElementFive}
            style={{
              transform: elementFloatTwo
                ? "translateY(5vh) rotate(18.5deg)"
                : !elementFloatTwo && "translateY(0vh) rotate(18.5deg)",
              marginTop:
                pageProgress > progress[0] && pageProgress < progress[1]
                  ? "-30vh"
                  : pageProgress > progress[1] && "-120vh",
              marginLeft: pageProgress > progress[1] && "-52vw",

              opacity: pageProgress < progress[1] && "1",
            }}
          />

          <img
            src={_3DModelText}
            alt=""
            className={styles._3dModelTextImg}
            style={{
              transform:
                pageProgress > progress[0] && pageProgress < progress[1]
                  ? "translate(10vw, -15vh)"
                  : pageProgress > progress[1] && "translate(-110vw, -100vh)",
              opacity:
                pageProgress > progress[0] && pageProgress < progress[1] && "1",
            }}
          />

          {/* ------------------------------------------------------------------- */}
          {/* ------------------------------------------------------------------- */}
          <img
            src={Vector1}
            alt=""
            className={styles.ElementSix}
            style={{
              transform: elementFloatTwo
                ? "translateY(5vh) rotate(18.5deg)"
                : !elementFloatTwo && "translateY(0vh) rotate(18.5deg)",

              marginTop:
                pageProgress > progress[1] && pageProgress < progress[2]
                  ? "-50vh"
                  : pageProgress > progress[2] && "-140vh",
              marginRight:
                pageProgress > progress[1] && pageProgress < progress[2]
                  ? "-40vw"
                  : pageProgress > progress[2] && "40vw",

              // opacity:
              //   pageProgress > progress[1]
              //     ? "1"
              //     : pageProgress < progress[2] && "1",
            }}
          />

          <img
            src={Vector2}
            alt=""
            className={styles.ElementSeven}
            style={{
              transform: elementFloatOne && "translateY(5vh)",
              marginTop:
                pageProgress > progress[1] && pageProgress < progress[2]
                  ? "20vh"
                  : pageProgress > progress[2] && "10vh",
              marginLeft:
                pageProgress > progress[1] && pageProgress < progress[2]
                  ? "-80vw"
                  : pageProgress > progress[2] && "-140vw",

              opacity:
                pageProgress > progress[1]
                  ? "1"
                  : pageProgress < progress[2] && "1",
            }}
          />

          <img
            src={Vector1}
            alt=""
            className={styles.ElementEight}
            style={{
              transform: elementFloatOne
                ? "translateY(-5vh) rotate(18.5deg)"
                : !elementFloatOne && "translateY(0vh) rotate(18.5deg)",
              marginBottom:
                pageProgress > progress[1] && pageProgress < progress[2]
                  ? "-95vh"
                  : pageProgress > progress[2] && "-10vh",
              marginLeft:
                pageProgress > progress[1] && pageProgress < progress[2]
                  ? "-50vw"
                  : pageProgress > progress[2] && "-140vw",

              // opacity:
              //   pageProgress > progress[1]
              //     ? "1"
              //     : pageProgress < progress[2] && "1",
            }}
          />

          <div
            className={styles.MapIntegrationOneDiv}
            style={{
              transform:
                pageProgress < progress[0]
                  ? "scale(0.95) translateY(10vh)"
                  : pageProgress > progress[0] && pageProgress < progress[1]
                  ? "scale(0.85) translateY(40vh)"
                  : pageProgress > progress[1] && pageProgress < progress[2]
                  ? "scale(0.85) translate(-60vw, -10vh)"
                  : pageProgress > progress[2] &&
                    "scale(0.85) translate(-50vw, -20vh)",

              filter: pageProgress > progress[0] && "blur(2px)",

              opacity: pageProgress > progress[2] && "0",
            }}
          >
            <MapIntegration
              ElementFloatOne={elementFloatOne}
              PageProgress={pageProgress}
              Progress={progress}
            />
          </div>

          <div
            className={styles.FloorMapOneDiv}
            style={{
              transform:
                pageProgress < progress[0]
                  ? "scale(1.2)"
                  : pageProgress > progress[0] && pageProgress < progress[1]
                  ? "scale(1.5) translate(0, -5vh)"
                  : pageProgress > progress[1] && pageProgress < progress[2]
                  ? "scale(1) translate(-30vw, -35vh)"
                  : pageProgress > progress[2] &&
                    "scale(1) translate(-80vw, -80vh)",
              filter: pageProgress > progress[1] && "blur(2px)",

              opacity:
                pageProgress > progress[0] && pageProgress < progress[2] && "1",

              marginTop:
                pageProgress > progress[0] &&
                pageProgress < progress[1] &&
                "-10vh",
            }}
          >
            <FloorMap
              ElementFloatTwo={elementFloatTwo}
              PageProgress={pageProgress}
              Progress={progress}
              Query={true}
            />
          </div>

          <div
            className={styles.WalkThroughOneDiv}
            style={{
              transform:
                pageProgress < progress[0]
                  ? "scale(0.95) translateY(10vh)"
                  : pageProgress > progress[0] && pageProgress < progress[1]
                  ? "scale(0.85) translateY(40vh)"
                  : pageProgress > progress[1] && pageProgress < progress[2]
                  ? "scale(1.5) translate(-15vw, -10vh)"
                  : pageProgress > progress[2] && pageProgress < progress[3]
                  ? "scale(0.85) translate(-70vw, -60vh)"
                  : pageProgress > progress[3] &&
                    "scale(0.85) translate(-88vw, -120vh)",

              filter:
                pageProgress > progress[0] && pageProgress < progress[1]
                  ? "blur(2px)"
                  : pageProgress > progress[2] && "blur(2px)",
            }}
          >
            <WalkThrough
              ElementFloatOne={elementFloatOne}
              PageProgress={pageProgress}
              Progress={progress}
              Query={true}
            />
          </div>

          <img
            src={walkThroughText}
            alt=""
            className={styles.WalkThroughTextImg}
            style={{
              transform:
                pageProgress > progress[1] && pageProgress < progress[2]
                  ? "translate(0) scale(1.1)"
                  : pageProgress > progress[2] && "translate(-110vw, 0)",
              opacity:
                pageProgress > progress[1] && pageProgress < progress[2] && "1",
            }}
          />

          {/* ------------------------------------------------------------------- */}
          {/* ------------------------------------------------------------------- */}

          <div
            className={styles.MapIntegrationTwoDiv}
            style={{
              transform:
                pageProgress > progress[1] && pageProgress < progress[2]
                  ? "translate(30vw,45vh)"
                  : pageProgress > progress[2] && pageProgress < progress[3]
                  ? "scale(1.75) translate(0vw, -5vh)"
                  : pageProgress > progress[3] && pageProgress < progress[4]
                  ? "scale(1) translate(45vw, -45vh)"
                  : pageProgress > progress[4] &&
                    "scale(0.85) translate(60vw, -120vh)",
              filter:
                pageProgress > progress[1] && pageProgress < progress[2]
                  ? "blur(2px)"
                  : pageProgress > progress[3] && "blur(2px)",

              opacity:
                pageProgress > progress[1] && pageProgress < progress[4] && "1",
            }}
          >
            <MapIntegration
              ElementFloatOne={elementFloatOne}
              PageProgress={pageProgress}
              Progress={progress}
              Query={true}
            />
          </div>

          <img
            src={Vector1}
            alt=""
            className={styles.ElementNine}
            style={{
              transform: elementFloatTwo
                ? "translateY(5vh) rotate(18.5deg)"
                : !elementFloatTwo && "translateY(0vh) rotate(18.5deg)",

              marginTop:
                pageProgress > progress[2] && pageProgress < progress[3]
                  ? "-60vh"
                  : pageProgress > progress[3] && "-140vh",
              marginLeft:
                pageProgress > progress[2] && pageProgress < progress[3]
                  ? "-90vw"
                  : pageProgress > progress[3] && "40vw",

              // opacity:
              //   pageProgress > progress[2] && pageProgress < progress[3] && "1",
            }}
          />
          <img
            src={Vector1}
            alt=""
            className={styles.ElementTen}
            style={{
              transform: elementFloatTwo
                ? "translateY(5vh) rotate(18.5deg)"
                : !elementFloatTwo && "translateY(0vh) rotate(18.5deg)",

              marginTop:
                pageProgress > progress[2] && pageProgress < progress[3]
                  ? "-20vh"
                  : pageProgress > progress[3] && "-40vh",
              marginRight:
                pageProgress > progress[2] && pageProgress < progress[3]
                  ? "-95vw"
                  : pageProgress > progress[3] && "-120vw",

              opacity:
                pageProgress < progress[2] && pageProgress > progress[4] && "1",
            }}
          />

          {/* <img
            src={_3DModelText}
            alt=""
            className={styles._3dModelText2Img}
            style={{
              transform:
                pageProgress > progress[1] && pageProgress < progress[2]
                  ? "translate(-30vw, -30vh)"
                  : pageProgress > progress[2] && "translate(-100vw, -30vh)",
              opacity: pageProgress > progress[1] && "1",
            }}
          /> */}
          <img
            src={mapText}
            alt=""
            className={styles.MapTextImg}
            style={{
              transform:
                pageProgress > progress[2] && pageProgress < progress[3]
                  ? "translate(0, -17vh) scale(1.25)"
                  : pageProgress > progress[3] &&
                    "translate(110vw, -35vh) scale(0.2)",
              opacity:
                pageProgress > progress[2] && pageProgress < progress[4] && "1",
            }}
          />
          {/* --------------------------------------------------------------------------------- */}
          {/* --------------------------------------------------------------------------------- */}

          <img
            src={Vector1}
            alt=""
            className={styles.ElementEleven}
            style={{
              transform: elementFloatTwo
                ? "translateY(5vh) rotate(18.5deg)"
                : !elementFloatTwo && "translateY(0vh) rotate(18.5deg)",

              marginBottom:
                pageProgress > progress[2] && pageProgress < progress[3]
                  ? "-100vh"
                  : pageProgress > progress[3] && pageProgress < progress[4]
                  ? "0vh"
                  : pageProgress > progress[4] && "40vh",
              marginLeft:
                pageProgress > progress[2] && pageProgress < progress[3]
                  ? "-20vw"
                  : pageProgress > progress[3] && pageProgress < progress[4]
                  ? "45vw"
                  : pageProgress > progress[4] && "200vh",
              filter: pageProgress > progress[3] && "blur(2px)",

              opacity:
                pageProgress > progress[1] && pageProgress < progress[5] && "1",
            }}
          />

          <div
            className={styles.DynamicPricingOneDiv}
            style={{
              transform:
                pageProgress > progress[2] && pageProgress < progress[3]
                  ? "translate(-30vw, 40vh)"
                  : pageProgress > progress[3] && pageProgress < progress[4]
                  ? "scale(1.75) translate(0, -5vh)"
                  : pageProgress > progress[4] && pageProgress < progress[5]
                  ? "translate(30vw, -35vh)"
                  : pageProgress > progress[5] && "translate(60vw, -120vh)",

              filter:
                pageProgress > progress[2] && pageProgress < progress[3]
                  ? "blur(2px)"
                  : pageProgress > progress[4] && "blur(2px)",

              opacity:
                pageProgress > progress[2] && pageProgress < progress[5] && "1",
            }}
          >
            <DynamicPricing
              ElementFloatOne={elementFloatOne}
              PageProgress={pageProgress}
              Progress={progress}
              Query={true}
            />
          </div>

          {/* --------------------------------------------------------------------- */}
          {/* --------------------------------------------------------------------- */}

          <img
            src={dynamicText}
            alt=""
            className={styles.DynamicTextImg}
            style={{
              transform:
                pageProgress > progress[2] && pageProgress < progress[3]
                  ? "translate(-110vw, -30vh) scale(0.6)"
                  : pageProgress > progress[3] && pageProgress < progress[4]
                  ? "translate(15vw, -25vh) scale(2)"
                  : pageProgress > progress[4] &&
                    "translate(40vw, -60vh) scale(0.5)",
              opacity: pageProgress > progress[3] && "1",
            }}
          />

          <img
            src={bgSphare}
            alt=""
            className={styles.ElementTwelve}
            style={{
              transform: elementFloatTwo
                ? "translateY(5vh) rotate(18.5deg)"
                : !elementFloatTwo && "translateY(0vh) rotate(18.5deg)",
              marginBottom:
                pageProgress > progress[3] && pageProgress < progress[4]
                  ? "-80vh"
                  : pageProgress > progress[4] && "-0vh",
              marginRight:
                pageProgress > progress[3] && pageProgress < progress[4]
                  ? "-76vw"
                  : pageProgress > progress[4] && "-160vw",

              opacity:
                pageProgress > progress[3] && pageProgress < progress[4] && "1",
            }}
          />
          <img
            src={bgSphare}
            alt=""
            className={styles.ElementThirteen}
            style={{
              transform: elementFloatTwo
                ? "translateY(5vh) rotate(18.5deg)"
                : !elementFloatTwo && "translateY(0vh) rotate(18.5deg)",
              marginTop:
                pageProgress > progress[3] && pageProgress < progress[4]
                  ? "-80vh"
                  : pageProgress > progress[4] && "-120vh",
              marginLeft:
                pageProgress > progress[3] && pageProgress < progress[4]
                  ? "-45vw"
                  : pageProgress > progress[4] && "-25vw",

              opacity:
                pageProgress > progress[3] && pageProgress < progress[4] && "1",
            }}
          />
          <img
            src={bgSphare}
            alt=""
            className={styles.ElementFourteen}
            style={{
              transform: elementFloatTwo
                ? "translateY(5vh) rotate(18.5deg)"
                : !elementFloatTwo && "translateY(0vh) rotate(18.5deg)",
              marginTop:
                pageProgress > progress[3] && pageProgress < progress[4]
                  ? "-20vh"
                  : pageProgress > progress[4] && pageProgress < progress[5]
                  ? "-90vh"
                  : pageProgress > progress[5] && "-120vh",

              marginLeft:
                pageProgress > progress[3] && pageProgress < progress[4]
                  ? "-95vw"
                  : pageProgress > progress[4] && pageProgress < progress[5]
                  ? "-80vw"
                  : pageProgress > progress[5] && "-70vw",

              opacity:
                pageProgress > progress[3] && pageProgress < progress[5] && "1",
            }}
          />
          {/* --------------------------------------------------------------------- */}
          {/* --------------------------------------------------------------------- */}

          <img
            src={bgSphare}
            alt=""
            className={styles.ElementFifteen}
            style={{
              transform: elementFloatTwo
                ? "translateY(5vh) rotate(18.5deg)"
                : !elementFloatTwo && "translateY(0vh) rotate(18.5deg)",

              marginTop:
                pageProgress > progress[3] && pageProgress < progress[4]
                  ? "25vh"
                  : pageProgress > progress[4] && pageProgress < progress[5]
                  ? "-35vh"
                  : pageProgress > progress[5] && "-65vh",

              marginLeft:
                pageProgress > progress[3] && pageProgress < progress[4]
                  ? "-15vw"
                  : pageProgress > progress[4] && pageProgress < progress[5]
                  ? "80vw"
                  : pageProgress > progress[5] && "120vw",

              // opacity:
              //   pageProgress > progress[3] && pageProgress < progress[5] && "1",
            }}
          />

          <div
            className={styles.CrmIntegrationOneDiv}
            style={{
              transform:
                pageProgress > progress[3] && pageProgress < progress[4]
                  ? "translate(-35vw, 45vh) scale(0.8)"
                  : pageProgress > progress[4] && pageProgress < progress[5]
                  ? "translate(0, -5vh) scale(1.75)"
                  : pageProgress > progress[5] && pageProgress < progress[6]
                  ? "translate(40vw, -60vh)"
                  : pageProgress > progress[6] && "translate(60vw, -100vh)",

              filter:
                pageProgress < progress[4]
                  ? "blur(2px)"
                  : pageProgress > progress[5] && "blur(2px)",

              opacity:
                pageProgress > progress[2] && pageProgress < progress[5] && "1",
            }}
          >
            <CRMIntegration
              ElementFloatTwo={elementFloatOne}
              PageProgress={pageProgress}
              Progress={progress}
              Query={true}
            />
          </div>
          <img
            src={crmText}
            alt=""
            className={styles.CrmTextImg}
            style={{
              transform:
                pageProgress > progress[3] && pageProgress < progress[4]
                  ? "translate(85vw, 10vh) scale(0.6)"
                  : pageProgress > progress[4] && pageProgress < progress[5]
                  ? "translate(0, -25vh) scale(2)"
                  : pageProgress > progress[5] &&
                    "translate(40vw, -60vh)  scale(0.6)",
              opacity:
                pageProgress > progress[4] && pageProgress < progress[5] && "1",
            }}
          />

          <div
            className={styles.MarketingIntegrationToolDiv}
            style={{
              transform:
                pageProgress > progress[4] && pageProgress < progress[5]
                  ? "translate(-25vw, 50vh) scale(0.8)"
                  : pageProgress > progress[5] && pageProgress < progress[6]
                  ? "translate(0, -10vh) scale(2)"
                  : pageProgress > progress[6] &&
                    "translate(-60vw, -80vh) scale(0.8) rotate(-15deg)",

              filter: pageProgress < progress[5] && "blur(2px)",
            }}
          >
            <MarketingIntegrationTool
              ElementFloatTwo={elementFloatOne}
              PageProgress={pageProgress}
              Progress={progress}
              Query={true}
            />
          </div>

          <img
            src={marketingText}
            alt=""
            className={styles.MarketingTextImg}
            style={{
              transform:
                pageProgress > progress[5] && pageProgress < progress[6]
                  ? "translate(60vw, 15vh) scale(2.5)"
                  : pageProgress > progress[6] && "translate(40vw, -120vh)",
            }}
          />

          <div
            className={styles.LeadCollectionFormDiv}
            style={{
              transform:
                pageProgress > progress[5] && pageProgress < progress[6]
                  ? "translate(25vw, 40vh)"
                  : pageProgress > progress[6] && pageProgress < progress[7]
                  ? "translate(0, -10vh) scale(2)"
                  : pageProgress > progress[7] &&
                    "translate(60vw, -100vh) scale(0.8) rotate(15deg)",

              filter: pageProgress < progress[6] && "blur(2px)",
            }}
          >
            <LeadCollectionForm
              ElementFloatOne={elementFloatOne}
              PageProgress={pageProgress}
              Progress={progress}
              Query={true}
            />
          </div>

          <img
            src={leadText}
            alt=""
            className={styles.LeadTextImg}
            style={{
              transform:
                pageProgress > progress[6] && pageProgress < progress[7]
                  ? "translate(10vw, -30vh) scale(1.2)"
                  : pageProgress > progress[7] && "translate(40vw, -120vh)",
            }}
          />

          <img
            src={bgSphare}
            alt=""
            className={styles.ElementSixteen}
            style={{
              transform: elementFloatTwo
                ? "translateY(5vh) rotate(18.5deg)"
                : !elementFloatTwo && "translateY(0vh) rotate(18.5deg)",

              marginTop:
                pageProgress > progress[4] && pageProgress < progress[5]
                  ? "20vh"
                  : pageProgress > progress[5] && pageProgress < progress[6]
                  ? "-90vh"
                  : pageProgress > progress[6] && "-120vh",

              marginLeft:
                pageProgress > progress[4] && pageProgress < progress[5]
                  ? "-60vw"
                  : pageProgress > progress[5] && pageProgress < progress[6]
                  ? "-50vw"
                  : pageProgress > progress[6] && "-95vw",

              filter:
                pageProgress > progress[5] && pageProgress < progress[6]
                  ? "blur(2px)"
                  : pageProgress > progress[6] && "blur(0px)",

              opacity:
                pageProgress > progress[4] && pageProgress < progress[6] && "1",
            }}
          />
          <img
            src={Vector1}
            alt=""
            className={styles.ElementSeventeen}
            style={{
              transform: elementFloatTwo
                ? "translateY(-5vh) rotate(10.5deg)"
                : !elementFloatTwo && "translateY(0vh) rotate(10.5deg)",

              marginTop:
                pageProgress > progress[4] && pageProgress < progress[5]
                  ? "-90vh"
                  : pageProgress > progress[5] && pageProgress < progress[6]
                  ? "60vh"
                  : pageProgress > progress[6] && "-25vh",

              marginLeft:
                pageProgress > progress[4] && pageProgress < progress[5]
                  ? "-110vw"
                  : pageProgress > progress[5] && pageProgress < progress[6]
                  ? "-80vw"
                  : pageProgress > progress[6] && pageProgress < progress[8]
                  ? "-110vw"
                  : pageProgress > progress[8] && "-140vw",

              // opacity: pageProgress > progress[5] && "0.4",
              filter: pageProgress > progress[5] && "blur(2px)",
            }}
          />
          {/* ----------------------------------------------------------------------- */}
          {/* ----------------------------------------------------------------------- */}

          <img
            src={bgGroupedCircle}
            alt=""
            className={styles.BgGroupedCircleImg}
            style={{
              transform:
                pageProgress > progress[5] && pageProgress < progress[9]
                  ? "translate(0, 8vh) scale(2)"
                  : pageProgress > progress[10] &&
                    "translateY(50vh) scale(0.6)",
            }}
          />
          <img
            src={bgGroupedCircle}
            alt=""
            className={styles.BgGroupedCircle2Img}
            style={{
              transform:
                pageProgress > progress[6] && pageProgress < progress[7]
                  ? "translateY(-5vh) scale(-0.6)"
                  : pageProgress > progress[7] &&
                    "translateY(-60vh) scale(0.6)",
            }}
          />

          <img
            src={bgSphare}
            alt=""
            className={styles.ElementEighteen}
            style={{
              transform: elementFloatTwo
                ? "translateY(5vh) rotate(18.5deg)"
                : !elementFloatTwo && "translateY(0vh) rotate(18.5deg)",
              marginTop:
                pageProgress > progress[5] && pageProgress < progress[6]
                  ? "-50vh"
                  : pageProgress > progress[6] && "-120vh",
              marginLeft:
                pageProgress > progress[5] && pageProgress < progress[6]
                  ? "-94vw"
                  : pageProgress > progress[6] && "-24vw",

              opacity:
                pageProgress > progress[5] && pageProgress < progress[6] && "1",
            }}
          />

          <img
            src={Vector2}
            alt=""
            className={styles.ElementNinteen}
            style={{
              transform:
                elementFloatOne && pageProgress < progress[5]
                  ? "translateY(-5vh) rotate(160deg)"
                  : !elementFloatOne && pageProgress < progress[5]
                  ? "translateY(0vh) rotate(160deg)"
                  : elementFloatTwo &&
                    pageProgress > progress[5] &&
                    pageProgress < progress[6]
                  ? "translateY(-5vh) rotate(18.5deg)"
                  : !elementFloatOne &&
                    pageProgress > progress[5] &&
                    pageProgress < progress[6]
                  ? "translateY(0vh) rotate(18.5deg)"
                  : elementFloatOne && pageProgress > progress[6]
                  ? "translateY(-5vh) scale(0.8) rotate(-20deg)"
                  : !elementFloatOne &&
                    pageProgress > progress[6] &&
                    "translateY(0vh) scale(0.8) rotate(-20deg)",

              marginBottom:
                pageProgress > progress[5] && pageProgress < progress[6]
                  ? "-80vh"
                  : pageProgress > progress[6] && pageProgress < progress[7]
                  ? "0vh"
                  : pageProgress > progress[7] && "140vh",

              marginLeft:
                pageProgress > progress[5] && pageProgress < progress[6]
                  ? "-85vw"
                  : pageProgress > progress[6] && pageProgress < progress[7]
                  ? "-94vw"
                  : pageProgress > progress[7] && "-44vw",

              opacity:
                pageProgress > progress[5] && pageProgress < progress[7] && "1",
            }}
          />
          <img
            src={Vector2}
            alt=""
            className={styles.ElementTwenty}
            style={{
              transform:
                elementFloatTwo && pageProgress < progress[5]
                  ? "translateY(5vh) rotate(60.5deg)"
                  : !elementFloatTwo && pageProgress < progress[5]
                  ? "translateY(0vh) rotate(60deg)"
                  : elementFloatTwo &&
                    pageProgress > progress[5] &&
                    pageProgress < progress[6]
                  ? "translateY(5vh) scale(0.5) rotate(140.5deg)"
                  : !elementFloatTwo &&
                    pageProgress > progress[5] &&
                    pageProgress < progress[6]
                  ? "translateY(0vh) scale(0.5) rotate(140deg)"
                  : elementFloatTwo && pageProgress > progress[6]
                  ? "translateY(5vh) scale(0.6) rotate(40deg)"
                  : !elementFloatTwo &&
                    pageProgress > progress[6] &&
                    "translateY(0vh) scale(0.6) rotate(40deg)",

              marginTop:
                pageProgress > progress[5] && pageProgress < progress[6]
                  ? "40vh"
                  : pageProgress > progress[6] && pageProgress < progress[7]
                  ? "-10vh"
                  : pageProgress > progress[7] && "-120vh",

              marginLeft:
                pageProgress > progress[5] && pageProgress < progress[6]
                  ? "75vw"
                  : pageProgress > progress[6] && pageProgress < progress[7]
                  ? "75vw"
                  : pageProgress > progress[7] && "120vw",

              opacity:
                pageProgress > progress[5] && pageProgress < progress[7] && "1",
            }}
          />
          <img
            src={Vector2}
            alt=""
            className={styles.ElementTwentyone}
            style={{
              transform:
                elementFloatTwo && pageProgress < progress[5]
                  ? "translateY(-5vh) rotate(140deg)"
                  : !elementFloatTwo && pageProgress < progress[5]
                  ? "translateY(0vh) rotate(140deg)"
                  : elementFloatTwo && pageProgress > progress[5]
                  ? "translateY(-5vh) scale(0.6) rotate(140deg)"
                  : !elementFloatTwo &&
                    pageProgress > progress[5] &&
                    "translateY(0vh) scale(0.6) rotate(140deg)",

              marginTop:
                pageProgress > progress[5] && pageProgress < progress[6]
                  ? "-55vh"
                  : pageProgress > progress[6] && pageProgress < progress[7]
                  ? "-40vh"
                  : pageProgress > progress[7] && "-120vh",

              marginLeft:
                pageProgress > progress[5] && pageProgress < progress[6]
                  ? "-20vw"
                  : pageProgress > progress[6] && "-30vw",

              opacity:
                pageProgress > progress[5] && pageProgress < progress[7] && "1",
            }}
          />

          {/* ----------------------------------------------------------------------------------------- */}
          {/* ----------------------------------------------------------------------------------------- */}

          <img
            src={liveTextImg}
            alt=""
            className={styles.LiveTextImg}
            style={{
              transform:
                pageProgress > progress[7] && pageProgress < progress[8]
                  ? "translate(10vw, -20vh) scale(2)"
                  : pageProgress > progress[8] && "translate(40vw, -120vh)",
            }}
          />

          <div
            className={styles.LiveCameraViewDiv}
            style={{
              transform:
                pageProgress < progress[7]
                  ? "translate(-25vw, 80vh) scale(0.8) rotate(55deg)"
                  : pageProgress > progress[7] && pageProgress < progress[8]
                  ? "translate(0vw, -5vh) scale(2) rotate(55deg)"
                  : pageProgress > progress[8] && pageProgress < progress[9]
                  ? "translate(-35vw, -40vh) scale(0.8) rotate(55deg)"
                  : pageProgress > progress[9] &&
                    "translate(-45vw, -60vh) scale(0.8) rotate(55deg)",

              opacity: pageProgress < progress[8] && "1",

              filter: pageProgress > progress[8] && "blur(2px)",
            }}
          >
            <LiveCameraView
              ElementFloatOne={elementFloatOne}
              PageProgress={pageProgress}
              Progress={progress}
              Query={true}
            />
          </div>

          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}

          <img
            src={coinVector}
            alt=""
            className={styles.ElementTwentytwo}
            style={{
              transform: elementFloatTwo
                ? "translateY(5vh) rotate(18.5deg)"
                : !elementFloatTwo && "translateY(0vh) rotate(18.5deg)",

              marginTop:
                pageProgress > progress[8] && pageProgress < progress[9]
                  ? "92vh"
                  : pageProgress > progress[9] && "-92vh",

              marginLeft:
                pageProgress > progress[8] && pageProgress < progress[9]
                  ? "90vw"
                  : pageProgress > progress[9] && "150vw",

              opacity:
                pageProgress > progress[8] &&
                pageProgress < progress[10] &&
                "1",
            }}
          />
          <img
            src={coinVector}
            alt=""
            className={styles.ElementTwentythree}
            style={{
              transform: elementFloatTwo
                ? "translateY(5vh) rotate(18.5deg)"
                : !elementFloatTwo && "translateY(0vh) rotate(18.5deg)",

              marginTop:
                pageProgress > progress[8] && pageProgress < progress[9]
                  ? "-60vh"
                  : pageProgress > progress[9] && "-120vh",
              marginLeft:
                pageProgress > progress[8] && pageProgress < progress[9]
                  ? "0vw"
                  : pageProgress > progress[9] && "-85vw",

              opacity:
                pageProgress > progress[8] && pageProgress < progress[9] && "1",
            }}
          />
          <img
            src={bgSphare}
            alt=""
            className={styles.ElementTwentyfour}
            style={{
              transform: elementFloatOne
                ? "translateY(5vh) rotate(-10deg)"
                : !elementFloatOne && "translateY(0vh) rotate(-10deg)",

              marginTop:
                pageProgress > progress[7] && pageProgress < progress[8]
                  ? "-85vh"
                  : pageProgress > progress[8] && "-120vh",
              marginLeft:
                pageProgress > progress[7] && pageProgress < progress[8]
                  ? "0vw"
                  : pageProgress > progress[8] && "-85vw",

              opacity:
                pageProgress > progress[7] && pageProgress < progress[8] && "1",
            }}
          />
          <img
            src={bgSphare}
            alt=""
            className={styles.ElementTwentyfive}
            style={{
              transform: elementFloatOne
                ? "translateY(5vh) rotate(-10deg)"
                : !elementFloatOne && "translateY(0vh) rotate(-10deg)",

              marginTop:
                pageProgress > progress[7] && pageProgress < progress[8]
                  ? "50vh"
                  : pageProgress > progress[8] && "-120vh",
              marginLeft:
                pageProgress > progress[7] && pageProgress < progress[8]
                  ? "65vw"
                  : pageProgress > progress[8] && "-85vw",

              opacity:
                pageProgress > progress[7] && pageProgress < progress[8] && "1",
            }}
          />
          <img
            src={bgSphare}
            alt=""
            className={styles.ElementTwentysix}
            style={{
              transform: elementFloatTwo
                ? "translateY(5vh) rotate(18.5deg)"
                : !elementFloatTwo && "translateY(0vh) rotate(18.5deg)",

              marginTop:
                pageProgress > progress[7] && pageProgress < progress[8]
                  ? "-20vh"
                  : pageProgress > progress[8] && "-120vh",
              marginLeft:
                pageProgress > progress[7] && pageProgress < progress[8]
                  ? "-65vw"
                  : pageProgress > progress[8] && "-105vw",

              // opacity:
              //   pageProgress > progress[7] && pageProgress < progress[8] && "1",
            }}
          />

          <img
            src={paymentGatewayText}
            alt=""
            className={styles.PaymentGatewayTextImg}
            style={{
              marginLeft:
                pageProgress > progress[8] && pageProgress < progress[9]
                  ? "0vw"
                  : pageProgress > progress[9] && "120vw",

              marginTop: pageProgress > progress[9] && "-120vh",
              transform:
                pageProgress > progress[8] &&
                pageProgress < progress[9] &&
                "scale(1.5)",
            }}
          />
          <img
            src={pushNotificationText}
            alt=""
            className={styles.PushNotificationTextImg}
            style={{
              marginLeft:
                pageProgress > progress[9] && pageProgress < progress[10]
                  ? "0vw"
                  : pageProgress > progress[10] && "-100vw",

              marginTop: pageProgress > progress[10] && "-150vh",
              transform:
                pageProgress > progress[9] &&
                pageProgress < progress[10] &&
                "scale(1.5)",
            }}
          />

          <div
            className={styles.PushNotificationDiv}
            style={{
              transform:
                pageProgress > progress[8] && pageProgress < progress[9]
                  ? "translate(-10vw, 40vh) scale(1.4)"
                  : pageProgress > progress[9] && pageProgress < progress[10]
                  ? "translate(20vw, -10vh) scale(2)"
                  : pageProgress > progress[10] && pageProgress < progress[11]
                  ? "translate(-15vw, -40vh) scale(0.8)"
                  : pageProgress > progress[11] && "translate(-60vw, -100vh)",

              filter: pageProgress > progress[10] && "blur(2px)",
            }}
          >
            <PushNotificationComp
              ElementFloatTwo={elementFloatTwo}
              PageProgress={pageProgress}
              Progress={progress}
              Query={true}
            />
          </div>
          <div
            className={styles.PaymentGatewayDiv}
            style={{
              transform:
                pageProgress > progress[7] && pageProgress < progress[8]
                  ? "translate(15vw, 40vh) scale(1.2)"
                  : pageProgress > progress[8] && pageProgress < progress[9]
                  ? "translate(-20vw, -10vh) scale(2)"
                  : pageProgress > progress[9] && pageProgress < progress[10]
                  ? "translate(15vw, -40vh) scale(0.8)"
                  : pageProgress > progress[10] && "translate(-60vw, -100vh)",

              filter: pageProgress > progress[9] && "blur(2px)",
            }}
          >
            <PaymentGateway
              ElementFloatOne={elementFloatOne}
              PageProgress={pageProgress}
              Progress={progress}
              Query={true}
            />
          </div>

          {/* -------------------------------------------------------- */}
          {/* -------------------------------------------------------- */}

          <img
            src={blackPatternBG}
            alt=""
            className={styles.BlackPatternBgImg}
            style={{
              transform:
                pageProgress > progress[10] && "translate(0, -10vh) scale(2)",
              opacity: pageProgress > progress[11] && "0",
            }}
          />
          <img
            src={liveInventory}
            alt=""
            className={styles.LiveInventoryImg}
            style={{
              transform:
                pageProgress > progress[10] && pageProgress < progress[11]
                  ? "translate(50vw, 0vh) scale(2)"
                  : pageProgress > progress[11] && "translate(40vw, -120vh)",
            }}
          />
          <img
            src={Vector3}
            alt=""
            className={styles.ElementTwentyseven}
            style={{
              transform: elementFloatOne
                ? "translateY(5vh) rotate(-80deg)"
                : !elementFloatOne && "translateY(0vh) rotate(-80deg)",

              marginTop:
                pageProgress > progress[8] && pageProgress < progress[9]
                  ? "90vh"
                  : pageProgress > progress[9] && "-120vh",
              marginLeft:
                pageProgress > progress[8] && pageProgress < progress[9]
                  ? "-90vw"
                  : pageProgress > progress[9] && "40vw",

              // opacity:
              //   pageProgress > progress[8] && pageProgress < progress[9] && "1",
            }}
          />

          <div
            className={styles.LiveInventoryDiv}
            style={{
              transform:
                pageProgress > progress[9] && pageProgress < progress[10]
                  ? "translate(-40vw, 40vh) scale(1.5)"
                  : pageProgress > progress[10] && pageProgress < progress[11]
                  ? "translate(-10vw, -10vh) scale(2)"
                  : pageProgress > progress[11] &&
                    "translate(40vw, -120vh) scale(0.6)",

              filter:
                pageProgress > progress[9] &&
                pageProgress < progress[10] &&
                "blur(2px)",
            }}
          >
            <LiveInventory
              ElementFloatOne={elementFloatOne}
              PageProgress={pageProgress}
              Progress={progress}
              Query={true}
            />
          </div>

          {/* ---------------------------------------------------------- */}
          {/* ---------------------------------------------------------- */}

          <img
            src={vector4}
            alt=""
            className={styles.ElementTwentyeight}
            style={{
              transform: elementFloatOne
                ? "translateY(5vh) rotate(-150deg)"
                : !elementFloatOne && "translateY(0vh) rotate(-150deg)",

              marginTop: pageProgress > progress[11] && "55vh",
              marginLeft: pageProgress > progress[11] && "-35vw",

              opacity: pageProgress > progress[11] && "1",
            }}
          />
          <img
            src={vector4}
            alt=""
            className={styles.ElementTwentynine}
            style={{
              transform: elementFloatOne
                ? "translateY(5vh) rotateX(25deg)"
                : !elementFloatOne && "translateY(0vh) rotateX(25deg)",

              marginTop: pageProgress > progress[11] && "85vh",
              marginLeft: pageProgress > progress[11] && "85vw",

              opacity: pageProgress > progress[11] && "1",
            }}
          />
          <img
            src={vector4}
            alt=""
            className={styles.ElementThirty}
            style={{
              transform: elementFloatOne
                ? "translateY(5vh) rotateX(25deg)"
                : !elementFloatOne && "translateY(0vh) rotateX(25deg)",

              marginTop: pageProgress > progress[11] && "-85vh",
              marginLeft: pageProgress > progress[11] && "-105vw",

              opacity: pageProgress > progress[11] && "1",
            }}
          />
          <img
            src={vector4}
            alt=""
            className={styles.ElementThirtyone}
            style={{
              transform: elementFloatOne
                ? "translateY(5vh)  rotate(-85deg)"
                : !elementFloatOne && "translateY(0vh)  rotate(-85deg)",

              marginTop: pageProgress > progress[11] && "-25vh",
              marginLeft: pageProgress > progress[11] && "-38vw",

              opacity: pageProgress > progress[11] && "1",
            }}
          />

          <div
            className={styles.DataUpdatingDiv}
            style={{
              transform:
                pageProgress > progress[11] && "translate(0vw) scale(2)",

              // filter: pageProgress > progress[7] && 'blur(2px)',
            }}
          >
            <DataUpdating
              ElementFloatOne={elementFloatOne}
              PageProgress={pageProgress}
              Progress={progress}
              Query={true}
            />
          </div>
        </div>
      </Stickyroll>
    </div>
  );
}
