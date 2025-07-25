import React, { useState, useEffect, useRef, useMemo } from 'react';
import './ai-comp.scss';
import AISubComp from './Nested-Comp/AI-Sub-Comp/ai-sub-comp';
import AISubCompTwo from './Nested-Comp/AI-Sub-Comp-Two/ai-sub-comp-two';



export default function AIComp(props) {
    const lampONImg = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/group560.png';
    const lampOffImg = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/group561.png';
    const Logo = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/logo-neon.svg';

    const lampOnImgMobile = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/lamp-white.svg';

    // const lampOffMobile = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/lamp-neon.svg';

    const [isScroll, setIsScroll] = useState(false);
    const [prevTrigger, setPrevTrigger] = useState(false)
    const [animePlay, setAnimePlay] = useState(false);
    const elementRef = useRef(null);
    const [bgContentOpacity, setBGContentOpacity] = useState(false);
    const [logoVisibility, setLogoVisibility] = useState(true)


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) =>
                setAnimePlay(entry.isIntersecting)
            , {
                threshold: 0.9
            }
        );
        observer.observe(elementRef.current);

        return () => observer.disconnect();


    }, [props.CompOpacity]);

    useEffect(() => {
        if (animePlay) {
            setTimeout(() => {
                setBGContentOpacity(true)
            }, 400)

            setTimeout(() => {
                setLogoVisibility(false)
            }, 1400)
        }
        // eslint-disable-next-line
    }, [props.CompOpacity])


    useEffect(() => {
        // Get the reference to the target div
        const myDiv = document.getElementsByClassName('hidden-div');

        // Function to handle the scroll event
        function preventDefaultScroll(event) {
            // Check if the target div is fully visible in the viewport
            // const divRect = myDiv.getBoundingClientRect();
            const fullyVisible = myDiv[0].offsetTop >= 0 && myDiv[0].offsetLeft >= 0;

            // console.log(myDiv)
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
    }, [animePlay])

    useMemo(() => {
        if (animePlay && !prevTrigger) {
            setIsScroll(true);
            setTimeout(() => {
                setIsScroll(false);
                setPrevTrigger(true)
            }, 2500);
        }
        // eslint-disable-next-line
    }, [animePlay])

// props.Progress

    return (
        <div className="ai-comp-main-container" ref={elementRef}>
            {/* <p style={{position: 'fixed', top: '15%', color: '#fff', zIndex: '5'}}>{props.Progress}</p> */}
            <img
                src={!props.Query ? lampONImg : props.Query && lampOnImgMobile}
                alt="" className="lamp-on-img"
                style={{
                    opacity: animePlay ? '1' : '0',
                    display: !logoVisibility && 'none'
                }}
            />


            <img
                src={!props.Query ? lampOffImg : props.Query && ''}
                alt="" className="lamp-off-img"
                style={{
                    opacity: animePlay ? '0' : '1',
                    display: !logoVisibility && 'none'

                }}
            />

            <div className="hidden-div"
                style={{
                    top: isScroll && '0'
                }}
            ></div>

            <div className='on-load-heading'
                style={{
                    transform: animePlay && 'translateX(-150%)'
                }}
            >AI</div>
            <img src={Logo} alt="" className="logo-img"
                style={{
                    transform: animePlay && props.CompOpacity < 0.2 ? 'translateY(0%) scale(1.2)' :
                        props.CompOpacity >= 0.2 && animePlay && 'translate(150%, 750%) scale(100)',
                    opacity: props.CompOpacity >= 0.2 && '0',
                    display: !logoVisibility && 'none'


                }}
            />
            <div className="main-container"
                style={{
                    backgroundColor: props.CompOpacity >= 0.2 && bgContentOpacity && '#e1ff01',
                    opacity: props.CompOpacity >= 0.2 && bgContentOpacity ? '1' : logoVisibility && '0'
                }}
            >
                {
                    !props.Query ?
                        <AISubComp BGContentOpacity={bgContentOpacity} CompAIOpacity={props.CompOpacity} Query={props.Query} />
                        :
                        props.Query &&
                        <AISubCompTwo BGContentOpacity={bgContentOpacity} CompAIOpacity={props.CompOpacity} Query={props.Query} />
                }
            </div>
        </div>
    )
}
