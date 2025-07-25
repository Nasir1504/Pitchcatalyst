import React, { useState } from 'react';
import './differentiator-sub-mobile-comp.scss';
import LogoVectorMobileComp from '../Logo-Vector-mobile-Comp/logo-vector-mobile-comp';


export default function DifferentiatorSubMobileComp(props) {

    const [elementHoverID, setElementHoverID] = useState(-1)
    const [elementTwoHoverID, setElementTwoHoverID] = useState(-1)



    const contentData = [
        {
            name: 'Analytics',
            option1: 'No',
            option2: 'Yes'
        },
        {
            name: 'Interactive',
            option1: 'static',
            option2: 'dynamic'
        },
        {
            name: 'Live Data',
            option1: 'No',
            option2: 'Yes'
        },
        {
            name: 'Device responsive',
            option1: 'No',
            option2: 'Yes'
        },
        {
            name: 'Investor feedback',
            option1: 'No',
            option2: 'Yes'
        },
        {
            name: 'Easy to share',
            option1: 'Heavy PDF',
            option2: 'Link sharing'
        },
        {
            name: 'Investor Notification',
            option1: 'No',
            option2: 'Yes'
        },
    ]
    const contentDataTwo = [
        {
            name: 'Dashboard',
            option1: 'No',
            option2: 'Yes'
        },
        {
            name: 'Data protection',
            option1: 'Limited',
            option2: 'Fully encrypted'
        },
        {
            name: 'Live projection calculator',
            option1: 'No',
            option2: 'Yes'
        },
        {
            name: 'Live chat',
            option1: 'No',
            option2: 'Yes'
        },
        {
            name: 'Design Possibilities',
            option1: 'Limited',
            option2: 'unlimited'
        },
        {
            name: 'Targeted Subdomain',
            option1: 'no',
            option2: 'yes'
        },
        {
            name: 'Video Addition',
            option1: 'No',
            option2: 'Yes'
        },
        {
            name: 'API Integration',
            option1: 'No',
            option2: 'Yes'
        },
    ]


    function handleMouseHover(id) {
        setElementHoverID(id)
    }
    function handleMouseHoverTwo(id) {
        setElementTwoHoverID(id)
    }
    return (
        <div className="differentiator-sub-mobile-comp-main-container">
            <div className="bg-div"
                style={{
                    opacity: props.CompOpacity >= 0.8 && '1'
                }}
            >
                <div className="back-light-div"></div>
            </div>
            <div className="first-comp-div"
                style={{
                    transform: props.CompOpacity >= 0.8 && 'translateY(-100%)',
                }}
            >
                <div className="top-div"
                    style={{
                        top: props.CompOpacity < 0.6 ? '0%' : props.CompOpacity >= 0.6 && '-40%',

                    }}
                >
                    <h1 className='top-heading'
                        style={{
                            transform: props.Observer && props.CompOpacity < 0.4 ? "translate(0%, 0%)" :
                                props.CompOpacity >= 0.4 && "translate(0%, -700%) scale(1.4)",
                            animation: props.Observer && "topHeadingKF 3s ease-in-out"

                        }}
                    ><span>&#34;PDF Decks Deliver Your</span><br />Message Consistently.&#34;</h1>
                </div>
                <div className="bottom-div"
                    style={{
                        width: props.CompOpacity < 0.2 ? '42%' : props.CompOpacity >= 0.2 && '100%',
                        left: props.CompOpacity < 0.2 ? '28.5%' : props.CompOpacity >= 0.2 && '0%',
                        top: props.CompOpacity < 0.6 ? '50%' :
                            props.CompOpacity >= 0.6 && '0%',

                        height: props.CompOpacity < 0.4 ? '1px' :
                            props.CompOpacity >= 0.4 && props.CompOpacity < 0.6 ? '50%' :
                                props.CompOpacity >= 0.6 && '100%',
                        backgroundColor: props.CompOpacity < 0.2 ? '#fff' : props.CompOpacity >= 0.2 && '#DEFC01',
                        overflow: props.CompOpacity < 0.4 ? 'hidden' : props.CompOpacity >= 0.4 && 'visible'

                    }}
                >
                    <div className="bottom-heading"
                        style={{
                            transform: props.CompOpacity >= 0.4 && props.CompOpacity < 0.6 ? 'translateY(0%)' :
                                props.CompOpacity >= 0.6 && 'translateY(70%) scale(1.2)',
                            opacity: props.CompOpacity < 0.4 && '0'
                        }}
                    >
                        &#34;While <span className='span1'>Interactive Decks</span> <br />
                        Immerse Your Audience <br />
                        In A Dynamic, Engaging <br />
                        <span className="span2">Experience.&#34;</span>

                    </div>
                </div>
            </div>
            <LogoVectorMobileComp CompOpacity={props.CompOpacity} />
            <div className='main-heading'
                style={{
                    opacity: props.CompOpacity >= 1 && '1',
                    transform: props.CompOpacity >= 1 && 'scale(1) translateY(0%)'
                }}
            > <span className="span1">STATIC </span><span className="span2">VS</span><br />
                DYNAMIC
            </div>

            {/* ----------------------------------------Content One------------------------------------------- */}

            <div className="main-content-div"
                style={{
                    transform: props.CompOpacity >= 1 && props.CompOpacity < 1.2 ? 'translateY(-4%) scale(1)' :
                        props.CompOpacity >= 1.2 && 'scale(0.6) translateY(-200%)',
                    opacity: props.CompOpacity < 1 ? '0' : props.CompOpacity >= 1.2 ? '0' : 1
                }}
            >

                <div className="content-div">
                    <div className="top-div">

                        {
                            [...Array(3)].map((_, i) => {
                                return <div className="top-heading" key={i} style={{ padding: i === 2 && '1% 4%' }}>
                                    {i === 0 ? 'FACTOR' : i === 1 ? 'PDF DECK' : i === 2 && 'INTERACTIVE DECK'}
                                </div>
                            })
                        }

                    </div>
                    <div className="bottom-div">
                        {
                            contentData.map((item, i) => {
                                return <div className="row-data-div" key={i}>
                                    <span className="span1">{item.name}</span>
                                    <span className="span2">{item.option1}</span>
                                    <span className="span3"
                                        onMouseOver={() => handleMouseHover(i)}
                                        onMouseOut={() => handleMouseHover(-1)}
                                        style={{
                                            backgroundColor: i === elementHoverID && '#defc01',
                                            boxShadow: i === elementHoverID && '0px 0px 10px #defc01',
                                            color: i === elementHoverID && '#000',
                                            textShadow: i === elementHoverID && 'none',
                                            fontWeight: i === elementHoverID && '700',
                                            cursor: 'pointer',

                                        }}
                                    >{item.option2}</span>

                                </div>
                            })
                        }

                    </div>
                </div>
            </div>


            {/* ----------------------------------------Content Two------------------------------------------- */}


            <div className="main-content-div"
                style={{
                    transform: props.CompOpacity >= 1.2 && 'translateY(-4%) scale(1)',
                    opacity: props.CompOpacity < 1.2 && '0'

                }}
            >

                <div className="content-div">
                    <div className="top-div">

                        {
                            [...Array(3)].map((_, i) => {
                                return <div className="top-heading" key={i} style={{ padding: i === 2 && '1% 4%' }}>
                                    {i === 0 ? 'FACTOR' : i === 1 ? 'PDF DECK' : i === 2 && 'INTERACTIVE DECK'}
                                </div>
                            })
                        }

                    </div>
                    <div className="bottom-div">
                        {
                            contentDataTwo.map((item, i) => {
                                return <div className="row-data-div" key={i}>
                                    <span className="span1">{item.name}</span>
                                    <span className="span2">{item.option1}</span>
                                    <span className="span3"
                                        onMouseOver={() => handleMouseHoverTwo(i)}
                                        onMouseOut={() => handleMouseHoverTwo(-1)}
                                        style={{
                                            backgroundColor: i === elementTwoHoverID && '#defc01',
                                            boxShadow: i === elementTwoHoverID && '0px 0px 10px #defc01',
                                            color: i === elementTwoHoverID && '#000',
                                            textShadow: i === elementTwoHoverID && 'none',
                                            fontWeight: i === elementTwoHoverID && '700',
                                            cursor: 'pointer',

                                        }}


                                    >{item.option2}</span>

                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </div >)
}

//Observer
// CompOpacity