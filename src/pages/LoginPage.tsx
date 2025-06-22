import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Grid as Bridge } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'candidate'
  });

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-300/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-md w-full">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4 group">
              <div className="relative">
                <Bridge className="h-12 w-12 text-yellow-400 group-hover:scale-110 transition-all duration-300 group-hover:rotate-12" />
                <div className="absolute -inset-2 bg-yellow-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-3xl font-bold text-yellow-400 tracking-wider">HIREBRIDGE</span>
            </div>
            <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
            <p className="text-gray-300 mt-2">Sign in to bridge your career journey</p>
          </div>

          {/* Login Form */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
            <form className="space-y-6">
              {/* User Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">I am a:</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, userType: 'candidate'})}
                    className={`group relative py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                      formData.userType === 'candidate'
                        ? 'bg-gradient-to-r from-yellow-400 to-amber-400 text-stone-800 shadow-lg'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Job Seeker
                    {formData.userType === 'candidate' && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/30 to-amber-400/30 rounded-lg blur opacity-100"></div>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, userType: 'recruiter'})}
                    className={`group relative py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                      formData.userType === 'recruiter'
                        ? 'bg-gradient-to-r from-yellow-400 to-amber-400 text-stone-800 shadow-lg'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Recruiter
                    {formData.userType === 'recruiter' && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/30 to-amber-400/30 rounded-lg blur opacity-100"></div>
                    )}
                  </button>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-hover:text-yellow-400 transition-colors duration-300" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 placeholder-gray-500 transition-all duration-300 hover:bg-white focus:bg-white hover:shadow-lg"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-hover:text-yellow-400 transition-colors duration-300" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full pl-10 pr-12 py-3 bg-white/90 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 placeholder-gray-500 transition-all duration-300 hover:bg-white focus:bg-white hover:shadow-lg"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center group cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-yellow-400 focus:ring-yellow-400 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-300 group-hover:text-yellow-300 transition-colors duration-200">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors duration-200 hover:underline">
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-stone-800 py-3 px-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
              >
                Sign In
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/30 to-amber-400/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>

            {/* Divider */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-transparent text-gray-400">Or continue with</span>
                </div>
              </div>
            </div>

            {/* Social Login */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="group relative w-full bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/30">
                Google
                <div className="absolute -inset-1 bg-white/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group relative w-full bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/30">
                LinkedIn
                <div className="absolute -inset-1 bg-white/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-300">
                Don't have an account?{' '}
                <Link to="/signup" className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors duration-200 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;