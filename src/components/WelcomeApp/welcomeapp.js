import { useState } from "react";
import './welcomeapp.css';

const WelcomeApp =(props)=>{
    const [AddSubsribe, setSubsribe]=useState("Subscribe");
    const handleSubscribe =()=>{
        if(AddSubsribe==="Subscribe"){
        setSubsribe("Subscribed");
        }
        else{
            setSubsribe("Subscribe");
        }
    }
    return(
        <div className="whole-container">
            <h1 className="heading">Welcome</h1>
            <p className="greeting-msg">Thank you! Happy Learning</p>
            <button className="btn" onClick={handleSubscribe}>{AddSubsribe}</button>
        </div>
    )
}
export default WelcomeApp