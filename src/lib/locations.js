// Location and service area management
export const serviceAreas = [
  {
    id: 'downtown',
    name: 'Downtown',
    slug: 'downtown',
    description: 'Complete HVAC services for downtown residential and commercial properties',
    responseTime: '30 minutes',
    population: '50,000+',
    zipCodes: ['12345', '12346', '12347'],
    coordinates: { lat: 40.7128, lng: -74.0060 },
    highlights: [
      'High-rise buildings',
      'Commercial districts', 
      'Historic homes',
      'New condominiums'
    ],
    services: [
      'Residential HVAC',
      'Commercial HVAC', 
      'Emergency Service',
      'Maintenance Plans'
    ],
    neighborhoods: [
      'Financial District',
      'Arts Quarter',
      'Business Core',
      'Waterfront District'
    ],
    emergencyResponse: true,
    commercialSpecialty: true,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'north-side',
    name: 'North Side',
    slug: 'north-side',
    description: 'Professional heating and cooling services for North Side neighborhoods',
    responseTime: '45 minutes',
    population: '35,000+',
    zipCodes: ['12350', '12351', '12352'],
    coordinates: { lat: 40.7580, lng: -73.9855 },
    highlights: [
      'Suburban homes',
      'Family neighborhoods',
      'Shopping centers',
      'Schools'
    ],
    services: [
      'Residential HVAC',
      'Commercial HVAC',
      'Emergency Service', 
      'Installation'
    ],
    neighborhoods: [
      'Northwood',
      'Maple Heights',
      'University District',
      'Riverside'
    ],
    emergencyResponse: true,
    commercialSpecialty: false,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'south-side',
    name: 'South Side',
    slug: 'south-side', 
    description: 'Reliable HVAC solutions for South Side residential and business communities',
    responseTime: '45 minutes',
    population: '40,000+',
    zipCodes: ['12360', '12361', '12362'],
    coordinates: { lat: 40.6892, lng: -74.0445 },
    highlights: [
      'Mixed residential',
      'Business parks',
      'Industrial areas',
      'Retail spaces'
    ],
    services: [
      'Residential HVAC',
      'Commercial HVAC',
      'Industrial HVAC',
      'Emergency Service'
    ],
    neighborhoods: [
      'Southgate',
      'Industrial Park',
      'Heritage Village',
      'Commerce Center'
    ],
    emergencyResponse: true,
    commercialSpecialty: true,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'east-end',
    name: 'East End',
    slug: 'east-end',
    description: 'Expert HVAC installation, repair, and maintenance for East End areas',
    responseTime: '40 minutes', 
    population: '25,000+',
    zipCodes: ['12370', '12371'],
    coordinates: { lat: 40.7282, lng: -73.9942 },
    highlights: [
      'Established neighborhoods',
      'Local businesses',
      'Community centers',
      'Parks'
    ],
    services: [
      'Residential HVAC',
      'Commercial HVAC',
      'Emergency Service',
      'Energy Audits'
    ],
    neighborhoods: [
      'Eastwood',
      'Park View',
      'Old Town',
      'Lakeside'
    ],
    emergencyResponse: true,
    commercialSpecialty: false,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'west-end',
    name: 'West End',
    slug: 'west-end',
    description: 'Comprehensive heating and cooling services for West End residents and businesses',
    responseTime: '50 minutes',
    population: '30,000+', 
    zipCodes: ['12380', '12381'],
    coordinates: { lat: 40.7589, lng: -73.9851 },
    highlights: [
      'Growing communities',
      'New developments',
      'Strip malls',
      'Medical facilities'
    ],
    services: [
      'Residential HVAC',
      'Commercial HVAC',
      'New Construction',
      'Emergency Service'
    ],
    neighborhoods: [
      'Westbrook',
      'New Town',
      'Medical District',
      'Sunset Hills'
    ],
    emergencyResponse: true,
    commercialSpecialty: true,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'suburbs',
    name: 'Suburban Areas',
    slug: 'suburbs',
    description: 'Complete HVAC solutions for suburban homes and commercial facilities',
    responseTime: '60 minutes',
    population: '45,000+',
    zipCodes: ['12390', '12391', '12392', '12393'],
    coordinates: { lat: 40.7831, lng: -73.9712 },
    highlights: [
      'Single-family homes',
      'Planned communities', 
      'Shopping centers',
      'Office parks'
    ],
    services: [
      'Residential HVAC',
      'Commercial HVAC',
      'Emergency Service',
      'Preventive Maintenance'
    ],
    neighborhoods: [
      'Fairfield',
      'Oak Grove',
      'Meadowbrook',
      'Country Club',
      'Pine Ridge'
    ],
    emergencyResponse: true,
    commercialSpecialty: false,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export const serviceTypes = [
  {
    id: 'hvac-installation',
    name: 'HVAC Installation',
    slug: 'hvac-installation',
    category: 'Installation',
    description: 'Professional installation of heating and cooling systems',
    availableIn: serviceAreas.map(area => area.id),
    emergencyAvailable: false,
    estimatedDuration: '1-3 days',
    startingPrice: '$3,500'
  },
  {
    id: 'hvac-repair', 
    name: 'HVAC Repair',
    slug: 'hvac-repair',
    category: 'Repair',
    description: 'Fast, reliable repairs for all HVAC systems',
    availableIn: serviceAreas.map(area => area.id),
    emergencyAvailable: true,
    estimatedDuration: '2-4 hours',
    startingPrice: '$95'
  },
  {
    id: 'hvac-maintenance',
    name: 'HVAC Maintenance', 
    slug: 'hvac-maintenance',
    category: 'Maintenance',
    description: 'Preventive maintenance plans and tune-ups',
    availableIn: serviceAreas.map(area => area.id),
    emergencyAvailable: false,
    estimatedDuration: '2-3 hours',
    startingPrice: '$149/year'
  },
  {
    id: 'heating-services',
    name: 'Heating Services',
    slug: 'heating',
    category: 'Heating',
    description: 'Furnace, heat pump, and boiler services',
    availableIn: serviceAreas.map(area => area.id),
    emergencyAvailable: true,
    estimatedDuration: '2-6 hours',
    startingPrice: '$125'
  },
  {
    id: 'cooling-services',
    name: 'Cooling Services', 
    slug: 'cooling',
    category: 'Cooling',
    description: 'Air conditioning installation, repair, and maintenance',
    availableIn: serviceAreas.map(area => area.id),
    emergencyAvailable: true,
    estimatedDuration: '2-6 hours',
    startingPrice: '$135'
  },
  {
    id: 'air-quality',
    name: 'Air Quality Solutions',
    slug: 'air-quality',
    category: 'Air Quality',
    description: 'Indoor air quality improvement systems',
    availableIn: serviceAreas.map(area => area.id),
    emergencyAvailable: false,
    estimatedDuration: '4-8 hours',
    startingPrice: '$199'
  },
  {
    id: 'duct-cleaning',
    name: 'Duct Cleaning',
    slug: 'duct-cleaning', 
    category: 'Maintenance',
    description: 'Professional ductwork cleaning services',
    availableIn: serviceAreas.map(area => area.id),
    emergencyAvailable: false,
    estimatedDuration: '4-6 hours',
    startingPrice: '$299'
  },
  {
    id: 'energy-audit',
    name: 'Energy Audit',
    slug: 'energy-audit',
    category: 'Assessment',
    description: 'Comprehensive energy efficiency evaluation',
    availableIn: serviceAreas.map(area => area.id),
    emergencyAvailable: false,
    estimatedDuration: '3-4 hours',
    startingPrice: '$199'
  }
];

// Location utility functions
export const getServiceAreaBySlug = (slug) => {
  return serviceAreas.find(area => area.slug === slug);
};

export const getServiceAreaById = (id) => {
  return serviceAreas.find(area => area.id === id);
};

export const getServicesByArea = (areaId) => {
  const area = getServiceAreaById(areaId);
  return area ? serviceTypes.filter(service => 
    service.availableIn.includes(areaId)
  ) : [];
};

export const getEmergencyServices = () => {
  return serviceTypes.filter(service => service.emergencyAvailable);
};

export const getServiceAreaByZipCode = (zipCode) => {
  return serviceAreas.find(area => 
    area.zipCodes.includes(zipCode)
  );
};

export const isServiceAvailable = (serviceId, areaId) => {
  const service = serviceTypes.find(s => s.id === serviceId);
  return service ? service.availableIn.includes(areaId) : false;
};

export const getResponseTime = (areaId) => {
  const area = getServiceAreaById(areaId);
  return area ? area.responseTime : 'Contact for details';
};

export const generateServiceAreaSitemap = () => {
  return serviceAreas.map(area => ({
    url: `/service-areas/${area.slug}`,
    lastModified: new Date().toISOString(),
    priority: 0.7
  }));
};

export const generateServiceSitemap = () => {
  return serviceTypes.map(service => ({
    url: `/services/${service.slug}`,
    lastModified: new Date().toISOString(), 
    priority: 0.8
  }));
};

// SEO helpers for location pages
export const generateLocationSEO = (area) => {
  return {
    title: `Professional HVAC Services in ${area.name} | Pro HVAC Services`,
    description: `Expert HVAC services in ${area.name}. ${area.description} Fast ${area.responseTime} response time. Call (555) HVAC-PRO.`,
    keywords: [
      `HVAC ${area.name}`,
      `heating cooling ${area.name}`,
      `HVAC repair ${area.name}`,
      `air conditioning ${area.name}`,
      ...area.neighborhoods.map(n => `HVAC ${n}`)
    ].join(', '),
    canonicalUrl: `https://prohvacservices.com/service-areas/${area.slug}`
  };
};

export const generateServiceLocationSEO = (service, area) => {
  return {
    title: `${service.name} in ${area.name} | Pro HVAC Services`,
    description: `Professional ${service.name.toLowerCase()} in ${area.name}. ${service.description} Starting at ${service.startingPrice}. Call (555) HVAC-PRO.`,
    keywords: [
      `${service.name} ${area.name}`,
      `${service.category} ${area.name}`,
      ...area.neighborhoods.map(n => `${service.name} ${n}`)
    ].join(', '),
    canonicalUrl: `https://prohvacservices.com/services/${service.slug}/${area.slug}`
  };
};