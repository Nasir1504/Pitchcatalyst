import React from 'react';
import './see-our-work.scss';
import { Stickyroll } from '@stickyroll/react';
import SeeOurWorkCompOne from './Nested-Comp/See-Our-Work-Comp-One/see-our-work-comp-one';
import SeeOurWorkCompTwo from './Nested-Comp/See-Our-Work-Comp-Two/see-our-work-comp-two';

export default function SeeOurWork(props) {

    return (
        <div className="see-our-work-main-container">
            {
                !props.Query ?
                    <SeeOurWorkCompOne Query={props.Query} />
                    :
                    props.Query &&
                    <Stickyroll pages={1} factor={1.5}>
                        <SeeOurWorkCompTwo Query={props.Query} />
                    </Stickyroll>

            }


        </div >
    )
}
