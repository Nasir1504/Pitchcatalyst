import React, { useState, useMemo } from 'react';

//style
import './join-our-family-comp.scss';

//images
const heading = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/our-family-text.png';
const bgSphare = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Frame915.png';

export default function JoinOurFamilyComp({ PageProgress, Progress }) {

    const progress1 = Progress[2]
    // const progress2 = Progress[3]

    const [sphareAnime, setSphareAnime] = useState(true);

    useMemo(() => {
        if (!sphareAnime && PageProgress > progress1) {
            setTimeout(() => {
                setSphareAnime(true)
            }, 4000);

        } else if (sphareAnime && PageProgress > progress1) {
            setTimeout(() => {
                setSphareAnime(false)
            }, 4000);
        }
// eslint-disable-next-line
    }, [PageProgress, sphareAnime])


    return (
        <div className="join-our-family-comp-main-container"
            style={{
                opacity: PageProgress > progress1 && '1',
                zIndex: PageProgress > progress1 && '1'

                // transform: PageProgress > progress1 && PageProgress < progress2 ? 'translateY(0vh)' :
                //     PageProgress === progress2 && 'translateY(-0vh)',
            }}
        >
            <div className="join-our-family-comp-main">
                <img src={bgSphare} alt="" className="bg-sphare1"
                    style={{
                        transform: sphareAnime && PageProgress > progress1 ? 'translateY(10vh) rotate(-25deg)' :
                            PageProgress < progress1 && 'translate(100vh)'
                    }}
                />
                <img src={bgSphare} alt="" className="bg-sphare2"
                    style={{
                        transform: sphareAnime && 'rotate(-25deg) scale(1.4)'
                    }}
                />
                <img src={bgSphare} alt="" className="bg-sphare3"
                    style={{
                        transform: sphareAnime && 'translate(-2.5vw, 15vh) rotate(-25deg) scale(0.6)'
                    }}
                />

                <img src={heading} alt="" className="our-family-heading"
                    style={{
                        transform: PageProgress > progress1 && 'translate(0) scale(1)'
                    }}
                />

                <div className="apply-now-btn"
                    style={{
                        transform: PageProgress > progress1 && 'translate(0)'
                    }}
                >
                    <a href='https://pitchcatalyst.zohorecruit.in/jobs/Careers' target="_blank" rel='noreferrer'>
                        Apply Now
                    </a>
                </div>




            </div>
        </div>
    )
}
