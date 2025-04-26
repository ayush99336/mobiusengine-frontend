export default function HowItWorks() {
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
  