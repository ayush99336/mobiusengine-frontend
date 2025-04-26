export default function Testimonials() {
    return (
      <section id="testimonials" className="max-w-[1500px] mx-auto py-16 px-4">
        <h2 className="text-[40px] font-medium text-center mb-12 font-dmsans">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonial Card */}
          <div className="bg-[#EBF1FF] rounded-[20px] p-8 shadow-md">
            <p className="text-[18px] text-[#101010] mb-4">
              "MobiusEngine helped me get over 10 interviews and finally land my dream role!"
            </p>
            <p className="font-semibold">— Holly, Senior Executive</p>
          </div>
          
          <div className="bg-[#EBF1FF] rounded-[20px] p-8 shadow-md">
            <p className="text-[18px] text-[#101010] mb-4">
              "The coaching and resume service dramatically increased my callback rate!"
            </p>
            <p className="font-semibold">— James, Engineering Manager</p>
          </div>
        </div>
      </section>
    )
  }
  