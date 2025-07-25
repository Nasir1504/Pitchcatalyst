import React from 'react';
import './tenth-comp.scss';

import BgImg1 from "../../../assets/imgs/home-page/batch-technology.png";
import Logo from "../../../assets/imgs/home-page/frame577.png";
import BgImg2 from "../../../assets/imgs/home-page/batch-technology2.png";

export default function TenthComp(props) {


    return (
        <div className="tenth-comp-main-container"
            style={{
                opacity: props.CompOpacity >= '1' && '0',
                zIndex: props.CompOpacity >= '0.2' && props.CompOpacity < '1' ? '1' :
                    props.CompOpacity >= '1' && '0'
            }}
        >
            {
                !props.Query ?
                    <img src={BgImg1} alt="" className="bg-img"

                        style={{
                            transform: props.CompOpacity >= '0.8' && 'rotate(-180deg) scale(2.15) translate(16%, 6.5%)',

                        }}
                    />
                    :
                    props.Query &&
                    <img src={BgImg2} alt="" className="bg-img"

                        style={{
                            opacity: props.CompOpacity < '0.8' ? '0.2' :
                                props.CompOpacity >= '0.8' && '1'
                        }}
                    />
            }

            <div className="content-div">

                {props.Query && <span className='img-span'><img src={Logo} alt="" />
                </span>}
                <div className='heading'>Revolutionize Your <span>Pitch:</span></div>
                <h2>
                    API Integration Services

                    {!props.Query && <span><img src={Logo} alt="" />
                    </span>}

                </h2>
                {
                    !props.Query ?
                        <p>
                            "Effortlessly connect and streamline your data with Pitch <br />
                            Catalyst's powerful API integration services – transforming <br />
                            pitches into dynamic, data-driven experiences."
                        </p> :
                        props.Query &&
                        <p>
                            "Effortlessly connect and streamline your data with Pitch
                            Catalyst's powerful API integration services – transforming
                            pitches into dynamic, data-driven experiences."
                        </p>
                }

            </div>


        </div>)
}
