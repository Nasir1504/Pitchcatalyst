import React, { useState, useEffect } from "react";
import "./rental-solution.scss";
import IphoneExchange from "./iphone-exchange";
import IphoneGroup from "./iphone-group";
import { ImageServer } from "../../../img/imageServer";

const Frame = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/frame673.png';
const Frame3 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/frame556.png';
const Frame4 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/frame680.png';
const Frame1 = `${ImageServer}img/Pitch-Deck/first-comp-img/Frame-412.png`;
const Frame2 = `${ImageServer}img/Pitch-Deck/first-comp-img/Frame-420.png`;

export default function RentalSolution(props) {

    const [triggerOne, setTriggerOne] = useState(false);
    const [triggerTwo, setTriggerTwo] = useState(false);
    const [triggerThree, setTriggerThree] = useState(false);
    const [triggerFour, setTriggerFour] = useState(false);
    const [triggerBG, setTriggerBG] = useState(false);




    function handleTrigger() {
        setTriggerOne(true)

        setTimeout(() => {
            setTriggerTwo(true)
        }, 300)
        setTimeout(() => {
            setTriggerThree(true)

        }, 400)
    }
    function handleFirstTrigger() {
        setTriggerOne(false)
        setTriggerTwo(false)
        setTriggerThree(false)
    }

    function handleSecondTrigger() {
        setTriggerFour(true)
    }
    function handleSecondTriggerReverse() {
        setTriggerFour(false)
    }
    function handleBGTrigger() {
        setTriggerBG((prev) => {
            return !prev;
        })
    }

    useEffect(() => {

        if (!triggerBG) {
            handleTrigger();
            setTimeout(() => {
                handleFirstTrigger()
                handleSecondTrigger()

            }, 4000)
            setTimeout(() => {
                handleBGTrigger()
                handleSecondTriggerReverse()

            }, 6200)
        }
    }, [triggerBG])

    useEffect(() => {

        if (triggerFour) {
            setTimeout(() => {
                handleBGTrigger()
            }, 7000)
        }
    }, [triggerFour])



    return (
        <>
            <div className="rental-solution-comp-main-container">

                <div className="bg-img-div"
                    style={{
                        animation: triggerBG ? "bg-img-animation 1s" : "bg-img-animation-reverse 1s",
                        top: triggerBG && "-5%",
                        left: triggerBG && "26%",
                        height: triggerBG && "110%"

                    }}

                >

                    <img className="bg-img" src={Frame1} alt=""
                        style={{
                            top: triggerBG && "-1%",
                            height: triggerBG && "106%",
                        }}
                    />
                    <div className="iphone-exchange-div"
                        style={{
                            opacity: !triggerBG && "1",
                            transition: "1.2s"
                        }}
                    >
                        <IphoneExchange
                            triggerBG={triggerBG}
                        />
                    </div>

                    <div className="pc-img-div">
                        <img className="pc-img" src={Frame} alt=""
                            style={{
                                opacity: triggerBG && "1",
                                transition: "1.2s"
                            }}
                        />
                    </div>
                </div>
                <div className="shape-div">
                    <img src={Frame2} alt="" />
                </div>
                <div className="content-div">
                    <div className="top">
                        <img src={Frame3} alt="" />

                    </div>
                    <div className="bottom">
                        <img src={Frame4} alt="" />

                    </div>
                </div>
                <div className="phone-group1">
                    <IphoneGroup
                        triggerOne={triggerOne}
                        triggerTwo={triggerTwo}
                        triggerThree={triggerThree}
                        triggerFour={triggerFour}

                    />

                </div>

            </div>
        </>
    );
}