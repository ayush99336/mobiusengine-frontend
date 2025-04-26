export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-[#022183] text-white py-16 px-8">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="MobiusEngine Logo" className="h-10 w-10 object-contain" />
              <span className="text-xl font-semibold">MobiusEngine</span>
            </div>
            <p className="text-blue-200 mb-6">
              AI-powered resume optimization to help you land your dream job faster.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a key={social} href={`#${social}`} className="text-blue-200 hover:text-white">
                  <span className="sr-only">{social}</span>
                  <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Links columns */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3 text-blue-200">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#plans" className="hover:text-white">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3 text-blue-200">
              <li><a href="#blog" className="hover:text-white">Blog</a></li>
              <li><a href="#guides" className="hover:text-white">Resume Guides</a></li>
              <li><a href="#templates" className="hover:text-white">Templates</a></li>
              <li><a href="#webinars" className="hover:text-white">Webinars</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-blue-200">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#careers" className="hover:text-white">Careers</a></li>
              <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            © {currentYear} MobiusEngine AI. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <select className="bg-blue-800 text-blue-200 rounded px-3 py-1 text-sm">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}