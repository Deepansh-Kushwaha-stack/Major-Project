import React from 'react';
import { Mail, Phone, Instagram, MapPin, Clock, Send } from 'lucide-react';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            GET IN
            <span className="block text-yellow-400">TOUCH</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-8">
                CONTACT
                <span className="block text-yellow-600">INFORMATION</span>
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Ready to take the next step in your career journey? Our team is here to help you succeed. 
                Reach out to us through any of the following channels.
              </p>

              <div className="space-y-6">
                <div className="flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="bg-yellow-400 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-stone-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800">Phone</h3>
                    <p className="text-stone-600">9997502725</p>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="bg-yellow-400 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-stone-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800">Contact Person</h3>
                    <p className="text-stone-600">Deepansh Kushwaha</p>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="bg-yellow-400 p-3 rounded-full mr-4">
                    <Instagram className="h-6 w-6 text-stone-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800">Instagram</h3>
                    <p className="text-stone-600">__deppanshh__</p>
                  </div>
                </div>

                <div className="flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="bg-yellow-400 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-stone-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800">Business Hours</h3>
                    <p className="text-stone-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-stone-600">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-stone-200">
                <h3 className="text-2xl font-bold text-stone-800 mb-6">Send us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Subject</label>
                    <select className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300">
                      <option>General Inquiry</option>
                      <option>Job Seeker Support</option>
                      <option>Employer Services</option>
                      <option>Technical Support</option>
                      <option>Partnership Opportunities</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-stone-800 hover:bg-stone-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              FREQUENTLY ASKED
              <span className="block text-yellow-400">QUESTIONS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our platform and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'How do I create a profile on JobConnect?',
                answer: 'Simply click the "Sign Up" button and follow the registration process. You can create either a job seeker or recruiter account depending on your needs.'
              },
              {
                question: 'Is JobConnect free to use?',
                answer: 'Yes, basic job searching and profile creation are completely free. We also offer premium features for enhanced visibility and additional tools.'
              },
              {
                question: 'How do I apply for jobs?',
                answer: 'Once you find a job you\'re interested in, click "Apply Now" and follow the application process. Make sure your profile is complete for the best results.'
              },
              {
                question: 'Can employers contact me directly?',
                answer: 'Yes, if your profile is set to visible, employers can reach out to you directly through our messaging system for relevant opportunities.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;