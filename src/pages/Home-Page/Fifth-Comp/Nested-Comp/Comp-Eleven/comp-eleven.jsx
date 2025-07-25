import React, { useState, useEffect } from 'react';
import './comp-eleven.scss';

export default function CompEleven(props) {
    const [compOneAnime, setCompOneAnime] = useState(false)
    const [bgColor, setBGColor] = useState(false)


    function handleIconRotation() {
        bgColor ? setBGColor(false) : setBGColor(true)
    }

    useEffect(() => {
        setTimeout(handleIconRotation, 4000)
         // eslint-disable-next-line 
    }, [bgColor])


    // console.log(bgColor)
    const handleMouseEvent = () => {
        setCompOneAnime(prev => !prev)
    }
    return (
        <div className="comp-eleven-main-container"
            onMouseOver={handleMouseEvent}
            onMouseOut={handleMouseEvent}
        >
            <div className="after-div">
                <div className="bg-color-div"
                    style={{
                        transform: bgColor ? 'scaleY(0.3)' : 'scaleY(1)',
                        opacity: bgColor && '0',
                    }}
                ></div>
                <div className="top-div"
                    style={{
                        boxShadow: bgColor && 'none'
                    }}
                >
                    <p
                        style={{
                            marginTop: bgColor && '10%'
                        }}
                    >
                        Insights
                    </p>
                </div>
                <div className="bottom-div">
                    <p
                        style={{
                            left: bgColor && '16%'
                        }}
                    >
                        Pitch Deck Analytics Insights provide key data on viewer engagement, slide performance, and conversion rates, optimizing your investor outreach strategy.

                    </p>
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
