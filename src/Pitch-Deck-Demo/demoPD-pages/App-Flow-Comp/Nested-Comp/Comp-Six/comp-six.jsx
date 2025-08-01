import React, { useState, useEffect } from "react";
import "./comp-six.scss";

const Phone = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/frame674.png';
const Frame = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/closeup-hands-passing-contract-unrecognizable-businessman.png";

export default function CompSix(props) {
    const [isHover, setHover] = useState(false)

    function handleMouseEvent() {
        setHover(prev => { return !prev })
    }

    useEffect(() => {
        props.HoverID === 6 && setTimeout(handleMouseEvent, 200)
    }, [props.HoverID])

    return (
        <>
            <div className="comp-six-main-container"
            // onMouseEnter={handleMouseEvent}
            // onMouseLeave={handleMouseEvent}
            >
                <div className="content-container">
                    <img className="bg-img" src={Frame} alt=""
                        style={{
                            left: isHover && "-5%"
                        }}
                    />
                    <div className="heading-div"
                        style={{
                            transform: isHover && `scale(0.92)`,
                            top: isHover && "9%",
                            left: isHover && "20%",
                            transition: "0.8s"
                        }}
                    >
                        <h1>EXPLAIN<br />
                            <span>App flow step06.</span>
                        </h1>
                    </div>
                    <img src={Phone} alt="" className="phone2-img"
                        style={{
                            transform: isHover && `scale(${0.8})`,
                            top: isHover && "37.2%",
                            left: isHover && "45%",
                            transition: "0.8s"
                        }}
                    />
                    <img src={Phone} alt="" className="phone1-img"
                        style={{
                            transform: isHover && `scale(${0.8})`,
                            top: isHover && "25%",
                            left: isHover && "16%",
                            transition: "0.8s"
                        }}
                    />
                </div>
            </div>
        </>
    )
}