import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import AboutUs from './pages/About-us';
import Team from './pages/Team';
import Services from './pages/Services';
import ContactUs from './pages/Contact-us';
import Admin from './pages/Admin';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/theme";
import Service from './pages/Services/Service';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/about-us' element={<AboutUs />} />
    <Route exact path='/team' element={<Team />} />
    <Route exact path='/services' element={<Services />} />
    <Route exact path='/contact-us' element={<ContactUs />} />
    <Route exact path='/admin-page' element={<Admin />} />
    <Route exact path='/service/:id' element={<Service />} />
    <Route exact path="*" element={<Error/>} />
    </Routes>
    </ThemeProvider>
  );
}

export default App;
