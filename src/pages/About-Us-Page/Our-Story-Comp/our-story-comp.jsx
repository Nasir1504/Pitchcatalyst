import React, { useState, useEffect } from 'react';
import './our-story-comp.scss';


import Vactor from "../../../assets/imgs/about/Vector53.png";

const ExpertGuidanceAndSupport = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/footer-img/expert-guidance-and-support.gif';
const InnovationVille = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/about-us-page-img/innovationville.gif';
const PitchCatalyst = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/about-us-page-img/pitch-catalyst.gif'

export default function OurStoryComp(props) {

    const [startingComp, setStartingComp] = useState(false);
    const [logoAnime, setLogoAnimeComp] = useState(false);
    const [expertGuidanceAndSupportHover, setExpertGuidanceAndSupportHover] = useState(false);
    const [innovationVille, setInnovationVille] = useState(false);
    const [pitchCatalyst, setPitchCatalyst] = useState(false)

    useEffect(() => {
        setTimeout(() => { setLogoAnimeComp(true) }, 400)
        setTimeout(() => { setStartingComp(true) }, 1800)

    }, [])

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleWindowMouseMove = event => {
            setCoords({
                x: event.clientX,
                y: event.clientY,
            });
        };
        window.addEventListener('mousemove', handleWindowMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleWindowMouseMove,
            );
        };
    }, []);




    return (
        <div className="our-story-comp-main-container"
            style={{
                opacity: props.Scrolling >= '1' && '0',
                zIndex: props.Scrolling < '1' && '2',
                backgroundColor: startingComp && '#000',
            }}
        >
            {/*-----------------------------GIFs-img--------------------------------------------------------  */}


            <img className='expert-guidance-and-support' src={ExpertGuidanceAndSupport} alt=""
                style={{
                    left: expertGuidanceAndSupportHover && `${coords.x}px`,
                    display: expertGuidanceAndSupportHover && 'block'
                    // top: `${coords.y}px`
                }}
            />

            <img className='innovatin-ville' src={InnovationVille} alt=""
                style={{
                    left: innovationVille && `${coords.x}px`,
                    display: innovationVille && 'block'

                    // top: `${coords.y}px`
                }}
            />

            <img className='pitch-catalyst' src={PitchCatalyst} alt=""
                style={{
                    left: pitchCatalyst && `${coords.x}px`,
                    display: pitchCatalyst && 'block'

                    // top: `${coords.y}px`
                }}
            />


            {/*--------------------------------------------------------------------------------------------  */}


            <img src={Vactor} className='bg-masking-img' alt=""
                style={{
                    transform:
                        logoAnime && 'translateY(0%)',
                    width: startingComp && `2000vw`,
                    transition: logoAnime && !startingComp && '0.8s'
                }}
            />

            <div className="top-content-div"
                style={{
                    transform: props.Scrolling >= '1' && 'translateY(-70%)'

                }}
            >
                <h1 className='heading'
                    style={{
                        transform: !startingComp ? 'translate(260%)' :
                            props.Scrolling >= 1 && 'scale(0.6)',
                        color: !startingComp && '#e1ff01',
                    }}
                >
                    Our{' '}
                    <span>Story</span>
                </h1>
                {
                    // --------------------------------------Query False---------------------------
                    !props.Query ?
                        <p
                            style={{
                                transform: !startingComp && 'translate(170%)',
                                color: !startingComp && '#e1ff01',

                            }}
                        >
                            In 2023, amidst the bustling energy of{' '}
                            <b
                                onMouseOver={() => { setInnovationVille(true) }}
                                onMouseOut={() => { setInnovationVille(false) }}
                            >
                                Innovationville
                            </b>
                            , a group of creative<br />
                            entrepreneurs and seasoned professionals united under a shared vision.<br />
                            They recognized that startups often faced challenges in effectively<br />
                            communicating their potential and engaging with their target audiences.<br />
                            Determined to bridge this gap, they founded{' '}
                            <b
                                onMouseOver={() => { setPitchCatalyst(true) }}
                                onMouseOut={() => { setPitchCatalyst(false) }}


                            >Pitch Catalyst
                            </b>
                            —a haven for<br />
                            startups seeking{' '}
                            <b
                                onMouseOver={() => { setExpertGuidanceAndSupportHover(true) }}
                                onMouseOut={() => { setExpertGuidanceAndSupportHover(false) }}

                            >
                                expert guidance and support
                            </b>.
                        </p> :
                        // ----------------------------------------------------------------------------

                        // --------------------------------------Query True---------------------------

                        props.Query &&
                        <p
                            style={{
                                transform: !startingComp && 'translate(170%)',
                                color: !startingComp && '#e1ff01',

                            }}
                        >
                            In 2023, amidst the bustling energy of{' '}
                            <b
                            // onMouseOver={() => { setInnovationVille(true) }}
                            // onMouseOut={() => { setInnovationVille(false) }}
                            >
                                Innovationville
                            </b>
                            , a group of creative<br />
                            entrepreneurs and seasoned professionals united under a shared vision.
                            They recognized that startups often faced challenges in effectively
                            communicating their potential and engaging with their target audiences.
                            Determined to bridge this gap, they founded{' '}
                            <b
                            // onMouseOver={() => { setPitchCatalyst(true) }}
                            // onMouseOut={() => { setPitchCatalyst(false) }}
                            >Pitch Catalyst
                            </b>
                            —a haven for
                            startups seeking{' '}
                            <b
                            // onMouseOver={() => { setExpertGuidanceAndSupportHover(true) }}
                            // onMouseOut={() => { setExpertGuidanceAndSupportHover(false) }}

                            >
                                expert guidance and support
                            </b>.
                        </p>
                    // ----------------------------------------------------------------------------

                }


            </div>

        </div>)
}
