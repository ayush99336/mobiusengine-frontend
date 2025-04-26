import mobiuslogo from "../assets/mobiuslogo.png";
export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="flex justify-between items-center px-8 py-4 max-w-[1500px] mx-auto">
        <div className="flex items-center gap-2">
          <img src={mobiuslogo} alt="MobiusEngine Logo" className="h-250px w-50px object-contain" />
          {/* <span className="text-xl font-semibold">MobiusEngine</span> */}
        </div>
        <div className="hidden md:flex gap-8 text-lg text-bold">
          <a href="#" className="hover:text-blue-200">Home</a>
          <a href="#about" className="hover:text-blue-200">About Us</a>
          <a href="#plans" className="hover:text-blue-200">Plans</a>
          <a href="#testimonials" className="hover:text-blue-200">Testimonials</a>
          <a href="#privacy" className="hover:text-blue-200">Privacy Policy</a>
          <a href="#more" className="hover:text-blue-200">More ▾</a>
        </div>
        <button className="bg-white text-[#022183] font-bold rounded-full px-6 py-2 hover:bg-gray-100">
          Get Started
        </button>
      </div>
    </nav>
  );
}
