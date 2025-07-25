import React, { useState, useEffect } from 'react';

//styles
import './style.scss';

//components
import LogoVectorComp from './Logo-Vector-Comp/logo-vector-comp';
import { Link } from 'react-router-dom';

export default function ThankYouPage(props) {
    window.scrollTo(0, 0);

    const [onCompLoad, setOnCompLoad] = useState(false);
    const [secondAnime, setSecondAnime] = useState(false)
    const [contentsVisible, setContentVisible] = useState(false);

    useEffect(() => {
        !onCompLoad && setTimeout(() => {
            setOnCompLoad(true)
        }, 10);

        onCompLoad && setTimeout(() => {
            setSecondAnime(true)
        }, 2000);

    }, [onCompLoad])

    useEffect(() => {
        secondAnime && setTimeout(() => {
            setContentVisible(true)
        }, 2500)
    }, [secondAnime])

    useEffect(() => {
        let Title = 'Congratulations on taking the first step towards an exciting journey with Pitch Catalyst.'
        let Description = "Congratulations on taking the first step towards an exciting journey with Pitch Catalyst.";
        let Keywords = "Congratulations on taking the first step towards an exciting journey with Pitch Catalyst.";
        let CanonicalLink = "https://pitchcatalyst.com/thank-you";

        props.HandlePageTitle(Title, Description, CanonicalLink, Keywords)
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.innerHTML = `
          gtag('event', 'conversion', {'send_to': 'AW-11268037073/uZfjCIjZxM4YENGzgv0p'});
        `;

        // Append the script element to the document body
        document.body.appendChild(script);

        // Clean up by removing the script element when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return (
        <div className="thank-you-page-main-container"
            style={{
                backgroundColor: secondAnime && '#000'
            }}
        >
            {
                !props.Query ?
                    <div className="focused-circle-container"
                        style={{
                            filter: contentsVisible && 'blur(2px)'

                        }}
                    >

                        {[...Array(25)].map((_, i) => {
                            return (
                                <div className="focused-circle"
                                    key={i}
                                    style={{
                                        border: secondAnime && '1px solid #fff',

                                        width: i === 1 ? `${15 * i * 1.5}vw` :
                                            i === 2 ? `${15 * i * 0.42}vw` :
                                                i === 3 ? `${15 * i * 0.34}vw` :
                                                    i === 4 ? `${15 * i * 0.3}vw` :
                                                        `${15 * i * Math.pow(0.62, 2)}vw`,

                                        height: i === 1 ? `${15 * i * 1.5}vw` :
                                            i === 2 ? `${15 * i * 0.42}vw` :
                                                i === 3 ? `${15 * i * 0.34}vw` :
                                                    i === 4 ? `${15 * i * 0.3}vw` :
                                                        `${15 * i * Math.pow(0.62, 2)}vw`,
                                        opacity:
                                            i === 0 ? '0' :
                                                i === 1 ? '0.3' :
                                                    i === 2 ? '0.5' :
                                                        i === 3 ? '0.5' :
                                                            i === 4 ? '0.3' : '0.2'


                                    }}
                                ></div>
                            )
                        })}
                    </div>
                    :
                    props.Query &&
                    <div className="focused-circle-container"
                        style={{
                            filter: contentsVisible && 'blur(2px)'

                        }}
                    >

                        {[...Array(25)].map((_, i) => {
                            return (
                                <div className="focused-circle"
                                    key={i}
                                    style={{
                                        border: secondAnime && '1px solid #fff',

                                        width: i === 2 ? `${15 * i * 0.98}vw` :
                                            i === 3 ? `${15 * i * 0.78}vw` :
                                                i === 4 ? `${15 * i * 0.7}vw` :
                                                    `${15 * i * 0.7}vw`,
                                        height: i === 2 ? `${15 * i * 0.98}vw` :
                                            i === 3 ? `${15 * i * 0.78}vw` :
                                                i === 4 ? `${15 * i * 0.7}vw` :
                                                    `${15 * i * 0.7}vw`,
                                        opacity:
                                            i === 0 ? '0' :
                                                i === 1 ? '0.3' :
                                                    i === 2 ? '0.2' :
                                                        i === 3 ? '0.3' :
                                                            i === 4 ? '0.2' : '0.1'

                                    }}
                                ></div>
                            )
                        })}
                    </div>

            }
            <LogoVectorComp Query={props.Query} OnCompLoad={onCompLoad} SecondAnime={secondAnime} ContentsVisible={contentsVisible} />

            <div className="contents-div"
                style={{
                    // transform: contentsVisible && 'scale(1)',
                    opacity: contentsVisible && '1'
                }}
            >

                <h1>
                    THANK YOU FOR CHOOSING <span>This Adventure With Us!</span>
                </h1>
                <h3>Congratulations <span className="span1">On Taking The First Step Towards An Exciting</span><br /><span className="span2">Journey With Pitch Catalyst.</span></h3>

                <p className="para-one">
                    Your meeting is scheduled, and <em>we can't wait to dive into the world of interactive and engaging <br />
                        decks together.</em> Our team of storytelling wizards is ready to craft a pitch that leaves a lasting <br />
                    impact on your audience. Get ready to take your pitches to new heights. See you at our meeting!
                </p>

                <p className="para-two" >
                    In the meantime, feel free to explore our website and learn more about how we're revolutionizing <br />
                    the art of pitching. If you have any questions or thoughts bubbling up, don't hesitate to reach out. <br />
                    We're here to make your entrepreneurial dreams soar!
                </p>


                <Link to='/' className='link-btn'>
                    Home Page
                </Link>

                <p className="bottom-left-para" >
                    <span>Get ready to</span> <br />
                    take your pitches to new heights. <br />
                    <span>See you at our meeting!</span>
                </p>

                <p className="bottom-right-para">
                    <span>Best Regards, </span> <br />
                    The Pitch Catalyst Team. <br />
                </p>


            </div>


        </div>)
}
