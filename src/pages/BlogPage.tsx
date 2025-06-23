import React from 'react';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const BlogPage = () => {
  const featuredPost = {
    id: 1,
    title: 'The Future of Remote Work: Trends and Opportunities in 2024',
    excerpt: 'Explore how remote work is evolving and discover the skills you need to thrive in a distributed workforce.',
    image: '💻',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Career Trends'
  };

  const blogPosts = [
    {
      id: 2,
      title: 'How to Negotiate Your Salary Like a Pro',
      excerpt: 'Master the art of salary negotiation with these proven strategies and tips from HR experts.',
      image: '💰',
      author: 'Michael Chen',
      date: 'March 12, 2024',
      readTime: '6 min read',
      category: 'Career Growth'
    },
    {
      id: 3,
      title: 'Building a Personal Brand That Gets You Hired',
      excerpt: 'Learn how to create a compelling personal brand that attracts recruiters and hiring managers.',
      image: '🎯',
      author: 'Emily Rodriguez',
      date: 'March 10, 2024',
      readTime: '7 min read',
      category: 'Personal Development'
    },
    {
      id: 4,
      title: 'Top 10 In-Demand Skills for 2024',
      excerpt: 'Discover the most sought-after skills employers are looking for and how to develop them.',
      image: '🚀',
      author: 'David Kim',
      date: 'March 8, 2024',
      readTime: '5 min read',
      category: 'Skills Development'
    },
    {
      id: 5,
      title: 'Mastering Virtual Interviews: A Complete Guide',
      excerpt: 'Ace your next virtual interview with these expert tips on technology, presentation, and communication.',
      image: '📹',
      author: 'Lisa Wang',
      date: 'March 5, 2024',
      readTime: '9 min read',
      category: 'Interview Tips'
    },
    {
      id: 6,
      title: 'Career Transition: Making the Switch to Tech',
      excerpt: 'A comprehensive guide for professionals looking to transition into the technology industry.',
      image: '⚡',
      author: 'James Miller',
      date: 'March 3, 2024',
      readTime: '10 min read',
      category: 'Career Change'
    },
    {
      id: 7,
      title: 'The Psychology of Job Hunting: Staying Motivated',
      excerpt: 'Learn how to maintain mental health and motivation throughout your job search journey.',
      image: '🧠',
      author: 'Dr. Rachel Green',
      date: 'March 1, 2024',
      readTime: '8 min read',
      category: 'Mental Health'
    }
  ];

  const categories = ['All', 'Career Growth', 'Skills Development', 'Interview Tips', 'Career Change', 'Personal Development'];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              CAREER
              <span className="block text-yellow-400">INSIGHTS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert advice, industry insights, and actionable tips to accelerate your career growth
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">Featured Article</h2>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center p-8">
                  <div className="text-8xl">{featuredPost.image}</div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4 hover:text-yellow-600 cursor-pointer transition-colors duration-300">
                    {featuredPost.title}
                  </h3>
                  <p className="text-stone-600 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-stone-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        <span className="text-sm">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <button className="flex items-center text-yellow-600 hover:text-yellow-700 font-semibold transition-colors duration-300">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-stone-300 text-stone-600 hover:bg-yellow-400 hover:text-stone-800 hover:border-yellow-400 transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-stone-200 overflow-hidden"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-amber-500 p-8 text-center">
                  <div className="text-6xl">{post.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-3 hover:text-yellow-600 cursor-pointer transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-stone-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-stone-500 text-xs mb-4">
                    <div className="flex items-center mr-4">
                      <User className="h-3 w-3 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="w-full bg-stone-800 hover:bg-stone-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-stone-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-stone-800 mb-6">
              Stay Updated with Career Tips
            </h3>
            <p className="text-stone-700 text-xl mb-8">
              Subscribe to our newsletter and get the latest career insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border-2 border-stone-800 focus:outline-none focus:border-stone-600"
              />
              <button className="bg-stone-800 hover:bg-stone-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;