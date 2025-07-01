import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBuilding, FiSettings, FiTool, FiShield, FiUsers, FiClock, FiPhone, FiArrowRight, FiCheckCircle, FiTrendingUp } = FiIcons;

const CommercialServices = () => {
  const services = [
    {
      icon: FiSettings,
      title: 'Commercial HVAC Installation',
      description: 'Complete installation of commercial heating and cooling systems for businesses of all sizes.',
      features: ['Custom system design', 'Energy-efficient solutions', 'Minimal business disruption', 'Full warranty coverage'],
      industries: ['Offices', 'Retail', 'Restaurants', 'Warehouses']
    },
    {
      icon: FiTool,
      title: 'Commercial HVAC Repair',
      description: 'Fast, reliable repairs to minimize downtime and keep your business running smoothly.',
      features: ['24/7 emergency service', 'Priority response', 'All makes & models', 'Preventive solutions'],
      industries: ['Healthcare', 'Education', 'Manufacturing', 'Hospitality']
    },
    {
      icon: FiShield,
      title: 'Preventive Maintenance',
      description: 'Comprehensive maintenance programs to prevent costly breakdowns and extend equipment life.',
      features: ['Scheduled inspections', 'Performance optimization', 'Priority scheduling', 'Detailed reporting'],
      industries: ['Data Centers', 'Medical Facilities', 'Schools', 'Government']
    },
    {
      icon: FiTrendingUp,
      title: 'Energy Management',
      description: 'Advanced energy solutions to reduce operating costs and improve efficiency.',
      features: ['Energy audits', 'System optimization', 'Smart controls', 'ROI analysis'],
      industries: ['Corporate', 'Industrial', 'Multi-tenant', 'Non-profit']
    }
  ];

  const industries = [
    {
      name: 'Office Buildings',
      description: 'Climate control solutions for professional environments',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Zone control systems', 'Energy-efficient operation', 'Quiet operation', 'Professional maintenance']
    },
    {
      name: 'Retail Spaces',
      description: 'Comfortable shopping environments that enhance customer experience',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Customer comfort priority', 'Display area climate control', 'Energy cost management', 'Flexible scheduling']
    },
    {
      name: 'Restaurants & Food Service',
      description: 'Specialized HVAC solutions for food service establishments',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Kitchen ventilation', 'Dining area comfort', 'Grease filtration', 'Health code compliance']
    },
    {
      name: 'Healthcare Facilities',
      description: 'Critical climate control for medical and healthcare environments',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Air quality control', 'Temperature precision', 'Infection control', '24/7 reliability']
    },
    {
      name: 'Manufacturing',
      description: 'Industrial HVAC solutions for manufacturing facilities',
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Process temperature control', 'Air filtration', 'Energy efficiency', 'Equipment protection']
    },
    {
      name: 'Educational Facilities',
      description: 'Comfortable learning environments for schools and universities',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      features: ['Student comfort', 'Energy savings', 'Quiet operation', 'Flexible scheduling']
    }
  ];

  const benefits = [
    {
      icon: FiClock,
      title: 'Minimize Downtime',
      description: 'Fast response times and efficient repairs to keep your business running.'
    },
    {
      icon: FiTrendingUp,
      title: 'Reduce Energy Costs',
      description: 'Energy-efficient solutions that significantly lower operating expenses.'
    },
    {
      icon: FiShield,
      title: 'Extend Equipment Life',
      description: 'Preventive maintenance programs that maximize your HVAC investment.'
    },
    {
      icon: FiUsers,
      title: 'Improve Productivity',
      description: 'Comfortable work environments that enhance employee performance.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial HVAC Services | Business Heating & Cooling Solutions</title>
        <meta name="description" content="Professional commercial HVAC services for businesses. Installation, repair, maintenance & energy management solutions. 24/7 emergency service available." />
        <meta name="keywords" content="commercial HVAC, business heating, commercial air conditioning, office HVAC, retail HVAC, restaurant HVAC, industrial HVAC" />
        <link rel="canonical" href="https://prohvacservices.com/commercial-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-600 to-secondary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiBuilding} className="w-12 h-12 text-yellow-400 mr-4" />
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Commercial HVAC Services
                </h1>
              </div>
              <p className="text-xl text-gray-100 leading-relaxed mb-8">
                Professional HVAC solutions for businesses of all sizes. From office buildings to manufacturing facilities, we keep your business comfortable and operational.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:555-HVAC-PRO"
                  className="bg-yellow-400 text-secondary-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                  Call (555) HVAC-PRO
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-secondary-800 transition-colors flex items-center justify-center"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Commercial building with HVAC systems"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Complete Commercial HVAC Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From installation to maintenance, we provide comprehensive HVAC services tailored to your business needs.
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
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mr-6">
                    <SafeIcon icon={service.icon} className="w-8 h-8 text-secondary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Industries Served:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.industries.map((industry, industryIndex) => (
                      <span
                        key={industryIndex}
                        className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
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
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that different industries have unique HVAC requirements. Our solutions are tailored to meet your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{industry.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose Our Commercial HVAC Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional HVAC services that keep your business running efficiently while reducing costs.
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
                <div className="w-20 h-20 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={benefit.icon} className="w-10 h-10 text-secondary-600" />
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
      <section className="py-20 bg-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Optimize Your Business Climate?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a comprehensive assessment of your commercial HVAC needs and a customized solution proposal.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:555-HVAC-PRO"
                className="bg-yellow-400 text-secondary-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                Call (555) HVAC-PRO
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-secondary-600 transition-colors inline-flex items-center justify-center"
              >
                Request Quote
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CommercialServices;