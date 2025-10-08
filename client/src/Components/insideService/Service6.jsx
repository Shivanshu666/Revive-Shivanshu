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
                     GRAPHENE & CERAMIC COATING
                    </h1>
                    <div>

                        <p className='text-white text-xs px-4 md:text-sm max-w-7xl text-center mt-16'>GIVE YOUR CAR A STUNNING, LONG-LASTING SHINE AND UNBEATABLE PROTECTION WITH OUR PREMIUM GRAPHENE AND CERAMIC COATING SERVICES. THESE ADVANCED COATINGS CREATE A STRONG, HYDROPHOBIC LAYER OVER YOUR VEHICLE’S PAINT, SHIELDING IT FROM UV RAYS, OXIDATION, DIRT, WATER SPOTS, AND CHEMICAL STAINS. GRAPHENE TECHNOLOGY OFFERS ENHANCED DURABILITY AND HEAT RESISTANCE, WHILE CERAMIC COATING ENSURES A DEEP, GLOSSY FINISH THAT MAKES YOUR CAR LOOK BRAND NEW FOR YEARS. WITH OUR EXPERT APPLICATION, MAINTENANCE BECOMES EFFORTLESS — YOUR CAR STAYS CLEANER, SHINES BRIGHTER, AND IS PROTECTED LONGER.</p>
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
                     GRAPHENE & CERAMIC COATING
                        </h1>
                    </div>
                </div>

                {/* 60% TEXT SECTION */}
                <div className="bg-white h-[50vh] overflow-y-auto px-4 py-4">
                    <p className="text-black text-sm md:text-sm max-w-3xl mx-auto text-center leading-relaxed">
                    Give your car a stunning, long-lasting shine and unbeatable protection with our premium Graphene and Ceramic Coating services. These advanced coatings create a strong, hydrophobic layer over your vehicle’s paint, shielding it from UV rays, oxidation, dirt, water spots, and chemical stains. Graphene technology offers enhanced durability and heat resistance, while ceramic coating ensures a deep, glossy finish that makes your car look brand new for years. With our expert application, maintenance becomes effortless — your car stays cleaner, shines brighter, and is protected longer.
                    </p>
                </div>
            </div>

        </>
    );
};

export default Service6;
