import { useState,useEffect } from 'react'
import './digitalclock.css'
const DigitalClock=()=>{
    const [play,stop]=useState(true)
    const[timelinit,setTimeLimit]=useState(25);
   const[secondCount,setSecondCount]=useState(0);
    const handleRestart=()=>{
        setTimeLimit(25)
        setSecondCount(0)
    }

    const onChangeStar=()=>{
        stop(!play)   
    }
    const handleIncrement=()=>{
        setTimeLimit(timelinit+1)
    }
    const handleDecrement=()=>{
        if(timelinit>25){
        setTimeLimit(timelinit-1)
        }
    }  
    useEffect(()=>{
        if(!play){
            const interval=setInterval(()=>{
                setSecondCount(secondCount=>(secondCount+1)%60)
            },1000)
            return()=>clearInterval(interval)
        }
    })   
    return(
        <div className='whole-background'>
            <h1 className='heading'>Digital Clock</h1>
        <div >
            <div className='time-container'>
            <p className="low-level-container">
            {`${timelinit}:${secondCount.toString().padStart(2, '0')}`}
          </p>
          {play?(<p className="low-level">Pause</p>):(<p className="low-level">Running</p>)}
            
            </div>
            <div>
                {play?(
                <div className='pause-start-container'>
                    <img onClick={onChangeStar} className='play-btn' src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png" alt='play-icon'></img>
                    <p className='start-btn' onClick={onChangeStar}>Start</p>
                </div>
                ):(
                <div className='pause-start-container'>
                    <img onClick={onChangeStar} className='play-btn' src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png" alt='pause-icon'></img>
                    <p className='start-btn' onClick={onChangeStar}>Pause</p>
                    </div>
                )
    }
                <div className='pause-reset-container'>
                    <img onClick={handleRestart} className='play-btn' src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png" alt='reset-icon'></img>
                    <p className='start-btn' onClick={handleRestart}>Reset</p>
                </div>
            </div>
            <div className='special-container'>
                <p className='timer-limit-text'>Set timer limit</p>
                <div className='plus-minus'>
                    <button onClick={handleDecrement} className='minus-btn'>-</button>
                    <p className='increment-btns'>{timelinit}</p>
                    <button onClick={handleIncrement} className='plus-btn'>+</button>
                </div>
            </div>
        </div>
        </div>
    )
}
export default DigitalClock