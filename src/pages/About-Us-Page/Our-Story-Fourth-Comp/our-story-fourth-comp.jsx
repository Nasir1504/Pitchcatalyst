import React, { useState, useEffect } from 'react';
import './our-story-fourth-comp.scss';
import { ImageServer } from '../../../img/imageServer';

import Frame1 from "../../../assets/imgs/about/Frame896.png";
import Frame2 from "../../../assets/imgs/about/Frame896.png";
import Frame3 from "../../../assets/imgs/about/Frame896.png";

// const Frame1 = `${ImageServer}img/Pitch-Catalyst/about-us-page-img/component205.png`;
// const Frame2 = `${ImageServer}img/Pitch-Catalyst/about-us-page-img/component206.png`;
// const Frame3 = `${ImageServer}img/Pitch-Catalyst/about-us-page-img/component207.png`;

export default function OurStoryFourthComp(props) {
    const [slideCount, setSlideCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            slideCount === 2 ? setSlideCount(0) : setSlideCount(slideCount + 1)
        }, 3000);

    }, [slideCount])
    return (
        <div className="our-story-fourth-comp-main-container"
            style={{
                opacity: props.Scrolling >= '0.2' && '1',
                zIndex: props.Scrolling >= '0.2' && props.Scrolling < '1' && '1',

            }}
        >
            <hr className='bottom-hr'
                style={{
                    opacity: props.ScrollFifth
                }}
            />

            <div className="main-container"
                style={{
                    transform: props.Scrolling >= '0.2' && 'translate(0% ,0%)'

                }}
            >
                {
                !props.Query ?

                    <div className="sliding-img-div"
                        style={{
                            transform: props.Scrolling >= '0.8' && 'scale(0.4)'
                        }}
                    >
                        <img className='img1 img' src={Frame1} alt="" style={{
                            opacity: slideCount === 0 && '1'
                        }} />
                        <img className='img2 img' src={Frame2} alt="" style={{
                            opacity: slideCount === 1 && '1'
                        }} />
                        <img className='img3 img' src={Frame3} alt="" style={{
                            opacity: slideCount === 2 && '1'
                        }} />

                    </div>

                    :

                    props.Query &&

                    <div className="sliding-img-div"
                        style={{
                            transform: props.Scrolling >= '0.8' && 'scale(0.6)',
                            marginTop : props.Scrolling >= '0.8' && '-50%'
                        }}
                    >
                        <img className='img1 img' src={Frame1} alt="" style={{
                            opacity: slideCount === 0 && '1'
                        }} />
                        <img className='img2 img' src={Frame2} alt="" style={{
                            opacity: slideCount === 1 && '1'
                        }} />
                        <img className='img3 img' src={Frame3} alt="" style={{
                            opacity: slideCount === 2 && '1'
                        }} />

                    </div>
                }

                <div className="contant-div"
                    style={{
                        opacity: props.Scrolling >= '0.8' && '1'
                    }}
                >
                    {
                        !props.Query ?
                            <p>
                                <span>The Pitch Catalyst</span> headquarters also evolved into a vibrant hub <br />
                                of resources and tools, equipping startups with the knowledge <br />
                                and inspiration they <span>needed to thrive.</span>
                            </p>
                            :
                            props.Query &&
                            <p>
                                <span>The Pitch Catalyst</span> headquarters also evolved into a vibrant hub
                                of resources and tools, equipping startups with the knowledge
                                and inspiration they <span>needed to thrive.</span>
                            </p>
                    }

                </div>
            </div>

        </div>)
}
