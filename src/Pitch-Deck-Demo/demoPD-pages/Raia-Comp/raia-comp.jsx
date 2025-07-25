import React from 'react';
import './raia-comp.scss';
import { ImageServer } from '../../../img/imageServer';

const MockUp = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/frame672.png';

const Frame1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/MacBook-Pro-16-362.png';
const Frame2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/MacBook-Pro-16-363.png';
// const MockUp = `${ImageServer}img/Pitch-Deck/fourth-comp-img/mock-up.png`;
const ChatImg = `${ImageServer}img/Pitch-Deck/fourth-comp-img/chat-img.png`;
const BackBTN = `${ImageServer}img/Pitch-Deck/fourth-comp-img/back-btn.png`;



export default function RaiaComp(props) {
    return (
        <div className="raia-comp-main-component">
            <button className="back-btn">
                <img src={BackBTN} alt=""
                    onClick={() => {
                        props.SetRaia(false)
                        props.HandleFrameVisibilityFalse(false)
                    }} />
            </button>
            <div className="top-frame-div">

                <img src={Frame1} alt="" />
            </div>
            <div className="bottom-frame-div">

                <img src={Frame2} alt="" />
                <div className="mobile-mock-up-div">
                    <img src={MockUp} alt="" className="mobile-mock-up" />
                    <div className="upper-layer">
                        <p className="top-heading">UPLOAD <br /><span>YOURMOCK</span></p>
                        <span className="logo-span">LOGO</span>
                        <p>SCROLLABLE <br /><span>CONTENT</span></p>
                    </div>
                    <div className="chat-screen">
                        <img src={ChatImg} alt="" />

                    </div>
                </div>
            </div>

        </div>)
}
