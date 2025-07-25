import React, { useState, useEffect } from 'react';

//styles
import './scroll-down-comp.scss';

export default function ScrollDownComp({ FooterElementDiv }) {


    //GIF
    const scrollDownGIF = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/nav-bar-img/mouse-icon.gif'

    const [scrollDownIconVisibility, setScrollDownIconVisibility] = useState(false)
    const [footerIntersection, setFooterIntersection] = useState(false)

  
    useEffect(() => {
        let ScrollIconTimeOut;

        function handleMouseOverEvent() {
            setScrollDownIconVisibility(true)
            clearTimeout(ScrollIconTimeOut)

            if (scrollDownIconVisibility) {
                ScrollIconTimeOut = setTimeout(() => {
                    setScrollDownIconVisibility(false)
                }, 5000);
            }

        }


        window.addEventListener('wheel', handleMouseOverEvent);
        window.addEventListener('touchmove', handleMouseOverEvent);
        window.addEventListener('keydown', handleMouseOverEvent);
        // window.addEventListener("mousemove", handleMouseOverEvent);

        return (() => {
            window.removeEventListener('wheel', handleMouseOverEvent);
            window.removeEventListener('touchmove', handleMouseOverEvent);
            window.removeEventListener('keydown', handleMouseOverEvent);
            // window.removeEventListener("mousemove", handleMouseOverEvent);
        })

    }, [scrollDownIconVisibility])



    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) =>
                setFooterIntersection(entry.isIntersecting)
            , {
                threshold: 0.1
            }
        );

        observer.observe(FooterElementDiv.current);

        return () => observer.disconnect();
        // eslint-disable-next-line
    }, []);



    //images
    // const mouseNeonIcon = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/nav-bar-img/mouse-neon.png';
    // const mouseBlackIcon = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/nav-bar-img/mouse-black.png';


    return (
        <div className="scroll-down-comp-main-container"
            style={{
                display: footerIntersection ? 'none' : scrollDownIconVisibility && 'none',
                // opacity: props.opacityValue ? '1' : '0'
            }}
        >
            {/* <p style={{ position: 'fixed', top: '15%', color: 'red', zIndex: '20' }}>{footerIntersection.toString()} / {scrollDownIconVisibility.toString()}</p> */}

            <span className="img-icon">
                {/* {props.colorValue === '#000' ?
                    <img src={mouseBlackIcon} alt="" /> :
                    < img src={mouseNeonIcon} alt="" />
                } */}
                <img src={scrollDownGIF} alt="" />
            </span>
            {/* <span className="arrow-down"
                style={{
                    color: props.colorValue,
                    fontWeight: props.colorValue === '#000' && !props.Query ? '400' : props.colorValue === '#000' && props.Query && '500',
                }}
            >
                &#8595;
            </span> */}
        </div>
    )
}
