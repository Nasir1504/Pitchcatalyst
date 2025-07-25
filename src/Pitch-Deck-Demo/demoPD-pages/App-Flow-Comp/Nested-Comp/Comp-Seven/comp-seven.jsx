import React, { useState, useEffect } from "react";
import "./comp-seven.scss";



const Phone = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/frame674.png';
const Frame = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/top-view-businessman-analyzing-financial-documents-discussing-company-strategy.png";

export default function CompSeven(props) {

    const [isHover, setHover] = useState(false)

    function handleMouseEvent() {
        setHover(prev => { return !prev })
    }
    useEffect(() => {
        props.HoverID === 7 && setTimeout(handleMouseEvent, 600)
    }, [props.HoverID])
    return (
        <>
            <div className="comp-seven-main-container"
            // onMouseEnter={handleMouseEvent}
            // onMouseLeave={handleMouseEvent}
            >
                <div className="content-container">
                    <img src={Frame} alt=""
                        style={{

                            width: isHover && "170%",
                            height: isHover && "200%",
                            left: isHover && "-5%",
                            top: isHover && "-48%",
                            transform: isHover && `rotate(${45}deg)`


                        }}
                    />

                    <h1>EXPLAIN <br /> <span>App flow step07</span></h1>

                </div>
                <div className="phone-container"
                    style={{
                        overflow: isHover && "hidden"
                    }}
                >
                    <img src={Phone} alt="" className="phone2-img-div"
                        style={{
                            top: isHover && "34%"
                        }} />
                    <img src={Phone} alt="" className="phone1-img-div"
                        style={{
                            top: isHover && "60%"
                        }} />

                </div>

            </div>

        </>
    )
}