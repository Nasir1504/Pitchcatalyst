import React from 'react';
import './articles-and-blogs-card.scss';

export default function ArticlesAndBlogsCard(props) {
    const LogoImg = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/pitch-content/frame842.png';
    
    return (
        <div className="articles-and-blogs-card-main-container">
            <img src={LogoImg} alt="" className="logo-img" />

            <h1 className="bg-text">AI <br /> ARTI <br />CLE</h1>

            <h1 className="card-heading">
                {props.Name1} <br />
                <span>{props.Name2}</span>
            </h1>
            <p>{props.Paragraph}</p>

        </div>
    )
}
