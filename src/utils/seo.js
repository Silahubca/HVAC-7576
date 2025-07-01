// SEO Utilities and Structured Data
export const generateStructuredData = {
  // Local Business Schema
  localBusiness: () => ({
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
  }),

  // Service Schema
  service: (serviceName, description) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "ZA Tax and Accounting"
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
      "name": "ZA Tax and Accounting",
      "logo": {
        "@type": "ImageObject",
        "url": "https://zataxandaccounting.com/logo.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://zataxandaccounting.com/blog/${post.slug}`
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
    title: "ZA Tax and Accounting - Professional Tax Services & Accounting Solutions",
    description: "Professional tax preparation and accounting services for individuals and businesses. Expert tax planning, bookkeeping, and financial consulting services.",
    keywords: "tax preparation, accounting services, tax planning, bookkeeping, business taxes, individual taxes, tax professionals",
    canonical: "https://zataxandaccounting.com/",
    ogImage: "https://zataxandaccounting.com/og-image.jpg"
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
  const baseUrl = 'https://zataxandaccounting.com';
  const currentDate = new Date().toISOString();

  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/services/tax-preparation', priority: '0.9', changefreq: 'monthly' },
    { url: '/services/business-taxes', priority: '0.9', changefreq: 'monthly' },
    { url: '/services/bookkeeping', priority: '0.9', changefreq: 'monthly' },
    { url: '/services/tax-planning', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/payroll', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/financial-consulting', priority: '0.8', changefreq: 'monthly' },
    { url: '/individual-services', priority: '0.8', changefreq: 'monthly' },
    { url: '/business-services', priority: '0.8', changefreq: 'monthly' },
    { url: '/tax-relief', priority: '0.9', changefreq: 'monthly' },
    { url: '/service-areas', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.7', changefreq: 'weekly' },
    { url: '/careers', priority: '0.5', changefreq: 'monthly' }
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
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
Sitemap: https://zataxandaccounting.com/sitemap.xml

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