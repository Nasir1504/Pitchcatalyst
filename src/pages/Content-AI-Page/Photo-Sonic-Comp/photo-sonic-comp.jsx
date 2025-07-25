import React, { useState, useEffect } from 'react';
import './photo-sonic-comp.scss';

export default function PhotoSonicComp(props) {

    const darkLogo = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/pitch-content/logo-dark.svg';
    const smallCircleLogo = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/pitch-content/small-circle-logo.png';
    const bgVector1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/pitch-content/frame839.svg';
    const bgVector2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/pitch-content/frame840.svg';
    const bgVector3 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/pitch-content/frame841.svg';

    const [vImgNum, setVImgNum] = useState(1);

    useEffect(() => {

        if (vImgNum === 1) {
            setTimeout(() => {
                setVImgNum(2)
            }, 4000);
        }
        else if (vImgNum === 2) {
            setTimeout(() => {
                setVImgNum(3)
            }, 4000);
        }
        else if (vImgNum === 3) {
            setTimeout(() => {
                setVImgNum(1)
            }, 4000);
        }


    }, [vImgNum])

    return (
        <div className="photo-sonic-comp-main-container"
            style={{
                opacity: props.CompOpacity < 1 ? 0 : props.CompOpacity >= 1 && '1',
                zIndex: props.CompOpacity >= 1 && props.CompOpacity < 1.2 && '1'

            }}
        >
            <img src={bgVector1} alt="" className="bg-vector1"
                style={{
                    opacity: vImgNum !== 1 && '0'
                }}
            />
            <img src={bgVector2} alt="" className="bg-vector2"
                style={{
                    opacity: vImgNum !== 2 && '0'
                }}
            />
            <img src={bgVector3} alt="" className="bg-vector3"
                style={{
                    opacity: vImgNum !== 3 && '0'
                }}
            />

            <div className="photo-sonic-comp-div"
                style={{
                    animation: props.CompOpacity >= 1 && 'photoSonicCompKF 0.8s ease-out',
                    transform: props.CompOpacity >= 1 && 'scale(1) translateY(0%)'
                }}
            >
                {/* <div className="photo-sonic-gradiant-div"></div> */}


                <div className="photo-sonic-inner-div"

                >
                    <div className="photo-sonic-heading">PHOTO <span className="span1">SONIC</span></div>

                    <img src={darkLogo} alt="" className="bg-img" />
                    <img src={smallCircleLogo} alt="" className="small-circle-logo circle-img1" />
                    <img src={smallCircleLogo} alt="" className="small-circle-logo circle-img2" />
                    <img src={smallCircleLogo} alt="" className="small-circle-logo circle-img3" />
                    <img src={smallCircleLogo} alt="" className="small-circle-logo circle-img4" />
                    <p>
                        <span className="span1">
                            generate images {' '}
                        </span>that will make your content stand out from {' '}
                        <span className="span2">
                            the crowd
                        </span>
                        .
                    </p>
                    <div className="hr1" />
                    <div className="hr2" />
                    <div className="circle-victor-1" />
                    <div className="circle-victor-2" />




                </div>

            </div>

        </div>
    )
}
