import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function ContactUs() {
  return (
    <section id="contact-us" className="w-full bg-white py-20 px-8">
      <div className="max-w-[1500px] mx-auto">
        <div className="bg-[#0649E7] rounded-[24px] px-8 md:px-24 py-20 flex flex-col md:flex-row items-center justify-between gap-12 text-white">

          {/* Left Text */}
          <div className="text-left">
            <p className="text-2xl md:text-3xl font-semibold mb-2 leading-tight">
              STILL HAVE <br /> DOUBTS?
            </p>
          </div>

          {/* Middle Contact Us Text (Big and Bold) */}
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold">Contact us</p>
          </div>

          {/* Right Circle Arrow Button */}
          <div>
            <button className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
              <FaArrowRightLong className="text-[#0649E7] text-2xl" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
