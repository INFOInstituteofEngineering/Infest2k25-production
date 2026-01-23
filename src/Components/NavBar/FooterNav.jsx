import React from 'react';
import { Link } from 'react-router-dom';
import InfoLogo from '../../assets/Logo IIE.png';

const FooterNav = () => {
  const handleContactClick = (e) => {
    e.preventDefault();
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-gray-50 py-12 px-4">
      {/* Logo Section */}
      <div className="flex justify-center mb-12">
        <Link to="/">
          <img src={InfoLogo} alt="Logo" className="w-[80px] h-auto" />
        </Link>
      </div>

      {/* Three Column Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Home Column */}
        <div className="bg-gray-900 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Home</h2>
          <div className="space-y-4">
            <Link 
              to="/" 
              onClick={handleHomeClick}
              className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
            >
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
              <span>Hero Section</span>
            </Link>
            <Link 
              to="/" 
              onClick={handleHomeClick}
              className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
            >
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
              <span>About Infest</span>
            </Link>
            <Link 
              to="/" 
              onClick={handleHomeClick}
              className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
            >
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
              <span>Departments</span>
            </Link>
          </div>
        </div>

        {/* Events Column */}
        <div className="bg-gray-900 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Events</h2>
          <div className="space-y-4">
            <Link 
              to="/event/tech" 
              className="flex items-center gap-2 hover:text-purple-400 transition-colors group"
            >
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
              <span>Technical</span>
            </Link>
            <Link 
              to="/event/tech" 
              className="flex items-center gap-2 hover:text-purple-400 transition-colors group"
            >
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
              <span>Electrical</span>
            </Link>
            <Link 
              to="/event/tech" 
              className="flex items-center gap-2 hover:text-purple-400 transition-colors group"
            >
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
              <span>Mechanical</span>
            </Link>
            <Link 
              to="/event/tech" 
              className="flex items-center gap-2 hover:text-purple-400 transition-colors group"
            >
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
              <span>MBA</span>
            </Link>
          </div>
        </div>

        {/* Contact Column */}
        <div className="bg-gray-900 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <div className="space-y-4">
            <button 
              onClick={handleContactClick}
              className="flex items-center gap-2 hover:text-green-400 transition-colors group w-full"
            >
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
              <span>Get In Touch</span>
            </button>
            <a 
              href="mailto:infest@example.com" 
              className="flex items-center gap-2 hover:text-green-400 transition-colors group"
            >
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
              <span>Email</span>
            </a>
            <a 
              href="tel:+919488831838" 
              className="flex items-center gap-2 hover:text-green-400 transition-colors group"
            >
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
              <span>Phone</span>
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 hover:text-green-400 transition-colors group"
            >
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
              <span>Social Media</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FooterNav;
