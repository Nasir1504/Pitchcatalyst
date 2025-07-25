import React, { useState } from 'react';
import './mockup-comp.scss';
import { Tilt } from 'react-tilt';
import { ImageServer } from '../../../../img/imageServer';



import Frame2 from "../../../../assets/imgs/home-page/Frame641.png";
import Frame1 from "../../../../assets/imgs/home-page/Frame642.png";
import Frame3 from "../../../../assets/imgs/home-page/Group680.png";


export default function MockupComp() {
    const [compOneAnime, setCompOneAnime] = useState(false)
    const [compTwoAnime, setCompTwoAnime] = useState(false)
    const [compThreeAnime, setCompThreeAnime] = useState(false)



    const handleMouseEventOne = () => {
        setCompOneAnime(prev => !prev)
    }
    const handleMouseEventTwo = () => {
        setCompTwoAnime(prev => !prev)
    }
    const handleMouseEventThree = () => {
        setCompThreeAnime(prev => !prev)
    }
    return (
        <div className="mockup-comp-main-container">

            <Tilt className="tilt-comp-one" options={{ reverse: "true", scale: '1' }} >
                <div className="before"
                    style={{
                        animation: compOneAnime && 'rotate 2s infinite linear alternate-reverse'

                    }}
                ></div>
                <div className="div-one">
                    <img src={Frame2} alt=""
                        onMouseOver={handleMouseEventOne}
                        onMouseOut={handleMouseEventOne}
                    />
                </div>
            </Tilt>


            <Tilt className="tilt-comp-two" options={{ reverse: "true", scale: '1' }}>
                <div className="before"
                    style={{
                        animation: compTwoAnime && 'rotate 2s infinite linear alternate-reverse'

                    }}
                ></div>
                <div className="div-two">
                    <img src={Frame1} alt=""
                        onMouseOver={handleMouseEventTwo}
                        onMouseOut={handleMouseEventTwo}

                    />
                </div>
            </Tilt>


            <Tilt className="tilt-comp-three" options={{ reverse: "true", scale: '1' }}>
                <div className="before"
                    style={{
                        animation: compThreeAnime && 'rotate 2s infinite linear alternate-reverse'

                    }}
                ></div>
                <div className="div-three">
                    <img src={Frame3} alt=""
                        onMouseOver={handleMouseEventThree}
                        onMouseOut={handleMouseEventThree}
                    />
                </div>
            </Tilt>

        </div>)
}
