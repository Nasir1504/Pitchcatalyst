import React from "react";
import "./kiosk-marketing-comp.scss";

const Frame1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/frame693.png';


export default function KioskMarketingComp() {
    return (<>
        <div className="kiosk-marketing-comp-main-container">
            <img src={Frame1} alt="" />

        </div>
    </>)
}