import React, { useState, useEffect } from 'react';
import './team-up.scss';
import TeamupTopComp from './Teamup-Top-Comp/teamup-top-comp';
import Stickyroll from "@stickyroll/react/stickyroll";


export default function TeamUp(props) {
    window.scrollTo(0, 0)
    const [nextForm, setNextForm] = useState(false);


    function handleNextForm() {
        setNextForm(true)
    }

    useEffect(() => {
        let Title = 'Schedule a Consultation with our Design Experts – Contact Us'
        let Description = "Boost your chances of success with our expert team of pitch deck designers. Contact us today for a free consultation!";
        let Keywords = "contacts, send a message, pitch deck designers consultation";
        let CanonicalLink = "https://pitchcatalyst.com/team-up";
        let PageURL = window.location.pathname

        props.HandlePageTitle(Title, Description, CanonicalLink, Keywords, PageURL)

        // eslint-disable-next-line
    }, [])


    return (
        <div className="contact-with-us-main-container" style={{
            backgroundColor: nextForm && '#000'
        }}>

            <Stickyroll pages={2} factor={1.2}>
                <TeamupTopComp Query={props.Query} HandleNextForm={handleNextForm} />

            </Stickyroll>
        </div>
    )
}
