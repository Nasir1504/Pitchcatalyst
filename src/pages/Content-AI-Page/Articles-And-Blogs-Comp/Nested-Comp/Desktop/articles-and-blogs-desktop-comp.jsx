import { useEffect, useState } from 'react';
import './articles-and-blogs-desktop-comp.scss';
import ArticlesAndBlogsCard from '../../../Content-AI-Card-Comp/Articles-And-Blogs-Card/articles-and-blogs-card';
import { ArticlesAndBlogsData } from '../../../Content-AI-Card-Comp/Articles-And-Blogs-Card/articlesAndBlogsData';

export default function ArticlesAndBlogsDesktopComp(props) {
    const LogoGrouped = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/pitch-content/grouped-logo.svg';
    const CircleMask = 'https://i.ibb.co/27SZb51/mask-circle643.png'
    
    useEffect(() => { window.scrollTo(0, 0); }, [])


    const [coords, setCoords] = useState({ x: 0, y: 0 });
    // const [scrolling, setScrolling] = useState(0);
    const [X, setX] = useState(27)

    function handleLeftSlide() {
        X >= -27 && X < 27 && setX(X + 18)

    }
    function handleRightSlide() {
        X > -27 && X <= 27 && setX(X - 18)
    }

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


    // useEffect(() => {

    //     const handleScroll = event => {
    //         setScrolling(window.scrollY);
    //     }

    //     window.addEventListener('scroll', handleScroll);


    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <div className='articles-and-blogs-desktop-comp'>
            <div className="masked-container">
                <img
                    src={LogoGrouped}
                    alt=""
                    className="masking-img"
                    style={{
                        WebkitMaskPosition: `${coords.x + 10}px ${(coords.y - 120)}px`,
                        maskImage: `url(${CircleMask})`,
                        WebkitMaskImage: `url(${CircleMask})`,
                    }}
                />
            </div>

            <h1 className="articles-and-blog-heading">
                Articles <span className="span1">&</span><br /><span className="span2">Blogs</span>
            </h1>
            <div className="slider-div">
                {ArticlesAndBlogsData.map((item, i) => {
                    return <div
                        className="articles-card-div"
                        key={i}
                        style={{
                            transform: `translate(${X}vw)`

                        }}
                    >
                        {/* <div className="inner-div">
                            {i}
                        </div> */}
                        <ArticlesAndBlogsCard
                            Name1={item.name1}
                            Name2={item.name2}
                            Paragraph={item.paragraph}
                        />
                    </div>
                })
                }
            </div>

            <div className="bottom-slider-btn-circular-div">
                <button
                    className="circular-btn-left"
                    onClick={handleLeftSlide}
                    style={{
                        transform: X === -27 && 'scale(1.4) translate(100%, 0%)',
                        display: X === 27 && 'none'

                    }}
                >
                    <span className='btn-text-span'>&#8249;</span>
                </button>
                <button
                    className="circular-btn-right"
                    onClick={handleRightSlide}
                    style={{
                        transform: X === 27 && 'scale(1.4) translate(-100%, 0% )',
                        display: X === -27 && 'none'

                    }}

                >
                    <span className='btn-text-span'>&#8250;</span>
                </button>

                <p className="slides-num">
                    {
                        X === 27 ? 4 :
                            X === 9 ? 5 :
                                X === -9 ? 6 :
                                    X === -27 && 7
                    }/7
                </p>

            </div>
        </div>
    )
}
