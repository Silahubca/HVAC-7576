import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiShield, FiPhone, FiCheckCircle, FiArrowRight, FiCalendar, FiDollarSign } = FiIcons;

const HVACMaintenance = () => {
  const maintenancePlans = [
    {
      name: 'Basic Plan',
      price: '$149/year',
      description: 'Essential maintenance for residential systems',
      features: [
        'Annual system inspection',
        'Filter replacement',
        'Basic cleaning',
        'Safety check',
        'Performance report'
      ]
    },
    {
      name: 'Premium Plan',
      price: '$249/year',
      description: 'Comprehensive maintenance with priority service',
      features: [
        'Bi-annual inspections',
        'All Basic Plan features',
        'Coil cleaning',
        'Ductwork inspection',
        '15% discount on repairs',
        'Priority scheduling'
      ],
      popular: true
    },
    {
      name: 'Commercial Plan',
      price: 'Custom pricing',
      description: 'Tailored maintenance for business systems',
      features: [
        'Quarterly inspections',
        'Emergency priority',
        'Detailed reporting',
        'Energy optimization',
        'Preventive replacements',
        '24/7 support'
      ]
    }
  ];

  const maintenanceTasks = [
    {
      category: 'Spring Maintenance',
      tasks: [
        'AC system inspection',
        'Refrigerant level check',
        'Coil cleaning',
        'Thermostat calibration',
        'Electrical connections'
      ]
    },
    {
      category: 'Fall Maintenance',
      tasks: [
        'Heating system inspection',
        'Heat exchanger check',
        'Ignition system test',
        'Vent and flue inspection',
        'Carbon monoxide test'
      ]
    },
    {
      category: 'Year-Round Tasks',
      tasks: [
        'Filter replacement',
        'Belt and motor inspection',
        'Lubrication service',
        'Ductwork evaluation',
        'Performance testing'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>HVAC Maintenance Plans | Preventive Service & Tune-Ups</title>
        <meta name="description" content="Professional HVAC maintenance plans to keep your system running efficiently. Preventive service, tune-ups, and priority scheduling available." />
        <meta name="keywords" content="HVAC maintenance, preventive maintenance, HVAC tune-up, maintenance plan, system maintenance" />
        <link rel="canonical" href="https://prohvacservices.com/services/hvac-maintenance" />
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
                <SafeIcon icon={FiShield} className="w-12 h-12 text-yellow-400 mr-4" />
                <h1 className="text-4xl lg:text-6xl font-bold">HVAC Maintenance</h1>
              </div>
              <p className="text-xl text-green-100 leading-relaxed mb-8">
                Preventive maintenance plans to keep your HVAC system running efficiently, prevent breakdowns, and extend equipment life.
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
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="HVAC maintenance service"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Maintenance Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the maintenance plan that best fits your needs and budget. All plans include professional service and quality guarantee.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenancePlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative ${
                  plan.popular ? 'ring-2 ring-green-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                  }`}
                >
                  Choose Plan
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Tasks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What's Included</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive maintenance service covers all aspects of your HVAC system throughout the year.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenanceTasks.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-center text-gray-600">
                      <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-500 mr-3" />
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits of Regular Maintenance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular maintenance saves money, prevents breakdowns, and keeps your family comfortable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FiDollarSign,
                title: 'Lower Energy Bills',
                description: 'Well-maintained systems use up to 20% less energy'
              },
              {
                icon: FiShield,
                title: 'Prevent Breakdowns',
                description: 'Catch problems early before they become expensive repairs'
              },
              {
                icon: FiCalendar,
                title: 'Extend System Life',
                description: 'Regular maintenance can double equipment lifespan'
              },
              {
                icon: FiCheckCircle,
                title: 'Maintain Warranty',
                description: 'Keep manufacturer warranties valid with proper maintenance'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={benefit.icon} className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Saving?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join our maintenance program and start enjoying lower energy bills, fewer repairs, and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:555-HVAC-PRO"
                className="bg-yellow-400 text-green-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                Call (555) HVAC-PRO
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
              >
                Schedule Maintenance
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HVACMaintenance;