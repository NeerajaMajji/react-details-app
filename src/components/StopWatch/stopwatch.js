import { useEffect, useState } from "react";
import "./stopwatch.css";
const StopWatch=()=>{
    const [start,setStart]=useState(true)
    const [minuteCount,setMinuteCount]=useState(0)
    const [secondCount,setSecondCount]=useState(0)
    const handleStart=()=>{
        setStart(false)
    }
    const handleStop=()=>{
        setStart(true)
    }
    const handleRestart=()=>{
        setMinuteCount(0)
        setSecondCount(0)
    }
    useEffect(() => {
        let interval;
    
        if (!start) {
          interval = setInterval(() => {
            setSecondCount((prevSecondCount) => (prevSecondCount + 1) % 60);
    
            if (secondCount === 59) {
              setMinuteCount((prevMinuteCount) => prevMinuteCount + 1);
            }
          }, 1000);
        }
    
        return () => clearInterval(interval);
      })

    return(
        <div className="stop-watch-background">
            <h1 className="heading1">
                StopWatch
            </h1>
            <div className="stop-watch-container">
                <div className="timer-heading">
                    <img src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" alt="stop-watch"></img>
                    <p className="timer">Timer</p>
                </div>
                <p>{`${minuteCount.toString().padStart(2,'0')}:${secondCount.toString().padStart(2,'0')}`}</p>
                <div>
                    <button className="start-btn1 button1" onClick={handleStart}>Start</button>
                    <button className="stop-btn button1" onClick={handleStop}>Stop</button>
                    <button className="restart-btn button1" onClick={handleRestart}>Reset</button>
                </div>
            </div>
        </div>
    )
}
export default StopWatch