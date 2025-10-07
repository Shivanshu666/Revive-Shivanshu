import React from 'react';
import { useNavigate } from 'react-router-dom';
import service1 from '../../assets/service/insideService/service1.webp';

const Service1 = () => {
  const navigate = useNavigate();
  const handleBack = () => {
 navigate('/', { state: { scrollToFooter: true } });// slight delay to ensure DOM is mounted
};


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
        onClick={handleBack}
        className="absolute top-6 left-6 z-20 bg-white/80 hover:bg-white text-black px-4 py-2 rounded-md shadow-md transition"
      >
        ← Back
      </button>

      {/* Content */}
      <div className="relative z-10 flex-col flex items-end md:items-center justify-center h-full">
        <h1 className="text-white text-xl md:text-5xl font-medium text-center">
          AC & COOLING SYSTEM SERVICE
        </h1>
        <div>

        <p className='text-white text-xs px-4 md:text-sm max-w-7xl text-center mt-16'>AT OUR GARAGE, WE PROVIDE THE BEST AC AND COOLING SYSTEM SERVICE TO KEEP YOUR CAR RUNNING SMOOTHLY AND YOUR DRIVES COMFORTABLE. IF YOUR AC ISN’T COOLING PROPERLY OR YOUR ENGINE IS OVERHEATING, DON’T WORRY—WE’VE GOT YOU COVERED. OUR EXPERT TEAM CAREFULLY CHECKS EVERY PART OF THE SYSTEM, FROM THE RADIATOR AND COMPRESSOR TO THE THERMOSTAT AND COOLANT LINES, TO FIND THE EXACT PROBLEM. WE FIX LEAKS, CLEAN OR REPLACE DAMAGED PARTS, AND REFILL HIGH-QUALITY COOLANT TO ENSURE LONG-LASTING PERFORMANCE. ONCE OUR SERVICE IS DONE, YOUR AC WILL BLOW ICY-COOL AIR, AND YOUR ENGINE WILL STAY AT THE PERFECT TEMPERATURE, EVEN ON THE HOTTEST DAYS. WITH OUR ADVANCED TOOLS, SKILLED TECHNICIANS, AND COMMITMENT TO QUALITY, WE MAKE SURE YOUR CAR GETS NOTHING LESS THAN THE BEST CARE.</p>
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
        AC & COOLING SYSTEM SERVICE
      </h1>
    </div>
  </div>

  {/* 60% TEXT SECTION */}
  <div className="bg-white h-[50vh] overflow-y-auto px-4 py-4">
    <p className="text-black text-sm md:text-sm max-w-3xl mx-auto text-center leading-relaxed">
     At our garage, we provide the best AC and Cooling System Service to keep your car running smoothly and your drives comfortable. If your AC isn’t cooling properly or your engine is overheating, don’t worry—we’ve got you covered. Our expert team carefully checks every part of the system, from the radiator and compressor to the thermostat and coolant lines, to find the exact problem. We fix leaks, clean or replace damaged parts, and refill high-quality coolant to ensure long-lasting performance. Once our service is done, your AC will blow icy-cool air, and your engine will stay at the perfect temperature, even on the hottest days. With our advanced tools, skilled technicians, and commitment to quality, we make sure your car gets nothing less than the best care.
    </p>
  </div>
</div>

    </>
  );
};

export default Service1;
