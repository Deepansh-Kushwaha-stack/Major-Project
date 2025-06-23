import React, { useState } from 'react';
import { Plus, Eye, Edit3, Users, Briefcase, TrendingUp, Calendar } from 'lucide-react';
import Footer from '../components/Footer';

const RecruiterDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { icon: Briefcase, label: 'Active Jobs', value: '12', color: 'text-blue-500' },
    { icon: Users, label: 'Total Applications', value: '248', color: 'text-green-500' },
    { icon: TrendingUp, label: 'Views This Month', value: '1,245', color: 'text-purple-500' },
    { icon: Calendar, label: 'Interviews Scheduled', value: '8', color: 'text-yellow-500' }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      applications: 42,
      status: 'Active',
      posted: '5 days ago'
    },
    {
      id: 2,
      title: 'Product Designer',
      location: 'New York, NY',
      type: 'Full-time',
      applications: 38,
      status: 'Active',
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Data Scientist',
      location: 'Remote',
      type: 'Full-time',
      applications: 56,
      status: 'Paused',
      posted: '2 weeks ago'
    }
  ];

  const applications = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Senior Frontend Developer',
      experience: '5 years',
      status: 'Under Review',
      appliedDate: '2 days ago'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Product Designer',
      experience: '7 years',
      status: 'Interview Scheduled',
      appliedDate: '3 days ago'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Data Scientist',
      experience: '4 years',
      status: 'New Application',
      appliedDate: '1 day ago'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-amber-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-stone-800">
              RECRUITER
              <span className="block text-yellow-600">DASHBOARD</span>
            </h1>
            <p className="text-stone-600 mt-2">Manage your job postings and candidates</p>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-stone-800 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center">
            <Plus className="mr-2 h-5 w-5" />
            Post New Job
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-stone-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-stone-800 mt-1">{stat.value}</p>
                </div>
                <stat.icon className={`h-12 w-12 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="border-b border-stone-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'jobs', label: 'My Jobs' },
                { id: 'applications', label: 'Applications' },
                { id: 'analytics', label: 'Analytics' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-yellow-400 text-yellow-600'
                      : 'border-transparent text-stone-500 hover:text-stone-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Recent Activity */}
                  <div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-stone-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-stone-600 text-sm">New application for Senior Frontend Developer</span>
                      </div>
                      <div className="flex items-center p-3 bg-stone-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-stone-600 text-sm">Interview scheduled with Michael Chen</span>
                      </div>
                      <div className="flex items-center p-3 bg-stone-50 rounded-lg">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        <span className="text-stone-600 text-sm">Job posting "Data Scientist" paused</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button className="w-full text-left p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg border border-yellow-200 transition-colors duration-200">
                        <h4 className="font-semibold text-stone-800">Post a New Job</h4>
                        <p className="text-stone-600 text-sm">Create and publish a new job listing</p>
                      </button>
                      <button className="w-full text-left p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors duration-200">
                        <h4 className="font-semibold text-stone-800">Review Applications</h4>
                        <p className="text-stone-600 text-sm">Check new candidate applications</p>
                      </button>
                      <button className="w-full text-left p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors duration-200">
                        <h4 className="font-semibold text-stone-800">Schedule Interviews</h4>
                        <p className="text-stone-600 text-sm">Manage your interview calendar</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Jobs Tab */}
            {activeTab === 'jobs' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-stone-800">My Job Postings</h3>
                  <button className="bg-yellow-400 hover:bg-yellow-300 text-stone-800 px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                    <Plus className="inline mr-2 h-4 w-4" />
                    New Job
                  </button>
                </div>
                <div className="space-y-4">
                  {jobs.map((job) => (
                    <div key={job.id} className="bg-stone-50 rounded-lg p-6 hover:bg-stone-100 transition-colors duration-200">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-stone-800">{job.title}</h4>
                          <p className="text-stone-600">{job.location} • {job.type}</p>
                          <div className="flex items-center mt-2 space-x-4">
                            <span className="text-sm text-stone-500">{job.applications} applications</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              job.status === 'Active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {job.status}
                            </span>
                            <span className="text-sm text-stone-500">Posted {job.posted}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 text-stone-400 hover:text-stone-600 transition-colors duration-200">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-stone-400 hover:text-stone-600 transition-colors duration-200">
                            <Edit3 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Applications Tab */}
            {activeTab === 'applications' && (
              <div>
                <h3 className="text-xl font-semibold text-stone-800 mb-6">Recent Applications</h3>
                <div className="space-y-4">
                  {applications.map((app) => (
                    <div key={app.id} className="bg-stone-50 rounded-lg p-6 hover:bg-stone-100 transition-colors duration-200">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-stone-800">{app.name}</h4>
                          <p className="text-stone-600">{app.position}</p>
                          <div className="flex items-center mt-2 space-x-4">
                            <span className="text-sm text-stone-500">{app.experience} experience</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              app.status === 'New Application' 
                                ? 'bg-blue-100 text-blue-800'
                                : app.status === 'Interview Scheduled'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {app.status}
                            </span>
                            <span className="text-sm text-stone-500">Applied {app.appliedDate}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-4 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors duration-200">
                            View Profile
                          </button>
                          <button className="px-4 py-2 border border-stone-300 text-stone-600 rounded-lg hover:border-stone-400 transition-colors duration-200">
                            Message
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div>
                <h3 className="text-xl font-semibold text-stone-800 mb-6">Job Performance Analytics</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-stone-50 rounded-lg p-6">
                    <h4 className="font-semibold text-stone-800 mb-4">Application Trends</h4>
                    <div className="h-48 bg-white rounded-lg flex items-center justify-center">
                      <p className="text-stone-500">Chart visualization would go here</p>
                    </div>
                  </div>
                  <div className="bg-stone-50 rounded-lg p-6">
                    <h4 className="font-semibold text-stone-800 mb-4">Top Performing Jobs</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-stone-600">Senior Frontend Developer</span>
                        <span className="font-semibold text-stone-800">42 apps</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-stone-600">Data Scientist</span>
                        <span className="font-semibold text-stone-800">56 apps</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-stone-600">Product Designer</span>
                        <span className="font-semibold text-stone-800">38 apps</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RecruiterDashboard;