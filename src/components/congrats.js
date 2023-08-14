import './congrats.css'
function Congrats(){
    return(
        <div className='on-top-container'>
            <h1 className='heading'>Congratulations</h1>
            <div className='down-container'>
                <img className='user-profile' src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" alt='yelley'></img>
                <p className='card-title'>Kiran V</p>
                <p className='card-description'>Rajiv Gandhi University of Knowledge Technologies</p>
                <img className='gift-image' src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" alt='bokka'></img>
            </div>
        </div>
    )
}
export default Congrats