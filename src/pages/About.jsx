import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiAward, FiShield, FiHeart, FiPhone, FiArrowRight } = FiIcons;

const About = () => {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: FiAward },
    { number: '500+', label: 'Happy Clients', icon: FiUsers },
    { number: 'Year-Round', label: 'Tax Support', icon: FiShield },
    { number: '100%', label: 'Accuracy Rate', icon: FiHeart }
  ];

  const team = [
    {
      name: 'Zara Ahmed',
      role: 'Founder & Senior Tax Advisor',
      experience: '15+ years',
      certifications: ['CPA Certified', 'Tax Expert', 'Business Consultant'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Michael Davis',
      role: 'Senior Accountant',
      experience: '12+ years',
      certifications: ['CPA Certified', 'QuickBooks ProAdvisor'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Sarah Johnson',
      role: 'Tax Preparation Specialist',
      experience: '8+ years',
      certifications: ['IRS Enrolled Agent', 'Tax Law Specialist'],
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About ZA Tax and Accounting | Professional Tax Experts Since 2008</title>
        <meta name="description" content="Learn about ZA Tax and Accounting - your trusted tax and accounting professionals since 2008. CPA certified with 15+ years experience serving individuals and businesses." />
        <meta name="keywords" content="about tax company, CPA firm, tax professionals, accounting experts, tax preparation specialists, business accounting" />
        <link rel="canonical" href="https://zataxandaccounting.com/about" />
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
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                About ZA Tax and Accounting
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Since 2008, we've been the trusted choice for tax preparation and accounting services. 
                Our commitment to accuracy, integrity, and client satisfaction has made us the leading 
                tax professionals in the area.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:555-TAX-HELP"
                  className="bg-yellow-400 text-primary-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                  Call (555) TAX-HELP
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-800 transition-colors flex items-center justify-center"
                >
                  Get Free Consultation
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional tax and accounting team at work"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={stat.icon} className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  ZA Tax and Accounting was founded in 2008 with a simple mission: to provide honest, 
                  reliable tax and accounting services that individuals and businesses can trust. What 
                  started as a one-person practice has grown into a full-service accounting firm serving 
                  the entire metro area.
                </p>
                <p>
                  Our founder, Zara Ahmed, began her career over 15 years ago as a junior accountant. 
                  Through years of dedication, continuous learning, and unwavering commitment to client 
                  service, she built the reputation that ZA Tax and Accounting is known for today.
                </p>
                <p>
                  Today, we're proud to be the area's most trusted tax professionals, serving hundreds 
                  of satisfied clients with the same values that started it all: integrity, accuracy, 
                  and exceptional client service.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Tax preparation and accounting services"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified professionals bring decades of combined experience and ongoing training 
              to ensure your taxes and finances receive the best possible care.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.experience} experience</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert, certIndex) => (
                        <span
                          key={certIndex}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and ensure you receive the best possible service.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'We believe in honest communication, transparent pricing, and doing what\'s right for our clients.',
                icon: FiShield
              },
              {
                title: 'Accuracy',
                description: 'Every return is prepared with meticulous attention to detail and thoroughly reviewed for accuracy.',
                icon: FiAward
              },
              {
                title: 'Reliability',
                description: 'You can count on us to meet deadlines, keep appointments, and be there when you need us.',
                icon: FiUsers
              },
              {
                title: 'Client Focus',
                description: 'Your financial success and peace of mind are our top priorities in every interaction.',
                icon: FiHeart
              },
              {
                title: 'Continuous Learning',
                description: 'We stay current with the latest tax laws and regulations to serve you better.',
                icon: FiAward
              },
              {
                title: 'Community',
                description: 'We\'re proud to be part of this community and committed to its growth and prosperity.',
                icon: FiUsers
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who trust ZA Tax and Accounting for all their 
              tax preparation and accounting needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:555-TAX-HELP"
                className="bg-yellow-400 text-primary-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                Call (555) TAX-HELP
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center justify-center"
              >
                Schedule Consultation
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;