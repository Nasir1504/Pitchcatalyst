
import React, { useState } from 'react';
import './navbar-one-comp.scss';

import { Link } from 'react-router-dom';

// component
import './navbar-one-comp.scss';

import Logo from "../../../../assets/imgs/home-page/frame577.png";

// const Logo = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/nav-bar-img/frame577.png';

export default function NavbarOneComp(props) {


    // eslint-disable-next-line 
    const [login, setLogin] = useState(false);

    return (
        <div className="navbar-one-comp-main-container">
            <div className="logo-div">
                <Link to='/'
                    className='link-tag'
                >
                    <img src={Logo} alt=""
                        onClick={() => {
                            props.HandlePageScrolling()
                        }}
                    />
                </Link>
            </div>
            <div className="nav-items-div">
                <Link
                    className='links-tag'
                    to='/differentiator'
                    style={{
                        color: props.CompTrigger === '/differentiator' && '#E1FF00',
                        textTransform: props.CompTrigger === '/differentiator' && 'uppercase'
                    }}
                >
                    Differentiator
                    <span
                        style={{
                            opacity: props.CompTrigger === '/differentiator' && '1'
                        }}
                    />
                </Link>

                <Link
                    className='links-tag'
                    // onClick={handleClick}
                    to='/how-it-works'
                    style={{
                        color: props.CompTrigger === '/how-it-works' && '#E1FF00',
                        textTransform: props.CompTrigger === '/how-it-works' && 'uppercase'

                    }}
                >
                    Procedure
                    <span
                        style={{
                            opacity: props.CompTrigger === '/how-it-works' && '1'
                        }}
                    />

                </Link>

                <Link
                    className='links-tag'
                    to='/our-pricing'
                    style={{
                        color: props.CompTrigger === '/our-pricing' && '#E1FF00',
                        textTransform: props.CompTrigger === '/our-pricing' && 'uppercase'

                    }}
                >
                    Pricing
                    <span
                        style={{
                            opacity: props.CompTrigger === '/our-pricing' && '1'
                        }}
                    />
                </Link>

                <Link
                    className='links-tag'
                    to='/about-us'
                    style={{
                        color: props.CompTrigger === '/about-us' && '#E1FF00',
                        textTransform: props.CompTrigger === '/about-us' && 'uppercase'

                    }}
                >
                    About
                    <span
                        style={{
                            opacity: props.CompTrigger === '/about-us' && '1'
                        }}
                    />
                </Link>

                <Link
                    className='links-tag'
                    to='/blog'
                    style={{
                        color: props.CompTrigger === '/blog' && '#E1FF00',
                        textTransform: props.CompTrigger === '/blog' && 'uppercase'


                    }}
                >
                    Blog
                    <span
                        style={{
                            opacity: props.CompTrigger === '/blog' && '1'
                        }}
                    />
                </Link>

                <Link
                    className='links-tag'
                    to="/team-up"
                    style={{
                        color: props.CompTrigger === '/team-up' && '#E1FF00',
                        textTransform: props.CompTrigger === '/team-up' && 'uppercase'

                    }}
                >
                    Contact
                    <span
                        style={{
                            opacity: props.CompTrigger === '/team-up' && '1'
                        }}
                    />
                </Link>

                <Link
                    className='links-tag'
                    to="/careers"
                    style={{
                        color: props.CompTrigger === '/careers' && '#E1FF00',
                        textTransform: props.CompTrigger === '/careers' && 'uppercase'

                    }}
                >
                    Careers
                    <span
                        style={{
                            opacity: props.CompTrigger === '/careers' && '1'
                        }}
                    />
                </Link>


                {
                    !props.Query && !login &&
                    <Link className='login-btn' to="https://pitch-catalyst-client-dashboard.vercel.app/" state={{ state: "/login" }} onClick={props.HandleCurrentPage}>
                        Login
                    </Link>
                }
                {
                    !props.Query && login &&
                    <Link className='team-up' to="/clint-dashboard">
                        Dashboard
                    </Link>
                }
            </div>

        </div>)
}
