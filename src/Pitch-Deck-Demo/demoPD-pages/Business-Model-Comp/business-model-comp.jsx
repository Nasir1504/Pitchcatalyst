import React, { useState, useEffect } from "react";
import "./business-model-comp.scss";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { ImageServer } from "../../../img/imageServer";

const Frame = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/frame546.png'
const MockFrame = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/iPhone13.png';
const Frame6 = `${ImageServer}img/Pitch-Deck/eleventh-comp-img/closeup-hands-passing-contract-unrecognizable-businessman.png`;
const Frame7 = `${ImageServer}img/Pitch-Deck/eleventh-comp-img/house-key-home-insurance-broker-agent-s-hand-protection-salesman-person-giving-buyer-customer-owner.png`;
const Frame8 = `${ImageServer}img/Pitch-Deck/eleventh-comp-img/tingey-injury-law-firm-nSpj-Z12lX0-unsplash.png`;
const logo = "https://rentblob.blob.core.windows.net/pitch/img/logo3.svg";

export default function BusinessModelComp() {

    const [priceChartBouncing, setPriceChartBouncing] = useState(true)

    const [itemID, setItemID] = useState(0);

    const [upDownEffect, setUpDownEffect] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setUpDownEffect(prev => {
                return !prev
            })
        }, 1000)

    }, [upDownEffect])

    function handleHover(id) {
        setItemID(id)
    }

    function handleBouncing() {
        setPriceChartBouncing(false)
    }
    return (<>
        <div className="business-model-comp-main-container" >

            <h1 className="heading">BUSINESS <br /><span>Model</span></h1>

            {/* --------------------------------------PRICING DETAILS------------------------------ */}
            <div className="pricing-details-div-one"
                onClick={() => { handleHover(0) }}
                style={{
                    opacity: itemID === 1 && "1",
                    zIndex: itemID === 1 ? "6" : "0"

                }}
            >
                <div className="pricing-img-div">
                    <img className="pricing-img" src={Frame} alt="" />
                    <div className="cross-icon-div"
                        onClick={() => { handleHover(0) }}
                    ><CloseRoundedIcon className="cross-icon" />
                    </div>
                </div>
            </div>
            <div className="pricing-details-div-five"
                onClick={() => { handleHover(0) }}
                style={{
                    opacity: itemID === 5 && "1",
                    zIndex: itemID === 5 ? "6" : "0"

                }}
            >
                <div className="pricing-img-div">
                    <div className="cross-icon-div"
                        onClick={() => { handleHover(0) }}
                    ><CloseRoundedIcon className="cross-icon" />
                    </div>

                    <img className="pricing-img" src={Frame} alt="" />
                </div>
            </div>
            <div className="pricing-details-div-two"
                onClick={() => { handleHover(0) }}
                style={{
                    opacity: itemID === 2 && "1",
                    zIndex: itemID === 2 ? "6" : "0",
                    animation: priceChartBouncing && "priceChart-keyframe 0.2s"
                }}
            >
                <div className="pricing-img-div">

                    <div className="cross-icon-div"
                        onClick={() => { handleHover(0) }}
                    ><CloseRoundedIcon className="cross-icon" />
                    </div>

                    <img className="pricing-img" src={Frame} alt="" />
                </div>
            </div>
            <div className="pricing-details-div-three"
                onClick={() => { handleHover(0) }}
                style={{
                    opacity: itemID === 3 && "1",
                    zIndex: itemID === 3 ? "6" : "0",
                    animation: priceChartBouncing && "priceChart-keyframe 0.2s"
                }}
            >
                <div className="pricing-img-div">

                    <div className="cross-icon-div"
                        onClick={() => { handleHover(0) }}
                    ><CloseRoundedIcon className="cross-icon" />
                    </div>

                    <img className="pricing-img" src={Frame} alt="" />
                </div>
            </div>
            <div className="pricing-details-div-six"
                onClick={() => { handleHover(0) }}
                style={{
                    opacity: itemID === 6 && "1",
                    zIndex: itemID === 6 ? "6" : "0",
                    animation: priceChartBouncing && "priceChart-keyframe 0.2s"
                }}
            >
                <div className="pricing-img-div">

                    <div className="cross-icon-div"
                        onClick={() => { handleHover(0) }}
                    ><CloseRoundedIcon className="cross-icon" />
                    </div>

                    <img className="pricing-img" src={Frame} alt="" />
                </div>
            </div>
            <div className="pricing-details-div-four"
                onClick={() => { handleHover(0) }}
                style={{
                    opacity: itemID === 4 && "1",
                    zIndex: itemID === 4 ? "6" : "0",
                    animation: priceChartBouncing && "priceChart-keyframe 0.2s"
                }}
            >
                <div className="pricing-img-div">

                    <div className="cross-icon-div"
                        onClick={() => { handleHover(0) }}
                    ><CloseRoundedIcon className="cross-icon" />
                    </div>

                    <img className="pricing-img" src={Frame} alt="" />
                </div>
            </div>
            {/* --------------------------------------PRICING DETAILS END HERE------------------------------ */}


            <div className="circle-div">
                <div className="small-circle-div">
                    <img className="img-two" src={logo} alt="" />

                </div>
                <div className="img-div-one" style={{ background: itemID === 1 && "none" }}>
                    <img src={Frame7} alt="" style={{ opacity: itemID === 1 && "0" }} />

                </div>
                <div className="img-div-two" style={{ background: itemID === 2 && "none" }}>
                    <img src={MockFrame} alt="" style={{ opacity: itemID === 2 && "0" }} />

                </div>
                <div className="img-div-three" style={{ background: itemID === 3 && "none" }} >
                    <img src={Frame6} alt="" style={{ opacity: itemID === 3 && "0" }} />

                </div>
                <div className="img-div-four" style={{ background: itemID === 4 && "none" }}>
                    <img src={Frame8} alt="" style={{ opacity: itemID === 4 && "0" }} />

                </div>

            </div>
            <div className="shape-one"></div>
            <div className="shape-two"></div>
            <div className="shape-three"></div>
            <div className="shape-four"></div>

            <div className="hrline-one"></div>
            <div className="hrline-five"></div>
            <div className="hrline-two"></div>
            <div className="hrline-three"></div>
            <div className="hrline-six"></div>
            <div className="hrline-four"> </div>


            {/* --------------------------------------PROPERTY PARA------------------------------ */}

            <div className="property-para-one">
                <p>Business Model <br /><span>type01.</span></p>

                <div className="price-chart-btn-div">
                    <p className="price-chart-btn"
                        onClick={() => {
                            handleBouncing()
                            handleHover(1)
                        }}
                        style={{
                            animation: upDownEffect && priceChartBouncing &&
                                "priceChart-keyframe 0.2s",
                            paddingBottom: upDownEffect && priceChartBouncing &&
                                "0%"
                        }}
                    >Explore</p>
                    <div className="tap-icon-div"
                        style={{
                            // visibility: itemID !== 1 && OnLoadEvent ? "visible" : "hidden"
                        }}
                    >
                        <TouchAppIcon className="tap-icon"
                            style={{
                                animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                            }}
                        />
                    </div>
                </div>

            </div>
            <div className="property-para-five">
                <p>Business Model <br /><span>type02.</span></p>

                <div className="price-chart-btn-div">
                    <p className="price-chart-btn"
                        onClick={() => {
                            handleBouncing()
                            handleHover(5)
                        }}
                        style={{
                            animation: upDownEffect && priceChartBouncing &&
                                "priceChart-keyframe 0.2s",
                            paddingBottom: upDownEffect && priceChartBouncing &&
                                "0%"
                        }}
                    >Explore</p>
                    <div className="tap-icon-div"
                        style={{
                            // visibility: itemID !== 1 && OnLoadEvent ? "visible" : "hidden"
                        }}
                    >
                        <TouchAppIcon className="tap-icon"
                            style={{
                                animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                            }}
                        />
                    </div>
                </div>

            </div>
            <div className="property-para-two">
                <p>Business Model <br /><span>type04.</span></p>

                <div className="price-chart-btn-div"
                    onClick={() => {
                        handleBouncing()
                        handleHover(2)
                    }}
                >
                    <p className="price-chart-btn"
                        onClick={handleBouncing}
                        style={{
                            animation: upDownEffect && priceChartBouncing &&
                                "priceChart-keyframe 0.2s",
                            paddingBottom: upDownEffect && priceChartBouncing &&
                                "0%"
                        }}
                    >Explore</p>
                    <div className="tap-icon-div"
                        style={{
                            // visibility: itemID !== 1 && OnLoadEvent ? "visible" : "hidden"
                        }}
                    >
                        <TouchAppIcon className="tap-icon"
                            style={{
                                animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="property-para-three">
                <p>Business Model <br /><span>type03.</span></p>

                <div className="price-chart-btn-div"
                    onClick={() => {
                        handleBouncing()
                        handleHover(3)
                    }}
                >
                    <p className="price-chart-btn"
                        onClick={handleBouncing}
                        style={{
                            animation: upDownEffect && priceChartBouncing &&
                                "priceChart-keyframe 0.2s",
                            paddingBottom: upDownEffect && priceChartBouncing &&
                                "0%"
                        }}
                    >Explore</p>
                    <div className="tap-icon-div"
                        style={{
                            // visibility: itemID !== 1 && OnLoadEvent ? "visible" : "hidden"
                        }}
                    >
                        <TouchAppIcon className="tap-icon"
                            style={{
                                animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="property-para-six">
                <p>Business Model <br /><span>type05.</span></p>

                <div className="price-chart-btn-div"
                    onClick={() => {
                        handleBouncing()
                        handleHover(6)
                    }}
                >
                    <p className="price-chart-btn"
                        onClick={handleBouncing}
                        style={{
                            animation: upDownEffect && priceChartBouncing &&
                                "priceChart-keyframe 0.2s",
                            paddingBottom: upDownEffect && priceChartBouncing &&
                                "0%"
                        }}
                    >Explore</p>
                    <div className="tap-icon-div"
                        style={{
                            // visibility: itemID !== 1 && OnLoadEvent ? "visible" : "hidden"
                        }}
                    >
                        <TouchAppIcon className="tap-icon"
                            style={{
                                animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="property-para-four">
                <p>Business Model <br /><span>type06</span></p>

                <div className="price-chart-btn-div"
                    onClick={() => {
                        handleBouncing()
                        handleHover(4)
                    }}
                >
                    <p className="price-chart-btn"
                        onClick={handleBouncing}
                        style={{
                            animation: upDownEffect && priceChartBouncing &&
                                "priceChart-keyframe 0.2s",
                            paddingBottom: upDownEffect && priceChartBouncing &&
                                "0%"
                        }}
                    >Explore</p>
                    <div className="tap-icon-div"
                        style={{
                            // visibility: itemID !== 1 && OnLoadEvent ? "visible" : "hidden"
                        }}
                    >
                        <TouchAppIcon className="tap-icon"
                            style={{
                                animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                            }}
                        />
                    </div>
                </div>
            </div>
            {/* --------------------------------------PROPERTY PARA END HERE------------------------------ */}



        </div>
    </>)
}



