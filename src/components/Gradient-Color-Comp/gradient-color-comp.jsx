// import './gradient-color-comp.scss';
// import React, { useState, useEffect } from 'react';


// export default function GradientColorComp() {

//     const CG1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-img/color-frame527.png";
//     const CG2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-img/color-frame528.png";
//     const CG3 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-img/color-frame529.png";

//     const [itemID, setItemID] = useState(0);

//     useEffect(() => {
//         setTimeout(() => {
//             itemID === 2 ? setItemID(0) : setItemID(itemID + 1)
//         }, 2000);

//     }, [itemID])

//     const colorComp = [
//         {
//             imgURL: CG1
//         },
//         {
//             imgURL: CG2
//         }, {
//             imgURL: CG3
//         }
//     ]


//     return (
//         <div className="gradient-color-comp-main-container">
//             <div className="slider">

//                 {
//                     colorComp.map((item, i) => {
//                         return (
//                             <img
//                                 key={i}
//                                 className="slide-img"
//                                 src={item.imgURL}
//                                 alt=""
//                                 style={{
//                                     opacity: itemID === i && "1"
//                                 }}
//                             />

//                         )
//                     })
//                 }

//             </div>

//         </div>

//     )
// }
