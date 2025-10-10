import React from 'react';
import { useNavigate,useLocation  } from 'react-router-dom';
import service2 from '../../assets/service/insideService/service2.webp';

const Service2 = () => {
  
     const navigate = useNavigate();
  const location = useLocation();

  // Default fallback if no state is passed
  const from = location.state?.from || 'services';

  const handleBack = () => {
    if (from === 'footer') {
      navigate('/#footer-section');
    } else if (from === 'services') {
      navigate('/#services');
    } else {
      navigate(-1); // fallback to previous page
    }
  };

    return (
        <>

            <div className="hidden md:block relative w-full h-screen overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service2})` }}
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
                        ENGINE DIAGNOSTICS & REPAIR
                    </h1>
                    <div>

                        <p className='text-white text-xs px-4 md:text-sm max-w-7xl text-center mt-16'>AT OUR GARAGE, WE SPECIALIZE IN ENGINE DIAGNOSTICS & REPAIR TO KEEP YOUR VEHICLE PERFORMING AT ITS BEST. IF YOUR CHECK ENGINE LIGHT IS ON, OR IF YOU NOTICE UNUSUAL NOISES, VIBRATIONS, OR A DROP IN POWER, WE’RE HERE TO HELP. USING ADVANCED DIAGNOSTIC TOOLS, OUR SKILLED TECHNICIANS QUICKLY IDENTIFY THE ROOT CAUSE OF THE PROBLEM—WHETHER IT’S FAULTY SENSORS, IGNITION ISSUES, FUEL SYSTEM TROUBLES, OR MECHANICAL WEAR. WE DON’T JUST FIX SYMPTOMS, WE SOLVE THE REAL ISSUE TO PREVENT FUTURE BREAKDOWNS. FROM MINOR TUNE-UPS TO MAJOR ENGINE REPAIRS, WE HANDLE IT ALL WITH PRECISION AND CARE. ONCE WE’RE DONE, YOUR ENGINE WILL RUN SMOOTHER, QUIETER, AND MORE EFFICIENTLY, GIVING YOU BETTER PERFORMANCE AND MILEAGE. WITH OUR EXPERTISE AND COMMITMENT TO QUALITY, YOU CAN TRUST US TO BRING YOUR CAR BACK TO LIFE AND KEEP IT RUNNING STRONG.</p>
                    </div>
                </div>
            </div>


            {/* mobile  */}
            <div className="md:hidden block w-full h-screen">
                {/* 40% IMAGE SECTION */}
                <div className="relative w-full h-[50vh]">
                    {/* Image */}
                    <img
                        src={service2}
                        alt="AC & Cooling System Service"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 z-10"></div>

                    {/* Back Button */}
                    {/* <button
                        onClick={handleBack}
                        className="absolute top-4 left-4 z-20 bg-white/80 test-sm hover:bg-white text-black px-3 py-1 md:px-4 md:py-2 rounded-md shadow-md transition"
                    >
                        ← Back
                    </button> */}

                    {/* Title at Bottom of Image */}
                    <div className="absolute bottom-4 left-0 right-0 z-20 text-center px-4">
                        <h1 className="text-white text-xl font-semibold">
                        ENGINE DIAGNOSTICS & REPAIR
                        </h1>
                    </div>
                </div>

                {/* 60% TEXT SECTION */}
                <div className="bg-white h-[50vh] overflow-y-auto px-4 py-4">
                    <p className="text-black text-sm md:text-sm max-w-3xl mx-auto text-center leading-relaxed">
                        At our garage, we specialize in Engine Diagnostics & Repair to keep your vehicle performing at its best. If your check engine light is on, or if you notice unusual noises, vibrations, or a drop in power, we’re here to help. Using advanced diagnostic tools, our skilled technicians quickly identify the root cause of the problem—whether it’s faulty sensors, ignition issues, fuel system troubles, or mechanical wear. We don’t just fix symptoms, we solve the real issue to prevent future breakdowns. From minor tune-ups to major engine repairs, we handle it all with precision and care. Once we’re done, your engine will run smoother, quieter, and more efficiently, giving you better performance and mileage. With our expertise and commitment to quality, you can trust us to bring your car back to life and keep it running strong.
                    </p>
                </div>
            </div>

        </>
    );
};

export default Service2;
