import React from 'react';
import './live-data-integration.scss';
const Frame1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/our-service-img/api-application-programming-interface-development-technology-concept.png';

export default function LiveDataIntegration() {
    return (
        <div className="live-data-integration-main-container">
            <div className="left-content-div">
                <h1>Live data <br /> <span>INTEGRATION</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ducimus repellat dolorem iste in sapiente officia impedit deleniti Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum nobis.</p>
                <div className='btn-div'>
                    <button>
                        API INTEGRATION
                    </button>
                </div>
            </div>
            <div className="right-img-div">
                <img src={Frame1} alt="" />
            </div>

        </div>)
}
