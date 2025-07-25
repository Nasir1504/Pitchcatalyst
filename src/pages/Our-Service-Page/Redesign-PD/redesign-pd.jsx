import React from 'react';
import './redesign-pd.scss';
const Frame1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/our-service-img/frame566.png';


export default function RedesignPD() {
    return (
        <div className="redesign-pd-main-container">
            <img
                src="https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-img/frame533.png"
                alt=""
                className="bg-img"
            />
            <div className="content-div">
                <h1>Redesign your<br /><span>Pitch Deck</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem.</p>
            </div>
        
                <img src={Frame1} alt="" className="laptop-img" />
        </div>
    )
}
