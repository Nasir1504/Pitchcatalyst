import React from 'react';
import './logo-vector-comp.scss';


import LogoBottomPart from "../../../assets/imgs/differentiator/Frame881.png";
import LogoPart01 from "../../../assets/imgs/differentiator/Frame884.png";
import LogoPart02 from "../../../assets/imgs/differentiator/Frame886.png";
import LogoPart03 from "../../../assets/imgs/differentiator/Frame883.png";
import LogoPart04 from "../../../assets/imgs/differentiator/Frame887.png";
import LogoPart05 from "../../../assets/imgs/differentiator/Frame885.png";

export default function LogoVectorComp(props) {
    return (
        <div className="logo-vector-comp-main-container"
            style={{
                transform: props.CompOpacity < 0.4 ? 'translate(-150%, -37.5%) rotate(-90deg)' :
                    props.CompOpacity >= 0.4 && props.CompOpacity < 0.6 ? "translate(-95%, 13.4vh) rotate(0deg)" :
                        props.CompOpacity >= 0.6 && props.CompOpacity < 0.8 ? "translate(-40%, 10%)" :
                            props.CompOpacity >= 0.8 && "translate(0%, 10%)",
                width: props.CompOpacity >= 1 && '70vw',


            }}
        >

            <div className="inner-part">
                <img src={LogoPart01} alt="" className="part-one"
                    style={{
                        margin: props.CompOpacity >= 1 && '0% 1%',
                        transition: props.CompOpacity >= 1 && 'ease-in-out 1.5s'
                    }}
                />
                <img src={LogoPart02} alt="" className="part-two"
                    style={{
                        margin: props.CompOpacity >= 1 && '0% 10%',
                        transition: props.CompOpacity >= 1 && 'ease-in-out 1.5s',
                        opacity: props.CompOpacity >= 1 && '0.1',
                    }}
                />
                <img src={LogoPart03} alt="" className="part-three"
                    style={{
                        margin: props.CompOpacity >= 1 && '0% 0%',
                        transition: props.CompOpacity >= 1 && 'ease-in-out 1.5s',
                        opacity: props.CompOpacity >= 1 && '0.1',
                    }}
                />
                <img src={LogoPart04} alt="" className="part-four"
                    style={{
                        margin: props.CompOpacity >= 1 && '0% 12%',
                        transition: props.CompOpacity >= 1 && 'ease-in-out 1.5s',
                        opacity: props.CompOpacity >= 1 && '0.1',
                    }}
                />
                <img src={LogoPart05} alt="" className="part-four"
                    style={{
                        margin: props.CompOpacity >= 1 && '0% 0%',
                        transition: props.CompOpacity >= 1 && 'ease-in-out 1.5s'
                    }}
                />
                {/* 
            <div className="bottom-part"
                style={{
                    top: props.CompOpacity < 0.4 ? '0' : props.CompOpacity >= 0.4 && '40%',
                    opacity: props.CompOpacity >= 0.8 && '0',
                    transition: props.CompOpacity >= 0.8 && props.CompOpacity < 1 && ' ease 0.8s'
                }}
            >

                <img src={LogoBottomPart} alt="" className="bottom-part-img"
                    style={{
                        top: props.CompOpacity < 0.4 ? '0' : props.CompOpacity >= 0.4 && '-40%',
                    }}
                />
            </div> */}
                <div className="black-logo">
                    <img src={LogoBottomPart} alt="" className="logo-img"
                        style={{
                            transition: props.CompOpacity >= 0.8 && props.CompOpacity < 1 && ' ease 0.4s',
                            clip: props.CompOpacity >= 0.4 && props.CompOpacity < 0.8 ? " rect(8.2vw, 50vw, 20vw, 0vw)" :
                                props.CompOpacity >= 0.6 && " rect(20vw, 50vw, 20vw, 0vw)"
                        }}
                    />

                </div>
            </div>
        </div>
    )
}
