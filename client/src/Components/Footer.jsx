import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube} from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import logo from '../assets/logo.png';
import red1 from "../assets/Footer/footerback1.webp"
import red2 from "../assets/Footer/footerback2.webp"
import red3 from "../assets/Footer/footerback3.webp"
import red4 from "../assets/Footer/footerback4.png"
import tyre from "../assets/Footer/FinalTyre.png"





const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <footer className="relative bg-white text-gray-700 overflow-hidden md:block hidden scroll-mt-34" id='footer-section'>
        {/* Red Curved Background Top Left */}
        <div className="absolute bottom-[190px] left-0 w-[580px] h-40  rounded-br-[100%]"><img src={red4} alt="" /></div>
        <div className="absolute bottom-[120px] left-0 w-[580px]  h-40  rounded-br-[100%]"><img src={red3} alt="" /></div>


        {/* Red Curved Background Bottom Right */}
        <div className="absolute top-[-16px] right-[-90px] w-[590px] h-40 rounded-tl-[100%]"><img src={red2} alt=""  /></div>
        <div className="absolute top-0 right-0 w-[590px] h-40 rounded-tl-[100%]"><img src={red1} alt=""  /></div>
        <div className="absolute top-[225px] right-[-140px] lg:top-[-45px] lg:right-[-69px] w-[360px] md:w-[560px] h-40 rounded-tl-[100%]"><img src={tyre} alt=""  /></div>


<div className="relative container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-11">

  {/* Column 1 - Logo and Description */}
  <div className="flex flex-col w-full justify-between">
    <a href="#home" className="flex items-center space-x-2">
      <img src={logo} alt="Revive Logo" className="w-30 h-auto" />
    </a>
    <p className="text-sm font-medium mt-4">
      From routine maintenance to advanced repairs, we keep your car performing at its best.
    </p>

    {/* Social Icons */}
  <div className="md:flex space-x-4 mt-9 md:mt-4 hidden">
  <a href="#" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="text-gray-600 hover:text-red-600 cursor-pointer" />
  </a>
  <a href="https://www.instagram.com/reviveauto.hyderabad?igsh=MTd0Z2xlNHYya3Jkbg==" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-gray-600 hover:text-red-600 cursor-pointer" />
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer">
    <FaYoutube className="text-gray-600 hover:text-red-600 cursor-pointer" />
  </a>
</div>

  </div>

  {/* ✅ Flex container for ABOUT, SERVICES, OTHER SERVICES */}
  <div className="col-span-1 ml-[150px] lg:col-span-3 flex flex-col md:flex-row gap-[40px] lg:gap-[60px]">

    {/* ABOUT US */}
    <div>
      <h3 className="text-lg font-bold text-black mb-3">ABOUT US</h3>
      <ul className="space-y-2 text-sm font-medium">
        <li className="hover:text-red-600 cursor-pointer" onClick={() => navigate('/#about')}>ABOUT</li>
        <li className="hover:text-red-600 cursor-pointer" onClick={() => navigate('/#booking')}>CONTACT</li>
        <li className="hover:text-red-600 cursor-pointer" onClick={() => navigate('/#whyChooseUs')}>WHY CHOOSE US</li>
      </ul>
    </div>

    {/* OUR SERVICES */}
    <div>
      <h3 className="text-lg font-bold text-black mb-3">OUR SERVICES</h3>
      <ul className="space-y-2 text-sm font-medium">
        <li><Link className="hover:text-red-600 cursor-pointer" to='/footerBrake'>BRAKE SERVICE & REPLACEMENT</Link></li>
        <li><Link className="hover:text-red-600 cursor-pointer" to='/footerCeremic'>CERAMIC COATING</Link></li>
        <li><Link className="hover:text-red-600 cursor-pointer" to='/footerTransmission'>TRANSMISSION</Link></li>
      </ul>
    </div>

    {/* OTHER SERVICES */}
    <div>
      <h3 className="text-lg font-bold text-black mb-3">OTHER SERVICES</h3>
      <ul className="space-y-2 text-sm font-medium">
        <li><Link className="hover:text-red-600 cursor-pointer" to='/footerGrap'>GRAPHENE COATING</Link></li>
        <li><Link className="hover:text-red-600 cursor-pointer" to='/footerVag'>VAG CODING & VCDS</Link></li>
        <li><Link className="hover:text-red-600 cursor-pointer" to='/footerWash'>CAR WASHING</Link></li>
      </ul>
    </div>

  </div>
