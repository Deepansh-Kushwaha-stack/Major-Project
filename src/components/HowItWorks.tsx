import React from 'react';
import { UserPlus, Search, FileText, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Create Your Profile',
      description: 'Sign up and build a comprehensive profile showcasing your skills, experience, and career goals.',
      step: '01'
    },
    {
      icon: Search,
      title: 'Search & Filter Jobs',
      description: 'Use our advanced search filters to find jobs that match your preferences and qualifications.',
      step: '02'
    },
    {
      icon: FileText,
      title: 'Apply with Ease',
      description: 'Apply to multiple positions with one click using your saved profile and resume.',
      step: '03'
    },
    {
      icon: CheckCircle,
      title: 'Get Hired',
      description: 'Connect with recruiters, schedule interviews, and land your dream job.',
      step: '04'
    }
  ];

  return (
    <section className="py-20 bg-stone-800 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-300/5 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slideInDown">
            HOW IT
            <span className="block text-yellow-400 gradient-text animate-slideInUp" style={{ animationDelay: '0.3s' }}>WORKS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slideInUp" style={{ animationDelay: '0.6s' }}>
            Get started with your job search in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative text-center glass rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 card-hover animate-slideInUp shadow-lg hover:shadow-glow"
              style={{ animationDelay: `${0.9 + index * 0.2}s` }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-stone-800 font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: `${1.5 + index * 0.1}s` }}>
                {step.step}
              </div>
              
              <div className="mt-4">
                <step.icon className="h-16 w-16 text-yellow-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: `${index * 0.3}s` }} />
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-yellow-400/50 animate-shimmer"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-scaleIn" style={{ animationDelay: '2.1s' }}>
          <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-8 max-w-4xl mx-auto shadow-4xl hover:shadow-glow-xl transition-all duration-300 hover:scale-105">
            <h3 className="text-3xl font-bold text-stone-800 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-stone-700 text-lg mb-6">
              Join thousands of professionals who have found their perfect career match
            </p>
            <button className="bg-stone-800 hover:bg-stone-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 btn-animate shadow-glow hover:shadow-glow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;