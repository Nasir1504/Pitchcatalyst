import React, { useState } from 'react';
import './see-our-work-comp-one.scss';
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import { PDFDate } from '../../pdfData';

const LogoFrame = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/logo-frame.png';
const Logo = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/logo.png';
const PDFIcon = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/pdfIcon.svg';
const Frame = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/group662.png';


export default function SeeOurWorkCompOne() {
    const [compOne, setCompOne] = useState(false)
    const [compTwo, setCompTwo] = useState(false)
    const [isExplore, setIsExplore] = useState(false)


    const defaultOptions = {
        reverse: false,
        max: 25,
        scale: 1,

    }
    return (
        <div className="see-our-work-comp-one-main-container">
            <div className="mask-container"></div>
            <div className="mask-animation-div">

                <img src={Frame} alt="" className="left-img" />
                <img src={Frame} alt="" className="right-img" />

            </div>

            <div className="explored-div"
                // onMouseUp={() => { setVerticalHRClick(false) }}

                style={{
                    display: !isExplore && 'none'
                }}
            >
                <div className="exit-div" onClick={() => { setIsExplore(false) }}>
                    <span className='cross-icon'>&#x2715;</span>
                    <Link className='back-to-home-link' to='/'>Back To Home</Link>
                </div>

                {/* ----------------------------------------------------------- */}
                <div className="content-div">

                    <div className="pdf-panel"

                        style={{
                            transformOrigin: 'right'
                        }}
                    >
                        {
                            PDFDate.map((item, i) => {
                                return (
                                    <img key={i} className='pdf-slides' src={item.imgURL} alt='' />
                                )
                            })
                        }
                    </div>
                    <div className="vertical-hr"
                   
                    >
                        {/* <img src={ResizeIcon} alt="" /> */}
                    </div>
                    <div className="deck-panel"
                        style={{
                            transformOrigin: 'left'
                        }}
                    >
                        <iframe className='iframe-deck' src="https://pitchcatalyst.com/demo-pitch-deck" title="Pitch Deck Demo"></iframe>
                        {/* <iframe className='iframe-deck' src="http://localhost:3000/demo-pitch-deck" title="Pitch Deck Demo"></iframe> */}

                    </div>
                </div>
            </div>


            {/* ----------------------------------------------------------------- */}

            <div className="main-content">

                <div className="top-logo-div">
                    <Link className='link-div' to='/'>

                        <img src={LogoFrame} alt="" />
                    </Link>
                </div>

                {/* ----------------------------------------------------------------- */}
                <Tilt options={defaultOptions} className='tilt-one'>

                    <div className="gradiant-div"
                        style={{
                            animation: compOne && 'rotate 3.5s infinite linear alternate-reverse'

                        }}
                    ></div>
                    <div
                        className="static-deck"
                        onClick={() => { setIsExplore(true) }}
                        onMouseEnter={() => { setCompOne(true) }}
                        onMouseLeave={() => { setCompOne(false) }}
                    >
                        <span className="sphare sphare-one"></span>
                        <span className="sphare sphare-two"></span>

                        <img src={PDFIcon} alt="" />
                        <div className='heading'>STATIC <br /><span>DECK</span></div>
                        <div className="bottom-content">
                            <div className="after-div">What We Got</div>

                        </div>
                    </div>
                </Tilt>
                {/* ----------------------------------------------------------------- */}

                <Tilt options={defaultOptions} className='tilt-two'>
                    <div className="gradiant-div"
                        style={{
                            animation: compTwo && 'rotate 3.5s infinite linear alternate-reverse'

                        }}
                    ></div>
                    <div
                        className="interactive-version"
                        onClick={() => { setIsExplore(true) }}
                        onMouseEnter={() => { setCompTwo(true) }}
                        onMouseLeave={() => { setCompTwo(false) }}
                    >
                        <span className="sphare sphare-one"></span>
                        <span className="sphare sphare-two"></span>

                        <img src={Logo} alt="" />
                        <div className='heading'>INTERACTIVE <br /><span>VERSION</span></div>
                        <div className="bottom-content">
                            <div className="after-div">What We Created</div>

                        </div>
                    </div>
                </Tilt>
                {/* ----------------------------------------------------------------- */}

                <button className="explore-now-btn" onClick={() => { setIsExplore(true) }}>Explore Now</button>
                <Link className="contact-us-btn" to='/team-up'>Contact Us</Link>


            </div>

        </div>)
}
