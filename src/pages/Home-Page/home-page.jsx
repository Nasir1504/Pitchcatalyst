import React, { useState, useEffect } from 'react';


//styles
import './home-page.scss';

//dependencies
import Stickyroll from "@stickyroll/react/stickyroll";

//components
import TopVideoComp from './Top-Video-Comp/top-video-comp';
import SecondComp from './Second_Comp/second-comp';
import ThirdComp from './Third-Comp/third-comp';
import FourthComp from './Fourth-Comp/fourth-comp';
import FifthComp from './Fifth-Comp/fifth-comp';
import TuneYourDeck from './Tune-Your-Deck/TuneYourDeck';
import SeventhComp from './Seventh-Comp/seventh-comp';
import EightComp from './Eight-Comp/eight-comp';
import MakeDeckResponsive from './Make-Deck-Responsive/MakeDeckResponsive';
import TenthComp from './Tenth-Comp/tenth-comp';
import EleventhComp from './Eleventh-Comp/eleventh-comp';
import TwelvethComp from './Twelveth-Comp/twelveth-comp';
import AIComp from './AI-comp/ai-comp';
import BrandListComp from './Brand-List-Comp/brand-list-comp';
// import ScrollDownComp from '../../components/Scroll-Down-Comp/scroll-down-comp';



const ShapeImg = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/vector53.png';

