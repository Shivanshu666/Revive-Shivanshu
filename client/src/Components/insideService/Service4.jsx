import React from 'react';
import { useNavigate } from 'react-router-dom';
import service4 from '../../assets/service/insideService/service4.webp';

const Service3 = () => {
    const navigate = useNavigate();

    return (
        <>

            <div className="hidden md:block relative w-full h-screen overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service4})` }}
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
                        CAR WASHING & DETAILING
                    </h1>
                    <div>

                        <p className='text-white text-xs px-4 md:text-sm max-w-7xl text-center mt-16'>AT OUR GARAGE, WE DON’T JUST WASH CARS—WE BRING BACK THEIR SHOWROOM SHINE WITH OUR PROFESSIONAL CAR WASHING & DETAILING SERVICE. FROM A THOROUGH EXTERIOR WASH TO DEEP INTERIOR CLEANING, WE MAKE SURE EVERY CORNER OF YOUR CAR IS SPOTLESS. OUR TEAM CAREFULLY REMOVES DIRT, DUST, AND STAINS WHILE USING HIGH-QUALITY PRODUCTS THAT PROTECT YOUR CAR’S PAINT AND INTERIOR SURFACES. WE ALSO POLISH AND WAX THE EXTERIOR TO GIVE IT A LASTING SHINE AND RESTORE ITS ORIGINAL LOOK. INSIDE, WE CLEAN SEATS, CARPETS, DASHBOARD, AND VENTS, LEAVING YOUR CAR FRESH AND COMFORTABLE. ONCE WE’RE DONE, YOUR VEHICLE DOESN’T JUST LOOK CLEAN—IT FEELS BRAND NEW. WITH OUR ATTENTION TO DETAIL AND DEDICATION TO PERFECTION, WE MAKE YOUR CAR STAND OUT WHEREVER YOU GO.</p>
                    </div>
                </div>
            </div>


            {/* mobile  */}
            <div className="md:hidden block w-full h-screen">
                {/* 40% IMAGE SECTION */}
                <div className="relative w-full h-[50vh]">
                    {/* Image */}
                    <img
                        src={service4}
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
                      CAR WASHING & DETAILING
                        </h1>
                    </div>
                </div>

                {/* 60% TEXT SECTION */}
                <div className="bg-white h-[50vh] overflow-y-auto px-4 py-4">
                    <p className="text-black text-sm md:text-sm max-w-3xl mx-auto text-center leading-relaxed">
                     At our garage, we don’t just wash cars—we bring back their showroom shine with our professional Car Washing & Detailing service. From a thorough exterior wash to deep interior cleaning, we make sure every corner of your car is spotless. Our team carefully removes dirt, dust, and stains while using high-quality products that protect your car’s paint and interior surfaces. We also polish and wax the exterior to give it a lasting shine and restore its original look. Inside, we clean seats, carpets, dashboard, and vents, leaving your car fresh and comfortable. Once we’re done, your vehicle doesn’t just look clean—it feels brand new. With our attention to detail and dedication to perfection, we make your car stand out wherever you go.
                    </p>
                </div>
            </div>

        </>
    );
};

export default Service3;
