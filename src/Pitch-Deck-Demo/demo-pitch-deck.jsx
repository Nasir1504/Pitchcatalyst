import { useState, useRef, useEffect } from "react";
import "./demo-pitch-deck.scss";
import React from "react";
import { navigatingBarData } from "./demoPD-pages/Nevigating-Bars/NevigatingBarData";

import RentalSolution from "./demoPD-pages/Rental-Solution-Comp/rental-solution";
import ProblemComp from "./demoPD-pages/Problem-Comp/problem-comp";
import SolutionComp from "./demoPD-pages/Solution-Comp/solution-comp";
import USPComp from "./demoPD-pages/USP-Comp/usp-comp";

import CompetitionComp from "./demoPD-pages/Competition-Comp/competition-comp";
import AppFlowComp from "./demoPD-pages/App-Flow-Comp/app-flow-comp";
import MarketScopeComp from "./demoPD-pages/Market-Scope-Comp/market-scope-comp";
import GoToMarketComp from "./demoPD-pages/Go-To-Market-Comp/go-to-market-comp";

import MarketingComp from "./demoPD-pages/Marketing-Comp/marketing-comp";
import NavigatingBar from "./demoPD-pages/Nevigating-Bars/navigating-bar";
// import CompetitiveAdvantageComp from "./demoPD-pages/Competitive-Advantage-Comp/competitive-advantage-comp";
import BusinessModelComp from "./demoPD-pages/Business-Model-Comp/business-model-comp";

// import MonetizationComp from "./demoPD-pages/Monetization-Comp/monetization-comp";
import RoadMapComp from "./demoPD-pages/Road-Map-Comp/road-map-comp";
import OurAskComp from "./demoPD-pages/Our-Ask-Comp/our-ask-comp";
import MeetOurTeamComp from "./demoPD-pages/Meet-Our-Team-Comp/meet-our-team-comp";
import JoinUsComp from "./demoPD-pages/Join-Us-Comp/join-us-comp";


import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import ClickToContinueComp from "./demoPD-components/Click-To-Continue-Comp/click-to-continue-comp";
import PhoneRotationComp from "./demoPD-components/Phone-Rotation-Comp/phone-rotation-comp";


export default function DemoPitchDeck(props) {

  let [navID, setNavID] = useState(0)

  const [navbarVisibility, setNavbarVisibility] = useState(false);

  function handleNavbarVisibilityTrue() {
    setNavbarVisibility(true)
  }
  function handleNavbarVisibilityFalse() {
    setNavbarVisibility(false)
  }


  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);

  const ref9 = useRef(null);
  const ref10 = useRef(null);
  const ref11 = useRef(null);
  const ref12 = useRef(null);
  const ref13 = useRef(null);
  const ref14 = useRef(null);



  const handleClick = (id) => {
    id === 0 && ref1.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
    id === 1 && ref2.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
    id === 2 && ref3.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
    id === 3 && ref4.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });

    id === 4 && ref5.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
    id === 5 && ref6.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
    id === 6 && ref7.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
    id === 7 && ref8.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });

    id === 8 && ref9.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
    id === 9 && ref10.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
    id === 10 && ref11.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
    id === 11 && ref12.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });

    id === 12 && ref13.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });
    id === 13 && ref14.current.scrollIntoView({ behavior: 'smooth', block: "end", inline: "nearest" });


    setNavID(id)


  };

  function handleRightClick() {

    if (navID === navigatingBarData.length - 1) {
      setNavID(navID = 0)

    } else {
      setNavID(navID = navID + 1)

    }
    handleClick(navID)
  }

  function handleLeftClick() {

    if (navID === 0) {
      setNavID(navID = navigatingBarData.length - 1)

    } else {
      setNavID(navID = navID - 1)

    }
    handleClick(navID)
  }



  const [OnLoadEvent, setOnLoadEvent] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setOnLoadEvent(false)
    }, 1000)
  }, [])

  function handleOnLoadEvent() {
    setOnLoadEvent(true)
  }

  // let mediaQuery = window.matchMedia(`(max-width: 630px)`);
  // const [queryMedia, setQueryMedia] = useState(mediaQuery.matches);

  // useEffect(() => {
  //   window.onresize = () => {
  //     setQueryMedia(mediaQuery.matches)

  //   };
  // }, [mediaQuery])

  // function handleOnLoadPhoneRotateEven() {
  //   setQueryMedia(false)
  // }
  return (
    <>
      <div className="demo-pitch-deck-main" >

        <div className="click-to-continue-comp-div"
          onClick={handleOnLoadEvent}

          style={{
            visibility: OnLoadEvent && "hidden",
          }}
        >
          <ClickToContinueComp
            OnLoadEvent={OnLoadEvent}
          />

        </div>
        <div className="phone-rotation-indication-div"
          // onClick={handleOnLoadPhoneRotateEven}
          style={{
            display: !props.Query && "none"
          }}
        >
          <PhoneRotationComp />
        </div>

        <div
          className="demo-pitch-deck-main-bottom-nav"
          onMouseEnter={handleNavbarVisibilityTrue}
        >
          <NavigatingBar
            HandleNavbarVisibilityTrue={handleNavbarVisibilityTrue}
            HandleNavbarVisibilityFalse={handleNavbarVisibilityFalse}
            NavbarVisibility={navbarVisibility}
            HandleClick={handleClick}
            NavID={navID}

          />

        </div>

        <div className="demo-pitch-deck-left-btn-nav"
          onClick={handleLeftClick}
        >
          <ArrowBackIosIcon
            className="arrow-icon"
            style={{
              color: "#ffffff"
            }}
          /><p>BACK</p></div>
        <div className="demo-pitch-deck-right-btn-nav"
          onClick={handleRightClick}
        >
          <p>NEXT</p>
          <ArrowForwardIosIcon
            className="arrow-icon"
            style={{
              color: "#ffffff"
            }}
          />

        </div>


        <div style={{ minWidth: "100%" }} ref={ref1}><RentalSolution /></div>
        <div style={{ minWidth: "100%" }} ref={ref2}><ProblemComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref3}><SolutionComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref4}><USPComp /></div>

        <div style={{ minWidth: "100%" }} ref={ref5}><AppFlowComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref6}><MarketScopeComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref7}><GoToMarketComp /></div>

        <div style={{ minWidth: "100%" }} ref={ref8}><MarketingComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref9}><CompetitionComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref10}><BusinessModelComp /></div>

        <div style={{ minWidth: "100%" }} ref={ref11}><RoadMapComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref12}><OurAskComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref13}><MeetOurTeamComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref14}><JoinUsComp /></div>
        {/* RoadMapComp */}
        {/* CompetitionComp */}

      </div>
    </>
  );
}