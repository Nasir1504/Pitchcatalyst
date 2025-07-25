import './ei-card-comp-two.scss';

// images
import LogoImg from "../../../assets/imgs/pricing/logoNeon.png";


export default function EICardCompTwo(props) {


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
        <div className="ei-card-comp-two-main-container"
            style={{
                transform: scroll >= 1 && id === 0 ? 'translateY(-100%)' :
                    scroll >= 1 && id === 1 ? 'translateY(10%)' :
                        scroll >= 1 && id === 2 && 'translateY(120%)',

                opacity: scroll >= 1 && '1',
            }}
        >

            <div className="main-content-div"
                style={{
                    transform: scroll >= 1.2 && 'translate(100vw)',
                    display: props.Query && 'none'

                }}
            >
                <div className="main-content-inner-div">

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
            <div className="name-and-logo-div"
                style={{
                    transform: scroll >= 1.2 && 'translate(-50vw)',
                    display: props.Query && 'none'


                }}
            >
                <div className="name-and-logo-inner-div">
                    <img src={LogoImg} alt="" className="logo-img" />
                    <div className="name-div">
                        <div className='name-heading'>
                            {name[0]} <br />
                            <span>
                                {name[1]} {name[2]}
                            </span>
                        </div>


                    </div>
                </div>
            </div>
            {/* <div className="pricing-details-div"
                style={{
                    transform: scroll >= 1.2 && 'translate(-50vw)',
                    display: props.Query && 'none'

                }}
            >
                <p
                    style={{ color: id !== 1 && '#fff' }}
                >
                    props.CountryCode === 'IN' ? 'RS.' : 'US$'
                    <span

                    >
                        &nbsp;{props.CountryCode === 'IN' ? props.Price : props.Price_USD}
                    </span>
                    &nbsp;OnWards
                </p>
            </div> */}

        </div>
    )
}
