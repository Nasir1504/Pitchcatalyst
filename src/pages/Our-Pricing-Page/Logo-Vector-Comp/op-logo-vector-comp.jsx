import React from 'react';
import './op-logo-vector-comp.scss';

import LogoPart01 from "../../../assets/imgs/differentiator/Frame884.png";
import LogoPart02 from "../../../assets/imgs/differentiator/Frame886.png";
import LogoPart03 from "../../../assets/imgs/differentiator/Frame883.png";
import LogoPart04 from "../../../assets/imgs/differentiator/Frame887.png";
import LogoPart05 from "../../../assets/imgs/differentiator/Frame885.png";


export default function OPLogoVectorComp(props) {
    return (
        <div className="logo-vector-comp-main-container"
            style={{
                transform:
                    !props.Query && props.CompOpacity >= 1.2 ? 'translate(0%, 0vh)' :
                        props.Query && props.CompOpacity >= 1.2 && 'translate(0%, 0vh) rotate(90deg)',
                width: !props.Query && props.CompOpacity >= 1 ? '80vw' :
                    props.Query && props.CompOpacity >= 1 && '125vw',


            }}
        >
            <img src={LogoPart01} alt="" className="part-one"
                style={{
                    margin: props.CompOpacity >= 1.3 && '0% 1%',
                    transition: props.CompOpacity >= 1.3 && 'ease-in-out 1.5s'
                }}
            />
            <img src={LogoPart02} alt="" className="part-two"
                style={{
                    margin: props.CompOpacity >= 1.3 && '0% 2%',
                    transition: props.CompOpacity >= 1.3 && 'ease-in 1.5s',
                    // opacity: props.CompOpacity >= 1.3 && '0.1',
                }}
            />
            <img src={LogoPart03} alt="" className="part-three"
                style={{
                    margin: !props.Query && props.CompOpacity >= 1.3 ? '0% 20%' : props.Query && props.CompOpacity >= 1.3 && '0% 14%',
                    transition: props.CompOpacity >= 1.3 && 'ease-in-out 1s',
                    opacity: props.CompOpacity >= 1.3 && '0',
                }}
            />
            <img src={LogoPart04} alt="" className="part-four"
                style={{
                    margin: props.CompOpacity >= 1.3 && '0% 1%',
                    transition: props.CompOpacity >= 1.3 && 'ease-in-out 1.5s',
                    // opacity: props.CompOpacity >= 1.3 && '0.1',
                }}
            />
            <img src={LogoPart05} alt="" className="part-four"
                style={{
                    margin: props.CompOpacity >= 1.3 && '.30% 2%',
                    transition: props.CompOpacity >= 1.3 && 'ease-in-out 1.5s'
                }}
            />

        </div>
    )
}
