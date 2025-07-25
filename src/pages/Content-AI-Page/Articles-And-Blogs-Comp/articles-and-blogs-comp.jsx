// import react from 'react';
import './articles-and-blogs-comp.scss';
import ArticlesAndBlogsDesktopComp from './Nested-Comp/Desktop/articles-and-blogs-desktop-comp';
import ArticlesAndBlogsMobileComp from './Nested-Comp/Mobile/articles-and-blogs-mobile-comp';


export default function ArticlesAndBlogsComp(props) {
    // const LogoGrouped = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/pitch-content/grouped-logo.svg';

    return (
        <div className="articles-and-blogs-comp-main-container"
            style={{
                transform: props.CompOpacity >= 0.2 && 'translateY(-100%)',
                opacity: props.CompOpacity >= 0.2 && 0,
                zIndex: props.CompOpacity >= 0 && props.CompOpacity < 0.2 && '1'

            }}
        >{
                !props.Query ?
                    <ArticlesAndBlogsDesktopComp Query={props.Query} CompOpacity={props.CompOpacity} />
                    :
                    <ArticlesAndBlogsMobileComp Query={props.Query} CompOpacity={props.CompOpacity} />

            }
        </div>
    )
}
