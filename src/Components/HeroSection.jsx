import ebookImage from '../assets/ebook.png';

export default function HeroSection() {
  return (
    <div className=''>
      <section className="w-full py-20 px-8  text-white relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-[1500px] mx-auto">
          {/* Left Section */}
          <div className="max-w-lg text-center md:text-left">
            <h1 className="font-dmsans-semibold text-[48px] md:text-[64px]  leading-tight">
              Land job interviews <span className="text-[#64A1FF]">10x faster</span>
            </h1>

            <p className="mt-6 font-sora text-lg text-white/90">
              Custom-built resumes that match your goals, keywords, and recruiter expectations.
            </p>

            <button className="mt-8 bg-white text-[#022183] font-sora rounded-full px-8 py-3 text-lg hover:bg-gray-100">
              Get Started →
            </button>
          </div>

          {/* Right Section */}
          <div className="relative mt-16 md:mt-0">
            <img
              src={ebookImage}
              alt="Hiring Trends E-Book"
              className="w-[200px] md:w-[250px] rounded-md shadow-md"
            />

          </div>
        </div>
      </section>

      <HowItWorks />
    </div>
  );
}

function HowItWorks() {
  const steps = [
    { number: "1", text: "Submit Intake Form" },
    { number: "2", text: "We do the search and curation for list of jobs" },
    { number: "3", text: "You approve, we do the tedious part (applying)" },
    { number: "4", text: "You get the interviews" },
  ];

  return (
    <section className="h-auto bg-white py-20 px-8">
      <div className="max-w-[1500px] mx-auto text-left">
        <h2 className="text-3xl md:text-4xl font-sans text-[#022183] mb-16">
          How we work?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Circle Number */}
              <div className="w-20 h-20 flex justify-center items-center border-2 border-[#0649E7] text-[black] rounded-full text-[36px] font-bold">
                {step.number}
              </div>

              {/* Underlined Text */}
              <p className="mt-6 text-[#0649E7] text-base font-medium relative font-sora">
                <span className="border-b-2 border-[#0649E7] pb-1">{step.text}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
