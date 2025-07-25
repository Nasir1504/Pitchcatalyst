import React, { useState, useEffect } from "react";
import "./problem-comp.scss";
import ProblemCompData from "./problemCompData";
import CardContainerComp from "./card-container-comp";

import TouchAppIcon from '@mui/icons-material/TouchApp';


export default function ProblemComp() {


    const [upDownEffect, setUpDownEffect] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setUpDownEffect(prev => {
                return !prev
            })
        }, 1000)

    }, [upDownEffect])


    const [itemId, setItemId] = useState(0)

    function handleLandlordStyle() {
        setItemId(0)
    }
    function handleTenantStyle() {
        setItemId(1)
    }
    function handleBrokerStyle() {
        setItemId(2)
    }

    function handlePrevClick() {
        itemId !== 0 && setItemId(itemId - 1);
    }
    function handleNextClick() {
        itemId !== 2 && setItemId(itemId + 1)

    }

    return (
        <>
            <div className="problem-comp-main-container">
                <div className="prev-btn"
                    onClick={handlePrevClick}
                    style={{
                        opacity: itemId === 0 ? '0' : '1',
                        zIndex: itemId === 0 ? '0' : '6'
                    }}
                ></div>
                <div className="next-btn"
                    onClick={handleNextClick}
                    style={{
                        opacity: itemId === 2 ? '0' : '1',
                        zIndex: itemId === 2 ? '0' : '6'
                    }}
                ></div>
                <div className="top-div">
                    <div className="ractangle-div">
                        <div className="shape1"></div>
                    </div>
                    <div className="heading-div">
                        <h1>Problem</h1>
                        <h3>Describe Your Problems, <span>Problem Statements,</span></h3>

                    </div>
                </div>
                <div className="left-div">
                    <div className="focus-div"
                        style={{
                            top:
                                itemId === 0 ? "10%" :
                                    itemId === 1 ? "40%" :
                                        itemId === 2 && "70%"


                        }}
                    ></div>
                    <div className="landlord-div">
                        <div className="tap-icon-div"
                            style={{
                                visibility: itemId === 0 && "hidden"
                            }}
                        >
                            <TouchAppIcon className="tap-icon"
                                style={{
                                    animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                                }}
                            />

                        </div>
                        <h3
                            onClick={handleLandlordStyle}
                            style={{


                                transform: itemId === 0 && `scale(${1.1})`,
                                marginLeft: itemId === 0 && "2%",
                                fontWeight: itemId === 0 && "600",
                                color: itemId === 0 && "#FF4D4D",
                                cursor: itemId !== 0 ? "pointer" : "default",
                                borderBottom: itemId === 0 && "none",
                                animation:
                                    itemId !== 0 && upDownEffect && "NavBar-keyframe 0.2s"

                            }}

                        >Problem01</h3>

                    </div>
                    <div className="tenant-div">
                        <div className="tap-icon-div"
                            style={{
                                visibility: itemId === 1 && "hidden"
                            }}
                        >
                            <TouchAppIcon className="tap-icon"
                                style={{
                                    animation: upDownEffect && "tapIcon-KeyFrame 0.2s"
                                }}
                            />

                        </div>
                        <h3
                            onClick={handleTenantStyle}
                            style={{




                                transform: itemId === 1 && `scale(${1.1})`,
                                marginLeft: itemId === 1 && "2%",
                                fontWeight: itemId === 1 && "600",
                                color: itemId === 1 && "#FF4D4D",
                                cursor: itemId !== 1 ? "pointer" : "default",
                                borderBottom: itemId === 1 && "none",
                                animation:
                                    itemId !== 1 && upDownEffect && "NavBar-keyframe 0.2s"

                            }}
                        >Problem02</h3>
                    </div>
                    <div className="broker-div">
                        <div className="tap-icon-div"
                            style={{
                                visibility: itemId === 2 && "hidden"
                            }}
                        >
                            <TouchAppIcon className="tap-icon"
                                style={{
                                    animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                                }}
                            />

                        </div>
                        <h3
                            onClick={handleBrokerStyle}
                            style={{

                                transform: itemId === 2 && `scale(${1.1})`,
                                marginLeft: itemId === 2 && "2%",
                                fontWeight: itemId === 2 && "600",
                                color: itemId === 2 && "#FF4D4D",
                                cursor: itemId !== 2 ? "pointer" : "default",
                                borderBottom: itemId === 2 && "none",
                                animation:
                                    itemId !== 2 && upDownEffect && "NavBar-keyframe 0.2s"


                            }}
                        >Problem03</h3>
                    </div>
                </div>
                <div className="right-div">
                    {ProblemCompData.map((item, index) => {
                        return (
                            <div key={index}>
                                {
                                    itemId === index &&
                                    <CardContainerComp
                                        Item={item.property}

                                    />
                                }

                            </div>
                        );

                    })}



                </div>
            </div>
        </>
    );
}