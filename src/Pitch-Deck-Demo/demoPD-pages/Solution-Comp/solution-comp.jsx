import React, { useState } from "react";
import "./solution-comp.scss";
import SolutionCardComp from "./solution-card-comp";
import solutionCompData from "./solutionCompData";
import ProfilingCard from "./Nested-Comp/Profiling-Card-Comp/profiling-card";
import MoveInPhotosCard from "./Nested-Comp/Move-In-Photos-Card-Comp/move-in-photos-card";
import RscoreCard from "./Nested-Comp/Rscore-Card-Comp/rscore-card";
import RentalManagementCard from "./Nested-Comp/Rental-Management-Card-Comp/rental-management-card";


export default function SolutionComp() {

    const [hiddenHoverDiv, setHiddenHoverDiv] = useState(false)
    let [cardItemID, setCardItemID] = useState(0)


    let [cardNum, setCardNum] = useState(0);

    function handleMouseTrueEven() {
        setHiddenHoverDiv(true)

        // console.log("True got called")
    }

    function handleMouseFalseEven() {
        setHiddenHoverDiv(false)
    }

    function handleCardItemID(itemID) {
        setCardItemID(cardItemID = itemID + 1)

    }

    function cardNumberFunction(num) {
        setCardNum(cardNum = num + 1)
        // console.log("Number got called")

    }



    return (
        <>
            <div className="solution-comp-main-container">
                <div className="hidden-hover-div"
                    style={{
                        visibility: hiddenHoverDiv && "visible"
                    }}
                    onClick={handleMouseFalseEven}

                >
                    <div className="hidden-content-div"
                    // onClick={handleMouseFalseEven}
                    >
                        {
                            cardItemID === 1 ? <ProfilingCard HiddenHoverDiv={hiddenHoverDiv} /> :
                                cardItemID === 2 ? <MoveInPhotosCard HiddenHoverDiv={hiddenHoverDiv} /> :
                                    cardItemID === 3 ? <RscoreCard HiddenHoverDiv={hiddenHoverDiv} /> :
                                        cardItemID === 4 && <RentalManagementCard HiddenHoverDiv={hiddenHoverDiv} />
                        }
                    </div>

                </div>
                <div className="top-part-div">
                    <div className="right-div">
                        <div className="shape1">
                            <h3>SOLUTION</h3>
                        </div>
                    </div>
                    <div className="left-div">
                        <hr />
                        <h3>
                            Categorizing the Solution <br />
                            <span>
                                A Concise Overview
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="bottom-part-div">

                    {solutionCompData.map((item, index) => {
                        return (
                            <div
                                key={index}
                                onMouseEnter={() => { cardNumberFunction(index) }}
                                onMouseLeave={() => { cardNumberFunction(-1) }}

                            >
                                <SolutionCardComp
                                    id={index}
                                    Heading={item.heading}
                                    Para={item.para}
                                    cardNumber={cardNum}
                                    // HandleHoverOnCard={handleHoverOnCard}
                                    // IsHoverOnCardDiv={isHoverOnCardDiv}
                                    HandleMouseFalseEven={handleMouseFalseEven}
                                    HandleMouseTrueEven={handleMouseTrueEven}
                                    // CardNumberFunction={cardNumberFunction}
                                    CardItemID={cardItemID}
                                    HandleCardItemID={handleCardItemID}

                                /></div>
                        )
                    })}

                </div>

            </div>
        </>
    );
}