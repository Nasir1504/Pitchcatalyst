import React from 'react';
import './logo-vector-mobile-comp.scss';
import LogoBottomPart from "../../../assets/imgs/differentiator/Group705.png";
import LogoPart01 from "../../../assets/imgs/differentiator/Frame888.png";
import LogoPart02 from "../../../assets/imgs/differentiator/Frame889.png";
import LogoPart03 from "../../../assets/imgs/differentiator/Frame891.png";
import LogoPart04 from "../../../assets/imgs/differentiator/Frame892.png";
import LogoPart05 from "../../../assets/imgs/differentiator/Frame893.png";

export default function LogoVectorMobileComp(props) {
    return (
        <div className="logo-vector-mobile-comp-main-container"
            style={{
                transform: props.CompOpacity >= 0.4 && props.CompOpacity < 0.6 ? "translate(0%, 2.4%) rotate(90deg) scale(0.8)" :
                    props.CompOpacity >= 0.6 && props.CompOpacity < 0.8 ? "translate(0%, -25%) scale(0.5) rotate(90deg)" :
                        props.CompOpacity >= 0.8 && "translate(0%, 0%) scale(1) rotate(0deg)",
                width: props.CompOpacity >= 1 && '140%',

            }}
        >

            <div className="inner-part">
                <img src={LogoPart01} alt="" className="part-one"
                    style={{
                        margin: props.CompOpacity >= 1 && '0% 5%',
                        transition: props.CompOpacity >= 1 && 'ease-in-out 1.5s'
                    }}
                />
                <img src={LogoPart02} alt="" className="part-two"
                    style={{
                        margin: props.CompOpacity >= 1 && '0% 5%',
                        transition: props.CompOpacity >= 1 && 'ease-in-out 1.5s',
                        opacity: props.CompOpacity >= 1 && '0.1',
                    }}
                />
                <img src={LogoPart03} alt="" className="part-three"
                    style={{
                        margin: props.CompOpacity >= 1 && '0% 5%',
                        transition: props.CompOpacity >= 1 && 'ease-in-out 1.5s',
                        opacity: props.CompOpacity >= 1 && '0.1',
                    }}
                />
                <img src={LogoPart04} alt="" className="part-four"
                    style={{
                        margin: props.CompOpacity >= 1 && '0% 5%',
                        transition: props.CompOpacity >= 1 && 'ease-in-out 1.5s',
                        opacity: props.CompOpacity >= 1 && '0.1',
                    }}
                />
                <img src={LogoPart05} alt="" className="part-four"
                    style={{
                        margin: props.CompOpacity >= 1 && '0% 5%',
                        transition: props.CompOpacity >= 1 && 'ease-in-out 1.5s'
                    }}
                />

                <div className="black-logo">
                    <img src={LogoBottomPart} alt="" className="logo-img"
                        style={{
                            transition: props.CompOpacity >= 0.8 && props.CompOpacity < 1 && ' ease 0.2s',
                            clip: props.CompOpacity >= 0.4 && props.CompOpacity < 0.8 ? "rect(0px, 45vw, 95vw, 19.5vw)" :
                                props.CompOpacity >= 0.6 && "rect(0px, 45vw, 95vw, 45vw)"
                        }}
                    />

                </div>

            </div>

        </div>
    )
}
