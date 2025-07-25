import React, { useState } from 'react';
import './comp-ten.scss';
import {ImageServer} from '../../../../../img/imageServer';


const Logo = `${ImageServer}img/Pitch-Catalyst/home-page-imgs/logo-img.png`;
const Bell = `${ImageServer}img/Pitch-Catalyst/home-page-imgs/bell.png`;

export default function CompTen(props) {
    const [compOneAnime, setCompOneAnime] = useState(false)


    const handleMouseEvent = () => {
        setCompOneAnime(prev => !prev)
    }
    return (
        <div className="comp-ten-main-container"
            onMouseOver={handleMouseEvent}
            onMouseOut={handleMouseEvent}
        >
            <div className="after-div">
                <div className="top-div">
                    <h3>Subscribe</h3> <img className='logo-img' src={Logo} alt="" /> <img className='bell-img' src={Bell} alt="" />
                </div>
                <p>Subscribe for deck updates; stay informed on promising opportunities.</p>
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
