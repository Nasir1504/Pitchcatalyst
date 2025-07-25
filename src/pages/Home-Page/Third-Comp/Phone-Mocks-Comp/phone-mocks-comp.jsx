import React from 'react';
import './phone-mocks-comp.scss';

import phoneFrame from '../../../../assets/imgs/home-page/frame613.png';

export default function PhoneMocksComp(props) {
    // const phoneFrame = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/frame613.png';
    // const SO = props.ScrollOpacity;
    return (
        <div className="phone-mocks-comp-main-container">

            <div className="mock-container-one"
                style={{
                    top: props.CompThirdOpacity >= 1 && '-20%',
                    right: props.CompThirdOpacity >= 1 && '-30%'
                }}
            >
                <img className='mock-one' src={phoneFrame} alt="" />
                <img className='mock-two' src={phoneFrame} alt="" />
                <img className='mock-three' src={phoneFrame} alt="" />

            </div>
            <div className="mock-container-two"
                style={{
                    top: props.CompThirdOpacity >= 1 && '35%',
                    right: props.CompThirdOpacity >= 1 && '-35%'
                }}
            >
                <img className='mock-one' src={phoneFrame} alt="" />
                <img className='mock-two' src={phoneFrame} alt="" />
                <img className='mock-three' src={phoneFrame} alt="" />
            </div>
            <div className="mock-container-three"
                style={{
                    top: props.CompThirdOpacity >= 1 && '70%',
                    right: props.CompThirdOpacity >= 1 && '-30%'
                }}
            >
                <img className='mock-one' src={phoneFrame} alt="" />
                <img className='mock-two' src={phoneFrame} alt="" />
                <img className='mock-three' src={phoneFrame} alt="" />
            </div>
            <div className="mock-container-four"
                style={{
                    top: props.CompThirdOpacity >= 1 && '85%',
                    right: props.CompThirdOpacity >= 1 && '-20%'
                }}
            >
                <img className='mock-one' src={phoneFrame} alt="" />
                <img className='mock-two' src={phoneFrame} alt="" />
                <img className='mock-three' src={phoneFrame} alt="" />
            </div>
            <div className="mock-container-five"
                style={{
                    top: props.CompThirdOpacity >= 1 && '95%',
                    right: props.CompThirdOpacity >= 1 && '20%'
                }}
            >
                <img className='mock-one' src={phoneFrame} alt="" />
                <img className='mock-two' src={phoneFrame} alt="" />
                <img className='mock-three' src={phoneFrame} alt="" />
            </div>
            <div className="mock-container-six"
                style={{
                    top: props.CompThirdOpacity >= 1 && '95%',
                    right: props.CompThirdOpacity >= 1 && '48%'
                }}
            >
                <img className='mock-one' src={phoneFrame} alt="" />
                <img className='mock-two' src={phoneFrame} alt="" />
                <img className='mock-three' src={phoneFrame} alt="" />
            </div>
            <div className="mock-container-seven"
                style={{
                    top: props.CompThirdOpacity >= 1 && '85%',
                    right: props.CompThirdOpacity >= 1 && '70%'
                }}
            >
                <img className='mock-one' src={phoneFrame} alt="" />
                <img className='mock-two' src={phoneFrame} alt="" />
                <img className='mock-three' src={phoneFrame} alt="" />
            </div>



        </div>
    )
}
