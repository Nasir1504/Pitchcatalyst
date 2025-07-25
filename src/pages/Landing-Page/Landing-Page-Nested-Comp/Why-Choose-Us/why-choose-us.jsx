import React from 'react';

//styles
import './why-choose-us.scss';

//dependencies
import { Tilt } from 'react-tilt';

const Group852 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/Group852.png';


export default function WhyChooseUs() {


    //images
    const PathImg = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/Vector-1318.png';
    const Frame1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/shield.png';
    const Frame2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/time.png';
    const Frame3 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/Untitled-454.png';
    const Frame4 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/Frame-857.png';
    const maskedLOGO = 'https://i.ibb.co/nDBr224/group527.png';
    // const maskedBGImg = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/bg-frame.png';
    const Lamp = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/frame-856.png';

    //videos
    const video = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/Pink-Bg-01.mp4';

    const maskedVideo = document.getElementById('masked-video');

    if (maskedVideo) {
        maskedVideo.playbackRate = 2.0;
    }

    return (
        <div className="why-choose-us-main-container">
            <div className="top-comp-div">

                <img src={Lamp} alt="" className="left-lamp" />
                <img src={Group852} alt="" className="bg-logo-img" />
                <div className="mask-img-div"
                    style={{
                        maskImage: `url(${maskedLOGO})`,
                        WebkitMaskImage: `url(${maskedLOGO})`,

                    }}
                >
                    <video src={video} autoPlay loop muted id='masked-video' 
                    
                    // controls
                    />

                </div>

                <div className="heading">
                    WHY <br /> <b>CHOOSE</b> <span>US</span>
                </div>
            </div>


            <img src={PathImg} alt="" className="path-img" />

            <div className="card-one">


                <div className="blured-bg" />
                <div className="vector-div">
                    <div className="black-circle" />
                </div>
                <Tilt className='tilt-comp' options={{ scale: 1, max: 25, }}>
                    <img src={Frame2} alt="" />
                </Tilt>
                <div className="name-div">
                    <span> On-Time Delivery <br />Guarantee</span>
                </div>
                <p>
                    <span className='span1'>We respect your timelines, </span><br />delivering polished <br /><span className="span2">pitch decks</span> exactly <br />when you need them.
                </p>



            </div>
            <div className="card-two">
                <div className="blured-bg" />
                <div className="vector-div">
                    <div className="black-circle" />
                </div>
                <Tilt className='tilt-comp' options={{ scale: 1, max: 25, }}>
                    <img src={Frame4} alt="" />
                </Tilt>
                <div className="name-div">
                    <span>  Responsive Client <br /> Service</span>
                </div>
                <p>
                    <span className='span1'>We’re here when you need us,</span><br /> providing  <span className='span2'>updates</span> and<br /> answers at every step
                </p>
            </div>
            <div className="card-three">
                <div className="blured-bg" />
                <div className="vector-div">
                    <div className="black-circle" />
                </div>
                <Tilt className='tilt-comp' options={{ scale: 1, max: 25, }}>
                    <img src={Frame1} alt="" />
                </Tilt>
                <div className="name-div">
                    <span>  Confidential & <br />
                        Secure</span>
                </div>
                <p>
                    <span className='span1'> Your sensitive business</span><br /> data is  <span className='span2'>safe and always</span><br /> treated with utmost<br />  <span className='span2'>confidentiality</span>
                </p>
            </div>
            <div className="card-four">
                <div className="blured-bg" />
                <div className="vector-div">
                    <div className="black-circle" />
                </div>
                <Tilt className='tilt-comp' options={{ scale: 1, max: 25, }}>
                    <img src={Frame3} alt="" />
                </Tilt>
                <div className="name-div">
                    <span>   Unmatched <br /> Creative Expertise</span>
                </div>
                <p>
                    <span className='span1'> Our design team brings world-</span><br />class creativity to every <br />project, ensuring your<br /> <span className='span2'> deck stands out.</span>
                </p>
            </div>


        </div>
    )
}
