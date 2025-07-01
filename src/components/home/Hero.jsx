import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPhone, FiCalendar, FiShield, FiClock, FiStar, FiMapPin } = FiIcons;

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiShield} className="w-5 h-5 text-yellow-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-400" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiClock} className="w-5 h-5 text-yellow-400" />
                <span>24/7 Emergency</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your Trusted
                <span className="block text-yellow-400">HVAC Experts</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Professional heating, cooling, and air quality solutions for your home and business
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiShield} className="w-4 h-4 text-primary-800" />
                </div>
                <span className="font-medium">15+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiClock} className="w-4 h-4 text-primary-800" />
                </div>
                <span className="font-medium">Same-Day Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiStar} className="w-4 h-4 text-primary-800" />
                </div>
                <span className="font-medium">100% Satisfaction</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiMapPin} className="w-4 h-4 text-primary-800" />
                </div>
                <span className="font-medium">Local & Trusted</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:555-HVAC-PRO"
                className="bg-yellow-400 text-primary-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-3 group"
              >
                <SafeIcon icon={FiPhone} className="w-6 h-6 group-hover:animate-bounce" />
                <span>Call (555) HVAC-PRO</span>
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-800 transition-colors flex items-center justify-center space-x-3"
              >
                <SafeIcon icon={FiCalendar} className="w-6 h-6" />
                <span>Schedule Service</span>
              </Link>
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-600 bg-opacity-90 p-4 rounded-lg border border-red-400">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiClock} className="w-6 h-6 text-yellow-400 animate-pulse" />
                <div>
                  <p className="font-semibold">Emergency Service Available 24/7</p>
                  <p className="text-sm text-red-100">No extra charges for nights, weekends, or holidays</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional HVAC technician working on air conditioning unit"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white text-gray-800 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiStar} className="w-6 h-6 text-yellow-500" />
                  <div>
                    <p className="font-bold text-lg">4.9/5</p>
                    <p className="text-sm text-gray-600">Customer Rating</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-primary-800 p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="font-bold text-2xl">500+</p>
                  <p className="text-sm font-medium">Happy Customers</p>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl opacity-20 blur-xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Service Areas Banner */}
      <div className="bg-primary-800 bg-opacity-50 border-t border-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiMapPin} className="w-4 h-4" />
              <span>Serving Greater Metro Area</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="hidden sm:flex items-center space-x-2">
              <SafeIcon icon={FiShield} className="w-4 h-4" />
              <span>Licensed, Bonded & Insured</span>
            </div>
            <div className="hidden md:block">•</div>
            <div className="hidden md:flex items-center space-x-2">
              <SafeIcon icon={FiClock} className="w-4 h-4" />
              <span>Same-Day Service Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;