import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiWind, FiPhone, FiCheckCircle, FiArrowRight, FiSun } = FiIcons;

const CoolingServices = () => {
  const coolingServices = [
    {
      title: 'Central Air Conditioning',
      description: 'Complete central AC installation, repair, and maintenance services',
      features: ['High-efficiency units', 'Ductwork services', 'Smart thermostats', 'Energy optimization'],
      icon: FiWind
    },
    {
      title: 'Ductless Mini-Splits',
      description: 'Flexible ductless cooling solutions for any space',
      features: ['Zone control', 'Easy installation', 'Quiet operation', 'Energy efficient'],
      icon: FiWind
    },
    {
      title: 'Heat Pumps',
      description: 'Efficient cooling and heating with heat pump systems',
      features: ['Year-round comfort', 'Energy savings', 'Environmentally friendly', 'Smart controls'],
      icon: FiSun
    },
    {
      title: 'Commercial Cooling',
      description: 'Large-scale cooling solutions for businesses',
      features: ['Rooftop units', 'Chiller systems', 'VRF systems', 'Energy management'],
      icon: FiWind
    }
  ];

  const coolingProblems = [
    {
      problem: 'No Cool Air',
      symptoms: ['AC not starting', 'Warm air blowing', 'System cycling'],
      urgency: 'Emergency'
    },
    {
      problem: 'Poor Cooling',
      symptoms: ['Insufficient cooling', 'Hot spots', 'Long run times'],
      urgency: 'High'
    },
    {
      problem: 'Ice Formation',
      symptoms: ['Frozen coils', 'Ice on unit', 'Reduced airflow'],
      urgency: 'High'
    },
    {
      problem: 'High Humidity',
      symptoms: ['Muggy feeling', 'Condensation', 'Mold growth'],
      urgency: 'Medium'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Air Conditioning Services | AC Repair & Installation</title>
        <meta name="description" content="Expert air conditioning services including AC repair, installation, and maintenance. Stay cool with professional cooling solutions and emergency AC repair." />
        <meta name="keywords" content="air conditioning, AC repair, AC installation, cooling services, ductless mini split, heat pump cooling" />
        <link rel="canonical" href="https://prohvacservices.com/services/cooling" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 to-cyan-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiWind} className="w-12 h-12 text-yellow-400 mr-4" />
                <h1 className="text-4xl lg:text-6xl font-bold">Cooling Services</h1>
              </div>
              <p className="text-xl text-cyan-100 leading-relaxed mb-8">
                Professional air conditioning services to keep you cool and comfortable. From AC installation to emergency repairs, we handle all your cooling needs.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:555-HVAC-PRO"
                  className="bg-yellow-400 text-cyan-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                  Call (555) HVAC-PRO
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-cyan-800 transition-colors flex items-center justify-center"
                >
                  Schedule Service
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
                alt="Air conditioning service"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cooling Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Cooling Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From traditional central air to modern ductless systems, we provide comprehensive cooling services for all your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coolingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mr-4">
                    <SafeIcon icon={service.icon} className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-cyan-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Common AC Problems</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We quickly diagnose and repair all types of air conditioning issues to restore your cool comfort.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coolingProblems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{problem.problem}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  problem.urgency === 'Emergency' ? 'bg-red-100 text-red-700' :
                  problem.urgency === 'High' ? 'bg-orange-100 text-orange-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {problem.urgency}
                </span>
                <ul className="space-y-2 text-sm text-gray-600">
                  {problem.symptoms.map((symptom, symptomIndex) => (
                    <li key={symptomIndex}>• {symptom}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Beat the Heat</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Don't suffer through another hot day. Contact us for fast, reliable air conditioning services and emergency AC repair.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:555-HVAC-PRO"
                className="bg-yellow-400 text-cyan-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                Call (555) HVAC-PRO
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center justify-center"
              >
                Schedule AC Service
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CoolingServices;