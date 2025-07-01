// SEO Utilities and Structured Data
export const generateStructuredData = {
  // Local Business Schema
  localBusiness: () => ({
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
  }),

  // Service Schema
  service: (serviceName, description) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pro HVAC Services"
    },
    "areaServed": {
      "@type": "City",
      "name": "Metro Area"
    }
  }),

  // Article Schema for Blog Posts
  article: (post) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "Pro HVAC Services",
      "logo": {
        "@type": "ImageObject",
        "url": "https://prohvacservices.com/logo.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://prohvacservices.com/blog/${post.slug}`
    }
  }),

  // FAQ Schema
  faq: (questions) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  })
};

// SEO Meta Tag Generator
export const generateMetaTags = (page) => {
  const defaults = {
    title: "Pro HVAC Services - Professional Heating & Cooling Solutions",
    description: "Professional HVAC services including heating, cooling, installation, repair, and maintenance. 24/7 emergency service. Licensed and insured technicians.",
    keywords: "HVAC services,heating repair,air conditioning,furnace installation,AC repair,emergency HVAC,professional HVAC contractor",
    canonical: "https://prohvacservices.com/",
    ogImage: "https://prohvacservices.com/og-image.jpg"
  };

  return {
    title: page.title || defaults.title,
    description: page.description || defaults.description,
    keywords: page.keywords || defaults.keywords,
    canonical: page.canonical || defaults.canonical,
    ogTitle: page.ogTitle || page.title || defaults.title,
    ogDescription: page.ogDescription || page.description || defaults.description,
    ogImage: page.ogImage || defaults.ogImage,
    ogUrl: page.canonical || defaults.canonical
  };
};

// Sitemap Generator
export const generateSitemap = () => {
  const baseUrl = 'https://prohvacservices.com';
  const currentDate = new Date().toISOString();
  
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/services/hvac-installation', priority: '0.9', changefreq: 'monthly' },
    { url: '/services/hvac-repair', priority: '0.9', changefreq: 'monthly' },
    { url: '/services/hvac-maintenance', priority: '0.9', changefreq: 'monthly' },
    { url: '/services/heating', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/cooling', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/air-quality', priority: '0.8', changefreq: 'monthly' },
    { url: '/residential-services', priority: '0.8', changefreq: 'monthly' },
    { url: '/commercial-services', priority: '0.8', changefreq: 'monthly' },
    { url: '/emergency-service', priority: '0.9', changefreq: 'monthly' },
    { url: '/service-areas', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.7', changefreq: 'weekly' },
    { url: '/careers', priority: '0.5', changefreq: 'monthly' }
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`).join('\n')}
</urlset>`;

  return sitemapXml;
};

// Robots.txt Generator
export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

# Disallow admin areas
Disallow: /admin/

# Sitemap
Sitemap: https://prohvacservices.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1`;
};

// Page Speed Optimization Utilities
export const optimizeImages = {
  // Generate responsive image URLs
  responsive: (baseUrl, sizes = [400, 800, 1200]) => {
    return sizes.map(size => `${baseUrl}?w=${size}&q=80`);
  },

  // Generate WebP URLs
  webp: (baseUrl) => {
    return baseUrl.replace(/\.(jpg|jpeg|png)/, '.webp');
  },

  // Lazy loading attributes
  lazyAttributes: {
    loading: 'lazy',
    decoding: 'async'
  }
};