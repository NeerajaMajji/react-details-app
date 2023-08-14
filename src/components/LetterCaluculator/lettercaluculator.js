import { useState } from "react"

const LetterCaluculator=()=>{
    const [start,setStart]=useState("")
    const handler=(event)=>{
        const res=event.target.value
        setStart(res)
    }
    return(
        <div>
            <h1>Caluculate the Letters you enter</h1>
            <input type="search" placeholder="Enter the phrase" onChange={handler}/>
            <p>{start.length}</p>
        </div>
    )
}
export default LetterCaluculator

