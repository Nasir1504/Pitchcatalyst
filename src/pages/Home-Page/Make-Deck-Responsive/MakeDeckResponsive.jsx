import React, { useState, useEffect, useMemo } from 'react';
import './make-deck-responsive.scss';
import { motion } from "framer-motion"
// import { ImageServer } from '../../../img/imageServer';
import { Tilt } from 'react-tilt';

import Frame1 from "../../../assets/imgs/home-page/mockup-element.png";
import Frame2 from '../../../assets/imgs/home-page/frame354.png';
import Frame3 from '../../../assets/imgs/home-page/iPhone-14-Pro.jpg';


// const Frame1 = `${ImageServer}img/Pitch-Catalyst/home-page-imgs/mockup-element.png`;
// const Frame2 = `${ImageServer}img/Pitch-Catalyst/home-page-imgs/frame354.png`;
// const Frame3 = `${ImageServer}img/Pitch-Catalyst/home-page-imgs/iPhone-14-Pro.png`;


           

// const MackBook = `${ImageServer}img/Pitch-Catalyst/home-page-imgs/macbookpro18.png`;
const CursorIcon = `https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/cursor-img.png`;

export default function MakeDeckResponsive(props) {
    // const CircleLight = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/circle-shape-bg-light.png';
    const Logo = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/nav-bar-img/frame577.png';

    const [cursorOne, setCursorOne] = useState(true)
    const [cursorTwo, setCursorTwo] = useState(false)
    const [cursorThree, setCursorThree] = useState(false)
    const [isTyping, setIsTyping] = useState(false)
    const [deviceType, setDeviceType] = useState(3)
    const [autoSlide, setAutoSlide] = useState(true);
    const [clearTime, setClearTime] = useState(true);


    function handleAutoSlide() { autoSlide ? handleNext() : handlePrev() }


    function handleNext() {
        deviceType !== 1 && setDeviceType(deviceType - 1)

    }
    function handlePrev() {
        deviceType !== 3 && setDeviceType(deviceType + 1)

    }

    useEffect(() => {
        clearTime && setTimeout(() => {
            handleAutoSlide()

        }, 3000)

        !clearTime && clearTimeout(setTimeout(() => {
            handleAutoSlide()

        }, 3000))

        deviceType === 3 && setAutoSlide(true)
        deviceType === 1 && setAutoSlide(false)
        // eslint-disable-next-line 
    }, [deviceType, autoSlide, clearTime])


    const [animePlay, setAnimePlay] = useState(false);
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    const [cursorVariant, setCursorVariant] = useState('default');



    useEffect(() => {
        const handleMouseMovement = (e) => {
            // console.log(e)
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener('mousemove', handleMouseMovement);

        return () => {
            window.removeEventListener('mousemove', handleMouseMovement)
        }
    }, [])

    useEffect(() => {

        props.CompNinthOpacity >= 0.2 && setIsTyping(true)

        if (isTyping) {
            // setAnimePlay(true);
            !animePlay && typeWriter2()
            setTimeout(() => {
                setAnimePlay(true)
            }, 100)

        }
        // eslint-disable-next-line 
    }, [props.CompNinthOpacity, isTyping])

    let i = 0;
    let j = 0;
    let k = 0;

    // const txt = 'Make Your Pitch Deck Responsive';
    const txt1 = 'Make Your';
    const txt2 = 'Pitch Deck';
    const txt3 = 'Responsive';

    const typeWriter2 = useMemo(() => {
        const typeWriter = () => {
          if (i < txt1.length) {
            document.getElementById("para1").innerHTML += txt1.charAt(i);
            i++;
            if (i === txt1.length) {
              setCursorOne(false);
              setCursorTwo(true);
            }
            setTimeout(typeWriter, 100);
          } else if (j < txt2.length) {
            document.getElementById("para2").innerHTML += txt2.charAt(j);
            j++;
            if (j === txt2.length) {
              setCursorTwo(false);
              setCursorThree(true);
            }
            setTimeout(typeWriter, 100);
          } else if (k < txt3.length) {
            document.getElementById("para3").innerHTML += txt3.charAt(k);
            k++;
            if (k === txt3.length - 1) {
              setTimeout(() => {
                setCursorThree(false);
              }, 500);
            }
            setTimeout(typeWriter, 100);
          }
        };
      
        return typeWriter;
        
        // eslint-disable-next-line
      }, [animePlay]);

    // function typeWriter2() {
    //     if (i < txt1.length) {
    //         document.getElementById("para1").innerHTML += txt1.charAt(i);
    //         i++;
    //         if (i === txt1.length) {
    //             setCursorOne(false)
    //             setCursorTwo(true)

    //         }
    //         setTimeout(typeWriter2, 100);
    //     }
    //     else if (j < txt2.length) {
    //         document.getElementById("para2").innerHTML += txt2.charAt(j);
    //         j++;
    //         if (j === txt2.length) {
    //             setCursorTwo(false)
    //             setCursorThree(true)

    //         }
    //         setTimeout(typeWriter2, 100);
    //     }
    //     else if (k < txt3.length) {
    //         document.getElementById("para3").innerHTML += txt3.charAt(k);
    //         k++;
    //         if (k === txt3.length - 1) {
    //             setTimeout(() => {
    //                 setCursorThree(false)
    //             }, 500)
    //         }
    //         setTimeout(typeWriter2, 100);
    //     }
    // }
    // console.log(cursorOne.toString())
    const variants = {
        default: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            // backgroundColor: '#0A1B1F',

        },
        enter: {
            height: 60,
            width: 60,
            x: mousePosition.x - 30,
            y: mousePosition.y - 30,
            backgroundColor: '#fff',
            mixBlendMode: 'difference'
        }
    }
    const handleCursorEnter = () => {
        setCursorVariant('enter')
        // console.log(variants.enter)
    }
    const handleCursorLeave = () => {
        setCursorVariant('default')
        // console.log('leave')
    }


    return (
        <div className="make-deck-responsive-main-component"
            onMouseOut={() => { setClearTime(true) }}

            style={{
                opacity: props.CompNinthOpacity >= '0.2' && '1',
                // props.CompNinthOpacity >= '1' && '1',
                zIndex: props.CompNinthOpacity >= '0.2' && '1'

            }}
        >
            <motion.div
                className="cursor-div"
                variants={variants}
                animate={cursorVariant}
            />
            <div className="left-content-div">
                <img className='logo-img' src={Logo} alt="" />

                <div className="para-div"
                    onMouseEnter={handleCursorEnter}
                    onMouseLeave={handleCursorLeave}
                >
                    <div className="content-div">
                        <p id='para1'> </p>
                        <div className='blinking-cursor'
                            style={{
                                opacity: cursorOne && '1'
                            }}>
                            <img src={CursorIcon} alt="" className="cursor-img"
                                style={{
                                    opacity: cursorOne && '1'

                                }}
                            />
                        </div>
                    </div>
                    <div className="content-div">
                        <p id='para2'> </p>
                        <div className='blinking-cursor'
                            style={{
                                opacity: cursorTwo && '1'
                            }}>
                            <img src={CursorIcon} alt="" className="cursor-img"
                                style={{
                                    opacity: cursorTwo && '1'

                                }}
                            />
                        </div>
                    </div>
                    <div className="content-div">
                        <p id='para3'> </p>
                        <div className='blinking-cursor'
                            style={{
                                opacity: cursorThree && '1'
                            }}>
                            <img src={CursorIcon} alt="" className="cursor-img"
                                style={{
                                    opacity: cursorThree && '1'

                                }}
                            />
                        </div>
                    </div>
                    {/* <div className='blinking-cursor'></div> */}
                </div>
                <p className='bottom-para'>Rediscover The Joy In Storytelling.</p>

            </div>
            <div className="right-img-div"
                onMouseOver={() => { setClearTime(false) }}

            >
                <button className='desktop-btn'
                    // onMouseOver={() => { setClearTime(false) }}
                    onClick={() => { setDeviceType(1) }}
                    style={{
                        color: deviceType === 1 && '#e1ff01'
                    }}
                >Desktop
                </button>
                <button className='mobile-btn'
                    // onMouseOver={() => { setClearTime(false) }}
                    onClick={() => { setDeviceType(2) }}
                    style={{
                        color: deviceType === 2 && '#e1ff01'
                    }}
                >Mobile
                </button>
                <button className='tablet-btn'
                    // onMouseOver={() => { setClearTime(false) }}
                    onClick={() => { setDeviceType(3) }}
                    style={{
                        color: deviceType === 3 && '#e1ff01'
                    }}
                >Tablet
                </button>

                <Tilt className="mockup-container"

                    style={{
                        transform: 'none'
                    }}
                    // onMouseOver={() => { setClearTime(false) }}
                    options={{
                        reverse: false,
                        scale: '1',
                        max: 35,
                    }}
                // onMouseOut={() => { setClearTime(true) }}
                >
                    <div className='pc-mock-up'
                        // onMouseOver={() => { setClearTime(false) }}

                        style={{
                            transform: deviceType === 3 && 'scale(0.92)',
                            borderRadius: deviceType === 2 && props.Query ? '8vw' : deviceType === 3 && '2vw',
                            width: deviceType === 2 && '32%'


                        }}
                    >
                        <div className="inner-body"
                            // onMouseOver={() => { setClearTime(false) }}

                            style={{
                                transform: deviceType === 3 && 'scale(0.96, 0.98)',
                                borderRadius: deviceType === 2 && props.Query ? '7vw' : deviceType === 3 && '2vw',
                                width: deviceType === 2 && '92%',
                                height: deviceType === 2 && '96%',
                                left: deviceType === 2 && '4%',
                                marginTop: deviceType === 2 && '-2%'

                            }}
                        >
                            <img src={Frame1} alt="" className="frame-one"
                                // onMouseOver={() => { setClearTime(false) }}

                                style={{
                                    width: deviceType === 2 && '100%',
                                    height: deviceType === 2 && '100%',
                                    left: deviceType === 2 && '0%',
                                    top: deviceType === 2 && '-20%'
                                }}
                            />
                            <img src={Frame2} alt="" className="frame-two"
                                // onMouseOver={() => { setClearTime(false) }}

                                style={{
                                    width: deviceType === 2 && '120%',
                                    height: deviceType === 2 && '60%',
                                    right: deviceType === 2 && '-10%',
                                    top: deviceType === 2 && '70%',
                                    transform: deviceType === 2 && 'rotate(90deg)'
                                }}
                            />
                        </div>
                    </div>
                    <div className="mobile-mockup-two"
                        // onMouseOver={() => { setClearTime(false) }}

                        style={{
                            transform: deviceType === 2 && 'rotate(25deg) translate(55%, -10%)',
                            opacity: deviceType === 2 ? '1' : '0',

                        }}
                    >
                        <div className="inner-body">
                            <img src={Frame3} alt="" className="frame"
                            // onMouseOver={() => { setClearTime(false) }}

                            />
                        </div>
                    </div>
                    <div className="mobile-mockup-three"
                        // onMouseOver={() => { setClearTime(false) }}

                        style={{
                            transform: deviceType === 2 && 'rotate(-25deg) translate(-55%, -10%)',
                            opacity: deviceType === 2 ? '1' : '0',
                        }}
                    >
                        <div className="inner-body">
                            <img src={Frame3} alt="" className="frame"
                            // onMouseOver={() => { setClearTime(false) }}

                            />
                        </div>
                    </div>
                </Tilt>

            </div>
        </div>
    )
}
