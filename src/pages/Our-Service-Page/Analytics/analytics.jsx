import React from 'react';
import './analytics.scss';
const Frame1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/our-service-img/frame565.png';
const Frame2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/our-service-img/frame562.png';


export default function Analytics() {
    return (
        <div className="analytics-main-container">
            <div className="top-content-div">
                <h1>Analytics of your <br /><span>Pitch Deck</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam unde, explicabo totam laborum sapiente debitis delectus magnam.</p>
            </div>
            <div className="bottom-img-div">
                <img className="bg-wave-img" src={Frame1} alt="" />
                <img src={Frame2} alt="" className="tab-img" />


            </div>

        </div>
    )
}
