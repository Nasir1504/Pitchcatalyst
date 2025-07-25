import React, { useState } from "react";
import "./market-scope-comp.scss";
import RangeCard from "./Nested-Comp/range-card";
import ProgressCircle from "./Nested-Comp/progress-circle";
import InfoCard from "./Nested-Comp/info-card";



export default function MarketScopeComp() {
    const Frame1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/seventh-comp-img/frame-451.png";
    // const Logo = "https://rentblob.blob.core.windows.net/pitch/img/logo.svg";

    // const [censusPopup, setCensusPopup] = useState(false);


    const [progressBar, setProgressBar] = useState(true)

    function handleMouseEvents() {
        setProgressBar(false)
    }


    return (
        <>
            <div className="market-scope-comp-main-container">
                <div className="hover-hidden-div"
                    onMouseEnter={handleMouseEvents}
                    onMouseLeave={handleMouseEvents}
                ></div>
                <img className="bg-img" src={Frame1} alt="" />

                <div className="left-div">
                    <div className="top-div">
                        <h3><span>Market Scope</span></h3>
                        <h4>Describe Your Market Scope Here.
                            {/* <span> INDIA </span>
                            on<span> qame.</span> */}
                        </h4>
                    </div>
                    <div className="bottom-div">
                        <RangeCard
                            mainDetail="Who is your target customer within this market?"
                            censusYear=""
                            censusCount="xx"
                            censusUnit="unit"
                            progressValue="75"
                            ProgressBar={progressBar}
                        />
                        <RangeCard
                            mainDetail="How fast is this market growing?"
                            censusYear=""
                            censusCount="xx"
                            censusUnit="%"
                            progressValue="65"
                            ProgressBar={progressBar}
                        />
                         <RangeCard
                            mainDetail=" How do you plan to penetrate the market?"
                            censusYear=""
                            censusCount="xx"
                            censusUnit="unit"
                            progressValue="80"
                            ProgressBar={progressBar}
                        />
                        <RangeCard
                            mainDetail="How are trends and innovations shaping the future?"
                            censusYear=""
                            censusCount="xx"
                            censusUnit="%"
                            progressValue="80"
                            ProgressBar={progressBar}
                        />
                        
                    </div>
                    <div className="blank-div"></div>


                </div>
                <div className="right-div">

                    <div className="left-part">
                        <div className="progress-circle-div">
                            <ProgressCircle
                                ProgressBar={progressBar}
                            />
                        </div>
                    </div>
                    <div className="right-part">
                        {/* <div className="census-year-div">
                            <p
                                style={{
                                    transform: censusPopup && `scale(${2})`,
                                    opacity: censusPopup ? "1" : "0",
                                    transition: "0.5s"
                                }}
                            ><span>( 2011</span> CENSUS )</p>
                        </div> */}
                        <div className="logo-div">
                            {/* <img src={Logo} alt="" /> */}
                            LOGO
                        </div>

                        <div className="info-div"
                            style={{
                                animation: !progressBar && "infoCardsAnime 1.2s",
                                opacity: !progressBar && "1"
                            }}
                        >
                            <div className="info-card1-div">
                                <InfoCard
                                    CensusHeading="TOTAL AVAILABLE"
                                    CalValueOne="XX"
                                    CalValueTwo="XX%"
                                    CalValueEquation="*"
                                    CensusResult="xx.xx"
                                    ResultUnit="Cr/year"
                                    CircleColor="#FF6812"
                                />
                            </div>
                            <div className="info-card2-div">
                                <InfoCard
                                    CensusHeading="SERVICEABLE AVAILABLE"
                                    CalValueOne="XX"
                                    CalValueTwo="XX%"
                                    CalValueEquation="*"
                                    CensusResult="xx.xx"
                                    ResultUnit="Cr/year"
                                    CircleColor="#333333"
                                />
                            </div>
                            <div className="info-card3-div">
                                <InfoCard
                                    CensusHeading="SERVICEABLE OBTAINABLE"
                                    CalValueOne="XX"
                                    CalValueTwo="XX%"
                                    CalValueEquation="*"
                                    CensusResult="xx.xx"
                                    ResultUnit="Cr/year"
                                    CircleColor="#FF1212"
                                />
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}