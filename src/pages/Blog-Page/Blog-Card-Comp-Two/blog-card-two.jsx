import React from "react";
import "./blog-card-two.scss";
import { Link } from "react-router-dom";

//imgs
import LogoImg from "../../../assets/imgs/blog/logo_frame.png";

const BlogCardTwo = (props) => {

    const headingName = props.Heading.replace(/ /g, "-");
    const headingLowerCase = headingName.toLowerCase();

    // to open in new tab 
    // const handleRightClick = (e) => {
    //     e.preventDefault();
    //     const newTab = window.open(`/${headingLowerCase}`, '_blank');
    //     newTab.focus();
    // };

    return (
        <div className="blog-card-two-main-container" >
            <Link
                className='img-link'
                to={`/${headingLowerCase}`}
                state={{ id: props.ID }}

            >
                <div className="top-img-div">
                    <div className="card-logo">
                        <img src={LogoImg} alt="" className="card-logo-img" />
                    </div>
                    <img src={props.ImgUrl} alt="" className="card-bg-img" />

                    <p>{props.Name}</p>
                </div>
            </Link>
            <div className="content-div">
                <p>
                    <span className='name-span'>

                        {props.About.substring(0, 50)}...

                        <Link
                            className='more-span'
                            to={`/${headingLowerCase}`}
                            state={{ id: props.ID }}

                        >READMORE</Link>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default BlogCardTwo;