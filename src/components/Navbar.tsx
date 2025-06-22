import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, User, Target, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    // Smooth scroll to top with animation
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-stone-800/80 backdrop-blur-xl shadow-2xl py-3' 
          : 'bg-stone-800/60 backdrop-blur-lg py-4'
      } rounded-full border border-white/20 shadow-lg hover:shadow-2xl`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <button onClick={() => handleNavigation('/')} className="flex items-center space-x-3 group">
              <div className="relative">
                {/* New Creative Logo - Rocket with Target */}
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:rotate-6 shadow-lg relative overflow-hidden">
                  {/* Rocket Body */}
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-stone-800 transform rotate-45" />
                    {/* Target rings around rocket */}
                    <div className="absolute inset-0 border-2 border-stone-800/30 rounded-full animate-ping"></div>
                    <div className="absolute inset-1 border border-stone-800/20 rounded-full"></div>
                  </div>
                  {/* Success indicators */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold text-yellow-400 tracking-wider group-hover:text-yellow-300 transition-colors duration-300">
                HIREBRIDGE
              </span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-8">
                <div className="relative group">
                  <button className="flex items-center text-yellow-100 hover:text-yellow-400 transition-all duration-300 font-medium px-4 py-2 rounded-full hover:bg-white/10 hover:shadow-lg">
                    HOME <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-stone-800/95 backdrop-blur-xl rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-white/10">
                    <button onClick={() => handleNavigation('/')} className="block w-full text-left px-6 py-3 text-yellow-100 hover:text-yellow-400 hover:bg-white/10 transition-all duration-200 rounded-t-2xl">Home</button>
                    <button onClick={() => handleNavigation('/jobs')} className="block w-full text-left px-6 py-3 text-yellow-100 hover:text-yellow-400 hover:bg-white/10 transition-all duration-200">Find Jobs</button>
                    <button onClick={() => handleNavigation('/recruiter')} className="block w-full text-left px-6 py-3 text-yellow-100 hover:text-yellow-400 hover:bg-white/10 transition-all duration-200 rounded-b-2xl">For Recruiters</button>
                  </div>
                </div>
                
                <button onClick={() => handleNavigation('/about')} className="text-yellow-100 hover:text-yellow-400 transition-all duration-300 font-medium px-4 py-2 rounded-full hover:bg-white/10 hover:shadow-lg">
                  ABOUT US
                </button>
                
                <button onClick={() => handleNavigation('/blog')} className="text-yellow-100 hover:text-yellow-400 transition-all duration-300 font-medium px-4 py-2 rounded-full hover:bg-white/10 hover:shadow-lg">
                  BLOG
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => handleNavigation('/profile')}
                  className="group relative p-3 text-yellow-400 border border-yellow-400/50 rounded-full hover:bg-yellow-400 hover:text-stone-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/25"
                >
                  <User className="h-5 w-5" />
                  <div className="absolute -inset-1 bg-yellow-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button 
                  onClick={() => handleNavigation('/login')}
                  className="group relative px-6 py-3 text-yellow-400 border border-yellow-400/50 rounded-full hover:bg-yellow-400 hover:text-stone-800 transition-all duration-300 font-medium hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25"
                >
                  Login
                  <div className="absolute -inset-1 bg-yellow-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button 
                  onClick={() => handleNavigation('/signup')}
                  className="group relative px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-400 text-stone-800 rounded-full hover:from-yellow-300 hover:to-amber-300 hover:shadow-xl hover:shadow-yellow-400/30 transition-all duration-300 font-medium hover:scale-105 transform"
                >
                  Sign Up
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/30 to-amber-400/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 animate-fadeIn">
          {/* Full screen blur background */}
          <div className="absolute inset-0 bg-stone-900/95 backdrop-blur-xl"></div>
          
          {/* Mobile Navigation Content - No logo/name duplication */}
          <div className="relative flex flex-col h-full justify-center px-6">
            {/* Navigation Links with enhanced blur backgrounds and animations */}
            <div className="space-y-6">
              <button 
                onClick={() => handleNavigation('/')} 
                className="block w-full text-center px-8 py-5 text-yellow-100 hover:text-yellow-400 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl transition-all duration-300 text-xl font-medium transform hover:scale-105 border border-white/20 hover:border-yellow-400/50 shadow-lg hover:shadow-2xl animate-slideInLeft"
                style={{ animationDelay: '0.1s' }}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('/jobs')} 
                className="block w-full text-center px-8 py-5 text-yellow-100 hover:text-yellow-400 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl transition-all duration-300 text-xl font-medium transform hover:scale-105 border border-white/20 hover:border-yellow-400/50 shadow-lg hover:shadow-2xl animate-slideInLeft"
                style={{ animationDelay: '0.2s' }}
              >
                Find Jobs
              </button>
              <button 
                onClick={() => handleNavigation('/about')} 
                className="block w-full text-center px-8 py-5 text-yellow-100 hover:text-yellow-400 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl transition-all duration-300 text-xl font-medium transform hover:scale-105 border border-white/20 hover:border-yellow-400/50 shadow-lg hover:shadow-2xl animate-slideInLeft"
                style={{ animationDelay: '0.3s' }}
              >
                About Us
              </button>
              <button 
                onClick={() => handleNavigation('/blog')} 
                className="block w-full text-center px-8 py-5 text-yellow-100 hover:text-yellow-400 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl transition-all duration-300 text-xl font-medium transform hover:scale-105 border border-white/20 hover:border-yellow-400/50 shadow-lg hover:shadow-2xl animate-slideInLeft"
                style={{ animationDelay: '0.4s' }}
              >
                Blog
              </button>
              <button 
                onClick={() => handleNavigation('/profile')} 
                className="block w-full text-center px-8 py-5 text-yellow-100 hover:text-yellow-400 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl transition-all duration-300 text-xl font-medium transform hover:scale-105 border border-white/20 hover:border-yellow-400/50 shadow-lg hover:shadow-2xl animate-slideInLeft"
                style={{ animationDelay: '0.5s' }}
              >
                Profile
              </button>
            </div>

            {/* Auth Buttons with enhanced blur backgrounds and animations */}
            <div className="mt-12 space-y-4">
              <button 
                onClick={() => handleNavigation('/login')} 
                className="block w-full px-8 py-5 text-yellow-100 hover:text-yellow-400 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-2xl transition-all duration-300 text-lg font-medium border border-white/20 hover:border-yellow-400/50 transform hover:scale-105 shadow-lg hover:shadow-2xl animate-slideInRight"
                style={{ animationDelay: '0.6s' }}
              >
                Login
              </button>
              <button 
                onClick={() => handleNavigation('/signup')} 
                className="block w-full px-8 py-5 bg-gradient-to-r from-yellow-400 to-amber-400 text-stone-800 rounded-2xl hover:from-yellow-300 hover:to-amber-300 transition-all duration-300 font-medium text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 animate-slideInRight"
                style={{ animationDelay: '0.7s' }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;