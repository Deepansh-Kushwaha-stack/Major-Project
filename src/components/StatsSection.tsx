import React from 'react';
import { Users, Briefcase, Building, TrendingUp } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { icon: Users, value: '50K+', label: 'Active Job Seekers', color: 'text-blue-400' },
    { icon: Briefcase, value: '10K+', label: 'Job Opportunities', color: 'text-green-400' },
    { icon: Building, value: '2K+', label: 'Partner Companies', color: 'text-purple-400' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate', color: 'text-yellow-400' },
  ];

  return (
    <section className="py-20 bg-stone-800 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-300/3 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slideInDown">
            TRUSTED BY PROFESSIONALS
            <span className="block text-yellow-400 gradient-text animate-slideInUp" style={{ animationDelay: '0.3s' }}>WORLDWIDE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slideInUp" style={{ animationDelay: '0.6s' }}>
            Join thousands of professionals who have found their dream careers through our platform
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center glass rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 card-hover animate-scaleIn shadow-lg hover:shadow-glow"
              style={{ animationDelay: `${0.9 + index * 0.2}s` }}
            >
              <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-float`} style={{ animationDelay: `${index * 0.3}s` }} />
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">{stat.value}</div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;