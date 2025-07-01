import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiUser, FiMessageSquare, FiFileText, FiDollarSign } = FiIcons;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone Support',
      details: '(555) TAX-HELP',
      subDetails: 'Mon-Fri 9AM-6PM',
      action: 'tel:555-TAX-HELP'
    },
    {
      icon: FiMail,
      title: 'Email Us',
      details: 'info@prohvacservices.com',
      subDetails: 'We respond within 24 hours',
      action: 'mailto:info@prohvacservices.com'
    },
    {
      icon: FiMapPin,
      title: 'Visit Our Office',
      details: '123 Business Drive',
      subDetails: 'Your City, ST 12345',
      action: 'https://maps.google.com'
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM',
      subDetails: 'Sat: 10AM-4PM (Tax Season)',
      action: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Pro HVAC Services | Get Your Free Tax Consultation</title>
        <meta name="description" content="Contact ZA Tax and Accounting for all your tax and accounting needs. Call (555) TAX-HELP for expert tax preparation or schedule online. Free consultations available." />
        <meta name="keywords" content="contact tax preparer, tax consultation, accounting services, tax help, tax questions, tax appointment" />
        <link rel="canonical" href="https://zataxandaccounting.com/contact" />
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Ready to get your HVAC done right? Have questions about our accounting services? 
              We're here to help with all your tax and financial needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors">
                  <SafeIcon icon={info.icon} className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <p className="text-lg font-semibold text-primary-600 mb-2">
                  {info.details}
                </p>
                <p className="text-gray-600 text-sm">
                  {info.subDetails}
                </p>
                {info.action && (
                  <a
                    href={info.action}
                    className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    Contact Now →
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Tax Season CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-green-600 text-white rounded-3xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Tax Season is Here!</h2>
            <p className="text-xl text-green-100 mb-6">
              Don't wait until the last minute - schedule your tax appointment today!
            </p>
            <a
              href="tel:555-TAX-HELP"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <SafeIcon icon={FiPhone} className="w-6 h-6 mr-3" />
              (555) TAX-HELP
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Schedule Your Consultation
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        {...register('firstName', { required: 'First name is required' })}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        {...register('lastName', { required: 'Last name is required' })}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <SafeIcon icon={FiPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        {...register('phone', { required: 'Phone number is required' })}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        {...register('email', { required: 'Email is required' })}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiFileText} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      {...register('serviceType', { required: 'Please select a service' })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a service...</option>
                      <option value="tax-preparation">Individual Tax Preparation</option>
                      <option value="business-taxes">Business Tax Services</option>
                      <option value="bookkeeping">Bookkeeping Services</option>
                      <option value="tax-planning">Tax Planning</option>
                      <option value="payroll">Payroll Services</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                  {errors.serviceType && (
                    <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>
                  )}
                </div>

                {/* Client Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Client Type *
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiDollarSign} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      {...register('clientType', { required: 'Please select client type' })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select client type...</option>
                      <option value="individual">Individual/Personal</option>
                      <option value="business">Small Business</option>
                      <option value="corporation">Corporation</option>
                      <option value="nonprofit">Non-Profit</option>
                    </select>
                  </div>
                  {errors.clientType && (
                    <p className="mt-1 text-sm text-red-600">{errors.clientType.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiMessageSquare} className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your tax or accounting needs..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <SafeIcon icon={FiSend} className="w-5 h-5 mr-3" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Thank you! We'll contact you within 24 hours to schedule your consultation.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    Sorry, there was an error. Please call us at (555) TAX-HELP.
                  </div>
                )}
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Office Location */}
              <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <SafeIcon icon={FiMapPin} className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Our Office Location</p>
                  <p>123 Business Drive, Your City, ST 12345</p>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Service Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Downtown', 'North Side', 'South Side', 'East End', 'West End', 'Suburbs'].map((area, index) => (
                    <div key={index} className="flex items-center">
                      <SafeIcon icon={FiMapPin} className="w-4 h-4 text-primary-600 mr-2" />
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-primary-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <SafeIcon icon={FiFileText} className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <span className="font-semibold">CPA Certified</span>
                      <p className="text-gray-600 text-sm">Licensed professionals you can trust</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <SafeIcon icon={FiDollarSign} className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <span className="font-semibold">Transparent Pricing</span>
                      <p className="text-gray-600 text-sm">No hidden fees or surprise charges</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <SafeIcon icon={FiClock} className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <span className="font-semibold">Year-Round Support</span>
                      <p className="text-gray-600 text-sm">Available beyond tax season</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
