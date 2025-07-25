import React, { useState } from 'react';

//style
import './lp-contact-us-comp.scss';

//components
import OPLogoVectorComp from '../../../Our-Pricing-Page/Logo-Vector-Comp/op-logo-vector-comp';



export default function LPContactUsComp(props) {
    const Calender = 'https://calendly.com/pitch-catalyst/30min?back=1&month=2023-06';

    //images
    const Lamp1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/our-pricing/lamp769.svg';
    const Lamp2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/our-pricing/lamp770.svg';
    const [calendlyVisibility, setCalendlyVisibility] = useState(false);

    function handleCalendlyTrue() {
        setCalendlyVisibility(true)
    }

    // eslint-disable-next-line
    function handleCalendlyFalse() {
        setCalendlyVisibility(false)
    }

    return (
        <div className="lp-contact-us-comp-main-container"
            style={{
                zIndex: props.OPCompScrolling >= 1.2 && '1',
                opacity: props.OPCompScrolling >= 1.2 && '1',
            }}
        >

            <div className="frame-contant-div"
                onClick={handleCalendlyFalse}
                style={{
                    display: !calendlyVisibility && 'none'
                }}
            >
                <span className='cross-btn' onClick={handleCalendlyFalse}>&#x2715;</span>
                <iframe
                    title="title"
                    id="iframe-calendly"
                    src={Calender}
                />
            </div>

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

                <div className="btn-div">
                    <div className="contact-us-btn">
                        <div className="inner-div">
                            <a
                                href="https://wa.me/9711750002?text=Hey there, seeking deck expertise – can we sync up for a chat? " target="_blank" rel="noreferrer"
                                className='link-tag'
                            >CONTACT US</a>
                        </div>
                    </div>

                    <div className="schedule-call-btn"
                        onClick={handleCalendlyTrue}
                    >
                        <div className="inner-div">
                            <div className='link-tag'>Schedule Call</div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}
