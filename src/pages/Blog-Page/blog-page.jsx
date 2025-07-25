import React, { useEffect} from 'react';
import './blog-page.scss';
import BlogMainComp from './Blog-Main-Comp/blog-main-comp';
import Stickyroll from "@stickyroll/react/stickyroll";


export default function BlogPage(props) {
    window.scrollTo(0, 0)

    // ----------------------------index.html--------------------------------------------------
    useEffect(() => {
        let Title = 'Blogs.'
        let Description = "Blogs.";
        let Keywords = "Blogs.";
        let CanonicalLink = "https://pitchcatalyst.com/blog";
        let PageURL = window.location.pathname

        props.HandlePageTitle(Title, Description, CanonicalLink, Keywords, PageURL)
        // eslint-disable-next-line
    }, [])


    return (
        <div className="blog-page-main-conainer">
            <Stickyroll pages={1} factor={1.5}>
                    <BlogMainComp HandlePageTitle={props.HandlePageTitle} />

            </Stickyroll>
        </div>)
}
