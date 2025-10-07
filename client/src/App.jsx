import React from 'react';
import { BrowserRouter, Routes, Route, useLocation,Link } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Service1 from '../src/Components/insideService/Service1';
import Service2 from './Components/insideService/Service2';
import Service3 from './Components/insideService/Service3';
import Service4 from './Components/insideService/Service4';
import Service5 from './Components/insideService/Service5';
import Service6 from './Components/insideService/Service6';
import Sample from './Components/HeroSection';

import { useNavigate } from 'react-router-dom';



// Create a wrapper component to use `useLocation` outside BrowserRouter
const AppWrapper = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define routes where Navbar and Footer should be hidden
  const hideNavbarFooterRoutes = ['/service1','/service2','/service3','/service4','/service5','/service6','/footerAc','/footerEngine','/footerBrake','/footerWash'];

  const shouldHide = hideNavbarFooterRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHide && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service1" element={<Service1 />} />
        <Route path="/service2" element={<Service2 />} />
        <Route path="/service3" element={<Service3 />} />
        <Route path="/service4" element={<Service4 />} />
        <Route path="/service5" element={<Service5 />} />
        <Route path="/service6" element={<Service6 />} />
        {/* // footer // */}
        <Route path="/footerAc" element={<Service1/>}/> 
        <Route path='/footerEngine' element={<Service2/>}/>
        <Route path='/footerBrake' element={<Service3/>}/>
        <Route path='/footerWash' element={<Service4/>}/>
        <Route path='/sample' element={<Sample/>}/>

        {/* Add other routes here */}
      </Routes>
      {!shouldHide && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
};

export default App;
