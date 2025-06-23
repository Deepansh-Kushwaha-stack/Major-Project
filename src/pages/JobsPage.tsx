import React, { useState } from 'react';
import { Search, MapPin, Filter, Bookmark, Clock, DollarSign, Building } from 'lucide-react';
import Footer from '../components/Footer';

const JobsPage = () => {
  const [filters, setFilters] = useState({
    jobType: '',
    location: '',
    salaryRange: '',
    experience: ''
  });

  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $150k',
      posted: '2 days ago',
      description: 'We are seeking an experienced Full Stack Developer to join our innovative team and work on cutting-edge projects...',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
      logo: '🚀'
    },
    {
      id: 2,
      title: 'Product Designer',
      company: 'DesignLab Studio',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$90k - $120k',
      posted: '1 day ago',
      description: 'Join our creative team to design beautiful and functional user experiences for our digital products...',
      skills: ['Figma', 'Sketch', 'User Research', 'Prototyping'],
      logo: '🎨'
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'Analytics Pro',
      location: 'Remote',
      type: 'Full-time',
      salary: '$110k - $140k',
      posted: '3 days ago',
      description: 'Analyze complex datasets and build machine learning models to drive business insights...',
      skills: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
      logo: '📊'
    },
    {
      id: 4,
      title: 'Frontend Developer (Intern)',
      company: 'StartupCo',
      location: 'Austin, TX',
      type: 'Internship',
      salary: '$25/hour',
      posted: '5 days ago',
      description: 'Great opportunity for students to gain hands-on experience in modern web development...',
      skills: ['React', 'CSS', 'JavaScript'],
      logo: '💡'
    },
    {
      id: 5,
      title: 'Freelance UI/UX Designer',
      company: 'Various Clients',
      location: 'Remote',
      type: 'Freelance',
      salary: '$50-80/hour',
      posted: '1 week ago',
      description: 'Work with multiple clients on exciting design projects across different industries...',
      skills: ['Adobe XD', 'Figma', 'User Testing'],
      logo: '🎯'
    },
    {
      id: 6,
      title: 'Marketing Manager',
      company: 'Growth Marketing Inc',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$85k - $105k',
      posted: '4 days ago',
      description: 'Lead our marketing initiatives and drive customer acquisition through innovative campaigns...',
      skills: ['Digital Marketing', 'Analytics', 'Content Strategy'],
      logo: '📈'
    }
  ];

  const jobTypes = ['Full-time', 'Part-time', 'Internship', 'Freelance', 'Contract'];
  const salaryRanges = ['$0-50k', '$50k-100k', '$100k-150k', '$150k+'];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              FIND YOUR
              <span className="block text-yellow-400">PERFECT JOB</span>
            </h1>
            <p className="text-xl text-gray-300">
              Discover opportunities that match your skills and aspirations
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Job title or keyword"
                    className="w-full pl-10 pr-4 py-3 bg-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full pl-10 pr-4 py-3 bg-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <button className="bg-yellow-400 hover:bg-yellow-300 text-stone-800 py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                  Search Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <div className="flex items-center mb-6">
                  <Filter className="h-5 w-5 text-stone-600 mr-2" />
                  <h3 className="text-lg font-semibold text-stone-800">Filters</h3>
                </div>

                <div className="space-y-6">
                  {/* Job Type */}
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-3">Job Type</label>
                    {jobTypes.map((type) => (
                      <label key={type} className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
                        />
                        <span className="ml-2 text-stone-600">{type}</span>
                      </label>
                    ))}
                  </div>

                  {/* Salary Range */}
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-3">Salary Range</label>
                    {salaryRanges.map((range) => (
                      <label key={range} className="flex items-center mb-2">
                        <input
                          type="radio"
                          name="salary"
                          className="text-yellow-500 focus:ring-yellow-500"
                        />
                        <span className="ml-2 text-stone-600">{range}</span>
                      </label>
                    ))}
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-3">Experience</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                      <option>Any Experience</option>
                      <option>Entry Level</option>
                      <option>Mid Level</option>
                      <option>Senior Level</option>
                      <option>Executive</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-stone-800">
                  {jobs.length} Jobs Found
                </h2>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option>Sort by: Relevance</option>
                  <option>Date Posted</option>
                  <option>Salary: High to Low</option>
                  <option>Salary: Low to High</option>
                </select>
              </div>

              <div className="space-y-6">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-stone-200 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{job.logo}</div>
                        <div>
                          <h3 className="text-xl font-bold text-stone-800 hover:text-yellow-600 cursor-pointer transition-colors duration-300">
                            {job.title}
                          </h3>
                          <div className="flex items-center text-stone-600 mt-1">
                            <Building className="h-4 w-4 mr-2" />
                            <span className="font-medium">{job.company}</span>
                          </div>
                        </div>
                      </div>
                      <button className="text-stone-400 hover:text-yellow-500 transition-colors duration-300">
                        <Bookmark className="h-6 w-6" />
                      </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
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

                    <p className="text-stone-600 mb-4">{job.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {job.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-stone-800 hover:bg-stone-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                        Apply Now
                      </button>
                      <button className="px-6 py-3 border border-stone-300 text-stone-600 hover:text-stone-800 hover:border-stone-400 rounded-lg font-semibold transition-all duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors duration-200">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-yellow-400 text-stone-800 rounded-lg font-semibold">
                    1
                  </button>
                  <button className="px-4 py-2 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors duration-200">
                    2
                  </button>
                  <button className="px-4 py-2 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors duration-200">
                    3
                  </button>
                  <button className="px-4 py-2 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors duration-200">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobsPage;