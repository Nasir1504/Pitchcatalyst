import React from 'react';
import './what-makes-us-unique-comp.scss';
import { Tilt } from 'react-tilt'



const Frame1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/frame696.png';
const Frame2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/group552.png';
const text = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/fourth-comp-img/our-usp-img.png';

export default function WhatMakesUsUniqueComp(props) {



    return (
        <div className="what-makes-us-unique-comp-main-container">
            <h1 className='bg-text'>USP</h1>
            <img className='text-img' src={text} alt="" />
            <h1 className="what-makes-us-unique-heading">
                what makes <br /> <b>us <span>unique</span></b>
            </h1>
            <Tilt
                options={{
                    reverse: true,
                    max: 20,
                }}
                className="raia-div"
            >
                <img src={Frame1} alt="" onClick={() => {
                    props.SetRaia(true)
                    props.HandleFrameVisibilityTrue(true)
                }} />
            </Tilt>
            <Tilt
                options={{
                    reverse: true,
                    max: 20,
                }}
                className="rscore-div"
            >
                <img src={Frame2} alt="" onClick={() => {
                    props.SetRscore(true)
                    props.HandleFrameVisibilityTrue(true)
                }} />
            </Tilt>

            <div className="bottom-div">
                <div className="top-part">
                    <p><span></span> Describe your feature here.</p>
                    <p><span></span> Describe your feature here.</p>
                </div>
                <div className="bottom-part">
                    <div className="left-div">
                        {/* <img src={RaiaLogo} alt="" /> */}
                        <button onClick={() => {
                            props.SetRaia(true)
                            props.HandleFrameVisibilityTrue(true)
                        }}>Explore Now</button>

                    </div>
                    <div className="right-div">
                        {/* <img src={RscoreLogo} alt="" /> */}
                        <button onClick={() => {
                            props.SetRscore(true)
                            props.HandleFrameVisibilityTrue(true)
                        }}>Explore Now</button>

                    </div>
                </div>
            </div>


        </div>)
}
