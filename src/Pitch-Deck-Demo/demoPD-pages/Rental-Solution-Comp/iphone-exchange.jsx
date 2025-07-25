import React, { useState, useEffect } from "react";
import "./iphone-exchange.scss";
// import { ImageServer } from "../../../img/imageServer";



const Frame = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/frame674.png';

export default function IphoneExchange(props) {
    const [phoneOne, setPhoneOne] = useState(false)
    const [phoneTwo, setPhoneTwo] = useState(true)
    const [phoneThree, setPhoneThree] = useState(true)



    useEffect(() => {

        if (!props.triggerBG) {

            setTimeout(() => {
                setPhoneOne(true)
                setPhoneThree(false)

            }, 2000)
            setTimeout(() => {
                setPhoneThree(true)
                setPhoneTwo(false)
            }, 4000)
            setTimeout(() => {
                setPhoneOne(false)
                setPhoneThree(true)
                setPhoneTwo(true)
            }, 10000)
        }
    }, [props.triggerBG])



    return (
        <>
            <div className="iphone-exchange-main-container">
                <div className="bg-div">

                    <div className="img1-div"
                        style={{
                            transform: !phoneOne && `scale(${2})`,
                            bottom: !phoneOne && "14%",
                            left: !phoneOne && "42%",
                            animation: !props.triggerBG ? "phoneFromDownSideUp 0.8s" : "phoneFromUpSideDown 0.8s"

                        }}
                    >
                        <img src={Frame} alt="" />
                    </div>
                    <div className="img2-div"
                        style={{
                            transform: !phoneTwo && `scale(${2})`,
                            left: !phoneThree ? "82%"
                                : !phoneOne ? "2%"
                                    : "42%",

                            bottom: !phoneTwo && "14%"
                        }}
                    >
                        <img src={Frame} alt="" />
                    </div>
                    <div className="img3-div"
                        style={{
                            transform: !phoneThree && `scale(${2})`,
                            bottom: !phoneThree && "14%",
                            left: !phoneThree && "42%"

                        }}
                    >
                        <img src={Frame} alt="" />
                    </div>


                </div>


            </div>
        </>
    );
}