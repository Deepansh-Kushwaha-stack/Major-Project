import React from 'react';
import { Users, Target, Award, Globe, Heart, Lightbulb } from 'lucide-react';
import Footer from '../components/Footer';

const AboutUsPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for People',
      description: 'We believe every professional deserves meaningful work that aligns with their values and aspirations.'
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Our success is measured by the success of our users in finding their perfect career matches.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We continuously evolve our platform using cutting-edge technology and user feedback.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting talent and opportunities across borders to create a worldwide professional network.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '👩‍💼',
      description: 'Former HR executive with 15+ years in talent acquisition'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '👨‍💻',
      description: 'Tech veteran who led engineering teams at major tech companies'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      image: '👩‍🎨',
      description: 'UX expert passionate about creating intuitive user experiences'
    },
    {
      name: 'David Kim',
      role: 'VP of Business Development',
      image: '👨‍💼',
      description: 'Partnership specialist with deep industry connections'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            ABOUT
            <span className="block text-yellow-400">JOBCONNECT</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing the way professionals connect with opportunities, 
            creating meaningful careers and building stronger businesses.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-8">
                OUR
                <span className="block text-yellow-600">MISSION</span>
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed mb-6">
                To bridge the gap between exceptional talent and outstanding opportunities, 
                creating a world where every professional can find work that inspires them 
                and every company can build teams that drive success.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Since our founding, we've helped over 100,000 professionals take the next 
                step in their careers while enabling thousands of companies to find the 
                talent they need to grow and thrive.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Users className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-2xl font-bold text-stone-800 mb-2">100K+</h3>
                <p className="text-stone-600">Professionals Placed</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-8">
                <Target className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-stone-800 mb-2">5K+</h3>
                <p className="text-stone-600">Partner Companies</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 -mt-4">
                <Award className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-2xl font-bold text-stone-800 mb-2">95%</h3>
                <p className="text-stone-600">Success Rate</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-4">
                <Globe className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold text-stone-800 mb-2">50+</h3>
                <p className="text-stone-600">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              OUR
              <span className="block text-yellow-400">VALUES</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <value.icon className="h-16 w-16 text-yellow-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">
              MEET OUR
              <span className="block text-yellow-600">TEAM</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to transforming careers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-6xl mb-6">{member.image}</div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">{member.name}</h3>
                <p className="text-yellow-600 font-semibold mb-4">{member.role}</p>
                <p className="text-stone-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-stone-800 mb-6">
              Ready to Transform Your Career?
            </h3>
            <p className="text-stone-700 text-xl mb-8">
              Join our community of professionals and take the next step in your journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-stone-800 hover:bg-stone-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                Find Your Dream Job
              </button>
              <button className="border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                Post a Job
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;