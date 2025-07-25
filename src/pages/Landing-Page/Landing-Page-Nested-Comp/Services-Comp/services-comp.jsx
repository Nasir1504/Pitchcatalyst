import React, { useState } from 'react';
import './services-comp.scss';



export default function ServicesComp(props) {

    //images
    // const Frame = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/Frame-870.png';
    const lamp = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/lamp2686.png';
    const Logo = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/group835.png';
    const Frame = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/Frame876.png';



    // const Lamp = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/our-pricing/lamp769.svg';

    // const [slideValue, setSlideVaue] = useState(10.6);

    // const handleLeftSlide = () => {
    //     setSlideVaue(10.6)
    // }
    // const handleRightSlide = () => {
    //     setSlideVaue(-10.6)
    // }

    // const [slideValue1, setSlideVaue1] = useState(97.5);

    // const handleLeftSlide1 = () => {
    //     slideValue1 !== -97.5 && setSlideVaue1(slideValue1 - 65)

    // }
    // const handleRightSlide1 = () => {

    //     slideValue1 !== 97.5 && setSlideVaue1(slideValue1 + 65)

    // }

    // const serviceCardData = [
    //     {
    //         nameOne: 'pitch',
    //         nameTwo: 'deck',
    //         para: `a visually engaging presentation designed to outline a startup's business plan and vision. It's the key to capturing and holding a potential investor's attention, turning interest into investment.`
    //     },
    //     {
    //         nameOne: 'sale',
    //         nameTwo: 'deck',
    //         para: `a persuasive visual presentation used in sales meetings to showcase a product or service, designed to engage potential customers and encourage them to make a purchase. It’s your ultimate tool to illustrate your offering and seal the deal.`
    //     },
    //     {
    //         nameOne: 'company',
    //         nameTwo: 'deck',
    //         para: `a strategic snapshot of your business, crafted to inform stakeholders and partners about your mission, operations, and achievements. It goes beyond selling an idea—it's your business’s story, told in a compelling and concise way.`
    //     },
    //     {
    //         nameOne: 'product',
    //         nameTwo: 'deck',
    //         para: `a visually engaging presentation that showcases your product's features, benefits, and potential. It's designed to capture attention, clearly articulate your product's value, and compel your audience—whether they're investors, clients, or stakeholders—to take action.`
    //     }
    // ]







    const [slideValue, setSlideVaue] = useState(6.1);

    const handleLeftSlide = () => {
        setSlideVaue(6.1)
    }
    const handleRightSlide = () => {
        setSlideVaue(-6.1)
    }

    const [slideValue1, setSlideVaue1] = useState(29);

    const handleLeftSlide1 = () => {
        slideValue1 !== 29 && setSlideVaue1(slideValue1 + 14.5)
    }
    const handleRightSlide1 = () => {

        slideValue1 !== -29 && setSlideVaue1(slideValue1 - 14.5)
    }



    return (
        <div className="services-comp-main-container">

            <img src={lamp} alt="" className="lamp-img" />
            <img src={Logo} alt="" className="logo-img" />
            <div className="heading">SERVICES</div>

            {!props.Query ?
                <div className="slider-div">
                    <button className="left-btn" onClick={handleLeftSlide}
                        style={{
                            display: slideValue === 6.1 && 'none'
                        }}
                    >
                        <span>
                            &#8249;
                        </span>
                    </button>
                    <button className="right-btn" onClick={handleRightSlide}
                        style={{
                            display: slideValue === -6.1 && 'none'
                        }}
                    >
                        <span>
                            &#8250;
                        </span>
                    </button>

                    <div className="slides-div">
                        <img src={Frame} alt=""

                            style={{
                                transform: `translate(${slideValue}%)`
                            }} />
                    </div>

                </div>
                :
                props.Query &&

                <div className="slider-div">
                    <button className="left-btn" onClick={handleLeftSlide1} style={{ display: slideValue1 === 29 && 'none' }}>
                        <span>
                            &#8249;
                        </span>
                    </button>
                    <button className="right-btn" onClick={handleRightSlide1} style={{ display: slideValue1 === -29 && 'none' }}>
                        <span>
                            &#8250;
                        </span>
                    </button>
                    <div className="blur1" />
                    <div className="blur2" />

                    <div className="slides-div">
                        <img src={Frame} alt=""

                            style={{
                                transform: `translate(${slideValue1}%)`
                            }} />
                    </div>

                </div>
            }






            {/* ========================================================================= */}
            {/* {
                !props.Query ?
                    <div className="slider-container">
                        <button className="left-btn"
                            onClick={handleLeftSlide}
                        >
                            <span>
                                &#8249;
                            </span>
                        </button>
                        <button className="right-btn"
                            onClick={handleRightSlide}
                        >
                            <span>
                                &#8250;
                            </span>
                        </button>
                        <div className="slides">
                            {
                                serviceCardData.map((item, i) => {
                                    return <div className='slide-card'
                                        key={i}

                                        style={{
                                            transform: `translate(${slideValue}vw)`,

                                        }}
                                    >
                                        <div className="middle-layer"

                                        >
                                            <div className="content-div"
                                                style={{
                                                    background: i === 1 && '#e1ff00'
                                                }}
                                            >

                                                <div className="name-heading"
                                                    style={{
                                                        color: i === 1 && '#333',
                                                        textTransform: i === 1 && 'uppercase'

                                                    }}
                                                >
                                                    {item.nameOne} <br />
                                                    <span
                                                        style={{
                                                            color: i === 1 && '#fff',
                                                            fontWeight: i === 1 && '600',

                                                        }}
                                                    >{item.nameTwo}</span>
                                                </div>
                                                <p className="details-para"
                                                    style={{
                                                        color: i === 1 && '#333',
                                                        fontWeight: i === 1 && '500',

                                                    }}
                                                >
                                                    {item.para}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                })
                            }
                        </div>

                    </div>
                    :

                    props.Query &&
                    < div className="slider-container">
                        <button className="left-btn"
                            onClick={handleLeftSlide1}
                        >
                            <span>
                                &#8249;
                            </span>
                        </button>
                        <button className="right-btn"
                            onClick={handleRightSlide1}
                        >
                            <span>
                                &#8250;
                            </span>
                        </button>
                        <div className="slides">
                            {
                                serviceCardData.map((item, i) => {
                                    return <div className='slide-card'
                                        key={i}

                                        style={{
                                            transform: `translate(${slideValue1}vw)`,

                                        }}
                                    >
                                        <div className="middle-layer"

                                        >
                                            <div className="content-div"
                                                style={{
                                                    background: i === 1 && '#e1ff00'
                                                }}
                                            >

                                                <div className="name-heading"
                                                    style={{
                                                        color: i === 1 && '#333',
                                                        textTransform: i === 1 && 'uppercase'

                                                    }}
                                                >
                                                    {item.nameOne} <br />
                                                    <span
                                                        style={{
                                                            color: i === 1 && '#fff',
                                                            fontWeight: i === 1 && '600',

                                                        }}
                                                    >{item.nameTwo}</span>
                                                </div>
                                                <p className="details-para"
                                                    style={{
                                                        color: i === 1 && '#333',
                                                        fontWeight: i === 1 && '600',

                                                    }}
                                                >
                                                    {item.para}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                })
                            }
                        </div>

                    </div>
            } */}
        </div >
    )
}
