import './fruitscounter.css';
import { useState } from "react"

const FruitsCounter =()=>{
    const [fruitMCount,setMangoCount]=useState(0);
    const [fruitBcount,setBananaCount]=useState(0);
    const incrementMango=()=>{
        setMangoCount(fruitMCount+1)
    }
    const incrementBanana=()=>{
        setBananaCount(fruitBcount+1)
    }
    return(
        <div className='whole-container'>
            <h1 className='heading'>{`Bob ate ${fruitMCount} mangoes ${fruitBcount} bananas`}</h1>
            <div className="fruits-container">
            <div className='mango-container'>
                <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="mango"></img>
                <button onClick={incrementMango}>Eat Mango</button>
            </div>
            <div className='banana-container'>
                <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="banana"></img>
                <button onClick={incrementBanana}>Eat Banana</button>
            </div>
            </div>
        </div>
    )
}
export default FruitsCounter