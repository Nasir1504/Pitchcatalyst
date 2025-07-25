import React, { useState, useEffect, useMemo } from 'react';
import './eleventh-comp.scss';
import MockupComp from './Nested-Comp/mockup-comp';
import { ImageServer } from '../../../img/imageServer';
import BottomGradient from '../../../components/Bottom-Gradiant/bottom-gradient';
// import LeftMenu from '../../../components/EditPD-Comp/Left-Menu/left-menu';
import { Link } from 'react-router-dom';




import LampOn from "../../../assets/imgs/home-page/Group679.png"; 
import LampOff from "../../../assets/imgs/home-page/group561.png";



// const LampOn = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/group560.png';
// const LampOff = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/group561.png';
const Logo = `${ImageServer}img/Pitch-Catalyst/home-page-imgs/logo1.png`;


export default function EleventhComp(props) {
    const CursorIcon = `${ImageServer}img/Pitch-Catalyst/home-page-imgs/cursor-img.png`;
    // const logo2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/nav-bar-img/frame577.png'


    const [cursorOne, setCursorOne] = useState(true)
    const [animePlay, setAnimePlay] = useState(false);
    const [searchBar, setsearchBar] = useState(false);
    const [lampOn, setLampOn] = useState(false);
    const [afterSearch, setAfterSearch] = useState(false);
    const [searchBarBtn, setSearchBarBtn] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        props.CompOpacity >= 0.2 && setIsTyping(true)

        if (isTyping) {
            setsearchBar(true)
            !animePlay && setTimeout(() => {
                setLampOn(true)
                typeWriterMemo()

            }, 1000)
            setTimeout(() => {
                setAnimePlay(true)
            }, 100)
        }
        // eslint-disable-next-line
    }, [props.CompOpacity, isTyping])

    let a = 0;
    const txt = 'Create Subdomain';
    const typeWriterMemo = useMemo(() => {
        function typeWriter() {
            if (a < txt.length) {
                document.getElementById("search-bar-text").innerHTML += txt.charAt(a);
                a++;
                setTimeout(typeWriter, 80);

                if (a === txt.length) {
                    setCursorOne(false);

                    setTimeout(() => {
                        setSearchBarBtn(true)
                    }, 1000);

                    setTimeout(() => {
                        setAfterSearch(true)
                    }, 1500);

                }
            }
        }

        return typeWriter;
        // eslint-disable-next-line
    }, [animePlay])
    // function typeWriter() {
    //     if (a < txt.length) {
    //         document.getElementById("search-bar-text").innerHTML += txt.charAt(a);
    //         a++;
    //         setTimeout(typeWriter, 80);

    //         if (a === txt.length) {
    //             setCursorOne(false);

    //             setTimeout(() => {
    //                 setSearchBarBtn(true)
    //             }, 1000);

    //             setTimeout(() => {
    //                 setAfterSearch(true)
    //             }, 1500);

    //         }
    //     }
    // }

    return (
        <div className="eleventh-comp-main-container"
            style={{
                opacity: props.CompOpacity >= '0.2' && props.CompOpacity < '1' ? '1' :
                    props.CompOpacity >= '1' && '1',
                zIndex: props.CompOpacity >= '0.2' && props.CompOpacity < '1' ? '1' :
                    props.CompOpacity >= '1' && '1'
            }}
        >
            <img src={CursorIcon} alt="" className="mouse-pointer"
                style={{
                    transform: props.CompOpacity >= '0.2' && !cursorOne && !props.Query ? 'translate(280%, -900%)' :
                        props.CompOpacity >= '0.2' && !cursorOne && props.Query && 'translate(200%, -1220%)',
                    top: !props.Query ? '60%' : props.Query && '180vw',
                    opacity: props.CompOpacity >= '0.2' && !cursorOne && !afterSearch ? '1' :
                        props.CompOpacity >= '0.2' && !cursorOne && afterSearch && '0',

                    // opacity: '1'
                }}
            />

            <div className="bg-text-div"
                style={{
                    opacity: afterSearch && '0'
                }}
            >
                <div className='custom-sd-headind'>CUSTOM SUB-DOMAINS</div>
                <div className='custom-sd-headind'>CUSTOM SUB-DOMAINS</div>
                <div className='custom-sd-headind'>CUSTOM SUB-DOMAINS</div>
                <div className='custom-sd-headind'>CUSTOM SUB-DOMAINS</div>
            </div>
            <div className="bg-text2-div"
                style={{
                    transform: afterSearch && 'rotate(90deg) translate(-20%, -70%)',
                    opacity: !afterSearch && '0'

                }}
            >
                <div className='custom-sd-headind'>CUSTOM SUB-DOMAINS</div>
                <div className='custom-sd-headind'>CUSTOM SUB-DOMAINS</div><br /><br />
                <div className='custom-sd-headind'>CUSTOM SUB-DOMAINS</div>
                <div className='custom-sd-headind'>CUSTOM SUB-DOMAINS</div>
                <div className='custom-sd-headind'>CUSTOM SUB-DOMAINS</div><br /><br />
                <div className='custom-sd-headind'>CUSTOM SUB-DOMAINS</div>
                <div className='custom-sd-headind'>CUSTOM SUB-DOMAINS</div>

            </div>

            <div className='heading'
                style={{
                    transform: afterSearch && !props.Query ? 'scale(0.80) translateX(-97%)' :
                        afterSearch && props.Query && 'scale(0.96) translate(-32%, -100%)',
                    textAlign: props.Query ? 'left' : !props.Query && 'left',

                }}
            >
                <span
                    style={{
                        display: afterSearch && 'block'
                    }}
                >
                    CUSTOM
                </span> SUB-
                <span
                    style={{
                        color: afterSearch && '#E1FF01',
                    }}
                >DOMAINS</span></div>
            <p
                style={{
                    transform: afterSearch && !props.Query ? 'translateX(-173%) scale(1.1)' :
                        afterSearch && props.Query && 'translate(-58%, -600%) scale(1.1)',

                    letterSpacing: afterSearch && '0.1vw'
                }}
            >For Targeted Experiences</p>

            <p
                className='para-contents'
                style={{
                    visibility: afterSearch ? 'visible' : 'hidden',
                    transform: afterSearch && !props.Query ? 'scale(0.4)' :
                        afterSearch && props.Query && 'scale(0.9)',

                    marginTop: props.Query && '42%',
                    left: !props.Query ? '-13.2%' : props.Query && '4%',
                }}
            >
                "Streamline investor engagement with tailored sub-<br />
                domains for your pitch, delivering a personalized and<br />
                targeted experience for every audience."
            </p>

            <button className='create-now-btn'
                style={{
                    transform: afterSearch && !props.Query ? 'translate(-185%, 280%) scale(0.8)' :
                        afterSearch && props.Query && 'translate(-82%, -80%) scale(0.8)',

                    borderRadius: afterSearch && '200px',
                    opacity: afterSearch ? '1' : '0',

                }}
            > <Link to="team-up" className='link-div'>
                    <span>CREATE NOW</span>

                </Link>
            </button>
            <div className="search-bar"
                style={{
                    border: props.CompOpacity < '0.2' && '1px solid #fff',
                    transform: props.CompOpacity < '0.2' && !searchBar && 'scaleX(0.38)',
                    transformOrigin: '0%',
                    opacity: afterSearch && '0'
                    // opacity: '1'
                }}
            >
                <div className="text-div">
                    <p id='search-bar-text'></p>
                    <div className='blinking-cursor'
                        style={{
                            opacity: cursorOne && '1'
                        }}>
                    </div>

                </div>

                <div className="btn"
                    style={{
                        visibility: props.CompOpacity < '0.2' && 'hidden',
                        backgroundColor: searchBarBtn && '#E1FF01',
                        transition: !cursorOne && '0.2s',
                        opacity: afterSearch && '0'

                    }}
                >
                    <img src={Logo} alt="" />
                </div>
            </div>


            <img src={LampOn} alt="" className="lamp-on-img"
                style={{
                    opacity: lampOn && '1',
                    transform: afterSearch && !props.Query ? 'translate(-42%, -40%) rotate(-90deg) scale(1.2)' :
                        afterSearch && props.Query && 'translate(-2.8%, -85%) rotate(-90deg) scale(1)',

                    transition: afterSearch && '1.2s',
                }}
            />
            <img src={LampOff} alt="" className="lamp-off-img"
                style={{
                    opacity: lampOn && '0'

                }}
            />
            <div className="bottom-gradient">
                <BottomGradient
                    className='bottom-gradient'
                />

            </div>

            <div className="left-mockups-div"
                style={{
                    transform: !afterSearch && 'translate(150%)'
                }}
            ><MockupComp /></div>
        </div >
    )
}
