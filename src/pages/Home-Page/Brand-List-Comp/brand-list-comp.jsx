import React from 'react';
import './brand-list-comp.scss';


export default function BrandListComp() {

    const profile1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/propfile1.png';
    const outgrown1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/outgrown1.png';
    const rentainance1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/rentainance1.png';
    const theworklab1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/twl1.png';
    const microbuster1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/microbuster1.png';
    const Elecbits1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/elecbits1.png'
    const TechnoTask1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/technotask1.png';
    const HumpyFarm1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/humpy-farms1.png';
    // const SP1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/sp1.png';
    const AlphaGamma1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/alpha-gamma1.png'
    const Turant1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/turant1.png';
    const MindPop1 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/mindpop1.png';

    const profile2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/propfile2.png';
    const outgrown2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/outgrown2.png';
    const rentainance2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/rentainance2.png';
    const theworklab2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/twl2.png';
    const microbuster2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/microbuster2.png';
    const Elecbits2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/elecbits2.png'
    const TechnoTask2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/technotask2.png';
    const HumpyFarm2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/humpy-farms2.png';
    // const SP2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/sp2.png';
    const AlphaGamma2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/alpha-gamma2.png'
    const Turant2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/turant2.png';
    const MindPop2 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/brand-logo/mindpop2.png';



    const BRAND_LIST_DATA = [
        {
            imgURL1: profile1,
            imgURL2: profile2

        },
        {
            imgURL1: outgrown1,
            imgURL2: outgrown2

        },
        {
            imgURL1: rentainance1,
            imgURL2: rentainance2

        },
        {
            imgURL1: theworklab1,
            imgURL2: theworklab2

        },
        {
            imgURL1: microbuster1,
            imgURL2: microbuster2
        },
        {
            imgURL1: Elecbits1,
            imgURL2: Elecbits2

        },
        {
            imgURL1: TechnoTask1,
            imgURL2: TechnoTask2

        },
        {
            imgURL1: HumpyFarm1,
            imgURL2: HumpyFarm2

        },
        {
            imgURL1: AlphaGamma1,
            imgURL2: AlphaGamma2

        },
        {
            imgURL1: Turant1,
            imgURL2: Turant2
        },
        {
            imgURL1: MindPop1,
            imgURL2: MindPop2
        }

    ]

    return (
        <div className="brand-list-comp-main-container" scrollamount="20">
            {/* ----------------------------------------------------------- */}
            <div className="inner-content-container">

            {BRAND_LIST_DATA.map((val)=>{
        return(
        <div className="img-div">
        <img
          className="img1"
          src={val.imgURL1}
          alt=""
        />
          <img
            className="img2"
            src={val.imgURL2}
            alt=""
          />
      </div>)

      })}
        {BRAND_LIST_DATA.map((val)=>{
        return(
        <div className="img-div">
        <img
          className="img1"
          src={val.imgURL1}
          alt=""
        />
          <img
            className="img2"
            src={val.imgURL2}
            alt=""
          />
      </div>)

      })}
            </div>
            {/* ----------------------------------------------------------- */}

        </div>

    )
}