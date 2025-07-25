import React, { useState, useEffect } from 'react';
import './our-story-second-comp.scss';

const gifOne = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/add-a-heading.gif';
const gifTwo = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/untitled-design.gif';

export default function OurStorySecondComp(props) {
    const [empowerStartup, setEmpowerStartup] = useState(false);
    const [pitchCatalystTeam, setPitchCatalystTeam] = useState(false);
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
        <div className="our-story-second-comp-main-container"
            style={{
                opacity: props.Scrolling >= '0.2' && props.Scrolling < '1' ? '1' :
                    props.Scrolling >= '1' && '0',
                zIndex: props.Scrolling >= '0.2' && props.Scrolling < '1' && '1',

            }}
        >

            {/*-----------------------------GIFs-img--------------------------------------------------------  */}

            <img className='empower-startups'
                src={gifOne}
                alt=""
                style={{
                    left: empowerStartup && `${coords.x}px`,
                    display: empowerStartup && 'block'

                    // top: `${coords.y}px`
                }}
            />

            <img className='pitch-catalyst'
                src={gifTwo}
                alt=""
                style={{
                    left: pitchCatalystTeam && `${coords.x}px`,
                    display: pitchCatalystTeam && 'block'


                    // top: `${coords.y}px`
                }}
            />

            {/*--------------------------------------------------------------------------------------------  */}

            <div className="main-contant"
                style={{
                    transform: props.Scrolling >= '0.2' && props.Scrolling < '1' ? 'translateY(0%)' :
                        props.Scrolling >= '1' && 'translate(-110%)',
                    height: props.Scrolling >= '0.8' && '50%',
                    borderRadius: props.Scrolling >= '0.8' && '5vw'
                }}
            >
                {
                    !props.Query ?
                        <h2 className='heading'
                            style={{
                                transform: props.Scrolling >= '0.2' && props.Scrolling < '1' && 'scale(1)'
                            }}
                        >
                            <b
                                onMouseOver={() => { setPitchCatalystTeam(true) }}
                                onMouseOut={() => { setPitchCatalystTeam(false) }}
                            >The Pitch Catalyst team</b>, driven by a passion for visual <br />
                            storytelling and a deep understanding of its impact, crafted <br />
                            a dynamic platform to <b
                                onMouseOver={() => { setEmpowerStartup(true) }}
                                onMouseOut={() => { setEmpowerStartup(false) }}
                            >empower startups.</b>
                        </h2>
                        :
                        props.Query &&
                        <h2 className='heading'
                            style={{
                                transform: props.Scrolling >= '0.2' && props.Scrolling < '1' && 'scale(1)'
                            }}
                        >
                            <b
                                // onMouseOver={() => { setPitchCatalystTeam(true) }}
                                // onMouseOut={() => { setPitchCatalystTeam(false) }}
                            >The Pitch Catalyst team</b>, driven by a passion for visual
                            storytelling and a deep understanding of its impact, crafted
                            a dynamic platform to <b
                                // onMouseOver={() => { setEmpowerStartup(true) }}
                                // onMouseOut={() => { setEmpowerStartup(false) }}
                            >empower startups.</b>
                        </h2>

                }

                <hr
                    style={{
                        transform: props.Scrolling >= '0.2' && props.Scrolling < '1' && 'scale(1)'
                    }}
                />
                {
                    !props.Query ?
                        <p
                            style={{
                                transform: props.Scrolling >= '0.2' && props.Scrolling < '1' && 'scale(1)',
                                opacity: props.Scrolling >= '0.2' && props.Scrolling < '1' && '1'
                            }}
                        >
                            They offered a suite of services, ranging from pitch decks and sales decks to investor <br />
                            presentations, ensuring that every client's unique needs were met. The team's expertise in <br />
                            tailoring captivating decks enabled startups to stand out in the competitive landscape and <br />
                            foster <span>meaningful</span> connections with their <span>audience.</span>
                        </p>
                        :
                        props.Query &&
                        <p
                            style={{
                                transform: props.Scrolling >= '0.2' && props.Scrolling < '1' && 'scale(1)',
                                opacity: props.Scrolling >= '0.2' && props.Scrolling < '1' && '1'
                            }}
                        >
                            They offered a suite of services, ranging from pitch decks and sales decks to investor
                            presentations, ensuring that every client's unique needs were met. The team's expertise in
                            tailoring captivating decks enabled startups to stand out in the competitive landscape and
                            foster <span>meaningful</span> connections with their <span>audience.</span>
                        </p>

                }


            </div>


        </div>)
}
