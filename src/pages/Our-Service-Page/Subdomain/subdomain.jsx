import React from 'react';
import './subdomain.scss';

export default function Subdomain() {
    return (
        <div className="subdomain-main-container">
            <img
                className='bg-img'
                src="https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-img/bg-vector.png"
                alt=""
            />

            <h1>Create Your<br /><span>SUBDOMAIN</span></h1>
            <div className="sub-domain-tf-div">
                <input type="text" placeholder='Enter your sub-domain'/>
                <button>
                    pitchcatalyst.com
                </button>
            </div>

        </div>
    )
}
