import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import car from "../assets/Home/car3.png";


const HeroSection = ({ scrollToBooking }) => {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const back1Ref = useRef(null);
  const back2Ref = useRef(null);
  const back3Ref = useRef(null);
  const overlayRef = useRef(null);
  const heroTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 🔴 Initial: overlay fully red, covering hero but transparent layer
      gsap.set(overlayRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        backgroundColor: "#E62425",
        opacity: 1,
      });

      // ⚙️ Phase 1: Hold red for 5s, then fade + reveal right→left
      tl.to(overlayRef.current, {
        clipPath: "inset(0% 100% 0% 0%)",
        duration: 3,
        delay: 5,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(overlayRef.current, { display: "none" });
        },
      });

      // 🌈 Text color transition (white → black)
      tl.fromTo(
        heroTextRef.current.querySelectorAll("h1, p"),
        { color: "#ffffff" },
        { color: "#000000", duration: 2.8, ease: "power2.inOut" },
        "<"
      );

      // ✨ Text entrance
      tl.fromTo(
        heroTextRef.current,
        { y: 50, opacity: 0, filter: "blur(10px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.8, ease: "power2.out" },
        "-=1"
      );

      // 🚗 Car entrance
      tl.fromTo(
        imgRef.current,
        { y: 50, opacity: 0, filter: "blur(15px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 2.2, ease: "power3.out" },
        "-=1.2"
      );

      // 🌤 Background decorations
      [back1Ref.current, back2Ref.current, back3Ref.current].forEach((el, i) => {
        tl.fromTo(
          el,
          { y: -50, opacity: 0, filter: "blur(6px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 1 + i * 0.5, ease: "power2.out" },
          "-=1.5"
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="overflow-hidden flex justify-center relative w-full   bg-gradient-to-b from-white to-gray-50"
style={{height:"800px"}}
    >
      {/* 🔴 Animated Red Overlay (under text/car, above background) */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "#E62425",
          mixBlendMode: "multiply",
        }}
      ></div>

      {/* 🌟 Hero Content */}
      <div className="w-[90%] mx-auto lg:px-4 px-2 flex lg:flex-row lg:h-auto flex-col-reverse justify-center items-center relative z-10">
        {/* Left Section */}
        <div ref={heroTextRef} className="md:w-2/2 text-left  hero-text">
          <h1 className="md:text-5xl text-3xl lg:text-5xl font-bold leading-tight max-w-[600px] text-white">
            Drive In With Worries, <br /> Drive Out With <br /> Confidence.
          </h1>
          <p className="text-white text-base md:text-base mt-1 md:mt-4">
            Whether it’s a small tune-up or a complete overhaul, we{" "}
            <br className="md:block hidden" /> restore your vehicle to peak performance.
          </p>
          <div className="flex justify-center md:justify-start mt-6">
            <button
              onClick={scrollToBooking}
              className="border-2 text-white text-sm font-medium cursor-pointer bg-[#E62425] border-white md:px-9 px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Book Service
            </button>
          </div>
        </div>

        {/* Background Shapes */}
        <div
          ref={back1Ref}
          className="absolute top-0 right-[-50px] md:right-[-180px] lg:right-[-120px] w-[380px] md:w-[520px] h-40"
        >
          <img src={back1} alt="Background 1" />
        </div>
        <div
          ref={back2Ref}
          className="absolute top-0 right-[-90px] md:right-[-230px] lg:right-[-190px] w-[380px] md:w-[520px] h-40"
        >
          <img src={back2} alt="Background 2" />
        </div>
        <div
          ref={back3Ref}
          className="absolute top-0 right-[-145px] md:right-[-400px] lg:right-[-425px] w-[280px] md:w-[520px] h-40"
        >
          <img src={back3} alt="Background 3" />
        </div>

        {/* 🚗 Car */}
<div className="relative z-10 overflow-visible w-full md:w-5/12 lg:w-1/2 md:h-auto flex justify-center md:justify-center lg:justify-end">
  <img
    src={car}
    id="carImg"
    alt="Car"
    className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain transition-transform duration-500 hover:scale-105 block"
  />
</div>
      </div>
    </section>
  );
};

export default HeroSection;
