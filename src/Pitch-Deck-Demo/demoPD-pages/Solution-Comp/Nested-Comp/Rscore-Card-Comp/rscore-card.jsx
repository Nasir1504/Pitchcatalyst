import "./rscore-card.scss";

export default function RscoreCard(props) {
    const Frame2 = "https://rentblob.blob.core.windows.net/pitch/img/rscore-img/frame%20392.png";

    return (
        <>
            <div className="rscore-card-main-contianer"
                style={{
                    opacity: !props.HiddenHoverDiv ? "0" : "1"
                }}
            >
                <div className="main-img-div">
                    <img src={Frame2} alt="" className="bg-img" />
                    <div className="shape1-div"></div>
                    <div className="shape2-div"></div>
                    <div className="heading">
                        <h1> EXPLAIN <br />
                            <span>Feature-03 </span>
                        </h1>
                    </div>
                </div>

                <div className="contents-div">

                    <ul>
                        <li><span></span>What is the unique proposition of this solution compared to the previous two?</li>
                        <li><span></span>Who will benefit most from this solution and how?</li>
                        <li><span></span>What data or evidence can you provide to back up the potential of this solution?</li>
                        {/* <li><span></span>Lorem ipsum dolor sit amet,Lorem ipsum dolor.</li>
                        <li><span></span>Lorem ipsum dolor sit amet,Lorem ipsum dolor.</li>
                        <li><span></span>Lorem ipsum dolor sit amet,Lorem ipsum dolor.</li>
                        <li><span></span>Lorem ipsum dolor sit amet,Lorem ipsum dolor.</li> */}




                    </ul>
                </div>
            </div>
        </>
    );
}
