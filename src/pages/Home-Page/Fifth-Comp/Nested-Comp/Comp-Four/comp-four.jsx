import React, { useState, useEffect } from 'react';
import './comp-four.scss';

import Mumbai from "../../../../../assets/imgs/home-page/mask-group.png";
import Delhi from "../../../../../assets/imgs/home-page/mask-group_2.png"

export default function CompFour(props) {
    const [compOneAnime, setCompOneAnime] = useState(false);
    const [x, setX] = useState(0);


    useEffect(() => {
        setTimeout(handleTranstaltion, 4000)
         // eslint-disable-next-line 
    }, [x])

    function handleTranstaltion() {
        x < 236 ? setX(x + 118) : setX(0)
    }


    const cityData = [
        {
            name: 'Delhi',
            imgURL: Delhi
        },
        {
            name: 'Mumbai',
            imgURL: Mumbai
        },
        {
            name: 'Delhi',
            imgURL: Delhi
        },
        {
            name: 'Mumbai',
            imgURL: Mumbai
        },
    ]



    const handleMouseEvent = () => {
        setCompOneAnime(prev => !prev)
    }
    return (
        <div className="comp-four-main-container"
            onMouseOver={handleMouseEvent}
            onMouseOut={handleMouseEvent}
        >
            <div className="after-div">
                <div className="slider-div">
                    {
                        cityData.map((item, i) => {
                            return (
                                <div className="slides" key={i}
                                style={{
                                    transform: `translate(${-x}%)`
                                }}
                                >
                                    <p>{item.name}</p>
                                    <img src={item.imgURL} alt="" />
                                </div>
                            )

                        })
                    }                </div>
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
