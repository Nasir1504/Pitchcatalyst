import React, { useState } from "react";
import ReactPlayer from "react-player";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "./competition-comp.scss";


const Competition = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/videos/PacManRender.mp4';
export default function CompetitionComp() {

    const [playPause, setPlayPause] = useState(false);

    function handleTrueEvents() {
        setPlayPause(true)

    }
    function handleFalseEvents() {
        setPlayPause(false)

    }
    function handleHoverEvents() {
        setPlayPause(prev => {
            return !prev;
        })
    }
    return (
        <>
            <div className="competition-comp-main-container">
                <div className="hidden1-div"
                    onMouseEnter={handleTrueEvents}
                    onMouseLeave={handleFalseEvents}
                    onClick={handleHoverEvents}
                ></div>
                <div className="hidden2-div">
                    {
                        !playPause && <div className="play-icon-div"><PlayArrowIcon className="play-icon" /></div>
                    }
                </div>

                <ReactPlayer
                    // onMouseEnter={handleHoverEvents}
                    width="100%"
                    height="104%"
                    autoPlay
                    controls={true}
                    loop={true}
                    // muted
                    // onStart={setVideoUrl(RscoreVideo)}

                    playing={playPause}
                    url={Competition}
                    onError={() => { console.log("There is an error with url.") }}

                />

            </div>
        </>
    );
}