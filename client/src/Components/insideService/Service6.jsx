import React from 'react';
import { useNavigate } from 'react-router-dom';
import service6 from '../../assets/service/insideService/service6.jpg';

const Service6 = () => {
    const navigate = useNavigate();

    return (
        <>

            <div className="hidden md:block relative w-full h-screen overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service6})` }}
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
                       OIL CHANGE
                    </h1>
                    <div>

                        <p className='text-white text-xs px-4 md:text-sm max-w-7xl text-center mt-16'>AT OUR GARAGE, WE OFFER FAST AND RELIABLE OIL CHANGE SERVICE TO KEEP YOUR ENGINE HEALTHY AND RUNNING AT PEAK PERFORMANCE. OVER TIME, OLD ENGINE OIL LOSES ITS ABILITY TO PROTECT VITAL COMPONENTS, LEADING TO FRICTION, OVERHEATING, AND REDUCED MILEAGE. OUR EXPERTS DRAIN OUT THE DIRTY OIL, REPLACE IT WITH TOP-QUALITY FRESH OIL, AND FIT A BRAND-NEW FILTER TO ENSURE SMOOTH LUBRICATION. WITH THIS SERVICE, YOUR ENGINE STAYS COOLER, CLEANER, AND MORE EFFICIENT, GIVING YOU BETTER PERFORMANCE AND FUEL ECONOMY. REGULAR OIL CHANGES NOT ONLY EXTEND THE LIFE OF YOUR ENGINE BUT ALSO SAVE YOU FROM COSTLY REPAIRS DOWN THE ROAD. WITH OUR QUICK SERVICE, EXPERT CARE, AND PREMIUM PRODUCTS, WE MAKE SURE YOUR CAR IS ALWAYS READY FOR THE JOURNEY AHEAD.</p>
                    </div>
                </div>
            </div>


            {/* mobile  */}
            <div className="md:hidden block w-full h-screen">
                {/* 40% IMAGE SECTION */}
                <div className="relative w-full h-[50vh]">
                    {/* Image */}
                    <img
                        src={service6}
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
                     OIL CHANGE
                        </h1>
                    </div>
                </div>

                {/* 60% TEXT SECTION */}
                <div className="bg-white h-[50vh] overflow-y-auto px-4 py-4">
                    <p className="text-black text-sm md:text-sm max-w-3xl mx-auto text-center leading-relaxed">
                    At our garage, we offer fast and reliable Oil Change Service to keep your engine healthy and running at peak performance. Over time, old engine oil loses its ability to protect vital components, leading to friction, overheating, and reduced mileage. Our experts drain out the dirty oil, replace it with top-quality fresh oil, and fit a brand-new filter to ensure smooth lubrication. With this service, your engine stays cooler, cleaner, and more efficient, giving you better performance and fuel economy. Regular oil changes not only extend the life of your engine but also save you from costly repairs down the road. With our quick service, expert care, and premium products, we make sure your car is always ready for the journey ahead.
                    </p>
                </div>
            </div>

        </>
    );
};

export default Service6;
