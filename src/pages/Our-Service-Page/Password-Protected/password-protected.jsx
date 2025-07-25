import React from 'react';
import './password-protected.scss';
const Frame1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/our-service-img/woman-scrolling-laptop.png';

export default function PasswordProtected() {
    return (
        <div className="password-protected-main-container">
            <div className="left-content-div">
                <img src={Frame1} alt="" />
            </div>
            <div className="right-img-div">
                <h1>Password Protected <br /> <span>Pitch Deck</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ducimus repellat dolorem iste in sapiente officia impedit deleniti Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum nobis.</p>
                <div className='btn-div'>
                    <button>
                        API INTEGRATION
                    </button>
                </div>
            </div>


        </div>)
}
