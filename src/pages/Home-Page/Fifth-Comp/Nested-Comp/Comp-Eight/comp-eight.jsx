import React, { useState, useEffect } from 'react';
import './comp-eight.scss';


import VBar from "../../../../../assets/imgs/home-page/v-bar.png";

export default function CompEight(props) {
    const [compOneAnime, setCompOneAnime] = useState(false)
    const [barValue, setBarValue] = useState(false)

    function handleBarValue() {
        barValue ? setBarValue(false) : setBarValue(true)
    }

    useEffect(() => {
        setTimeout(handleBarValue, 4000)
         // eslint-disable-next-line 
    }, [barValue])


    const handleMouseEvent = () => {
        setCompOneAnime(prev => !prev)
    }
    return (
        <div className="comp-eight-main-container"
            onMouseOver={handleMouseEvent}
            onMouseOut={handleMouseEvent}
        >
            <div className="after-div">

                <div className="left-div">
                    <div className='heat-map-heading'>Heat <br /> MAP</div>
                    <p className='para-one'>Easy to understand your deck erformance.</p>
                    <p className='para-two'>Easy to understand your deck erformance.</p>

                </div>
                <div className="right-div">
                    <div className="verticle-one verticle-div">
                        <div
                            style={{
                                height: barValue ? '40%' : '0%'
                            }}
                        ></div>
                        <p className='para-one'>100</p>
                        <p className='para-two'>00</p>

                        <img src={VBar} alt="" />
                    </div>
                    <div className="verticle-two verticle-div">
                        <p>Poor</p>
                        <div className='h-bar'></div>
                        <div className="v-bar"
                            style={{
                                height: barValue && '80%'
                            }}
                        ></div>
                    </div>
                    <div className="verticle-three verticle-div">
                        <p>Avrg.</p>
                        <div className='h-bar'></div>
                        <div className="v-bar"
                            style={{
                                height: barValue && '70%'
                            }}
                        ></div>
                    </div>
                    <div className="verticle-four verticle-div">
                        <p>Good</p>
                        <div className='h-bar'></div>
                        <div className="v-bar"
                            style={{
                                height: barValue && '50%'
                            }}
                        ></div>
                    </div>
                    <div className="verticle-five verticle-div">
                        <p>Excellent</p>
                        <div className='h-bar'></div>
                        <div className="v-bar"
                            style={{
                                height: barValue && '60%'
                            }}
                        ></div>
                    </div>


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
