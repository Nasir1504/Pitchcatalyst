import { useEffect, useState } from 'react';
import './blog-main-comp.scss';


//components
import BlogSubComp from './Blog-Sub-Comp/blog-sub-comp';
import BlogLeftSubComp from './Blog-Left-Sub-Comp/blog-left-sub-comp';
import BlogTopSubComp from './Blog-Top-Sub-Comp/blog-top-sub-comp';


//images
import BgImg from "../../../assets/imgs/blog/technology-communication.jpg";
import BgImg1 from "../../../assets/imgs/blog/overhead-view-businesswoman-working.jpg";
// const BgImg = `https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/blog-page-img/logo-mask-image1.png`;
// const BgImg1 = `https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/blog-page-img/logo-mask-image.png`;


export default function BlogMainComp(props) {
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])
    const [maskVisibility, setMaskVisibility] = useState(true)

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


    return (
        <div className="blog-main-comp-main-container">
            {/* <p style={{position: 'fixed', top:'10%', left: '2%', color: '#fff'}}>{scrolling.toString()}</p> */}

            <img src={BgImg} alt="" className="masked-bg-img"
                style={{
                    WebkitMaskPosition: `${coords.x + 200}px ${(coords.y - 200)}px`,
                    opacity: maskVisibility && scrolling < '200' ? '0.5' : '0',
                }}
            />
            <img src={BgImg1} alt="" className="bg-logo-img" />

            <div className="left-content-div"
                style={{
                    opacity: scrolling >= '200' && '0'
                }}
            >
                <BlogLeftSubComp
                    SetMaskVisibility={setMaskVisibility}

                />
            </div>
            <div className="top-content-div"
                style={{
                    opacity: scrolling >= '200' && '1'
                }}
            >
                <BlogTopSubComp />
            </div>
            <div className="right-blog-content-container"
                style={{
                    width: scrolling >= 200 && '95%',
                    height: scrolling >= 200 && '80%',
                    top: scrolling >= 200 && '30%',
                    borderRadius: scrolling >= 200 && '4vw 0 0 0vw',
                    // opacity:'0'

                }}

            >
                <BlogSubComp Scrolling={scrolling} HandlePageTitle={props.HandlePageTitle} />


            </div>
        </div >)
}

