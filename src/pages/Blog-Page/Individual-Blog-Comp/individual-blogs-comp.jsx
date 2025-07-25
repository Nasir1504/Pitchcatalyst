import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./individual-blogs-comp.scss";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { MiddleBlogsData } from "../BlogsPageData";
import BlogContentsComp from '../Blog-Contents-Comp/blog-contents-comp';
import BlogCardTwo from "../Blog-Card-Comp-Two/blog-card-two";

//icon-images
import Logo from "../../../assets/imgs/blog/logo_frame2.png";
import Linkedin from "../../../assets/imgs/home-page/linkedin.png";
import BgImg1 from "../../../assets/imgs/blog/logo_frame.png";




export default function IndividualBlogsComp(props) {
    window.scrollTo(0, 0);
    function ScrollToTop() {
        document.getElementById("scroller").scrollTo(0, 0);
    }

    let { individual } = useParams();


    const CurrentBlogName = MiddleBlogsData.filter((item) => {
        const headingName = item.mainHeading.replace(/ /g, "-");

        const headingLowerCase = headingName.toLowerCase();

        return headingLowerCase === individual

    })

    // ----------------------------index.html--------------------------------------------------
    useEffect(() => {

        if (individual !== '') {
            let Title = individual
            let Description = individual;
            let Keywords = individual;
            let CanonicalLink = `https://pitchcatalyst.com/${individual.toLowerCase().replace(/ /g, "-")}`;

            props.HandlePageTitle(Title, Description, CanonicalLink, Keywords)
        }
        // eslint-disable-next-line
    }, [individual])

    return (
        <>
            <div className="individual-blogs-comp-main-container">
                <div className="left-part">
                    <div className="top-part">
                        <div className="top-part-main-div">
                            <div className="name-div">
                                <div className="img-div">
                                    <img src={Logo} alt="" />
                                </div>
                                <div className="para-div">
                                    <p>
                                        {CurrentBlogName[0].name}
                                        {/* Rental Application */}
                                        <br />
                                        <span>
                                            {/* Dec 2022 */}
                                        </span>
                                    </p>

                                </div>
                            </div>
                            <div className="icons-div">
                                <div className="social-media-icons">
                                    {/* <img src={Twitter} alt="" /> */}
                                    {/* <a href="###" target="_blank" rel='noreferrer'>
                                        <img src={Facebook} alt="" />

                                    </a> */}
                                    {/* <a href="###" target="_blank" rel='noreferrer'>
                                        <img src={Instagram} alt="" />

                                    </a> */}
                                    <a href="https://www.linkedin.com/company/pitch-catalyst/about/" target="_blank" rel='noreferrer'>
                                        <img src={Linkedin} alt="" />

                                    </a>

                                </div>
                                <div className="save-icon-div">
                                    <BookmarkBorderIcon className="save-icon" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-part" id="scroller">

                        <div className="bottom-part-main-div">
                            {MiddleBlogsData.map((item, index) => {

                                const headingName = item.mainHeading.replace(/ /g, "-");

                                const headingLowerCase = headingName.toLowerCase();
                                return (

                                    <div className="blog-container"
                                        key={index}
                                        style={{
                                            display: individual !== headingLowerCase && "none"
                                        }}
                                    >
                                        <BlogContentsComp
                                            key={index}
                                            mainHeading={item.mainHeading}
                                            subHeading={item.subHeading}
                                            image={item.imgURL}
                                            imgDescription={item.imgDescription}
                                            BlogsContents={item.BlogsContents}

                                        />
                                    </div>

                                );
                            })}

                        </div>

                    </div>

                </div>
                <div className="rigth-part">
                    <div className="card-div">
                        {
                            MiddleBlogsData.map((item, i) => {
                                const headingName = item.mainHeading.replace(/ /g, "-");

                                const headingLowerCase = headingName.toLowerCase();
                                return (

                                    <div
                                        className="blog-card-div"
                                        onClick={ScrollToTop}
                                        style={{
                                            display: individual === headingLowerCase && "none ",
                                        }}
                                        key={i}
                                    >
                                        <BlogCardTwo
                                            ImgUrl={item.img}
                                            Name={item.name}
                                            Heading={item.mainHeading}
                                            About={item.mainHeading}
                                            LogoImage={BgImg1}
                                            ID={i}
                                        />
                                    </div>

                                );
                            })}
                    </div>

                </div>

            </div>
        </>
    );

}
