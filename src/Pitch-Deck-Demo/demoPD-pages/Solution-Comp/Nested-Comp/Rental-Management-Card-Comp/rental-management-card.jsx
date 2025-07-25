import React, { useState, useEffect } from "react";
import "./rental-management-card.scss";

const Phone = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/frame674.png';

// const Phone1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/third-comp-img/iPhone1.png";
// const Phone2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/third-comp-img/iPhone2.png";
// const Phone3 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/third-comp-img/iPhone3.png";
// const Phone4 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/third-comp-img/iPhone4.png";

export default function RentalManagementCard(props) {

    const [phoneAnime, setPhoneAnime] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPhoneAnime(prev => {
                return !prev;
            })
        }, 3000)
    }, [phoneAnime])


    return (
        <>
            <div className="user-management-card-main-container"
                style={{
                    opacity: !props.HiddenHoverDiv ? "0" : "1"
                }}
            >
                {/* <div className="para-div">
                    <p>"We Will Keep You Free Because
                        <br /><span>Rentainance</span> Take Care Of<br />
                        Records Better."</p>
                </div> */}
                <div className="property-list-div">
                    <ul>
                        <li><span></span>How does it differentiate from the first three solutions?</li>
                        <li><span></span>What kind of impact will this solution have on the <br />
                            customer/user experience?</li>
                        <li><span></span> Can you illustrate some specific cases or scenarios <br />
                            where this solution would be highly effective?</li>
                        {/* <li><span></span>Lorem ipsum dolor sit amet,.</li>
                        <li><span></span>Lorem ipsum dolor sit amet,.</li>
                        <li><span></span>Lorem ipsum dolor sit amet,.</li> */}

                    </ul>
                </div>

                <div className="para1-div">
                    <p><br /><span className="span1">EXPLAIN</span> <span className="span2" >Feature-04.</span></p>
                </div>

                <div className="shape1-div"></div>
                <div className="phones-frame-div">
                    <div className="phone1-img-div">
                        <img src={Phone} alt=""
                            style={{
                                top: phoneAnime ? "35%" : "0"
                            }}
                        />
                    </div>
                    <div className="phone2-img-div">
                        <img src={Phone} alt=""
                            style={{
                                top: !phoneAnime ? "35%" : "0"
                            }}
                        />
                    </div>
                    <div className="phone3-img-div">
                        <img src={Phone} alt=""
                            style={{
                                top: phoneAnime ? "35%" : "0"
                            }}
                        />
                    </div>
                    <div className="phone4-img-div">
                        <img src={Phone} alt=""
                            style={{
                                top: !phoneAnime ? "35%" : "0"
                            }}
                        />
                    </div>

                </div>


            </div>
        </>
    );
}