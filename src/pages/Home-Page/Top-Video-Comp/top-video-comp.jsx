import { useEffect, useState } from 'react';
import './top-video-comp.scss';
import { motion } from "framer-motion";
import { Tilt } from 'react-tilt';
import { Link } from 'react-router-dom';
import { ImageServer } from '../../../img/imageServer';
const BgImg2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/frame665.png';
const BgImg = `${ImageServer}img/Pitch-Catalyst/home-page-imgs/home-screen-img.png`;
// const Logo = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/logo-img.png';
const circleMaskedImg = 'https://i.ibb.co/27SZb51/mask-circle643.png'


export default function TopVideoComp(props) {

    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [maskVisibility, setMaskVisibility] = useState(true)
    const [cursorVariant, setCursorVariant] = useState('default');

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

    const [scrolling, setScrolling] = useState(0);


    useEffect(() => {

        const handleScroll = event => {
            setScrolling(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const variants = {
        default: {
            x: coords.x - 8,
            y: coords.y - 8,

        },
        enter: {
            height: 60,
            width: 60,
            x: coords.x - 30,
            y: coords.y - 30,
            backgroundColor: '#fff',
            mixBlendMode: 'difference'
        }
    }
    const handleCursorEnter = () => {
        setCursorVariant('enter')
        setMaskVisibility(false)
    }
    const handleCursorLeave = () => {
        setCursorVariant('default')
        setMaskVisibility(true)
    }

    return (

        <div className="top-video-comp-main-comp">
            <motion.div
                className="magnifier"
                variants={variants}
                animate={cursorVariant}

            />
            <div className="masking-div" >
                {
                    props.Query ? <img src={BgImg2} alt="" className="masked-img"

                        style={{
                            WebkitMaskPosition: `${coords.x - 65}px ${(coords.y - 65) + scrolling}px`,
                            opacity: maskVisibility ? '0.5' : '0',
                            maskImage: `url(${circleMaskedImg})`,
                            WebkitMaskImage: `url(${circleMaskedImg})`,
                        }}
                    /> :
                        <img src={BgImg} alt="" className="masked-img"

                            style={{
                                WebkitMaskPosition: `${coords.x - 150}px ${(coords.y - 150) + scrolling}px`,
                                opacity: maskVisibility ? '0.5' : '0',
                                maskImage: `url(${circleMaskedImg})`,
                                WebkitMaskImage: `url(${circleMaskedImg})`,
                            }}
                        />
                }

            </div>
            <div className="content-div">
                <p className="top-para">We Excel In Developing</p>
                <h1
                    onMouseEnter={handleCursorEnter}
                    onMouseLeave={handleCursorLeave}
                >
                    <span>CONCISE DYNAMIC</span>  <br />
                    RESPONSIVE DECKS
                </h1>
                <hr />
                <Tilt className='tilt-comp' options={{ max: 65, }}>
                    <div className="tilt-div">&</div>
                </Tilt>


                <p className="bottom-para">
                    Developing Concise, Responsive & Dynamic Decks By employing sophisticated design methodologies
                    and leveraging in-depth industry expertise, we create visually engaging decks that resonate
                    across diverse platforms.
                    {
                        !props.Query &&
                        <>Our collaborative process ensures all decks encapsulate the unique
                            value proposition, fostering interest and facilitating successful outcomes.</>
                    }

                </p>
            </div>

            <div className="bottom-btn-div">
                <span className='bg-span' />
                <Link className='see-our-work-link' to='/see-our-work'>See Our Work</Link>
                <Link className="contact-us-link" to='/team-up'>Contact Us</Link>

            </div>

        </div>
    )
}