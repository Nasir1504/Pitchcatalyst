import { useEffect, useState } from 'react';
import './blog-left-sub-comp.scss';
import { motion } from "framer-motion";

import HeadingImg from "../../../../assets/imgs/blog/blog-information.webp";

export default function BlogLeftSubComp(props) {
    const searchData = [
        { name: 'News' },
        { name: 'One Page Pitch' },
        { name: 'Video Pitch' },
        { name: 'Aritcle' },
        { name: 'Web Pitch' },
        { name: 'Mobile Pitch' },


    ]
    const [cursorVariant, setCursorVariant] = useState('default');

    const [coords, setCoorde] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const handleWindowMouseMove = e => {
            setCoorde({
                x: e.clientX,
                y: e.clientY,
            })
        }
        window.addEventListener('mousemove', handleWindowMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleWindowMouseMove)
        }

    }, [])
    const variants = {
        default: {
            x: coords.x - 8,
            y: coords.y - 8,

        },
        enter: {
            height: '3.5vw',
            width: '3.5vw',
            x: coords.x - 30,
            y: coords.y - 30,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            // border: '5px solid #fff',
            mixBlendMode: 'exclusion'
        }
    }
    const handleCursorEnter = () => {
        setCursorVariant('enter')
        props.SetMaskVisibility(false)
    }
    const handleCursorLeave = () => {
        setCursorVariant('default')
        props.SetMaskVisibility(true)
    }

    // const [scrolling, setScrolling] = useState(0);
    return (
        <div className="blog-left-sub-comp-main-container">
            <motion.div
                className="magnifier"
                variants={variants}
                animate={cursorVariant}

            />
            <div className="top-heading"
                onMouseEnter={handleCursorEnter}
                onMouseLeave={handleCursorLeave}
            >
                <img src={HeadingImg} alt="" />
            </div>
            {/* <div className="search-bar-div">
                <input className='searchtf' type="text" />
                <button>SEARCH</button>
            </div> */}
            <div className="bottom-content">
                <p className='top-heading'>Trending Topics</p>
                <div className="bottom-contents">
                    {
                        searchData.map((item, i) => {
                            return (
                                <p key={i}>{item.name}</p>
                            )
                        })
                    }
                </div>
            </div>


        </div>)
}
