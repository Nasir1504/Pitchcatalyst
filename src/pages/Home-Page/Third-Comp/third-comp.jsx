import React, { useState, useEffect, useRef } from 'react';
import './third-comp.scss';
import CompOne from './Nested-Comp/Comp-One/comp-one';
import CompTwo from './Nested-Comp/Comp-Two/comp-two';


export default function ThirdComp(props) {
    const [animePlay, setAnimePlay] = useState(false);
    const elementRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) =>
                setAnimePlay(entry.isIntersecting)
            , {
                threshold: 0.7
            }
        );

        observer.observe(elementRef.current);

        return () => observer.disconnect();
    }, []);


    return (
        <div className="third-comp-main-container"
            ref={elementRef}
            style={{
                opacity: !animePlay && props.CompThirdOpacity >= '0.2' && props.CompThirdOpacity < '1' ? '1' :
                    props.CompThirdOpacity >= '1' && '0',
                zIndex: props.CompThirdOpacity >= '0.2' && props.CompThirdOpacity < '1' ? '1' :
                    props.CompThirdOpacity >= '1' && '0'

            }}>

            {
                !props.Query ? <CompOne CompThirdOpacity={props.CompThirdOpacity} AnimePlay={animePlay} /> :
                    props.Query && <CompTwo CompThirdOpacity={props.CompThirdOpacity}  AnimePlay={animePlay}/>
            }





        </div>
    )
}



// animation: flicker 3s linear infinite;
