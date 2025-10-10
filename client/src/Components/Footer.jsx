import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube} from "react-icons/fa";
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
      <footer className="relative mx-auto bg-white lg:px-32 text-gray-700 overflow-hidden md:block hidden scroll-mt-34" id='footer-section'>
        {/* Red Curved Background Top Left */}
        <div className="absolute bottom-[65px] lg:bottom-[190px] left-0 lg:w-[580px] md:w-[380px] h-40  rounded-br-[100%]"><img src={red4} alt="" /></div>
        <div className="absolute bottom-[25px] lg:bottom-[120px] left-0 lg:w-[580px] md:w-[380px]  h-40  rounded-br-[100%]"><img src={red3} alt="" /></div>


        {/* Red Curved Background Bottom Right */}
        <div className="absolute top-[-58px] lg:top-[-16px] right-[-90px] lg:w-[590px] h-40 rounded-tl-[100%]"><img src={red2} alt=""  /></div>
        <div className="absolute top-[-40px] lg:top-0 right-0 lg:w-[590px] h-40 rounded-tl-[100%]"><img src={red1} alt=""  /></div>
        <div className="absolute md:top-[105px] right-[-140px] lg:top-[-6px] lg:right-[-100px] md:w-[400px] lg:w-[505px] z-30 h-40 rounded-tl-[100%]" id='tyre'><img src={tyre} alt=""  /></div>


<div className="relative container mx-auto px-6 mt-6 py-20 flex flex-col md:flex-row gap-18">
  {/* Column 1 - Logo and Description */}
  <div className="flex flex-col w-full md:w-1/4 justify-between">
    <a href="#home" className="flex items-center space-x-2">
      <img src={logo} alt="Revive Logo" className="w-30 h-auto" />
    </a>
    <p className="text-sm font-medium mt-4">
      From routine maintenance to advanced repairs, we keep your car performing at its best.
    </p>

    {/* Social Icons */}
    <div className="hidden md:flex space-x-4 mt-9 md:mt-4">
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

  {/* Right Side - About, Services, Other Services */}
  <div className="flex flex-col md:flex-row w-full md:w-3/4">
    
    {/* ABOUT US */}
    <div className="flex flex-col w-full md:w-1/3">
      <h3 className="text-lg font-bold text-black mb-3">ABOUT US</h3>
      <ul className="space-y-2 text-sm font-medium">
        <li className="hover:text-red-600 cursor-pointer" onClick={() => navigate('/#about')}>ABOUT</li>
        <li className="hover:text-red-600 cursor-pointer" onClick={() => navigate('/#booking')}>CONTACT</li>
        <li className="hover:text-red-600 cursor-pointer" onClick={() => navigate('/#whyChooseUs')}>WHY CHOOSE US</li>
      </ul>
    </div>

    {/* OUR SERVICES */}
    <div className="flex flex-col w-full md:w-1/3">
      <h3 className="text-lg font-bold text-black mb-3">OUR SERVICES</h3>
      <ul className="space-y-2 text-sm font-medium">
        <li><Link className="hover:text-red-600 cursor-pointer" to='/footerBrake' state={{ from: 'footer'}}>BRAKE SERVICE & REPLACEMENT</Link></li>
        <li><Link className="hover:text-red-600 cursor-pointer" to='/footerCeremic' state={{ from: 'footer' }}>CERAMIC COATING</Link></li>
        <li><Link className="hover:text-red-600 cursor-pointer" to='/footerTransmission' state={{ from: 'footer' }}>TRANSMISSION</Link></li>
      </ul>
    </div>

    {/* OTHER SERVICES */}
    <div className="flex flex-col w-full md:w-1/3 z-44">
      <h3 className="text-lg font-bold text-black mb-3">OTHER SERVICES</h3>
      <ul className="space-y-2 text-sm font-medium">
        <li><Link className="hover:text-red-600 cursor-pointer" to='/footerGrap' state={{ from: 'footer' }}>GRAPHENE COATING</Link></li>
        <li><Link className="hover:text-red-600 cursor-pointer inline-block w-full" to='/footerVag' state={{ from:'footer'}}>VAG CODING & VCDS</Link></li>
        <li><Link className="hover:text-red-600 cursor-pointer" to='/footerWash' state={{ from: 'footer' }}>CAR WASHING</Link></li>
      </ul>
    </div>

  </div>
</div>





        {/* Divider */}
        <div className="border-t border-black w-[100%] relative z-20 mx-auto"></div>

        {/* Bottom Section */}
        <div className="relative container mx-auto px-6 flex mt-4 lg:flex-row md:flex-row gap-16  md:justify-center mb-4 lg:mb-6 lg:gap-[145px] items-center text-sm">
          <p className="text-black flex items-center space-x-2  lg:mb-0">
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

      <footer className="md:hidden block relative px-4 bg-white text-gray-700 overflow-hidden scroll-mt-34" id='footer-section'>
 {/* Red Curved Background Top Left */}
        <div className="absolute bottom-[60px] left-0 w-[380px] h-40  rounded-br-[100%]"><img src={red4} alt="" /></div>
        <div className="absolute bottom-[20px] left-0 w-[380px]  h-40  rounded-br-[100%]"><img src={red3} alt="" /></div>


        {/* Red Curved Background Bottom Right */}
        <div className="absolute top-[-16px] right-[-90px] w-[390px] h-40 rounded-tl-[100%]"><img src={red2} alt=""  /></div>
        <div className="absolute top-0 right-0 w-[390px] h-40 rounded-tl-[100%]"><img src={red1} alt=""  /></div>
        <div className="absolute top-[241px] sm:top-[162px] bottom-[90px] right-[-89px] w-[450px] h-40 rounded-tl-[100%]" id='tyre'><img src={tyre} alt=""  /></div>
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
        <li className="hover:text-red-600 cursor-pointer" onClick={() => navigate('/#booking')}>CONTACT</li>
        <li className="hover:text-red-600 cursor-pointer" onClick={() => navigate('/#whyChooseUs')}>WHY CHOOSE US</li>
      </ul>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-lg font-bold text-black mb-3">OUR SERVICES</h3>
            <ul className="space-y-2 text-sm font-medium">
        <li><Link className="hover:text-red-600 cursor-pointer" to='/footerBrake' state={{ from: 'footer'}}>BRAKE SERVICE & REPLACEMENT</Link></li>
        <li><Link className="hover:text-red-600 cursor-pointer" to='/footerCeremic' state={{ from: 'footer'}}>CERAMIC COATING</Link></li>
        <li><Link className="hover:text-red-600 cursor-pointer" to='/footerTransmission' state={{ from: 'footer'}}>TRANSMISSION</Link></li>
      </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-lg font-bold text-black mb-3">CONTACT US</h3>
             <ul className="space-y-2 text-sm font-medium">
        <li><Link className="hover:text-red-600 cursor-pointer" to='/footerGrap' state={{ from: 'footer'}}>GRAPHENE COATING</Link></li>
        <li><Link className="hover:text-red-600 cursor-pointer" to='/footerVag' state={{ from: 'footer'}}>VAG CODING & VCDS</Link></li>
        <li><Link className="hover:text-red-600 cursor-pointer" to='/footerWash' state={{ from: 'footer'}}>CAR WASHING</Link></li>
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
