import React, { useState, useEffect, useRef } from "react";

//styles
import "./welcome-page.scss";

//components
// import FooterComp from "../../../components/Footer-Comp/footer-comp";

//Dependency
import { Stickyroll } from "@stickyroll/react";

import { OurPricingData } from "../../Our-Pricing-Page/op-comp-data";

//components

// import OPCompThree from '../../Our-Pricing-Page/OP-Comp-Three/op-comp-three'

import LPContactUsComp from "../Landing-Page-Nested-Comp/LP-Contact-US-Comp/lp-contact-us-comp";
import LogoVectorComp from "../../Differentiator-Page/Logo-Vector-Comp/logo-vector-comp";
import LogoVectorMobileComp from "../../Differentiator-Page/Logo-Vector-mobile-Comp/logo-vector-mobile-comp";
import WhyChooseUs from "../Landing-Page-Nested-Comp/Why-Choose-Us/why-choose-us";
// import GetFundedComp from "../Landing-Page-Nested-Comp/Get-Funded-Comp/get-funded-comp";
import CardComp from "../Landing-Page-Nested-Comp/Card-Comp/card-comp";
import OurFeatureComp from "../Landing-Page-Nested-Comp/Our-Feature-Comp/our-feature-comp";
// import ServicesComp from "../Landing-Page-Nested-Comp/Services-Comp/services-comp";
// import FooterComp from "../../../components/Footer-Comp/footer-comp";
import BrandListComp from "../../Home-Page/Brand-List-Comp/brand-list-comp";
import BuilderPage from "../../Builder-Page/builder-page";
import BuilderPageResponsive from "../../Builder-Page/Builder-Page-Responsive/builder-page-responsive";

// import BuilderPage from '../../Builder-Page/builder-page';

