import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StopWatch from '../StopWatch/stopwatch';
// import DigitalClock from '../DigitalClock/digitalclock';
import BlogItemDetails from './blogitemdetails';
import RegistrationForm from '../RegistrationForm/registrationform';
import './routingexamples.css';
import BlogData from './home';
const RoutingApp = () => {
    return (
        <div>
        <Router>
            <div className="App">
                <ul className="App-header">
                    <li className='registration'>
                        <Link to="/">Registration
                        </Link>
                    </li>
                    <li className='home'>
                        <Link to="/home">Home</Link>
                    </li>
                    <li className='stopwatch'>
                        <Link to="/stopwatch">StopWatch</Link>
                    </li>
                    {/* <li className='digital-clock'>
                        <Link to="/digitalclock">DigitalClock</Link>
                    </li> */}
                </ul>
                <Routes>
                    <Route path='/' element={<RegistrationForm/>}/>
                    <Route path="/home" element={<BlogData/>}/>
                    <Route path="/stopwatch" element={<StopWatch />} />
                    {/* <Route path="/digitalclock" element={<DigitalClock />} /> */}
                    <Route path="/blogs/:id" element={<BlogItemDetails />} />
                </Routes>
            </div>
        </Router>
        </div>
    );
};

export default RoutingApp;

