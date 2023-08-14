import DestinationSearch from "./destinationsearch";
import './destinationfilterlist.css'
import { useState } from "react";

const DestinationSearchList=[
    {
        id: 1,
        name: 'Melaka Mosque',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png',
      },
      {
        id: 2,
        name: 'Shrubland',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/shrubland-img.png',
      },
      {
        id: 3,
        name: 'New York',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/new-york-img.png',
      },
      {
        id: 4,
        name: 'Escarpment',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/escarpment-img.png',
      },
      {
        id: 5,
        name: 'Westminster Abbey',
        imgUrl:
          'https://assets.ccbp.in/frontend/react-js/westminster-abbey-img.png',
      },
      {
        id: 6,
        name: 'South Downs National Park',
        imgUrl:
          'https://assets.ccbp.in/frontend/react-js/south-downs-national-park-img.png',
      },
      {
        id: 7,
        name: 'National Historic Site',
        imgUrl:
          'https://assets.ccbp.in/frontend/react-js/national-historic-site-img.png',
      },
      {
        id: 8,
        name: 'Tower Bridge',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tower-bridge-img.png',
      },
      {
        id: 9,
        name: 'Arc Here',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/arc-here-img.png',
      },
      {
        id: 10,
        name: 'Steeple',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/steeple-img.png',
      },
      {
        id: 11,
        name: 'Glaciokarst',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/glaciokarst-img.png',
      },
      {
        id: 12,
        name: 'Parco Nazionale delle Cinque Terre',
        imgUrl:
          'https://assets.ccbp.in/frontend/react-js/parco-nazionale-delle-cinque-terre-img.png',
      },
]
const Tourist=()=>{
    const [inputText,setInputText]=useState("")
const handleInputText=(event)=>{
setInputText(event.target.value);
}
const searchResult=DestinationSearchList.filter(eachDestination=>
    eachDestination.name.toLowerCase().includes(inputText.toLowerCase()))
return(
    <div>
    <div className="on-top-container">
        <h1>Destination Search</h1>
        <div className="search-input-container">
        <input type="search"
        placeholder="Search"
        className="input-search"
        value={inputText}
        onChange={handleInputText}
         />
        <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
        </div>
        </div>
        <div>
    <ul className="destination-list">
  {  searchResult.map((each)=>(
<DestinationSearch key={each.id} imgUrl={each.imgUrl} name={each.name}/>
    ))}
    </ul>
    </div>
    </div>
)
}
export default Tourist