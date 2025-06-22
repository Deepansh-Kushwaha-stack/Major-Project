import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedJobs from '../components/FeaturedJobs';
import StatsSection from '../components/StatsSection';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturedJobs />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default HomePage;