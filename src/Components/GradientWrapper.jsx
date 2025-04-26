import Navbar from './Navbar';
import HeroSection from './HeroSection';

export default function GradientWrapper() {
  return (
    <div className="w-full bg-gradient-to-tr from-[#1d4ed8] via-[#3730a3] to-[#4c0d2e] text-white">
      <Navbar />
      <HeroSection />
    </div>
  );
}
