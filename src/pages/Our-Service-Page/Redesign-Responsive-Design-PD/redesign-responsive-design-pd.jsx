import React from 'react';
import './redesign-responsive-design-pd.scss';
const Frame1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/our-service-img/frame558.png';
const Frame2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/our-service-img/frame559.png';




export default function RedesignResponsiveDesignPD() {
    return (
        <div className="redesign-responsive-design-pd-main-container">
            <div className="bg-text-div">
                <h1 className='bg-text'>DE <br /> SIG <br /> N</h1>

            </div>
            <div className="top-div">
                <img
                    src="https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-img/frame533.png"
                    alt=""
                    className="top-div-bg-img"
                />

                <img src={Frame1} alt="" className="laptop-img" />
                <div className="content-div">
                    <h1>Redesign your<br /><span>Pitch Deck</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem.</p>
                </div>
            </div>
            <div className="bottom-div">
                <img
                    src="https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-img/frame533.png"
                    alt=""
                    className="bottom-div-bg-img"
                />

                <img src={Frame2} alt="" className="laptop-img" />
                <div className="content-div">
                    <h1>Responsive Design<br /> of your <span>Pitch Deck</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem.</p>
                </div>
            </div>
        </div>)
}


//https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/about-us-page-img/frame552.png