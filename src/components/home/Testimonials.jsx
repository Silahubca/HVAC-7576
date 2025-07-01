import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiStar, FiQuote } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Downtown Resident',
      rating: 5,
      text: 'Pro HVAC Services saved the day! Our AC broke down during a heatwave, and they had a technician at our house within an hour. Professional, efficient, and reasonably priced.',
      service: 'Emergency AC Repair',
      date: '2 weeks ago'
    },
    {
      name: 'Mike Chen',
      location: 'Restaurant Owner',
      rating: 5,
      text: 'We rely on Pro HVAC for all our restaurant\'s heating and cooling needs. Their maintenance program keeps our equipment running smoothly, and their emergency service is outstanding.',
      service: 'Commercial Maintenance',
      date: '1 month ago'
    },
    {
      name: 'Jennifer Davis',
      location: 'North Side Homeowner',
      rating: 5,
      text: 'Excellent service from start to finish! They installed a new HVAC system in our home, explaining everything clearly and completing the work on time. Highly recommend!',
      service: 'HVAC Installation',
      date: '3 weeks ago'
    },
    {
      name: 'Robert Martinez',
      location: 'Office Manager',
      rating: 5,
      text: 'Professional, reliable, and honest. They diagnosed our office heating problem quickly and provided a fair quote. The repair was completed efficiently with minimal disruption.',
      service: 'Heating Repair',
      date: '1 week ago'
    },
    {
      name: 'Lisa Thompson',
      location: 'Suburban Homeowner',
      rating: 5,
      text: 'I\'ve been using Pro HVAC for maintenance for three years now. Their technicians are always punctual, courteous, and thorough. My energy bills have decreased significantly!',
      service: 'Annual Maintenance',
      date: '2 days ago'
    },
    {
      name: 'David Wilson',
      location: 'Retail Store Owner',
      rating: 5,
      text: 'When our store\'s cooling system failed during peak summer season, Pro HVAC responded immediately. They had us back up and running the same day. Exceptional service!',
      service: 'Emergency Commercial Repair',
      date: '4 days ago'
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
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about our HVAC services.
          </p>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <SafeIcon key={i} icon={FiStar} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-2xl font-bold text-gray-900">4.9/5</div>
            <div className="text-gray-600">Based on 500+ reviews</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <SafeIcon icon={FiQuote} className="w-8 h-8 text-primary-200" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Service Badge */}
              <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {testimonial.service}
              </div>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
                <div className="text-sm text-gray-500">{testimonial.date}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Experience 5-Star Service?
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust Pro HVAC Services for all their heating and cooling needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:555-HVAC-PRO"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors inline-flex items-center justify-center"
              >
                Call (555) HVAC-PRO
              </a>
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 hover:text-white transition-colors">
                Schedule Online
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;