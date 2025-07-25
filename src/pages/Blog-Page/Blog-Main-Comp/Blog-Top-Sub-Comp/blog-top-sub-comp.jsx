import './blog-top-sub-comp.scss';
import BookmarkIcon from '@mui/icons-material/Bookmark';


// import BgImg1 from "../../../../assets/imgs/blog/logo_frame.png";
// const HeadingImg = `${ImageServer}img/Pitch-Catalyst/blog-page-img/heading-img.png`;
import HeadingImg from "../../../../assets/imgs/blog/blog-information.webp";


export default function BlogTopSubComp() {

    const searchData = [
        { name: 'News' },
        { name: 'One Page Pitch' },
        { name: 'Video Pitch' },
        { name: 'Aritcle' },
        { name: 'Web Pitch' },
        { name: 'Mobile Pitch' },


    ]
    return (
        <div className="blog-top-sub-comp-main-container">

            <div className="top-div">
                <div className="top-heading" >
                    <img src={HeadingImg} alt="" />
                </div>
                {/* <div className="search-bar-div">
                    <input className='searchtf' type="text" />
                    <button>SEARCH</button>
                </div> */}
                <div className="saved-icon-div">
                    <BookmarkIcon className='saved-icon'/>
                    <p>Saved</p>
                </div>
            </div>
            <div className="bottom-content">
                <div className="left-contents">
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
