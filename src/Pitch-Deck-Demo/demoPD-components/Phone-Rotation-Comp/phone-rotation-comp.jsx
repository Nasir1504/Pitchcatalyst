import React from "react";
import "./phone-rotation-comp.scss";
import { Link } from "react-router-dom";

export default function PhoneRotationComp(props) {



    return (<>
        <div className="phone-rotation-comp-main-container">
            <Link to="/see-our-work">
                <span className="phone-rotation-cross-btn">&#x2715;</span>
            </Link>
            <div className="message1">
                Please rotate your device
            </div>
            <div className="phone">
                <div className="mock-up"></div>
                <div className="small-circle"></div>
            </div>
            <div className="message2">
                For better experience!
            </div>
        </div>
    </>)
}