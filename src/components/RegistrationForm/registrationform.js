import { useState } from 'react';
import './registrationform.css';
const RegistrationForm=()=>{
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [firstNamesubmit,setFirstNameSubmit]=useState(false);
    const [lastNameSubmit,setLastNameSubmit]=useState(false);
    const [submitButton,setSubmitButton]=useState(false);

    const handleFirstnameSubmit=()=>{
       
        if(firstName===""){
        setFirstNameSubmit(true)
        }
        else{
            setFirstNameSubmit(false)
        }
        if(lastName===""){
            setLastNameSubmit(true)
        }
        else{
            setLastNameSubmit(false)
        }
        if (firstName !== '' && lastName !== '') {
            setSubmitButton(true);
          }
    }
    const handleFirstName=(event)=>{
        setFirstName(event.target.value)
    }
    const handleLastName=(event)=>{
        setLastName(event.target.value)
    }
    return(
       
        <div className="registration-container">
            <h1 className='heading2'>Registration</h1>

            {!submitButton ?(
            <div className='form-container'>
            <p className='first-name-heading'>First Name</p>
            <input onChange={handleFirstName} className='first-name-input' type="text" placeholder="First Name" ></input>
            {firstNamesubmit&& <p className='required-field'>Required</p>}
            <p className='last-name-heading'>Last Name</p>
            <input onChange={handleLastName} className="last-name-input" type="text" placeholder="Last Name"/>
            {lastNameSubmit&& <p className='required-field'>Required</p>}
            <div className='button-container'>
            <button onClick={handleFirstnameSubmit} className='submit-btn'>Submit</button>
            </div>
            </div>
            ):(<div className='success-block'>
                <img className='success-img' src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png' alt='sucessimage'></img>
                <p className='success-msg'>Submitted sucessfully</p>
            </div>)
            }
        </div>
    )
}
export default RegistrationForm