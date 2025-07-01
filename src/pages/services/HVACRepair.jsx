import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTool, FiPhone, FiCheckCircle, FiArrowRight, FiClock, FiShield, FiAlertTriangle } = FiIcons;

const HVACRepair = () => {
  const commonRepairs = [
    {
      problem: 'No Heat/Cooling',
      description: 'System not producing heat or cool air',
      causes: ['Thermostat issues', 'Power problems', 'Component failure', 'Refrigerant leaks'],
      urgency: 'High'
    },
    {
      problem: 'Poor Airflow',
      description: 'Weak or restricted air circulation',
      causes: ['Dirty filters', 'Blocked vents', 'Ductwork issues', 'Blower problems'],
      urgency: 'Medium'
    },
    {
      problem: 'Strange Noises',
      description: 'Unusual sounds from HVAC system',
      causes: ['Loose parts', 'Worn bearings', 'Belt problems', 'Motor issues'],
      urgency: 'Medium'
    },
    {
      problem: 'High Energy Bills',
      description: 'Sudden increase in utility costs',
      causes: ['Dirty coils', 'Leaky ducts', 'Aging equipment', 'Poor maintenance'],
      urgency: 'Low'
    },
    {
      problem: 'Frequent Cycling',
      description: 'System turning on/off repeatedly',
      causes: ['Thermostat problems', 'Dirty filters', 'Refrigerant issues', 'Electrical problems'],
      urgency: 'High'
    },
    {
      problem: 'Water Leaks',
      description: 'Water around indoor or outdoor unit',
      causes: ['Clogged drain', 'Frozen coils', 'Damaged pan', 'Refrigerant leaks'],
      urgency: 'High'
    }
  ];

  const repairProcess = [
    {
      step: 1,
      title: 'Emergency Response',
      description: 'Fast response for urgent repairs',
      time: '30-60 min'
    },
    {
      step: 2,
      title: 'Diagnosis',
      description: 'Thorough system inspection and testing',
      time: '30-45 min'
    },
    {
      step: 3,
      title: 'Estimate',
      description: 'Clear explanation and upfront pricing',
      time: '15-30 min'
    },
    {
      step: 4,
      title: 'Repair',
      description: 'Professional repair with quality parts',
      time: 'Varies'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional HVAC Repair Services | Fast & Reliable Heating & Cooling Repair</title>
        <meta name="description" content="Expert HVAC repair services for all makes and models. 24/7 emergency repairs, same-day service, and experienced technicians. Call (555) HVAC-PRO now!" />
        <meta name="keywords" content="HVAC repair, heating repair, AC repair, furnace repair, emergency HVAC, same day repair" />
        <link rel="canonical" href="https://prohvacservices.com/services/hvac-repair" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiTool} className="w-12 h-12 text-yellow-400 mr-4" />
                <h1 className="text-4xl lg:text-6xl font-bold">HVAC Repair</h1>
              </div>
              <p className="text-xl text-red-100 leading-relaxed mb-8">
                Fast, reliable HVAC repairs for all makes and models. Our expert technicians are available 24/7 for emergency repairs to restore your comfort quickly.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:555-HVAC-PRO"
                  className="bg-yellow-400 text-red-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                  Call (555) HVAC-PRO
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-800 transition-colors flex items-center justify-center"
                >
                  Schedule Repair
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="HVAC technician performing repair"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Repairs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Common HVAC Repairs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced technicians can diagnose and repair all types of HVAC problems quickly and efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonRepairs.map((repair, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{repair.problem}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    repair.urgency === 'High' ? 'bg-red-100 text-red-700' :
                    repair.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {repair.urgency}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">{repair.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Common Causes:</h4>
                  <ul className="space-y-2">
                    {repair.causes.map((cause, causeIndex) => (
                      <li key={causeIndex} className="flex items-center text-gray-600 text-sm">
                        <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-red-500 mr-3" />
                        {cause}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Repair Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency response to completed repairs, we follow a proven process to get your system running again.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                  {step.time}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <SafeIcon icon={FiAlertTriangle} className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl font-bold mb-6">Need Emergency Repair?</h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Don't let HVAC problems disrupt your comfort. Our emergency repair team is standing by 24/7.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:555-HVAC-PRO"
                className="bg-yellow-400 text-red-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                Call (555) HVAC-PRO
              </a>
              <Link
                to="/emergency-service"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-600 transition-colors inline-flex items-center justify-center"
              >
                Emergency Service
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HVACRepair;