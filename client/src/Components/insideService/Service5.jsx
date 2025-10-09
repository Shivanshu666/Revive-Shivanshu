import React from 'react';
import { useNavigate } from 'react-router-dom';
import service5 from '../../assets/service/insideService/service5.jpg';

const Service5 = () => {
    const navigate = useNavigate();

    return (
        <>

            <div className="hidden md:block relative w-full h-screen overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service5})` }}
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
                        TRANSMISSION
                    </h1>
                    <div>

                        <p className='text-white text-xs px-4 md:text-sm max-w-7xl text-center mt-16'>AT OUR GARAGE, WE PROVIDE EXPERT TRANSMISSION SERVICE & REPAIR TO KEEP YOUR CAR SHIFTING SMOOTHLY AND DRIVING EFFORTLESSLY. IF YOU NOTICE DELAYED GEAR SHIFTS, SLIPPING, OR UNUSUAL NOISES WHILE DRIVING, IT’S A SIGN YOUR TRANSMISSION NEEDS PROFESSIONAL CARE. OUR SKILLED TECHNICIANS USE ADVANCED DIAGNOSTIC TOOLS TO IDENTIFY THE EXACT ISSUE—WHETHER IT’S LOW FLUID, WORN COMPONENTS, OR INTERNAL DAMAGE. WE SERVICE, REPAIR, OR REPLACE PARTS WITH PRECISION TO RESTORE PERFECT GEAR PERFORMANCE. FROM FLUID FLUSHES TO COMPLETE TRANSMISSION OVERHAULS, WE HANDLE EVERYTHING WITH CARE AND EXPERTISE. ONCE OUR SERVICE IS DONE, YOUR CAR WILL ACCELERATE SMOOTHLY, SHIFT SEAMLESSLY, AND PERFORM AT ITS VERY BEST. WITH OUR COMMITMENT TO QUALITY AND RELIABILITY, YOU CAN TRUST US TO GIVE YOUR TRANSMISSION THE ATTENTION IT DESERVES.</p>
                    </div>
                </div>
            </div>


            {/* mobile  */}
            <div className="md:hidden block w-full h-screen">
                {/* 40% IMAGE SECTION */}
                <div className="relative w-full h-[50vh]">
                    {/* Image */}
                    <img
                        src={service5}
                        alt="AC & Cooling System Service"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 z-10"></div>

                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-4 left-4 z-20 bg-white/80 test-sm hover:bg-white text-black px-3 py-1 md:px-4 md:py-2 rounded-md shadow-md transition"
                    >
                        ← Back
                    </button>

                    {/* Title at Bottom of Image */}
                    <div className="absolute bottom-4 left-0 right-0 z-20 text-center px-4">
                        <h1 className="text-white text-xl font-semibold">
                      TRANSMISSION
                        </h1>
                    </div>
                </div>

                {/* 60% TEXT SECTION */}
                <div className="bg-white h-[50vh] overflow-y-auto px-4 py-4">
                    <p className="text-black text-sm md:text-sm max-w-3xl mx-auto text-center leading-relaxed">
                     At our garage, we provide expert Transmission Service & Repair to keep your car shifting smoothly and driving effortlessly. If you notice delayed gear shifts, slipping, or unusual noises while driving, it’s a sign your transmission needs professional care. Our skilled technicians use advanced diagnostic tools to identify the exact issue—whether it’s low fluid, worn components, or internal damage. We service, repair, or replace parts with precision to restore perfect gear performance. From fluid flushes to complete transmission overhauls, we handle everything with care and expertise. Once our service is done, your car will accelerate smoothly, shift seamlessly, and perform at its very best. With our commitment to quality and reliability, you can trust us to give your transmission the attention it deserves.
                    </p>
                </div>
            </div>

        </>
    );
};

export default Service5;
