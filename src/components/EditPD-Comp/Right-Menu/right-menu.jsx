import React from 'react';
import './right-menu.scss';
import { CarouselCompData } from '../Carousel-Comp/carousel-comp-data';


export default function RightMenu(props) {
    return (
        <div className="right-menu-main-container">
            <span className="cross-btn" onClick={props.RightSliderFalse}>
                &#215;
            </span>

            <div className="slide-item-main-div">
                {CarouselCompData.map((item, i) => {
                    const itemNum = i < 9 ? ("0" + (i + 1)).toString() : (i + 1).toString();
                    return (
                        <div
                            className="slide-item-div"
                            key={i}
                            onClick={() => {
                                props.NavigateToItem(i)
                                props.HandleEditCompVisibilityTrue()
                                props.RightSliderFalse()
                            }}
                            style={{
                                backgroundColor: i === props.Count && '#F8F8F8'
                            }}

                        >
                            <p>SLIDE NO.- {(itemNum)} <br />
                                <span>HOME SLIDE</span>
                            </p>

                            <div className="img-div"><img src={item.imgURL} alt="" /></div>

                            <span className="edit-btn">&#x270E;</span>

                        </div>
                    )
                })}

            </div>




        </div>
    )
}


//RightSlider
// RightSliderTrue
// RightSliderFalse