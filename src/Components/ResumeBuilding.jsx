import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function ResumeBuilding() {
  return (
    <section id="resume-building" className="w-full bg-white py-20 px-8 text-[#0649E7]">
      <div className="max-w-[1500px] mx-auto">
        {/* Heading */}
        <h2 className="text-left text-[32px] md:text-[40px] font-semibold mb-4">
          Resume Building & Coaching
        </h2>
        <p className="text-left text-sm mb-12">
          Let's talk about where you're headed — and how your resume can get you there.<br />
          Schedule a call to get started.
        </p>

        {/* Centered Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          <Card
            title="Resume Rebuild"
            price="$1000"
            subtitle="one time"
            features={[
              "3× 30-min coaching",
              "Focused on storytelling, not just formatting",
              "Analyst + full application team on Pacific hours",
              "Tailored to your target industry, company, or role",
              "Direct work with our co-founder (ex-Google, JPMorgan)",
              "Executive coaching from UC Berkeley alum with 10+ yrs experience",
              "Resume Rebuild portfolio available upon request"
            ]}
          />
          <Card
            title="Interview Prep"
            price="$500"
            subtitle="one time"
            features={[
              "2× 45-min live coaching with our co-founder",
              "Real-time, practical feedback",
              "Build clarity, empathy & executive presence",
              "For senior and leadership roles — technical & non-technical"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

// Card component
function Card({ title, price, subtitle, features }) {
  return (
    <div className="border-2 border-[#0649E7] rounded-[20px] p-8 flex flex-col h-full text-left">
      <h3 className="text-2xl font-semibold text-[#0649E7] mb-2">{title}</h3>

      <div className="mb-6">
        <p className="text-[2.5rem] font-bold text-[#0649E7] leading-none">{price}</p>
        <p className="text-[#0649E7] text-sm">{subtitle}</p>
      </div>

      <div className="border-t border-gray-200 my-6"></div>

      <div className="flex-1 space-y-4 mb-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
            <p className="text-[#0649E7] text-sm">{feature}</p>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <GetStartedButton />
      </div>
    </div>
  );
}

function GetStartedButton() {
  return (
    <button className="rounded-full px-8 py-4 text-sm font-semibold flex items-center justify-center gap-2 w-50 mt-10 bg-[#0649E7] text-white">
      Get Started <FaArrowRightLong className="text-sm" />
    </button>
  );
}
