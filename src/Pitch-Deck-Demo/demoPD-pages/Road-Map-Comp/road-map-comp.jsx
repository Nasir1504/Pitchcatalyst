import React, { useState } from "react";
import ReactPlayer from "react-player";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "./road-map-comp.scss";

const RoadMap = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/demo-deck-img/videos/RoadMap.mp4';

export default function RoadMapComp() {

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
            <div className="road-map-comp-main-container">
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
                    url={RoadMap}
                    onError={() => { console.log("There is an error with url.") }}

                />

            </div>
        </>
    )
}