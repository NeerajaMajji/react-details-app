import { useState } from "react"
import './evenoddapp.css'
const EvenOddApp=()=>{
    const [currentNumber,setCurrentNumber]=useState(0)
let getRandonNumber=()=>Math.ceil(Math.random()*100)


const handleRandomNumber=()=>{
    const randomNumber=getRandonNumber()
    setCurrentNumber(currentNumber+randomNumber)
}
    
    return(
        <div className="on-top-container">
            <p className="my-heading">{`count ${currentNumber}`}</p>
            {currentNumber %2===0? <p className="even-odd">Even Number</p>:<p className="even-odd">Odd Number</p>}
            <button className="btn-handle" onClick={handleRandomNumber}>Increment</button>
        </div>
       
    )
}
export default EvenOddApp