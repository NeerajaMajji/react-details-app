import { useState } from "react"
const countryAndCapitalsList = [
    {
      id: 'NEW_DELHI',
      capitalDisplayText: 'New Delhi',
      country: 'India',
    },
    {
      id: 'LONDON',
      capitalDisplayText: 'London',
      country: 'United Kingdom',
    },
    {
      id: 'PARIS',
      capitalDisplayText: 'Paris',
      country: 'France',
    },
    {
      id: 'KATHMANDU',
      capitalDisplayText: 'Kathmandu',
      country: 'Nepal',
    },
    {
      id: 'HELSINKI',
      capitalDisplayText: 'Helsinki',
      country: 'Finland',
    },
  ]
const Dropdown =()=>{
const [selectOption,SetSelectOption]=useState("");
const handleOptions=(event)=>{
    SetSelectOption(event.target.value);
}
    return(
        <div>
           <select value={selectOption} onChange={handleOptions}>
            {countryAndCapitalsList.map((each)=>(<option
                key={each.id}
                value={each.capitalDisplayText}>
                    {each.capitalDisplayText}
            </option>))}
            </select>
            {selectOption && 
            (<p>{countryAndCapitalsList.find((item)=>item.capitalDisplayText===selectOption).country}</p>)
            }
        </div>
    )
}
export default Dropdown
