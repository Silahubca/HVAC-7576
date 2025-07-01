import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiThermometer, FiPhone, FiCheckCircle, FiArrowRight, FiSun } = FiIcons;

const HeatingServices = () => {
  const heatingServices = [
    {
      title: 'Furnace Services',
      description: 'Complete furnace installation, repair, and maintenance for all fuel types',
      features: ['Gas furnaces', 'Electric furnaces', 'Oil furnaces', 'High-efficiency models'],
      icon: FiThermometer
    },
    {
      title: 'Heat Pump Services',
      description: 'Energy-efficient heat pump solutions for year-round comfort',
      features: ['Air source heat pumps', 'Geothermal systems', 'Hybrid systems', 'Smart controls'],
      icon: FiSun
    },
    {
      title: 'Boiler Services',
      description: 'Professional boiler installation, repair, and maintenance services',
      features: ['Steam boilers', 'Hot water boilers', 'Radiant heating', 'Boiler replacement'],
      icon: FiThermometer
    },
    {
      title: 'Radiant Heating',
      description: 'Comfortable and efficient radiant floor heating systems',
      features: ['Hydronic systems', 'Electric radiant', 'Retrofit installation', 'Zone control'],
      icon: FiSun
    }
  ];

  const heatingProblems = [
    {
      problem: 'No Heat',
      symptoms: ['System won\'t start', 'Cold air blowing', 'Pilot light out'],
      urgency: 'Emergency'
    },
    {
      problem: 'Uneven Heating',
      symptoms: ['Cold rooms', 'Hot spots', 'Poor circulation'],
      urgency: 'High'
    },
    {
      problem: 'High Energy Bills',
      symptoms: ['Sudden bill increase', 'System running constantly', 'Poor efficiency'],
      urgency: 'Medium'
    },
    {
      problem: 'Strange Noises',
      symptoms: ['Banging sounds', 'Squealing', 'Rattling'],
      urgency: 'Medium'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Heating Services | Furnace, Heat Pump & Boiler Repair</title>
        <meta name="description" content="Expert heating services including furnace repair, heat pump installation, boiler maintenance, and emergency heating repair. Stay warm with professional service." />
        <meta name="keywords" content="heating services, furnace repair, heat pump installation, boiler service, heating repair, emergency heating" />
        <link rel="canonical" href="https://prohvacservices.com/services/heating" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiThermometer} className="w-12 h-12 text-yellow-400 mr-4" />
                <h1 className="text-4xl lg:text-6xl font-bold">Heating Services</h1>
              </div>
              <p className="text-xl text-orange-100 leading-relaxed mb-8">
                Professional heating services to keep your home warm and comfortable. From furnace repair to heat pump installation, we handle all your heating needs.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:555-HVAC-PRO"
                  className="bg-yellow-400 text-orange-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                  Call (555) HVAC-PRO
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-800 transition-colors flex items-center justify-center"
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
                alt="Heating system maintenance"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heating Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Heating Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From traditional furnaces to modern heat pumps, we provide comprehensive heating services for all system types.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {heatingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                    <SafeIcon icon={service.icon} className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-orange-500 mr-3" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Heating Problems</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We diagnose and repair all types of heating issues quickly to restore your comfort.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {heatingProblems.map((problem, index) => (
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
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Warm This Winter</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Don't let heating problems leave you in the cold. Contact us for reliable heating services and emergency repairs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:555-HVAC-PRO"
                className="bg-yellow-400 text-orange-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                Call (555) HVAC-PRO
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors inline-flex items-center justify-center"
              >
                Schedule Heating Service
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeatingServices;