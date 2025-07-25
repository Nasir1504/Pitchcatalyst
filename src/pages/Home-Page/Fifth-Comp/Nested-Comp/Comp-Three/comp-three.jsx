import React, { useState } from 'react';
import Calendar from 'react-calendar';
import {ImageServer} from '../../../../../img/imageServer';

import './comp-three.scss';
import { Day } from './Calender/calender';
import Icon from "../../../../../assets/imgs/home-page/calender.png";

export default function CompThree(props) {
    const [compOneAnime, setCompOneAnime] = useState(false);
    const [date, setDate] = useState(new Date())


    const handleMouseEvent = () => {
        setCompOneAnime(prev => !prev)
    }
    return (
        <div className="comp-three-main-container"
            onMouseOver={handleMouseEvent}
            onMouseOut={handleMouseEvent}
        >
            <div className="after-div">
                <div className="top-div">
                    <div className="img-div">
                        <p>{date.getDate()}</p>
                        <img src={Icon} alt="" />
                    </div>
                    <div className="right-div">
                        {
                            Day.map((item, i) => {
                                // const value = date.getMonth();
                                return (
                                    <div className='month-and-year-heading'
                                    key={i}
                                        style={{
                                            opacity: i === (date.getMonth()) ? '1' : '0'
                                        }}
                                    >{item.name}
                                        <span>{date.getFullYear()}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="bottom-div">
                    <div className="calendar-container">
                        <Calendar onChange={setDate} value={date} />
                    </div>
                    {/* <div className="text-center" >
                        Selected date: {date.toDateString()}
                    </div> */}

                </div>
            </div>

            <div className="before-div"
                style={{
                    animation: !props.Query && compOneAnime ? 'rotate 2s infinite linear alternate-reverse' :
                    props.Query && !compOneAnime && 'rotate 4s infinite linear alternate-reverse',

                }}
            >

            </div>
        </div >)
}
