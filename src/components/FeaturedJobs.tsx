import React from 'react';
import { MapPin, Clock, DollarSign, ArrowRight, Bookmark } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const FeaturedJobs = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $150k',
      posted: '2 days ago',
      description: 'We are looking for an experienced Frontend Developer to join our innovative team...',
      skills: ['React', 'TypeScript', 'Node.js'],
      logo: '🚀'
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'Creative Studio',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$90k - $110k',
      posted: '1 day ago',
      description: 'Join our creative team to design beautiful and functional user experiences...',
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping'],
      logo: '🎨'
    },
    {
      id: 3,
      title: 'Product Manager',
      company: 'InnovateLab',
      location: 'Remote',
      type: 'Full-time',
      salary: '$130k - $160k',
      posted: '3 days ago',
      description: 'Lead product strategy and development for our cutting-edge solutions...',
      skills: ['Strategy', 'Analytics', 'Leadership'],
      logo: '💼'
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'DataFlow Inc',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$110k - $140k',
      posted: '1 week ago',
      description: 'Analyze complex data sets to drive business insights and decision making...',
      skills: ['Python', 'Machine Learning', 'SQL'],
      logo: '📊'
    },
    {
      id: 5,
      title: 'Marketing Specialist',
      company: 'BrandBoost Agency',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$70k - $90k',
      posted: '5 days ago',
      description: 'Develop and execute marketing campaigns to drive brand awareness...',
      skills: ['Digital Marketing', 'Analytics', 'Content Creation'],
      logo: '📈'
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      company: 'CloudTech Systems',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$115k - $135k',
      posted: '4 days ago',
      description: 'Manage and optimize cloud infrastructure and deployment pipelines...',
      skills: ['AWS', 'Docker', 'Kubernetes'],
      logo: '☁️'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 animate-slideInDown">
            FEATURED
            <span className="block text-yellow-600 gradient-text">OPPORTUNITIES</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto animate-slideInUp" style={{ animationDelay: '0.3s' }}>
            Discover hand-picked job opportunities from top companies across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-4xl transition-all duration-300 hover:scale-105 border border-stone-200 overflow-hidden card-hover animate-slideInUp shadow-glow hover:shadow-glow-xl"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>{job.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-800 group-hover:text-yellow-600 transition-colors duration-300">
                        {job.title}
                      </h3>
                      <p className="text-stone-600 font-medium">{job.company}</p>
                    </div>
                  </div>
                  <button className="text-stone-400 hover:text-yellow-500 transition-colors duration-300 hover:scale-110 transform">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-stone-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center text-stone-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{job.type} • {job.posted}</span>
                  </div>
                  <div className="flex items-center text-stone-600">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span className="text-sm font-semibold">{job.salary}</span>
                  </div>
                </div>

                <p className="text-stone-600 text-sm mb-4 line-clamp-2">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full hover:bg-yellow-200 transition-colors duration-300 hover:scale-105 transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-stone-800 hover:bg-stone-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center group btn-animate hover:shadow-glow">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-scaleIn" style={{ animationDelay: '1.8s' }}>
          <button
            onClick={() => handleNavigation('/jobs')}
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 btn-animate shadow-glow hover:shadow-glow-xl"
          >
            View All Jobs
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;