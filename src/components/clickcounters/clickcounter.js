import './clickcounter.css';
import { useState } from "react";
const ClickCounter =()=>{
    const [currentState,setCurrentState]=useState(0)
    const onClickHandle=()=>{
        setCurrentState(currentState+1)
    }
    return(
<div className="counter-container">
<h1>Counter</h1>
<p>{currentState }</p>
<button onClick={onClickHandle}>Click Me</button>

</div>
    )
}
export default ClickCounter