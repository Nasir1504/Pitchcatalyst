import React from 'react';
import './comp-two.scss';
import { ImageServer } from '../../../../../img/imageServer';


const Azure = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/azure.svg';
const Gooogle = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/google.png';
const AWS = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/aws.svg';
const NodeJs = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/nodejs.svg';
const ReactIcon = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/react.png';


const FigmaIcon = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/figma.svg';
const Vector = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/Vector943.png';
const lampON = `${ImageServer}img/Pitch-Catalyst/home-page-imgs/group560.png`;
const lampOff = `${ImageServer}img/Pitch-Catalyst/home-page-imgs/group561.png`;

export default function CompTwo(props) {


    const PlugInData = [
        {
            name: '',
            color: '#fff',
            imgURL: FigmaIcon
        },
        {
            name: 'Xd',
            color: '#FF61F6',
            imgURL: ReactIcon

        },
        {
            name: 'Id',
            color: '#FF3068',
            imgURL: Gooogle

        },
        {
            name: 'AI',
            color: '#FF9A00',
            imgURL: AWS

        },
        {
            name: 'Ps',
            color: '#00A9FF',
            imgURL: NodeJs

        },
        {
            name: 'Pr',
            color: '#9999FF',
            imgURL: Azure

        },
    ]
    return (
        <div className="comp-two-main-container">
            <img src={lampOff} alt="" className="lamp-off-img"
                style={{
                    opacity: props.CompThirdOpacity > 0.2 && '0'
                    // props.CompThirdOpacity >= '1' && '0',
                    // opacity: '1'
                }}
            />
            <img src={lampON} alt="" className="lamp-on-img"
                style={{
                    opacity: props.CompThirdOpacity >= 0.8 && '1',
                    left: props.CompThirdOpacity >= '1' && '-80%',
                }}
            />

            <div className="content-div"
                style={{
                    marginLeft: props.CompThirdOpacity >= '0.8' ? '-5%' : props.CompThirdOpacity >= '1' && '-80%',
                    marginTop: props.CompThirdOpacity >= '0.8' && '-5%',
                    alignItems: props.CompThirdOpacity >= '0.8' && 'flex-start',
                    transform: props.CompThirdOpacity >= '0.8' && 'translate(-5%, -20%)',
                }}
            >
                <p
                    style={{
                        color: props.CompThirdOpacity >= 0.8 ? '#E1FF01' : props.CompThirdOpacity < 0.8 && '#fff',
                        textShadow: props.CompThirdOpacity >= 0.8 ? '1px 10px 2px #000' : props.CompThirdOpacity < 0.8 && 'none',
                        animation: props.CompThirdOpacity >= 0.8 && 'ThirdCompContentSecondKF 2s ease-in-out',
                    }}
                >Our Service</p>
                <div className='heading'
                    style={{
                        color: props.CompThirdOpacity >= 0.8 ? '#E1FF01' : props.CompThirdOpacity < 0.8 && '#fff',
                        textShadow: props.CompThirdOpacity >= 0.8 ? '1px 10px 2px #000' : props.CompThirdOpacity < 0.8 && 'none',
                        animation: props.CompThirdOpacity >= 0.8 && 'ThirdCompContentKF 2s ease-in-out',

                    }}
                >Deck Design</div>
                <p className="content-para"
                    style={{
                        textAlign: props.CompThirdOpacity >= '0.8' && 'left',
                        animation: props.CompThirdOpacity >= 0.8 && 'ThirdCompContentKF 2s ease-in-out',

                    }}
                >



                    The culmination of our design methodologies, industry expertise, and collaborative process,
                    is the successful outcome we deliver for our clients. With our decks, you're not just presenting
                    Experience the Pitch Catalyst difference today - let us help you turn your pitch decks into persuasive
                    narratives that leave a lasting impression.


                </p>

                <div className="redesign-btn"
                    style={{
                        animation: props.CompThirdOpacity >= 0.8 && 'ThirdCompContentSecondKF 2s ease-in-out',

                    }}
                >

                    Redesign
                </div>
            </div>
            {
                PlugInData.map((item, i) => {
                    return (
                        <div className="plugins-logo-div"
                            key={i}
                            style={{
                                right: i === 1 ? '38%' : i === 3 ? '36%' : i === 5 ? '66%' : '15%',
                                top: i === 1 ? '70%' :
                                    i === 2 ? '70%' :
                                        i === 3 ? '82%' :
                                            i === 4 ? '82%' :
                                                i === 5 ? '82%' :
                                                    '56%',
                                animation: props.CompThirdOpacity >= '0.8' && 'PulgInKF 2s ease-in-out',
                                transform: props.CompThirdOpacity >= '0.8' && 'translate(0%)'

                            }}
                        >
                            <div className="plugins-after-div">
                                {/* <h1
                                    style={{
                                        color: `${item.color}`,
                                        display: i === 0 && "none",
                                        transform: 'translate(0%)',
                                    }}
                                >{item.name}</h1> */}
                                <img src={item.imgURL} alt=""
                                    style={{
                                        // display: i !== 0 && "none"

                                    }}
                                />

                            </div>
                            <div className="plugins-before-div"></div>

                        </div>
                    )
                })
            }

            <img src={Vector} alt="" className="bottom-vector1 vector"
                style={{
                    animation: props.CompThirdOpacity >= '0.8' && 'PulgInVectorKF 2s ease-in-out',
                    transform: props.CompThirdOpacity >= '0.8' && 'translate(0%)'
                }}
            />
            <img src={Vector} alt="" className="bottom-vector2 vector"
                style={{
                    animation: props.CompThirdOpacity >= '0.8' && 'PulgInVectorKF 2s ease-in-out',
                    transform: props.CompThirdOpacity >= '0.8' && 'translate(0%)'
                }}
            />


        </div >)
}
