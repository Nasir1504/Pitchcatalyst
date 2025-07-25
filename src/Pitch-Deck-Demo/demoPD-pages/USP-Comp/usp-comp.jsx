import React, { useState, useRef } from "react";
import "./usp-comp.scss";
import RscoreComp from "../Rscore-Comp/rscore-comp";
import WhatMakesUsUniqueComp from "../What-Makes-Us-Unique-Comp/what-makes-us-unique-comp";
import RaiaComp from "../Raia-Comp/raia-comp";

export default function USPComp(props) {
    const [rscore, setRscore] = useState(false)
    const [raia, setRaia] = useState(false)
    const [isFrameVisible, setIsFrameVisible] = useState(false)
    const elementRef = useRef(null);



    function handleFrameVisibilityTrue() {
        setIsFrameVisible(true)
    }
    function handleFrameVisibilityFalse() {
        setIsFrameVisible(false)
    }

    return (
        <>
            <div className="usp-comp-main-container" ref={elementRef}>
                <div className="hidden-div"
                    onClick={() => {
                        handleFrameVisibilityFalse()

                        setRscore()
                        setRaia()
                    }}
                    style={{
                        display: !isFrameVisible && 'none'
                    }}
                ></div>
                <div className="top-div"
                    style={{
                        zIndex: rscore ? '0' : raia && '0'

                    }}
                >
                    <WhatMakesUsUniqueComp
                        SetRscore={setRscore}
                        SetRaia={setRaia}
                        Rscore={rscore}
                        Raia={raia}
                        HandleFrameVisibilityTrue={handleFrameVisibilityTrue}
                    />
                </div>
                <div className="middle-div"
                    style={{
                        zIndex: rscore && '2',
                        opacity: rscore && '1',
                        // visibility: 'hidden'
                    }}
                >
                    <RscoreComp
                        Rscore={rscore}
                        SetRscore={setRscore}
                        HandleFrameVisibilityFalse={handleFrameVisibilityFalse}
                    />
                </div>

                <div className="last-div"
                    style={{
                        zIndex: raia && '2',
                        opacity: raia && '1'
                    }}
                >
                    <RaiaComp Raia={raia}
                        SetRaia={setRaia}
                        HandleFrameVisibilityFalse={handleFrameVisibilityFalse}
                    />
                </div>
            </div>
        </>
    );
}