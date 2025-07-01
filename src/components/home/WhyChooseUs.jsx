import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiShield, FiClock, FiStar, FiUsers, FiAward, FiTool, FiDollarSign, FiPhone } = FiIcons;

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FiShield,
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for your protection and peace of mind.',
      stat: 'License #HVAC-2024-001'
    },
    {
      icon: FiClock,
      title: '24/7 Emergency Service',
      description: 'Round-the-clock availability for emergency repairs and urgent service calls.',
      stat: '365 Days/Year'
    },
    {
      icon: FiStar,
      title: '5-Star Customer Rating',
      description: 'Consistently rated 5 stars by our customers for quality service and reliability.',
      stat: '4.9/5 Rating'
    },
    {
      icon: FiUsers,
      title: '15+ Years Experience',
      description: 'Over 15 years of professional HVAC experience serving residential and commercial clients.',
      stat: 'Since 2008'
    },
    {
      icon: FiAward,
      title: 'Certified Technicians',
      description: 'EPA certified technicians with ongoing training on the latest HVAC technologies.',
      stat: '100% Certified'
    },
    {
      icon: FiTool,
      title: 'Quality Workmanship',
      description: 'We stand behind our work with comprehensive warranties and quality guarantees.',
      stat: '2-Year Warranty'
    },
    {
      icon: FiDollarSign,
      title: 'Upfront Pricing',
      description: 'Transparent, upfront pricing with no hidden fees or surprise charges.',
      stat: 'No Hidden Fees'
    },
    {
      icon: FiPhone,
      title: 'Same-Day Service',
      description: 'Same-day service available for most repairs and maintenance requests.',
      stat: 'Same Day Available'
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
    <section className="py-20 bg-white">
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
            Why Choose Pro HVAC Services?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're committed to providing exceptional HVAC services with the highest standards of professionalism, quality, and customer satisfaction.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group text-center"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300">
                <SafeIcon 
                  icon={reason.icon} 
                  className="w-10 h-10 text-primary-600 group-hover:text-white transition-colors duration-300" 
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {reason.description}
              </p>
              <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                {reason.stat}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Your Comfort is Our Priority
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We understand that your HVAC system is crucial to your comfort and well-being. That's why we're committed to providing reliable, professional service that you can count on, day or night.
              </p>
              
              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <SafeIcon icon={FiShield} className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <SafeIcon icon={FiClock} className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">On-Time Service Promise</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <SafeIcon icon={FiDollarSign} className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Competitive, Fair Pricing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <SafeIcon icon={FiUsers} className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Friendly, Professional Team</span>
                </div>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-primary-600 mb-2">4.9</div>
                <div className="text-gray-600 font-medium">Star Rating</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Emergency Service</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;