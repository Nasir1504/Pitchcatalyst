import React from 'react';
import './eight-comp.scss';

export default function EightComp(props) {
    return (
        <div className="eight-comp-main-container"
            style={{
                opacity: props.CompEighthOpacity >= '0.2' && props.CompEighthOpacity < '1' ? '1' :
                    props.CompEighthOpacity >= '1' && '0',
                zIndex: props.CompEighthOpacity >= '0.2' && props.CompEighthOpacity < '1' ? '1' :
                    props.CompEighthOpacity >= '1' && '0'
            }}
        >

            <div className="main-comp-content-div"
                style={{
                    transform: props.CompEighthOpacity >= '0.2' && 'translateX(0%)'

                }}
            >
                <div className='heading'>Structure,<br /><span className="span1">&</span>&nbsp;<span className="span2">Design</span>.</div>
            </div>

        </div >
    )
}