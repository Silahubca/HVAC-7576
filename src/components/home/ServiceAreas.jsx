import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMapPin, FiArrowRight, FiPhone } = FiIcons;

const ServiceAreas = () => {
  const areas = [
    {
      name: 'Downtown',
      description: 'Full HVAC services for downtown residential and commercial properties',
      responseTime: '30 min',
      services: ['Residential', 'Commercial', 'Emergency']
    },
    {
      name: 'North Side',
      description: 'Comprehensive heating and cooling solutions for North Side communities',
      responseTime: '45 min',
      services: ['Residential', 'Commercial', 'Emergency']
    },
    {
      name: 'South Side',
      description: 'Professional HVAC services covering all South Side neighborhoods',
      responseTime: '45 min',
      services: ['Residential', 'Commercial', 'Emergency']
    },
    {
      name: 'East End',
      description: 'Expert HVAC installation, repair, and maintenance in East End areas',
      responseTime: '40 min',
      services: ['Residential', 'Commercial', 'Emergency']
    },
    {
      name: 'West End',
      description: 'Reliable heating and cooling services for West End residents and businesses',
      responseTime: '50 min',
      services: ['Residential', 'Commercial', 'Emergency']
    },
    {
      name: 'Suburbs',
      description: 'Complete HVAC solutions for suburban homes and commercial facilities',
      responseTime: '60 min',
      services: ['Residential', 'Commercial', 'Emergency']
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
            Areas We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Providing professional HVAC services throughout the greater metro area with fast response times and local expertise.
          </p>
        </motion.div>

        {/* Service Areas Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary-600 transition-colors duration-300">
                      <SafeIcon icon={FiMapPin} className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {area.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Response Time</div>
                    <div className="font-bold text-primary-600">{area.responseTime}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Services */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Services Available:</div>
                  <div className="flex flex-wrap gap-2">
                    {area.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <a
                    href="tel:555-HVAC-PRO"
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    <SafeIcon icon={FiPhone} className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors group"
                  >
                    Schedule Service
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coverage Map CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary-600 rounded-3xl p-8 lg:p-12 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Not Sure If We Serve Your Area?
            </h3>
            <p className="text-xl text-primary-100 leading-relaxed mb-8">
              We're constantly expanding our service area. Give us a call or check our complete coverage map to see if we can help you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:555-HVAC-PRO"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                Call (555) HVAC-PRO
              </a>
              <Link
                to="/service-areas"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiMapPin} className="w-5 h-5 mr-3" />
                View Coverage Map
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;