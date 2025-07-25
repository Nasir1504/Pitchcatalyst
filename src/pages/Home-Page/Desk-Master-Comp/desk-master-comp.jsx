import React, { useState } from 'react';

//styles
import './desk-master-comp.scss';

//components
import DeckMasterCardComp from './Deck-Master-Card-Comp/deck-master-card-comp';


export default function DeskMasterComp() {

    //images
    const laptopMockup1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/MacBook-Pro-21.png';
    const laptopMockup2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/MacBook-Pro-22.png';
    const laptopMockup3 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/MacBook-Pro-23.png';
    const laptopMockup4 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/Monitor-XDR.png';
    const laptopMockup5 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/MacBook-Pro-24.png';
    const stageImg = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/stage-img.png';
    const LogoVector = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/logo-vector.svg';


    //images
    const Lamp1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/our-pricing/lamp769.svg';
    const Lamp2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/our-pricing/lamp770.svg';

    const [onLoadState, setOnLoadState] = useState(false)
    const [stateOne, setStateOne] = useState(false)
    const [stateTwo, setStateTwo] = useState(false)

    const [stateThree, setStateThree] = useState(false)
    const [cardCount, setCardCount] = useState(-1)

    const [logoRotaion, setLogoRotation] = useState(false)

    function handleCardCount(id) {
        setCardCount(id)
    }


    return (
        <div className="desk-master-comp-main-container">
            <button className='btn-onLoad' onClick={() => setOnLoadState(true)}>onLoad</button>
            <button className='btn-one' onClick={() => setStateOne(true)}>One</button>
            <button className='btn-two' onClick={() => {
                setStateTwo(true)
                setLogoRotation(true)
            }}>Two</button>
            <button className='btn-three' onClick={() => {
                setStateThree(true)
                setCardCount(0)
                setLogoRotation(false)

            }}
            >Three</button>



            <div className="deck-master-heading"
                style={{
                    transform: stateTwo && 'translate(-150%)'

                }}
            >
                <div className="blank-div"
                    style={{
                        transform: onLoadState && 'translateY(-100%)'
                    }}
                ></div>
                Deck<span>Master :</span> The <br /> Ultimate Control <br /> Hub for Your Pitch
            </div>

            {/* ------------------------------------------------------------------ */}

            <div className="dynamic-deck-begins-div"
                style={{
                    transform: stateTwo && 'translate(-35%)'

                }}
            >
                <div className="mockup-div"
                    style={{
                        opacity: stateOne ? '1' : '0',
                        transform: stateTwo && 'scale(1.05) translateY(-10%)'
                    }}
                >
                    <div className="after-div" style={{ display: stateTwo && 'none' }} />
                    <img src={laptopMockup1} alt="" className="mockup-img"
                        style={{
                            opacity: stateOne ? '1' : '0',
                            transform: cardCount >= 0 && 'translateY(-100vh)'
                        }}
                    />

                    <img src={laptopMockup2} alt="" className="mockup1-img"
                        style={{
                            transform: cardCount === 0 ? 'translateY(0vh)' : cardCount > 0 && 'translateY(-100vh)'
                        }}
                    />
                    <img src={laptopMockup3} alt="" className="mockup2-img"
                        style={{
                            transform: cardCount === 1 ? 'translateY(0vh)' : cardCount > 1 && 'translateY(-100vh)'
                        }}
                    />
                    <div className="analytics-heading"
                        style={{
                            transform: onLoadState && 'translateY(0)',
                            opacity: cardCount === 1 && '1',

                        }}
                    ><span>ANA</span>LYTICS</div>

                    <img src={laptopMockup4} alt="" className="mockup3-img"
                        style={{
                            transform: cardCount === 2 ? 'translateY(0vh)' : cardCount > 2 && 'translateY(-100vh)'
                        }}
                    />
                    <img src={laptopMockup5} alt="" className="mockup4-img"
                        style={{
                            transform: cardCount === 3 ? 'translateY(0vh)' : cardCount > 3 && 'translateY(-100vh)'
                        }}
                    />



                    <div className="card-container"
                        style={{
                            transform: stateThree && 'translate(-38vw, 4vw) scale(1.1)',
                            height: stateThree && '60vh',
                            width: stateThree && '36%',
                            flexDirection: stateThree && 'column',
                            transition: stateThree && ' ease-out 1.2s',
                            padding: stateThree && '8% 5%'

                        }}
                    >
                        {[...Array(4)].map((_, i) => {

                            return <div
                                className="card-div"
                                key={i}
                                onClick={() => {
                                    i % 2 === 0 ? setLogoRotation(true) : setLogoRotation(false)
                                }}
                                style={{
                                    transform: !stateThree ? `translate(${i * 122}% , 110%)` :
                                        `translate( 40% ,${i * 150}%)`,
                                    transition: stateThree && ' ease-out 1.2s'

                                }}
                            ><DeckMasterCardComp
                                    CardCount={cardCount}
                                    Id={i}
                                    HandleCardCount={handleCardCount}

                                />
                            </div>
                        })}
                    </div>
                </div>

                {/* ------------------------------------------------------------- */}
                <img src={Lamp1} alt="" className="lamp1-img" style={{
                    opacity: stateOne ? '1' : '0'
                }} />

                <img src={Lamp2} alt="" className="lamp2-img" style={{
                    opacity: !stateOne ? '1' : '0'
                }} />

                {/* ------------------------------------------------------------- */}

                <img src={stageImg} alt="" className="stage-img" />

                {/* ------------------------------------------------------------- */}

                <p
                    style={{
                        transform: onLoadState && 'translateY(0)',
                        opacity: onLoadState && !stateThree && '1'
                    }}
                >The Future Of <br /><b><span>Dynamic Decks</span> Begins Here</b>
                </p>
                <p
                    style={{
                        transform: onLoadState && 'translateY(0)',
                        opacity: cardCount === 0 && '1'
                    }}
                >Because <b><span>'Oops' And 'Perfect'</span></b> <br />
                    Are Just An Edit Away!
                </p>

                <p
                    style={{
                        transform: onLoadState && 'translateY(0) scale(0.8)',
                        opacity: cardCount === 1 && '1',

                    }}
                >BECAUSE NUMBERS DON'T LIE, BUT THEY DO TELL <br /><b><span>FASCINATIOG STORIES!</span></b> <br />
                </p>
                <p
                    style={{
                        transform: onLoadState && 'translateY(0) scale(0.8)',
                        opacity: cardCount === 2 && '1',

                    }}
                >Personalized Pitches Deserve <b><span>Personalized Addresses,</span></b> <br />Because 'www.WhoCares.com' Doesn't Cut It.<br />
                </p>

                <p
                    style={{
                        transform: onLoadState && 'translateY(0)',
                        opacity: cardCount === 3 && '1'
                    }}
                >When The Words Fail You,<br /><b><span>Don't Worry, Our AI's Got Your Back!</span></b>
                </p>


            </div>

            {/* ------------------------------------------------------------------ */}

            <div className="verticle-bar"
                style={{
                    opacity: stateOne && '1'
                }}
            >
                <div className="top-circle-div" />
                <div className="loading-bar" />
                <div className="padding-bar"
                    style={{
                        height: cardCount === 0 ? '25%' :
                            cardCount === 1 ? '50%' :
                                cardCount === 2 ? '75%' : cardCount === 3 && '98.8%'
                    }}
                />
                <div className="bottom-circle-div"
                    style={{
                        backgroundColor: cardCount === 3 && '#e1ff00'
                    }}
                />
                <img src={LogoVector} alt="" className="logo-vector-img"

                    style={{
                        transform: logoRotaion ? `rotate(180deg)` : `rotate(0deg)`
                    }} />

            </div>

        </div >
    )
}
