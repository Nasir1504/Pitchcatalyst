import React from 'react';
import './blog-sub-comp.scss';
import { ImageServer } from '../../../../img/imageServer';
import BlogCardComp from '../../Blog-Card-Comp/blog-card-comp';
import { MiddleBlogsData } from '../../BlogsPageData';
import { Link } from 'react-router-dom';


const BgImg1 = `${ImageServer}img/Pitch-Catalyst/blog-page-img/logo-mask-image.png`;
export default function BlogSubComp(props) {

    // RIGHT BLOG SECTION (TOP THREE CARDS)fdsg


    return (
        <div className="blog-sub-comp-main-container">
            <div className="comp-part-one"
                style={{
                    opacity: props.Scrolling >= '200' && '0',
                    zIndex: props.Scrolling >= '200' && '0'
                }}
            >

                {
                    MiddleBlogsData.map((item, i) => {

                        const headingName = item.mainHeading.replace(/ /g, "-");

                        const headingLowerCase = headingName.toLowerCase();


                        return (
                            <div className="blog-contants-div"
                                key={i}
                                style={{
                                    display: MiddleBlogsData.length - 4 >= i && 'none',
                                    // transform: i === MiddleBlogsData.length - 2 && `scale(2)`,

                                }}
                            >
                                <p className="blog-type-para"
                                    style={{
                                        marginTop: i === MiddleBlogsData.length - 2 && `15%`,
                                        transform: i === MiddleBlogsData.length - 2 && `scale(1.6)`,

                                    }}
                                >
                                    {item.mainHeading.substring(0, 50)}...
                                    <Link
                                        className='more-span'
                                        to={`/${headingLowerCase}`}
                                        state={{ id: i }}
                                       
                                    >More</Link>
                                </p>

                                <div className="container-div"
                                    style={{
                                        transform: i === MiddleBlogsData.length - 2 && `scale(1.6)`,
                                    }}
                                >
                                    <Link
                                        className='link-to-div'
                                        to={`/${headingLowerCase}`}
                                        state={{ id: i }}

                                    > </Link>
                                    <div className="bg-img-div">
                                        <div className="upper-layer"></div>
                                        <img className='bg-img' src={item.img} alt="" />
                                    </div>
                                    <img src={BgImg1} alt="" className="left-img" />
                                    <div className="rigth-contant" >
                                        {item.name}
                                        {/* {i} */}
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

            <div className="comp-part-two"
                style={{
                    opacity: props.Scrolling >= '200' && '1',
                    zIndex: props.Scrolling >= '200' && '1',
                }}
            >
                {
                    MiddleBlogsData.map((item, i) => {
                        return (
                            <div className="card-comp-div" key={i}>
                                <BlogCardComp
                                    ImgUrl={item.img}
                                    Name={item.name}
                                    Heading={item.mainHeading}
                                    About={item.mainHeading}
                                    LogoImage={BgImg1}
                                    ID={i}
                                />
                            </div>
                        )
                    })
                }

            </div>

        </div>)
}
