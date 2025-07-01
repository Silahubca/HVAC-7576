import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiClock, FiStar } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'HVAC Installation', path: '/services/hvac-installation' },
    { name: 'HVAC Repair', path: '/services/hvac-repair' },
    { name: 'HVAC Maintenance', path: '/services/hvac-maintenance' },
    { name: 'Heating Services', path: '/services/heating' },
    { name: 'Air Conditioning', path: '/services/cooling' },
    { name: 'Air Quality', path: '/services/air-quality' },
  ];

  const serviceAreas = [
    'Downtown',
    'North Side', 
    'South Side',
    'East End',
    'West End',
    'Suburbs',
  ];

  const handleLinkClick = () => {
    // Scroll to top when clicking footer links
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">PH</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Pro HVAC</h3>
                  <p className="text-sm text-gray-400">Professional Services</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your trusted HVAC professionals providing reliable heating, cooling, and air quality solutions for over 15 years.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="font-semibold">(555) HVAC-PRO</p>
                  <p className="text-sm text-gray-400">24/7 Emergency Service</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-primary-400" />
                <div>
                  <p>info@prohvacservices.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-primary-400" />
                <div>
                  <p>123 Service Drive</p>
                  <p className="text-sm text-gray-400">Your City, ST 12345</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
              <div className="text-center">
                <SafeIcon icon={FiStar} className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                <p className="text-xs text-gray-400">Licensed</p>
              </div>
              <div className="text-center">
                <SafeIcon icon={FiStar} className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                <p className="text-xs text-gray-400">Bonded</p>
              </div>
              <div className="text-center">
                <SafeIcon icon={FiStar} className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                <p className="text-xs text-gray-400">Insured</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    onClick={handleLinkClick}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <Link
                to="/residential-services"
                onClick={handleLinkClick}
                className="text-primary-400 hover:text-primary-300 font-medium text-sm block mb-2"
              >
                Residential Services
              </Link>
              <Link
                to="/commercial-services"
                onClick={handleLinkClick}
                className="text-primary-400 hover:text-primary-300 font-medium text-sm block"
              >
                Commercial Services
              </Link>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Service Areas</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{area}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link
                to="/service-areas"
                onClick={handleLinkClick}
                className="text-primary-400 hover:text-primary-300 font-medium text-sm"
              >
                View All Areas →
              </Link>
            </div>

            {/* Hours */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3 flex items-center">
                <SafeIcon icon={FiClock} className="w-4 h-4 mr-2" />
                Business Hours
              </h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Mon-Fri: 7:00 AM - 8:00 PM</p>
                <p>Saturday: 8:00 AM - 6:00 PM</p>
                <p>Sunday: 9:00 AM - 5:00 PM</p>
                <p className="text-primary-400 font-medium mt-2">24/7 Emergency Service</p>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  onClick={handleLinkClick}
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/emergency-service"
                  onClick={handleLinkClick}
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Emergency Service
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={handleLinkClick}
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Blog & Tips
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  onClick={handleLinkClick}
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <SafeIcon icon={FiFacebook} className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <SafeIcon icon={FiTwitter} className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <SafeIcon icon={FiInstagram} className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="mt-8 p-4 bg-red-600 rounded-lg">
              <h5 className="font-semibold mb-2">Emergency Service</h5>
              <p className="text-sm mb-3">HVAC problems? We're here 24/7</p>
              <a
                href="tel:555-HVAC-PRO"
                className="block bg-white text-red-600 px-4 py-2 rounded font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Call Now: (555) HVAC-PRO
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Pro HVAC Services. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-gray-400">License #HVAC-2024-001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;