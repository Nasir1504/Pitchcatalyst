import React, { useState, useEffect, useRef } from 'react';
import './see-our-work-comp-two.scss';
import { PDFDate } from '../../pdfData';
import { Link } from 'react-router-dom';

const WhiteLamp = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/lamp-white.svg';
const LogoDark = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/logo-dark.png';
const LogoLight = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/logo-light.png';
const NeonLamp = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/lamp-neon.svg';
const PDFIcon = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/pdfIcon.svg';

export default function SeeOurWorkCompTwo(props) {
    const [scrolling, setScrolling] = useState(0);
    const [compOpacity, setCompOpacity] = useState(0);
    const [pdfView, setPDFView] = useState(false)
    const [demoPD, setDemoPD] = useState(false)
    const divRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])


    useEffect(() => {
        if (divRef.current) {
            divRef.current.scrollTop = 0;
        }
    }, [pdfView]);

    useEffect(() => {
        const handleScroll = event => {

            setScrolling(window.scrollY);
            const position = window.scrollY;

            const CompOpacity = position >= 100 && position <= 500 ? '0.2' :
                position >= 500 && 0.8;

            setCompOpacity(CompOpacity)

        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolling]);

    return (
        <div className="see-our-work-comp-two-main-container">
            {/* <p style={{ position: 'fixed', color: '#fff', top: '0', left: '10%' }}>{scrolling.toString()}/{' '}{compOpacity.toString()}</p> */}


            {/* --------------------------------------------------------- */}
            <span className='home-icon-span'

                style={{
                    border: compOpacity < 0.2 ? `1px solid rgba(255, 255, 255, 0.4)` : `1px solid rgba(200, 228, 4, 0.4)`,
                }}
            >
                <Link to='/' className='home-link-btn'
                    style={{
                        color: compOpacity < 0.2 ? `rgba(255, 255, 255, 0.8)` : `rgba(200, 228, 4, 0.8)`

                    }}
                > <span>&#8249;</span>HOME</Link>
            </span>

            <span className='contact-icon-span'

                style={{
                    border: compOpacity < 0.2 ? `1px solid rgba(255, 255, 255, 0.4)` : `1px solid rgba(200, 228, 4, 0.4)`,
                }}
            >
                <Link to='/team-up' className='contact-link-btn'
                    style={{
                        color: compOpacity < 0.2 ? `rgba(255, 255, 255, 0.8)` : `rgba(200, 228, 4, 0.8)`

                    }}
                >Contact Us</Link>
            </span>

            {/* -------------------------------------------------------------- */}


            <img src={NeonLamp} alt="" className="neon-lamp-img"
                style={{
                    opacity: compOpacity < 0.2 ? '1' : '0',
                }}
            />
            <img src={WhiteLamp} alt="" className="white-lamp-img"
                style={{
                    opacity: compOpacity < 0.2 ? '0' : '1',

                }}
            />

            <img src={LogoDark} alt="" className="logo-dark"
                style={{
                    opacity: compOpacity < 0.2 ? '1' : '0',
                    transform: compOpacity < 0.2 ? 'rotate(0deg)' : compOpacity >= 0.2 && 'rotate(180deg)',
                    animation: compOpacity < 0.2 ? 'darkLogoKF 3.5s ease-in-out' :
                        compOpacity >= 0.2 && 'lightLogoKF 3.5s ease-in-out'
                }}
            />
            <img src={LogoLight} alt="" className="logo-light"
                style={{
                    opacity: compOpacity < 0.2 ? '0' : '1',
                    transform: compOpacity < 0.2 ? 'rotate(0deg)' : compOpacity >= 0.2 && 'rotate(180deg)',
                    animation: compOpacity < 0.2 ? 'darkLogoKF 3.5s ease-in-out' :
                        compOpacity >= 0.2 && 'lightLogoKF 3.5s ease-in-out'
                }}
            />

            <div className="bg-text"
                style={{
                    opacity: compOpacity < 0.2 ? '1' : '0',

                }}
            >
                BEFORE
            </div>
            <div className="bg-text"
                style={{
                    opacity: compOpacity < 0.2 ? '0' : '1',

                }}
            >
                AFTER
            </div>

            <div className="static-deck"
                onClick={() => { setPDFView(true) }}

                style={{
                    transform: compOpacity < 0.2 ? `scale(2) translateY(0%)` :
                        `scale(1) translateY(-500%)`,
                    animation: compOpacity < 0.2 && 'staticKF  3.5s ease-in-out',
                }}
            >
                <div className="main-content-div">

                    <span className="sphare sphare-one"></span>
                    <span className="sphare sphare-two"></span>
                    <span className="sphare sphare-three"></span>
                    <span className="sphare sphare-four"></span>

                    <img src={PDFIcon} alt="" />
                    <div className='heading'>STATIC <br /><span>DECK</span></div>
                    <div className="bottom-content">
                        <div className="after-div">What We Got</div>

                    </div>
                </div>
            </div>

            <div className="interactive-version"
                onClick={() => { setDemoPD(true) }}

                style={{
                    transform: compOpacity < 0.2 ? `scale(1) translateY(500%)` :
                        `scale(2) translateY(0%)`,
                    animation: compOpacity >= 0.2 && 'interactiveKF  3.5s ease-in-out',

                }}
            >
                <div className="main-content-div">
                    <span className="sphare sphare-one"></span>
                    <span className="sphare sphare-two"></span>
                    <span className="sphare sphare-three"></span>
                    <span className="sphare sphare-four"></span>

                    <img src={LogoLight} alt="" />
                    <div className='heading'>INTERACTIVE <br /><span>VERSION</span></div>
                    <div className="bottom-content">
                        <div className="after-div">What We Created</div>

                    </div>
                </div>
            </div>

            <div className="explore-dark-btn"
                onClick={() => { setPDFView(true) }}
                style={{
                    display: compOpacity >= 0.2 && 'none'
                }}
            >
                <p>EXPLORE</p>
            </div>
            <div className="explore-light-btn"
                onClick={() => { setDemoPD(true) }}
                style={{
                    display: compOpacity < 0.2 && 'none'
                }}
            >
                <Link to='/demo-pitch-deck' style={{ textDecoration: 'none' }}> <p>EXPLORE</p></Link>
            </div>

            <div className="pdf-explore-div"
                style={{
                    display: !pdfView && 'none',
                }}
            >
                <span className="cross-btn" onClick={() => { setPDFView(false) }}>&#x2715;</span>
                <div className="main-div" ref={divRef} >

                    {
                        PDFDate.map((item, i) => {
                            return (
                                <img src={item.imgURL} key={i} alt='' />
                            )
                        })
                    }
                </div>

            </div>
            <div className="demo-pitch-deck"
                style={{
                    display: !demoPD && 'none'
                }}
            >
                <span className="cross-btn" onClick={() => { setDemoPD(false) }}><span>&#x2039;</span> BACK</span>
                <iframe className='iframe' src="https://pitchcatalyst.com/demo-pitch-deck" title="Pitch Deck Demo" ></iframe>

            </div>



        </div >)
}
