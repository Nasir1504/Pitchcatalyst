import React from 'react';
import './more-catagory-desktop-comp.scss';
import { MoreCategoryCardData } from '../../Content-AI-Card-Comp/More-Category-Card/moreCategoryCardData';
import MoreCategoryCard from '../../Content-AI-Card-Comp/More-Category-Card/more-category-card';



export default function MoreCatagoryDesktopComp(props) {


    return (
        <div className="more-catagory-desktop-comp-main-container" >

            {
                MoreCategoryCardData.map((itemType, i) => {
                    return (
                        <div className="more-category-card-slide"
                            key={i}
                            style={{
                                transform: props.CompOpacity < 0.6 && i === 0 ? 'translate(100%)' :
                                    props.CompOpacity >= 0.6 && props.CompOpacity < 0.8 && i === 0 ? 'translate(0%)' :
                                        props.CompOpacity >= 0.8 && i === 0 ? 'translate(-100%)' :
                                            props.CompOpacity < 0.8 && i === 1 ? 'translate(-100%)' :
                                                props.CompOpacity >= 0.8 && i === 1 && 'translate(0%)',

                                zIndex: i === 0 ? '1' : i === 1 && '0'

                            }}
                        >
                            {
                                itemType.map((item, i) => {

                                    return (
                                        <div className="more-category-card-div"
                                            key={i}
                                        >
                                            <MoreCategoryCard
                                                Name1={item.name1}
                                                Name2={item.name2}
                                                Paragraph={item.paragraph}
                                            />
                                        </div>
                                    )
                                })
                            }

                        </div>
                    )
                })
            }

        </div>
    )
}
