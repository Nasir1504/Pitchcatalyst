import React, { useState, useEffect } from "react";
import "./meet-our-team-comp.scss";
import TouchAppIcon from '@mui/icons-material/TouchApp';

const BGFrame = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/component208.png';
const Frame3 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/frame549.png';
const Frame2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/frame678.png';

export default function MeetOurTeamComp() {

    const [detailsHover, setDetailsHover] = useState(false)
    const [itemID, setItemID] = useState(0)
    const [stopEffectOnHover, setStopEffectOnHover] = useState(true)
    const [upDownEffect, setUpDownEffect] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setUpDownEffect(prev => {
                return !prev
            })
        }, 1000)

    }, [upDownEffect])

    function handleHoverTrueEvent() {
        setStopEffectOnHover(false)
        setDetailsHover(true)
    }
    function handleHoverFalseEvent() {
        setDetailsHover(false)
    }

    function handleItemID(id) {
        setItemID(id)
    }



    // teamText-keyframe

    return (
        <>
            <div className="meet-our-team-comp-main-container">
                <div className="details-hover-div"
                    style={{
                        display: detailsHover ? "block" : "none"
                    }}
                >
                    {
                        itemID === 1 ? <img className="team-img" src={Frame2} alt="" /> :
                            itemID === 2 && <img className="team-img" src={Frame3} alt="" />

                    }

                </div>
                <img className="bg-img" src={BGFrame} alt="" />
                {/* <div className="heading-div">
                    <div className="shape-div"></div>
                    <h1>
                        MEET OUR<span> TEAM</span>
                    </h1>

                    <div className="hr-line-div"></div>
                </div> */}
                {/* <div className="linked-in-img-div1">
                    <a href="https://www.linkedin.com/in/ishrat-gupta-rentainance/" target="_blank"rel='noreferrer'><img src={Instagram} alt="" /></a>
                </div>
                <div className="linked-in-img-div2">

                    <a href="https://www.linkedin.com/in/devanshu-pasari-931951241/" target="_blank" rel='noreferrer'><img src={Instagram} alt="" /></a>
                </div>
                <div className="linked-in-img-div3">

                    <a href="https://www.linkedin.com/in/nimain-c-1230a918/" target="_blank" rel='noreferrer'><img src={Instagram} alt="" /></a>
                </div> */}






                <div className="tech-team-div"
                    onMouseEnter={() => {
                        handleHoverTrueEvent()
                        handleItemID(1)
                    }}
                    onMouseLeave={() => {
                        handleHoverFalseEvent()
                        handleItemID(0)
                    }}
                >
                    <div className="name-heading">
                        <span className="bullet-point"></span>
                        <h2
                            style={{
                                animation: stopEffectOnHover && upDownEffect && "teamText-keyframe 0.2s"
                            }}
                        >TECH <span>TEAM</span>
                        </h2><h1
                            style={{
                                animation: stopEffectOnHover && upDownEffect && "teamText-keyframe 0.2s"
                            }}
                        >11</h1>
                        <div className="tap-icon-div"
                            style={{
                                visibility: itemID === 1 && "hidden"
                            }}
                        >
                            <TouchAppIcon className="tap-icon"
                                style={{
                                    animation: upDownEffect && "tapIcon-keyframe 0.2s"

                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="non-tech-team-div"
                    onMouseEnter={() => {
                        handleHoverTrueEvent()
                        handleItemID(2)
                    }}
                    onMouseLeave={() => {
                        handleHoverFalseEvent()
                        handleItemID(0)
                    }}
                >
                    <div className="name-heading">
                        <span className="bullet-point"></span>
                        <h2
                            style={{
                                animation: stopEffectOnHover && upDownEffect && "teamText-keyframe 0.2s"
                            }}
                        >NON-TECH <span>TEAM</span>
                        </h2><h1
                            style={{
                                animation: stopEffectOnHover && upDownEffect && "teamText-keyframe 0.2s"
                            }}
                        >8</h1>
                        <div className="tap-icon-div"
                            style={{
                                visibility: itemID === 2 && "hidden"
                            }}
                        >
                            <TouchAppIcon className="tap-icon"
                                style={{
                                    animation: upDownEffect && "tapIcon-keyframe 0.2s"

                                }}
                            />
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}