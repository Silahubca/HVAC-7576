import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiClock, FiAlertTriangle, FiShield, FiTool, FiCheckCircle, FiUsers } = FiIcons;

const EmergencyService = () => {
  const emergencyTypes = [
    {
      icon: FiAlertTriangle,
      title: 'No Heat in Winter',
      description: 'When your heating system fails during cold weather, every minute counts.',
      urgency: 'Critical',
      responseTime: '30 minutes',
      tips: ['Check thermostat settings', 'Verify power supply', 'Check circuit breakers']
    },
    {
      icon: FiAlertTriangle,
      title: 'AC Failure in Summer',
      description: 'Air conditioning breakdowns during hot weather can be dangerous.',
      urgency: 'Critical',
      responseTime: '30 minutes',
      tips: ['Check air filter', 'Verify thermostat', 'Check outdoor unit']
    },
    {
      icon: FiAlertTriangle,
      title: 'Gas Leaks',
      description: 'Gas leaks are extremely dangerous and require immediate attention.',
      urgency: 'Immediate',
      responseTime: '15 minutes',
      tips: ['Leave the area immediately', 'Call from safe location', 'Do not use electrical switches']
    },
    {
      icon: FiAlertTriangle,
      title: 'Carbon Monoxide Detection',
      description: 'CO alarms indicate a potentially life-threatening situation.',
      urgency: 'Immediate',
      responseTime: '15 minutes',
      tips: ['Evacuate immediately', 'Get fresh air', 'Call emergency services']
    },
    {
      icon: FiTool,
      title: 'Water Leaks from HVAC',
      description: 'Water damage from HVAC systems can cause significant property damage.',
      urgency: 'High',
      responseTime: '45 minutes',
      tips: ['Turn off water supply', 'Remove standing water', 'Document damage']
    },
    {
      icon: FiTool,
      title: 'Strange Noises or Smells',
      description: 'Unusual sounds or odors may indicate serious system problems.',
      urgency: 'High',
      responseTime: '60 minutes',
      tips: ['Turn off system', 'Note specific sounds/smells', 'Clear area around unit']
    }
  ];

  return (
    <>
      <Helmet>
        <title>24/7 Emergency HVAC Service | Immediate Response Available</title>
        <meta name="description" content="24/7 emergency HVAC service available. Fast response for heating, cooling emergencies, gas leaks, and system failures. Call (555) HVAC-PRO now!" />
        <meta name="keywords" content="emergency HVAC, 24/7 HVAC service, heating emergency, AC emergency, gas leak, HVAC repair" />
        <link rel="canonical" href="https://prohvacservices.com/emergency-service" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <SafeIcon icon={FiAlertTriangle} className="w-16 h-16 text-yellow-400 mr-6 animate-pulse" />
              <h1 className="text-4xl lg:text-6xl font-bold">
                Emergency HVAC Service
              </h1>
            </div>
            <p className="text-xl text-red-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              When HVAC emergencies strike, we're here 24/7/365. Fast response times, expert technicians, and immediate solutions to restore your comfort and safety.
            </p>
            
            {/* Emergency CTA */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Call Now for Immediate Help</h2>
              <a
                href="tel:555-HVAC-PRO"
                className="block bg-yellow-400 text-red-600 text-center py-6 rounded-xl font-bold text-4xl hover:bg-yellow-300 transition-colors mb-4 shadow-lg"
              >
                (555) HVAC-PRO
              </a>
              <p className="text-red-100">Available 24 hours a day, 7 days a week</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Common HVAC Emergencies We Handle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our emergency technicians are equipped to handle any HVAC crisis. Here are the most common emergencies we respond to.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyTypes.map((emergency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                    emergency.urgency === 'Immediate' ? 'bg-red-100' :
                    emergency.urgency === 'Critical' ? 'bg-orange-100' : 'bg-yellow-100'
                  }`}>
                    <SafeIcon icon={emergency.icon} className={`w-6 h-6 ${
                      emergency.urgency === 'Immediate' ? 'text-red-600' :
                      emergency.urgency === 'Critical' ? 'text-orange-600' : 'text-yellow-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{emergency.title}</h3>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className={`px-2 py-1 rounded-full font-medium ${
                        emergency.urgency === 'Immediate' ? 'bg-red-100 text-red-700' :
                        emergency.urgency === 'Critical' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {emergency.urgency}
                      </span>
                      <span className="text-gray-500">•</span>
                      <span className="text-primary-600 font-medium">{emergency.responseTime}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{emergency.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What to do while waiting:</h4>
                  <ul className="space-y-2">
                    {emergency.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start text-sm text-gray-600">
                        <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="tel:555-HVAC-PRO"
                  className="block bg-red-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Call Emergency Line
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Response Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Emergency Response Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you call our emergency line, here's exactly what happens to get you help fast.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Call Received', description: 'Our emergency dispatcher takes your call and assesses the situation', time: '0-2 min' },
              { step: 2, title: 'Technician Dispatched', description: 'Nearest qualified technician is immediately dispatched to your location', time: '2-5 min' },
              { step: 3, title: 'En Route Updates', description: 'You receive ETA updates and safety instructions if needed', time: '5-30 min' },
              { step: 4, title: 'Problem Resolved', description: 'Expert diagnosis and immediate repair to restore your comfort', time: '30-90 min' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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

      {/* Safety Information */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Emergency Safety Guidelines
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your safety is our top priority. Follow these guidelines during HVAC emergencies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiShield} className="w-8 h-8 text-red-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Immediate Dangers</h3>
              </div>
              <div className="space-y-4">
                {[
                  'Gas smell - Leave immediately and call from outside',
                  'Carbon monoxide alarm - Evacuate and get fresh air',
                  'Electrical sparks - Turn off power at breaker',
                  'Water flooding - Turn off water supply if safe'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <SafeIcon icon={FiAlertTriangle} className="w-5 h-5 text-red-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiUsers} className="w-8 h-8 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">What We Need to Know</h3>
              </div>
              <div className="space-y-4">
                {[
                  'Your exact location and contact information',
                  'Type of emergency and current symptoms',
                  'System make, model, and age if known',
                  'Any immediate safety concerns'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Don't Wait - Get Help Now</h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              HVAC emergencies can be dangerous and costly if not addressed immediately. Our expert technicians are standing by to help.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
              <a
                href="tel:555-HVAC-PRO"
                className="bg-yellow-400 text-red-600 px-8 py-4 rounded-lg font-bold text-2xl hover:bg-yellow-300 transition-colors inline-flex items-center"
              >
                <SafeIcon icon={FiPhone} className="w-6 h-6 mr-3" />
                (555) HVAC-PRO
              </a>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 text-red-100">
                  <div className="flex items-center">
                    <SafeIcon icon={FiClock} className="w-5 h-5 mr-2" />
                    <span>24/7/365</span>
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiShield} className="w-5 h-5 mr-2" />
                    <span>Licensed & Insured</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-red-200">
              Save our number in your phone: (555) HVAC-PRO - You never know when you might need it!
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default EmergencyService;