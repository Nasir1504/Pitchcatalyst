import React from 'react';

//styles
import './get-funded-comp.scss';

export default function GetFundedComp() {

    //images
    const UntitledDesign = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/Untitled-design.png';
    const Coins = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/coins.png';
    const Money = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/money.png';
    const Insight = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/insight.png';


    return (
        <div className="get-funded-comp-main-container">

            <div className="get-funded-heading">
                <img src={UntitledDesign} alt="" />
                <span>
                    GET <b>FUNDED</b>
                </span>
                <div className="shape-div" />

            </div>
            <div className="icons-section">
                <div className="icons1-div">
                    <img src={Coins} alt="" />
                    <p>
                        Expansive Pitch <br /> catalyst
                        <span>
                            Network
                        </span>
                    </p>
                </div>
                <div className="icons2-div">
                    <img src={Insight} alt="" />
                    <p>Deep Industry <br />
                        <span>
                            Insights
                        </span>
                    </p>
                </div>
                <div className="icons3-div">
                    <img src={Money} alt="" />
                    <p>

                        Deck Push at&nbsp;
                        <span className='span1'>
                            no cost
                        </span>
                        {/* <span className='span2'>
                            &nbsp; cost
                        </span> */}
                    </p>
                </div>

            </div>
            <p className="bottom-para">
                This isn't just a service; it’s our genuine investment in your success. We're committed to being the catalyst that ignites your ascent, lifting your startup off the ground and beyond. That’s the Pitch Catalyst way, designed to fuel your journey toward extraordinary growth.
            </p>

        </div>
    )
}
