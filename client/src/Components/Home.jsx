import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import car from "../assets/Home/car3.png";
import car2 from "../assets/Home/car2.webp";
import back1 from "../assets/Home/back1.png"
import back2 from "../assets/Home/back2.png"
import back3 from "../assets/Home/back3.png"


import Api from "./Api/Api";

// At the top of your file
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules'; // 👈 Add Navigation here

import "swiper/css";
import "swiper/css/pagination";


// Serivce Images
import service1 from "../assets/service/service1.webp";
import service2 from "../assets/service/service2.webp";
import service3 from "../assets/service/service3.webp";
import service4 from "../assets/service/service4.jpg";
import service5 from "../assets/service/service5.jpg";
import service6 from "../assets/service/service6.jpg";

// Brand We Serve
import audi from "../assets/BrandWeServe/audi.webp";
import bmw from "../assets/BrandWeServe/bmw.png";
import ford from "../assets/BrandWeServe/ford.png";
import honda from "../assets/BrandWeServe/honda.png";
import hyuandai from "../assets/BrandWeServe/hyuandai.png";
import jaguar from "../assets/BrandWeServe/jaguar.webp";
import lambo from "../assets/BrandWeServe/lambo.png";
import mahindra from "../assets/BrandWeServe/mahindra.png";
import mercedes from "../assets/BrandWeServe/mercedes.webp";
import renault from "../assets/BrandWeServe/Renault.png";

// why choose us
import why1 from "../assets/whyChoose/why1.webp";
import why2 from "../assets/whyChoose/why2.webp";
import why3 from "../assets/whyChoose/why3.webp";

// Latest Project
import project1 from "../assets/Project/project1.webp";
import project2 from "../assets/Project/project2.webp";
import project3 from "../assets/Project/project3.webp";
import project4 from "../assets/Project/project4.jpg";
import project5 from "../assets/Project/project5.webp";
import project6 from "../assets/Project/project6.webp";
import project7 from "../assets/Project/project7.webp";


// Testinomials
import testi1 from "../assets/testinomials/testi1.webp";
import testi2 from "../assets/testinomials/testi2.webp";
import testi3 from "../assets/testinomials/testi3.webp";
import testi4 from "../assets/testinomials/testi4.jpg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// About
import AboutAnimation from "../Components/AboutAnimation"

