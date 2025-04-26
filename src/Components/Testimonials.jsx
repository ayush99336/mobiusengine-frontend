import { FaPlay, FaArrowUpRightFromSquare } from 'react-icons/fa6';

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 px-8 bg-white">
      <div className="max-w-[1500px] mx-auto text-center">
        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#022183] mb-16">
          What our clients have to say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial Cards */}
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="bg-[#0649E7] rounded-b-[20px] overflow-hidden flex flex-col relative"
            >
              {/* Top Half: Play Icon */}
              <div className="bg-white flex justify-center items-center h-40 rounded-b-[20px]">
                <FaPlay className="text-[#0649E7] text-2xl" />
              </div>

              {/* Bottom Half: Text */}
              <div className="p-6 text-left text-white flex-1 relative">
                <p className="text-sm leading-relaxed">
                  Holly is a <span className="font-semibold">senior executive</span> who got over <span className="font-semibold">10 job interviews</span> and an offer she accepted
                </p>

                {/* Small Arrow Button */}
                <div className="absolute bottom-4 right-4 bg-white text-[#0649E7] p-2 rounded-full">
                  <FaArrowUpRightFromSquare className="text-sm" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-16">
          <button className="border-2 border-[#0649E7] text-[#0649E7] px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2">
            More customer testimonials
            <FaArrowUpRightFromSquare className="text-sm" />
          </button>

          <button className="bg-[#0649E7] text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2">
            Get Started
            <FaArrowUpRightFromSquare className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
}
