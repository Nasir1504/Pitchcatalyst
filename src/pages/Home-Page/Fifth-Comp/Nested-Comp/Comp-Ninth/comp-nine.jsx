import React, { useState, useEffect } from 'react';
import './comp-nine.scss';


import Shape1 from "../../../../../assets/imgs/home-page/shape1.png";
import Shape2 from "../../../../../assets/imgs/home-page/shape2.png";


export default function CompNine(props) {
    const [compOneAnime, setCompOneAnime] = useState(false)
    const [topAnime, setTopAnime] = useState(false)

    function handleTopAnime() {
        topAnime ? setTopAnime(false) : setTopAnime(true)
    }

    useEffect(() => {
        setTimeout(handleTopAnime, 4000)
        // eslint-disable-next-line 
    }, [topAnime])

    const handleMouseEvent = () => {
        setCompOneAnime(prev => !prev)
    }

    return (
        <div className="comp-nine-main-container"
            onMouseOver={handleMouseEvent}
            onMouseOut={handleMouseEvent}
        >
            <div className="after-div"
                style={{
                    // backgroundImage: url(`${ImageServer}img/Pitch-Catalyst/home-page-imgs/component.png)
                }}
            >
                <img className='top-img' src={Shape2} alt=""
                    style={{
                        opacity: topAnime ? '1' : '0'
                    }}
                />
                <img className='top-img' src={Shape1} alt="" />

                <h4>Poll <br /><span>Option</span></h4>
                <p>Easy to understand your deck performance.</p>

            </div>

            <div className="before-div"
                style={{
                    animation: !props.Query && compOneAnime ? 'rotate 2s infinite linear alternate-reverse' :
                        props.Query && !compOneAnime && 'rotate 4s infinite linear alternate-reverse',

                }}
            ></div>
        </div>)
}
