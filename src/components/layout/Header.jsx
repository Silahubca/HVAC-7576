import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPhone, FiMenu, FiX, FiChevronDown, FiMapPin, FiClock } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const services = [
    { name: 'HVAC Installation', path: '/services/hvac-installation' },
    { name: 'HVAC Repair', path: '/services/hvac-repair' },
    { name: 'HVAC Maintenance', path: '/services/hvac-maintenance' },
    { name: 'Heating Services', path: '/services/heating' },
    { name: 'Cooling Services', path: '/services/cooling' },
    { name: 'Air Quality', path: '/services/air-quality' },
    { name: 'Duct Cleaning', path: '/services/duct-cleaning' },
    { name: 'Energy Audit', path: '/services/energy-audit' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    // Small delay to ensure route change completes before scroll
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiPhone} className="w-4 h-4" />
              <span className="font-medium">24/7 Emergency Service: (555) HVAC-PRO</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <SafeIcon icon={FiMapPin} className="w-4 h-4" />
              <span>Serving Greater Metro Area</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-1 sm:mt-0">
            <SafeIcon icon={FiClock} className="w-4 h-4" />
            <span>Licensed • Bonded • Insured</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" onClick={handleLinkClick} className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PH</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Pro HVAC</h1>
                <p className="text-sm text-gray-600">Professional Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                onClick={handleLinkClick}
                className={`text-gray-700 hover:text-primary-600 transition-colors ${
                  location.pathname === '/' ? 'text-primary-600 font-medium' : ''
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors">
                  <span>Services</span>
                  <SafeIcon icon={FiChevronDown} className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                    >
                      <div className="px-4 py-2 border-b border-gray-100">
                        <h3 className="font-semibold text-gray-900">Our Services</h3>
                      </div>
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          onClick={handleLinkClick}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <Link
                          to="/residential-services"
                          onClick={handleLinkClick}
                          className="block px-4 py-2 text-primary-600 font-medium hover:bg-primary-50"
                        >
                          Residential Services
                        </Link>
                        <Link
                          to="/commercial-services"
                          onClick={handleLinkClick}
                          className="block px-4 py-2 text-primary-600 font-medium hover:bg-primary-50"
                        >
                          Commercial Services
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/emergency-service" 
                onClick={handleLinkClick}
                className={`text-gray-700 hover:text-primary-600 transition-colors ${
                  location.pathname === '/emergency-service' ? 'text-primary-600 font-medium' : ''
                }`}
              >
                Emergency
              </Link>

              <Link 
                to="/about" 
                onClick={handleLinkClick}
                className={`text-gray-700 hover:text-primary-600 transition-colors ${
                  location.pathname === '/about' ? 'text-primary-600 font-medium' : ''
                }`}
              >
                About
              </Link>

              <Link 
                to="/service-areas" 
                onClick={handleLinkClick}
                className={`text-gray-700 hover:text-primary-600 transition-colors ${
                  location.pathname === '/service-areas' ? 'text-primary-600 font-medium' : ''
                }`}
              >
                Service Areas
              </Link>

              <Link 
                to="/contact" 
                onClick={handleLinkClick}
                className={`text-gray-700 hover:text-primary-600 transition-colors ${
                  location.pathname === '/contact' ? 'text-primary-600 font-medium' : ''
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:555-HVAC-PRO"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center space-x-2"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-4 space-y-4">
                <Link
                  to="/"
                  className="block text-gray-700 hover:text-primary-600 py-2"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>

                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">Services</p>
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block text-gray-600 hover:text-primary-600 py-1 pl-4"
                      onClick={handleLinkClick}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/emergency-service"
                  className="block text-gray-700 hover:text-primary-600 py-2"
                  onClick={handleLinkClick}
                >
                  Emergency Service
                </Link>

                <Link
                  to="/about"
                  className="block text-gray-700 hover:text-primary-600 py-2"
                  onClick={handleLinkClick}
                >
                  About
                </Link>

                <Link
                  to="/contact"
                  className="block text-gray-700 hover:text-primary-600 py-2"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>

                <a
                  href="tel:555-HVAC-PRO"
                  className="block bg-primary-600 text-white px-4 py-3 rounded-lg font-semibold text-center"
                >
                  Call (555) HVAC-PRO
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;