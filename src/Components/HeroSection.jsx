import ebookImage from '../assets/ebook.png';
export default function HeroSection() {
    return (
      <section className="w-full py-20 px-8">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-[1500px] mx-auto">
          {/* Left Section */}
          <div className="max-w-lg text-center md:text-left">
            <h1 className="text-[48px] md:text-[64px] font-bold leading-tight">
              Land job interviews <span className="text-[#64A1FF]">10x faster</span>
            </h1>
            <p className="mt-6 text-lg opacity-90">
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
    );
  }
  