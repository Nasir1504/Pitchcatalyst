import React, { useState, useEffect } from 'react';
import './twelveth-comp.scss';
import { twelvethData } from './twelveth-data';

export default function TwelvethComp(props) {

    const [x, setX] = useState(350)
    const [y, setY] = useState(250)
    const [clearTime, setClearTime] = useState(true);
    const [autoSlide, setAutoSlide] = useState(true);


    const [count, setCount] = useState(2)

    function handleAutoSlide() { autoSlide ? handleNext() : handlePrev() }


    function handleNext() {
        x !== -350 && setX(x - 140)
        y !== -250 && setY(y - 100)

        count !== twelvethData.length - 3 && setCount(count + 1)

    }
    function handlePrev() {
        x !== 350 && setX(x + 140)
        y !== 250 && setY(y + 100)

        count !== 2 && setCount(count - 1)
    }

    useEffect(() => {
        clearTime && setTimeout(() => {
            handleAutoSlide()

        }, 4000)

        !clearTime && clearTimeout(setTimeout(() => {
            handleAutoSlide()

        }, 4000))

        x === 350 && setAutoSlide(true)
        x === -350 && setAutoSlide(false)

        // eslint-disable-next-line 
    }, [x, y, clearTime, autoSlide])

    return (
        <div className="twelveth-comp-main-container">
            {/* <p style={{ position: 'fixed', top: '20%', color: 'red', zIndex: '5' }}>{' : '}{x.toString() + ' ' + autoSlide.toString()}</p> */}
            <div className="top-div">
                {/* !props.Query ? */}

                <div className='heading' >Our{' '}
                    <span
                        className='sub-span'>Client's Success <span> {' '}Stories</span></span>
                </div>

                <p>So incredible, you'll think we made them up! <br />
                    (But we didn't, promise.)
                </p>
            </div>

            {/* ---------------------------------------------------MIDDLE PART-------------------------- */}
            <div className="middle-div">

                <div className="slider">
                    {
                        twelvethData.map((item, i) => {
                            return (
                                <div className="slides" key={i}
                                    style={{
                                        transform: i === count ? `translate(${x}%, -30%) scale(1.6)` :
                                            i === count - 1 ? `translate(${x}%, 10%) scale(1.2)` :
                                                i === count + 1 ? `translate(${x}%, 10%) scale(1.2)` : `translate(${x}%, 40%)`,
                                        margin: i === count ? '0 3.5% 0 3.5%' : " 0 2% 0 2%",
                                        filter: i > count + 1 ? 'blur(3px)' : i < count - 1 && 'blur(3px)'

                                    }}
                                ><img src={item.imgURL} alt="" />
                                    {/* {i} */}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="bottom-slider"

                    onMouseOver={() => { setClearTime(false) }}
                    onMouseOut={() => { setClearTime(true) }}
                >
                    <div
                        className="prev"
                        onClick={handlePrev}
                        // onMouseOver={() => { setClearTime(false) }}
                        // onMouseOut={() => { setClearTime(true) }}
                        style={{
                            opacity: x === 350 && '0'
                        }}

                    ><span className='icon-span'>&#171;</span> <span>Prev</span></div>
                    <div className="middle-slider">
                        <div className="profile-photo-slider">
                            {
                                twelvethData.map((item, i) => {
                                    // const Y = 250;
                                    return (
                                        <div className="profile-photo-slides" key={i}

                                            style={{
                                                transform: `translate(${y}%)`,
                                                opacity: i > count + 2 ? '0' : i < count - 2 && '0',


                                            }}
                                        >
                                            <img src={item.profileIMG} alt=""

                                                style={{
                                                    transform: i === count ? `scale(1.2) translateY(-10%)` :
                                                        i === count + 1 ? `scale(0.9) ` :
                                                            i === count - 1 ? `scale(0.9) ` :
                                                                i === count + 2 ? `scale(0.7) translate(-40%,40%)` :
                                                                    i === count - 2 && `scale(0.7) translate(40%,40%)`,
                                                    opacity: i === count ? `1` :
                                                        i === count + 1 ? `0.8 ` :
                                                            i === count - 1 ? `0.8` :
                                                                i === count + 2 ? `0.7` :
                                                                    i === count - 2 && `0.7`,
                                                    filter: i === count && 'drop-shadow(0.15vw 0.2vw 1px #000)'
                                                }}
                                            />
                                            {/* <p>{i}</p> */}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div
                        className="next"
                        onClick={handleNext}
                        // onMouseOver={() => { setClearTime(false) }}
                        // onMouseOut={() => { setClearTime(true) }}
                        style={{
                            opacity: x === -350 && '0'
                        }}

                    ><span>Next</span> <span className='icon-span'>&#187;</span></div>
                </div>

            </div>
            {/* ----------------------------------------------------------------------------------------- */}


            <div className="bottom-part">

                <div className="strip-div">
                    <div className="strip-one-div">
                    </div>
                    <div className="strip-two-div"> </div>

                </div>
            </div>

        </div >)
}