export default function WelcomePage(props) {
  const ScrollToTopFun = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    ScrollToTopFun();
  }, []);

  //images
  const bgImg =
    "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/Group732.png";
  const frame1 =
    "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/frame-654.png";
  const frame2 =
    "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/frame-851.png";
  const frame3 =
    "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/frame-852.png";
  const frame4 =
    "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/frame-854.png";
  const frame5 =
    "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/MacBook-Pro-6.png";
  const frame6 =
    "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/MacBook-Pro-16-579.png";
  // const WhatsappIcon2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/nav-bar-img/whatsapp_neon.svg';
  // const logoImg =
  //   "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/nav-bar-img/frame577.png";

  const elementOne = useRef(null);
  const elementTwo = useRef(null);
  const elementThree = useRef(null);
  const elementFour = useRef(null);
  const elementFive = useRef(null);
  // const elementSix = useRef(null);
  const elementSeven = useRef(null);

  const Calender =
    "https://calendly.com/pitch-catalyst/30min?back=1&month=2023-06";
  const [calendlyVisibility, setCalendlyVisibility] = useState(false);

  function handleCalendlyTrue() {
    setCalendlyVisibility(true);
  }

  // eslint-disable-next-line
  function handleCalendlyFalse() {
    setCalendlyVisibility(false);
  }

  // const scrollToElement = (elementName) => {
  //   elementName.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };

  const cardGroupOneData = [
    {
      imgURL: frame1,

      name: "aNALYTICS",

      details: `Unleash impactful insights with data-driven analytics for informed and resonant presentations.`,
    },
    {
      imgURL: frame2,
      name: "DASHBOARD ACCESS",
      details: `Elevate your Pitch Catalyst experience with DeckMaster's integrated deck management, AI analysis, and networking capabilities.`,
    },
    {
      imgURL: frame3,
      name: "API INTEGRATION",
      details: `Easily integrate APIs to convert pitches into dynamic, data-driven experiences on Pitch Catalyst.`,
    },
  ];
  const cardGroupTwoData = [
    {
      imgURL: frame4,
      name: "live data integration",
      details: `Say goodbye to outdated figures. With our live data integration, your deck remains updated, accurate, and engaging.`,
    },
    {
      imgURL: frame5,
      name: "CREATE SUBDOMAIN",

      details: `Enhance investor engagement through customized sub-domains for personalized pitch experiences.`,
    },
    {
      imgURL: frame6,
      name: "EDIT YOUR DECK",

      // details: `Enhance your pitch deck for accuracy, clarity, impact, and effective communication.`
      details: `Access "Edit Your Deck" in the Dashboard to refine your pitch, tailor slides and content to make your presentaion rich.`,
    },
  ];

  //images
  const Lamp =
    "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/our-pricing/lamp769.svg";
  const CardTwo =
    "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/Group841.png";
  const CardOne =
    "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/Group840.png";
  const CardThree =
    "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/Group849.png";
  const CardFour =
    "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/Group850.png";

  const [clientHgt, setClientHgt] = useState(
    document.documentElement.offsetHeight
  );
  // eslint-disable-next-line
  const [scrolling, setScrolling] = useState(0);

  useEffect(() => {
    setClientHgt(document.documentElement.offsetHeight);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setOPCompScrolling(1.2);
    }, 500);
  }, []);

  const [OPCompScrolling, setOPCompScrolling] = useState(0);
  const [OPCompScrolling1, setOPCompScrolling1] = useState(0);
  const [staticAndInterActive, setStaticAndInterActive] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrolling(window.scrollY);
      const position = window.scrollY;

      let scrollCount = 0; // from what value we started scrolling.
      let scrollHeight = clientHgt * 0.102775; // according to window height.

      const OPScrolling =
        position >= scrollCount * 4 &&
        position <= scrollCount + scrollHeight * 8
          ? "1.3"
          : position >= scrollCount + scrollHeight * 8 &&
            position <= scrollCount + scrollHeight * 12
          ? "1.4"
          : position >= scrollCount + scrollHeight * 12 && "2";

      const OPScrolling1 =
        staticAndInterActive > "0" && staticAndInterActive <= "0.2"
          ? "0.8"
          : staticAndInterActive >= "0.2" && "1";

      setOPCompScrolling(OPScrolling);
      setOPCompScrolling1(OPScrolling1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, [staticAndInterActive]);

  return (
    <div className="landing-page-main-page">
      {/* <p style={{ position: 'fixed', color: 'white', top: '20%', left: '1%', zIndex: '10' }}>{scrolling.toString()} / {OPCompScrolling.toString()} / {OPCompScrolling1.toString()}</p> */}

      <div
        className="frame-contant-div"
        onClick={handleCalendlyFalse}
        style={{
          display: !calendlyVisibility && "none",
        }}
      >
        <span className="cross-btn" onClick={handleCalendlyFalse}>
          &#x2715;
        </span>
        <iframe title="title" id="iframe-calendly" src={Calender} />
      </div>

      {/* ---------------------------- NAV BAR ----------------------------- */}

      {/* <div className="nav-bar-container">
        <img
          src={logoImg}
          alt=""
          onClick={ScrollToTopFun}
          className="nav-bar-logo-img"
        />

        {!props.Query && (
          <div
            onClick={() => {
              scrollToElement(elementOne);
            }}
          >
            CHAT
          </div>
        )}
        {!props.Query && (
          <div
            onClick={() => {
              scrollToElement(elementTwo);
            }}
          >
            Services
          </div>
        )}
        {!props.Query && (
          <div
            onClick={() => {
              scrollToElement(elementThree);
            }}
          >
            Features
          </div>
        )}
        {!props.Query && (
          <div
            onClick={() => {
              scrollToElement(elementFour);
            }}
          >
            Differentiator
          </div>
        )}
        {!props.Query && (
          <div
            onClick={() => {
              scrollToElement(elementFive);
            }}
          >
            Why Choose Us
          </div>
        )}
        {!props.Query && (
          <div
            onClick={() => {
              scrollToElement(elementSix);
            }}
          >
            Get Funded
          </div>
        )}
        {!props.Query && (
          <div
            onClick={() => {
              scrollToElement(elementSeven);
            }}
          >
            Packages
          </div>
        )}
        {!props.Query && (
          <Link to="/careers" className="link-tag">
            Careers
          </Link>
        )}

        <div className="whatsapp-div">
          <div className="inner-div">
            <a
              href="https://wa.me/9711750002?text=Hey there, seeking deck expertise – can we sync up for a chat? "
              target="_blank"
              rel="noreferrer"
            >
              <img src={WhatsappIcon2} alt="" className="whatsapp-icon" />
            </a>
          </div>
        </div>
      </div> */}

      {/* --------------------------- CHAT WITH US ------------------------- */}

      <Stickyroll pages={1} factor={1}>
        <div className="lp-contact-us-comp" ref={elementOne}>
          <LPContactUsComp
            OPCompScrolling={OPCompScrolling}
            Query={props.Query}
          />
        </div>
      </Stickyroll>

      <hr className="hr-line" />

      {/* ------------------------- BUILDERS -------------------------------  */}

      <div className="builder-section" ref={elementTwo}>
        {props.Query ? <BuilderPageResponsive /> : <BuilderPage />}
      </div>

      {/* ------------------------- SERVICES -------------------------------  */}

      {/* <div className="services-section" ref={elementTwo}>
                <ServicesComp Query={props.Query} />
            </div> */}

      {/* ------------------------ OUR FEATURES ----------------------------- */}

      <div className="our-features-section" ref={elementThree}>
        <div className="card-container">
          <div className="top-heading">
            OUR <br /> <span>FEATURES</span>
          </div>

          <div className="top-container">
            {cardGroupOneData.map((item, i) => {
              return (
                <OurFeatureComp
                  key={i}
                  Id={i}
                  ImgURL={item.imgURL}
                  Query={props.Query}
                  Details={item.details}
                  Heading={item.name}
                />
              );
            })}
          </div>
          <div className="bottom-container">
            {cardGroupTwoData.map((item, i) => {
              return (
                <OurFeatureComp
                  key={i}
                  Id={i}
                  ImgURL={item.imgURL}
                  Query={props.Query}
                  Details={item.details}
                  Heading={item.name}
                />
              );
            })}
          </div>
        </div>

        <img src={bgImg} alt="" className="our-features-img" />
      </div>

      {/* ------------------------ STATIC VS INTERACTIVE -------------------- */}

      <Stickyroll
        pages={1}
        factor={3.2}
        onProgress={(progress) => {
          setStaticAndInterActive(progress);
        }}
      >
        <div className="static-vs-interactive-deck-div" ref={elementFour}>
          <div className="static-vs-interactive-heading">
            STATIC <span>vs</span>
            <br />
            <b>interactive</b>
          </div>
          <div className="bg-blured-circle" />
          <div
            className="card-one-div"
            style={{
              transform:
                staticAndInterActive >= 0.2 &&
                staticAndInterActive < 0.6 &&
                "translateY(0vh)",
            }}
          >
            {!props.Query ? (
              <img src={CardOne} alt="" />
            ) : (
              props.Query && <img src={CardThree} alt="" />
            )}
          </div>
          <div
            className="card-two-div"
            style={{
              transform: staticAndInterActive >= 0.6 && "translateY(0vh)",
            }}
          >
            {!props.Query ? (
              <img src={CardTwo} alt="" />
            ) : (
              props.Query && <img src={CardFour} alt="" />
            )}
          </div>
          {!props.Query ? (
            <LogoVectorComp CompOpacity={OPCompScrolling1} />
          ) : (
            props.Query && (
              <LogoVectorMobileComp CompOpacity={OPCompScrolling1} />
            )
          )}
        </div>
      </Stickyroll>

      {/* ------------------------ WHY CHOOSE US ---------------------------- */}

      <div ref={elementFive}>
        <WhyChooseUs />
      </div>

      {/* ------------------------ GET FUNDED ---------------------------- */}
      {/* 
      <div ref={elementSix}>
        <GetFundedComp />
      </div> */}

      {/* ------------------------ PACKAGES ---------------------------- */}

      <div className="packages-section" ref={elementSeven}>
        <img src={Lamp} alt="" className="lamp-img" />
        <div className="packages-heading">PACKAGES</div>

        {OurPricingData.map((item, i) => {
          return (
            <CardComp
              key={i}
              Id={i}
              Query={props.Query}
              Name={item.name}
              Price={item.price}
              Price_USD={item.price_usd}
              Heading_1={item.heading_1}
              Heading_para={item.heading_para}
              Heading_2={item.heading_2}
              Detail_lists={item.detail_lists}
              OPCompScrolling={1}
              CountryCode={props.CountryCode}
            />
          );
        })}
      </div>
      <div className="contact-us-btn-div">
        <div className="contact-us-btn">
          <div className="inner-div">
            <a
              href="https://wa.me/9711750002?text=Hey there, seeking deck expertise – can we sync up for a chat? "
              target="_blank"
              rel="noreferrer"
              className="link-tag"
            >
              CONTACT US
            </a>
          </div>
        </div>

        <div className="schedule-call-btn" onClick={handleCalendlyTrue}>
          <div className="inner-div">
            <div className="link-tag">Schedule Call</div>
          </div>
        </div>
      </div>

      {/* ------------------------ Brand List ---------------------------- */}

      <BrandListComp />

      {/* ------------------------ FOOTER ---------------------------- */}
      {/* <FooterComp Query={props.Query} /> */}
    </div>
  );
}
