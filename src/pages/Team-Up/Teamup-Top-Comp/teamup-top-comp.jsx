import React from 'react';
import './teamup-top-comp.scss';
import TeamupCompOne from './Nested-Comp/TeamUp-Comp-One/teamup-comp-one';
import TeamupCompTwo from './Nested-Comp/TeamUp-Comp-Two/teamup-comp-two';


export default function TeamupTopComp(props) {



    return (
        <div className="teamup-top-comp-main-container">
            {/* <p style={{ position: 'fixed', top: '30%', left: '0', color: '#fff', zIndex:'10' }}>{scrolling.toString()}</p> */}
            {
                !props.Query ?
                    <TeamupCompOne HandleNextForm={props.HandleNextForm} />
                    :
                    props.Query &&
                    <TeamupCompTwo />
            }


        </div>)
}
