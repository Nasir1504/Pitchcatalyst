import "./blog-contents-comp.scss";
// import BlogSubContentsComp from "../Blog-Sub-Contents-Comp/blog-sub-contents-comp";
import BlogSubContentsComp from "../Blog-Sub-Contents-Comp/blog-sub-contents-comp";


export default function BlogContentsComp(props) {
    const details = props.BlogsContents;

    return (
        <>
            <div className="blog-contents-comp-main-container">

                <div className="main-heading">{props.mainHeading}</div>
                <div className="blog-sub-heading">{props.subHeading}</div>

                <div className="blog-main-contents">
                    {
                        details.map((item, index) => {
                            return (
                                <div key={index}>
                                    <BlogSubContentsComp
                                        key={index}
                                        id={index}
                                        heading={item.heading}
                                        para={item.para}
                                        subPara={item.subPara}
                                    />
                                </ div>
                            );
                        })
                    }

                </div>



            </div>
        </>
    );
}