import React, { useState } from 'react';
import './navbar-two-comp.scss';
import { Link } from 'react-router-dom';


import Logo from "../../../../assets/imgs/home-page/frame577.png";

export default function NavbarTwoComp(props) {
    // const Logo = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-imgs/logo-img.png';

    const [menuIcon, setMenuIcon] = useState(false);

    const handleMenuIconClick = () => {
        setMenuIcon(p => !p)
    }
    const handleMenuIconFalse = () => {
        setMenuIcon(false)
    }

    const PathName = window.location.pathname

    return (
        <div className="navbar-two-comp-main-container">
            <div className="logo-div">
                <Link to='/' className='link-tag'><img src={Logo} alt="" onClick={props.HandlePageScrolling} /></Link>
            </div>

            <div className="hamburger-menu-btn"
                onClick={handleMenuIconClick}
            >
                <span className="span1"
                    style={{
                        transform: menuIcon && `translateY(2.65vw) rotate(-45deg)`

                    }}
                ></span>
                <span className="span2"
                    style={{
                        opacity: menuIcon && '0'
                    }}
                ></span>
                <span className="span3"
                    style={{
                        transform: menuIcon && 'translateY(-2.65vw) rotate(45deg)'
                    }}
                ></span>


            </div>
            <div className="left-slide-menu"
                style={{
                    display: !menuIcon && 'none'
                }}
            >
                <div className="nav-items-div">
                    <Link className='link-tag-comp' to='/'
                        onClick={
                            () => {
                                handleMenuIconFalse()
                                props.HandlePageScrolling()
                            }}
                        style={{
                            color: PathName === '/' && '#e1ff01',
                            textTransform: PathName === '/' && 'uppercase',
                            border: PathName !== '/' && 'none',
                            transform: PathName === '/' && 'scale(1.1)'

                        }}
                    >
                        Home
                    </Link>

                    <Link className='link-tag-comp' to='/differentiator'
                        onClick={() => {
                            handleMenuIconFalse()
                            props.HandlePageScrolling()

                        }}
                        style={{
                            color: PathName === '/differentiator' && '#e1ff01',
                            textTransform: PathName === '/differentiator' && 'uppercase',
                            border: PathName !== '/differentiator' && 'none',
                            transform: PathName === '/differentiator' && 'scale(1.1)'
                        }}
                    >
                        Differentiator
                    </Link>



                    <Link className='link-tag-comp' to='/how-it-works'
                        // state={{ menuicon: menuIcon }}

                        onClick={() => {
                            handleMenuIconFalse()
                            props.HandlePageScrolling()
                        }}
                        style={{
                            color: PathName === '/how-it-works' && '#e1ff01',
                            textTransform: PathName === '/how-it-works' && 'uppercase',
                            border: PathName !== '/how-it-works' && 'none',
                            transform: PathName === '/how-it-works' && 'scale(1.1)'
                        }}
                    >
                        Procedure
                    </Link>

                    <Link className='link-tag-comp' to='/our-pricing'
                        onClick={() => {
                            handleMenuIconFalse()
                            props.HandlePageScrolling()

                        }}
                        style={{
                            color: PathName === '/our-pricing' && '#e1ff01',
                            textTransform: PathName === '/our-pricing' && 'uppercase',
                            border: PathName !== '/our-pricing' && 'none',
                            transform: PathName === '/our-pricing' && 'scale(1.1)'
                        }}
                    >
                        Pricing
                    </Link>

                    <Link className='link-tag-comp' to='/about-us'
                        onClick={() => {
                            handleMenuIconFalse()
                            props.HandlePageScrolling()

                        }}
                        style={{
                            color: PathName === '/about-us' && '#e1ff01',
                            textTransform: PathName === '/about-us' && 'uppercase',
                            border: PathName !== '/about-us' && 'none',
                            transform: PathName === '/about-us' && 'scale(1.1)'
                        }}
                    >
                        About
                    </Link>

                    <Link className='link-tag-comp' to='/blog'
                        onClick={() => {
                            handleMenuIconFalse()
                            props.HandlePageScrolling()

                        }}
                        style={{
                            color: PathName === '/blog' && '#e1ff01',
                            textTransform: PathName === '/blog' && 'uppercase',
                            border: PathName !== '/blog' && 'none',
                            transform: PathName === '/blog' && 'scale(1.1)'
                        }}
                    >
                        Blog
                    </Link>
                    <Link className='link-tag-comp' to="/team-up"
                        onClick={() => {
                            handleMenuIconFalse()
                            props.HandlePageScrolling()

                        }}
                        style={{
                            color: PathName === '/team-up' && '#e1ff01',
                            textTransform: PathName === '/team-up' && 'uppercase',
                            border: PathName !== '/team-up' && 'none',
                            transform: PathName === '/team-up' && 'scale(1.1)'
                        }}
                    >
                        Contact
                    </Link>


                </div>

            </div>

        </div >)
}

// {/* <Link className='blog-page' to='/blog'>Blog</Link> */}


// {/* <Link className='login-btn' >
//     Login
// </Link> */}