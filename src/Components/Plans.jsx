export default function Plans() {
    return (
      <section id="plans" className="max-w-[1500px] mx-auto py-16 px-4">
        <h2 className="text-[40px] font-medium text-center mb-12 font-dmsans">Our Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-[#EBF1FF] rounded-[20px] p-8 text-center shadow-md">
            <h3 className="text-[32px] font-semibold mb-4 font-dmsans">Starter</h3>
            <p className="text-[24px] font-bold mb-6">$35/week</p>
            <ul className="space-y-2 text-[18px] text-[#101010]">
              <li>Curated jobs</li>
              <li>Up to 20 applications/week</li>
              <li>Dedicated analyst</li>
            </ul>
            <button className="mt-6 bg-[#0649E7] hover:bg-[#022183] text-white py-3 px-6 rounded-[20px] text-[20px]">
              Get Started →
            </button>
          </div>
  
          {/* Plus Plan */}
          <div className="bg-[#EBF1FF] rounded-[20px] p-8 text-center shadow-md">
            <h3 className="text-[32px] font-semibold mb-4 font-dmsans">Plus</h3>
            <p className="text-[24px] font-bold mb-6">$50/week</p>
            <ul className="space-y-2 text-[18px] text-[#101010]">
              <li>Up to 50 applications/week</li>
              <li>Resume review</li>
              <li>Search specialist</li>
            </ul>
            <button className="mt-6 bg-[#0649E7] hover:bg-[#022183] text-white py-3 px-6 rounded-[20px] text-[20px]">
              Get Started →
            </button>
          </div>
  
          {/* Custom Plan */}
          <div className="bg-[#EBF1FF] rounded-[20px] p-8 text-center shadow-md">
            <h3 className="text-[32px] font-semibold mb-4 font-dmsans">Custom</h3>
            <p className="text-[24px] font-bold mb-6">$100/week</p>
            <ul className="space-y-2 text-[18px] text-[#101010]">
              <li>Up to 75 applications/week</li>
              <li>Full application team</li>
              <li>15 job titles applied</li>
            </ul>
            <button className="mt-6 bg-[#0649E7] hover:bg-[#022183] text-white py-3 px-6 rounded-[20px] text-[20px]">
              Get Started →
            </button>
          </div>
        </div>
      </section>
    )
  }
  