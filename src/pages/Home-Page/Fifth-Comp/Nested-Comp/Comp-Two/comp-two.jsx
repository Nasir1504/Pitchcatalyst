import React, { useEffect, useState } from 'react';
import './comp-two.scss';
// import { ImageServer } from '../../../../../img/imageServer';


const Icon = `https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/hourglass%201.png`;

export default function CompTwo(props) {
    const [compOneAnime, setCompOneAnime] = useState(false)

    const [iconRotation, setIconRotation] = useState(false)

    function handleIconRotation() {
        setIconRotation(prev => !prev)
    }

    useEffect(() => {
        setTimeout(handleIconRotation, 4000)
    }, [iconRotation])

    const handleMouseEvent = () => {
        setCompOneAnime(prev => !prev)
    }
    return (
        <div className="comp-two-main-container"
            onMouseOver={handleMouseEvent}
            onMouseOut={handleMouseEvent}
        >
            <div className="after-div">
                <div className="left-img-div">

                    <div className="img-div">
                        {/* <iframe src="https://giphy.com/embed/5owNSuvkqgLg1iqNrF" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/visuals-network-connectivity-5owNSuvkqgLg1iqNrF">via GIPHY</a></p> */}
                        <img src={Icon} alt=""
                            style={{
                                animation: !iconRotation && 'iconKF 2s ease-in-out',
                            }}
                        />

                    </div>
                </div>
                <div className="right-content-div">
                    <p>AVG <br />SLIDE DURATION </p>
                    <p className='time-para'>12 <span>min</span></p>
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
