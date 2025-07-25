import React from 'react';

//style
import './op-comp-two.scss';

//data card
import { OurPricingData } from '../op-comp-data';

//components
import EICardComp from '../EI-Card-Comp/ei-card-comp';
import EICardCompTwo from '../EI-Card-Comp-two/ei-card-comp-two';

export default function OPCompTwo(props) {

    // console.log(props.CountryCode)

    return (
        <div className="op-comp-two-main-container"
            style={{
                zIndex: props.OPCompScrolling < 0.2 ? '0' : props.OPCompScrolling >= 0.2 && '1'
            }}
        >
            <div className="heading1"
                style={{
                    transform: props.OPCompScrolling < 0.2 ? 'translateY(0) scale(0.2)' :
                        props.OPCompScrolling >= 0.2 && props.OPCompScrolling < 0.3 ? 'translateY(0) scale(1)' :
                            props.OPCompScrolling >= 0.3 && 'translateY(150vw) scale(1.5)',

                    opacity: props.OPCompScrolling >= 0.2 && '1',

                    transition: props.OPCompScrolling < 0.2 ? 'ease-in-out 0.5s' :
                        props.OPCompScrolling >= 0.2 && props.OPCompScrolling < 0.3 ? 'ease-in-out 1.5s' :
                            props.OPCompScrolling >= 0.3 && 'ease-in-out 1s'
                }}
            >Get It Done <b>RIGHT</b> <br /> <span>The <b>First Time,</b></span></div>

            <h2 className="heading2"
                style={{
                    transform: props.OPCompScrolling < 0.3 ? 'translateY(0) scale(0.2)' :
                        props.OPCompScrolling >= 0.3 && props.OPCompScrolling < 0.4 ? 'translateY(0) scale(1)' :
                            props.OPCompScrolling >= 0.4 && 'translateY(-150vw) scale(1.5)',

                    opacity: props.OPCompScrolling >= 0.3 && '1',

                    transition: props.OPCompScrolling < 0.3 ? 'ease-in-out 0.5s' :
                        props.OPCompScrolling >= 0.3 && props.OPCompScrolling < 0.4 ? 'ease-in-out 1.5s' :
                            props.OPCompScrolling >= 0.4 && 'ease-in-out 1s'
                }}
            >And You Won't Have<br /> <span><b>To Pay Twice.</b></span></h2>

            <div className="ei-card-div"
                style={{
                    transform: props.OPCompScrolling >= 1 && 'translateY(-100vh) scale(0.5)'
                }}
            >
                <div className="inner-div">


                    {
                        OurPricingData.map((item, i) => {
                            return <EICardComp
                                key={i}
                                Id={i}
                                Query={props.Query}
                                Name={item.name}
                                Price={item.price}
                                Price_USD={item.price_usd}
                                Heading_1={item.heading_1}
                                Heading_para={item.heading_para}
                                Heading_2={item.heading_2}
                                Detail_lists={item.detail_lists}
                                OPCompScrolling={props.OPCompScrolling}

                                CountryCode={props.CountryCode}

                            />
                        })
                    }
                </div>

            </div>
            <div className="ei-card-two-div"  >
                <div className="inner-div"
                    style={{
                        display: props.Query && 'none'

                    }}
                >
                    {
                        OurPricingData.map((item, i) => {
                            return <EICardCompTwo
                                key={i}
                                Id={i}
                                Query={props.Query}
                                Name={item.name}
                                Price={item.price}
                                Price_USD={item.price_usd}
                                Heading_1={item.heading_1}
                                Heading_para={item.heading_para}
                                Heading_2={item.heading_2}
                                Detail_lists={item.detail_lists}
                                OPCompScrolling={props.OPCompScrolling}

                                CountryCode={props.CountryCode}

                            />
                        })
                    }

                </div>

                {/* --------------------------------------For Mobile Version Only------------------------------------ */}
                <div className="start-leading-div"
                    style={{
                        display: !props.Query && 'none',
                        opacity: props.OPCompScrolling === 1 && '1'
                    }}
                >
                    <div className='top-heading'>DONE <br /> <span>READING?</span></div>
                    <div className='bottom-heading'>TIME TO <br /> <span>START LEADING!</span></div>

                    <div className="mouse-logo">
                        <span/>
                    </div>
                    <p className='para'>Scroll To <span>&#8595;</span> Contact Us</p>
                </div>

            </div>
        </div>)
}
