import React from 'react';
import './our-feature-comp.scss';

export default function OurFeatureComp(props) {
    return (
        <div className="our-feature-comp-main-container"

            style={{
                borderRadius: !props.Query && props.Id === 0 ? '1vw 1vw 1vw 0' :
                    !props.Query && props.Id === 2 ? '1vw 1vw 0 1vw' : !props.Query ? '1vw' : props.Query && '2vw'
            }}>

            <img src={props.ImgURL} alt="" />

            <div className="content-div">
                <span className="heading">
                    {props.Heading}
                </span>

                <span className='para'>
                    {props.Details}
                </span>
            </div>

        </div>
    )
}
