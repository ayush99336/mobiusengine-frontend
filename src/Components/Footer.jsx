import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import footerlogo from '../assets/footerlogo.png';
export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#0649E7]">
      <div className="max-w-[1500px] mx-auto px-8 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">

          {/* Left Side */}
          <div className="flex flex-col space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              {/* Your logo image */}
              <img src={footerlogo} alt="MobiusEngine Logo" className="h-
              0 w-40 object-contain" />
              {/* Logo Text */}
              {/* <div className="w-10 h-10 bg-[#0649E7] rounded-full"></div> */}
              {/* <span className="text-xl font-semibold text-[#0649E7]">MobuisEngine</span> */}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 w-32 my-2"></div>

            {/* Address / Email / Telephone */}
            <div className="flex flex-row text-sm space-x-8">
              <div>
                <p className="font-semibold">Address</p>
                <p>1875 Mission St Ste 103 #450</p>
                <p>San Francisco, CA 94103</p>
              </div>

              <div>
                <p className="font-semibold mt-4">Email</p>
                <a href="mailto:finance@mobiusengine.ai" className="hover:underline">
                  finance@mobiusengine.ai
                </a>
              </div>

              <div>
                <p className="font-semibold mt-4">Telephone</p>
                <a href="tel:6508896026" className="hover:underline">
                  650-889-6026
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-start space-y-4">
            <p className="font-semibold">Socials</p>
            <div className="flex items-center gap-4">
              {/* Social Icons */}
              <a href="#" className="border-2 border-[#0649E7] rounded-full p-2">
                <FaLinkedinIn className="text-[#0649E7] text-xl" />
              </a>
              <a href="#" className="border-2 border-[#0649E7] rounded-full p-2">
                <FaLinkedinIn className="text-[#0649E7] text-xl" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Blue Bar */}
      <div className="bg-[#0649E7] text-white py-4 px-8 text-sm">
        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2023 Mobiusservices LLC</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
