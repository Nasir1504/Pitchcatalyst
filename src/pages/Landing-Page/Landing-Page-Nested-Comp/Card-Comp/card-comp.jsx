import React from 'react';

//styles
import './card-comp.scss';


export default function CardComp(props) {
    //images
    const PDFImg = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/landing-page/group838.png';
    const LogoImg = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/our-pricing/logoNeon.png';

    //Id
    // Name
    // Price
    // Heading_1
    // Heading_para
    // Heading_2
    // Details_lists
    //OPCompScrolling

    // const scroll = props.OPCompScrolling;
    const id = props.Id;

    const name = props.Name.split(' ');
    const headingOne = props.Heading_1.split(' ');
    return (
        <div className="card-comp-main-container">
            <div className="left-div">
                <div className="inner-div">
                    <img src={id === 0 ? PDFImg : LogoImg} alt="" className="logo-img" />
                    <div className="name-div">
                        <div className='heading'>
                            {name[0]} <br />
                            <span>
                                {name[1]} {name[2]}
                            </span>
                        </div>
                    </div>

                    {/* <p>Starts from Rs {props.Price}</p> */}


                </div>
            </div>
            <div className="right-div">
                <div className="inner-div">
                    <div className="top-left-heading">
                        <div className='solid-heading' >{headingOne[0]} <br /><span>{headingOne[1]}</span></div>
                        <div className='blur-heading'>{headingOne[0]} <br /><span>{headingOne[1]}</span></div>

                    </div>

                    <div className="content-list-div">
                        {
                            props.Detail_lists.map((item, i) => {
                                return <div className='list-div' key={i}>
                                    <span></span>
                                    <p
                                        key={i}
                                    >{item.list}</p>
                                </div>
                            })
                        }
                    </div>


                </div>
            </div>

        </div>
    )
}
