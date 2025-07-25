import React, { useState, useEffect, useRef } from 'react';

//styles
import './differentiator-comp.scss';

//dependencies
import { Stickyroll } from '@stickyroll/react';

//components
import DifferentiatorSubMobileComp from './Differentiator-Sub-Mobile-Comp/differentiator-sub-mobile-comp';
import DifferentiatorSubComp from './Differentiator-Sub-Comp/differentiator-sub-comp';

export default function DifferentiatorComp(props) {
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])

    // const [scrolling, setScrolling] = useState(0);
    const [compOpacity, setCompOpacity] = useState(0);

    const [clientHgt, setClientHgt] = useState(document.documentElement.offsetHeight);
    useEffect(() => {
        const handleScroll = event => {

            // setScrolling(window.scrollY);
            const position = window.scrollY;
            // let scroll = 3400;
            // let scroll = 3.987106 * (clientHgt * 1.2 + 100);

            const scroll = 0;

            let scrollHeight = (clientHgt * 0.1112348);  // window height.


            const compOpacity = position >= scroll && position <= scroll + scrollHeight * 4 ? 0.0 :
                position >= scroll + scrollHeight * 4 && position <= scroll + scrollHeight * 8 ? 0.2 :
                    position >= scroll + scrollHeight * 8 && position <= scroll + scrollHeight * 16 ? 0.4 :
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

    useEffect(() => {
        const resizeViewPort = () => {
            setClientHgt(document.documentElement.offsetHeight)
        }

        window.addEventListener("resize", resizeViewPort)

        return () => {
            window.removeEventListener("resize", resizeViewPort)
        }
    }, []);

    const [animePlay, setAnimePlay] = useState(false);
    const elementRef = useRef(null);



    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    setAnimePlay(entry.isIntersecting)

                }

            });
        });
        observer.observe(elementRef.current);

        return () => {
            observer.disconnect();

        }
    }, []);

    useEffect(() => {
        let Title = 'Pitch Deck Potential with a Unique Differentiator - Pitch Catalyst'
        let Description = "Stand out from the competition with our powerful pitch deck differentiator. Unlock the potential of your pitch deck and secure the funding for your venture.";
        let Keywords = "unique selling proposition pitch deck, pitch deck key differentiators, pitch deck differentiation, pitch deck value drivers";
        let CanonicalLink = "https://pitchcatalyst.com/differentiator";
        let PageURL = window.location.pathname

        props.HandlePageTitle(Title, Description, CanonicalLink, Keywords, PageURL)
        // eslint-disable-next-line
    }, [])



    return (
        <div className="differentiator-comp-main-container" ref={elementRef}>
            {/* <p style={{ position: 'fixed', top: '15%', left: '1%', color: '#fff', zIndex: '10' }}>{compOpacity.toString()}/{scrolling.toString()}</p> */}

            <Stickyroll pages={3} factor={1.9}>
                {
                    !props.Query ? <DifferentiatorSubComp CompOpacity={compOpacity} Observer={animePlay} /> :
                        props.Query && <DifferentiatorSubMobileComp CompOpacity={compOpacity} Observer={animePlay} />
                }
            </Stickyroll>

        </div>)
}
