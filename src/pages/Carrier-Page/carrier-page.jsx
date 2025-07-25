import React, { useState, useEffect } from 'react';

//libraries
import Stickyroll from "@stickyroll/react/stickyroll";

//styles
import './carrier-page.scss';

//components
import CarrierPageTopSection from './Carrier-Page-Top-Section/carrier-page-top-section';
import CarrierPageWhyChooseUs from './Carrier-Page-Why-Choose-Us/carrier-page-why-choose-us';
import JoinOurFamilyComp from './Join-Our-Family/join-our-family-comp';
import BrandListComp from '../Home-Page/Brand-List-Comp/brand-list-comp';

export default function CarrierPage(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
        // eslint-disable-next-line
    }, [])

    const [pageProgress, setPageProgress] = useState(0)

    const progress = [
        0.25, 0.5, 0.75
    ]


     useEffect(() => {
        let Title = ''
        let Description = "";
        let Keywords = "";
        let CanonicalLink = "https://pitchcatalyst.com/careers";
        let PageURL = window.location.pathname

        props.HandlePageTitle(Title, Description, CanonicalLink, Keywords, PageURL)
        // eslint-disable-next-line
    }, [])
    return (
        <div className="carrier-page-main-container">
            {/* <p style={{ position: 'fixed', top: '0', color: 'red', zIndex: '10' }}>{pageProgress}</p> */}

            <Stickyroll
                pages={1}
                factor={5}
                onProgress={p => setPageProgress(p)}
            >
                <div className="carrier-page-main">
                    <CarrierPageTopSection PageProgress={pageProgress} Progress={progress} />
                    <CarrierPageWhyChooseUs PageProgress={pageProgress} Progress={progress} />
                    <JoinOurFamilyComp PageProgress={pageProgress} Progress={progress} />

                </div>
            </Stickyroll>
            <BrandListComp />
        </div>
    )
}
