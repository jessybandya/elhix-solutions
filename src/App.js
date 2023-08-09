import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import AboutUs from './pages/About-us';
import Team from './pages/Team';
import Services from './pages/Services';
import ContactUs from './pages/Contact-us';

function App() {
  
  return (
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/about-us' element={<AboutUs />} />
    <Route exact path='/team' element={<Team />} />
    <Route exact path='/services' element={<Services />} />
    <Route exact path='/contact-us' element={<ContactUs />} />
    <Route exact path="*" element={<Error/>} />
    </Routes>
  );
}

export default App;
