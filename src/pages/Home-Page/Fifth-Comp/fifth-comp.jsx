import React from 'react';

//styles
import './fifth-comp.scss';

//components
import SubCompOne from './Sub-Comp-One/sub-comp-one';
import SubCompTwo from './Sub-Comp-Two/sub-comp-two';


export default function FifthComp(props) {
    // props.Query
    return (
        <div className="fifth-comp-main-comp"
            style={{

                opacity: props.CompFifthOpacity >= '0.2' && props.CompFifthOpacity < '1' ? '1' :
                    props.CompFifthOpacity >= '1' && '0',
                height: props.Query && 'auto',
                left: props.CompFifthOpacity >= '0.2' && props.CompFifthOpacity < '1' ? '0' : props.CompFifthOpacity >= '1' && '0%',
                top: props.CompFifthOpacity >= '1' && '-120%',
                zIndex: props.CompFifthOpacity >= '0.2' && props.CompFifthOpacity < '1' ? '1' :
                    props.CompFifthOpacity >= '1' && '0',

            }}
        >{
                !props.Query ?
                    <SubCompOne CompFifthOpacity={props.CompFifthOpacity} /> :
                    props.Query &&
                    <SubCompTwo CompFifthOpacity={props.CompFifthOpacity} Query={props.Query}/>

            }

        </div >
    )
}

