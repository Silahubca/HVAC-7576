import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiWind, FiPhone, FiCheckCircle, FiArrowRight, FiRefreshCw } = FiIcons;

const DuctCleaning = () => {
  return (
    <>
      <Helmet>
        <title>Professional Duct Cleaning Services | Improve Air Quality & Efficiency</title>
        <meta name="description" content="Professional duct cleaning services to improve indoor air quality and HVAC efficiency. Remove dust, allergens, and contaminants from your ductwork." />
        <meta name="keywords" content="duct cleaning, air duct cleaning, ductwork cleaning, HVAC cleaning, indoor air quality" />
        <link rel="canonical" href="https://prohvacservices.com/services/duct-cleaning" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiRefreshCw} className="w-12 h-12 text-yellow-400 mr-4" />
                <h1 className="text-4xl lg:text-6xl font-bold">Duct Cleaning</h1>
              </div>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Professional duct cleaning services to improve your indoor air quality, increase HVAC efficiency, and create a healthier home environment.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:555-HVAC-PRO"
                  className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                  Call (555) HVAC-PRO
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-800 transition-colors flex items-center justify-center"
                >
                  Schedule Cleaning
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional duct cleaning service"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Duct Cleaning Services</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our professional duct cleaning service removes years of accumulated dust, debris, and contaminants from your HVAC system. This detailed page is currently being developed to provide you with complete information about our duct cleaning process, benefits, and pricing.
            </p>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Offer:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-500 mr-3" />
                    Complete ductwork cleaning
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-500 mr-3" />
                    Vent and register cleaning
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-500 mr-3" />
                    HVAC system sanitization
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-500 mr-3" />
                    Air quality testing
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-500 mr-3" />
                    Filter replacement
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-500 mr-3" />
                    System inspection
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              In the meantime, please contact us directly to learn more about our duct cleaning services, schedule an inspection, or get a free quote.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:555-HVAC-PRO"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                Call (555) HVAC-PRO
              </a>
              <Link
                to="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center justify-center"
              >
                Get Free Quote
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DuctCleaning;