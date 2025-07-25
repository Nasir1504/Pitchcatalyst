import React from 'react';
import './overview-pd.scss';

export default function OverviewPD() {
    const Frame = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/our-service-img/3d-render-code-testing-functional-test-usability.png';
    const BGImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/about-us-page-img/frame552.png";
    return (
        <div className="overview-pd-main-container">
            <img src={BGImg} alt="" className="bg-img" />
            <div className="left-contaent-div">
                <h1>Get super easy way to <br />Analysis the overview of <br /> <b>Your</b> <span><b>Pitch Deck</b></span></h1>
                <hr />
            </div>
            <div className="right-img-div">
                <img src={Frame} alt="" />
            </div>
        </div>
    )
}
