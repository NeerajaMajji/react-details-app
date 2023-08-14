import TechnologyCard from "./technologycard";
import './technologylist.css';
const technologylist = [
    {
        id:1,
        title:"Data Scientis",
        description:"Data scientists gather and analyze large sets of structured and unstructured data",
        imageUrl:"https://assets.ccbp.in/frontend/react-js/data-scientist-img.png",
        className:"card-1"
    },
    {
        id: 2,
        title: 'IOT Developer',
        description:'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
        imageUrl:"https://assets.ccbp.in/frontend/react-js/iot-developer-img.png",
        className: 'card-2',
    },
    {
        id: 3,
        title: 'VR Developer',
        description:'A VR developer creates completely new digital environments that people can see.',
        imageUrl:"https://assets.ccbp.in/frontend/react-js/vr-developer-img.png",
        className: 'card-3',
    },
    {
        id: 4,
        title: 'ML Engineer',
        description:'Machine learning engineers feed data into models defined by data scientists.',
        imageUrl:"https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png",
        className: 'card-4',
    }
]

const TechnologyCardList =()=>(
    <div className="cards-app-container">
        <h1>Learn 4.0 Technologies</h1>
        <p>Get Trained by alumin of IITs and top companies like amazon flipkart Microsoft Intel etc Learn directly from professionals involved in product Development</p>
        <ul className="card-list">
            {
                technologylist.map((each)=>(
                    <TechnologyCard cardDetails={each} key={each.id} />
                ))
            }
        </ul>
        
    </div>
)
export default TechnologyCardList