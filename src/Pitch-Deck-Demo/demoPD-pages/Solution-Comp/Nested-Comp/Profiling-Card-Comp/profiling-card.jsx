import React, { useState, useEffect } from "react";
import "./profiling-card.scss";


const MockUp = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/frame672.png';
const Shape1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/third-comp-img/shape1.png";
const Shape2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/third-comp-img/shape2.png";
const Screen = "https://rentblob.blob.core.windows.net/pitch/img/profiling-img/phone-screen.png";

export default function ProfilingCard(props) {

    let [Y, setY] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            /* eslint-disable */
            Y === 70 ? setY(Y = 0) : setY(Y = 70);
        }, 1000)

    }, [props.HiddenHoverDiv])


    setTimeout(() => {
        Y === 70 ? setY(Y = 0) : setY(Y = 70);
    }, 20000)


    return (
        <>
            <div className="profiling-card-main-container"
                style={{
                    opacity: !props.HiddenHoverDiv ? "0" : "1"
                }}
            >
                <div className="left-part">
                    <div className="shape1-div">
                        <img src={Shape1} alt="" />
                    </div>
                    <div className="headings-div">
                        <h1>
                            <br />
                            <span className="span1">EXPLAIN</span><br />
                            <span className="span2">Feature-01</span>
                        </h1>
                    </div>
                    <div className="property-list-div">
                        <ul>
                            <li><span></span>What makes this solution unique or innovative?</li>
                            <li><span></span>How does this solution benefit the affected parties?</li>
                            <li><span></span> Can you share some measurable outcomes or potential impacts of this solution?
                            </li>
                            {/* <li><span></span>Lorem ipsum dolor sit amet.</li> */}

                        </ul>
                    </div>
                </div>

                <div className="right-part">
                    <div className="shape2-div">
                        <img src={Shape2} alt="" />
                    </div>
                    <div className="phone-mockup-div">
                        <img src={MockUp} alt="" />
                        <div className="upper-layer">
                            <p className="top-heading">UPLOAD <br /><span>YOURMOCK</span></p>
                            <span className="logo-span">LOGO</span>
                            <p>SCROLLABLE <br /><span>CONTENT</span></p>
                        </div>
                        <div className="screen-div">
                            <img src={Screen} alt=""
                                style={{
                                    transform: `translateY(${-Y}%)`
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}