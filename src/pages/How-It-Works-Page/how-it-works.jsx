import React, { useEffect } from "react";

//React component
import ReactPlayer from "react-player";


//styles
import "./how-it-works.scss";

const HowItWorksVideo = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/videos/RenderP5.mp4';

export default function HowItWorks(props) {

    const handleOnLoad = () => {
        window.scrollTo(0, 0);

    }

    useEffect(() => {
        handleOnLoad()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        let Title = 'Pitch Catalyst - How It Works'
        let Description = "Discover the power of pitch decks with our comprehensive guide. Start crafting your winning pitch deck today! Just one click know how Pitch Catalyst Works.";
        let Keywords = "pitch deck design, pitch deck value, factors in pitch decks, investor pitch deck, pitch deck define, pitch deck outline, creating a pitch deck";
        let CanonicalLink = "https://pitchcatalyst.com/how-it-works";
        let PageURL = window.location.pathname;

        props.HandlePageTitle(Title, Description, CanonicalLink, Keywords, PageURL)
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="how-it-works-page-main-container">

                <ReactPlayer
                    width="100%"
                    height={!props.Query ? "100%" : props.Query && '50%'}
                    autoPlay
                    controls={true}
                    loop={true}
                    // muted
                    // onStart={setVideoUrl(RscoreVideo)}
                    playing={true}
                    url={HowItWorksVideo}
                    onError={() => { console.log("There is an error with url.") }}

                />

            </div>
        </>
    )
}