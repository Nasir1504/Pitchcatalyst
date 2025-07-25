import React, { useState, useEffect } from 'react';
import './teamup-comp-one.scss';


const Logo = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/nav-bar-img/frame577.png';

export default function TeamupCompOne(props) {
    const Calender = 'https://calendly.com/pitch-catalyst/30min?back=1&month=2023-06';

    const [bigCircle, setBigCircle] = useState(false);
    const [bigCircleAnime, setBigCircleAnime] = useState(false);
    const [nextForm, setNextForm] = useState(false);
    const [elementShift, setElementShift] = useState(false);
    const [elementOpacity, setElementOpacity] = useState(false);
    const [elementNum, setElementNum] = useState(0)
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
        if (scrolling >= '200' && bigCircle) {
            setNextForm(true)
            props.HandleNextForm()
        }
        // eslint-disable-next-line
    }, [scrolling])
    return (
        <div className="teamup-comp-one-main-container">
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
                    <span className='cross-btn' onClick={handleCalendlyFalse}>&#x2715;</span>
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
                            transform: nextForm && 'translate(-168%, 0%) scale(1.1)',
                            filter: elementOpacity && 'blur(4px)',
                            // top: elementOpacity && '-2%'
                            marginBottom: elementOpacity && '1%'

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

                                        width: i === 1 ? `${15 * i * 1.5}vw` :
                                            i === 2 ? `${15 * i * 0.42}vw` :
                                                i === 3 ? `${15 * i * 0.34}vw` :
                                                    i === 4 ? `${15 * i * 0.3}vw` :
                                                        `${15 * i * Math.pow(0.62, 2)}vw`,

                                        height: i === 1 ? `${15 * i * 1.5}vw` :
                                            i === 2 ? `${15 * i * 0.42}vw` :
                                                i === 3 ? `${15 * i * 0.34}vw` :
                                                    i === 4 ? `${15 * i * 0.3}vw` :
                                                        `${15 * i * Math.pow(0.62, 2)}vw`,
                                        opacity: i < 1 ? '0' :
                                            elementOpacity && i === 1 ? '0.2' :
                                                elementOpacity && i === 2 ? `1` :
                                                    elementOpacity && i === 3 ? `0.6` :
                                                        elementOpacity && i === 4 ? `0.4` :
                                                            elementOpacity && i > 4 ? `0.1` : '0.3',


                                    }}
                                ></div>
                            )
                        })}
                    </div>
                    {/* bigCircle */}

                    <div className="heading-div"
                        style={{
                            border: nextForm && 'none',
                            transform: bigCircle && 'translate(0%)',
                            filter: elementOpacity && 'blur(4px)',
                        }}
                    >
                        <h1 className='heading'
                            style={{
                                transform: nextForm && 'translate(-60%) scale(1.1)',
                                color: nextForm && '#fff'
                            }}
                        >LET'<span>S</span></h1>
                        <h2 className='heading'
                            style={{
                                transform: nextForm && 'translate(20%) scale(1.1)',
                                opacity: nextForm && '0.1',
                                color: nextForm && '#fff'
                            }}
                        >TEAM</h2>
                        <div className='heading'
                            style={{
                                transform: nextForm && 'translate(280%)',
                                opacity: nextForm && '0'
                            }}
                        >UP</div>
                    </div>


                    <div className="schedule-call-div"
                        onMouseOut={() => {
                            setElementOpacity(false)
                            setElementNum(0)
                        }}
                        onMouseOver={() => {
                            setElementShift(false)
                            setElementOpacity(true)
                            setElementNum(1)

                        }}
                        style={{
                            filter: elementNum === 2 && 'blur(4px)',
                            transform: elementNum === 2 ? 'translate(-40%)' : elementOpacity && 'scale(1.05)',
                            zIndex: nextForm ? '1' : '-1',

                        }}
                    >
                        <p
                            style={{
                                opacity: nextForm && '1',
                                color: elementNum === 2 && '#000'
                            }}
                        >Schedule Call</p>
                        <div className="call-us">
                            <div className="btn-bg"
                                style={{
                                    transform: !nextForm && 'translate(-60%, 1200%)',
                                    opacity: nextForm && '1',
                                    backgroundColor: elementNum === 1 ? '#fff' :
                                        elementNum === 2 && '#000',
                                    transition: elementNum === 2 && '0.2s',
                                }}
                            ></div>
                            <span className='btn-text'
                                // href="https://calendly.com/ishratrentainance/booknow" target="_blank" rel='noreferrer'
                                onClick={handleCalendlyTrue}
                                style={{
                                    opacity: nextForm && '1',
                                    color: elementNum === 2 && '#fff',
                                    transition: elementNum === 2 && '0.2s',

                                }}
                            >Call Us</span>
                        </div>

                    </div>
                    <div className="contact-us-div"
                        onMouseOut={() => {
                            setElementOpacity(false)
                            setElementNum(0)
                        }}
                        onMouseOver={() => {
                            setElementShift(true)
                            setElementOpacity(true)
                            setElementNum(2)

                        }}
                        style={{
                            filter: elementNum === 1 && 'blur(4px)',
                            transform: elementNum === 1 ? 'translate(40%)' : elementOpacity && 'scale(1.05)',
                            zIndex: nextForm ? '1' : '-1'

                        }}
                    >
                        <p
                            style={{
                                opacity: nextForm && '1',
                                color: elementNum === 1 && '#000'

                            }}
                        >Contact Us</p>
                        <div className="contact-us">
                            <div className="btn-bg"
                                style={{
                                    transform: !nextForm && 'translate(-60%, 1200%)',
                                    opacity: nextForm && '1',
                                    backgroundColor: elementNum === 2 ? '#fff' :
                                        elementNum === 1 && '#000',
                                    transition: elementNum === 1 && '0.2s'


                                }}
                            ></div>
                            <a className='btn-text'
                                // href="https://docs.google.com/forms/d/e/1FAIpQLSeLGbiQCIEAFimiVMIURns4lLuIgqawL4JfjbC2XGSeZXQsvw/viewform" target="_blank" rel='noreferrer'
                                href="https://wa.me/9711750002?text=Hey there, seeking deck expertise – can we sync up for a chat? " target="_blank" rel="noreferrer"
                                style={{
                                    opacity: nextForm && '1',
                                    color: elementNum === 1 && '#fff',
                                    transition: elementNum === 1 && '0.2s',
                                }}
                            >
                                {/* <a href="https://forms.gle/ETqW5LZLGxnsMCdo7" target="_blank" rel='noreferrer'>
                                </a> */}
                                Contact</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>)
}
