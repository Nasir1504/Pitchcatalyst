import './logo-vector-comp.scss';

const LogoPart01 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/differentiator/logo-part01.png';
const LogoPart02 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/differentiator/logo-part02.png';
const LogoPart03 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/differentiator/logo-part03.png';
const LogoPart04 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/differentiator/logo-part04.png';
const LogoPart05 = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/differentiator/logo-part05.png';
const LogoBottomPart = 'https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/differentiator/logo-bottom-part.png';

export default function LogoVectorComp(props) {

  
    return (
        <div className="thank-you-page-logo-vector-comp-main-container"
            style={{
                width: !props.Query ? props.ContentsVisible && '100vw' :
                    props.Query && props.ContentsVisible && '85vh',
                transform:
                    !props.Query && props.OnCompLoad ? 'translateY(0%)' :
                        props.Query && props.OnCompLoad && 'translate(0%) rotate(90deg)',


            }}
        >
            <img src={LogoPart01} alt="" className="part-one"
                style={{
                    margin: props.ContentsVisible && '0% 1%',
                }}
            />
            <img src={LogoPart02} alt="" className="part-two"
                style={{
                    margin: props.ContentsVisible && '0% 2%',
                }}
            />
            <img src={LogoPart03} alt="" className="part-three"
                style={{
                    margin:  !props.Query && props.ContentsVisible ? '0% 25%' :  props.Query && props.ContentsVisible && '0% 20%',
                    opacity: props.ContentsVisible && '0',
                }}
            />
            <img src={LogoPart04} alt="" className="part-four"
                style={{
                    margin: props.ContentsVisible && '0% 1%',
                }}
            />
            <img src={LogoPart05} alt="" className="part-four"
                style={{
                    margin: props.ContentsVisible && '0% 2%',
                }}
            />
            <div className="bottom-part"
                style={{
                    top: '40.6%',
                    opacity: props.SecondAnime && '0',
                }}
            >

                <img src={LogoBottomPart} alt="" className="bottom-part-img"
                    style={{
                        top: '-40.6%'
                    }}
                />
            </div>

        </div>
    )
}
