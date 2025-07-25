import React from 'react';
import './more-category-card.scss';


export default function MoreCategoryCard(props) {
    const LogoImg = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/pitch-content/small-circle-logo.png';

    
    return (
        <div className="more-category-card-main-container">
            <div className="circle-vector1-div" />
            <div className="circle-vector2-div" />
            <img src={LogoImg} alt="" className="logo-img" />

            <h1>
                {props.Name1} <br />
                <span>{props.Name2}</span>
            </h1>

            <div className="hr-line1" />
            <p>{props.Paragraph}</p>
            <div className="hr-line2" />

            {/* <button>More Details</button> */}

        </div>)
}
