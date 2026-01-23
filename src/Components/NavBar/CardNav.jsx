import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import InfoLogo from '../../assets/Logo IIE.png';
import InfestLogo from '../../assets/logo.png';

const CardNav = () => {
  const navRef = useRef(null);
  const location = useLocation();

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-white/20 backdrop-blur-xl shadow-2xl rounded-full px-4 sm:px-6 py-3 sm:py-4 w-[90%] max-w-3xl border border-white/80 relative">
      {/* Content */}
      <div className="flex justify-between items-center w-full">
        {/* Left Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={InfoLogo} alt="Logo" className="w-[40px] sm:w-[70px] h-auto" />
        </Link>

        

        {/* Unified Navigation (Visible on All Screens) */}
        <nav ref={navRef} className="flex gap-3 sm:gap-6 lg:gap-8 items-center">
          <Link
            to="/"
            onClick={handleHomeClick}
            className="font-medium cursor-pointer text-xs sm:text-sm lg:text-base relative before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full"
          >
            Home
          </Link>
          <Link
            to="/event/tech"
            className="font-medium cursor-pointer text-xs sm:text-sm lg:text-base relative before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full"
          >
            Events
          </Link>
          <button
            onClick={handleContactClick}
            className="font-medium cursor-pointer text-xs sm:text-sm lg:text-base relative before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-black before:transition-all before:duration-300 hover:before:w-full"
          >
            Contact
          </button>
        </nav>
      </div>
    </div>
  );
};

export default CardNav;
