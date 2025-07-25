import './tune-your-deck.scss';

export default function TuneYourDeck(props) {
    return (
        <div className="tune-your-deck-main-comp"
            style={{
                opacity: props.CompSixthOpacity >= '0.2' && props.CompSixthOpacity < '1' ? '1' :
                    props.CompSixthOpacity === '1' && '0',
                zIndex: props.CompSixthOpacity >= '0.2' && props.CompSixthOpacity < '1' ? '1' :
                    props.CompSixthOpacity === '1' && '0'
            }}
        >
            {/* !props.Query */}
            <div className="main-content-div"
                style={{
                    transform:
                        props.CompSixthOpacity >= '0.2' && props.CompSixthOpacity < '1' ? 'translateY(0%)' :
                            props.CompSixthOpacity >= '1' && 'translateX(-200%)',

                }}
            >
                <div className="left-text-div">
                    <div className='heading1'>Our <br /><span>TEAM</span></div>
                    <div className='heading2'>CAN</div>

                </div>
                <div className="right-text-div">
                    <div className="text-div">
                        <div className='heading3'>Help You
                            <br />
                            <span>Fine-Tune</span>
                        </div>
                    </div>
                    <span className='bottom-text'>Your Deck</span>

                </div>
            </div>

        </div>
    )
}
