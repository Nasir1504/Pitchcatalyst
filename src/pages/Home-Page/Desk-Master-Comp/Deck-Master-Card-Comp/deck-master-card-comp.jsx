import React from 'react';
import './deck-master-card-comp.scss';

export default function DeckMasterCardComp(props) {


    return (
        <div className="deck-master-card-comp-main-container"
            onClick={() => { props.HandleCardCount(props.Id) }}
            style={{
                transform: props.CardCount === props.Id && 'scale(1.2)'

            }}
        >
            <div className="inner-main-container">

            </div>

        </div>
    )
}
