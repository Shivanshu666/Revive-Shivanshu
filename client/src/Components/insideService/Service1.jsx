import React from 'react';
import { useNavigate } from 'react-router-dom';
import service1 from '../../assets/service/insideService/service1.webp';

const Service1 = () => {
  const navigate = useNavigate();


  return (
    <>
    
    <div className="hidden md:block relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${service1})` }}
        aria-hidden="true"
      ></div>

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Back Button */}
       <button
         onClick={() => navigate('/#footer-section')}
        className="absolute top-6 left-6 z-20 bg-white/80 hover:bg-white text-black px-4 py-2 rounded-md shadow-md transition"
      >
        ← Back
      </button>

      {/* Content */}
      <div className="relative z-10 flex-col flex items-end md:items-center justify-center h-full">
        <h1 className="text-white text-xl md:text-5xl font-medium text-center">
          VAG CODING VIA VCDS
        </h1>
        <div>

        <p className='text-white text-xs px-4 md:text-sm max-w-7xl text-center mt-16'>UNLOCK YOUR CAR’S HIDDEN POTENTIAL WITH OUR PROFESSIONAL VAG CODING SERVICE USING VCDS. WE CUSTOMIZE AND ENHANCE YOUR VEHICLE’S FEATURES BY ACCESSING AND ADJUSTING FACTORY SETTINGS SAFELY AND PRECISELY. FROM ENABLING HIDDEN FUNCTIONS LIKE COMFORT INDICATORS, AUTO-LOCKING, AND DYNAMIC LIGHTING TO OPTIMIZING PERFORMANCE AND CONVENIENCE SETTINGS, OUR CODING SOLUTIONS LET YOU PERSONALIZE YOUR DRIVING EXPERIENCE. WITH EXPERT HANDLING AND ADVANCED DIAGNOSTIC TOOLS, WE ENSURE EVERY TWEAK IS DONE SECURELY AND EFFECTIVELY, GIVING YOUR CAR THE UPGRADE IT TRULY DESERVES.</p>
      </div>
        </div>
    </div>


    {/* mobile  */}
    <div className="md:hidden block w-full h-screen">
  {/* 40% IMAGE SECTION */}
  <div className="relative w-full h-[50vh]">
    {/* Image */}
    <img
      src={service1}
      alt="AC & Cooling System Service"
      className="w-full h-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40 z-10"></div>

    {/* Back Button */}
    {/* <button
      onClick={() => navigate(-1)}
      className="absolute top-4 left-4 z-20 bg-white/80 test-sm hover:bg-white text-black px-3 py-1 md:px-4 md:py-2 rounded-md shadow-md transition"
    >
      ← Back
    </button> */}

    {/* Title at Bottom of Image */}
    <div className="absolute bottom-4 left-0 right-0 z-20 text-center px-4">
      <h1 className="text-white text-xl font-semibold">
        VAG CODING VIA VCDS
      </h1>
    </div>
  </div>

  {/* 60% TEXT SECTION */}
  <div className="bg-white h-[50vh] overflow-y-auto px-4 py-4">
    <p className="text-black text-sm md:text-sm max-w-3xl mx-auto text-center leading-relaxed">
    Unlock your car’s hidden potential with our professional VAG Coding service using VCDS. We customize and enhance your vehicle’s features by accessing and adjusting factory settings safely and precisely. From enabling hidden functions like comfort indicators, auto-locking, and dynamic lighting to optimizing performance and convenience settings, our coding solutions let you personalize your driving experience. With expert handling and advanced diagnostic tools, we ensure every tweak is done securely and effectively, giving your car the upgrade it truly deserves.
    </p>
  </div>
</div>

    </>
  );
};

export default Service1;
