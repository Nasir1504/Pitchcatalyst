import React, { useState, useEffect, useRef } from 'react';
import './footer-comp.scss';
import { Link } from 'react-router-dom';
// import { ImageServer } from '../../img/imageServer';
// const vector = `${ImageServer}img/Pitch-Catalyst/home-page-imgs/vector5_3.png`;
// import vector from '../../img/vector5_3.png';
// import facebook from '../../img/facebook.svg';
// import insta from '../../img/instagram.svg';
// import twitter from '../../img/twitter.svg';
// import linkedIn from '../../img/linkedin.svg';


import vector from '../../assets/imgs/home-page/Vector5_3.png';
import Icon1 from '../../assets/imgs/home-page/address.png';
import Icon2 from '../../assets/imgs/home-page/email.png';
import Icon3 from '../../assets/imgs/home-page/contactus.png';
import Icon4 from '../../assets/imgs/home-page/socialmedia.png';
import linkedIn from "../../assets/imgs/home-page/linkedin.png";


export default function FooterComp(props) {

    // const Icon1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/footer-img/address-icon.png';
    // const Icon2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/footer-img/mail-icon.png';
    // const Icon3 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/footer-img/phone-icon.png';
    // const Icon4 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/footer-img/social-icon.png';
    // const vector = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/footer-img/vector5_3.png';
    // const facebook = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/footer-img/facebook.svg';
    // const insta = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/footer-img/instagram.svg';
    // const twitter = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/footer-img/twitter.svg';
    // const linkedIn = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/footer-img/linkedin.svg';

    const elementRef = useRef();
    const [scrollValue, setScrollValue] = useState(0)
    // const [elementTopScrollValue, setElementTopScrollValue] = useState(0)
    const [elementDetails, setElementDetails] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setElementDetails(entry.target.offsetTop)
                }
            });
        });
        observer.observe(elementRef.current);

        return () => observer.disconnect();
        // eslint-disable-next-line
    }, [])

    const calculatedValue = elementDetails - scrollValue;


    useEffect(() => {
        const handleScroll = () => {
            setScrollValue(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)


        return () => { window.removeEventListener('scroll', handleScroll) }

    }, [])

    return (
        <div className="footer-comp-main-container" ref={elementRef}>

            <div className="join-us-div"

                style={{
                    transform: `translateY(-${80 - calculatedValue * 0.12}%)`,
                    borderRadius: !props.Query ? `0 0 ${150 - calculatedValue * 0.18}px ${150 - calculatedValue * 0.18}px` :
                        props.Query && `0 0 ${80 - calculatedValue * 0.15}px ${80 - calculatedValue * 0.15}px`,
                }}
            >{
                    [...Array(20)].map((_, i) => {
                        return (
                            <div className="join-us-content"
                                key={i}
                                style={{
                                    transform: `translate(-${250 - calculatedValue * 0.3}% )`,
                                }}
                            >
                                <p>JOIN US</p>
                                <img src={vector} alt="" />
                            </div>
                        )
                    })
                }

            </div>

            <div className="top-part">
                <div className="address-div">
                    <div className='heading'><span><img src={Icon1} alt="" /></span> Address</div>
                    <p>D-112, 60 Feet Rd, Chhatarpur Hills, Pocket D, Chattarpur Enclave, Chhatarpur,New Delhi-110074, India.</p>
                </div>
                <div className="e-mail-div">
                    <div className='heading'><span><img src={Icon2} alt="" /></span> E-Mail</div>
                    <p>sales@pitchcatalyst.com</p>
                    <p>hiring@pitchcatalyst.com </p>
                    <p>info@pitchcatalyst.com </p>

                </div>
                <div className="contact-us-div">
                    <div className='heading'><span><img src={Icon3} alt="" /></span> Contact Us</div>
                    <p><span>Sales:&nbsp;</span>+91-8810570106 </p>
                    <p><span>Hiring:&nbsp;</span>+91-9999849425</p>
                    <p><span>Official:&nbsp;</span>+91-9711750002 </p>

                </div>
                <div className="social-media-div">
                    <div className='heading'><span><img src={Icon4} alt="" /></span> Social Media</div>
                    <div className="bottom-div">
                        {/* <a href='###' target="_blank" rel='noreferrer'><img src={facebook} alt="" /></a> */}
                        {/* <a href='###' target="_blank" rel='noreferrer'><img src={insta} alt="" /></a> */}
                        {/* <a href='###' target="_blank" rel='noreferrer'><img src={twitter} alt="" /></a> */}
                        {/* <a href='###' target="_blank" rel='noreferrer'><img src={twitter} alt="" /></a> */}

                        <a href='https://www.linkedin.com/company/pitch-catalyst/about' target="_blank" rel='noreferrer'><img src={linkedIn} alt="" /></a>
                    </div>

                </div>
            </div>
            <hr />
            <div className="bottom-part">
                <Link to='' className='link-comp'><p>Security & Complains</p></Link>
                <Link to='/privacy-policy' className='link-comp'><p>Privacy Policy</p></Link>
                <Link to='' className='link-comp'><p>Cookies Policy</p></Link>

            </div >


        </div >
    )
}
