import aboutimg from "../assets/about.png";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-20 px-8 bg-white text-gray-800 bg-gradient-to-t from-blue-700 via-slate-900 to-slate-900">
      <div className="max-w-[1500px] mx-auto">
        <h2 className="text-4xl font-bold text-left mb-16 text-[#f7f7f7]">About Us</h2>

        <div className="flex flex-col md:flex-row items-center gap-12 justify-center">
          <img className="w-full md:w-3/4 rounded-md shadow-md " 
            src={aboutimg}
          />
          
        </div>
        <div className="flex flex-col items-center justify-center mt-12">
        <span className="mt-6 text-lg opacity-90 text-[#f7f7f7]">
          Learn more about our Board of Advisors.
          </span>
          <span className="mt-6 text-lg opacity-90 text-[#f7f7f7]">
          Follow us on LinkedIn for the latest updates.
          </span>
        </div>

        
      </div>

    </section>
  );
}