import React, { useState, useEffect } from 'react';

//styles
import './masked-comp.scss';

//dependencies
import CountUp from 'react-countup';

//images
import maskedBGImg from "../../assets/imgs/home-page/Frame880.png"
// const maskedBGImg = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/bg-frame.png';
const maskedLOGO = 'https://i.ibb.co/nDBr224/group527.png'


export default function MaskedComp(props) {

    const [animation, setAnimation] = useState(false)

    const [y, setY] = useState(0);
    const [z, setZ] = useState(0);

    const LeftTitle = [
        { name: 'Pitch' },
        { name: 'Sales' },
        { name: 'Investor' },
        { name: 'Corporate' },
        { name: 'Marketing' },
        { name: 'Product' },
        { name: 'Training' },
        { name: 'Financial' },
        { name: 'Case Study' },
        { name: 'Project' },
    ]

    const RightTitle = [
        { name: 'WEB' },
        { name: 'PDF' },
        { name: 'VIDEO' },
        { name: 'MOBILE' },
        { name: 'VIDEO' },
        { name: 'WEB' },
        { name: 'PDF' },
        { name: 'MOBILE' },
        { name: 'WEB' },
        { name: 'VIDEO' },

    ]

    useEffect(() => {
        setTimeout(() => {
            if (y < (RightTitle.length - 1) * 100 && animation) {
                setTimeout(() => {
                    y === (RightTitle.length - 1) * 100 ? setY(0) : setY(y + 100)

                }, 500);
            }
            else {
                return
            }

        }, 200);
        // eslint-disable-next-line
    }, [y, animation])

    useEffect(() => {
        setTimeout(() => {
            if (z < (LeftTitle.length - 1) * 100 && animation) {
                setTimeout(() => {
                    z === (LeftTitle.length - 1) * 100 ? setZ(0) : setZ(z + 100)

                }, 500);
            }
            else {
                return
            }

        }, 200);
        // eslint-disable-next-line
    }, [z, animation])

    useEffect(() => {
        setTimeout(() => {
            setAnimation(true)
            y >= 0 && setY(0)
        }, 200);
        setTimeout(() => {
            setAnimation(true)
            z >= 0 && setZ(0)
        }, 200);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="masked-comp-main-component">

            <div className="left-content-div"
                style={{
                    transform: animation && !props.Query ? `translateX(-45%)` : animation && props.Query && `translateX(0%)`,
                    marginLeft: animation && props.Query && '0%'

                }}
            >
                <h1>
                    <span className="flipping-span"
                        style={{
                            transform: `translateY(-${z}%)`
                        }}
                    >
                        {LeftTitle.map((item, i) => {
                            return (
                                <span
                                    key={i}
                                >
                                    {item.name}
                                </span>
                            )
                        })}

                    </span>
                    <span className='version-span'>DECK</span>
                </h1>
            </div>
            {/* ----------------------------------------------------------------------------- */}
            <div className="mask-img-div"
                style={{
                    transform: animation ? `translateY(65%) scale(1.6)` : ` translate(4%, 40%)`,
                    maskImage: `url(${maskedLOGO})`,
                    WebkitMaskImage: `url(${maskedLOGO})`,


                }}
            >
                <img src={maskedBGImg} alt="Cinque Terre" width="1500" height="700"
                    style={{
                        transform: animation && `translateX(-20%)`,
                    }}
                />


            </div>
            {/* ----------------------------------------------------------------------------- */}

            <div className="right-content-div"
                style={{
                    transform: animation && !props.Query ? `translateX(45%)` : animation && props.Query && `translateX(0%)`,
                    marginRight: animation && props.Query && '0%'

                }}
            >
                <h1>
                    <span className="flipping-span"
                        style={{
                            transform: `translateY(-${y}%)`
                        }}
                    >
                        {RightTitle.map((item, i) => {
                            return (
                                <span
                                    key={i}
                                >
                                    {item.name}
                                </span>
                            )
                        })}

                    </span>
                    <span className='version-span'>VERSION</span>
                </h1>
            </div>

            <div className="loading-number-div"
                style={{
                    transform: animation && 'rotate(-45deg) scale(1) translate(0%,0%)'
                }}
            >
                <h1><CountUp end={100} duration={10} />%</h1>
            </div>

            {/* <img src={BGImg} alt="" className="bg-img" /> */}


        </div >
    )
}



// bgc   https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/bg-frame-img.png