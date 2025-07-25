import React, { useState } from 'react';
import './join-us-comp.scss';
import DeskMasterComp from '../../pages/Home-Page/Desk-Master-Comp/desk-master-comp';
import { Stickyroll } from '@stickyroll/react';

export default function JoinUsComp(props) {

    const [compProgress, setCompProgress] = useState(0);

    return (
        <>
            <Stickyroll pages={1} factor={3} onProgress={(p) => { setCompProgress(p) }}>
                <DeskMasterComp CompProgress={compProgress} />

            </Stickyroll>
        </>
    )
}
