import React, { useState, useMemo } from 'react';

//styles
import './carrier-page-why-choose-us.scss';

//components
import EditPitchDeck from '../Edit-Pitch-Deck/edit-pitch-deck';

//images
const vectorImg = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame897.png';
const usText = 'https://i.ibb.co/LzCd3bd/us-text.png';
// const usText = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/us-text.png';
const maskBG = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Union.png';
const lamp = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/neon-lamp-img.png';


export default function CarrierPageWhyChooseUs({ PageProgress, Progress }) {

    const progress1 = Progress[0]
    const progress2 = Progress[1]
    const progress3 = Progress[2]
    // const progress4 = Progress[3]

    const [textAnime, setTextAnime] = useState(false);

    useMemo(() => {

        if (!textAnime && PageProgress > progress1) {
            setTimeout(() => {
                setTextAnime(true)
            }, 6000);

        } else if (textAnime && PageProgress > progress1) {
            setTimeout(() => {
                setTextAnime(false)
            }, 6000);
        }
// eslint-disable-next-line
    }, [PageProgress, textAnime])



    return (
        <div className="carrier-page-why-choose-us-main-container"
            style={{
                // zIndex: PageProgress > progress1 && PageProgress < progress4 && '1'
                // transform: PageProgress == progress4 && 'translateY(-100vh)'
            }}
        >
            <div className="carrier-page-why-choose-us-main">


                <div className="vector-container2"
                    style={{
                        opacity: PageProgress > progress2 && '0.8',
                        // transform: PageProgress > progress3 && 'translate(40vw) scale(-1)'
                    }}
                >
                    <img src={vectorImg} alt="" className="vector2-img" />
                </div>
                <div className="vector-container"
                    style={{
                        bottom: PageProgress > progress1 && '-23.5vh',
                        transform: PageProgress > progress1 && PageProgress < progress2 ? 'rotate(0deg)' :
                            PageProgress > progress2 && PageProgress < progress3 ? 'rotate(-55deg) translate(4vw, -5vw)' :
                                PageProgress > progress3 && 'rotate(95deg) translate(4vw, 12vw) scale(1.5)'

                    }}
                >
                    <img src={vectorImg} alt="" className="vector-img" />
                    {/* <div className="upper-layer" /> */}
                </div>
                <img src={lamp} alt="" className="lamp-img1"
                    style={{
                        marginLeft: PageProgress > progress3 && '30vw',
                        transform: PageProgress > progress3 && 'rotate(-90deg)',
                        opacity: PageProgress < progress3 && '0'
                    }}
                />
                <img src={lamp} alt="" className="lamp-img2"
                    style={{
                        marginRight: PageProgress > progress3 && '30vw',
                        transform: PageProgress > progress3 && 'rotate(90deg)',
                        opacity: PageProgress < progress3 && '0'
                    }}
                />

                <div className="why-us-heading"
                    style={{
                        transform: PageProgress > progress1 && PageProgress < progress2 ? 'translateY(0)' :
                            PageProgress > progress2 && PageProgress < progress3 ? 'translateY(-15vw) scale(0.8)' :
                                PageProgress > progress3 && 'translateY(-70vw) scale(0.6)'
                    }}
                >
                    <span className="text-span">Why <br /> Choose</span>
                    <div className="img-span">
                        <div className="mask-div"
                            style={{
                                maskImage: `url(${usText})`,
                                WebkitMaskImage: `url(${usText})`,

                            }}
                        >
                            <img src={maskBG} alt="" className="mask-bg"
                                style={{
                                    transform: textAnime && 'rotate(60deg)'
                                }}
                            />

                        </div>
                    </div>
                </div>

                <div className="card-container"
                    style={{
                        transform: PageProgress > progress3 && 'scale(0.7) translateY(-100vh)'
                    }}
                >
                    <EditPitchDeck PageProgress={PageProgress} Progress={Progress} />
                </div>

            </div>
        </div>
    )
}
