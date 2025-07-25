import React, { useState, useEffect, useRef } from 'react';
import './fourth-comp.scss';
// import { Link } from 'react-router-dom';


export default function FourthComp(props) {

    const [nextContent, setNextContent] = useState(false);
    const [circleAnime, setCircleAnime] = useState(false);
    const [circleAnimeTwo, setCircleAnimeTwo] = useState(false);
    const [nextContentAnime, setNextContentAnime] = useState(false);


    function handleNextContent() {
        setNextContent(true)
        setTimeout(() => {
            setNextContentAnime(true)
        }, 200)

    }
    function handleNextContentFalse() {
        setNextContent(false)
        setNextContentAnime(false)
    }

    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) =>
                props.CompFourthOpacity >= '0.2' && setCircleAnime(true),
            {
                threshold: 0.5
            });

        observer.observe(elementRef.current);

        return () => { observer.disconnect() }
    }, [props.CompFourthOpacity])

    useEffect(() => {
        circleAnime && setTimeout(() => {
            setCircleAnimeTwo(true)
        }, 4200)
    }, [circleAnime])

    useEffect(() => {
        const handleScroll = () => {
            if (props.CompFourthOpacity >= '1') {
                handleNextContentFalse()
            }
            else if (props.CompFourthOpacity < '0.2') {
                handleNextContentFalse()

            }
            // else if (props.CompFourthOpacity >= '0.8' && props.CompFourthOpacity < '1') {
            //     handleNextContent()
            // }

        }
        window.addEventListener('scroll', handleScroll)
        return (() => { window.removeEventListener('scroll', handleScroll) })
    }, [props.CompFourthOpacity])



    return (
        <div className="fourth-comp-main-container"
            ref={elementRef}
            // onScroll={handleScrolling}
            style={{
                opacity: props.CompFourthOpacity >= '0.2' && props.CompFourthOpacity < '1' ? '1' :
                    props.CompFourthOpacity >= '1' && '0',
                zIndex: props.CompFourthOpacity >= '0.2' && props.CompFourthOpacity < '1.2' ? '1' :
                    props.CompFourthOpacity >= '1.2' && '0',
            }}
        >
            {/* <p syle={{ position: 'fixed', top: '25%', left: '10%', color: '#fff' }}></p> */}
            <div className="bg-text1"
                style={{
                    minHeight: !props.Query && '400vw',
                    transform: props.CompFourthOpacity >= '0.2' && props.CompFourthOpacity < '0.8' && `translateY(12%)`
                }}
            >Pitch Catalyst</div>
            <div className="bg-text2"
                style={{
                    minHeight: !props.Query && '400vw',
                    transform: props.CompFourthOpacity >= '0.2' && props.CompFourthOpacity < '0.8' && `translateY(42%)`
                }}
            >Pitch Catalyst</div>


            <div className="circle-div"
                style={{
                    bottom: props.Query ? '46%' : !props.Query && '44.6%',
                    animation: circleAnime && 'circleKF 4s ease-in-out ',
                    marginRight: circleAnimeTwo && !props.Query ? '-8.6%' : circleAnimeTwo && props.Query && '-20.8%',
                    marginTop: circleAnimeTwo && !props.Query ? '5%' : circleAnimeTwo && props.Query && '-24%',
                    transform: circleAnimeTwo && 'scale(0.42)'

                }}
            ></div>
            {/* ---------------------------------Elevation Div------------------------------------ */}

            <div className="starting-content"
                onMouseOver={handleNextContent}
                style={{
                    zIndex: !nextContent && '1',
                    opacity: nextContent && '0'
                }}
            >
                <div className='elevate-your-deck-heading'
                ><span className="icon-span">@</span>Elevate Your <span>Deck</span></div>
                <p>{!props.Query ? 'HOVER' : 'CLICK'} <span>HERE <span className="icon-span">&#8593;</span></span></p>
            </div>

            {/* --------------------------------------------------------------------- */}

            <div className="next-content-div"
                // onClick={handleNextContentFalse}
                style={{
                    width: nextContent && !props.Query ? '150vw' : nextContent && props.Query && '250vw',
                    height: nextContent && !props.Query ? '150vw' : nextContent && props.Query && '250vw',
                }}

            >
                <div className="main-content-div"
                    style={{
                        opacity: nextContentAnime && '1',
                        animation: !nextContent && 'nextContentSecondKF 2s',
                        // transform: props.CompFourthOpacity >= '1' && `translate(-140%)`,
                    }}
                >

                    <div className="heading-div"
                        style={{
                            animation: nextContentAnime && 'nextContentKF 2s ease-in-out',

                        }}
                    ><span>@ &nbsp;</span>Elevate Your Deck</div>

                    {
                        !props.Query ?
                            <p className="middle-para"
                                style={{
                                    animation: nextContentAnime && !props.Query && 'nextContentKF 2s ease-in-out'

                                }}
                            >
                                <b>Pitch deck</b> analytics provide a data-driven approach to evaluating and refining start-up presentations,<br />
                                ensuring that they effectively communicate the company's value proposition to potential investors.<br />
                                By examining key performance indicators, such as viewer engagement, slide-by-slide retention, and<br />
                                overall completion rates, pitch deck analytics reveal insights into <b>audience behaviour & preferences</b>.<br />
                                These data points enable the identification of areas for improvement, ultimately leading to a more<br />
                                <b>persuasive & impactful</b> pitch deck. Incorporating pitch deck analytics into your presentation strategy<br />
                                ensures that your start-up's message is well-received.
                            </p>
                            :
                            props.Query &&
                            <p className="middle-para"
                                style={{
                                    animation: nextContentAnime && !props.Query && 'nextContentKF 2s ease-in-out'
                                }}
                            >
                                <span className="span-one"
                                    style={{
                                        left: props.CompFourthOpacity >= '0.2' && props.CompFourthOpacity < '0.8' && '0%',
                                        opacity: props.CompFourthOpacity >= '0.2' && props.CompFourthOpacity < '0.8' && '1',

                                    }}
                                >
                                    Pitch deck analytics provide a data-driven approach to evaluating and refining start-up presentations,
                                    ensuring that they effectively communicate the company's value proposition to potential investors.
                                    By examining key performance indicators, such as viewer engagement, slide-by-slide retention, and
                                    overall completion rates, pitch deck analytics reveal insights into audience behaviour & preferences.

                                </span>

                                <span className="span-two"
                                    style={{
                                        left: props.CompFourthOpacity >= '0.8' && '0%',
                                        opacity: props.CompFourthOpacity >= '0.8' && '1',

                                    }}
                                >
                                    These data points enable the identification of areas for improvement, ultimately leading to a more
                                    span persuasive & impactful pitch deck. Incorporating pitch deck analytics into your presentation strategy
                                    ensures that your start-up's message is well-received.
                                </span>

                            </p>


                    }

                   <button className="elevate-btn"
                        style={{
                            animation: nextContentAnime && 'nextContentKF 2s ease-in-out'

                        }}
                    >Elevate Now</button>

                </div>

            </div>


        </div>
    )
}
