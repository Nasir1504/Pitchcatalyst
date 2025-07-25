import React, { useState, useEffect } from 'react';
import './redefinepd-comp.scss';
import { RedefinePDCompData } from './redefinepd-comp-data';

export default function RedefinePDComp() {

    const [toggle, setToggle] = useState(false)

    const [x, setX] = useState(320)

    const [count, setCount] = useState(1)
    useEffect(() => {
        setTimeout(() => {
            x === -320 ? setX(320) : setX(x - 128)

            count === 6 ? setCount(1) : setCount(count + 1)

           x !== -320 && setToggle(prev => !prev)

        }, 3000);
    }, [x, count])

    useEffect(() => {
        setTimeout(() => {
           setToggle(false)
        }, 1400);
    }, [toggle])


    return (
        <div className="redefinepd-comp-main-container">
            <div className="slides-name-div">
                <div className="first-name-div"
                    style={{
                        opacity: !toggle ? "1" : "0",
                    }}
                >
                    {
                        RedefinePDCompData.map((item, i) => {
                            return <p className="first-name" key={i}
                                style={{ opacity: count === i ? '1' : '0' }}
                            >{count === i && item.name}</p>
                        })
                    }
                </div>
                <div className="second-name-div">
                    {
                        RedefinePDCompData.map((item, i) => {
                            return <p className="second-name" key={i}
                                style={{ opacity: count === i - 1 ? '1' : '0' }}
                            >{count === i - 1 && item.name}</p>
                        })
                    }
                </div>
                <div className="third-name-div"
                    style={{
                        animation: toggle && 'slidingNameKF 1.8s'
                    }}
                >
                    {
                        RedefinePDCompData.map((item, i) => {
                            return <p className="second-name" key={i}
                                style={{ opacity: count === i ? '1' : '0' }}
                            >{count === i && item.name}</p>
                        })
                    }
                </div>
            </div>
            <div className="slider">
                {
                    RedefinePDCompData.map((item, i) => {
                        return (
                            <div className="slides" key={i}
                                style={{
                                    transform: i === count ? `translate(${x}%) scale(1.4)` :
                                        i === count + 1 ? `translate(${x}%) scale(1.4)` : `translate(${x}%)`,
                                    margin: i === count ? '0 15% 0 2%' :
                                        i === count + 1 && '0 2% 0 15%'


                                }}
                            >
                                <img src={item.imgURL} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
