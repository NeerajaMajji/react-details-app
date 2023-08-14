import './destinationsearcch.css';
const DestinationSearch=(props)=>{
    const {imgUrl,name}=props;
    return(
        <div className="on-top-container">
            <img className="place-image" src={imgUrl} alt=""></img>
            <p className="place-name">{name}</p>
        </div>
    )
}
export default DestinationSearch