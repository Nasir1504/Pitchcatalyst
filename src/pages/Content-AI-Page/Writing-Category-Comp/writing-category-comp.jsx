import React, { useState, useMemo } from 'react';
import './writing-category-comp.scss';
import GeneraWritingDesktopComp from './General-Writing-Comp/general-writing-desktop-comp';
import GeneraWritingMobileComp from './General-Writing-Mobile-Comp/general-writing-mobile-comp';
import MoreCatagoryDesktopComp from './More-Catagory-Comp/more-catagory-desktop-comp';
import MoreCatagoryMobileComp from './More-Catagory-Mobile-Comp/more-catagory-mobile-comp';




export default function WritingCategoryComp(props) {
    const LightVector = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/pitch-content/bg-vector-light.svg';
    const DarkVector = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/pitch-content/bg-vector-dark.svg';


    const [gwCardAnime, setGWCardAnime] = useState(false)
    const [gwHeadingAnime, setGWHeadingAnime] = useState(false)
    const [gwVectorAnime, setGWVectorAnime] = useState(false)

    function handleGWHeadingAnime() {
        setGWHeadingAnime(true);
    }

    useMemo(() => {
        if (props.CompOpacity >= 0.2 && !props.Query) {
            handleGWHeadingAnime()
            setTimeout(() => {
                setGWCardAnime(true)
                setGWVectorAnime(true)
            }, 2600);

        }
        else if (props.CompOpacity >= 0.2 && props.Query) {
            handleGWHeadingAnime()
            setTimeout(() => {
                setGWCardAnime(true)
                setGWVectorAnime(true)
            }, 1600);

        }
        // eslint-disable-next-line 
    }, [props.CompOpacity])

    // props.Query
    // -------------------------------------------------Desktop Size Styling---------------------------------------------------------------

    const LightVectorStyleOne = {
        transform: gwVectorAnime && props.CompOpacity < 0.4 ? `translate(0, 18%) rotate(0deg)` :
            gwVectorAnime && props.CompOpacity >= 0.4 && props.CompOpacity < 0.6 ? 'translate(0, -10%) rotate(180deg)' :
                gwVectorAnime && props.CompOpacity >= 0.6 && props.CompOpacity < 0.8 ? 'translate(0, 18%) rotate(0deg)' :
                    gwVectorAnime && props.CompOpacity >= 0.8 && 'translate(0, -10%) rotate(180deg)',

        opacity: props.CompOpacity >= 0.2 && props.CompOpacity < 0.6 && '1',
    }


    const DarkVectorStyleOne = {
        transform: gwVectorAnime && props.CompOpacity < 0.4 ? `translate(0, 18%) rotate(0deg)` :
            gwVectorAnime && props.CompOpacity >= 0.4 && props.CompOpacity < 0.6 ? 'translate(0, -10%) rotate(180deg)' :
                gwVectorAnime && props.CompOpacity >= 0.6 && props.CompOpacity < 0.8 ? 'translate(0, 18%) rotate(0deg)' :
                    gwVectorAnime && props.CompOpacity >= 0.8 && 'translate(0, -10%) rotate(180deg)',

        opacity: props.CompOpacity >= 0.6 && '0.6',
    }

    // -------------------------------------------------Mobile Size Styling---------------------------------------------------------------

    const LightVectorStyleTwo = {
        transform: gwVectorAnime && props.CompOpacity < 0.4 ? `translate(-10%, 25%) rotate(90deg) scale(1.4)` :
            gwVectorAnime && props.CompOpacity >= 0.4 && props.CompOpacity < 0.6 ? 'translate(10%, 25%) scale(1.4) rotate(270deg)' :
                gwVectorAnime && props.CompOpacity >= 0.6 && props.CompOpacity < 0.8 ? 'translate(-10%, 25%) rotate(90deg) scale(1.4)' :
                    gwVectorAnime && props.CompOpacity >= 0.8 && 'translate(10%, 25%) scale(1.4) rotate(270deg)',

        opacity: props.CompOpacity >= 0.2 && props.CompOpacity < 0.6 && '1'
    }

    const DarkVectorStyleTwo = {
        transform: gwVectorAnime && props.CompOpacity < 0.4 ? `translate(-10%, 25%) rotate(90deg) scale(1.4)` :
            gwVectorAnime && props.CompOpacity >= 0.4 && props.CompOpacity < 0.6 ? 'translate(10%, 25%) scale(1.4) rotate(270deg)' :
                gwVectorAnime && props.CompOpacity >= 0.6 && props.CompOpacity < 0.8 ? 'translate(-10%, 25%) rotate(90deg) scale(1.4)' :
                    gwVectorAnime && props.CompOpacity >= 0.8 && 'translate(10%, 25%) scale(1.4) rotate(270deg)',

        opacity: props.CompOpacity >= 0.6 && '0.6'
    }


    return (
        <div className="writing-category-comp-main-container"
            style={{
                opacity: props.CompOpacity < 0.2 ? 0 : props.CompOpacity >= 1 && 0,
                transform: props.CompOpacity < 0.2 && 'translateY(100%)',
                backgroundColor: props.CompOpacity >= 0.6 && '#000',
                zIndex: props.CompOpacity >= 0.2 && props.CompOpacity < 1 && '1',
            }}
        >

            <div className="bigger-heading"
                style={{
                    animation: gwHeadingAnime && !props.Query ? 'biggerHeadingKF linear 4.8s' :
                        gwHeadingAnime && props.Query && 'biggerHeadingKF linear 2.8s',
                }}
            >
                General <span> Writing</span>
            </div>

            <img
                style={!props.Query ? LightVectorStyleOne : LightVectorStyleTwo}

                src={LightVector}
                alt=""
                className="light-vector-img"
            />
            <img
                style={!props.Query ? DarkVectorStyleOne : DarkVectorStyleTwo}

                src={DarkVector}
                alt=""
                className="dark-vector-img"
            />

            <div className="gw-small-heading"
                style={{
                    opacity: gwCardAnime && props.CompOpacity < 0.6 && '1',
                    transform: gwCardAnime && 'translateY(0%)',
                }}
            >
                General <span>Writing</span>
            </div> :

            <div
                className="more-caregory-small-heading"

                style={{
                    opacity: gwCardAnime && props.CompOpacity >= 0.6 && props.CompOpacity < 1 && '1',
                }}
            >
                More Category
            </div>

            <div className="gw-card-slider"
                style={{
                    transform: gwCardAnime && 'translateY(0%)',
                    opacity: props.CompOpacity >= 0.6 && props.Query && '0',
                    zIndex: props.CompOpacity < 0.6 && '1'
                }}
            >

                {!props.Query ?
                    <GeneraWritingDesktopComp Query={props.Query} CompOpacity={props.CompOpacity} />
                    :
                    <GeneraWritingMobileComp Query={props.Query} CompOpacity={props.CompOpacity} />
                }

            </div>

            <div className="more-category-card-slider"
                style={{
                    opacity: props.CompOpacity < 0.6 && props.Query ? '0' :
                        props.CompOpacity >= 0.6 && props.CompOpacity < 1 && props.Query ? '1' :
                            props.CompOpacity >= 1 && props.Query && '0',
                    zIndex: props.CompOpacity >= 0.6 && props.CompOpacity < 1 && '1'

                }}
            >
                {!props.Query ?
                    <MoreCatagoryDesktopComp Query={props.Query} CompOpacity={props.CompOpacity} />
                    :
                    <MoreCatagoryMobileComp Query={props.Query} CompOpacity={props.CompOpacity} />
                }


            </div>
        </div>
    )
}
