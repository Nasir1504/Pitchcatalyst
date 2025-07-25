// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import "./join-us-comp.scss";
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { ImageServer } from "../../../img/imageServer";

const Frame = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/nothing-phone.png';
const Button1 = `${ImageServer}img/Pitch-Deck/fifteenth-comp-img/frame570.png`;
const Button2 = `${ImageServer}img/Pitch-Deck/fifteenth-comp-img/frame571.png`;


const LogoImg = `https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/frame681.svg`;
const Linkedin = `${ImageServer}img/blogs-img/linkedin-icon.png`;
const Instagram = `${ImageServer}img/blogs-img/instagram-icon.png`;
const Facebook = `${ImageServer}img/blogs-img/facebook-icon.png`;
const Youtube = `${ImageServer}img/blogs-img/youtube-icon.png`;

export default function JoinUsComp() {
   

    const [upDownEffect, setUpDownEffect] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setUpDownEffect(prev => {
                return !prev
            })
        }, 800)

    }, [upDownEffect])

 

    return (
        <>
            <div className="join-us-comp-main-container">

                {/* <div className="hidden-frame-div"
                    style={{
                        visibility: frameVisibility ? "visible" : "hidden"
                    }}
                    onClick={handleFrameVisibility}
                >
                    <div className="main-frame">
                        {
                            itemID === 1 ? <iframe
                                title="myFrame"
                                id="iframe-calendly"
                                src={Calender}
                            /> :
                                itemID === 2 && <iframe
                                    title="myFrame"
                                    id="iframe-calendly"
                                    src={Messenger}
                                />
                        }

                        <div className="cross-icon">
                            <CloseRoundedIcon id="crossIcon" onClick={handleFrameTrueEvent} />
                        </div>
                    </div>
                </div> */}
                <div className="left-part">

                    <div className="top-part">

                        <div className="join-us-heading">
                            <img className="logo-img" src={LogoImg} alt="" />
                            <h1>Thank You <br /><span>For Choosing Us</span></h1>
                        </div>

                    </div>
                    <div className="middle-part">
                        <div className="frame-calendly-btn"
                            onClick={() => {
                                // handleFrameVisibility()
                                // handleItemID(1)
                            }}
                        >
                            <img src={Button1} alt="" />
                            <div className="tap-icon-div">
                                <TouchAppIcon className="tap-icon"
                                    style={{
                                        animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                                    }}
                                />
                            </div>

                        </div>
                        <div className="frame-calendly-btn"
                        // onClick={() => {
                        //     handleFrameVisibility()
                        //     handleItemID(2)
                        // }}
                        >
                            <div>
                                <img src={Button2} alt="" />
                            </div>
                            <div className="tap-icon-div">
                                <TouchAppIcon className="tap-icon"
                                    style={{
                                        animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bottom-part">
                        <div className="our-handles-div">
                            <h1>Our <span>Handle</span></h1></div>
                        <div className="icons-div">
                            <a href="https://rentainance.com/" target="_blank" rel='noreferrer'><img src={LogoImg} alt="" /></a>
                            <a href="https://www.linkedin.com/company/rentainance/" target="_blank" rel='noreferrer'><img src={Linkedin} alt="" /></a>
                            <a href="https://www.youtube.com/@rentainance" target="_blank" rel='noreferrer'><img src={Youtube} alt="" /></a>
                            <a href="https://www.instagram.com/rentainance/" target="_blank" rel='noreferrer'><img src={Instagram} alt="" /></a>
                            <a href="https://www.facebook.com/Rentainance-109704091972749" target="_blank" rel='noreferrer'><img src={Facebook} alt="" /></a>


                        </div>

                    </div>

                </div>
                <div className="right-part">
                    <img src={Frame} alt="" />
                </div>



            </div>
        </>
    )
}