import ebookImage from '../assets/ebook.png';
export default function HeroSection() {
    return (
      <div>
      <section className="w-full py-20 px-8">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-[1500px] mx-auto">
          {/* Left Section */}
          <div className="max-w-lg text-center md:text-left">
          <h1 className="font-sora text-[64px] font-semibold">
  Land job interviews <span className="text-[#64A1FF]">10x faster</span>
</h1>

<p className="mt-6 font-dmsans text-lg">
  Custom-built resumes that match your goals, keywords, and recruiter expectations.
</p>

            <button className="mt-6 bg-white text-[#022183] font-semibold rounded-full px-8 py-3 text-lg hover:bg-gray-100">
              Get Started →
            </button>
          </div>
  
          {/* Right Section */}
          <div className="relative mt-12 md:mt-0">
            <img
              src={ebookImage}
              alt="Hiring Trends E-Book"
              className="w-[200px] md:w-[250px] rounded-md shadow-md"
            />
            <a
              href="#"
              className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-white underline text-sm"
            >

            </a>
          </div>
        </div>
        
      </section>
      <HowItWorks />
      </div>
    );
  }
  

function HowItWorks() {
    const steps = [
      {
        number: "1",
        text: "Submit Intake Form",
      },
      {
        number: "2",
        text: "We do the search and curation for list of jobs",
      },
      {
        number: "3",
        text: "You approve, we do the tedious part (applying)",
      },
      {
        number: "4",
        text: "You get the interviews",
      },
    ];
  
    return (
      <section className="w-full bg-white py-20 px-8">
        <div className="max-w-[1500px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#022183] mb-16">
            How we work?
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Circle Number */}
                <div className="w-20 h-20 flex justify-center items-center border-2 border-[#0649E7] text-[#0649E7] rounded-full text-[36px] font-bold">
  {step.number}
</div>

  
                {/* Underlined Text */}
                <p className="mt-6 text-[#0649E7] text-base font-medium relative">
                  <span className="border-b-2 border-[#0649E7] pb-1">
                    {step.text}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  