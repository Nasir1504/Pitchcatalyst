import { useEffect } from 'react';
import './articles-and-blogs-mobile-comp.scss';
import ArticlesAndBlogsCard from '../../../Content-AI-Card-Comp/Articles-And-Blogs-Card/articles-and-blogs-card';
import { ArticlesAndBlogsData } from '../../../Content-AI-Card-Comp/Articles-And-Blogs-Card/articlesAndBlogsData';

export default function ArticlesAndBlogsMobileComp(props) {
    useEffect(() => { window.scrollTo(0, 0); }, [])

    return (
        <div className="articles-and-blogs-mobile-comp-main-container"
            style={{
                zIndex: props.CompOpacity >= 0 && props.CompOpacity < 0.2 && '1'
            }}
        >



            <h1 className="articles-and-blog-heading">
                Articles <span className="span1">&</span><br /><span className="span2">Blogs</span>
            </h1>

            <div className="scroll-div">
                <div className="slider-div">
                    {ArticlesAndBlogsData.map((item, i) => {
                        return <div
                            className="articles-card-div"
                            key={i}
                        >
                            <div className="inner-div">
                                <ArticlesAndBlogsCard
                                    Name1={item.name1}
                                    Name2={item.name2}
                                    Paragraph={item.paragraph}
                                />
                            </div>
                        </div>
                    })
                    }
                </div>
            </div>


            <div className="bottom-slider-btn-circular-div">
                <button className='explore-btn'>Explore More &nbsp;&nbsp;<span className='icon-span'>&#8250;</span></button>

            </div>

        </div>
    )
}
