import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiSettings, FiPhone, FiCheckCircle, FiArrowRight, FiDollarSign, FiClock, FiAward } = FiIcons;

const HVACInstallation = () => {
  const services = [
    {
      title: 'Central Air Conditioning',
      description: 'Complete central AC system installation with energy-efficient units',
      features: ['High-efficiency units', 'Proper sizing', 'Ductwork installation', 'Thermostat setup'],
      price: 'Starting at $3,500'
    },
    {
      title: 'Furnace Installation',
      description: 'Gas, electric, and oil furnace installation with professional setup',
      features: ['Multiple fuel options', 'Energy-efficient models', 'Safety inspections', 'Warranty included'],
      price: 'Starting at $2,800'
    },
    {
      title: 'Heat Pump Systems',
      description: 'Efficient heat pump installation for year-round comfort',
      features: ['Heating and cooling', 'Energy efficient', 'Quiet operation', 'Smart controls'],
      price: 'Starting at $4,200'
    },
    {
      title: 'Ductwork Installation',
      description: 'Complete ductwork design and installation for optimal airflow',
      features: ['Custom design', 'Proper insulation', 'Sealed connections', 'Improved efficiency'],
      price: 'Starting at $1,500'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Free Consultation',
      description: 'In-home assessment and custom system recommendations',
      duration: '1-2 hours'
    },
    {
      step: 2,
      title: 'Design & Quote',
      description: 'Detailed system design with transparent pricing',
      duration: '2-3 days'
    },
    {
      step: 3,
      title: 'Installation',
      description: 'Professional installation by certified technicians',
      duration: '1-3 days'
    },
    {
      step: 4,
      title: 'Testing & Training',
      description: 'System testing and customer training on operation',
      duration: '2-4 hours'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional HVAC Installation Services | New System Installation</title>
        <meta name="description" content="Expert HVAC installation services for residential and commercial properties. Professional installation of furnaces, air conditioners, heat pumps, and ductwork." />
        <meta name="keywords" content="HVAC installation, furnace installation, AC installation, heat pump installation, ductwork installation" />
        <link rel="canonical" href="https://prohvacservices.com/services/hvac-installation" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiSettings} className="w-12 h-12 text-yellow-400 mr-4" />
                <h1 className="text-4xl lg:text-6xl font-bold">HVAC Installation</h1>
              </div>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Professional HVAC installation services with energy-efficient systems, expert sizing, and comprehensive warranties for your comfort and peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:555-HVAC-PRO"
                  className="bg-yellow-400 text-primary-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                  Call (555) HVAC-PRO
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-800 transition-colors flex items-center justify-center"
                >
                  Free Estimate
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
                alt="Professional HVAC installation"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Installation Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Installation Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From single units to complete system installations, we provide professional HVAC installation services with quality equipment and expert craftsmanship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-600">{service.price}</span>
                  <Link
                    to="/contact"
                    className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Installation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven process to ensure your new HVAC system is installed correctly and performs optimally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Installation Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional installation makes all the difference in system performance, efficiency, and longevity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FiAward,
                title: 'Expert Technicians',
                description: 'EPA certified technicians with years of installation experience'
              },
              {
                icon: FiDollarSign,
                title: 'Transparent Pricing',
                description: 'Upfront pricing with no hidden fees or surprise charges'
              },
              {
                icon: FiClock,
                title: 'Timely Completion',
                description: 'Efficient installation process that minimizes disruption'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={benefit.icon} className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready for a New HVAC System?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and custom installation quote for your home or business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:555-HVAC-PRO"
                className="bg-yellow-400 text-primary-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                Call (555) HVAC-PRO
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center justify-center"
              >
                Get Free Estimate
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HVACInstallation;