const Home = () => {
  const location = useLocation();
  const testimonialBoxRef = useRef(null);
   const [selectedIndex, setSelectedIndex] = useState(null);

useEffect(() => {
  if (selectedIndex !== null && testimonialBoxRef.current) {
    gsap.fromTo(
      testimonialBoxRef.current,
      {
        x: -100,         // Start from left
        opacity: 0,
        filter: "blur(6px)",
      },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power2.out",
      }
    );
  }
}, [selectedIndex]);


  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1)); // remove "#"
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // delay to ensure the DOM is ready
      }
    }
  }, [location]);
  ///

  //  const location = useLocation();



  // bkkoing button 
  const bookingRef = useRef(null);
  const contactRef = useRef(null);

  // Reusable scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  ///
  // animation 
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const brandWeServeRef = useRef(null);
  const galleryRef = useRef(null);
  const imgRef = useRef(null);
  const textRef1 = useRef(null);
  const imageRef1 = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // sab animation yaha
      // Home Section Animation
      gsap.fromTo(
        homeRef.current,
        { y: 50, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: homeRef.current,
            start: "top 80%", // when top of section hits 80% of viewport
            toggleActions: "play none none none",
          },
        }
      );

      // About Section Animation
      const elements = gsap.utils.toArray(
        "#about .animate-item"
      );

      gsap.fromTo(
        elements,
        { y: 50, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 40%",
            toggleActions: "play none none none",
          },
        }
      );

      // Services Section
      const serviceItems = serviceRef.current.querySelectorAll(".animate-item");

      gsap.fromTo(
        serviceItems,
        { y: 100, opacity: 0, filter: "blur(10px)" }, // right se aayenge
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
          stagger: 0.2, // ek ek karke appear honge
          scrollTrigger: {
            trigger: serviceRef.current,
            start: "top 40%",
            toggleActions: "play none none none",
          },
        }
      );

      // // Brand Section

      const brandItems = brandWeServeRef.current.querySelectorAll(".brand-item");

      gsap.fromTo(
        brandItems,
        { x: 100, opacity: 0, filter: "blur(10px)" }, // right se aayenge
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
          stagger: 0.2, // ek ek karke aayenge
          scrollTrigger: {
            trigger: brandWeServeRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Gallery Section
      gsap.fromTo(
        galleryRef.current,
        { y: 50, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Why Choose Us Section

      // Booking Form Section
      gsap.fromTo(
        "#booking form, #booking > div:first-child",
        { y: 50, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#booking",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
      // why we choiose //
      if (textRef1.current) {
        gsap.fromTo(
          textRef1.current.children,
          { x: -50, opacity: 0, filter: "blur(10px)" },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textRef1.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Image Section Animation
      if (imageRef1.current) {
        gsap.fromTo(
          imageRef1.current.children,
          { x: 50, opacity: 0, filter: "blur(10px)" },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageRef1.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
      //



      // Animate image
      gsap.fromTo(
        imgRef.current,
        { y: 50, opacity: 0, filter: "blur(15px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 2.2, ease: "power3.out", delay: 0.5 }
      );
    });

    return () => ctx.revert(); // cleanup
  }, []);

  //
  const [showMore, setShowMore] = useState(false);

  const toggleText = () => setShowMore(!showMore);

  //

  // service
  const services = [
    {
      title: "AC & COOLING SYSTEM SERVICE",
      description:
        "We inspect, repair, and recharge your car’s AC system for year-round comfort.",
      image: service1,
      link: '/service1'
    },
    {
      title: "ENGINE DIAGNOSTICS & REPAIR",
      description:
        "We use advanced tools to identify engine issues quickly and fix them to keep your car performing at its best.",
      image: service2,
      link: '/service2'
    },
    {
      title: "BRAKE SERVICE & REPLACEMENT",
      description:
        "From worn-out pads to full brake overhauls, we ensure your vehicle stops safely every time.",
      image: service3,
      link: '/service3'
    },
    {
      title: "CAR WASHING AND DETAILING",
      description:
        "From exterior shine to interior cleaning, we make your car look and feel brand new.",
      image: service4,
      link: '/service4'
    },
    {
      title: "TRANSMISSION",
      description:
        "Keep your car’s gears running like new with transmission care. We diagnose and repair for smooth shifts.",
      image: service5,
      link: '/service5'
    },
    {
      title: "OIL CHANGE",
      description:
        "Give your engine the care it deserves. We use premium oil and filters to keep everything running smoothly.",
      image: service6,
      link: '/service6'
    },
  ];

  // brand we serve
  let brand = [
    { src: audi, name: "Audi" },
    { src: jaguar, name: "Jaguar" },
    { src: mercedes, name: "Mercedes" },
    { src: hyuandai, name: "Hyundai" },
    { src: mahindra, name: "Mahindra" },
    { src: honda, name: "Honda" },
    { src: ford, name: "Ford" },
    { src: bmw, name: "BMW" },
    { src: lambo, name: "Lamborghini" },
    { src: renault, name: "Renault" },
  ];

  const [visibleServices, setVisibleServices] = useState([]);
  const [visibleBrands, setVisibleBrands] = useState([]);

  const updateVisibleItems = () => {
    const width = window.innerWidth;
    if (width < 1024) {
      // Show 8 items for small and medium devices (< 1024px)
      setVisibleServices(services.slice(0, 8));
      setVisibleBrands(brand.slice(0, 8));
    } else {
      // Show 10 items for large devices (≥ 1024px)
      setVisibleServices(services.slice(0, 10));
      setVisibleBrands(brand.slice(0, 10));
    }

  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => {
      window.removeEventListener("resize", updateVisibleItems);
    };
  }, []);

  //

  // project //
 
  const scrollRef = useRef(null); // outer overflow container
  const imageRowRef = useRef(null); // inner image row
  const animationRef = useRef(null);
  useEffect(() => {
    const el = scrollRef.current;
    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollTo({
        left: el.scrollLeft + e.deltaY,
        behavior: "smooth",
      });
    };
    if (el) el.addEventListener("wheel", onWheel);
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  
  useEffect(() => {
    const imageRow = imageRowRef.current;

    // ✅ Clone inner image row content for infinite loop
    const clones = imageRow.cloneNode(true);
    imageRow.appendChild(clones);

    // ✅ Animate inner image row to the left
    animationRef.current = gsap.to(imageRow, {
      x: "-50%",
      duration: 40,
      ease: "linear",
      repeat: -1,
    });

    // ✅ Pause on hover
    const handleMouseEnter = () => animationRef.current.pause();
    const handleMouseLeave = () => animationRef.current.resume();

    imageRow.addEventListener("mouseenter", handleMouseEnter);
    imageRow.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      imageRow.removeEventListener("mouseenter", handleMouseEnter);
      imageRow.removeEventListener("mouseleave", handleMouseLeave);
      animationRef.current.kill();
    };
  }, []);


  // testinimials

  const testimonials = [
    {
      name: "Peter Parker",
      role: "Retired Officer",
      src: testi1,
      review:
        "Amazing service! The team quickly diagnosed the issue with my car and fixed it the same day. Very professional and friendly staff.",
      rating: 5,
    },
    {
      name: "John Smith",
      role: "Engineer",
      src: testi2,
      review:
        "Quick, efficient, and reliable service. Highly recommend them for all car needs!",
      rating: 4,
    },
    {
      name: "Sophia Lee",
      role: "Designer",
      src: testi3,
      review:
        "Super friendly staff and excellent communication. My car feels brand new!",
      rating: 5,
    },
    {
      name: "Sophia Lee",
      role: "Designer",
      src: testi4,
      review:
        "Super friendly staff and excellent communication. My car feels brand new!",
      rating: 5,
    },
  ];

   
///
 
    const [showAll, setShowAll] = useState(false);  // movbile
     // Decide how many to show
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);  //mobile
  ///


  // contact Data

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const contactValidationForm = () => {
    if (formData.name.trim().length < 3) {
      toast.error("Name must be at least 3 characters long");
      return false;
    }
    // email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Enter a valid email address");
      return false;
    }

    // service
    if (!formData.service) {
      toast.error("Please select a service");
      return false;
    }

    if (formData.message.trim().length < 10) {
      toast.error("Message must be at least 10 characters long");
      return false;
    }
    if (!formData.date) {
      toast.error("Please select a date");
      return false;
    }

    if (!formData.time) {
      toast.error("Please select a time");
      return false;
    }

    return true;
  };
  const [loading, setLoading] = useState(false);

const contactHandle = async (e) => {
  e.preventDefault();
  if (!contactValidationForm()) return;

  setLoading(true);

  try {
    const response = await Api.createContact(formData);

    if (response.status === 200) {
      toast.success("Message Submitted Successfully", {
        position: "bottom-right",
        style: {
          backgroundColor: "green",
          borderLeft: "4px solid #142241",
          color: "white",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        },
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
    }
  } catch (err) {
    console.log("Frontend Error:", err);
    toast.error("Something went wrong, try again!");
  } finally {
    setLoading(false);
  }
};

  ///////
  return (
    <>
      <main className="overflow-hidden">
        {/* hero  */}
      <section
        className="overflow-hidden flex justify-center relative"
        ref={homeRef}
        id="home"
      >
        {/* 🔴 Red Overlay */}
        <div className="absolute inset-0 z-30 animate-redOverlay pointer-events-none"></div>

        <div className="w-[80%] mx-auto lg:px-6 px-2 flex lg:flex-row flex-col-reverse justify-center items-center relative z-100">
          {/* left content */}
          <div className="md:w-2/2 text-left -mt-30 z-100">
            <h1 className="md:text-5xl text-3xl lg:text-6xl font-bold leading-tight max-w-[800px] z-100">
              Drive In With Worries, <br /> Drive Out With <br /> Confidence.
            </h1>
            <p className="text-[#505050] text-base md:text-base mt-1 md:mt-4 z-100">
              Whether it’s a small tune-up or a complete overhaul, we{" "}
              <br className="md:block hidden" /> restore your vehicle to peak
              performance.
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={() => scrollToSection(bookingRef)}
                className="md:mt-6 mt-4 mb-6 md:mb-0 border-2 text-white text-sm font-medium cursor-pointer bg-[#E62425] border-white md:px-9 px-5 py-2 rounded-full"
                style={{
                  boxShadow:
                    "2px 2px 6px rgba(0,0,0,0.2), -2px 2px 6px rgba(0,0,0,0.2)",
                }}
              >
                Book Service
              </button>
            </div>
          </div>

          {/* background layers (hidden initially, fade in later) */}
          <div className="absolute top-0 right-[-50px] md:right-[-180px] lg:right-[-120px] w-[380px] md:w-[520px] h-40 rounded-br-[100%] opacity-0 animate-showBack delay-10s">
            <img src={back1} alt="" />
          </div>
          <div className="absolute top-0 right-[-90px] md:right-[-230px] lg:right-[-190px] w-[380px] md:w-[520px] h-40 rounded-br-[100%] opacity-0 animate-showBack delay-10s">
            <img src={back2} alt="" />
          </div>
          <div className="absolute top-0 right-[-145px] md:right-[-400px] lg:right-[-425px] w-[280px] md:w-[520px] h-40 rounded-br-[100%] opacity-0 animate-showBack delay-10s">
            <img src={back3} alt="" />
          </div>

          {/* car image */}
          <div
            className="lg:relative relative left-[-40px] md:left-[-220px] lg:left-[-100px] overflow-visible w-full md:w-1/2 -mt-50"
            ref={imgRef}
          >
            <img
              src={car}
              alt="Car-Img"
              loading="eager"
              fetchPriority="high"
              className="object-contain w-[650px] md:w-[900px] lg:w-[1500px] h-auto transition-transform duration-500 hover:scale-105 block"
              style={{ maxWidth: "none" }}
            />
          </div>
        </div>
      </section>


        {/* // ABout US */}
        <section
          className="w-full bg-white px-6 md:mt-[150px] md:px-20 scroll-mt-20"
          ref={aboutRef}
          id="about"
        >
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-xl md:text-2xl text-center lg:text-start font-medium mb-4 animate-item">
                ABOUT US
              </h2>

              <p className="text-gray-600 text-base text-center lg:text-start leading-tight md:leading-relaxed mb-6 animate-item">
                At Revive, we’re more than just a car garage – we’re your trusted partners in keeping your vehicle safe, reliable, and running at its best. With years of hands-on experience and a passion for automobiles, our skilled technicians provide top-quality service.
                {showMore && (
                  <>
                    {" "}Our customer-first approach means transparent communication, fair pricing, and solutions tailored to your needs. From the moment you step in, we treat your vehicle like our own — with care, precision, and attention to detail. Because at Revive, your satisfaction and your car’s performance are always our top priorities.
                  </>
                )}
              </p>

              {/* Desktop Button */}
              <button
                onClick={toggleText}
                className="bg-red-600 mt-6 text-sm lg:block hidden text-white font-medium px-6 py-3 shadow-2xl shadow-black hover:bg-red-700 transition animate-item"
              >
                {showMore ? "SHOW LESS" : "LEARN MORE"}
              </button>

              {/* Mobile Button */}
              <div className="flex justify-center animate-item">
                <button
                  onClick={toggleText}
                  className="text-base lg:hidden block text-black font-bold"
                >
                  {showMore ? "Show Less" : "Know More"}{" "}
                  <span className="text-black text-lg">
                    {showMore ? "▴" : "▾"}
                  </span>
                </button>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-6 text-center lg:border-l border-gray-300 lg:pl-12">
              {[
                { count: "1000+", label: "Happy Clients" },
                { count: "1000+", label: "Completed Services" },
                { count: "1000+", label: "Happy Reviews" },
                { count: "25+", label: "On Going Services" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg md:rounded-none md:bg-gray-100 p-3 h-auto md:p-13 lg:p-6 md:h-[160px] lg:h-[130px] lg:w-[200px] border border-[#E0E0E0] shadow transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2),0_-4px_10px_rgba(0,0,0,0.05)] hover:z-10 relative hover:border-none animate-item"
                >
                  <h3 className="text-2xl font-bold">{stat.count}</h3>
                  <p className="text-gray-600 md:text-base text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <AboutAnimation/>
        </section>

        {/* Service  */}
        <section
          className="w-[90%] mx-auto md:mt-[150px] py-6 scroll-mt-12"
          ref={serviceRef}
          id="services"
        >
      <div>
        <div className="flex justify-center flex-col items-center animate-item">
          <h1 className="text-xl md:text-2xl font-medium">Our Services</h1>
          <div className="h-[2px] w-24 bg-[#F78430] mt-1"></div>
          <p className="max-w-3xl text-base text-center mt-4 text-[#828282] animate-item">
            We offer complete car care solutions, from routine maintenance
            to advanced repairs. <br />
            With skilled technicians and modern equipment, your vehicle
            gets the expert attention it deserves. <br />
            Whether it’s performance, safety, or style – we’ve got every
            part of your car covered.
          </p>
        </div>

        {/* Navigation Buttons */}
  <div className="flex justify-end gap-4 mt-6 px-6 md:px-12">
  {/* Previous Button */}
  <button className="swiper-button-prev w-8 h-8 md:w-10 md:h-10 hover:cursor-pointer rotate-180 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:bg-gray-100 transition-all duration-200">

  </button>

  {/* Next Button */}
  <button className="swiper-button-next w-8 h-8 md:w-10 md:h-10 hover:cursor-pointer  flex items-center justify-center rounded-full bg-white text-black shadow-md hover:bg-gray-100 transition-all duration-200">
    
  </button>
</div>


        {/* Swiper Carousel */}
        <div className="py-6 px-6 md:px-12 relative">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
              navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-10"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <Link to={service.link}>
                  <div className="bg-white w-full rounded-2xl shadow-xl overflow-hidden animate-item">
                    <img
                      src={service.image}
                      loading="lazy"
                      alt={service.title}
                      className="w-full md:h-72 h-52 object-cover"
                    />
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold text-black mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>

        {/* Brand We Serve  */}

        <section className="w-[90%] mx-auto md:mt-[150px] py-6" id="brands" ref={brandWeServeRef}>
          <h1 className="text-center text-xl md:text-2xl font-medium mb-6 md:mb-12">
            Brands We Serve
          </h1>

          <div className="max-w-6xl mx-auto grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12">
            {visibleBrands.map((brand, index) => (
              <div
                key={index}
                className="brand-item flex justify-center items-center flex-col text-center"
              >
                <img
                  src={brand.src}
                  loading="lazy"
                  alt={brand.name}
                  className="w-9 md:w-20 h-auto hover:scale-110 transition-transform duration-300"
                />
                <p className="mt-2">{brand.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* // Latest Project  */}
        <section className="w-[100%] md:mt-[150px] py-12 bg-gray-400 scroll-mt-6" ref={galleryRef} id='gallery'>
          <div>
            <h3 className="text-center text-lg md:text-2xl font-medium text-[#F6452D] tracking-widest">
              GALLERY
            </h3>
            <h1 className="text-center text-2xl md:text-5xl font-semibold leading-relaxed">
              LATEST PROJECTS
            </h1>
 <div className="mt-10 overflow-hidden mb-6" ref={scrollRef}>
          {/* ✅ Animated Image Row */}
          <div className="flex gap-4 w-max" ref={imageRowRef}>
            {[project1, project2, project3, project4, project5, project6, project7].map((img, index) => (
              <img
                key={index}
                src={img}
                loading="lazy"
                alt={`Project ${index + 1}`}
                className="w-[300px] h-[300px] md:w-[400px] md:h-[300px] object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>
          </div>
        </section>

        {/* /// why we choose  */}
        <section className="max-w-5xl md:px-4 mt-[100px] md:mt-[130px] lg:mt-[200px] mx-auto py-6 scroll-mt-12" id='whyChooseUs'>
          <div className="grid grid-cols-1 px-6 md:px-0 md:grid-cols-2 gap-6 lg:gap-20 items-start">
            {/* Text Section - comes first on all screens */}
            <div className="order-1 md:order-2 flex flex-col justify-start space-y-6" ref={textRef1}>
              <div>
                <h1 className="text-4xl text-center md:text-start font-medium">
                  Why Choose <span className="text-[#E62425]">Revive</span> Car
                  Garage?
                </h1>
                <p className="text-sm font-bold text-[#454545] text-center md:text-start leading-snug mt-6">
                  Discover the Benefits That Set Us Apart and Propel Your
                  Fitness Journey Forward.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4 md:space-y-2 lg:space-y-4">
                {[
                  {
                    title: "Expert Technicians",
                    desc: "Experienced professionals who treat every car like their own.",
                  },
                  {
                    title: "Quality Parts & Tools",
                    desc: "Genuine spares and advanced equipment for lasting performance.",
                  },
                  {
                    title: "Transparent Pricing",
                    desc: "No hidden costs, only honest service.",
                  },
                  {
                    title: "Quick Turnaround",
                    desc: "Fast, efficient service without compromising quality.",
                  },
                  {
                    title: "Customer Satisfaction",
                    desc: "We prioritize your comfort and confidence, delivering service that exceeds expectations every time.",
                  },
                ].map((item, index) => (
                  <div
                    className="flex items-center md:text-start gap-3"
                    key={index}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold">{item.title}</h2>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}

                <div className="flex justify-center md:justify-start">
                  <button className="text-sm px-4 py-2 bg-[#E62425] hover:cursor-pointer text-white font-medium rounded mt-4 md:mt-2 lg:mt-10" onClick={() => scrollToSection(bookingRef)}>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            {/* Images Section - second on mobile, right side on md+ */}
            <div className="order-2 md:order-1 flex flex-col gap-6" ref={imageRef1}>
              <img
                src={why1}
                alt="Car service"
                loading="lazy"
                className="w-full h-[180px] object-cover rounded-2xl"
              />
              <img
                src={why2}
                alt="Car tools"
                loading="lazy"
                className="w-full h-[180px] object-cover rounded-2xl"
              />
              <img
                src={why3}
                alt="Car repair"
                loading="lazy"
                className="w-full h-[180px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* // testinomials */}
        <section className=" w-full py-16  md:mt-[150px] bg-gray-50 scroll-mt-6" id='testimonial'>
          <div className="w-full mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">
              What Our Customers Say
            </h2>
            <div className="md:flex lg:hidden justify-center items-center mb-12">
              <h2 className="text-5xl font-semibold">
                Real Stories. <br /> Real Experiences.
              </h2>
            </div>
            {/* Horizontal Layout */}
            {/* desktop/laptop  */}
            <div className="md:flex gap-8 justify-center flex-wrap hidden">
              <div className="lg:flex hidden justify-center items-center">
                <h2 className="text-5xl font-semibold">
                  Real Stories.<br></br> Real Experiences.
                </h2>
              </div>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="relative flex">
                  {/* Image */}
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    loading="lazy"
                    className="w-24 h-24 md:w-28 md:h-[420px]  object-cover cursor-pointer border-2 border-gray-300 hover:scale-105 transition"
                    onClick={() =>
                      setSelectedIndex((prev) =>
                        prev === index ? null : index
                      )
                    }
                  />

                  {/* Testimonial Box (right side of image) */}
                  {selectedIndex === index && (
                    <>

                      <div   ref={testimonialBoxRef} className=" w-64 md:w-80 bg-white p-4 rounded-lg shadow-lg flex flex-col justify-center items-start">
                        <div className="flex justify-between gap-22 items-center">
                          <div>
                            <h3 className="text-lg font-semibold text-black">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {testimonial.role}
                            </p>
                          </div>
                          <div>
                            {" "}
                            <div className="mt-1 text-xl text-yellow-500">
                              {"★".repeat(testimonial.rating)}
                              {"☆".repeat(5 - testimonial.rating)}
                            </div>
                          </div>
                        </div>

                        <p className="text-[#010101] font-medium mt-2">
                          "{testimonial.review}"
                        </p>

                        <button
                          onClick={() => setSelectedIndex(null)}
                          className="mt-2 text-sm hover:cursor-pointer text-blue-500 hover:underline"
                        >
                          Close
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* mobile  */}
<div className="px-2 md:hidden">
      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 gap-4 bg-white">
        {visibleTestimonials.map((testimonial, index) => (
          <div key={index}>
            <div
              onClick={() =>
                setSelectedIndex((prev) => (prev === index ? null : index))
              }
            className={`flex flex-col shadow-md border rounded-2xl px-4 py-4 gap-4 cursor-pointer hover:bg-gray-50 transition ${
  selectedIndex === index ? 'border-gray-400' : 'border-black'
}`}

            >
              {/* Top Section: Image + Text */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-gray-300 transition"
                />

                <div className="flex w-full justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="text-yellow-500 text-lg">
                    {"★".repeat(testimonial.rating)}
                    {"☆".repeat(5 - testimonial.rating)}
                  </div>
                </div>
              </div>

              {/* Review Box */}
              {selectedIndex === index && (
                <div className="bg-white p-3"    ref={testimonialBoxRef}>
                  <p className="text-gray-700 italic">"{testimonial.review}"</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex(null);
                    }}
                    className="mt-2 text-sm text-blue-500 hover:underline"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View More / View Less Button */}
      {testimonials.length > 3 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-black text-base font-bold  hover:text-red-600"
          >
            {showAll ? "View Less ▴" : "View More ▾"}
          </button>
        </div>
      )}
    </div>




          </div>
        </section>

        {/* // Booking  */}
        <section className="w-[90%]  md:mt-[150px] max-w-6xl mx-auto py-10 scroll-mt-9" id='booking' ref={bookingRef}>
          <h2 className="text-xl md:text-2xl font-bold md:mb-18 mb-4 text-center">
            Book An Appointment
          </h2>

          <div className="grid md:grid-cols-2 items-start gap-8">
            {/* Left Side Info */}
            <div>
              <h3 className="text-lg md:text-start text-center md:text-3xl font-semibold mb-2">
                Schedule Your Service Today: <br className="md:block hidden" />{" "}
                Quick and Convenient
              </h3>
              <p className="text-gray-600 md:text-start text-center mb-1 md:mb-9">
                Scheduling with Tirecargories is quick and easy, ensuring your
                service is performed at a convenient time. Get top-tier service,
                diagnostics, repairs, or maintenance today!
              </p>

              <h3 className="text-3xl font-semibold mb-2 md:block hidden">
                Customer Support
              </h3>
              <p className="text-gray-600 mb-9 md:block hidden">
                Our customer support team is ready to assist you with any
                questions or concerns. Whether you need help with buying,
                selling, or servicing a car, we’re here to provide quick and
                reliable solutions.
              </p>

              <h3 className="text-2xl font-semibold mb-2 md:block hidden">
                Contact
              </h3>
              <p className="text-gray-600 md:block hidden">
                reviewgarage@gmail.com
              </p>
              <p className="text-gray-600 md:block hidden">123-123-123</p>
            </div>

            {/* Right Side Form */}
            <form
              onSubmit={contactHandle}
              className="bg-white md:p-6 md:border-2 border-gray-400 rounded-xl md:shadow-md"
            >
              <h3 className="text-xl font-semibold md:text-start text-center mb-4">
                Fill The Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full mt-1 rounded-lg border border-gray-300 bg-white p-3 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone No.</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone No"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full mt-1 rounded-lg border border-gray-300 bg-white p-3 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full mt-1 rounded-lg border border-gray-300 bg-white p-3 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 focus:outline-none"
                    required
                  />
                </div>

            <div>
  <label htmlFor="service" className="block mb-1 font-medium text-gray-700">
    Service
  </label>
  <select
    name="service"
    value={formData.service}
    onChange={(e) =>
      setFormData({ ...formData, service: e.target.value })
    }
    className="w-full mt-1 rounded-lg border border-gray-300 bg-white p-3 shadow-sm transition-all duration-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 focus:outline-none"
  >
    <option value="">Select a service</option>
    <option value="Oil Change">Oil Change</option>
    <option value="Brake Inspection">Brake Inspection</option>
    <option value="Engine Diagnostics">Engine Diagnostics</option>
    <option value="Tire Rotation">Tire Rotation</option>
    <option value="Full Car Service">Full Car Service</option>
    <option value="Custom Repair">Custom Repair</option>
  </select>
</div>


                <div>
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full mt- 1 rounded-lg border border-gray-300 bg-white p-3 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className="w-full mt-1 rounded-lg border border-gray-300 bg-white p-3 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full mt-1 rounded-lg border border-gray-300 bg-white p-3 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 focus:outline-none"
                  rows="4"
                />
              </div>

             <button
  type="submit"
  disabled={loading}
  className={`w-full bg-red-600 text-white py-2 mt-4 font-semibold transition-colors duration-200 ${
    loading ? 'bg-red-400 cursor-not-allowed' : 'hover:bg-red-700 cursor-pointer'
  }`}
>
  {loading ? "Booking..." : "Book An Appointment"}
</button>

            </form>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
