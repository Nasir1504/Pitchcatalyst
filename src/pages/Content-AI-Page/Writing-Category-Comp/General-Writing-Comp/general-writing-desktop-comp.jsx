import React from 'react';
import './general-writing-desktop-comp.scss';
import GeneralWritingCard from '../../Content-AI-Card-Comp/General-Writing-Card/general-writing-card';
import { GeneralWritingCardData } from '../../Content-AI-Card-Comp/General-Writing-Card/generalWritingCardData';

export default function GeneraWritingDesktopComp(props) {


    return (
        <div className="general-writing-desktop-comp-main-container" >

            {
                GeneralWritingCardData.map((itemType, i) => {

                    return (
                        <div className="gw-card-slide"
                            key={i}
                            style={{
                                transform: props.CompOpacity < 0.4 ? 'translate(0%)' :
                                    props.CompOpacity >= 0.4 && props.CompOpacity < 0.6 ? 'translate(-100%)' :
                                        props.CompOpacity >= 0.6 && 'translate(-200%)',
                            }}
                        >
                            {
                                itemType.map((item, i) => {

                                    return (
                                        <div className="gw-card-div"
                                            key={i}
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
