import React from 'react';
import './more-catagory-mobile-comp.scss';
import { MoreCategoryCardData } from '../../Content-AI-Card-Comp/More-Category-Card/moreCategoryCardData';
import MoreCategoryCard from '../../Content-AI-Card-Comp/More-Category-Card/more-category-card';


export default function MoreCatagoryMobileComp(props) {


    return (
        <div className="more-catagory-mobile-comp-main-container" >

            {
                MoreCategoryCardData.map((itemType, i) => {
                    return (
                        <div className="more-category-card-slide"
                            key={i}
                        >
                            {
                                itemType.map((item, i) => {

                                    return (
                                        <div className="more-category-card-div"
                                            key={i}
                                            style={{
                                                marginLeft: i === 0 && '15%',
                                                marginRight: i === itemType.length - 1 && '15%'
                                            }}
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
