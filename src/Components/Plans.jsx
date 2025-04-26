import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function Plans() {
  return (
    <section id="plans" className="w-full bg-white py-20 px-8 text-[#0649E7]">
      <div className="max-w-[1500px] mx-auto">
        {/* Section Title aligned left */}
        <h2 className="text-left text-[32px] md:text-[40px] font-semibold text-[#022183] mb-16">
          Job Application Service Plans
        </h2>

        {/* Top 3 Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* April Promo */}
          <Card title="April Promo" price="$35" suffix="/week">
            <PlanItem text="Curated jobs from 1M+ listings, refreshed every 48 hours" />
            <PlanItem text="Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)" />
            <PlanItem text="Need more? Add extra apps for just $1.5 each" />
            <PlanItem text="Your own dedicated application analyst" />
            <PlanItem text="Personalized with up to 10 filters & 5 job titles" />
          </Card>

          {/* Starter */}
          <Card title="Starter" price="$50" suffix="/week" badge={{ text: 'Popular', color: 'blue' }}>
            <PlanItem text="All the perks of the Promo Plan, plus:" />
            <PlanItem text="Resume review & story-focused feedback" />
            <PlanItem text="Dedicated search specialist" />
            <PlanItem text="Up to 50 job apps/week" />
            <PlanItem text="Extra apps at $1.5 each" />
            <PlanItem text="Analyst support within 6 hours (SLA/PST hours)" />
          </Card>

          {/* Plus */}
          <Card title="Plus" price="$100" suffix="/week" badge={{ text: 'Anonymous', color: 'purple' }}>
            <PlanItem text="Everything in Starter, with more muscle:" />
            <PlanItem text="Up to 75 apps/week" />
            <PlanItem text="Apply to 15 job titles" />
            <PlanItem text="Analyst + full application team on Pacific hours" />
          </Card>
        </div>

        {/* Advance Plan */}

          <AdvanceCard className="py-10" />
      </div>
    </section>
  );
}

// ———————————————————————————————————————————————————————————
// Generic card wrapper with extra padding & min-height
function Card({ title, price, suffix, badge, children }) {
  const badgeStyles =
    badge?.color === 'purple'
      ? 'bg-purple-100 text-purple-700 border-purple-300'
      : 'bg-white text-[#0649E7] border-[#0649E7]';

  return (
    <div className="relative border-2 border-[#0649E7] rounded-[20px] p-12 flex flex-col h-full min-h-[600px]">
      {badge && (
        <span
          className={`absolute top-4 right-4 text-xs font-medium border rounded-full px-3 py-1 ${badgeStyles}`}
        >
          {badge.text}
        </span>
      )}

      {/* Card Title */}
      <h3 className="text-2xl font-semibold text-[#0649E7] mb-4 text-left">
        {title}
      </h3>

      {/* Bigger, wider price */}
      <p className="text-[3rem] md:text-[4rem] font-bold text-[#0649E7] mb-8 tracking-wide">
        {price}
        <span className="text-xl font-normal">{suffix}</span>
      </p>

      <div className="border-t border-gray-200 my-4"></div>

      <div className="flex-1 text-left space-y-4 mb-8">
        {children}
      </div>

      <GetStartedButton />
    </div>
  );
}

// Feature line for top plans
function PlanItem({ text }) {
  return (
    <div className="flex items-start gap-3">
      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
      <p className="text-[#0649E7] text-sm">{text}</p>
    </div>
  );
}

// Feature line for Advance plan
function AdvanceItem({ text }) {
  return (
    <div className="flex items-start gap-3">
      <FaCheckCircle className="text-green-300 mt-1 flex-shrink-0" />
      <p className="text-white text-sm">{text}</p>
    </div>
  );
}


function AdvanceCard() {
  return (
    <div className="bg-[#0649E7] rounded-[24px] p-8 md:p-12 mt-20  text-white 
                    flex flex-col md:flex-row items-stretch gap-8">
      {/* LEFT COLUMN */}
      <div className="flex-1">
        <h3 className="text-3xl font-semibold">Advance</h3>
        <p className="mt-2 text-sm">Top-tier support for serious job hunters:</p>
        <div className="border-t border-white opacity-50 my-4"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          <Feature text="Everything in Plus" />
          <Feature text="Custom Resumes & Cover Letters" />
          <Feature text="20 fully customized applications/week" />
          <Feature text="Help with complex job searches" />
          <Feature
            text="Access to senior resume experts, Founder & Exec Coaches"
            className="sm:col-span-2"
          />
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col justify-between items-end mt-6 md:mt-0">
        {/* Price at top */}
        <p className="text-[3rem] md:text-[4rem] font-bold tracking-wide m-0 leading-none">
          $150
          <span className="text-xl font-normal">/week</span>
        </p>
        {/* Button at bottom */}
        <GetStartedButton white />
      </div>
    </div>
  );
}

function Feature({ text, className = '' }) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <FaCheckCircle className="text-green-300 mt-1 flex-shrink-0" />
      <p className="text-white text-sm">{text}</p>
    </div>
  );
}

function GetStartedButton({ white = false }) {
  return (
    <button
      className={`rounded-full px-8 py-3 text-sm font-semibold flex items-center justify-center gap-2
        ${white ? 'bg-white text-[#0649E7]' : 'bg-[#0649E7] text-white'}`}
    >
      Get Started <FaArrowRightLong className="text-sm" />
    </button>
  );
}
