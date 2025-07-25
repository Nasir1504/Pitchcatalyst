import React, { useState, useEffect } from 'react';
import './teamup-comp-two.scss';


const Logo = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/nav-bar-img/frame577.png';

export default function TeamupCompTwo() {
    const Calender = 'https://calendly.com/pitch-catalyst/30min?back=1&month=2023-06';

    const [bigCircle, setBigCircle] = useState(false);
    const [bigCircleAnime, setBigCircleAnime] = useState(false);
    // eslint-disable-next-line
    const [nextForm, setNextForm] = useState(true);
    const [elementShift, setElementShift] = useState(false);
    const [elementOpacity, setElementOpacity] = useState(true);
    const [elementNum, setElementNum] = useState(1)
    // eslint-disable-next-line
    const [scrolling, setScrolling] = useState(window.scrollY);
    // eslint-disable-next-line
    const [calendlyVisibility, setCalendlyVisibility] = useState(false);

    function handleCalendlyTrue() {
        setCalendlyVisibility(true)
    }

    // eslint-disable-next-line
    function handleCalendlyFalse() {
        setCalendlyVisibility(false)
    }
    useEffect(() => {
        const handleScrolling = () => {
            setScrolling(window.scrollY);
            // console.log(scrolling)

        }
        window.addEventListener('scroll', handleScrolling)
        return (() => {
            window.removeEventListener('scroll', handleScrolling)

        })
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setBigCircleAnime(true)
        }, 100)
        setTimeout(() => {
            setBigCircle(true)
        }, 1600)
    }, [])
    useEffect(() => {
        !elementShift && setTimeout(() => {
            setElementShift(true)
            setElementOpacity(true)
            setElementNum(2)
        }, 4000);
        elementShift && setTimeout(() => {
            setElementShift(false)
            setElementOpacity(true)
            setElementNum(1)
        }, 4000);

    }, [elementShift])

    // useEffect(() => {
    //     scrolling >= '200' && setNextForm(true)

    // }, [scrolling])
    return (
        <div className="teamup-comp-two-main-container">
            <div className="main-content-div"
                style={{
                    width: bigCircle && '350vw',
                    height: bigCircle && '350vw',
                    transform: bigCircleAnime ? 'translateY(0%)' : 'translateY(400%)',
                }}
            >
                <div className="frame-contant-div"
                    style={{
                        display: !calendlyVisibility && 'none'
                    }}
                >
                    <span className='cross-btn-span' onClick={handleCalendlyFalse}><b>&#x2715;</b></span>
                    <iframe
                        title="title"
                        id="iframe-calendly"
                        src={Calender}
                    />
                </div>
                <div className="container"
                    style={{
                        opacity: bigCircle && '1'
                    }}
                >
                    <img className='logo-img' src={Logo} alt=""
                        style={{
                            // marginBottom: elementOpacity && '-10%'
                            marginTop: elementOpacity && "-15%"

                        }}
                    />
                    <div className="focused-circle-container"
                        style={{
                            marginLeft: elementShift && '10%',
                            opacity: nextForm && '1'
                        }}
                    >

                        {[...Array(25)].map((_, i) => {
                            return (
                                <div className="focused-circle"
                                    key={i}
                                    style={{
                                        transform: elementOpacity && `scale(1.1)`,

                                        width: i === 2 ? `${15 * i * 0.98}vw` :
                                            i === 3 ? `${15 * i * 0.78}vw` :
                                                i === 4 ? `${15 * i * 0.7}vw` :
                                                    `${15 * i * 0.7}vw`,
                                        height: i === 2 ? `${15 * i * 0.98}vw` :
                                            i === 3 ? `${15 * i * 0.78}vw` :
                                                i === 4 ? `${15 * i * 0.7}vw` :
                                                    `${15 * i * 0.7}vw`,
                                        opacity: i < 2 ? '0' :
                                            elementOpacity && i === 2 ? `1` :
                                                elementOpacity && i === 3 ? `0.6` :
                                                    elementOpacity && i === 4 ? `0.4` :
                                                        elementOpacity && i > 4 ? `0.1` : '0.3',


                                    }}
                                ></div>
                            )
                        })}
                    </div>

                    <div className="heading-div"
                        style={{
                            transform: bigCircle && 'translate(0%)',
                        }}
                    >
                        <h1 className='heading'
                            style={{
                                color: nextForm && '#fff'
                            }}
                        >LET'S</h1>
                        <h2 className='heading' ><b>TEAM UP</b></h2>

                    </div>


                    <div className="schedule-call-div"
                        style={{
                            transform: elementNum === 2 ? 'translate(-10%)' : elementOpacity && 'scale(1.05)',
                            zIndex: nextForm ? '1' : '-1',

                        }}
                    >
                        <p
                            style={{
                                opacity: nextForm && '1',
                            }}
                        >Schedule Call</p>
                        <div className="call-us">
                            <div className="btn-bg"
                                style={{
                                    transform: !nextForm && 'translate(-60%, 1200%)',
                                    opacity: nextForm && '1',
                                    transition: elementNum === 2 && '0.2s',
                                }}
                            ></div>
                            <span className='btn-text'
                                // href="https://calendly.com/ishratrentainance/booknow" target="_blank" rel='noreferrer'
                                onClick={handleCalendlyTrue}
                                style={{
                                    opacity: nextForm && '1',
                                    // color: elementNum === 2 && '#fff',
                                    transition: elementNum === 2 && '0.2s',

                                }}
                            >Call Us</span>
                        </div>

                    </div>
                    <div className="contact-us-div"
                        style={{
                            transform: elementNum === 1 ? 'translate(10%)' : elementOpacity && 'scale(1.05)',
                            zIndex: nextForm ? '1' : '-1'

                        }}
                    >
                        <p
                            style={{
                                opacity: nextForm && '1',

                            }}
                        >Contact Us</p>
                        <div className="contact-us">
                            <div className="btn-bg"
                                style={{
                                    transform: !nextForm && 'translate(-60%, 1200%)',
                                    opacity: nextForm && '1',
                                    transition: elementNum === 1 && '0.2s'


                                }}
                            ></div>
                            <a className='btn-text'
                                // href="https://docs.google.com/forms/d/e/1FAIpQLSeLGbiQCIEAFimiVMIURns4lLuIgqawL4JfjbC2XGSeZXQsvw/viewform" target="_blank" rel='noreferrer'
                                href="https://wa.me/9711750002?text=Hey there, seeking deck expertise – can we sync up for a chat? " target="_blank" rel="noreferrer" 
                                style={{
                                    opacity: nextForm && '1',
                                    transition: elementNum === 1 && '0.2s',
                                }}
                            >
                                Contact</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>)
}
