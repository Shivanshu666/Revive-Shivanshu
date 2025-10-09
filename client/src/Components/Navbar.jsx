import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import flogo from '../assets/Home/fLogo.png';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0, filter: 'blur(10px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 2, ease: 'power2.out', stagger: 0.3 }
    );
  }, []);

  const navLinks = [
    { label: 'HOME', id: 'home' },
    { label: 'ABOUT', id: 'about' },
    { label: 'BOOKING', id: 'booking' },
    { label: 'SERVICES', id: 'services' },
    { label: 'TESTIMONIAL', id: 'testimonial' },
    { label: 'GALLERY', id: 'gallery' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white/30 backdrop-blur-md py-3 fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar Flex Container */}
        <div className="flex items-center justify-between lg:justify-start" ref={textRef}>
          
          {/* Hamburger Menu (Mobile Left) */}
          <div className="lg:hidden flex items-center flex-1">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
            </button>
          </div>

          {/* Logo - Centered on Mobile, Left on Desktop */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <a href="#home" className="flex items-center space-x-2">
              <img src={flogo} alt="Logo Icon" className="w-8 h-auto" />
              <img src={logo} alt="Revive Logo" className="w-28 h-auto" />
            </a>
          </div>

          {/* Nav Links (Centered on Desktop) */}
          <ul className="hidden lg:flex flex-1 justify-center space-x-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-black text-sm font-medium hover:text-red-600 transition duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons - Right on Desktop */}
          <div className="flex-1 flex justify-end items-center">
            <div className="hidden lg:flex gap-4 items-center text-black text-lg">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-red-600 transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-red-600 transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-red-600 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white p-4">
            <ul className="grid grid-cols-2 gap-4 text-start">
              {navLinks.map((link) => (
                <li key={link.id} className="group relative">
                  <a
                    href={`#${link.id}`}
                    className="block text-black text-sm font-medium transition duration-300 group-hover:text-yellow-400 pb-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 h-[1px] w-full bg-[#7B7B7B] scale-x-90 transition-transform origin-left"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
