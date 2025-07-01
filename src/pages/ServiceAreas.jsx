import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { serviceAreas, getServiceAreaBySlug, generateLocationSEO } from '../lib/locations';

const { FiMapPin, FiPhone, FiClock, FiArrowRight, FiUsers, FiHome } = FiIcons;

const ServiceAreas = () => {
  const { areaSlug } = useParams();
  const [selectedArea, setSelectedArea] = useState(null);

  // If specific area requested, show detailed view
  React.useEffect(() => {
    if (areaSlug) {
      const area = getServiceAreaBySlug(areaSlug);
      setSelectedArea(area);
    }
  }, [areaSlug]);

  // If viewing specific area
  if (selectedArea) {
    const seo = generateLocationSEO(selectedArea);
    
    return (
      <>
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
          <link rel="canonical" href={seo.canonicalUrl} />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": `Pro HVAC Services - ${selectedArea.name}`,
              "description": selectedArea.description,
              "areaServed": {
                "@type": "City",
                "name": selectedArea.name
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": selectedArea.coordinates.lat,
                "longitude": selectedArea.coordinates.lng
              }
            })}
          </script>
        </Helmet>

        {/* Area Hero */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/service-areas" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
                <SafeIcon icon={FiArrowRight} className="w-4 h-4 mr-2 rotate-180" />
                Back to All Areas
              </Link>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                    HVAC Services in {selectedArea.name}
                  </h1>
                  <p className="text-xl text-blue-100 leading-relaxed mb-8">
                    {selectedArea.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="bg-white bg-opacity-10 rounded-lg p-4">
                      <SafeIcon icon={FiClock} className="w-6 h-6 text-yellow-400 mb-2" />
                      <div className="font-semibold">Response Time</div>
                      <div className="text-blue-100">{selectedArea.responseTime}</div>
                    </div>
                    <div className="bg-white bg-opacity-10 rounded-lg p-4">
                      <SafeIcon icon={FiUsers} className="w-6 h-6 text-yellow-400 mb-2" />
                      <div className="font-semibold">Population</div>
                      <div className="text-blue-100">{selectedArea.population}</div>
                    </div>
                  </div>

                  <a
                    href="tel:555-HVAC-PRO"
                    className="bg-yellow-400 text-primary-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center"
                  >
                    <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                    Call (555) HVAC-PRO
                  </a>
                </div>
                
                <div className="relative">
                  <img
                    src={selectedArea.image}
                    alt={`HVAC services in ${selectedArea.name}`}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Area Details */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Neighborhoods */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Neighborhoods We Serve</h3>
                <ul className="space-y-3">
                  {selectedArea.neighborhoods.map((neighborhood, index) => (
                    <li key={index} className="flex items-center">
                      <SafeIcon icon={FiMapPin} className="w-4 h-4 text-primary-600 mr-3" />
                      <span className="text-gray-700">{neighborhood}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Services</h3>
                <ul className="space-y-3">
                  {selectedArea.services.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <SafeIcon icon={FiHome} className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Area Highlights</h3>
                <ul className="space-y-3">
                  {selectedArea.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <SafeIcon icon={FiArrowRight} className="w-4 h-4 text-blue-500 mr-3" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Schedule Service in {selectedArea.name}?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our local technicians are ready to help with all your HVAC needs in {selectedArea.name}. 
                Fast response time: {selectedArea.responseTime}.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="tel:555-HVAC-PRO"
                  className="bg-yellow-400 text-primary-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                  Call (555) HVAC-PRO
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center justify-center"
                >
                  Schedule Online
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-3" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  // Default service areas overview
  return (
    <>
      <Helmet>
        <title>HVAC Service Areas | Professional Heating & Cooling Coverage Map</title>
        <meta name="description" content="Pro HVAC Services covers the entire metro area with fast response times. View our complete service area map and coverage zones for residential and commercial HVAC services." />
        <meta name="keywords" content="HVAC service areas, heating cooling coverage, HVAC service map, emergency HVAC areas, local HVAC contractor" />
        <link rel="canonical" href="https://prohvacservices.com/service-areas" />
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
            <div className="flex items-center justify-center mb-6">
              <SafeIcon icon={FiMapPin} className="w-12 h-12 text-yellow-400 mr-4" />
              <h1 className="text-4xl lg:text-6xl font-bold">Service Areas</h1>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              We proudly serve the entire metro area with fast response times and local expertise. Find your area below to see our services and response times.
            </p>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-lg font-semibold mb-2">Not sure if we serve your area?</p>
              <a
                href="tel:555-HVAC-PRO"
                className="bg-yellow-400 text-primary-800 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors inline-flex items-center"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                Call (555) HVAC-PRO
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Coverage Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional HVAC services across all major areas with guaranteed response times and local technicians.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.image}
                    alt={`${area.name} HVAC services`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      area.emergencyResponse ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                    }`}>
                      {area.emergencyResponse ? '24/7 Emergency' : 'Standard Service'}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{area.name}</h3>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Response Time</div>
                      <div className="font-bold text-primary-600">{area.responseTime}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">{area.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {area.highlights.slice(0, 4).map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="text-sm text-gray-600">
                          • {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/service-areas/${area.slug}`}
                      className="bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-sm"
                    >
                      View Details
                    </Link>
                    <a
                      href="tel:555-HVAC-PRO"
                      className="text-primary-600 hover:text-primary-700 font-semibold text-sm inline-flex items-center"
                    >
                      <SafeIcon icon={FiPhone} className="w-4 h-4 mr-1" />
                      Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Service Coverage Map</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our service area covers a 50-mile radius from our central location, ensuring fast response times throughout the metro area.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center"
            >
              <div className="text-center text-gray-600">
                <SafeIcon icon={FiMapPin} className="w-16 h-16 mx-auto mb-4 text-primary-600" />
                <p className="text-lg font-semibold">Interactive Service Area Map</p>
                <p className="text-sm">Covering 50+ mile radius</p>
              </div>
            </motion.div>

            {/* Coverage Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Coverage Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <SafeIcon icon={FiMapPin} className="w-6 h-6 text-primary-600 mr-3" />
                    <div>
                      <span className="font-semibold">Primary Zone:</span>
                      <span className="text-gray-600 ml-2">0-25 miles (30-45 min response)</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiMapPin} className="w-6 h-6 text-orange-500 mr-3" />
                    <div>
                      <span className="font-semibold">Extended Zone:</span>
                      <span className="text-gray-600 ml-2">25-50 miles (45-90 min response)</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiClock} className="w-6 h-6 text-green-500 mr-3" />
                    <div>
                      <span className="font-semibold">Emergency Service:</span>
                      <span className="text-gray-600 ml-2">Available 24/7 all zones</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Service Guarantee</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Licensed and insured in all service areas</li>
                  <li>• Local technicians familiar with area codes and regulations</li>
                  <li>• Same-day service available in most areas</li>
                  <li>• No travel charges within primary service zone</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="tel:555-HVAC-PRO"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                  Check Your Area
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors flex items-center justify-center"
                >
                  Schedule Service
                </Link>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Schedule Service?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today to schedule HVAC service in your area. We're here to keep you comfortable year-round.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:555-HVAC-PRO"
                className="bg-yellow-400 text-primary-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-3" />
                Call (555) HVAC-PRO
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center justify-center"
              >
                Schedule Online
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreas;