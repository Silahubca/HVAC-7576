import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiSettings, FiTool, FiShield, FiThermometer, FiWind, FiHome, FiBuilding, FiArrowRight } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiSettings,
      title: 'HVAC Installation',
      description: 'Professional installation of heating and cooling systems with warranty coverage.',
      features: ['Energy-efficient systems', 'Professional sizing', 'Full warranty coverage'],
      link: '/services/hvac-installation',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FiTool,
      title: 'HVAC Repair',
      description: 'Fast, reliable repairs for all makes and models of HVAC equipment.',
      features: ['24/7 emergency service', 'Expert diagnostics', 'Quality parts guarantee'],
      link: '/services/hvac-repair',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: FiShield,
      title: 'HVAC Maintenance',
      description: 'Preventive maintenance plans to keep your system running efficiently.',
      features: ['Regular tune-ups', 'Priority scheduling', 'Extended equipment life'],
      link: '/services/hvac-maintenance',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FiThermometer,
      title: 'Heating Services',
      description: 'Complete heating solutions including furnaces, heat pumps, and boilers.',
      features: ['Furnace repair & install', 'Heat pump services', 'Boiler maintenance'],
      link: '/services/heating',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FiWind,
      title: 'Cooling Services',
      description: 'Air conditioning installation, repair, and maintenance services.',
      features: ['AC installation', 'Emergency repairs', 'System optimization'],
      link: '/services/cooling',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: FiWind,
      title: 'Air Quality',
      description: 'Improve your indoor air quality with professional solutions.',
      features: ['Air purification', 'Humidity control', 'Duct cleaning'],
      link: '/services/air-quality',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive HVAC Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From installation to emergency repairs, we provide complete heating, cooling, and air quality solutions for your comfort and peace of mind.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
                >
                  Learn More
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Residential Services */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                <SafeIcon icon={FiHome} className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Residential Services</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Complete HVAC solutions for your home including installation, repair, maintenance, and emergency services.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-sm text-gray-600">
                <div className="w-2 h-2 bg-primary-500 rounded-full inline-block mr-2" />
                Home Comfort Systems
              </div>
              <div className="text-sm text-gray-600">
                <div className="w-2 h-2 bg-primary-500 rounded-full inline-block mr-2" />
                Energy Efficiency
              </div>
              <div className="text-sm text-gray-600">
                <div className="w-2 h-2 bg-primary-500 rounded-full inline-block mr-2" />
                Indoor Air Quality
              </div>
              <div className="text-sm text-gray-600">
                <div className="w-2 h-2 bg-primary-500 rounded-full inline-block mr-2" />
                24/7 Emergency Service
              </div>
            </div>
            <Link
              to="/residential-services"
              className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View Residential Services
              <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Commercial Services */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mr-4">
                <SafeIcon icon={FiBuilding} className="w-6 h-6 text-secondary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Commercial Services</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Professional HVAC solutions for businesses, offices, retail spaces, and industrial facilities.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-sm text-gray-600">
                <div className="w-2 h-2 bg-secondary-500 rounded-full inline-block mr-2" />
                Commercial Systems
              </div>
              <div className="text-sm text-gray-600">
                <div className="w-2 h-2 bg-secondary-500 rounded-full inline-block mr-2" />
                Preventive Maintenance
              </div>
              <div className="text-sm text-gray-600">
                <div className="w-2 h-2 bg-secondary-500 rounded-full inline-block mr-2" />
                Energy Management
              </div>
              <div className="text-sm text-gray-600">
                <div className="w-2 h-2 bg-secondary-500 rounded-full inline-block mr-2" />
                Priority Support
              </div>
            </div>
            <Link
              to="/commercial-services"
              className="inline-flex items-center bg-secondary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-700 transition-colors"
            >
              View Commercial Services
              <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;