export default function HomePage(props) {
    const [scrolling, setScrolling] = useState(0);
    const [compThirdOpacity, setCompThirdOpacity] = useState(1);
    const [compFourthOpacity, setCompFourthOpacity] = useState(0)
    const [compFifthOpacity, setCompFifthOpacity] = useState(0)
    const [compSixthOpacity, setCompSixthOpacity] = useState(0)
    const [compSeventhOpacity, setCompSeventhOpacity] = useState(0)
    const [compEighthOpacity, setCompEighthOpacity] = useState(0)
    const [compNinthOpacity, setCompNinthOpacity] = useState(0)
    const [compTenthOpacity, setCompTenthOpacity] = useState(0)
    const [compEleventhOpacity, setCompEleventhOpacity] = useState(0)
    const [compTwelvethOpacity, setCompTwelvethOpacity] = useState(0)



    // ==================== New Scroll Values =====================

    const [secondCompProgress, setSecondCompProgress] = useState(0)
    // const [aiCompProgress, setAICompProgress] = useState(0)

    // ============================================================

    // eslint-disable-next-line
    const [isJoinUsVisible, setIsJoinUsVisible] = useState(false)
    const [clientHgt, setClientHgt] = useState(document.documentElement.scrollHeight);


    useEffect(() => {
        const resizeViewPort = () => {
            setClientHgt(document.documentElement.scrollHeight)
        }

        window.addEventListener("resize", resizeViewPort)

        return () => {
            window.removeEventListener("resize", resizeViewPort)
        }
    }, []);

    useEffect(() => {
        const handleScroll = event => {

            setScrolling(window.scrollY);
            const position = window.scrollY;
            // let scrollCount = 3400;
            // let scrollCount = 3.987106 * (clientHgt * 1.2 + 100);

            let scrollCount = (clientHgt * 4.61869); // from what value we started scrolling.

            let scrollHeight = (clientHgt * 0.1112348);  // window height.


            const ThirdOpacity = position >= scrollCount && position <= scrollCount + scrollHeight * 4 ? '0.2' :
                position >= scrollCount + scrollHeight * 4 && position <= scrollCount + scrollHeight * 10 ? 0.8 :
                    position > scrollCount + scrollHeight * 10 && '1';

            const FourthOpacity = position >= scrollCount + scrollHeight * 10 && position <= scrollCount + scrollHeight * 16 ? '0.2' :
                position >= scrollCount + scrollHeight * 16 && position <= scrollCount + scrollHeight * 24 ? '0.6' :
                    position >= scrollCount + scrollHeight * 24 && position <= scrollCount + scrollHeight * 30 ? '0.8' :
                        // these value needs to be extend 
                        position >= scrollCount + scrollHeight * 30 && position <= scrollCount + scrollHeight * 40 ? '1' :
                            position > scrollCount + scrollHeight * 40 && '1.2';
            // -------------------------------------------------------------------------------------------------------------

            // these value consider FourthOpacity is 1 at   position > scrollCount + scrollHeight * 30

            const FifthOpacity = position >= scrollCount + scrollHeight * 30 && position <= scrollCount + scrollHeight * 40 ? '0.2' :
                position >= scrollCount + scrollHeight * 40 && position <= scrollCount + scrollHeight * 48 ? '0.8' :
                    position > scrollCount + scrollHeight * 48 && '1';

            const SixthOpacity = position >= scrollCount + scrollHeight * 48 && position <= scrollCount + scrollHeight * 54 ? '0.2' :
                position >= scrollCount + scrollHeight * 54 && position <= scrollCount + scrollHeight * 58 ? '0.8' :
                    position > scrollCount + scrollHeight * 58 && '1';


            const SeventhOpacity = position >= scrollCount + scrollHeight * 58 && position <= scrollCount + scrollHeight * 64 ? '0.2' :
                position >= scrollCount + scrollHeight * 64 && position <= scrollCount + scrollHeight * 68 ? '0.8' :
                    position > scrollCount + scrollHeight * 68 && '1';

            const EighthOpacity = position >= scrollCount + scrollHeight * 68 && position <= scrollCount + scrollHeight * 70 ? '0.2' :
                position >= scrollCount + scrollHeight * 70 && position <= scrollCount + scrollHeight * 74 ? '0.8' :
                    position > scrollCount + scrollHeight * 74 && '1';

            const NinthOpacity = position >= scrollCount + scrollHeight * 74 && position <= scrollCount + scrollHeight * 80 ? '0.2' :
                position >= scrollCount + scrollHeight * 80 && position <= scrollCount + scrollHeight * 84 ? '0.8' :
                    position > scrollCount + scrollHeight * 84 && '1';


            const TenthOpacity = position >= scrollCount + scrollHeight * 94 && position <= scrollCount + scrollHeight * 102 ? '0.2' :
                position >= scrollCount + scrollHeight * 102 && position <= scrollCount + scrollHeight * 108 ? '0.8' :
                    position > scrollCount + scrollHeight * 108 && '1';

            const EleventhOpacity = position >= scrollCount + scrollHeight * 108 && position <= scrollCount + scrollHeight * 134 ? '0.2' :
                position >= scrollCount + scrollHeight * 134 && position <= scrollCount + scrollHeight * 140 ? '0.8' :
                    position > scrollCount + scrollHeight * 140 && '1';

            const TwelvethOpacity = position >= scrollCount + scrollHeight * 140 && position <= scrollCount + scrollHeight * 148 ? '0.2' :
                position >= scrollCount + scrollHeight * 148 && position <= scrollCount + scrollHeight * 152 ? '0.8' :
                    position > scrollCount + scrollHeight * 152 && '1';



            setCompThirdOpacity(ThirdOpacity)
            setCompFourthOpacity(FourthOpacity)
            setCompFifthOpacity(FifthOpacity)
            setCompSixthOpacity(SixthOpacity)
            setCompSeventhOpacity(SeventhOpacity)
            setCompEighthOpacity(EighthOpacity)
            setCompNinthOpacity(NinthOpacity);
            setCompTenthOpacity(TenthOpacity)
            setCompEleventhOpacity(EleventhOpacity)
            setCompTwelvethOpacity(TwelvethOpacity)
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [clientHgt]);

    // ----------------------------index.html--------------------------------------------------
    useEffect(() => {
        let Title = 'Pitch Catalyst: Pitch Deck for Raise Funds Made by Experts.'
        let Description = "Pitch Catalyst creates a compelling pitch deck to raise funds for your business. Impress investors and secure the funding you need with our expert guidance.";
        let CanonicalLink = "https://pitchcatalyst.com/";
        let Keywords = "pitch deck, presentation, investor, startup, business plan, funding, pitch, slides, pitch presentation, elevator pitch, funding, venture capital, pitch deck design for fundraising.";
        let PageURL = window.location.pathname


        props.HandlePageTitle(Title, Description, CanonicalLink, Keywords, PageURL)
        // eslint-disable-next-line
    }, [])



    return (
        <div className="home-page-main-container"
            style={{
                backgroundColor: compEleventhOpacity !== '1' && isJoinUsVisible ? '#e1ff01' : compEleventhOpacity === '1' && '#fff'
            }}
        >

            {/* <p style={{ position: 'fixed', color: '#fff', top: '15%', left: '0', zIndex: '10' }}>{scrolling.toString()}{' '} / Third : {compThirdOpacity.toString()} / Four : {compFourthOpacity.toString()} / Fifth : {compFifthOpacity.toString()} / Sixth : {compSixthOpacity.toString()} / Seventh : {compSeventhOpacity.toString()} / Eighth : {compEighthOpacity.toString()} / Ninth : {compNinthOpacity.toString()} / Tenth : {compTenthOpacity.toString()} /Eleventh : {compEleventhOpacity.toString()} / Twelveth : {compTwelvethOpacity.toString()}</p> */}
            {/* <p style={{ position: 'fixed', color: '#fff', top: '25%', left: '0', zIndex: '10' }}> Height : {(clientHgt * 0.111234).toString()}{' '}<br /><br />scrollCount : {(clientHgt * 4.61869).toString()}</p> */}
            {/* <p style={{ position: 'fixed', color: 'red', top: '20%', left: '1%', zIndex: '10' }}>{compEleventhOpacity.toString()}</p> */}

            <TopVideoComp Query={props.Query} />

            <Stickyroll pages={1} factor={2.6}
                onProgress={(progress) => { setSecondCompProgress(progress) }}
            >
                <SecondComp Scrolling={scrolling} ClientHgt={clientHgt} Query={props.Query} Progress={secondCompProgress} />
            </Stickyroll>

            <Stickyroll pages={5} factor={1.85}>

                <ThirdComp CompThirdOpacity={compThirdOpacity} Query={props.Query} />
                <FourthComp CompFourthOpacity={compFourthOpacity} CompFifthOpacity={compFifthOpacity} Query={props.Query} />
                <div className='sticky-comp-one'
                    style={{
                        opacity: compFifthOpacity >= '0.2' && compFifthOpacity < '1' ? '1' :
                            compFifthOpacity === '1' && '1'

                    }}
                >
                    <img src={ShapeImg} alt="" className="bg-shape-img"
                        style={{
                            transform:
                                compSixthOpacity >= '0.2' && compSixthOpacity < '1' ? `rotate(180deg) scale(1.1)` :
                                    compSeventhOpacity >= '0.2' && compSeventhOpacity < '1' ? `rotate(0deg)` :
                                        compEighthOpacity >= '0.2' && compEighthOpacity < '1' ? `rotate(180deg)` :
                                            compNinthOpacity >= '0.2' && compNinthOpacity > '1' && `rotate(0deg)`


                        }}
                    />
                    <FifthComp CompFifthOpacity={compFifthOpacity} CompSixthOpacity={compSixthOpacity} Query={props.Query} />
                    <TuneYourDeck CompSixthOpacity={compSixthOpacity} CompSeventhOpacity={compSeventhOpacity} Query={props.Query} />
                    <SeventhComp CompSeventhOpacity={compSeventhOpacity} CompEighthOpacity={compEighthOpacity} Query={props.Query} />
                    <EightComp CompEighthOpacity={compEighthOpacity} Query={props.Query} />
                    <MakeDeckResponsive CompNinthOpacity={compNinthOpacity} Query={props.Query} />

                </div>
            </Stickyroll >

            <Stickyroll pages={1} factor={1.8} >
                <AIComp CompOpacity={compTenthOpacity} Query={props.Query} />
            </Stickyroll>

            <Stickyroll pages={2} factor={1.6}>
                <div className='sticky-comp-two'>
                    <TenthComp CompOpacity={compEleventhOpacity} Query={props.Query} />
                    <EleventhComp CompOpacity={compTwelvethOpacity} Query={props.Query} />
                </div>
            </Stickyroll>

            <div className="success-story-comp">
                <TwelvethComp Query={props.Query} />
            </div>
            <BrandListComp />

        </div >
    )
}
