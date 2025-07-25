import React from 'react';
import './comp-one.scss';
import PhoneMocksComp from '../../Phone-Mocks-Comp/phone-mocks-comp';
import { Link } from 'react-router-dom';


import lampON from "../../../../../assets/imgs/home-page/group560.png"; 
import lampOff from "../../../../../assets/imgs/home-page/group561.png";

export default function CompOne(props) {
    return (
        <div className="comp-one-main-container">
            <PhoneMocksComp CompThirdOpacity={props.CompThirdOpacity} />

            <img src={lampOff} alt="" className="lamp-off-img"
                style={{
                    opacity: props.AnimePlay && '0'
                    // props.CompThirdOpacity >= '1' && '0',
                }}
            />

            <img src={lampON} alt="" className="lamp-on-img"
                style={{
                    opacity: props.AnimePlay || props.CompThirdOpacity >= 0.2 ? '1' : props.CompThirdOpacity < 0.8 && '0',
                    left: props.CompThirdOpacity >= '1' && '-60%',
                }}
            />
            <div className="content-div"
                style={{
                    marginLeft: props.CompThirdOpacity >= '1' && '-60%',
                }}
            >
                <p
                    style={{
                        color: props.AnimePlay ? '#E1FF01' : props.CompThirdOpacity < 0.8 && '#fff',
                        textShadow: props.AnimePlay ? '1px 10px 2px #000' : props.CompThirdOpacity < 0.8 && 'none'
                    }}
                >Our Service</p>
                <div className='heading'
                    style={{
                        color: props.AnimePlay ? '#E1FF01' : props.CompThirdOpacity < 0.8 && '#fff',
                        textShadow: props.AnimePlay ? '1px 10px 2px #000' : props.CompThirdOpacity < 0.8 && 'none'
                    }}
                >Deck Design</div>
                <p className="content-para">
                    The culmination of our design methodologies, industry expertise, and collaborative process,
                    is the successful outcome we deliver for our clients. With our decks, you're not just presenting
                    information, but telling a compelling story that facilitates business success. Experience the
                    Pitch Catalyst difference today - let us help you turn your pitch decks into persuasive narratives
                    that leave a lasting impression.
                </p>

                <div className="redesign-btn">
                    <div className="conical-div"></div>
                    <Link to='/team-up'>
                        <div className="front-div" >
                            Redesign
                        </div>

                    </Link>
                </div>
            </div>

        </div>)
}
