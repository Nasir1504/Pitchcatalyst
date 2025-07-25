import React, { useEffect, useState, useMemo } from 'react';
import './op-comp-one.scss';

// image
import LogoImg from '../../../assets/imgs/pricing/Vector53.png';
export default function OPCompOne(props) {
    // const LogoImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/about-us-page-img/Vector53.svg";


    const [ropeOp, setRopeOp] = useState(false)
    const [waveAnime, setWaveAnime] = useState(false)
    const [isScroll, setIsScroll] = useState(false);


    // --------------------------------------------------------------------------------------

    const numDivs = !props.Query ? 100 : props.Query && 50;
    const waveWidth = numDivs * 5; // Total width of the sine wave in pixels
    const amplitude = waveAnime ? -6 : -1; // Amplitude of the sine wave in pixels
    const frequency = 2; // Number of cycles in the width of the sine wave

    const divElements = [];

    // Generate the div elements with inline style for positioning
    for (let i = 0; i < numDivs; i++) {
        const x = (i * waveWidth) / numDivs;
        const y = amplitude * Math.sin((1.5 * Math.PI * frequency * x) / waveWidth);

        const divStyle = {
            width: !props.Query ? '0.4vw' : props.Query && '1vw',
            height: !props.Query ? '2px' : props.Query && '1px',
            backgroundColor: 'black',
            position: 'absolute',
            left: !props.Query ? `${i * 0.6}vw` : props.Query && `${i * 1.2}vw`, // Horizontal position based on the width of each div
            top: `${1 + y}vw`, // Adjust 50 for vertical centering
            boxShadow: '0.6vw 0.3vw 5px #000',
            transition: props.OPCompScrolling < 0.2 ? 'ease-out 1.5s' :
                props.OPCompScrolling >= 0.2 && 'ease-out 0.5s',
            marginTop: props.OPCompScrolling < 0.2 ? '40%' : props.OPCompScrolling >= 0.2 && '0vw',
            marginLeft: props.OPCompScrolling < 0.2 ? '78%' : props.OPCompScrolling >= 0.2 && '0vw',
            zIndex: '0',
            opacity: ropeOp && props.OPCompScrolling < 0.2 ? '1' : '0',
        };


        divElements.push(<div key={i} style={divStyle} />);
    }

    // --------------------------------------------------------------------------------------


    // --------------------------------------------------------------------------------------


    useEffect(() => {
        // Get the reference to the target div
        const myDiv = document.getElementById('hidden-div');

        // Function to handle the scroll event
        function preventDefaultScroll(event) {
            // Check if the target div is fully visible in the viewport
            // const divRect = myDiv.getBoundingClientRect();
            const fullyVisible = myDiv.offsetTop >= 0;

            // console.log(myDiv.offsetTop)
            // If the div is fully visible, prevent default scroll behavior
            if (fullyVisible) {
                event.preventDefault();
            }
        }
        // Attach the event listener to the scroll event on the window

        window.addEventListener('wheel', preventDefaultScroll, { passive: false });
        window.addEventListener('touchmove', preventDefaultScroll, { passive: false });
        window.addEventListener('keydown', preventDefaultScroll, { passive: false });

        return (() => {
            window.removeEventListener('wheel', preventDefaultScroll, { passive: false });
            window.removeEventListener('touchmove', preventDefaultScroll, { passive: false });
            window.removeEventListener('keydown', preventDefaultScroll, { passive: false });
        })
    }, [])

    // --------------------------------------------------------------------------------------


    useMemo(() => {
        setIsScroll(true)
        setTimeout(() => {
            setRopeOp(true)
        }, 2500)
        setTimeout(() => {
            setWaveAnime(true)
        }, 3000)
        setTimeout(() => {
            setIsScroll(false)
        }, 5000);

    }, [])

    return (
        <div className="op-comp-one-main-container"
            style={{
                zIndex: props.OPCompScrolling < 0.2 ? '1' : props.OPCompScrolling >= 0.2 && '0',

            }}
        >
            <div id="hidden-div"
                style={{
                    top: isScroll && '0'
                }}
            ></div>

            <div className="wave-container"

                style={{
                    transform: waveAnime && !props.Query ? 'translate(-80vw)' :
                        waveAnime && props.Query ? 'translate(-95vw)' : 'translate(0vw)'
                }}
            >
                {divElements}
                <img src={LogoImg}
                    alt=""
                    className="logo-img"
                    style={{
                        animation: props.OnLoadAnime && 'LogoKF 2.5s ease-in-out',
                        transform: props.OnLoadAnime ? ' translateY(0%)' : 'translateY(800%)',

                    }}
                />
                <h1 className="our-pricing-heading"
                    style={{
                        // OPCompScrolling
                        transform: props.OPCompScrolling >= 0.2 && 'scale(4) translateY(250%)',
                        opacity: props.OPCompScrolling >= 0.2 && '0',
                        transition: props.OPCompScrolling < 0.2 ? 'ease-in-out 1.5s' : props.OPCompScrolling >= 0.2 && 'ease-in-out 2s'


                    }}
                >
                    Our<span>&nbsp;Pricing</span>
                </h1>
            </div>

        </div >
    )
}
