import React, { useState, useEffect } from 'react';
import './comp-seven.scss';


import Icon from "../../../../../assets/imgs/home-page/hourglass1.png";


export default function CompSeven() {
    const [compOneAnime, setCompOneAnime] = useState(false)
    const [iconRotation, setIconRotation] = useState(false)

    useEffect(() => {
        setTimeout(handleIconRotation, 4000)
    }, [iconRotation])

    function handleIconRotation() {
        setIconRotation(prev => !prev)
    }

    const handleMouseEvent = () => {
        setCompOneAnime(prev => !prev)
    }
    return (
        <div className="comp-seven-main-container"
            onMouseOver={handleMouseEvent}
            onMouseOut={handleMouseEvent}
        >
            <div className="after-div">
                <div className="left-img-div">

                    <div className="img-div">
                        <img src={Icon} alt=""
                            style={{
                                animation: !iconRotation && 'iconKF 2s ease-in-out',
                            }}
                        />

                    </div>
                </div>
                <div className="right-content-div">
                    <p>AVG <br />TIME DURATION </p>
                    <p className='time-para'>12 <span>min</span></p>
                </div>
            </div>

            <div className="before-div"
                style={{
                    animation: compOneAnime && 'rotate 1.5s infinite linear alternate-reverse'

                }}
            >

            </div>
        </div>)
}
