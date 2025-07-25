import React, { useState, useEffect, useRef } from 'react';
import './content-ai-page.scss';
import ArticlesAndBlogsComp from './Articles-And-Blogs-Comp/articles-and-blogs-comp';
import WritingCategoryComp from './Writing-Category-Comp/writing-category-comp';
import PhotoSonicComp from './Photo-Sonic-Comp/photo-sonic-comp';
import Stickyroll from "@stickyroll/react/stickyroll";



export default function ContentAIPage(props) {

    // const [scrolling, setScrolling] = useState(0);

    const [compOpacity, setCompOpacity] = useState(0);
    const [clientHgt, setClientHgt] = useState(document.documentElement.offsetHeight);

    useEffect(() => {
        const resizeViewPort = () => {
            setClientHgt(document.documentElement.offsetHeight)
        }

        window.addEventListener("resize", resizeViewPort)

        return () => {
            window.removeEventListener("resize", resizeViewPort)
        }
    }, []);
    // console.log(clientHgt * 0.1112348)

    useEffect(() => {
        const handleScroll = event => {

            // setScrolling(window.scrollY);

            const position = window.scrollY;
            const scroll = 0;

            let scrollHeight = (clientHgt * 0.1112348);  // window height.


            const compOpacity = position >= scroll && position <= scroll + scrollHeight * 4 ? 0.0 :
                position >= scroll + scrollHeight * 4 && position <= scroll + scrollHeight * 10 ? 0.2 :
                    position >= scroll + scrollHeight * 10 && position <= scroll + scrollHeight * 16 ? 0.4 :
                        position >= scroll + scrollHeight * 16 && position <= scroll + scrollHeight * 24 ? 0.6 :
                            position >= scroll + scrollHeight * 24 && position <= scroll + scrollHeight * 30 ? 0.8 :
                                position >= scroll + scrollHeight * 30 && position <= scroll + scrollHeight * 36 ? 1 :
                                    position > scroll + scrollHeight * 36 && '1.2';

            setCompOpacity(compOpacity)



        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [clientHgt]);



    const AB = useRef(null);
    const GW = useRef(null);
    const MC = useRef(null);
    const PS = useRef(null);

    // function handleScrollingLeft(){
    //     // document.getElementsByClassName('more-category-btn').scrollLeft = desiredScrollPosition;
    //     MC.scrollTo({
    //         left: '100px',
    //         behavior: 'smooth' 
    //     })
    // }



    useEffect(() => {
        let Title = 'Articles and blogs.'
        let Description = "Articles and blogs.";
        let Keywords = "Articles and blogs.";
        let CanonicalLink = "https://pitchcatalyst.com/pitch-contents";

        props.HandlePageTitle(Title, Description, CanonicalLink, Keywords)
        // eslint-disable-next-line
    }, [])


    return (
        <div className="content-ai-page-main-container">
            {/* <p style={{ position: 'fixed', top: '10%', left: '1%', color: '#fff', zIndex: '10' }}>{compOpacity.toString()}/{scrolling.toString()}</p> */}

            <div className="category-nav-menu-container"
                style={{
                    display: !props.Query && 'none',

                }}
            >
                <div className="articles-and-blogs-btn"
                    ref={AB}
                    onClick={() => {
                        let scrollHeight = (clientHgt * 0.1112348);
                        window.scrollTo(0, scrollHeight * 4);

                    }}

                    style={{
                        transform: compOpacity >= 0 && compOpacity < 0.2 ? 'scale(1.05)' : 'scale(0.9)',
                        background: compOpacity >= 0 && compOpacity < 0.2 ? 'linear-gradient(220deg, #E1FF00 15.80%, rgba(0, 0, 0, 0.00) 100.90%, rgba(0, 0, 0, 0.00) 40.80%)'
                            : 'none'
                    }}
                >
                    <div className="before-div">
                        <span className="shape-span"></span>
                        <span className="name-span">ARTICLES &nbsp;<span>& BLOGS</span></span>
                        <div className="hr-line"
                            style={{
                                opacity: compOpacity !== 0 && '0'
                            }}
                        ></div>

                    </div>
                </div>
                {/* ----------------------------------------------------------------- */}
                <div className="general-writing-btn"
                    ref={GW}
                    onClick={() => {
                        let scrollHeight = (clientHgt * 0.1112348);
                        window.scrollTo(0, scrollHeight * 16);

                    }}
                    style={{
                        transform: compOpacity >= 0.2 && compOpacity < 0.6 ? 'scale(1.05)' : 'scale(0.9)',
                        background: compOpacity >= 0.2 && compOpacity < 0.6 ? 'linear-gradient(220deg, #E1FF00 15.80%, rgba(0, 0, 0, 0.00) 100.90%, rgba(0, 0, 0, 0.00) 40.80%)'
                            : compOpacity >= 0.6 && 'none',

                    }}
                >
                    <div className="before-div">
                        <span className="shape-span"></span>
                        <span className="name-span">GENERAL WRITING</span>
                        <div className="hr-line"
                            style={{
                                opacity: compOpacity >= 0.2 && compOpacity < 0.6 ? '1' : '0'
                            }}
                        ></div>
                    </div>

                </div>
                {/* ----------------------------------------------------------------- */}

                <div className="more-category-btn"
                    ref={MC}
                    onClick={() => {
                        let scrollHeight = (clientHgt * 0.1112348);
                        window.scrollTo(0, scrollHeight * 24);
                        // handleScrollingLeft()

                    }}

                    style={{
                        transform: compOpacity >= 0.6 && compOpacity < 1 ? 'scale(1.05)' : 'scale(0.9)',
                        background: compOpacity >= 0.6 && compOpacity < 1 ? 'linear-gradient(220deg, #E1FF00 15.80%, rgba(0, 0, 0, 0.00) 100.90%, rgba(0, 0, 0, 0.00) 40.80%)'
                            : 'none'
                    }}
                >
                    <div className="before-div">
                        <span className="shape-span"></span>
                        <span className="name-span">More &nbsp;<span>Category</span></span>
                        <div className="hr-line"
                            style={{
                                opacity: compOpacity >= 0.6 && compOpacity < 1 ? '1' : '0'
                            }}
                        ></div>

                    </div>
                </div>
                {/* ----------------------------------------------------------------- */}

                <div className="photo-sonic-btn"
                    ref={PS}
                    onClick={() => {
                        let scrollHeight = (clientHgt * 0.1112348);
                        window.scrollTo(0, scrollHeight * 36);

                    }}

                    style={{
                        transform: compOpacity >= 1 ? 'scale(1.05)' : 'scale(0.9)',
                        background: compOpacity >= 1 ? 'linear-gradient(220deg, #E1FF00 15.80%, rgba(0, 0, 0, 0.00) 100.90%, rgba(0, 0, 0, 0.00) 40.80%)'
                            : 'none'

                    }}
                >
                    <div className="before-div">

                        <span className="shape-span"></span>
                        <span className="name-span">Photo Sonic</span>
                        <div className="hr-line"
                            style={{
                                opacity: compOpacity >= 1 ? '1' : '0'
                            }}
                        ></div>
                    </div>

                </div>
                {/* ----------------------------------------------------------------- */}

            </div>


            <Stickyroll pages={3} factor={1.4}>
                <ArticlesAndBlogsComp Query={props.Query} CompOpacity={compOpacity} />

                <WritingCategoryComp Query={props.Query} CompOpacity={compOpacity} />

                <PhotoSonicComp Query={props.Query} CompOpacity={compOpacity} />


            </Stickyroll>
        </div>)
}
