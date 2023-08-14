import './spedometer.css';
import { useState } from "react"

const Speedometer =()=>{
    const [Accelerate,setAccelerate]=useState(0);
    const handleAcceleration =()=>{
        setAccelerate(Accelerate+10)
    }
    const handleBreak =()=>{
        if(Accelerate>0){
        setAccelerate(Accelerate-10)
        }
        else{
            setAccelerate(Accelerate)
        }
    }
    return(
        <div className="spedo-container">
            <h1 className='heading'>SPEEDOMETER</h1>
            <p className='speed-bar'>{`speed is ${Accelerate}mph`}</p>
            <div>
            <button className='btn-accel' onClick={handleAcceleration}>Accelerate</button>
            <button onClick={handleBreak} >Apply Break</button>
            </div>
        </div>
    )
}
export default Speedometer