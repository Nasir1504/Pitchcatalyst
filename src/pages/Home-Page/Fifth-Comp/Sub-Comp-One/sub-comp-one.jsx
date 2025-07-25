import './sub-comp-one.scss';

import CompOne from '../Nested-Comp/Comp-One/comp-one';
import CompTwo from '../Nested-Comp/Comp-Two/comp-two';
import CompThree from '../Nested-Comp/Comp-Three/comp-three';
import CompFour from '../Nested-Comp/Comp-Four/comp-four';
import CompFive from '../Nested-Comp/Comp-Five/comp-five';
import CompSix from '../Nested-Comp/Comp-Six/comp-six';
import CompSeven from '../Nested-Comp/Comp-Seven/comp-seven';
import CompEight from '../Nested-Comp/Comp-Eight/comp-eight';
import CompNine from '../Nested-Comp/Comp-Ninth/comp-nine';
import CompTen from '../Nested-Comp/Comp-Ten/comp-ten';
import CompEleven from '../Nested-Comp/Comp-Eleven/comp-eleven';

import LogoImg from "../../../../assets/imgs/home-page/logo-img.png";


export default function SubCompOne(props) {
    return (
        <div className="sub-comp-one-main-container">

            <div className="content-div"
                style={{
                    left: props.CompFifthOpacity < '0.2' ? '100%' : props.CompFifthOpacity >= 0.2 && '33%',
                    transition: props.CompFifthOpacity < 0.2 && '0s',

                }}
            >
                <p><span><img src={LogoImg} alt="" /></span>Analytics</p>
                <div className='analytics-heading'>
                    Data-Driven Insights <br /> For Deck <span>Excellence</span>.
                </div>
            </div>
            <div className="dummy-comp-one"
                style={{
                    left: props.CompFifthOpacity < '0.2' ? '100%' : props.CompFifthOpacity >= 0.8 && '-20%',
                    transition: props.CompFifthOpacity < 0.2 && '0s'
                }}>
                <CompSix />
            </div>
            <div className="dummy-comp-two"
                style={{
                    left: props.CompFifthOpacity < '0.2' ? '100%' : props.CompFifthOpacity >= 0.8 && '-20%',
                    transition: props.CompFifthOpacity < 0.2 && '0s'
                }}>
                <CompEight />
            </div>

            <div className="comp-one-div"
                style={{
                    left: props.CompFifthOpacity < '0.2' ? '100%' : props.CompFifthOpacity >= 0.8 && '-20%',
                    transition: props.CompFifthOpacity < 0.2 && '0s'

                }}>
                <CompOne />
            </div>
            <div className="comp-two-div"
                style={{
                    left: props.CompFifthOpacity < '0.2' ? '100%' : props.CompFifthOpacity >= 0.8 && '-20%',
                    transition: props.CompFifthOpacity < 0.2 && '0s'
                }}>
                <CompTwo />
            </div>
            <div className="comp-three-div"

                style={{
                    left: props.CompFifthOpacity < '0.2' ? '100%' : props.CompFifthOpacity >= 0.8 && '-30%',
                    top: props.CompFifthOpacity < '0.2' ? '-20%' : props.CompFifthOpacity >= 0.8 && '-40%',
                    transition: props.CompFifthOpacity < 0.2 && '0s'
                }}>
                <CompThree />
            </div>
            <div className="comp-four-div"
                style={{
                    left: props.CompFifthOpacity < '0.2' ? '100%' : props.CompFifthOpacity >= 0.8 && '-50%',
                    top: props.CompFifthOpacity < '0.2' ? '60%' : props.CompFifthOpacity >= 0.8 && '120%',
                    transform: props.CompFifthOpacity >= 0.8 && 'rotate(-180deg)',
                    transition: props.CompFifthOpacity < 0.2 && '0s'
                }}>
                <CompFour />
            </div>
            <div className="comp-five-div"
                style={{
                    top: props.CompFifthOpacity < '0.2' ? '-10%' : props.CompFifthOpacity >= 0.8 && '18%',
                    left: props.CompFifthOpacity < '0.2' ? '100%' : props.CompFifthOpacity >= 0.8 && '-4%',
                    transition: props.CompFifthOpacity < 0.2 && '0s'
                }}>
                <CompFive />
            </div>
            <div className="comp-six-div" style={{
                left: props.CompFifthOpacity < '0.2' ? '100%' : props.CompFifthOpacity >= 0.8 && '12%',
                transition: props.CompFifthOpacity < 0.2 && '0s'

            }}>
                <CompSix />
            </div>
            <div className="comp-seven-div" style={{
                left: props.CompFifthOpacity < '0.2' ? '100%' : props.CompFifthOpacity >= 0.8 && '82%',
                transition: props.CompFifthOpacity < 0.2 && '0s'

            }}>
                <CompSeven />
            </div>
            <div className="comp-eight-div" style={{
                left: props.CompFifthOpacity >= 0.8 && '12%',
                top: props.CompFifthOpacity >= 0.8 && '55%',
                transition: props.CompFifthOpacity < 0.2 && '0s'
            }}>
                <CompEight />
            </div>
            <div className="comp-nine-div" style={{
                left: props.CompFifthOpacity >= 0.8 && '35%',
                top: props.CompFifthOpacity >= 0.8 && '48%',
                transition: props.CompFifthOpacity < 0.2 && '0s'
            }}><CompNine /></div>
            <div className="comp-ten-div" style={{
                left: props.CompFifthOpacity >= 0.8 && '56%',
                top: props.CompFifthOpacity >= 0.8 && '40%',
                transition: props.CompFifthOpacity < 0.2 && '0s'
            }}><CompTen /></div>
            <div className="comp-eleven-div" style={{
                left: props.CompFifthOpacity >= 0.8 && '60%',
                top: props.CompFifthOpacity >= 0.8 && '55%',
                transition: props.CompFifthOpacity < 0.2 && '0s'
            }}><CompEleven /></div>
            <div className="comp-twelve-div" style={{
                left: props.CompFifthOpacity >= 0.8 && '84%',
                top: props.CompFifthOpacity >= 0.8 && '32%',
                transition: props.CompFifthOpacity < 0.2 && '0s'
            }}><CompOne /></div>
        </div>)
}
