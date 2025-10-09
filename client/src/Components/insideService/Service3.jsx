import React from 'react';
import { useNavigate } from 'react-router-dom';
import service3 from '../../assets/service/insideService/service3.webp';

const Service3 = () => {
    const navigate = useNavigate();

    return (
        <>

            <div className="hidden md:block relative w-full h-screen overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service3})` }}
                    aria-hidden="true"
                ></div>

                {/* Optional Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-6 z-20 bg-white/80 hover:bg-white text-black px-4 py-2 rounded-md shadow-md transition"
                >
                    ← Back
                </button>

                {/* Content */}
                <div className="relative z-10 flex-col flex items-end md:items-center justify-center h-full">
                    <h1 className="text-white text-xl md:text-5xl font-medium text-center">
                        BRAKE SERVICE & REPLACEMENT
                    </h1>
                    <div>

                        <p className='text-white text-xs px-4 md:text-sm max-w-7xl text-center mt-16'>AT OUR GARAGE, YOUR SAFETY COMES FIRST, AND THAT’S WHY WE PROVIDE EXPERT BRAKE SERVICE & REPLACEMENT YOU CAN TRUST. IF YOU HEAR SQUEAKING, GRINDING, OR FEEL REDUCED BRAKING POWER, IT’S A CLEAR SIGN YOUR BRAKES NEED ATTENTION. OUR SKILLED TECHNICIANS CAREFULLY INSPECT BRAKE PADS, DISCS, ROTORS, AND FLUID LEVELS TO FIND THE EXACT ISSUE. WE REPAIR OR REPLACE WORN-OUT PARTS WITH HIGH-QUALITY COMPONENTS TO ENSURE MAXIMUM STOPPING POWER AND SAFETY. ONCE SERVICED, YOUR BRAKES WILL RESPOND QUICKLY AND SMOOTHLY, GIVING YOU COMPLETE CONFIDENCE ON THE ROAD. WITH OUR PRECISION WORK, ADVANCED TOOLS, AND COMMITMENT TO QUALITY, WE MAKE SURE YOUR CAR’S BRAKING SYSTEM IS ALWAYS RELIABLE, NO MATTER THE ROAD OR WEATHER.</p>
                    </div>
                </div>
            </div>


            {/* mobile  */}
            <div className="md:hidden block w-full h-screen">
                {/* 40% IMAGE SECTION */}
                <div className="relative w-full h-[50vh]">
                    {/* Image */}
                    <img
                        src={service3}
                        alt="AC & Cooling System Service"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 z-10"></div>

                    {/* Back Button */}
                    <button
                     onClick={() => navigate('/#footer-section')}
                        className="absolute top-4 left-4 z-20 bg-white/80 test-sm hover:bg-white text-black px-3 py-1 md:px-4 md:py-2 rounded-md shadow-md transition"
                    >
                        ← Back
                    </button>

                    {/* Title at Bottom of Image */}
                    <div className="absolute bottom-4 left-0 right-0 z-20 text-center px-4">
                        <h1 className="text-white text-xl font-semibold">
                       BRAKE SERVICE & REPLACEMENT
                        </h1>
                    </div>
                </div>

                {/* 60% TEXT SECTION */}
                <div className="bg-white h-[50vh] overflow-y-auto px-4 py-4">
                    <p className="text-black text-sm md:text-sm max-w-3xl mx-auto text-center leading-relaxed">
                        At our garage, your safety comes first, and that’s why we provide expert Brake Service & Replacement you can trust. If you hear squeaking, grinding, or feel reduced braking power, it’s a clear sign your brakes need attention. Our skilled technicians carefully inspect brake pads, discs, rotors, and fluid levels to find the exact issue. We repair or replace worn-out parts with high-quality components to ensure maximum stopping power and safety. Once serviced, your brakes will respond quickly and smoothly, giving you complete confidence on the road. With our precision work, advanced tools, and commitment to quality, we make sure your car’s braking system is always reliable, no matter the road or weather.
                    </p>
                </div>
            </div>

        </>
    );
};

export default Service3;
