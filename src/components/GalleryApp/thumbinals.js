import './thumbinals.css';
const Thumbnail=(props)=>{
    const {thumbnailDetails}=props;
    const {thumbnailUrl,thumbnailAltText}=thumbnailDetails;
    const OnClickImages=()=>{

    }
    return(
        <div>
        <li className='thumbnail-images'>
            <button onClick={OnClickImages} className='btn-thumb' >
                <img src={thumbnailUrl} alt={thumbnailAltText}></img>
            </button>
        </li>
        </div>

    )
}
export default Thumbnail