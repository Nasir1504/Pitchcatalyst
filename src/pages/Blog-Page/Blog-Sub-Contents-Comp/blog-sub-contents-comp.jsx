import React from "react";
import "./blog-sub-contents-comp.scss";

export default function BlogSubContentsComp(props) {
    
    return (<>
        <div className="blog-sub-contents-comp-main-container">
            <div className="details">
                <h1>{props.heading}</h1>
                <p>{props.para}</p>

                {
                    props.subPara.map((item, i) => {
                        return <div className="sub-para-div" key={i} style={{ display: item === '' && 'none' }} >
                            <div className="bullet-point-div">
                                <span></span>

                            </div>
                            <p className="sub-para" >
                                {item.point}
                            </p>
                        </div>


                    })
                }
            </div>
        </div>
    </>);
}