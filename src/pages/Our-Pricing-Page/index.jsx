import React, { useState, useEffect } from 'react';

//Dependency
import { Stickyroll } from '@stickyroll/react';

// components
import OPCompOne from './OP-Comp-One/op-comp-one';
import OPCompTwo from './OP-Comp-Two/op-comp-two';
import OPCompThree from './OP-Comp-Three/op-comp-three';

// style
import './style.scss';

// images
import LogoImgBG1 from "../../assets/imgs/pricing/Vector5_3.png";
import LogoImgBG2 from "../../assets/imgs/pricing/Vector5_31.png";
import LogoImgBG3 from "../../assets/imgs/pricing/Vector5_32.png";
import LogoImgBG4 from "../../assets/imgs/pricing/Vector5_33.png";
import LogoImgBG5 from "../../assets/imgs/pricing/Vector5_34.png";
import LogoImgBG6 from "../../assets/imgs/pricing/Vector 5_35.png";




export default function OurPricingPage(props) {

    const [onLoadAnime, setOnLoadAnime] = useState();
    const [scrolling, setScrolling] = useState(0);

    // eslint-disable-next-line
    const [clientHgt, setClientHgt] = useState(document.documentElement.offsetHeight);
    const [OPCompScrolling, setOPCompScrolling] = useState(0)


    useEffect(() => {
        window.scrollTo(0, 0);
        setOnLoadAnime(true);

        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        const handleScroll = event => {

            // setScrolling(window.scrollY);
            const position = window.scrollY;

            let scrollCount = 0; // from what value we started scrolling.
            let scrollHeight = (clientHgt * 0.102775);  // according to window height.

            const OPScrolling = position >= scrollCount && position <= scrollCount + scrollHeight * 6 ? '0' :
                position >= scrollCount + scrollHeight * 6 && position <= scrollCount + scrollHeight * 12 ? 0.2 :
                    position >= scrollCount + scrollHeight * 12 && position <= scrollCount + scrollHeight * 20 ? 0.3 :
                        position >= scrollCount + scrollHeight * 20 && position <= scrollCount + scrollHeight * 26 ? 0.4 :
                            position >= scrollCount + scrollHeight * 26 && position <= scrollCount + scrollHeight * 32 ? 0.6 :
                                position >= scrollCount + scrollHeight * 32 && position <= scrollCount + scrollHeight * 38 ? 0.8 :
                                    position >= scrollCount + scrollHeight * 38 && position <= scrollCount + scrollHeight * 44 ? 1 :
                                        position >= scrollCount + scrollHeight * 44 && position <= scrollCount + scrollHeight * 50 ? 1.2 :
                                            position >= scrollCount + scrollHeight * 50 && 1.3;


            setOPCompScrolling(OPScrolling)
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line 
    }, []);




    const [currentAddress, setCurrentAddress] = useState("IN")

    useEffect(() => {
        const fetchIp = async () => {
            try {
                const response = await fetch("https://geolocation-db.com/json/62d8d690-e7b8-11ed-8c81-cbb990727ab5");
                const data = await response.json();
                setCurrentAddress(data.country_code);
            } catch (error) {
                console.error(error);
            }
        };
        fetchIp()

    }, [onLoadAnime])


    useEffect(() => {
        let Title = 'Affordable Pitch Deck Design Cost - Pitch Catalyst'
        let Description = "Affordable pitch deck design cost for striking presentations. Don't miss this opportunity to make a lasting impression & secure funding you need to succeed.";
        let Keywords = "pitch deck price, custom pitch deck price, pitch deck design cost, pitch deck price in india, pitch deck pricing";
        let CanonicalLink = "https://pitchcatalyst.com/our-pricing";
        let PageURL = window.location.pathname

        props.HandlePageTitle(Title, Description, CanonicalLink, Keywords, PageURL)
        // eslint-disable-next-line
    }, [onLoadAnime])



    return (
        <div className="our-pricing-page-main-container">
            <p style={{ position: 'fixed', color: 'white', top: '20%', left: '1%', zIndex: '10' }}>{scrolling.toString()} / {OPCompScrolling.toString()}</p>

            <Stickyroll pages={1.5} factor={4}>
                <div className="main-container"
                    style={{
                        background: OPCompScrolling < 0.2 ? '#E1FF00' :
                            OPCompScrolling >= 0.2 && OPCompScrolling < 0.4 ? '#000' :
                                OPCompScrolling >= 0.4 && 'radial-gradient(23.86% 23.86% at 50.00% 50.04%, rgba(0, 0, 0, 0.83) 0%, #070707 100%)'
                    }}
                >

                    {/* <img src={LogoImgBG1} alt="" className="bg-logo-img1"
                        style={{
                            opacity: OPCompScrolling === 0.4 ? '0' :
                                OPCompScrolling === 0.6 ? '1' :
                                    OPCompScrolling >= 0.8 && '0',

                            transform: OPCompScrolling === 0.2 ? 'rotate(0deg) translate(13%, 7%)' :
                                OPCompScrolling === 0.3 ? 'rotate(90deg) translate(0%, -10%)' :
                                    !props.Query && OPCompScrolling === 0.4 ? 'rotate(180deg) translate(-13%, 6.5%)' :
                                        !props.Query && OPCompScrolling === 0.6 ? 'rotate(90deg) translate(0%, -10%)' :
                                            !props.Query && OPCompScrolling >= 0.8 ? 'rotate(0deg) translate(12.8%, 6.8%)' :

                                                props.Query && OPCompScrolling === 0.4 ? 'rotate(180deg) translate(-13%, 6.5%) scale(2)' :
                                                    props.Query && OPCompScrolling === 0.6 ? 'rotate(90deg) scale(2)' :
                                                        props.Query && OPCompScrolling >= 0.8 && 'rotate(0deg) translate(12.8%, 6.8%) scale(2)'

                        }}
                    />
                    <img src={LogoImgBG2} alt="" className="bg-logo-img2"
                        style={{
                            opacity: OPCompScrolling >= 0.2 && OPCompScrolling < 0.4 ? '1' : OPCompScrolling === 1 && '1',
                            transform:
                                OPCompScrolling === 0.2 ? 'rotate(-90deg)' :
                                    OPCompScrolling === 0.3 ? 'rotate(0deg) translate(-5%,10%)' :
                                        !props.Query && OPCompScrolling >= 0.4 ? 'rotate(90deg)' :
                                            props.Query && OPCompScrolling === 0.4 ? 'rotate(90deg) scale(2)' :
                                                props.Query && OPCompScrolling >= 0.6 && OPCompScrolling < 1 ? 'rotate(0deg) scale(2)' :
                                                    props.Query && OPCompScrolling >= 1 && 'rotate(90deg) scale(1)',

                        }}
                    />
                    <img src={LogoImgBG3} alt="" className="bg-logo-img3"
                        style={{
                            opacity: OPCompScrolling === 0.4 ? '0.5' :
                                OPCompScrolling === 0.6 ? '0' :
                                    OPCompScrolling === 0.8 ? '0.5' :
                                        OPCompScrolling >= 1 && '0',

                            transform: !props.Query && OPCompScrolling >= 0.4 && OPCompScrolling < 0.8 ? 'rotate(90deg)' :
                                !props.Query && OPCompScrolling >= 0.8 ? 'rotate(0deg) translate(0%, 0%)' :
                                    props.Query && OPCompScrolling >= 0.4 && OPCompScrolling < 0.8 ? 'rotate(90deg) scale(1)' :
                                        props.Query && OPCompScrolling >= 0.8 && 'rotate(0deg) translate(0%,16%) scale(2)'
                        }}
                    />
                    <img src={LogoImgBG4} alt="" className="bg-logo-img4"
                        style={{
                            opacity: OPCompScrolling === 0.6 ? '0.5' :
                                OPCompScrolling >= 0.8 && OPCompScrolling < 1 ? '0' :
                                    OPCompScrolling >= 1 && '0',
                            transform:
                                OPCompScrolling < 0.6 ? 'translate(0%, 0%) rotate(90deg)' :
                                    !props.Query && OPCompScrolling === 0.6 ? 'rotate(180deg) translate(-15%, 0%)' :
                                        !props.Query && OPCompScrolling >= 0.8 ? 'rotate(90deg) translate(0%, 0%)' :
                                            props.Query && OPCompScrolling === 0.6 ? 'rotate(180deg) translate(-14%, 7.5%) scale(2)' :
                                                props.Query && OPCompScrolling >= 0.8 && 'rotate(90deg) translate(0%, 0%) scale(2)'


                        }}
                    />
                    <img src={LogoImgBG5} alt="" className="bg-logo-img5"
                        style={{
                            opacity: !props.Query && OPCompScrolling >= 0.8 && OPCompScrolling < 1.2 ? '1' :
                                !props.Query && OPCompScrolling >= 1.2 ? '0' :
                                    props.Query && OPCompScrolling >= 0.8 && OPCompScrolling < 1 ? '1' :
                                        props.Query && OPCompScrolling === 1 && '1',

                            transform:
                                !props.Query && OPCompScrolling === 0.8 ? 'rotate(-90deg) translate(0%, 0%)' :
                                    !props.Query && OPCompScrolling >= 1 ? 'rotate(180deg) translate(80%, -1%) scale(0.6)' :
                                        props.Query && OPCompScrolling === 0.6 ? 'rotate(0deg) translate(0%, 16%) scale(2)' :
                                            props.Query && OPCompScrolling === 0.8 ? 'rotate(-90deg) translate(-20.5%, 8%) scale(2)' :
                                                props.Query && OPCompScrolling >= 1 && 'rotate(0deg) translate(0%, 10%) scale(1)',



                            animation: !props.Query && OPCompScrolling >= 1 && 'BGLogoImgKF5 3s ease-out'

                        }}
                    /> */}

                    <div className="logo-rotations"
                        style={{
                            opacity: OPCompScrolling >= 1.2 && '0'
                        }}
                    >
                        <div className="inner-section"
                            style={{
                                transform: OPCompScrolling === 0.2 ? 'rotate(0deg)' :
                                    OPCompScrolling === 0.3 ? 'rotate(90deg)' :
                                        !props.Query && OPCompScrolling === 0.4 ? 'rotate(180deg) ' :
                                            !props.Query && OPCompScrolling === 0.6 ? 'rotate(90deg)' :
                                                !props.Query && OPCompScrolling >= 0.8 ? 'rotate(0deg)' :

                                                    props.Query && OPCompScrolling === 0.4 ? 'rotate(180deg)' :
                                                        props.Query && OPCompScrolling === 0.6 ? 'rotate(90deg)' :
                                                            props.Query && OPCompScrolling >= 0.8 && 'rotate(0deg)'

                            }}
                        >

                            <img src={LogoImgBG1} alt="" className='logo-img logo1'
                                style={{
                                    opacity: !props.Query && OPCompScrolling === 0.2 && '1',
                                    transform: !props.Query && OPCompScrolling >= 0.2 && "rotate(90deg)"

                                }}
                            />
                            <img src={LogoImgBG2} alt="" className='logo-img logo2'
                                style={{
                                    opacity: !props.Query && OPCompScrolling >= 0.2 && OPCompScrolling < 0.4 ? "1" :
                                        !props.Query && OPCompScrolling >= 0.6 && OPCompScrolling < 0.8 && '1',
                                    transform: !props.Query && OPCompScrolling >= 0.4 && " scale(1.4) rotate(90deg)"

                                }}
                            />
                            <img src={LogoImgBG3} alt="" className='logo-img logo3'
                                style={{
                                    opacity: !props.Query && OPCompScrolling >= 0.8 && '1',
                                    transform: !props.Query && OPCompScrolling >= 0.6 && " scale(1.4) rotate(90deg)"

                                }}
                            />
                            <img src={LogoImgBG4} alt="" className='logo-img logo4'
                                style={{
                                    opacity: !props.Query && OPCompScrolling === 0.4 && '1',
                                    transform: !props.Query && OPCompScrolling >= 0.4 && "scale(1.4) rotate(90deg)"

                                }}
                            />
                            <img src={LogoImgBG5} alt="" className='logo-img logo5'
                                style={{
                                    opacity: !props.Query && OPCompScrolling === 0.3 && '1',
                                    transform: !props.Query && OPCompScrolling >= 0.3 && "rotate(90deg)"

                                }}
                            />
                            <img src={LogoImgBG6} alt="" className='logo-img logo6'
                                style={{
                                    opacity: !props.Query && OPCompScrolling >= 0.4 && '1',
                                    transform: !props.Query && OPCompScrolling >= 0.4 && "scale(1.4)"

                                }}
                            />



                        </div>
                    </div>

                    <OPCompOne OnLoadAnime={onLoadAnime} OPCompScrolling={OPCompScrolling} Query={props.Query} />
                    <OPCompTwo OnLoadAnime={onLoadAnime} OPCompScrolling={OPCompScrolling} Query={props.Query} CountryCode={currentAddress} />
                    <OPCompThree OPCompScrolling={OPCompScrolling} Query={props.Query} />


                </div>
            </Stickyroll >
        </div >
    )
}
