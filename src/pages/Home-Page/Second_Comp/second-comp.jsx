import React, { useState, useEffect } from 'react';
import './second-comp.scss';


import Frame1 from "../../../assets/imgs/home-page/frame566.png";
import Frame2 from "../../../assets/imgs/home-page/frame567.png";
import Frame3 from "../../../assets/imgs/home-page/frame568.png";


export default function SecondComp(props) {

    const [scrollId, setScrollId] = useState(1)
    const [scroll, setScroll] = useState(2)

    // props.Progress

    // useEffect(() => {
    //     const handleScroll = event => {
    //         // const scrollTo = clientHgt;
    //         let scrollHeight = (props.ClientHgt * 0.1112348);

    //         if (window.scrollY >= scrollHeight && window.scrollY < scrollHeight * 14) {
    //             setScrollId(1)
    //             setScroll(2)
    //         }
    //         else if (window.scrollY >= scrollHeight * 14 && window.scrollY < scrollHeight * 18) {
    //             setScrollId(2)
    //             setScroll(115)
    //         }
    //         else if (window.scrollY >= scrollHeight * 18 && window.scrollY < scrollHeight * 22) {
    //             setScrollId(3)
    //             setScroll(232)
    //         }
    //         else if (window.scrollY >= scrollHeight * 22 && window.scrollY < scrollHeight * 26) {
    //             setScrollId(4)
    //             setScroll(350)
    //         }
    //         else if (window.scrollY >= scrollHeight * 26) {
    //             setScrollId(5)
    //             setScroll(467)
    //         }


    //     };
    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    //     // eslint-disable-next-line 
    // }, []);


    useEffect(() => {
        const handleScroll = event => {
            // const scrollTo = clientHgt;
            // let scrollHeight = (props.ClientHgt * 0.1112348);

            if (props.Progress >= 0 && props.Progress < 0.18) {
                setScrollId(1)
                setScroll(2)
            }
            else if (props.Progress >= 0.18 && props.Progress < 0.36) {
                setScrollId(2)
                setScroll(115)
            }
            else if (props.Progress >= 0.36 && props.Progress < 0.54) {
                setScrollId(3)
                setScroll(232)
            }
            else if (props.Progress >= 0.54 && props.Progress < 0.72) {
                setScrollId(4)
                setScroll(350)
            }
            else if (props.Progress >= 0.72) {
                setScrollId(5)
                setScroll(467)
            }


        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line 
    }, [props.Progress]);


    const paraData = [
        {
            para: 'This enables us to craft bespoke decks that truly encapsulate and highlight these unique aspects, driving interest and engagement from your target audience.'
        },

        {
            para: 'At Pitch Catalyst, we specialize in the art and science of developing concise, responsive, and dynamic decks for your business needs.'
        },
        {
            para: 'Our approach is rooted in utilizing cutting-edge design methodologies that result in visually stunning and impactful presentations.'
        },
        {
            para: 'Our team, comprised of industry experts with a deep understanding of diverse business sectors, is skilled in creating decks that resonate, regardless of platform.'
        },
        {
            para: 'Our process is inherently collaborative, where we work closely with our clients to understand their unique value propositions.'
        },
        {
            para: 'This enables us to craft bespoke decks that truly encapsulate and highlight these unique aspects, driving interest and engagement from your target audience.'
        },

        {
            para: 'At Pitch Catalyst, we specialize in the art and science of developing concise, responsive, and dynamic decks for your business needs.'
        },

    ]


    const [slideCount, setSlideCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            slideCount === 2 ? setSlideCount(0) : setSlideCount(slideCount + 1)
        }, 3000);

    }, [slideCount])

    return (
        <div
            className="second-comp-main-container"
        >
            {/* <p style={{ position: 'fixed', top: '20%', left: '10%', color: '#fff' }}>{props.Progress.toString()}</p> */}

            <hr className='top-hr' />
            <div className="left-div">
                <div className="sliding-img-div" >
                    {/* <p style={{ position: 'absolute', top: '0%', zIndex: '5', color: '#fff' }}>{viewPortCount}{' '}{props.Scrolling}{' '}{props.Scrolling - viewPortCount}{' '}{2 * props.ClientHgt / 5}</p> */}
                    <img className='img1 img' src={Frame1} alt="" style={{
                        opacity: slideCount === 0 && '1'
                    }} />
                    <img className='img2 img' src={Frame2} alt="" style={{
                        opacity: slideCount === 1 && '1'
                    }} />
                    <img className='img3 img' src={Frame3} alt="" style={{
                        opacity: slideCount === 2 && '1'
                    }} />

                </div>
            </div>
            <div className="scrolling-para">
                <div className="scrollbar-div"
                    style={{
                        // paddingBottom: props.Scrolling > viewPortCount && `${(props.Scrolling - viewPortCount) / 110}%`

                        paddingBottom: props.Query ? `${(scrollId - 1) * 12.5}%` : !props.Query && `${(scrollId - 1) * 6.5}%`,
                    }}
                >
                    <div className='scroller'></div>
                </div>
                {/* <div className="hr"></div> */}
                {/* {props.Scrolling.toString()} */}
                {
                    paraData.map((item, i) => {
                        return (
                            <div className="para-slide"
                                key={i}
                                style={{
                                    opacity: i === scrollId ? '1' : i === scrollId - 1 ? '0.2' : i === scrollId + 1 ? '0.3' : '0',
                                    transform: `translateY(-${scroll}%)`,

                                }}
                            >
                                <p
                                    style={{
                                        transform: i === scrollId ? 'scale(1.2)' : 'scale(0.8)',
                                        fontWeight: i === scrollId ? '500' : '300',
                                        // color: i === scrollId ? '#fff' : '#E1FF01'

                                    }}
                                >{item.para}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}