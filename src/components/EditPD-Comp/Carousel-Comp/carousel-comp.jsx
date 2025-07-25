import React  from 'react';
import './carousel-comp.scss';
import { CarouselCompData } from './carousel-comp-data';

export default function EditPDComp(props) {
    
    return (
        <div className="editpd-comp-main-container" >

            <div className="slider">
                {
                    CarouselCompData.map((item, i) => {
                        return (
                            <div className="slides" key={i}


                                style={{
                                    transform: i === props.count ? `translateX(${props.x}%) scale(4.5)` :
                                        i === props.count - 1 ? `translate(${props.x}%) scale(2.5) rotate(5.74deg)` :
                                            i === props.count + 1 ? `translate(${props.x}%) scale(2.5) rotate(-5.74deg)` :
                                                i === props.count - 2 ? `translate(${props.x}%) scale(1) rotate(5.74deg)` :
                                                    i === props.count + 2 ? `translate(${props.x}%) scale(1) rotate(-5.74deg)` : `translate(${props.x}%)`,

                                    margin: i === props.count ? '0 18% 0 18%' : '0 3% 0 3%',
                                    animation: i === props.count - 2 || i === props.count + 2 ? 'identifier 2s infinite alternate' : i === props.count - 1 || i === props.count + 1 ? 'identifier2 2s infinite alternate' : 'none',
                                    animationTimingFunction: 'ease-in-out',
                                    // cursor: isMouseDown && 'grabbing'

                                }}
                            >
                                <img src={item.imgURL} alt="" />
                                {/* <p style={{ position: 'absolute', color: '#333' }}>{i}</p> */}
                                <div className={i === props.count - 2 ? 'blurred-div' : i === props.count + 2 ? 'blurred-div' : 'not-blured-div'}></div>
                                <div className="shadow-div"
                                    style={{
                                        opacity: i === props.count ? '0' : i === props.count - 1 || i === props.count + 1 ? '0.15' : '0.15',
                                        transform: i === props.count - 1 || i === props.count - 2 ? `rotate(-5deg)` : i === props.count + 1 || i === props.count + 2 ? `rotate(+5deg)` : i === props.count && `rotate(0deg)`,
                                        transition: i === props.count ? '0.2s' : '2s'


                                    }}
                                ></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
