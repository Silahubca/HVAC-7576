import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import ProtectedRoute from './components/auth/ProtectedRoute';

import Home from './pages/Home';
import ResidentialServices from './pages/ResidentialServices';
import CommercialServices from './pages/CommercialServices';
import EmergencyService from './pages/EmergencyService';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceAreas from './pages/ServiceAreas';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Service Pages
import HVACInstallation from './pages/services/HVACInstallation';
import HVACRepair from './pages/services/HVACRepair';
import HVACMaintenance from './pages/services/HVACMaintenance';
import HeatingServices from './pages/services/HeatingServices';
import CoolingServices from './pages/services/CoolingServices';
import AirQuality from './pages/services/AirQuality';
import DuctCleaning from './pages/services/DuctCleaning';
import EnergyAudit from './pages/services/EnergyAudit';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import CMSAdmin from './pages/admin/CMSAdmin';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white font-inter">
          <Routes>
            {/* Public Routes */}
            <Route 
              path="/*" 
              element={
                <>
                  <Header />
                  <main>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/residential-services" element={<ResidentialServices />} />
                      <Route path="/commercial-services" element={<CommercialServices />} />
                      <Route path="/emergency-service" element={<EmergencyService />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/service-areas" element={<ServiceAreas />} />
                      <Route path="/service-areas/:areaSlug" element={<ServiceAreas />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/blog/:slug" element={<BlogPost />} />
                      <Route path="/careers" element={<Careers />} />
                      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                      <Route path="/terms-of-service" element={<TermsOfService />} />
                      
                      {/* Service Routes */}
                      <Route path="/services/hvac-installation" element={<HVACInstallation />} />
                      <Route path="/services/hvac-repair" element={<HVACRepair />} />
                      <Route path="/services/hvac-maintenance" element={<HVACMaintenance />} />
                      <Route path="/services/heating" element={<HeatingServices />} />
                      <Route path="/services/cooling" element={<CoolingServices />} />
                      <Route path="/services/air-quality" element={<AirQuality />} />
                      <Route path="/services/duct-cleaning" element={<DuctCleaning />} />
                      <Route path="/services/energy-audit" element={<EnergyAudit />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              } 
            />
            
            {/* Protected Admin Routes */}
            <Route 
              path="/admin/*" 
              element={
                <ProtectedRoute>
                  <ScrollToTop />
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/cms" element={<CMSAdmin />} />
                  </Routes>
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;