</div>


        {/* Divider */}
        <div className="border-t border-black w-[90%] mx-auto"></div>

        {/* Bottom Section */}
        <div className="relative container mx-auto px-6 py-6 flex lg:flex-row md:flex-col  md:justify-center md:mb-6 lg:gap-[145px] items-center text-sm">
          <p className="text-black flex items-center space-x-2 md:mb-2 lg:mb-0">
            <span>© 2025 Revive Garage</span>
            <span className="h-4 w-px bg-black"></span>
            <span>All Rights Reserved</span>

          </p>
           <p className="text-black font-medium">
  Developed by{" "}
  <a
    href="https://www.zenithstudio.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-600 font-bold hover:underline hover:cursor-pointer"
  >
    Zenith Studio
  </a>
</p>


        </div>
      </footer>

      {/* // MOBILE  */}

      <footer className="md:hidden block relative px-4 bg-white text-gray-700 overflow-hidden scroll-mt-34">
 {/* Red Curved Background Top Left */}
        <div className="absolute bottom-[60px] left-0 w-[380px] h-40  rounded-br-[100%]"><img src={red4} alt="" /></div>
        <div className="absolute bottom-[20px] left-0 w-[380px]  h-40  rounded-br-[100%]"><img src={red3} alt="" /></div>


        {/* Red Curved Background Bottom Right */}
        <div className="absolute top-[-16px] right-[-90px] w-[390px] h-40 rounded-tl-[100%]"><img src={red2} alt=""  /></div>
        <div className="absolute top-0 right-0 w-[390px] h-40 rounded-tl-[100%]"><img src={red1} alt=""  /></div>
        <div className="absolute bottom-[90px] right-[-89px] w-[380px] h-40 rounded-tl-[100%]"><img src={tyre} alt=""  /></div>
        <div className="w-full mt-6">
        <a href="#home" className="flex items-center space-x-2">
              <img src={logo} alt="Revive Logo" className="w-30 h-auto" />
            </a>
            <p className="text-base font-medium">From routine maintenance to advanced repairs, we keep your car performing at its best.</p>
        </div>
   

          <div className="relative container mx-auto  py-12 grid grid-cols-2  lg:grid-cols-4 gap-12">

          
          {/* Column 1 - About Us */}
          <div>
            <h3 className="text-lg font-bold text-black mb-3" >ABOUT US</h3>
            <ul className="space-y-2 text-sm font-medium">
              <li className="hover:text-red-600 cursor-pointer" onClick={() => navigate('/#about')}>ABOUT</li>
              <li className="hover:text-red-600 cursor-pointer" onClick={() => navigate('/#about')}>WHO ARE WE</li>
              <li className="hover:text-red-600 cursor-pointer" onClick={() => navigate('/#whyChooseUs')}>WHY CHOOSE US</li>
              <li className="hover:text-red-600 cursor-pointer">OUR HISTORY</li>
            </ul>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-lg font-bold text-black mb-3">OUR SERVICES</h3>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link className="hover:text-red-600 cursor-pointer" to='/footerAc'>AC & COOLING SYSTEM</Link></li>
              <li><Link className="hover:text-red-600 cursor-pointer" to='/footerEngine'>ENGINE DIAGNOSTICS & REPAIR</Link></li>
              <li><Link className="hover:text-red-600 cursor-pointer" to='/footerBrake'>BRAKE SERVICE & REPLACEMENT</Link></li>
              <li><Link className="hover:text-red-600 cursor-pointer" to='/footerWash'>CAR WASHING & DETAILING</Link></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-lg font-bold text-black mb-3">CONTACT US</h3>
            <ul className="space-y-2 text-sm font-medium">
              <li className="hover:text-red-600 cursor-pointer">OUR LOCATION</li>
              <li className="hover:text-red-600 cursor-pointer">CONTACT US</li>
              <li className="hover:text-red-600 cursor-pointer">ADDRESS</li>
              <li className="hover:text-red-600 cursor-pointer">FACEBOOK</li>
            </ul>
          </div>
          <div className="flex flex-col justify-between">
         
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4 md:mt-0 ">
              <FaFacebookF className="text-gray-600 hover:text-red-600 cursor-pointer" />
              <FaInstagram className="text-gray-600 hover:text-red-600 cursor-pointer" />
              <FaYoutube className="text-gray-600 hover:text-red-600 cursor-pointer" />
            </div>
          </div>
        </div>


  {/* Divider */}
        <div className="border-t border-black w-[90%] mx-auto"></div>

        {/* Bottom Section */}
        <div className="relative container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-black flex items-center space-x-2">
            <span>© 2025 Revive Garage</span>
            <span className="h-4 w-px bg-black"></span>
            <span>All Rights Reserved</span>
          </p>
                 <p className="text-black font-medium mt-2">
  Developed by{" "}
  <a
    href="https://www.zenithstudio.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-600 font-bold hover:underline hover:cursor-pointer"
  >
    Zenith Studio
  </a>
</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
