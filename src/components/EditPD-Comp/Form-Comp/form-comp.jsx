import React from 'react';
import './form-comp.scss';


export default function FormComp(props) {
    const Frame = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/dashboard/macbook-pro17.png';


    return (
        <div className="editpd-form-comp-main-container">

            <p className="slide-num-para">{props.Count + 1}</p>

            <button className="cross-btn" onClick={props.HandleEditCompVisibilityFalse}>&#215;</button>

            <div className="left-content-div">
                <p><span>PROBLEM</span> SLIDE</p>
                <img src={Frame} alt="" />
                <button>SAVE</button>
            </div>
            <div className="middle-content-div">

                {[...Array(10)].map((_, index) => {
                    return <div className="heading-list-div" key={index}>
                        <p>HEADING{' '}{index}</p>
                        <input type="text" />
                    </div>
                })}
            </div>
            <div className="right-content-div">

                {[...Array(10)].map((_, index) => {
                    return <div className="btn-list-div" key={index}>
                        <p>BUTTON{' '}{index}</p>
                        <input type="text" />
                    </div>
                })}
            </div>

        </div>
    )
}
