import React, { useState, useEffect } from "react";
import "./comp-four.scss";


const Phone = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/frame674.png';
const Frame = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/frame499.png";

export default function CompFour(props) {
    const [isHover, setHover] = useState(false)

    function handleMouseEvent() {
        setHover(prev => { return !prev })
    }

    useEffect(() => {
        props.HoverID === 4 && setTimeout(handleMouseEvent, 200)
    }, [props.HoverID])

    return (
        <>
            <div className="comp-four-main-container"
            // onMouseEnter={handleMouseEvent}
            // onMouseLeave={handleMouseEvent}
            >
                <div className="content-container">
                    <img className="bg-img" src={Frame} alt="" />
                    <div className="heading-div">
                        <h1>EXPLAIN<br />
                            <span>App Flow Step04.</span>
                        </h1>
                    </div>
                </div>
                <div className="phone2--mg-div"
                    style={{
                        transform: isHover && `scale(1.3) translate(11%, -10%)`,
                        transition: "0.8s"

                    }}
                >

                    <img src={Phone} alt="" className="phone2-img" />
                </div>
                <img src={Phone} alt="" className="phone1-img" />
            </div>


        </>
    )
}