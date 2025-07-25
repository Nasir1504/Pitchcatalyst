import React from 'react';
import Spline from '@splinetool/react-spline';

import './spline-comp.scss';

export default function SplineComp() {
    const styling = {
        width: '50%',
        height: '50%',
        marginLeft: '-50%',
        marginTop: '20%',
        // borderRadius: '50%'
        // backgroundColor: 'yellow'

    }
    return (
        <div className="spline-comp-main-container">
            <div className="spline-element-div">

                <Spline
                    className='spline-element'
                    style={styling}
                    // scene="https://my.spline.design/applewatchcopy-794877a5ff45446678a93708903d60f7/scene.splinecode"
                    scene="https://my.spline.design/untitled-40fea87e43681d174f35ab1c7aaeef01/scene.splinecode"

                />
            </div>

        </div>)
}
