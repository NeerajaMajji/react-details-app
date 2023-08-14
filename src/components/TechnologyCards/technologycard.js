import './technologycard.css'
const TechnologyCard =(props)=>{
    
    const {cardDetails}=props;
    const {title,description,imageUrl,className}=cardDetails;
    const containerclass=`on-top-container ${className}`
    return(
        <div className={containerclass}>
            <p className='heading'>{title}</p>
            <p className='description'>{description}</p>
            <div className="image-container">
            <img src={imageUrl} alt=""></img>
            </div>
        </div>
    )

}
export default TechnologyCard