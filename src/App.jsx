import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import AboutUs from './Components/AboutUs'
import Plans from './Components/Plans'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import GradientWrapper from './Components/GradientWrapper'
import HowItWorks from './Components/HowItWorks'
import WhyChooseUs from './Components/WhyChooseUs'
import ResumeBuilding from './Components/ResumeBuilding'
import ContactUs from './Components/ContactUs'

function App() {
  const [count, setCount] = useState(0)

  return (



<div className="min-h-screen w-full overflow-x-hidden">
    <GradientWrapper/>
    <AboutUs/>
    <Testimonials/>
    <WhyChooseUs/>
    <Plans/>
    <ResumeBuilding/>
    <ContactUs/>

    

    <Footer/>
</div> 

  )
}

export default App
