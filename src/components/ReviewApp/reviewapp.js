import { useState } from 'react'
import './reviewapp.css'
const reviewsList = [
    {
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
      username: 'Wade Warren',
      companyName: 'Rang',
      description:
        'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
    },
    {
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
      username: 'Adrian Williams',
      companyName: 'WheelO',
      description:
        'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
    },
    {
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
      username: 'Sherry Johnson',
      companyName: 'MedX',
      description:
        'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
    },
    {
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
      username: 'Ronald Jones',
      companyName: 'Infinos Tech',
      description:
        'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
    },
  ]
  
const ReviewApp=()=>{
    const [currentIndex,setCurrentIndex]=useState(0);
    const handleLeftArrow=()=>{
        setCurrentIndex(prevIndex=>(prevIndex+1)%reviewsList.length)
    }
    const handleRightArrow=()=>{
        setCurrentIndex(prevIndex=>(prevIndex-1+reviewsList.length)%reviewsList.length)
    }
    const currentReviewIndex=reviewsList[currentIndex]
    return(
        <div className='images-container'>
            <img onClick={handleLeftArrow} className='arrows' src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png" alt='left-arrow'></img>
        <div className="whole-container">
            <h1>Reviews</h1>
        <div>
            <img src={currentReviewIndex.imgUrl} alt=""></img>
            <p>{currentReviewIndex.username}</p>
            <p>{currentReviewIndex.companyName}</p>
            <p>{currentReviewIndex.description}</p>
        </div>
        </div>
        <img onClick={handleRightArrow} className='arrows' src='https://assets.ccbp.in/frontend/react-js/right-arrow-img.png' alt='right-arrow'></img>
        </div>
    )
}
export default ReviewApp