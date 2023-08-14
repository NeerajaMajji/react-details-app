// import { useState } from "react"
// import './feedbackapp.css'
// const callingFeedback=()=>{
//     const FeedbackApp=(props)=>{
//         const [feedback,setfeedback]=useState(false);
//         const handlefeedback=()=>{
//             setfeedback(!feedback)
//         }
        
//         return(
//             <div className="whole-emotions">
//                 <h1>How Satisifed you are </h1>
//                 <div className="happysad">
//                     <div>
//                    <button onClick={handlefeedback} className="btn-emojis">
//                     <img src="https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png" alt=""></img>
//                    </button>
                   
//                     </div>
//                     <div>
//                    <button onClick={handlefeedback} className="btn-emojis">
//                     <img src="https://assets.ccbp.in/frontend/react-js/none-emoji-img.png" alt=""></img>
//                    </button>
//                    </div>
//                    <div>
//                    <button onClick={handlefeedback} className="btn-emojis">
//                     <img src="https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png" alt=""></img>
//                    </button>
//                    </div>
//                 </div>
//             </div>
//         )
//     }
//     const Feedbackresponse =(props)=>{
   
//         return(
//             <div>
    
//      <div className="response">
//                     <img className="heart-image" src="https://assets.ccbp.in/frontend/react-js/love-emoji-img.png" alt=""></img>
//                    <p> Thank you </p>
//                     </div>
//                     {/* <FeedbackApp setfeed={handlefeedback}/> */}
//             </div>
            
//         )
//     }
//     return(
//         <div>
//       {feedback ? <Feedbackresponse /> : <FeedbackApp handleFeedback={handleFeedback} />}
//         </div>

//     )
// }
// export default callingFeedback


import React, { useState } from "react";
import './feedbackapp.css';

const FeedbackApp = ({ handleFeedback }) => {
  return (
    <div className="whole-emotions">
      <h1>How Satisfied you are</h1>
      <div className="happysad">
        <div>
          <button onClick={() => handleFeedback(true)} className="btn-emojis">
            <img src="https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png" alt="sad"></img>
          </button>
        </div>
        <div>
          <button onClick={() => handleFeedback(true)} className="btn-emojis">
            <img src="https://assets.ccbp.in/frontend/react-js/none-emoji-img.png" alt="none"></img>
          </button>
        </div>
        <div>
          <button onClick={() => handleFeedback(true)} className="btn-emojis">
            <img src="https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png" alt="happy"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

const Feedbackresponse = () => {
  return (
    <div>
      <div className="response">
        <img className="heart-image" src="https://assets.ccbp.in/frontend/react-js/love-emoji-img.png" alt="love"></img>
        <p>Thank you</p>
      </div>
    </div>
  );
}

const CallingFeedback = () => {
  const [feedback, setFeedback] = useState(false);

  const handleFeedback = (value) => {
    setFeedback(value);
  }

  return (
    <div>
      {feedback ? <Feedbackresponse /> : <FeedbackApp handleFeedback={handleFeedback} />}
    </div>
  );
}

export default CallingFeedback;


