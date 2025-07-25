import React, { useState, useMemo } from 'react';

//styles
import './edit-pitch-deck.scss';

///images
const icon1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Group870.png';
const icon2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Group871.png';
const icon3 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/carriers/Group872.png';


export default function EditPitchDeck({ PageProgress, Progress }) {

    const progress1 = Progress[1]

    const [cardExpand, setCardExpand] = useState(false);
    const [cardNumb, setCardNumb] = useState(-1)
    useMemo(() => {
        PageProgress > progress1 && !cardExpand && setTimeout(() => {
            setCardExpand(true)
        }, 2600);

        PageProgress < progress1 && setCardExpand(false)
        // eslint-disable-next-line
    }, [PageProgress])

    const data = [
        {
            name1: 'Innovate',
            name2: 'at Hyper-Speed:',
            iconURL: icon1,
            content: `Leap into tomorrow with us! Your ideas, our tech runway - let's disrupt the universe together. Ready for blast-off?`
        },
        {
            name1: 'Creativity',
            name2: 'Unchained:',
            iconURL: icon2,
            content: `Where "What if?" meets "Let's do this!" Dive into a sea of possibilities; your innovation paints our tech canvas.Dream, design, celebrate!`
        },
        {
            name1: 'Thrills',
            name2: 'Non-Stop:',
            iconURL: icon3,
            content: `Ride the tech wave with us, where every day's a new adventure. No yawns, just yays! Ready to make some waves?`
        }

    ]


    return (
        <div className="edit-pitch-deck-main-container"
            style={{
                transform: PageProgress > progress1 && 'scale(1) translate(0) rotate(0deg)'
            }}
        >

            {
                data.map((item, i) => {
                    return <div className="card-div"
                        style={{
                            // transform: i === 0 && !cardExpand ? 'translate(123%)' :
                            //     i === 2 && !cardExpand && 'translate(-125%)'
                            marginLeft: i === 0 && cardExpand && '-44vw',
                            marginRight: i === 2 && cardExpand && '-44vw'

                        }}
                        onMouseOver={() => { setCardNumb(i) }}
                        onMouseOut={() => { setCardNumb(-1) }}
                    >
                        <div className="stroke-div" />
                        <div className="card-content">

                            <div className="circle-div"
                                style={{
                                    transform: cardNumb === i && 'scale(0.8) translateY(-2vh)'
                                }}
                            >
                                <div className="inner-sec"
                                    style={{
                                        backgroundImage: `url(${item.iconURL})`
                                    }}
                                >

                                </div>
                            </div>

                            <div className="bottom-sec">
                                <div className="card-name1"
                                    style={{
                                        transform: cardNumb === i && 'scale(0.8) translateY(-5vh)'
                                    }}
                                >{item.name1} <br />
                                    <em>{item.name2}</em>
                                </div>

                                <p className="text-content"
                                    style={{
                                        transform: cardNumb === i && 'translateY(-4vh)'
                                    }}
                                >
                                    <span className="span1">
                                        {item.content.slice(0, 50)}
                                    </span>
                                    <span className="span2"
                                        style={{
                                            opacity: cardNumb === i && '1'
                                        }}
                                    >
                                        {item.content.slice(50, 1000)}
                                    </span>
                                </p>
                            </div>
                        </div>

                    </div>
                })
            }



        </div>
    )
}
