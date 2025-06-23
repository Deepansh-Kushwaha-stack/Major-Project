import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, Briefcase, ArrowRight, Users, Target } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse shadow-glow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000 shadow-glow-lg"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-300/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-10 right-1/4 w-48 h-48 bg-orange-400/8 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 left-1/4 w-56 h-56 bg-amber-300/8 rounded-full blur-2xl animate-float delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading with enhanced animations */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slideInDown">
            BRIDGE YOUR
            <span className="block text-yellow-400 animate-pulse gradient-text animate-slideInUp" style={{ animationDelay: '0.3s' }}>
              CAREER JOURNEY
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slideInUp" style={{ animationDelay: '0.6s' }}>
            Connect talented professionals with exceptional opportunities. 
            Your perfect career match is just one bridge away.
          </p>
        </div>

        {/* Enhanced search bar */}
        <div className="max-w-4xl mx-auto mb-12 animate-scaleIn" style={{ animationDelay: '0.9s' }}>
          <div className="glass rounded-2xl p-6 shadow-4xl border border-white/20 hover:shadow-glow-xl transition-all duration-300 hover:scale-105">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-hover:text-yellow-400 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full pl-10 pr-4 py-3 bg-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 placeholder-gray-500 hover:bg-white focus:bg-white transition-all duration-300 hover:shadow-lg focus:shadow-glow"
                />
              </div>
              <div className="relative group">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-hover:text-yellow-400 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full pl-10 pr-4 py-3 bg-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 placeholder-gray-500 hover:bg-white focus:bg-white transition-all duration-300 hover:shadow-lg focus:shadow-glow"
                />
              </div>
              <button className="group relative bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-stone-800 py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/30 hover:scale-105 flex items-center justify-center transform btn-animate">
                <Search className="mr-2 h-5 w-5" />
                Search Jobs
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/30 to-amber-400/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={() => handleNavigation('/jobs')}
            className="group relative bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-stone-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center transform btn-animate animate-slideInLeft shadow-glow hover:shadow-glow-xl"
            style={{ animationDelay: '1.2s' }}
          >
            <Briefcase className="mr-2 h-5 w-5" />
            Explore Jobs
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/30 to-amber-400/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button
            onClick={() => handleNavigation('/recruiter')}
            className="group relative border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-stone-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center transform animate-slideInRight shadow-lg hover:shadow-glow-lg"
            style={{ animationDelay: '1.5s' }}
          >
            <Users className="mr-2 h-5 w-5" />
            Post a Job
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute -inset-1 bg-yellow-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Enhanced Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="group glass rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl card-hover animate-slideInUp shadow-lg" style={{ animationDelay: '1.8s' }}>
            <Target className="h-12 w-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-float" />
            <h3 className="text-xl font-semibold text-white mb-2">Smart Matching</h3>
            <p className="text-gray-300">AI-powered job recommendations based on your skills and preferences</p>
          </div>
          <div className="group glass rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl card-hover animate-slideInUp shadow-lg" style={{ animationDelay: '2.1s' }}>
            <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-float delay-500" />
            <h3 className="text-xl font-semibold text-white mb-2">Top Companies</h3>
            <p className="text-gray-300">Connect with leading employers across various industries</p>
          </div>
          <div className="group glass rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl card-hover animate-slideInUp shadow-lg" style={{ animationDelay: '2.4s' }}>
            <Briefcase className="h-12 w-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-float delay-1000" />
            <h3 className="text-xl font-semibold text-white mb-2">Career Growth</h3>
            <p className="text-gray-300">Find opportunities that align with your career goals and aspirations</p>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center shadow-glow">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;