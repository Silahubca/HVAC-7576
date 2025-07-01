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
        <title>ZA Tax and Accounting - Professional Tax Services & Accounting Solutions</title>
        <meta name="description" content="Professional tax preparation and accounting services for individuals and businesses. Expert tax planning, bookkeeping, payroll, and financial consulting. Trusted tax professionals." />
        <meta name="keywords" content="tax preparation, accounting services, tax planning, bookkeeping, business taxes, individual taxes, tax professionals, CPA services, payroll services" />
        <link rel="canonical" href="https://zataxandaccounting.com/" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ZA Tax and Accounting",
            "image": "https://zataxandaccounting.com/logo.png",
            "url": "https://zataxandaccounting.com",
            "telephone": "+1-555-TAX-HELP",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Business Drive",
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
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "17:00"
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
              "name": "Tax and Accounting Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Tax Preparation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business Accounting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Tax Planning"
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