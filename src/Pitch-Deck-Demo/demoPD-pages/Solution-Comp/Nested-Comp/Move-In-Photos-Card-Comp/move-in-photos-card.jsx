import React, { useState, useEffect } from "react";
import "./move-in-photos-card.scss";


const Frame3 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/frame672.png';
const iPhone = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/frame674.png';
const Frame1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/third-comp-img/Frame 450.png";
const Frame2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/third-comp-img/Frame 451.png";
const Frame4 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/third-comp-img/Frame 453.png";


export default function MoveInPhotosCard(props) {


    const [anime, setAnime] = useState(true);

    let [Y, setY] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            /* eslint-disable */
            Y === 52 ? setY(Y = 0) : setY(Y = 52);

        }, 1000)

    }, [])
    useEffect(() => {
        setAnime(prev => {
            return !prev;
        })

    }, [Y])

    setInterval(() => {
        Y === 52 ? setY(Y = 0) : setY(Y = 52);
    }, 5000)

    return (
        <>
            <div className="move-in-photos-card-main-container"
                 style={{
                    opacity: !props.HiddenHoverDiv ? "0" : "1"
                }}
            >
                <img src={Frame2} alt="" className="bg-img" />

                <div className="left-div">
                    <div className="shape1-div"></div>



                    <div className="para-div">
                        <p><br /><span className="span1">EXPLAIN</span> <span className="span2" >Feature-02.</span></p>
                    </div>


                    <div className="property-list-div">
                        <ul>
                            <li><span></span>In what ways does this solution differ from the first one?</li>
                            <li><span></span>How will the second solution create value for your customers or users?</li>
                            <li><span></span>Can you demonstrate the effectiveness or potential success of this solution?</li>
                            {/* <li><span></span>Lorem ipsum dolor sit amet.</li> */}


                        </ul>
                    </div>
                    <div className="img-div">
                        <img src={Frame1} alt=""
                            style={{
                                top: anime ? "-50%" : "50%",
                                transition: "3s"
                            }}
                        />
                    </div>

                </div>
                <div className="right-div">
                    <div className="phone1-div">
                        <img src={iPhone} alt="" />
                    </div>
                    
                    <div className="phone2-div">
                        <div className="upper-layer">
                            <p className="top-heading">UPLOAD <br /><span>YOURMOCK</span></p>
                            <span className="logo-span">LOGO</span>
                            <p>SCROLLABLE <br /><span>CONTENT</span></p>
                        </div>
                        <img src={Frame3} alt="" />
                        <div className="screen-img-div">
                            <img src={Frame4} alt=""
                                style={{
                                    transform: `translateY(${-Y}%)`
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}