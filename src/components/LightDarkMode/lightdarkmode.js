import { useState } from "react";
import './lightdarkmode.css';
const LightDarkMode =(props)=>{
    const [isDarkMode,setMode]=useState("Light Mode");
    const modeClass = (isDarkMode==="Light Mode")? 'dark-mode':'light-mode';
    const changeMode =()=>{
        if(isDarkMode==="Light Mode"){
            setMode("Dark Mode")
        }
        else{
            setMode("Light Mode")
        }
    }
    return(
        <div className="above-container">
        <div className={`top-container ${modeClass}`}>
            <h1>Click To Change Mode</h1>
            <button className="btn" onClick={changeMode} >{isDarkMode}</button>
        </div>
        </div>
    )
}
export default LightDarkMode