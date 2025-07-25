import React from 'react';

//style
import './op-comp-three.scss';

//Dependencies
import { Link } from 'react-router-dom';

//components
import OPLogoVectorComp from '../Logo-Vector-Comp/op-logo-vector-comp';

//images
import Lamp1 from "../../../assets/imgs/pricing/lampNeon.png"
import Lamp2 from "../../../assets/imgs/pricing/lampWhite.png"


export default function OPCompThree(props) {

    // const Lamp1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/our-pricing/lamp769.svg';
    // const Lamp2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/our-pricing/lamp770.svg';


    return (
        <div className="op-comp-three-main-container"
            style={{
                zIndex: props.OPCompScrolling >= 1.2 && '1',
                opacity: props.OPCompScrolling >= 1.2 && '1',
            }}
        >
            <OPLogoVectorComp CompOpacity={props.OPCompScrolling} Query={props.Query} />
            <img src={Lamp2} alt="" className="lamp-white-img"
                style={{
                    opacity: props.OPCompScrolling === 1.2 && '1'
                }}
            />
            <img src={Lamp1} alt="" className="lamp-white-img"
                style={{
                    opacity: props.OPCompScrolling === 1.3 && '1'
                }}
            />
            <div className="pitch-power-heading"
                style={{
                    transform: props.OPCompScrolling >= 1.3 && 'translateY(-100vh)',
                    opacity: props.OPCompScrolling >= 1.3 && '0'
                }}
            >
                Ready to ignite your <br />
                <span>pitch power?</span>
            </div>

            <div className="chat-with-us-div"
                style={{
                    opacity: props.OPCompScrolling >= 1.3 && '1'
                }}
            >
                <div className='heading'>CHAT <span>with us</span></div>
                <p>Embrace the future of storytelling!</p>

                <div className="contact-us-btn">
                    <div className="inner-div">
                        <Link to='/team-up' className='link-tag'>CONTACT US</Link>
                    </div>

                </div>

            </div>
        </div>
    )
}
