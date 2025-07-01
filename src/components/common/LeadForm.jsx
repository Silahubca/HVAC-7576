import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from './SafeIcon';

const { FiPhone, FiMail, FiUser, FiFileText, FiSend } = FiIcons;

const LeadForm = ({
  title = "Get Your Free Consultation",
  subtitle = "Fill out the form below and we'll contact you within 24 hours",
  formType = "consultation", // consultation, contact, appointment
  className = "",
  showServices = true
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // In a real application, this would send to your CRM or email service
      console.log('Lead form submission:', {
        ...data,
        formType,
        timestamp: new Date()
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      reset();

      // Track conversion (Google Analytics, Facebook Pixel, etc.)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
          'value': formType === 'consultation' ? 100 : 50,
          'currency': 'USD'
        });
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
        {showServices && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <option value="financial-consulting">Financial Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>
            {errors.serviceType && (
              <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>
            )}
          </div>
        )}

        {/* Client Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Client Type *
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                {...register('clientType', { required: 'Please select client type' })}
                value="individual"
                className="mr-3 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-gray-700">Individual/Personal</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                {...register('clientType', { required: 'Please select client type' })}
                value="business"
                className="mr-3 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-gray-700">Business</span>
            </label>
          </div>
          {errors.clientType && (
            <p className="mt-1 text-sm text-red-600">{errors.clientType.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Details
          </label>
          <textarea
            {...register('message')}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Tell us about your tax or accounting needs..."
          />
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
              {formType === 'appointment' ? 'Schedule Consultation' : 'Get Free Consultation'}
            </>
          )}
        </button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center">
            <p className="font-semibold">Thank you for your request!</p>
            <p className="text-sm">We'll contact you within 24 hours to schedule your free consultation.</p>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-center">
            <p className="font-semibold">Sorry, there was an error.</p>
            <p className="text-sm">Please call us at (555) TAX-HELP or try again.</p>
          </div>
        )}
      </form>

      {/* Trust Indicators */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
          <div className="flex items-center">
            <SafeIcon icon={FiPhone} className="w-4 h-4 mr-1" />
            <span>24 Hour Response</span>
          </div>
          <div className="flex items-center">
            <SafeIcon icon={FiFileText} className="w-4 h-4 mr-1" />
            <span>Free Consultations</span>
          </div>
          <div className="flex items-center">
            <SafeIcon icon={FiUser} className="w-4 h-4 mr-1" />
            <span>Licensed CPA</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LeadForm;