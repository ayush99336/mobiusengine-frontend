export default function Plans() {
  const planData = [
    {
      name: "Basic",
      price: 9.99,
      period: "month",
      features: [
        "3 resume templates",
        "Keyword optimization",
        "Basic ATS compatibility",
        "Email support"
      ],
      highlight: false,
      buttonText: "Get Started"
    },
    {
      name: "Pro",
      price: 19.99,
      period: "month",
      features: [
        "All Basic features",
        "15 premium templates",
        "Advanced ATS optimization",
        "Cover letter generator",
        "Priority support"
      ],
      highlight: true,
      buttonText: "Try Pro"
    },
    {
      name: "Enterprise",
      price: 39.99,
      period: "month",
      features: [
        "All Pro features",
        "Unlimited templates",
        "LinkedIn profile optimization",
        "1-on-1 career coaching",
        "Mock interview preparation",
        "24/7 support"
      ],
      highlight: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section id="plans" className="w-full py-20 px-8 ">
      <div className="max-w-[1500px] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-[#022183]">Job Application Service Plans</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Select the perfect plan for your needs. All plans include our AI-powered resume optimization technology.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {planData.map((plan, index) => (
            <div 
              key={index} 
              className={`w-full md:w-1/3 max-w-sm rounded-xl p-8 ${
                plan.highlight 
                  ? 'bg-[#022183] text-white shadow-xl transform md:-translate-y-4' 
                  : 'bg-white text-gray-800 shadow-md'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-lg opacity-80">/{plan.period}</span>
              </div>
              
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className={`w-5 h-5 mr-2 ${plan.highlight ? 'text-blue-300' : 'text-[#64A1FF]'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded-full font-semibold ${
                  plan.highlight 
                    ? 'bg-white text-[#022183]' 
                    : 'bg-[#022183] text-white'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}