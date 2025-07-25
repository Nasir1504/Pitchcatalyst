import React, { useState } from 'react';
import './our-story-third-comp.scss';
import { vector, vector2 } from './Vector';
// import { ImageServer } from '../../../img/imageServer';

// const VectorImg = `https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/about-us-page-img/Vector5.svg`;

import VectorImg from "../../../assets/imgs/about/Vector5.png";

export default function OurStoryThirdComp(props) {

  // const [isHover, setIsHover] = useState(false);
  // const [animationType, setAnimationType] = useState(false);
  const [elementID, setElementID] = useState(null)

  // function handleAnimationType() {
  //   setAnimationType(p => !p)
  // }
  // useEffect(() => {
  //   setTimeout(() => {
  //     handleAnimationType()
  //   }, 3500)
  // }, [animationType])

  return (
    <div className="our-story-third-comp-main-container"

      style={{
        opacity: props.Scrolling >= '0.2' && props.Scrolling < '1' ? '1' :
          props.Scrolling >= '1' && '0',
        zIndex: props.Scrolling >= '0.2' && props.Scrolling < '1' && '1',
        borderRadius: !props.Query && props.Scrolling >= '0.8' && props.Scrolling < '1' ? '0 0 150px 150px' :
          props.Query && props.Scrolling >= '0.8' && props.Scrolling < '1' && '0 0 60px 60px',
        transform: props.Scrolling >= '1' && 'translateY(-140%)',
      }}
    >

      <div className="main-content-div"
        style={{
          transform: props.Scrolling < '0.2' ? 'translate(140%)' : props.Scrolling >= '0.2' && 'translate(0%)',
        }}
      >
        <div className="top-content">
          <div className="padding-div"
            style={{
              height: props.Scrolling >= '0.2' && '0%'
            }}
          ></div>
          {
            !props.Query ?
              <p>
                As the months flew by, the <span>PITCH CATALYST</span> <br />
                community flourished, attracting a diverse <br />
                array of <span>STARTUPS</span> eager to refine their <br />
                message and visuals.
              </p>
              :
              props.Query &&
              <p>
                As the months flew by, the <span>PITCH CATALYST</span>
                community flourished, attracting a diverse
                array of <span>STARTUPS</span> eager to refine their
                message and visuals.
              </p>
          }

        </div>
        <div className="bottom-content">
          <div className="padding-div"
            style={{
              height: props.Scrolling >= '0.2' && '0%'
            }}
          ></div>
          {
            !props.Query ?
              <p>
                Collaborating closely with each entrepreneur, the team developed <br />
                visually stunning narratives that accurately represented their businesses <br />
                and resonated with their target audiences. The success of Pitch Catalyst's <br />
                clients became a testament to the transformative power of expertly <br />
                crafted decks.
              </p>
              :
              props.Query &&
              <p>
                Collaborating closely with each entrepreneur, the team developed
                visually stunning narratives that accurately represented their businesses
                and resonated with their target audiences. The success of Pitch Catalyst's
                clients became a testament to the transformative power of expertly
                crafted decks.
              </p>

          }

        </div>
      </div>

      {
        !props.Query ?
          vector.map((item, i) => {
            return (
              <div className="vector-img-div"
                key={i}
                style={{
                  transform: `translate(${item.x}vw, ${item.y}vw) rotate(${item.rotation}deg)`,
                  animation: props.Scrolling >= '0.2' && `${i <= 5 ? 8.5 : i > 5 && i <= 10 ? 12.8 : 16.2}s VectorKF ease-in-out`
                  // animation: `${i + 1 * 0.8}s VectorKF ease-in-out`

                }}
              >
                <img
                  src={VectorImg}
                  alt=""
                  className='vector-img'
                  onMouseOver={() => {
                    // setIsHover(true)
                    setElementID(i)
                  }}
                  onMouseOut={() => {
                    // setIsHover(false)
                    setElementID(null)
                  }}

                  style={{
                    // animation: isHover && `1s ElementKF ease-in-out infinite alternate`
                    animation: elementID === i && `2.2s ElementKF ease`


                  }} />
              </div>
            )
          })
          :
          props.Query &&
          vector2.map((item, i) => {
            return (
              <div className="vector-img-div"
                key={i}
                style={{
                  transform: `translate(${item.x}vw, ${item.y}vw) rotate(${item.rotation}deg)`,
                  animation: props.Scrolling >= '0.2' && `${i <= 5 ? 8.5 : i > 5 && i <= 10 ? 12.8 : 16.2}s VectorKF ease-in-out`

                }}
              >
                <img
                  src={VectorImg}
                  alt=""
                  className='vector-img'
                  onMouseOver={() => {
                    setElementID(i)
                  }}
                  onMouseOut={() => {
                    setElementID(null)
                  }}

                  style={{
                    animation: elementID === i && `2.2s ElementKF ease`


                  }} />
              </div>
            )
          })

      }

    </div>)
}
