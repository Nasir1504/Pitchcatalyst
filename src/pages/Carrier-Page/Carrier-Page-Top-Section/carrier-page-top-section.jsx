import React, { useState, useEffect } from 'react';

//styles
import './carrier-page-top-section.scss';

//images
const whiteTubeLight = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame889.png';
const neonTubeLight = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame890.png';
const whiteLight = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Vector1103.png';
const neonLight = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Vector1335.png';
const logoPart1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame836.png';
const logoPart2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame837.png';
const logoPart3 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame891.png';
const logoPart4 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame892.png';
const logoPart5 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame893.png';

const searchBar = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame894.png';
const scrollDownBar = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame896.png';
const searchJobsText = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/search-jobs-text.png';




export default function CarrierPageTopSection({ PageProgress, Progress }) {

    // eslint-disable-next-line
    const progress1 = Progress[0]

    const [lightVisibility, setLightVisibility] = useState(false)
    const [onloadContent, setOnLoadContent] = useState(false)
    const [logoExpansion, setLogoExpansion] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLightVisibility(true)
        }, 500);
        // eslint-disable-next-line
    }, [])
    useEffect(() => {

        lightVisibility && setTimeout(() => {
            setOnLoadContent(true)
        }, 3000);

    }, [lightVisibility])

    useEffect(() => {

        onloadContent && setTimeout(() => {
            setLogoExpansion(true)
        }, 3000);

    }, [onloadContent])

    return (
        <div className="carrier-page-top-section-main-container"
            style={{
                zIndex: PageProgress > progress1 && 0
            }}
        >
            <div className="tube-light-section"
                style={{
                    marginTop: lightVisibility && PageProgress < progress1 && '-75vh',
                    opacity: lightVisibility && PageProgress < progress1 && '1'
                }}
            >
                <img src={whiteTubeLight} alt="" className="white-lamp"
                    style={{
                        opacity: onloadContent && '0'
                    }} />
                <img src={neonTubeLight} alt="" className="neon-lamp"
                    style={{
                        opacity: onloadContent && '1'
                    }}
                />
                <img src={whiteLight} alt="" className="white-light"
                    style={{
                        opacity: lightVisibility && !onloadContent && '1'
                    }}
                />
                <img src={neonLight} alt="" className="neon-light"
                    style={{
                        opacity: onloadContent && '1'
                    }}
                />
            </div>

            <div className="logo-container"
                style={{
                    transform: onloadContent && 'translateY(0)'
                }}
            >

                <img src={logoPart1} alt="" className="logo-part1"
                    style={{
                        marginTop: onloadContent && '0',
                        transform: logoExpansion && PageProgress < progress1 ? 'translate(-20vw)' :
                            PageProgress > progress1 && 'translate(-100vw)'
                    }}
                />
                <img src={logoPart2} alt="" className="logo-part2"
                    style={{
                        marginTop: onloadContent && '0',
                        transform: logoExpansion && PageProgress < progress1 ? 'translate(-18vw)' :
                            PageProgress > progress1 && 'translate(-100vw)'

                    }}
                />
                <img src={logoPart3} alt="" className="logo-part3"
                    style={{
                        marginTop: onloadContent && '0',
                        transition: logoExpansion && '1.5s ease-out',
                        opacity: logoExpansion && '0'

                    }}
                />
                <img src={logoPart4} alt="" className="logo-part4"
                    style={{
                        marginTop: onloadContent && '0',
                        transform: logoExpansion && PageProgress < progress1 ? 'translate(18vw)' :
                            PageProgress > progress1 && 'translate(100vw)'
                    }}
                />
                <img src={logoPart5} alt="" className="logo-part5"
                    style={{
                        marginTop: onloadContent && '0',
                        transform: logoExpansion && PageProgress < progress1 ? 'translate(20vw)' :
                            PageProgress > progress1 && 'translate(100vw)'
                    }}
                />


            </div>

            <div className="search-bar-div"
                style={{
                    transform: onloadContent && PageProgress < progress1 ? 'translateY(6vh)' :
                        PageProgress > progress1 && 'translateY(6vh) scale(0)',
                    marginTop: logoExpansion && '0',

                }}
            >
                <img src={searchJobsText} alt="" className="search-jobs-text-img" />
                <img src={scrollDownBar} alt="" className="scroll-down-img"
                    style={{
                        transform: logoExpansion && 'scale(1)',
                        opacity: logoExpansion && '1'

                    }}
                />
                <img src={searchBar} alt="" className="search-bar-img"
                    style={{
                        transform: !logoExpansion && 'scale(1)',
                        opacity: logoExpansion && '0'
                    }}
                />
            </div>
        </div>
    )
}
