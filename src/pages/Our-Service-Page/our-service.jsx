import React from 'react';
import OverviewPD from './Overview-PD/overview-pd';
import RedesignResponsiveDesignPD from './Redesign-Responsive-Design-PD/redesign-responsive-design-pd';
import Analytics from './Analytics/analytics';
import RedesignPD from './Redesign-PD/redesign-pd';
import Subdomain from './Subdomain/subdomain';
import LiveDataIntegration from './Live-Data-Integration/live-data-integration';
import PasswordProtected from './Password-Protected/password-protected';

export default function OurService() {
    window.scrollTo(0 ,0)
    return (
        <div className='our-service-main-container'
            style={{
                overflow: 'hidden'
            }}
        >
            <OverviewPD />
            <RedesignResponsiveDesignPD />
            <Analytics />
            <RedesignPD />
            <Subdomain />
            <LiveDataIntegration />
            <PasswordProtected />
        </div>
    )
}
