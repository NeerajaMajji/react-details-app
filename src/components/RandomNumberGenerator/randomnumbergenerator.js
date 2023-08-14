import { useState } from "react"

const RandomNumberGenerator=()=>{
    let randonNumbers=()=>Math.ceil(Math.random()*100)
    const [randomNumber,setRandomNumber]=useState(0)
    const handleRandomNumbers=()=>{
        const randnumber=randonNumbers()
        setRandomNumber(randnumber)

    }
    return(
        <div>
            <h1>Random Numbers</h1>
            <button onClick={handleRandomNumbers}>Generate</button>
            <p>{randomNumber}</p>
        </div>
    )
}
export default RandomNumberGenerator