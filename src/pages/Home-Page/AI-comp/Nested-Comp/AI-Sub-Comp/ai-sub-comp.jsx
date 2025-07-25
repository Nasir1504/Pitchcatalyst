import React, { useState, useEffect } from 'react';
import './ai-sub-comp.scss';
import { Link } from 'react-router-dom';

import CardImg from '../../../../../assets/imgs/home-page/frame702.png';
import LogoBlack from "../../../../../assets/imgs/home-page/logo-black.png";
import LogoNeon from "../../../../../assets/imgs/home-page/logo-neon.png";

export default function AISubComp(props) {
  // BGContentOpacity
  const [animeOne, setAnimeOne] = useState(false);
  const [animeTwo, setAnimeTwo] = useState(false);


  useEffect(() => {
    props.BGContentOpacity &&
      setTimeout(() => {
        setAnimeOne(true)
      }, 1000)

  }, [props.BGContentOpacity])


  useEffect(() => {
    animeOne &&
      setTimeout(() => {
        setAnimeTwo(true)
      }, 1200)
  }, [animeOne])




  return (
    <div className="ai-sub-comp-main-container"
      style={{
        backgroundColor: animeTwo && '#000',
      }}>
      <div className="left-content-container"
        style={{
          opacity: animeTwo && '1',
        }}
      >
        <div className='main-heading'>Reimagining <br />
          <span className="span1">Presentations </span><br />
          <span className="span2">with</span>
          <span className="span3">AI</span>
        </div>
        <p className="domain-para">www.pitchcatalyst.com</p>
        <p className="content-para">
          Pitch Catalyst's Content AI is revolutionizing the pitch experience.
          By employing cutting-edge algorithms, it curates content that resonates,
          enhancing your message. Its smart technology transforms dull decks into
          captivating narratives, redefining storytelling. Experience a new era of pitches,
          where AI meets persuasive brilliance.

        </p>
        <Link className='explore-btn' to='/pitch-contents'>Explore Now</Link>
        {/* <button className='explore-btn'  to='/pitch-contents'>Explore Now</button> */}

      </div>
      <div className="bigger-circle-div"
        style={{
          opacity: animeOne && '0',
          display: animeTwo && 'none'

        }}>
        <div className="inner-circle-div">
        </div>
      </div>

      <div className="content-circle-div"
        style={{
          transform: animeOne && !animeTwo ? 'rotate(-180deg) scale(1.68)' :
            animeOne && animeTwo && 'rotate(-180deg) scale(2.5) translate(-52%)',
          backgroundColor: animeTwo && '#C1DB05'

        }}
      >

        <div className="large-card-comp0">
          <img src={CardImg} alt="" />
        </div>
        <div className="large-card-comp1" >
          <img src={CardImg} alt="" />
        </div>

        <div className="large-card-comp2"
          style={{
            top: animeOne && animeTwo && '19.5vw',
            right: animeOne && animeTwo && '2vw',
            transform: animeTwo && 'rotate(180deg) scale(0.9)'

          }}
        >
          <img src={CardImg} alt="" />
        </div>

        <div className="large-card-comp3">
          <img src={CardImg} alt="" />
        </div>
        <div className="large-card-comp4"
          style={{
            top: animeTwo && '10vw',
            right: animeTwo && '5.2vw',
            transform: animeTwo && 'rotate(180deg) scale(0.9)'
          }}
        >
          <img src={CardImg} alt="" />
        </div>
        <div className="large-card-comp5"
          style={{
            right: animeTwo && '5.2vw',
            bottom: animeTwo && '9.1vw',
            transform: animeTwo && 'rotate(180deg) scale(0.9)'

          }}
        >
          <img src={CardImg} alt="" />
        </div>

        <div className="content-sub-circle-shadow"
          style={{
            filter: !animeTwo && 'blur(2px)',
            marginLeft: animeTwo && '1vw',
            transform: animeTwo && 'scale(1.6)',
            backgroundColor: animeTwo && '#E7FA5D'
          }}
        ></div>
        <div className="content-sub-circle"
          style={{
            backgroundColor: animeTwo && '#C1DB05'

          }}
        >
          <span className="dot-span5"
            style={{
              transform: animeOne && !animeTwo ? 'scale(5)' :
                animeOne && animeTwo && 'scale(0.4)',
              top: animeOne && !animeTwo ? '11.4vw' : animeOne && animeTwo && '0.75vw',
              right: animeOne && !animeTwo ? '11.5vw' : animeOne && animeTwo && '6vw',
              boxShadow: animeOne && !animeTwo && 'none'

            }}
          />
          <span className="dot-span6" />
          <span className="dot-span7" />
          <span className="dot-span8" />
          <span className="dot-span9" />
          <span className="dot-span10" />



          <div className="small-card-comp1"
            style={{
              top: animeOne && '2vw',
              left: animeOne && '11.5vw',
              transform: !animeOne ? 'rotate(5deg)' : animeOne && 'rotate(180deg)'
            }}
          >
            <img src={CardImg} alt="" />
          </div>

          <div className="small-card-comp2"
            style={{
              top: animeOne && '9.5vw',
              left: animeOne && '2vw',
              transform: !animeOne ? 'rotate(-90deg)' : animeOne && 'rotate(-180deg)'
            }}
          >
            <img src={CardImg} alt="" />
          </div>

          <div className="small-card-comp3"
            style={{
              top: animeOne && !animeTwo ? '10.1vw' : animeOne && animeTwo && '9.5vw',
              right: animeOne && !animeTwo ? '2vw' : animeOne && animeTwo && '2.5vw',
              transform: !animeOne && !animeTwo ? 'rotate(90deg)' : animeOne && !animeTwo ? 'rotate(180deg)' :
                animeOne && animeTwo && 'rotate(180deg) scale(0.7)'
            }}
          >
            <img src={CardImg} alt="" />
          </div>

          <div className="small-card-comp4"
            style={{
              bottom: animeOne && '1.8vw',
              right: animeOne && '11.5vw',
              transform: 'rotate(-180deg)'
            }}
          >
            <img src={CardImg} alt="" />
          </div>


          <div className="content-sub-circle-inner-shadow"
            style={{
              filter: !animeTwo && 'blur(2px)',
              marginLeft: animeTwo && '-2.5vw',
              transform: animeTwo && 'scale(2)',
              backgroundColor: animeTwo && '#E7FA5D'
            }}
          ></div>
          <div className="content-sub-circle-inner"
            style={{
              backgroundColor: animeTwo && '#C1DB05'

            }}
          >
            <span className="dot-span1" />
            <span className="dot-span2" />
            <span className="dot-span3" />
            <span className="dot-span4" />
            {/* {
              [...Array(4)].map((_, i) => {
                return <span className="dot-span-two" key={i}
                  style={{
                    top: i === 0 && '-0.25vw',
                    left: i === 1 && '-0.25vw',
                    right: i === 2 && '-0.25vw',
                    bottom: i === 3 && '-0.25vw'
                  }}
                ></span>
              })
            } */}

            <img src={LogoBlack} alt="" className="logo-black-img"
              style={{
                opacity: animeOne && !animeTwo ? '0' : '1'

              }} />

            <img src={LogoNeon} alt="" className="logo-neon-img"
              style={{
                opacity: animeOne && !animeTwo ? '1' : '0'
              }} />

          </div>

        </div>

      </div>
    </div >)
}
