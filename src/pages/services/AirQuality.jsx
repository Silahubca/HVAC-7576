import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiWind, FiPhone, FiCheckCircle, FiArrowRight, FiShield } = FiIcons;

const AirQuality = () => {
  const airQualitySolutions = [
    {
      title: 'Air Purification Systems',
      description: 'Advanced filtration to remove pollutants, allergens, and contaminants',
      features: ['HEPA filtration', 'UV light sterilization', 'Ionization technology', 'Whole-home coverage'],
      benefits: ['Reduces allergies', 'Eliminates odors', 'Kills bacteria & viruses', 'Improves health']
    },
    {
      title: 'Humidity Control',
      description: 'Maintain optimal humidity levels for comfort and health',
      features: ['Whole-home humidifiers', 'Dehumidification systems', 'Smart controls', 'Automatic operation'],
      benefits: ['Prevents dry skin', 'Protects furniture', 'Reduces static', 'Improves comfort']
    },
    {
      title: 'Ventilation Solutions',
      description: 'Fresh air ventilation systems for better indoor air quality',
      features: ['Energy recovery ventilation', 'Heat recovery ventilation', 'Balanced ventilation', 'Smart controls'],
      benefits: ['Fresh air circulation', 'Energy efficiency', 'Moisture control', 'Healthier environment']
    },
    {
      title: 'Duct Cleaning',
      description: 'Professional ductwork cleaning to improve air quality',
      features: ['Complete duct cleaning', 'Vent sanitization', 'Filter replacement', 'System inspection'],
      benefits: ['Removes dust buildup', 'Improves airflow', 'Reduces allergens', 'Better efficiency']
    }
  ];

  const airQualityProblems = [
    {
      issue: 'Allergies & Asthma',
      symptoms: ['Sneezing', 'Coughing', 'Watery eyes', 'Breathing difficulties'],
      solutions: ['Air purifiers', 'Better filtration', 'Humidity control']
    },
    {
      issue: 'Dust & Particles',
      symptoms: ['Visible dust', 'Dirty surfaces', 'Clogged filters', 'Poor air circulation'],
      solutions: ['HEPA filters', 'Duct cleaning', 'Air purification']
    },
    {
      issue: 'Odors & Chemicals',
      symptoms: ['Persistent odors', 'Chemical smells', 'Cooking odors', 'Pet odors'],
      solutions: ['Carbon filters', 'UV sterilization', 'Ventilation']
    },
    {
      issue: 'Humidity Issues',
      symptoms: ['Dry air', 'Static electricity', 'Mold growth', 'Condensation'],
      solutions: ['Humidifiers', 'Dehumidifiers', 'Ventilation']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Indoor Air Quality Solutions | Air Purification & Ventilation Systems</title>
        <meta name="description" content="Improve your indoor air quality with professional air purification, humidity control, and ventilation systems. Breathe cleaner, healthier air at home." />
        <meta name="keywords" content="indoor air quality, air purification, air filtration, humidity control, ventilation, duct cleaning, HEPA filters" />
        <link rel="canonical" href="https://prohvacservices.com/services/air-quality" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiWind} className="w-12 h-12 text-yellow-400 mr-4" />
                <h1 className="text-4xl lg:text-6xl font-bold">Air Quality Solutions</h1>
              </div>
              <p className="text-xl text-purple-100 leading-relaxed mb-8">
                Breathe cleaner, healthier air with our professional indoor air quality solutions. From air purification to humidity control, we improve your home's air quality.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:555-HVAC-PRO"
                  className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                  Call (555) HVAC-PRO
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-800 transition-colors flex items-center justify-center"
                >
                  Free Assessment
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Indoor air quality improvement"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Air Quality Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Indoor Air Quality Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive air quality improvements to create a healthier, more comfortable indoor environment for your family.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {airQualitySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                        <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-purple-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-600 text-sm">
                        <SafeIcon icon={FiShield} className="w-4 h-4 text-green-500 mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Air Quality Issues</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We identify and solve common indoor air quality problems to create a healthier living environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {airQualityProblems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{problem.issue}</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Symptoms:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {problem.symptoms.map((symptom, symptomIndex) => (
                      <li key={symptomIndex}>• {symptom}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Solutions:</h4>
                  <ul className="space-y-1 text-sm text-purple-600">
                    {problem.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex}>• {solution}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Air Quality Matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Indoor Air Quality Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Poor indoor air quality affects your health, comfort, and quality of life. Here's why it's important to address.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FiShield,
                title: 'Health Benefits',
                description: 'Reduces allergies, asthma symptoms, and respiratory issues for better overall health.'
              },
              {
                icon: FiWind,
                title: 'Comfort Improvement',
                description: 'Eliminates odors, reduces dust, and maintains optimal humidity for maximum comfort.'
              },
              {
                icon: FiCheckCircle,
                title: 'Energy Efficiency',
                description: 'Clean systems run more efficiently, saving energy and extending equipment life.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={benefit.icon} className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Breathe Better Today</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Don't let poor air quality affect your health and comfort. Contact us for a free air quality assessment and personalized solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:555-HVAC-PRO"
                className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                Call (555) HVAC-PRO
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
              >
                Free Air Quality Assessment
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AirQuality;