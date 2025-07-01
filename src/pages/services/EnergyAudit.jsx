import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTrendingUp, FiPhone, FiCheckCircle, FiArrowRight, FiDollarSign } = FiIcons;

const EnergyAudit = () => {
  return (
    <>
      <Helmet>
        <title>HVAC Energy Audit Services | Improve Efficiency & Save Money</title>
        <meta name="description" content="Professional HVAC energy audit services to identify inefficiencies and save money on energy bills. Get a comprehensive energy assessment for your home." />
        <meta name="keywords" content="energy audit, HVAC efficiency, energy assessment, energy savings, home energy audit" />
        <link rel="canonical" href="https://prohvacservices.com/services/energy-audit" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiTrendingUp} className="w-12 h-12 text-yellow-400 mr-4" />
                <h1 className="text-4xl lg:text-6xl font-bold">Energy Audit</h1>
              </div>
              <p className="text-xl text-green-100 leading-relaxed mb-8">
                Professional HVAC energy audit services to identify inefficiencies, reduce energy costs, and improve your home's comfort and performance.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:555-HVAC-PRO"
                  className="bg-yellow-400 text-green-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                  Call (555) HVAC-PRO
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-800 transition-colors flex items-center justify-center"
                >
                  Schedule Audit
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
                alt="Energy efficiency assessment"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Energy Audit Services</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our professional energy audit service provides a detailed assessment of your HVAC system's efficiency and identifies opportunities for energy savings. This comprehensive page is currently being developed to provide you with complete information about our audit process, analysis methods, and potential savings.
            </p>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Our Energy Audit Includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mr-3" />
                    HVAC system efficiency analysis
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mr-3" />
                    Ductwork inspection
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mr-3" />
                    Insulation assessment
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mr-3" />
                    Air leakage testing
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <SafeIcon icon={FiDollarSign} className="w-5 h-5 text-green-500 mr-3" />
                    Energy cost analysis
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-green-500 mr-3" />
                    Efficiency recommendations
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mr-3" />
                    ROI calculations
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mr-3" />
                    Detailed report
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              Contact us today to schedule your comprehensive energy audit and start saving money on your energy bills while improving your home's comfort.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:555-HVAC-PRO"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                Call (555) HVAC-PRO
              </a>
              <Link
                to="/contact"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 hover:text-white transition-colors inline-flex items-center justify-center"
              >
                Schedule Energy Audit
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default EnergyAudit;