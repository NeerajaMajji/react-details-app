// import { useState } from "react"
import './showhide.css'
import { useState } from "react"

const HideShowApp =(props)=>{
    const {FirstName,LastName}=props;
    const [showFirstName,setFirstName]=useState(false);
    const [showLastName,setLastName]=useState(false);
    const handleFirstName=()=>{
        setFirstName(!showFirstName)
    }
    const handleLastName=()=>{
        setLastName(!showLastName)
    }
    return(
        <div className='on-top-container'>
            <h1 className='heading'>Show/Hide</h1>
            <div className="btn-cls">
                <div>
                <button onClick={handleFirstName}>Show/Hide FirstName</button>
                {showFirstName&&<p className='pop-up'>{FirstName}</p>}
                </div>
                <div>
                <button onClick={handleLastName}>Show/Hide LastName</button>
                {showLastName &&<p className='pop-up'>{LastName}</p>}
                </div>
            </div>
        </div>
    )
}
const HideShowApp2=()=>(
    <HideShowApp
    FirstName="Neeraja"
    LastName="Majji"

     />
)

export default HideShowApp2