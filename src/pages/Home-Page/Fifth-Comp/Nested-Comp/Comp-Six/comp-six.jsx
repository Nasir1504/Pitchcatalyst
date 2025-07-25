import React, { useState, useEffect } from 'react';
import './comp-six.scss';

import GraphV from "../../../../../assets/imgs/home-page/graph-vector.png";
import GraphV2 from "../../../../../assets/imgs/home-page/graph-vector2.png";


export default function CompSix(props) {
    const [compOneAnime, setCompOneAnime] = useState(false)
    const [graphMap, setGraphMap] = useState(false)


    function handleGraphMap() {
        graphMap ? setGraphMap(false) : setGraphMap(true)
    }

    useEffect(() => {
        setTimeout(handleGraphMap, 4000)
        // eslint-disable-next-line 
    }, [graphMap])

    const handleMouseEvent = () => {
        setCompOneAnime(prev => !prev)
    }
    return (
        <div className="comp-six-main-container"
            onMouseOver={handleMouseEvent}
            onMouseOut={handleMouseEvent}
        >
            <div className="after-div">
                <h4>Graph <span>View</span></h4>
                {/* <h4 style={{visibility: "hidden"}}>{graphMap.toString()}</h4> */}
                <p>Easy to understand your deck performance.</p>
                <div className="graph-div">
                    <div className="mask-div">
                        <img src={GraphV2} alt="" />
                    </div>
                    <div className="mask-div"
                        style={{
                            width: graphMap && '0%',
                            // backgroundColor: '#fff',

                        }}
                    >
                        <img src={GraphV} alt="" />

                    </div>
                </div>
            </div>

            <div className="before-div"
                style={{
                    animation: !props.Query && compOneAnime ? 'rotate 2s infinite linear alternate-reverse' :
                        props.Query && !compOneAnime && 'rotate 4s infinite linear alternate-reverse',

                }}
            >

            </div>
        </div>)
}
