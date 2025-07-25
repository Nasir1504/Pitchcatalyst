import React, { useState, useEffect } from 'react';
import './about-us-page.scss';
import Stickyroll from "@stickyroll/react/stickyroll";
import OurStoryComp from './Our-Story-Comp/our-story-comp';
import OurStorySecondComp from './Our-Story-Second-Comp/our-story-second-comp';
import OurStoryThirdComp from './Our-Story-Third-Comp/our-story-third-comp';
import OurStoryFourthComp from './Our-Story-Fourth-Comp/our-story-fourth-comp';
// import JoinUsComp from '../../components/Join-Us-Comp/join-us-comp';
// import ScrollDownComp from '../../components/Scroll-Down-Comp/scroll-down-comp';


export default function AboutUsPage(props) {
    useEffect(() => { window.scrollTo(0, 0) }, [])

    // const [scrolling, setScrolling] = useState(0)
    const [scrollOne, setScrollOne] = useState(0)
    const [scrollTwo, setScrollTwo] = useState(0)
    const [scrollThree, setScrollThree] = useState(0)
    const [scrollFour, setScrollFour] = useState(0)
    const [scrollFifth, setScrollFifth] = useState(1)

    // const [scrollDownNote, setScrollDownNote] = useState(false)

    const [clientHgt, setClientHgt] = useState(document.documentElement.offsetHeight);

    useEffect(() => {
        const resizeViewPort = () => {
            setClientHgt(document.documentElement.offsetHeight)
        }

        window.addEventListener("resize", resizeViewPort)

        return () => {
            window.removeEventListener("resize", resizeViewPort)
        }
        // eslint-disable-next-line 
    }, []);



    function handleScroll() {
        const scrolling = window.scrollY;

        let scrollHeight = (clientHgt * 0.1112348);
        // console.log(scrollHeight)

        const scroll = 0;

        const scrollingOne = scrolling >= scroll + scrollHeight * 3 && scrolling < scroll + scrollHeight * 6 ? '0.2' :
            scrolling >= scroll + scrollHeight * 6 && scrolling < scroll + scrollHeight * 8 ? '0.8' :
                scrolling >= scroll + scrollHeight * 8 && '1';

        const scrollingTwo = scrolling >= scroll + scrollHeight * 8 && scrolling < scroll + scrollHeight * 12 ? '0.2' :
            scrolling >= scroll + scrollHeight * 12 && scrolling < scroll + scrollHeight * 24 ? '0.8' :
                scrolling >= scroll + scrollHeight * 24 && '1';

        const scrollingThree = scrolling >= scroll + scrollHeight * 24 && scrolling < scroll + scrollHeight * 28 ? '0.2' :
            scrolling >= scroll + scrollHeight * 28 && scrolling < scroll + scrollHeight * 34 ? '0.8' :
                scrolling >= scroll + scrollHeight * 34 && '1';

        const scrollingFour = scrolling >= scroll + scrollHeight * 34 && scrolling < scroll + scrollHeight * 40 ? '0.2' :
            scrolling >= scroll + scrollHeight * 40 && scrolling < scroll + scrollHeight * 42 ? '0.8' :
                scrolling >= scroll + scrollHeight * 42 && '1';

        const scrollingFifth = scrolling >= scroll + scrollHeight * 56 && '0'



        setScrollOne(scrollingOne);
        setScrollTwo(scrollingTwo)
        setScrollThree(scrollingThree)
        setScrollFour(scrollingFour)
        setScrollFifth(scrollingFifth)
    }
    useEffect(() => {

        window.addEventListener('scroll', handleScroll)

        return (() => {
            window.removeEventListener('scroll', handleScroll)
        })
        // eslint-disable-next-line 
    }, [])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setScrollDownNote(true)
    //     }, 3000);

    // }, [])

    useEffect(() => {
        let Title = 'About Pitch Catalyst - Pitch Deck Design Services Agency'
        let Description = "Elevate your pitch with Pitch Catalyst's professional and visually stunning pitch deck design services. We're an industry leading pitch deck design agency.";
        let Keywords = "professional pitch deck design, pitch deck design agency, best pitch deck design company, pitch deck designers, pitch deck design services";
        let CanonicalLink = "https://pitchcatalyst.com/about-us";
        let PageURL = window.location.pathname

        props.HandlePageTitle(Title, Description, CanonicalLink, Keywords, PageURL)
        // eslint-disable-next-line
    }, [])


    return (
        <div className="about-us-page-main-container"
            style={{
                backgroundColor: scrollTwo >= 0.8 && scrollThree < 0.8 ? '#e1ff01' :
                    scrollFour >= '0.8' && scrollFour < '1' ? '#e1ff01' : '#000'
            }}
        >
            <Stickyroll pages={2} factor={3}>
                {/* <p style={{ position: 'fixed', top: '20%', color: '#fff', zIndex: '5' }}>{scrollFour.toString()}</p> */}

                {/* <ScrollDownComp
                    displayValue={scrollOne >= 0.2 && true}
                    opacityValue={scrollDownNote && true}
                    colorValue='#e1ff00'
                /> */}


                <OurStoryComp Scrolling={scrollOne} Query={props.Query} />
                <OurStorySecondComp Scrolling={scrollTwo} Query={props.Query} />
                <OurStoryThirdComp Scrolling={scrollThree} Query={props.Query} />
                <OurStoryFourthComp Scrolling={scrollFour} ScrollFifth={scrollFifth} Query={props.Query} />

            </Stickyroll>
            {/* <JoinUsComp Scrolling={scrollFour}/> */}

        </div>)
}
