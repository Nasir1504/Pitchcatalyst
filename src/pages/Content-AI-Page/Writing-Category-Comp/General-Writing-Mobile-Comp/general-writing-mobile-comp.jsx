import React from 'react';
import './general-writing-mobile-comp.scss';
import { GeneralWritingCardData } from '../../Content-AI-Card-Comp/General-Writing-Card/generalWritingCardData';
import GeneralWritingCard from '../../Content-AI-Card-Comp/General-Writing-Card/general-writing-card';


export default function GeneraWritingMobileComp(props) {


    return (
        <div className="general-writing-mobile-comp-main-container" >

            {
                GeneralWritingCardData.map((itemType, i) => {

                    return (
                        <div className="gw-card-slide"
                            key={i}
                        >
                            {
                                itemType.map((item, i) => {

                                    return (
                                        <div className="gw-card-div"
                                            key={i}
                                            style={{
                                                marginLeft: i === 0 && '15%',
                                                marginRight: i === itemType.length - 1 && '15%'
                                            }}
                                        >
                                            <GeneralWritingCard
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
