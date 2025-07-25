import React, { useState } from 'react';
import './blog-card-comp.scss';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Link } from 'react-router-dom';


import logoImg from "../../../assets/imgs/blog/logo_frame.png";

export default function BlogCardComp(props) {

    const [fillSaveIcon, setFillSaveIcon] = useState(false);
    // const [fillLikeIcon, setFillLikeIcon] = useState(false);


    const headingName = props.Heading.replace(/ /g, "-");

    const headingLowerCase = headingName.toLowerCase();

    return (
        <div className="blog-card-comp-main-container">
            <div className="card-comp-div">
                <Link
                    className='img-link'
                    to={`/${headingLowerCase}`}
                    state={{ id: props.ID }}
                >
                    <div className="top-part">

                        <div className="card-logo-img-div">
                            <img src={logoImg} alt="" className="card-logo-img" />
                        </div>
                        <img src={props.ImgUrl} alt="" className="card-bg-img" />
                    </div>
                </Link>
                <div className="bottom-part">
                    <p className='para1'>
                        <span className='name-span'>
                            {props.Name}
                        </span>
                        {/* <span className="like-icon"
                            onClick={() => {
                                setFillLikeIcon(p => !p)
                            }}
                        >
                            {fillLikeIcon ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
                        </span> */}
                    </p>
                    <p className='para2'>
                        <span className='name-span'>

                            {props.About.substring(0, 50)}...

                            <Link
                                className='more-span'
                                to={`/${headingLowerCase}`}
                                state={{ id: props.ID }}

                            >READMORE</Link>
                        </span>

                        <span className="save-icon"
                            onClick={() => {
                                setFillSaveIcon(p => !p)
                            }}
                        >
                            {
                                fillSaveIcon ? <BookmarkIcon className='icon-btn'/> : <BookmarkBorderIcon className='icon-btn'/>
                            }
                        </span>
                    </p>
                </div>


            </div>

        </div>)
}
