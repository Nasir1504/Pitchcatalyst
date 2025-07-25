import React, { useState } from 'react';
import './comp-one.scss';

import Globe from "../../../../../assets/imgs/home-page/globe.png";

export default function CompOne(props) {
    const [compOneAnime, setCompOneAnime] = useState(false)


    const handleMouseEvent = () => {
        setCompOneAnime(prev => !prev)
    }

    return (
        <div className="comp-one-main-container"
            onMouseOver={handleMouseEvent}
            onMouseOut={handleMouseEvent}
        >
            <div className="after-div">
                <div className="top-img-div">
                    <img src={Globe} alt="" />
                </div>
                <div className="bottom-content-div">
                    <p className="para-one">Delhi<span>032</span></p>
                    <p className="para-two">Noida<span>102</span></p>
                    <p className="para-three">Gurugram<span>112</span></p>

                </div>
            </div>

            <div className="before-div"
                style={{
                    animation: !props.Query && compOneAnime ? 'rotate 2s infinite linear alternate-reverse' :
                        props.Query && !compOneAnime && 'rotate 4s infinite linear alternate-reverse',

                }}
            >

            </div>

        </div>)
}
