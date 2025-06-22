import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Upload, Edit3, Save, Camera, Download, Star, Calendar, Plus, X } from 'lucide-react';
import Footer from '../components/Footer';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    title: 'Senior Frontend Developer',
    bio: 'Passionate developer with 5+ years of experience in React, TypeScript, and modern web technologies. Love creating user-friendly applications that solve real-world problems.',
    experience: [
      {
        company: 'TechCorp Solutions',
        position: 'Senior Frontend Developer',
        duration: '2022 - Present',
        description: 'Lead frontend development for web applications serving 100k+ users'
      },
      {
        company: 'StartupXYZ',
        position: 'Frontend Developer',
        duration: '2020 - 2022',
        description: 'Built responsive web applications using React and modern CSS frameworks'
      }
    ],
    education: [
      {
        school: 'University of California, Berkeley',
        degree: 'Bachelor of Science in Computer Science',
        year: '2020'
      }
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'GraphQL']
  });

  const [newSkill, setNewSkill] = useState('');

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to a backend
    console.log('Profile saved:', profile);
  };

  const addSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile({
        ...profile,
        skills: [...profile.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const addExperience = () => {
    setProfile({
      ...profile,
      experience: [
        ...profile.experience,
        {
          company: '',
          position: '',
          duration: '',
          description: ''
        }
      ]
    });
  };

  const updateExperience = (index, field, value) => {
    const updatedExperience = [...profile.experience];
    updatedExperience[index][field] = value;
    setProfile({
      ...profile,
      experience: updatedExperience
    });
  };

  const removeExperience = (index) => {
    setProfile({
      ...profile,
      experience: profile.experience.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-amber-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-2xl p-8 sticky top-32 border border-stone-200 hover:shadow-3xl transition-all duration-300">
              {/* Profile Picture */}
              <div className="text-center mb-6">
                <div className="relative inline-block group">
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-4xl font-bold text-stone-800 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                    {profile.firstName[0]}{profile.lastName[0]}
                  </div>
                  <button className="absolute bottom-0 right-0 bg-stone-800 text-white p-3 rounded-full hover:bg-stone-700 transition-all duration-300 hover:scale-110 shadow-lg group">
                    <Camera className="h-4 w-4" />
                    <div className="absolute -inset-1 bg-stone-800/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
                {isEditing ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={profile.firstName}
                      onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                      className="w-full text-center text-xl font-bold text-stone-800 bg-stone-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      value={profile.lastName}
                      onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                      className="w-full text-center text-xl font-bold text-stone-800 bg-stone-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Last Name"
                    />
                    <input
                      type="text"
                      value={profile.title}
                      onChange={(e) => setProfile({...profile, title: e.target.value})}
                      className="w-full text-center text-yellow-600 font-semibold bg-stone-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Job Title"
                    />
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-stone-800">
                      {profile.firstName} {profile.lastName}
                    </h2>
                    <p className="text-yellow-600 font-semibold">{profile.title}</p>
                  </>
                )}
                <div className="flex items-center justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-stone-600">4.9 Rating</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-stone-600 p-3 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors duration-200">
                  <Mail className="h-4 w-4 mr-3 text-yellow-500" />
                  {isEditing ? (
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                      className="flex-1 text-sm bg-transparent focus:outline-none"
                    />
                  ) : (
                    <span className="text-sm">{profile.email}</span>
                  )}
                </div>
                <div className="flex items-center text-stone-600 p-3 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors duration-200">
                  <Phone className="h-4 w-4 mr-3 text-yellow-500" />
                  {isEditing ? (
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({...profile, phone: e.target.value})}
                      className="flex-1 text-sm bg-transparent focus:outline-none"
                    />
                  ) : (
                    <span className="text-sm">{profile.phone}</span>
                  )}
                </div>
                <div className="flex items-center text-stone-600 p-3 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors duration-200">
                  <MapPin className="h-4 w-4 mr-3 text-yellow-500" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.location}
                      onChange={(e) => setProfile({...profile, location: e.target.value})}
                      className="flex-1 text-sm bg-transparent focus:outline-none"
                    />
                  ) : (
                    <span className="text-sm">{profile.location}</span>
                  )}
                </div>
                <div className="flex items-center text-stone-600 p-3 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors duration-200">
                  <Calendar className="h-4 w-4 mr-3 text-yellow-500" />
                  <span className="text-sm">Available for hire</span>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-stone-800 mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-500" />
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {profile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 text-sm font-medium rounded-full hover:from-yellow-200 hover:to-amber-200 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center"
                    >
                      {skill}
                      {isEditing && (
                        <button
                          onClick={() => removeSkill(skill)}
                          className="ml-2 text-red-500 hover:text-red-700"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      )}
                    </span>
                  ))}
                </div>
                {isEditing && (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                      className="flex-1 px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                      placeholder="Add new skill"
                    />
                    <button
                      onClick={addSkill}
                      className="px-3 py-2 bg-yellow-400 text-stone-800 rounded-lg hover:bg-yellow-300 transition-colors duration-200"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={isEditing ? handleSave : () => setIsEditing(true)}
                  className="group relative w-full bg-gradient-to-r from-stone-800 to-stone-700 hover:from-stone-700 hover:to-stone-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center transform"
                >
                  {isEditing ? <Save className="mr-2 h-4 w-4" /> : <Edit3 className="mr-2 h-4 w-4" />}
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                  <div className="absolute -inset-1 bg-stone-800/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="group relative w-full border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-stone-800 py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center transform">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                  <div className="absolute -inset-1 bg-yellow-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-stone-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-stone-800 flex items-center">
                  <User className="mr-3 h-6 w-6 text-yellow-500" />
                  About Me
                </h3>
              </div>
              {isEditing ? (
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({...profile, bio: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none hover:border-stone-400 transition-colors duration-300"
                />
              ) : (
                <p className="text-stone-600 leading-relaxed text-lg">{profile.bio}</p>
              )}
            </div>

            {/* Experience Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-stone-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-stone-800 flex items-center">
                  <Briefcase className="mr-3 h-6 w-6 text-yellow-500" />
                  Work Experience
                </h3>
                {isEditing && (
                  <button
                    onClick={addExperience}
                    className="text-yellow-600 hover:text-yellow-700 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-50 transition-all duration-300 flex items-center"
                  >
                    <Plus className="mr-1 h-4 w-4" />
                    Add Experience
                  </button>
                )}
              </div>
              <div className="space-y-6">
                {profile.experience.map((exp, index) => (
                  <div key={index} className="relative border-l-4 border-yellow-400 pl-6 pb-6 hover:border-yellow-500 transition-colors duration-300">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        {isEditing ? (
                          <div className="space-y-3">
                            <input
                              type="text"
                              value={exp.position}
                              onChange={(e) => updateExperience(index, 'position', e.target.value)}
                              className="w-full text-xl font-semibold text-stone-800 bg-stone-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                              placeholder="Position"
                            />
                            <input
                              type="text"
                              value={exp.company}
                              onChange={(e) => updateExperience(index, 'company', e.target.value)}
                              className="w-full text-yellow-600 font-medium bg-stone-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                              placeholder="Company"
                            />
                            <input
                              type="text"
                              value={exp.duration}
                              onChange={(e) => updateExperience(index, 'duration', e.target.value)}
                              className="w-full text-stone-500 text-sm bg-stone-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                              placeholder="Duration"
                            />
                            <textarea
                              value={exp.description}
                              onChange={(e) => updateExperience(index, 'description', e.target.value)}
                              className="w-full text-stone-600 bg-stone-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                              rows={3}
                              placeholder="Description"
                            />
                          </div>
                        ) : (
                          <>
                            <h4 className="text-xl font-semibold text-stone-800 hover:text-yellow-600 transition-colors duration-300">{exp.position}</h4>
                            <p className="text-yellow-600 font-medium">{exp.company}</p>
                            <p className="text-stone-500 text-sm mb-3">{exp.duration}</p>
                            <p className="text-stone-600">{exp.description}</p>
                          </>
                        )}
                      </div>
                      {isEditing && (
                        <button
                          onClick={() => removeExperience(index)}
                          className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-all duration-300"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-stone-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-stone-800 flex items-center">
                  <GraduationCap className="mr-3 h-6 w-6 text-yellow-500" />
                  Education
                </h3>
                {isEditing && (
                  <button className="text-yellow-600 hover:text-yellow-700 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-50 transition-all duration-300">
                    + Add Education
                  </button>
                )}
              </div>
              <div className="space-y-4">
                {profile.education.map((edu, index) => (
                  <div key={index} className="relative border-l-4 border-yellow-400 pl-6 hover:border-yellow-500 transition-colors duration-300">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-stone-800 hover:text-yellow-600 transition-colors duration-300">{edu.degree}</h4>
                        <p className="text-yellow-600 font-medium">{edu.school}</p>
                        <p className="text-stone-500 text-sm">{edu.year}</p>
                      </div>
                      {isEditing && (
                        <button className="text-stone-400 hover:text-stone-600 p-2 rounded-lg hover:bg-stone-50 transition-all duration-300">
                          <Edit3 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-stone-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-stone-800 flex items-center">
                  <Award className="mr-3 h-6 w-6 text-yellow-500" />
                  Achievements & Certifications
                </h3>
                {isEditing && (
                  <button className="text-yellow-600 hover:text-yellow-700 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-50 transition-all duration-300">
                    + Add Achievement
                  </button>
                )}
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6 border border-yellow-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center mb-3">
                    <Award className="h-6 w-6 text-yellow-500 mr-2" />
                    <h4 className="font-semibold text-stone-800">AWS Certified Developer</h4>
                  </div>
                  <p className="text-stone-600 text-sm">Amazon Web Services • 2023</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6 border border-yellow-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center mb-3">
                    <Award className="h-6 w-6 text-yellow-500 mr-2" />
                    <h4 className="font-semibold text-stone-800">React Expert Certification</h4>
                  </div>
                  <p className="text-stone-600 text-sm">Meta • 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;