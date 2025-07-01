import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPhone, FiClock, FiAlertTriangle, FiShield } = FiIcons;

const EmergencyCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Alert Header */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                <SafeIcon icon={FiAlertTriangle} className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold">
                  HVAC Emergency?
                </h2>
                <p className="text-xl text-red-100">We're Here to Help 24/7</p>
              </div>
            </div>

            {/* Emergency Situations */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Common HVAC Emergencies:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  <span>No Heat in Winter</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  <span>AC Failure in Summer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  <span>Gas Leaks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  <span>Carbon Monoxide Alarms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  <span>Water Leaks from Units</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  <span>Strange Noises or Smells</span>
                </div>
              </div>
            </div>

            {/* Emergency Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <SafeIcon icon={FiClock} className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold">24/7 Availability</div>
                <div className="text-sm text-red-100">365 Days a Year</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <SafeIcon icon={FiPhone} className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold">Rapid Response</div>
                <div className="text-sm text-red-100">30-60 Min ETA</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <SafeIcon icon={FiShield} className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold">Licensed Techs</div>
                <div className="text-sm text-red-100">Fully Certified</div>
              </div>
            </div>
          </motion.div>

          {/* Right CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Main CTA */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 mb-8">
              <h3 className="text-3xl font-bold mb-4">Call Now for Immediate Help</h3>
              <p className="text-xl text-red-100 mb-6">
                Don't wait - HVAC emergencies can be dangerous and costly if not addressed quickly.
              </p>
              
              {/* Phone Number - Large */}
              <a
                href="tel:555-HVAC-PRO"
                className="block bg-yellow-400 text-red-600 text-center py-6 rounded-2xl font-bold text-3xl hover:bg-yellow-300 transition-colors mb-4 shadow-lg"
              >
                (555) HVAC-PRO
              </a>
              
              <p className="text-sm text-red-100">
                No extra charges for nights, weekends, or holidays
              </p>
            </div>

            {/* Additional Info */}
            <div className="space-y-4">
              <div className="bg-red-500 bg-opacity-50 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiShield} className="w-6 h-6 text-yellow-400" />
                  <div>
                    <div className="font-semibold">Safety First</div>
                    <div className="text-sm text-red-100">If you smell gas, leave immediately and call from a safe location</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-500 bg-opacity-50 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiClock} className="w-6 h-6 text-yellow-400" />
                  <div>
                    <div className="font-semibold">Fast Response Promise</div>
                    <div className="text-sm text-red-100">We'll dispatch a technician within 30-60 minutes</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-red-800 bg-opacity-50 rounded-2xl p-6">
            <p className="text-lg font-semibold mb-2">
              📞 Save Our Number: (555) HVAC-PRO
            </p>
            <p className="text-red-100">
              Program it into your phone now - you never know when you might need emergency HVAC service!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencyCTA;