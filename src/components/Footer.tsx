import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Phone, Instagram, MapPin, Sparkles } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4 group">
              {/* Updated Logo */}
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg relative overflow-hidden animate-pulse">
                <Sparkles className="h-6 w-6 text-stone-800 animate-spin" style={{ animationDuration: '3s' }} />
                {/* Orbiting elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-1/2 w-1 h-1 bg-stone-800 rounded-full animate-ping transform -translate-x-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-1 h-1 bg-stone-800 rounded-full animate-ping delay-500"></div>
                  <div className="absolute top-1/2 left-0 w-1 h-1 bg-stone-800 rounded-full animate-ping delay-1000 transform -translate-y-1/2"></div>
                </div>
              </div>
              <span className="text-2xl font-bold text-yellow-400 tracking-wider">HIREBRIDGE</span>
            </div>
            <p className="text-gray-400 mb-6">
              Bridging the gap between exceptional talent and outstanding opportunities. Your career journey starts here.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Phone className="h-4 w-4 mr-2" />
                <span>9997502725</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Mail className="h-4 w-4 mr-2" />
                <span>Deepansh Kushwaha</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Instagram className="h-4 w-4 mr-2" />
                <span>__deppanshh__</span>
              </div>
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">For Job Seekers</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigation('/jobs')} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Browse Jobs</button></li>
              <li><button onClick={() => handleNavigation('/companies')} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Companies</button></li>
              <li><button onClick={() => handleNavigation('/salary')} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Salary Guide</button></li>
              <li><button onClick={() => handleNavigation('/resume-builder')} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Resume Builder</button></li>
              <li><button onClick={() => handleNavigation('/career-advice')} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Career Advice</button></li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigation('/post-job')} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Post a Job</button></li>
              <li><button onClick={() => handleNavigation('/talent-search')} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Search Talent</button></li>
              <li><button onClick={() => handleNavigation('/pricing')} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Pricing</button></li>
              <li><button onClick={() => handleNavigation('/employer-resources')} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Resources</button></li>
              <li><button onClick={() => handleNavigation('/advertise')} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Advertise</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigation('/about')} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">About Us</button></li>
              <li><button onClick={() => handleNavigation('/blog')} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Blog</button></li>
              <li><button onClick={() => handleNavigation('/careers')} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Careers</button></li>
              <li><button onClick={() => handleNavigation('/contact')} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Contact</button></li>
              <li><button onClick={() => handleNavigation('/help')} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Help Center</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 HireBridge. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <button onClick={() => handleNavigation('/privacy')} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Privacy Policy</button>
            <button onClick={() => handleNavigation('/terms')} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Terms of Service</button>
            <button onClick={() => handleNavigation('/cookies')} className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;