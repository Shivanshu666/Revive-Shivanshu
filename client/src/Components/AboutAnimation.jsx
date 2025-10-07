import React, { useState, useEffect } from 'react';
import { CarFront as Camera } from 'lucide-react';
import carImage from '../assets/about/aboutbg2.jpg';
import BackImage from '../assets/about/aboutbg1.png';
import BackImageTablet from '../assets/about/bg.png';
import BackImageMobile from '../assets/about/bg.png';
// import BackImageInitial from '../assets/about/aboutbg3.png';

export default function CarCarePartner() {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStage(1), 500);
    const timer2 = setTimeout(() => setAnimationStage(2), 1500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen md:mt-12 bg-white flex items-center justify-center overflow-hidden ">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-center gap-20 relative">
          
          {/* Image Section */}
          <div 
            className={`relative z-20 transition-all duration-1000 ease-in-out`}
            style={{ width: '450px', height: '400px' }}
          >
            <div className="relative w-full h-full group">
              <div
                className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, rgba(239,68,68,0.12), rgba(236,72,153,0.08), rgba(239,68,68,0.12))' }}
              />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={carImage}
                  alt="Car garage"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-70 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <Camera className="w-4 h-4 text-red-600" />
                  <span className="text-xs font-semibold text-gray-900">Premium Care</span>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-red-500 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-red-500 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Background Content Section */}
          <div 
            className={`transition-all duration-1000 ease-in-out ${
              animationStage === 0 
                ? 'absolute left-1/2 -translate-x-1/2 scale-95 opacity-90' 
                : animationStage === 1
                ? 'absolute left-1/2 -translate-x-1/2 scale-85 opacity-60'
                : 'relative scale-100 opacity-100'
            }`}
            style={{ zIndex: animationStage === 2 ? 10 : 5, width: '600px', height: '650px' }}
          >
            <div 
              className="relative w-full h-full overflow-hidden group/card"
              style={{
                backgroundImage: `url(${BackImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                <div className="absolute inset-0 animate-pulse" style={{
                  background: 'linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(0,0,0,0.05))'
                }} />
              </div>

              <div className={`relative z-10 h-full flex flex-col justify-center px-10 lg:px-12 transition-all duration-700 ${
                animationStage === 2 ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-4'
              }`}>
                <h1 className="text-4xl xl:text-5xl font-bold mb-6 leading-tight text-gray-900 m-4">
                  Your Trusted Car Care Partner
                </h1>
                <p className="leading-relaxed text-base text-gray-700">
                  At <strong className="text-gray-900">Revive</strong>, we're more than just a car garage – we're your
                  trusted partners in keeping your vehicle safe, reliable, and running at its best. With years of hands-on experience and a passion for automobiles, our skilled technicians provide top-quality service – whether it's routine maintenance, complex repairs, or complete restorations.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Tablet Layout */}
        <div className="hidden md:flex lg:hidden flex-col items-center justify-center space-y-8">
          <div className="relative z-20 w-full max-w-lg">
            <img src={carImage} alt="Car garage" className="w-full h-[300px] object-cover rounded-2xl shadow-2xl" />
          </div>
          <div className={`relative w-full max-w-2xl transition-all duration-1000 ease-in-out ${
              animationStage === 0 ? '-translate-y-32 scale-95 opacity-90' 
              : animationStage === 1 ? '-translate-y-48 scale-85 opacity-60'
              : 'translate-y-0 scale-100 opacity-100'
            }`}
            style={{ zIndex: animationStage === 2 ? 10 : 5 }}
          >
            <div className="relative w-full h-[450px] overflow-hidden" style={{
              backgroundImage: `url(${BackImageTablet})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
              <div className={`relative z-10 h-full flex flex-col justify-center items-center text-center px-8 transition-all duration-700 p-4 ${
                animationStage === 2 ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-4'
              }`}>
                <h1 className="text-4xl font-bold mb-6 leading-tight text-gray-900 m-4">Your Trusted Car Care Partner</h1>
                <p className="leading-relaxed text-base text-gray-700 mb-8 m-4 max-w-lg">
                  At <strong className="text-gray-900">Revive</strong>, we're more than just a car garage – your
                  trusted partners in keeping your vehicle safe, reliable, and running at its best.
                  <br /><br />
                  With hands-on experience and a passion for cars, our skilled technicians provide top-quality service – from routine maintenance to complex repairs and restorations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center justify-center space-y-6">
          <div className="relative z-20 w-full max-w-md">
            <img src={carImage} alt="Car garage" className="w-full h-[200px] sm:h-[250px] object-cover rounded-2xl shadow-2xl" />
          </div>
          <div className={`relative w-full transition-all duration-1000 ease-in-out ${
              animationStage === 0 ? '-translate-y-28 scale-95 opacity-90'
              : animationStage === 1 ? '-translate-y-40 scale-85 opacity-60'
              : 'translate-y-0 scale-100 opacity-100'
            }`}
            style={{ zIndex: animationStage === 2 ? 10 : 5 }}
          >
            <div className="relative w-full h-[400px] overflow-hidden" style={{
              backgroundImage: `url(${BackImageMobile})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
              <div className={`relative z-10 h-full flex flex-col justify-center items-center text-center px-6 transition-all duration-700 p-4 ${
                animationStage === 2 ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-4'
              }`}>
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight text-gray-900 m-4">Your Trusted Car <br />Care Partner</h1>
                <p className="leading-relaxed text-sm text-gray-700 mb-6 m-4">
                  At <strong className="text-gray-900">Revive</strong>, we're more than just a car garage – your
                  trusted partners in keeping your vehicle safe, reliable, and running at its best.
                  <br /><br />
                  With hands-on experience and a passion for cars, our skilled technicians provide top-quality service – from routine maintenance to complex repairs.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.005), transparent);
          background-size: 1000px 100%;
          animation: shimmer 1.8s infinite;
        }
      `}</style>
    </div>
  );
}