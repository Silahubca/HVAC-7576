import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiThermometer, FiWind, FiSettings, FiTool, FiShield, FiStar, FiPhone, FiArrowRight, FiCheckCircle } = FiIcons;

const ResidentialServices = () => {
  const services = [
    {
      icon: FiSettings,
      title: 'HVAC Installation',
      description: 'Complete installation of new heating and cooling systems for your home.',
      features: ['Energy-efficient systems', 'Professional sizing & design', 'Full warranty coverage', 'Financing available'],
      price: 'Starting at $3,500',
      link: '/services/hvac-installation'
    },
    {
      icon: FiTool,
      title: 'HVAC Repair',
      description: 'Fast, reliable repairs for all makes and models of residential HVAC equipment.',
      features: ['24/7 emergency service', 'Expert diagnostics', 'Quality parts guarantee', 'Same-day service available'],
      price: 'Starting at $95',
      link: '/services/hvac-repair'
    },
    {
      icon: FiShield,
      title: 'HVAC Maintenance',
      description: 'Preventive maintenance plans to keep your home comfort system running efficiently.',
      features: ['Annual tune-ups', 'Priority scheduling', 'Extended equipment life', '15% discount on repairs'],
      price: 'Starting at $149/year',
      link: '/services/hvac-maintenance'
    },
    {
      icon: FiThermometer,
      title: 'Heating Services',
      description: 'Comprehensive heating solutions including furnaces, heat pumps, and boilers.',
      features: ['Furnace repair & installation', 'Heat pump services', 'Boiler maintenance', 'Thermostat upgrades'],
      price: 'Starting at $125',
      link: '/services/heating'
    },
    {
      icon: FiWind,
      title: 'Air Conditioning',
      description: 'Complete AC services from installation to emergency repairs.',
      features: ['AC installation & replacement', 'Emergency repairs', 'System optimization', 'Ductwork services'],
      price: 'Starting at $135',
      link: '/services/cooling'
    },
    {
      icon: FiWind,
      title: 'Air Quality Solutions',
      description: 'Improve your home\'s indoor air quality with professional solutions.',
      features: ['Air purification systems', 'Humidity control', 'Duct cleaning', 'Filter replacement'],
      price: 'Starting at $199',
      link: '/services/air-quality'
    }
  ];

  const benefits = [
    {
      icon: FiStar,
      title: 'Comfort & Convenience',
      description: 'Enjoy consistent temperatures and optimal comfort throughout your home year-round.'
    },
    {
      icon: FiShield,
      title: 'Energy Efficiency',
      description: 'Reduce energy bills with high-efficiency systems and regular maintenance.'
    },
    {
      icon: FiHome,
      title: 'Home Value',
      description: 'Increase your property value with modern, efficient HVAC systems.'
    },
    {
      icon: FiCheckCircle,
      title: 'Peace of Mind',
      description: 'Rest easy knowing your family\'s comfort is in the hands of licensed professionals.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Residential HVAC Services | Home Heating & Cooling Solutions</title>
        <meta name="description" content="Professional residential HVAC services including installation, repair, and maintenance. Keep your home comfortable year-round with our expert heating and cooling solutions." />
        <meta name="keywords" content="residential HVAC, home heating, air conditioning, furnace repair, AC installation, home comfort systems" />
        <link rel="canonical" href="https://prohvacservices.com/residential-services" />
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
                <SafeIcon icon={FiHome} className="w-12 h-12 text-yellow-400 mr-4" />
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Residential HVAC Services
                </h1>
              </div>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Complete heating, cooling, and air quality solutions for your home. From installation to emergency repairs, we keep your family comfortable year-round.
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
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern home HVAC system"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
              Complete Home Comfort Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From new installations to emergency repairs, we provide comprehensive HVAC services to keep your home comfortable in every season.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                    <SafeIcon icon={service.icon} className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-primary-600">{service.price}</span>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="block bg-primary-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Professional HVAC Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional HVAC services ensure your home stays comfortable, energy-efficient, and safe for your family.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={benefit.icon} className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
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
            <h2 className="text-4xl font-bold mb-6">
              Ready to Improve Your Home's Comfort?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and estimate on your residential HVAC needs.
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

export default ResidentialServices;