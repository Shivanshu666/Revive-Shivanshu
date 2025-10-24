import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';

import Service1 from './Components/insideService/Service1';
import Service2 from './Components/insideService/Service2';
import Service3 from './Components/insideService/Service3';
import Service4 from './Components/insideService/Service4';
import Service5 from './Components/insideService/Service5';
import Service6 from './Components/insideService/Service6';

import Sample from './Components/HeroSection';
import ScrollToHashElement from './ScrollToHash';
import Terms from './Components/Terms';
import ScrollToTop from './Components/ScrollToTop';
import { Scroll } from 'lucide-react';

// Wrapper to access hooks like useLocation inside BrowserRouter
const AppWrapper = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Routes where Navbar should be hidden
  const hideNavbarRoutes = [
    '/service1',
    '/service2',
    '/service3',
    '/service4',
    '/service5',
    '/service6',
    '/footerVag',
    '/footerCeremic',
    '/footerGrap',
    '/footerTransmission',
    '/footerBrake',
    '/footerWash'
  ];

  // Routes where Footer should be hidden (includes Terms page)
  const hideFooterRoutes = [
    ...hideNavbarRoutes,
    '/Terms' // ✅ Footer will be hidden on this page
  ];

  const hideNavbar = hideNavbarRoutes.includes(location.pathname);
  const hideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <ScrollToHashElement />
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />

        {/* Service Pages */}
        <Route path="/service1" element={<Service1 />} />
        <Route path="/service2" element={<Service2 />} />
        <Route path="/service3" element={<Service3 />} />
        <Route path="/service4" element={<Service4 />} />
        <Route path="/service5" element={<Service5 />} />
        <Route path="/service6" element={<Service6 />} />

        {/* Footer Linked Pages */}
        <Route path="/footerVag" element={<Service1 />} />
        <Route path="/footerGrap" element={<Service6 />} />
        <Route path="/footerCeremic" element={<Service6 />} />
        <Route path="/footerTransmission" element={<Service5 />} />
        <Route path="/footerBrake" element={<Service3 />} />
        <Route path="/footerWash" element={<Service4 />} />

        {/* Other Pages */}
        <Route path="/sample" element={<Sample />} />
        <Route path="/Terms" element={<Terms />} />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
};

// Main App Component
const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
};

export default App;
