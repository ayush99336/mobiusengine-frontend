import { FaHandshake, FaUserAlt, FaStar } from 'react-icons/fa';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaHandshake className="text-[#022183] text-7xl mb-10 item " />,
      title: "Tried, Tested, Trusted",
      description: "Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.",
    },
    {
      icon: <FaUserAlt className="text-[#022183] text-7xl mb-10" />,
      title: "Real People, Real Help",
      description: "A hands-on team that actually cares — guiding you through every twist in your career path.",
    },
    {
      icon: <FaStar className="text-[#022183] text-7xl mb-10" />,
      title: "Beat the Line",
      description: "We search, shortlist, and apply for you, so your name shows up first — every single day.",
    },
  ];

  return (
    <div className='items-center justify-center flex flex-col m-30'>
            <section className="w-auto bg-[#EBF1FF] py-20 px-60 rounded-[20px] ">
      <div className="max-w-[1500px] mx-auto text-center">
        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#022183] mb-16">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] border-2 border-[#0649E7] p-8 flex flex-col   w-80 h-80   shadow-lg"
            >
              {feature.icon} 
              <div className='flex flex-col items-center justify-center'>
              <h3 className="text-[#022183] text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-[#022183] text-sm leading-relaxed">
                {feature.description}
              </p>
                </div>
              

            </div>
          ))}
        </div>
      </div>
    </section>
    </div>

  );
}
