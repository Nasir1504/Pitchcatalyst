import React from 'react';

//styles
import './ei-card-comp.scss';

// // images
import LogoImg from "../../../assets/imgs/pricing/logoNeon.png";
import LogoImg2 from "../../../assets/imgs/pricing/logoBlack.png";

export default function EICardComp(props) {

    //Id
    // Name
    // Price
    // Heading_1
    // Heading_para
    // Heading_2
    // Details_lists
    //OPCompScrolling


    const scroll = props.OPCompScrolling;
    const id = props.Id;

    const name = props.Name.split(' ');
    const headingOne = props.Heading_1.split(' ');

    return (
        <div className="ei-card-comp-main-container"
            style={{

                transform: scroll >= 0.4 && scroll < 0.6 && id === 0 ? 'translateY(0%)' :
                    scroll >= 0.6 && id === 0 ? 'translate(5%) rotate(10deg) scale(0.9)' :
                        scroll >= 0.6 && scroll < 0.8 && id === 1 ? 'translateY(0%)' :
                            scroll >= 0.8 && id === 1 ? 'translate(5%) rotate(-10deg) scale(0.9)' :
                                scroll >= 0.8 && id === 2 && 'translateY(0%)',

                opacity: scroll >= 0.4 && scroll < 0.6 && id === 0 ? '1' :
                    !props.Query && scroll >= 0.6 && scroll < 1 && id === 0 ? '0.4' :
                        props.Query && scroll >= 0.6 && scroll < 1 && id === 0 ? '0' :

                            scroll >= 0.6 && scroll < 0.8 && id === 1 ? '1' :
                                !props.Query && scroll >= 0.8 && scroll < 1 && id === 1 ? '0.4' :
                                    props.Query && scroll >= 0.8 && scroll < 1 && id === 1 ? '0' :

                                        scroll >= 0.8 && scroll < 1 && id === 2 ? '1' :
                                            scroll >= 1 && id >= 0 && '0',
                transition: scroll >= 1 && 'ease-in-out 0.4s'

            }}

        >

            <div className="main-content-div">

                <div className="main-content-inner-div">

                    <div className="top-left-heading">
                        <div className='solid-heading' >{headingOne[0]} <br /><span>{headingOne[1]}</span></div>
                        <div className='blur-heading'>{headingOne[0]} <br /><span>{headingOne[1]}</span></div>

                        {/* <p>{props.Heading_para}</p> */}
                    </div>
                    <div className="top-right-heading">
                        <img src={LogoImg2} alt="" className="logo-dark-img" /> <div className='heading'>{props.Heading_2}</div>
                    </div>

                    <div className="content-list-div">
                        {
                            props.Detail_lists.map((item, i) => {
                                return <div className='list-div' key={i}>
                                    <span></span>
                                    <p
                                        key={i}
                                        style={{
                                            backgroundColor: (i + 1) % 2 === 0 && '#232323'
                                        }}
                                    >{item.list}</p>
                                </div>
                            })
                        }
                    </div>
                    <div className="dot-list-div"
                    // style={{
                    //     height: `${props.Detail_lists.length * 2.25}vw`
                    // }}
                    >
                        {
                            props.Detail_lists.map((_, i) => {
                                return <div className='dot-div' key={i}><span /></div>

                            })
                        }
                    </div>
                    {/* <Link
                        to='/team-up'
                        className="contact-us-link"
                        style={{
                            display: scroll === 0.4 && id !== 0 ? 'none' :
                                scroll === 0.6 && id !== 1 ? 'none' :
                                    scroll === 0.8 && id !== 2 && 'none'
                        }}

                    >CONTACT US</Link> */}


                </div>

            </div>
            <div className="name-and-logo-div">
                <div className="name-and-logo-inner-div">
                    <img src={LogoImg} alt="" className="logo-img" />
                    <div className="name-div">
                        <div className='name-heading'>
                            {name[0]} <br />
                            <span>
                                {name[1]} {name[2]}
                            </span>
                        </div>

                        <div className="price-div">

                            {/* <p>Starts from 	&#x20B9;{props.Price}</p> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="pricing-details-div" >
                <p
                    style={{ color: id !== 1 && '#fff' }}
                >
                    {props.CountryCode === 'IN' ? 'RS.' : 'US$'}
                    <span

                    >
                        &nbsp;{props.CountryCode === 'IN' ? props.Price : props.Price_USD}
                    </span>
                    &nbsp;OnWards
                </p>
            </div> */}

            <a className="pricing-details-div" href='https://wa.me/9711750002?text=Hey there, seeking deck expertise – can we sync up for a chat?' target="_blank" rel="noreferrer">
                <p>
                    CONTACT US

                </p>
            </a>

        </div>
    )
}
