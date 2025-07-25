import React from 'react';
import './seventh-comp.scss';

export default function SeventhComp(props) {
    return (
        <div className="seventh-comp-main-container"
            style={{
                opacity: props.CompSeventhOpacity >= '0.2' && props.CompSeventhOpacity < '1' ? '1' :
                    props.CompSeventhOpacity >= '1' && '0',
                zIndex: props.CompSeventhOpacity >= '0.2' && props.CompSeventhOpacity < '1' ? '1' :
                    props.CompSeventhOpacity >= '1' && '0',
            }}
        >

            <div className="main-content"
                style={{
                    transform:
                        props.CompSeventhOpacity >= '0.2' && props.CompSeventhOpacity < '1' ? 'translateX(0%)' :
                            props.CompSeventhOpacity >= '1' && 'translateX(-200%)',

                }}
            >
                {
                    !props.Query ? <p className='top-para'>To Make It <span>&nbsp;&nbsp;Even More Effective</span></p> :
                        props.Query && <p className='top-para'>To Make It <br /><b>Even</b> <br /> <span>MORE</span></p>

                }
                <div className="bottom-text-div">
                    {
                        !props.Query ? <p>With <br /><span className='para-span'>Tips On</span></p> :
                            props.Query && <p>Effective,<br /><span className='para-span'>With Tips On</span></p>
                    }
                    <div className='big-heading'>&nbsp;CONTENT <span className='comma-span'>,</span></div>
                </div>
            </div>
        </div>
    )
}
