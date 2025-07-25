import React, { useState, useEffect } from 'react';

// style
import "./navbar-comp.scss";

// components
import NavbarOneComp from './Nested-Comp/NavBar-One-Comp/navbar-one-comp';
import NavbarTwoComp from './Nested-Comp/NavBar-Two-Comp/navbar-two-comp';

export default function NavbarComp(props) {

    // const WhatsappIcon1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/nav-bar-img/whatsapp_green.svg';
    // const WhatsappIcon2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/nav-bar-img/whatsapp_neon.svg';

    const [scrolling, setScrolling] = useState(0);
    const [clientHgt, setClientHgt] = useState(document.documentElement.offsetHeight);
    // const [whatsAppState, setWhatsAppState] = useState(false);

    // function handleWhatsAppHover() {
    //     setWhatsAppState(p => !p)
    // }

    useEffect(() => {
        const handleScroll = (event) => {
            setScrolling(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolling]);


    useEffect(() => {
        const resizeViewPort = () => {
            setClientHgt(document.documentElement.offsetHeight)
        }

        window.addEventListener("resize", resizeViewPort)

        return () => {
            window.removeEventListener("resize", resizeViewPort)
        }
    }, []);


    return (
        <div className='navbar-comp-main-container'>
            <div className="horizontal-scroll-bar"
                style={{
                    paddingLeft: window.location.pathname === '/' ? `${scrolling / clientHgt * 4.5}%` :
                        window.location.pathname === '/about-us' ? `${scrolling / clientHgt * 15.2}%` :
                            window.location.pathname === '/differentiator' ? `${scrolling / clientHgt * 16}%` :
                                window.location.pathname === '/our-pricing' && `${scrolling / clientHgt * 15.2}%`,

                    opacity: window.location.pathname !== '/' && window.location.pathname !== '/about-us' && window.location.pathname !== '/our-pricing' && window.location.pathname !== '/differentiator' && '0'
                }}
            >
                <div className="padding-div"></div>
            </div>
            {/* <div className="whatsapp-div">
                <div className="inner-div">
                    <a href="https://wa.me/9711750002?text=Hey there, seeking deck expertise! " target="_blank" rel="noreferrer" >
                        <img src={WhatsappIcon2} alt="" className="whatsapp-icon" />
                    </a>
                </div>
            </div> */}

            {
                !props.Query ?
                    <NavbarOneComp HandlePageScrolling={props.handlePageScrolling} HandleCurrentPage={props.handleCurrentPage} CompTrigger={props.CompTrigger}/>
                    :
                    props.Query &&
                    <NavbarTwoComp HandlePageScrolling={props.handlePageScrolling} HandleCurrentPage={props.handleCurrentPage} CompTrigger={props.CompTrigger}/>
            }

        </div>
    )
}
