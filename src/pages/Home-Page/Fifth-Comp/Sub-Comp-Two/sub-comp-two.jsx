import React from 'react';
import './sub-comp-two.scss';
import { ImageServer } from '../../../../img/imageServer';



import CompOne from '../Nested-Comp/Comp-One/comp-one';
import CompTwo from '../Nested-Comp/Comp-Two/comp-two';
import CompThree from '../Nested-Comp/Comp-Three/comp-three';
import CompFour from '../Nested-Comp/Comp-Four/comp-four';
import CompFive from '../Nested-Comp/Comp-Five/comp-five';
import CompSix from '../Nested-Comp/Comp-Six/comp-six';
// import CompSeven from '../Nested-Comp/Comp-Seven/comp-seven';
import CompEight from '../Nested-Comp/Comp-Eight/comp-eight';
import CompNine from '../Nested-Comp/Comp-Ninth/comp-nine';
import CompTen from '../Nested-Comp/Comp-Ten/comp-ten';
import CompEleven from '../Nested-Comp/Comp-Eleven/comp-eleven';

const LogoImg = `${ImageServer}img/Pitch-Catalyst/home-page-imgs/logo-img.png`;
export default function SubCompTwo(props) {


    // console.log(props.CompFifthOpacity)
    return (
        <div className="sub-comp-two-main-container">
            <div className="content-div"
                style={{
                    left: props.CompFifthOpacity < '0.2' ? '100%' : props.CompFifthOpacity >= 0.2 && '8%',
                    transition: props.CompFifthOpacity < 0.2 && '0s',

                }}
            >
                <p><span><img src={LogoImg} alt="" /></span>Analytics</p>
                <div className='analytics-heading'>
                    Data-Driven Insights <br /> For Deck <span>Excellence</span>.
                </div>
            </div>
            <div className="comp-one-div"
                style={{
                    left: props.CompFifthOpacity < '0.2' ? '100%' : props.CompFifthOpacity >= 0.8 && '-50%',
                    transition: props.CompFifthOpacity < 0.2 && '0s'

                }}>
                <CompOne Query={props.Query} />
            </div>
            <div className="comp-two-div"
                style={{
                    left: props.CompFifthOpacity < '0.2' ? '100%' : props.CompFifthOpacity >= 0.8 && '-80%',
                    transition: props.CompFifthOpacity < 0.2 && '0s'
                }}>
                <CompTwo Query={props.Query}/>
            </div>
            <div className="comp-three-div"

                style={{
                    left: props.CompFifthOpacity < '0.2' ? '100%' : props.CompFifthOpacity >= 0.8 && '-80%',
                    top: props.CompFifthOpacity < '0.2' ? '-20%' : props.CompFifthOpacity >= 0.8 && '0%',
                    transition: props.CompFifthOpacity < 0.2 && '0s'
                }}>
                <CompThree Query={props.Query}/>
            </div>
            <div className="comp-four-div"
                style={{
                    left: props.CompFifthOpacity < '0.2' ? '100%' : props.CompFifthOpacity >= 0.8 && '-50%',
                    top: props.CompFifthOpacity < '0.2' ? '60%' : props.CompFifthOpacity >= 0.8 && '120%',
                    transform: props.CompFifthOpacity >= 0.8 && 'rotate(-180deg)',
                    transition: props.CompFifthOpacity < 0.2 && '0s'
                }}>
                <CompFour Query={props.Query}/>
            </div>
            <div className="comp-five-div"
                style={{
                    top: props.CompFifthOpacity < '0.2' ? '-10%' : props.CompFifthOpacity >= 0.8 && '24.5%',
                    left: props.CompFifthOpacity < '0.2' ? '100%' : props.CompFifthOpacity >= 0.8 && '5%',
                    transition: props.CompFifthOpacity < 0.2 && '0s'
                }}>
                <CompFive Query={props.Query}/>
            </div>
            <div className="comp-six-div" style={{
                top: props.CompFifthOpacity < '0.2' ? '-10%' : props.CompFifthOpacity >= 0.8 && '33%',
                left: props.CompFifthOpacity < '0.2' ? '100%' : props.CompFifthOpacity >= 0.8 && '47%',
                transition: props.CompFifthOpacity < 0.2 && '0s'

            }}>
                <CompSix Query={props.Query}/>
            </div>

            <div className="comp-eight-div" style={{
                left: props.CompFifthOpacity >= 0.8 && '47%',
                top: props.CompFifthOpacity >= 0.8 && '51%',
                transition: props.CompFifthOpacity < 0.2 && '0s'
            }}>
                <CompEight Query={props.Query}/>
            </div>
            <div className="comp-nine-div" style={{
                left: props.CompFifthOpacity >= 0.8 && '8%',
                top: props.CompFifthOpacity >= 0.8 && '33%',
                transition: props.CompFifthOpacity < 0.2 && '0s'
            }}>
                <CompNine Query={props.Query}/>
            </div>
            <div className="comp-ten-div" style={{
                left: props.CompFifthOpacity >= 0.8 && '46%',
                top: props.CompFifthOpacity >= 0.8 && '83%',
                transition: props.CompFifthOpacity < 0.2 && '0s'
            }}>
                <CompTen Query={props.Query}/>
            </div>
            <div className="comp-eleven-div" style={{
                left: props.CompFifthOpacity >= 0.8 && '8%',
                top: props.CompFifthOpacity >= 0.8 && '63%',
                transition: props.CompFifthOpacity < 0.2 && '0s'
            }}><CompEleven Query={props.Query}/></div>

        </div>
    )
}
