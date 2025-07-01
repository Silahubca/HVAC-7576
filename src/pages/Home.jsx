import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ServiceAreas from '../components/home/ServiceAreas';
import Testimonials from '../components/home/Testimonials';
import EmergencyCTA from '../components/home/EmergencyCTA';
import BlogPreview from '../components/home/BlogPreview';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Pro HVAC Services - Professional Heating & Cooling Solutions</title>
        <meta name="description" content="Professional HVAC services including heating, cooling, installation, repair, and maintenance. 24/7 emergency service. Licensed and insured technicians serving the metro area." />
        <meta name="keywords" content="HVAC services,heating repair,air conditioning,furnace installation,AC repair,emergency HVAC,professional HVAC contractor" />
        <link rel="canonical" href="https://prohvacservices.com/" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Pro HVAC Services",
            "image": "https://prohvacservices.com/logo.png",
            "url": "https://prohvacservices.com",
            "telephone": "+1-555-HVAC-PRO",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Service Drive",
              "addressLocality": "Your City",
              "addressRegion": "ST",
              "postalCode": "12345",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.7128,
              "longitude": -74.0060
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
              "opens": "07:00",
              "closes": "20:00"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 40.7128,
                "longitude": -74.0060
              },
              "geoRadius": "50"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "HVAC Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "HVAC Installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "HVAC Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "HVAC Maintenance"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <Hero />
      <Services />
      <WhyChooseUs />
      <ServiceAreas />
      <Testimonials />
      <EmergencyCTA />
      <BlogPreview />
    </>
  );
};

export default Home;