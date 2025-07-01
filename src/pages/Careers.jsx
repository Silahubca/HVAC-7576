import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiHeart, FiTrendingUp, FiShield, FiPhone, FiMail } = FiIcons;

const Careers = () => {
  const benefits = [
    {
      icon: FiHeart,
      title: 'Competitive Benefits',
      description: 'Health, dental, vision insurance plus retirement planning'
    },
    {
      icon: FiTrendingUp,
      title: 'Career Growth',
      description: 'Ongoing training and advancement opportunities'
    },
    {
      icon: FiUsers,
      title: 'Team Environment',
      description: 'Supportive, family-like work culture'
    },
    {
      icon: FiShield,
      title: 'Job Security',
      description: 'Stable, recession-resistant industry'
    }
  ];

  const positions = [
    {
      title: 'HVAC Technician',
      type: 'Full-time',
      location: 'Metro Area',
      experience: '2+ years',
      description: 'Install, repair, and maintain residential and commercial HVAC systems.',
      requirements: ['EPA certification required', 'Valid driver\'s license', 'Own tools preferred', 'Customer service skills']
    },
    {
      title: 'HVAC Apprentice',
      type: 'Full-time',
      location: 'Metro Area',
      experience: 'Entry level',
      description: 'Learn the HVAC trade while working alongside experienced technicians.',
      requirements: ['High school diploma/GED', 'Mechanical aptitude', 'Willingness to learn', 'Physical ability to lift 50+ lbs']
    },
    {
      title: 'Service Dispatcher',
      type: 'Full-time',
      location: 'Office',
      experience: '1+ years',
      description: 'Coordinate service calls, manage schedules, and provide customer support.',
      requirements: ['Customer service experience', 'Computer proficiency', 'Multitasking abilities', 'Communication skills']
    }
  ];

  return (
    <>
      <Helmet>
        <title>HVAC Careers | Join Our Professional Team | Pro HVAC Services</title>
        <meta name="description" content="Join the Pro HVAC Services team! We're hiring experienced HVAC technicians and apprentices. Competitive pay, great benefits, and growth opportunities available." />
        <meta name="keywords" content="HVAC jobs, HVAC careers, HVAC technician jobs, HVAC apprentice, heating cooling jobs" />
        <link rel="canonical" href="https://prohvacservices.com/careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Build a rewarding career with the area's most trusted HVAC company. We offer competitive compensation, excellent benefits, and opportunities for professional growth.
            </p>
            <a
              href="mailto:careers@prohvacservices.com"
              className="bg-yellow-400 text-primary-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center"
            >
              <SafeIcon icon={FiMail} className="w-5 h-5 mr-3" />
              Apply Today
            </a>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team members because they take care of our customers.
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
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
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

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current job opportunities and find the perfect fit for your skills and career goals.
            </p>
          </motion.div>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                          {position.type}
                        </span>
                        <span>{position.location}</span>
                        <span>{position.experience}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{position.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-gray-600">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <a
                      href="mailto:careers@prohvacservices.com"
                      className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center mb-4"
                    >
                      Apply Now
                    </a>
                    <a
                      href="tel:555-HVAC-PRO"
                      className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors text-center"
                    >
                      Call to Discuss
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our straightforward hiring process is designed to find the right fit for both you and our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Apply', description: 'Submit your resume and cover letter via email or phone' },
              { step: 2, title: 'Interview', description: 'Initial phone interview followed by in-person meeting' },
              { step: 3, title: 'Skills Assessment', description: 'Practical skills evaluation and background check' },
              { step: 4, title: 'Welcome Aboard', description: 'Onboarding, training, and integration with the team' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Career?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join our growing team and build a rewarding career in the HVAC industry. We're always looking for dedicated professionals who share our commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="mailto:careers@prohvacservices.com"
                className="bg-yellow-400 text-primary-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiMail} className="w-5 h-5 mr-3" />
                Send Resume
              </a>
              <a
                href="tel:555-HVAC-PRO"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                Call (555) HVAC-PRO
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Careers;