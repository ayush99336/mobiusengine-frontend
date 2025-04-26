import Navbar from './Navbar';
import HeroSection from './HeroSection';

export default function GradientWrapper() {
  return (
    <div className="w-full bg-gradient-to-br from-[#9BBEF5] to-[#022183] text-white">
      <Navbar />
      <HeroSection />
    </div>
  );
}
