// Simple CMS functionality for blog management
// In production, this would connect to a headless CMS like Strapi, Contentful, or Sanity

class BlogCMS {
  constructor() {
    this.posts = this.initializePosts();
    this.categories = [
      'All',
      'Maintenance Tips',
      'Energy Efficiency', 
      'Seasonal Tips',
      'Installation Guide',
      'Troubleshooting',
      'Air Quality',
      'Commercial HVAC',
      'Residential HVAC'
    ];
  }

  initializePosts() {
    return [
      {
        id: 1,
        title: '5 Signs Your HVAC System Needs Professional Attention',
        slug: '5-signs-hvac-needs-attention',
        excerpt: 'Learn to recognize the warning signs that indicate your heating and cooling system requires professional service before costly breakdowns occur.',
        content: this.getPostContent('5-signs-hvac-needs-attention'),
        author: {
          name: 'Mike Johnson',
          bio: 'Lead HVAC Technician with 20+ years experience',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        publishedAt: '2024-01-15',
        updatedAt: '2024-01-15',
        readTime: '5 min read',
        category: 'Maintenance Tips',
        tags: ['maintenance', 'troubleshooting', 'signs', 'professional service'],
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: true,
        status: 'published',
        seo: {
          metaTitle: '5 Warning Signs Your HVAC System Needs Professional Repair',
          metaDescription: 'Discover the key warning signs that indicate your HVAC system needs professional attention. Learn when to call for service to prevent costly breakdowns.',
          keywords: ['HVAC warning signs', 'heating repair', 'AC problems', 'HVAC maintenance', 'system failure']
        }
      },
      {
        id: 2,
        title: 'Energy-Efficient HVAC Upgrades That Pay for Themselves',
        slug: 'energy-efficient-hvac-upgrades',
        excerpt: 'Discover smart HVAC upgrades that can significantly reduce your energy bills while improving comfort and increasing your home\'s value.',
        content: this.getPostContent('energy-efficient-hvac-upgrades'),
        author: {
          name: 'Sarah Davis',
          bio: 'Energy Efficiency Specialist and Senior HVAC Technician',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        publishedAt: '2024-01-10',
        updatedAt: '2024-01-10',
        readTime: '7 min read',
        category: 'Energy Efficiency',
        tags: ['energy efficiency', 'upgrades', 'cost savings', 'ROI'],
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: true,
        status: 'published',
        seo: {
          metaTitle: 'Energy-Efficient HVAC Upgrades That Save Money',
          metaDescription: 'Learn about cost-effective HVAC upgrades that reduce energy bills and pay for themselves. Improve efficiency and home value.',
          keywords: ['energy efficient HVAC', 'HVAC upgrades', 'energy savings', 'home efficiency']
        }
      },
      {
        id: 3,
        title: 'Winter HVAC Maintenance Checklist for Homeowners',
        slug: 'winter-hvac-maintenance-checklist',
        excerpt: 'Essential winter maintenance tasks to keep your heating system running efficiently and prevent unexpected breakdowns during cold weather.',
        content: this.getPostContent('winter-hvac-maintenance-checklist'),
        author: {
          name: 'Tom Wilson',
          bio: 'Installation Specialist with expertise in seasonal maintenance',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        publishedAt: '2024-01-05',
        updatedAt: '2024-01-05',
        readTime: '6 min read',
        category: 'Seasonal Tips',
        tags: ['winter maintenance', 'heating system', 'checklist', 'prevention'],
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: false,
        status: 'published',
        seo: {
          metaTitle: 'Winter HVAC Maintenance Checklist - Keep Your System Running',
          metaDescription: 'Complete winter HVAC maintenance checklist for homeowners. Prevent heating system breakdowns with these essential maintenance tasks.',
          keywords: ['winter HVAC maintenance', 'heating system checklist', 'winter preparation', 'HVAC winterization']
        }
      },
      {
        id: 4,
        title: 'How to Choose the Right HVAC System for Your Home',
        slug: 'choose-right-hvac-system',
        excerpt: 'A comprehensive guide to selecting the perfect heating and cooling system based on your home size, budget, and efficiency needs.',
        content: this.getPostContent('choose-right-hvac-system'),
        author: {
          name: 'Mike Johnson',
          bio: 'Lead HVAC Technician with 20+ years experience',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        publishedAt: '2023-12-28',
        updatedAt: '2023-12-28',
        readTime: '8 min read',
        category: 'Installation Guide',
        tags: ['HVAC selection', 'system sizing', 'installation', 'buying guide'],
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: false,
        status: 'published',
        seo: {
          metaTitle: 'How to Choose the Right HVAC System for Your Home',
          metaDescription: 'Complete guide to selecting the perfect HVAC system. Learn about sizing, efficiency, and costs to make the best choice for your home.',
          keywords: ['HVAC system selection', 'choosing HVAC', 'HVAC buying guide', 'system sizing']
        }
      },
      {
        id: 5,
        title: 'Common HVAC Problems and When to Call a Professional',
        slug: 'common-hvac-problems',
        excerpt: 'Identify common heating and cooling issues, understand when you can fix them yourself, and when it\'s time to call the experts.',
        content: this.getPostContent('common-hvac-problems'),
        author: {
          name: 'Sarah Davis',
          bio: 'Energy Efficiency Specialist and Senior HVAC Technician',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        publishedAt: '2023-12-20',
        updatedAt: '2023-12-20',
        readTime: '6 min read',
        category: 'Troubleshooting',
        tags: ['troubleshooting', 'common problems', 'DIY vs professional', 'HVAC issues'],
        image: 'https://images.unsplash.com/photo-1581094289441-9c7c6d0dbb6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: false,
        status: 'published',
        seo: {
          metaTitle: 'Common HVAC Problems and When to Call a Professional',
          metaDescription: 'Learn about common HVAC problems and when to call for professional help. Troubleshoot issues safely and effectively.',
          keywords: ['HVAC problems', 'HVAC troubleshooting', 'heating issues', 'AC problems']
        }
      },
      {
        id: 6,
        title: 'The Complete Guide to HVAC Air Filters',
        slug: 'guide-to-hvac-air-filters',
        excerpt: 'Everything you need to know about HVAC air filters, including types, replacement schedules, and how they impact your indoor air quality.',
        content: this.getPostContent('guide-to-hvac-air-filters'),
        author: {
          name: 'Tom Wilson',
          bio: 'Installation Specialist with expertise in seasonal maintenance',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        publishedAt: '2023-12-15',
        updatedAt: '2023-12-15',
        readTime: '5 min read',
        category: 'Air Quality',
        tags: ['air filters', 'indoor air quality', 'maintenance', 'filter types'],
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        featured: false,
        status: 'published',
        seo: {
          metaTitle: 'Complete Guide to HVAC Air Filters - Types, Replacement & Benefits',
          metaDescription: 'Everything about HVAC air filters: types, replacement schedules, and impact on air quality. Choose the right filter for your system.',
          keywords: ['HVAC air filters', 'air filter guide', 'filter replacement', 'indoor air quality']
        }
      }
    ];
  }

  getPostContent(slug) {
    const contentMap = {
      '5-signs-hvac-needs-attention': `
        <p>Your HVAC system works hard year-round to keep your home comfortable, but like any complex mechanical system, it can develop problems over time. Recognizing the early warning signs of HVAC issues can save you money, prevent uncomfortable breakdowns, and extend the life of your equipment.</p>
        
        <h2>1. Unusual Noises</h2>
        <p>While HVAC systems aren't completely silent, certain sounds indicate problems:</p>
        <ul>
          <li><strong>Grinding or squealing:</strong> Usually indicates worn bearings or belts</li>
          <li><strong>Banging or clanking:</strong> May suggest loose or broken components</li>
          <li><strong>Hissing:</strong> Could indicate refrigerant leaks or ductwork issues</li>
          <li><strong>Clicking repeatedly:</strong> Might signal electrical problems</li>
        </ul>
        
        <h2>2. Poor Air Quality</h2>
        <p>Your HVAC system plays a crucial role in maintaining indoor air quality. Signs of air quality issues include:</p>
        <ul>
          <li>Excessive dust accumulation</li>
          <li>Musty or unpleasant odors</li>
          <li>Increased allergy symptoms</li>
          <li>Humidity problems (too dry or too humid)</li>
        </ul>
        
        <h2>3. Inconsistent Temperatures</h2>
        <p>If you notice significant temperature differences between rooms or floors, this could indicate:</p>
        <ul>
          <li>Ductwork problems</li>
          <li>Failing components</li>
          <li>Improper system sizing</li>
          <li>Air flow restrictions</li>
        </ul>
        
        <h2>4. Rising Energy Bills</h2>
        <p>A sudden or gradual increase in energy costs without corresponding changes in usage patterns often signals HVAC inefficiency. Common causes include:</p>
        <ul>
          <li>Dirty or clogged filters</li>
          <li>Aging equipment</li>
          <li>Refrigerant leaks</li>
          <li>Poor maintenance</li>
        </ul>
        
        <h2>5. Frequent Cycling or Poor Performance</h2>
        <p>Your HVAC system should cycle on and off regularly. Problems include:</p>
        <ul>
          <li>System running constantly</li>
          <li>Short cycling (turning on and off frequently)</li>
          <li>Inability to reach set temperature</li>
          <li>Weak airflow from vents</li>
        </ul>
        
        <h2>When to Call a Professional</h2>
        <p>While some maintenance tasks can be done by homeowners (like changing filters), these warning signs require professional attention:</p>
        <ul>
          <li>Any electrical issues</li>
          <li>Refrigerant problems</li>
          <li>Gas-related concerns</li>
          <li>Complex mechanical repairs</li>
        </ul>
        
        <h2>Prevention is Key</h2>
        <p>Regular maintenance can prevent many of these issues:</p>
        <ul>
          <li>Change filters regularly (every 1-3 months)</li>
          <li>Keep outdoor units clear of debris</li>
          <li>Schedule annual professional maintenance</li>
          <li>Address small issues before they become big problems</li>
        </ul>
      `,
      'energy-efficient-hvac-upgrades': `
        <p>Investing in energy-efficient HVAC upgrades can significantly reduce your energy bills while improving your home's comfort and value. Here are the most cost-effective upgrades that provide excellent return on investment.</p>
        
        <h2>1. High-Efficiency HVAC Systems</h2>
        <p>Modern high-efficiency systems can reduce energy consumption by 20-40% compared to older units:</p>
        <ul>
          <li><strong>Heat Pumps:</strong> SEER ratings of 16+ for cooling, HSPF 9+ for heating</li>
          <li><strong>Gas Furnaces:</strong> AFUE ratings of 90%+ for maximum efficiency</li>
          <li><strong>Air Conditioners:</strong> SEER 16+ ratings for optimal cooling efficiency</li>
        </ul>
        
        <h2>2. Smart Thermostats</h2>
        <p>Smart thermostats offer precise control and scheduling capabilities:</p>
        <ul>
          <li>Program heating and cooling around your schedule</li>
          <li>Remote control via smartphone apps</li>
          <li>Learning algorithms that adapt to your preferences</li>
          <li>Energy usage reports and optimization suggestions</li>
          <li>Potential savings: 10-15% on energy bills</li>
        </ul>
        
        <h2>3. Ductwork Improvements</h2>
        <p>Leaky or poorly insulated ducts waste 20-30% of conditioned air:</p>
        <ul>
          <li>Duct sealing to eliminate air leaks</li>
          <li>Proper insulation in unconditioned spaces</li>
          <li>Duct design optimization for better airflow</li>
          <li>Regular cleaning to maintain efficiency</li>
        </ul>
        
        <h2>4. Zoned HVAC Systems</h2>
        <p>Zone control systems allow independent temperature control for different areas:</p>
        <ul>
          <li>Motorized dampers in ductwork</li>
          <li>Multiple thermostats for different zones</li>
          <li>Heat only occupied areas</li>
          <li>Potential savings: 20-30% on energy costs</li>
        </ul>
        
        <h2>5. Air Quality Improvements</h2>
        <p>Better filtration and air quality systems improve efficiency:</p>
        <ul>
          <li>High-efficiency air filters</li>
          <li>UV air purification systems</li>
          <li>Humidity control systems</li>
          <li>Energy recovery ventilation (ERV)</li>
        </ul>
        
        <h2>Financing and Incentives</h2>
        <p>Many upgrades qualify for rebates and financing:</p>
        <ul>
          <li>Federal tax credits for high-efficiency equipment</li>
          <li>Utility company rebates</li>
          <li>Manufacturer financing programs</li>
          <li>Energy efficiency loans</li>
        </ul>
      `,
      'winter-hvac-maintenance-checklist': `
        <p>Proper winter maintenance ensures your heating system operates safely and efficiently throughout the cold season. Follow this comprehensive checklist to prevent breakdowns and optimize performance.</p>
        
        <h2>Pre-Winter Inspection (September-October)</h2>
        <h3>Heating System Check</h3>
        <ul>
          <li>Test heating system operation</li>
          <li>Inspect heat exchanger for cracks</li>
          <li>Check gas connections and valves</li>
          <li>Test thermostat accuracy and programming</li>
          <li>Inspect venting and flue pipes</li>
        </ul>
        
        <h3>Air Filtration</h3>
        <ul>
          <li>Replace or clean air filters</li>
          <li>Check filter fit and seal</li>
          <li>Inspect ductwork for leaks</li>
          <li>Clean return air vents</li>
        </ul>
        
        <h2>Monthly Winter Tasks</h2>
        <h3>Filter Maintenance</h3>
        <ul>
          <li>Check filters monthly during heavy use</li>
          <li>Replace 1-inch filters every 1-3 months</li>
          <li>Clean reusable filters as needed</li>
          <li>Monitor filter loading in dusty conditions</li>
        </ul>
        
        <h3>System Monitoring</h3>
        <ul>
          <li>Listen for unusual noises</li>
          <li>Monitor energy bills for increases</li>
          <li>Check for uneven heating</li>
          <li>Ensure vents remain unblocked</li>
        </ul>
        
        <h2>Outdoor Unit Care</h2>
        <h3>Heat Pump Maintenance</h3>
        <ul>
          <li>Keep outdoor unit clear of snow and ice</li>
          <li>Ensure 2-foot clearance around unit</li>
          <li>Check for ice buildup on coils</li>
          <li>Verify defrost cycle operation</li>
        </ul>
        
        <h3>Ventilation Areas</h3>
        <ul>
          <li>Clear snow from exhaust vents</li>
          <li>Check intake vents for blockages</li>
          <li>Ensure proper drainage away from unit</li>
        </ul>
        
        <h2>Safety Checks</h2>
        <h3>Carbon Monoxide Prevention</h3>
        <ul>
          <li>Test CO detectors monthly</li>
          <li>Inspect venting for proper operation</li>
          <li>Check for gas odors</li>
          <li>Ensure adequate combustion air</li>
        </ul>
        
        <h3>Emergency Preparedness</h3>
        <ul>
          <li>Know location of gas shut-off valve</li>
          <li>Keep emergency heating contact numbers handy</li>
          <li>Have backup heating plan</li>
          <li>Stock replacement filters</li>
        </ul>
        
        <h2>Professional Maintenance</h2>
        <p>Schedule annual professional maintenance including:</p>
        <ul>
          <li>Complete system inspection</li>
          <li>Combustion analysis</li>
          <li>Electrical connection tightening</li>
          <li>Lubrication of moving parts</li>
          <li>Performance testing</li>
        </ul>
        
        <h2>Energy Saving Tips</h2>
        <ul>
          <li>Set thermostat 7-10°F lower when away</li>
          <li>Use ceiling fans to circulate warm air</li>
          <li>Seal air leaks around windows and doors</li>
          <li>Open curtains during sunny days</li>
          <li>Close off unused rooms</li>
        </ul>
      `,
      'choose-right-hvac-system': `
        <p>Selecting the right HVAC system for your home is a significant investment that affects your comfort, energy bills, and home value for years to come. This comprehensive guide will help you make an informed decision.</p>
        
        <h2>Understanding Your Needs</h2>
        <h3>Home Assessment</h3>
        <ul>
          <li><strong>Square footage:</strong> Measure total conditioned space</li>
          <li><strong>Insulation quality:</strong> Assess walls, attic, and windows</li>
          <li><strong>Climate zone:</strong> Consider local weather patterns</li>
          <li><strong>Existing ductwork:</strong> Evaluate condition and design</li>
          <li><strong>Electrical capacity:</strong> Check panel and wiring</li>
        </ul>
        
        <h2>Types of HVAC Systems</h2>
        <h3>Central Air Systems</h3>
        <p><strong>Best for:</strong> Homes with existing ductwork</p>
        <ul>
          <li>Whole-home comfort control</li>
          <li>Hidden indoor components</li>
          <li>Good air filtration options</li>
          <li>Cost-effective for larger homes</li>
        </ul>
        
        <h3>Heat Pump Systems</h3>
        <p><strong>Best for:</strong> Moderate climates, energy efficiency</p>
        <ul>
          <li>Heating and cooling in one unit</li>
          <li>High energy efficiency</li>
          <li>Lower operating costs</li>
          <li>Environmentally friendly</li>
        </ul>
        
        <h3>Ductless Mini-Split Systems</h3>
        <p><strong>Best for:</strong> Room additions, homes without ducts</p>
        <ul>
          <li>Individual room control</li>
          <li>No ductwork required</li>
          <li>High efficiency ratings</li>
          <li>Quiet operation</li>
        </ul>
        
        <h3>Geothermal Systems</h3>
        <p><strong>Best for:</strong> Long-term ownership, environmental concern</p>
        <ul>
          <li>Extremely efficient operation</li>
          <li>Low operating costs</li>
          <li>Minimal maintenance</li>
          <li>High upfront investment</li>
        </ul>
        
        <h2>Sizing Your System</h2>
        <h3>Manual J Calculation</h3>
        <p>Professional load calculation considers:</p>
        <ul>
          <li>Home orientation and window placement</li>
          <li>Insulation R-values</li>
          <li>Air infiltration rates</li>
          <li>Occupancy and internal heat gains</li>
          <li>Local climate data</li>
        </ul>
        
        <h3>Avoid Common Sizing Mistakes</h3>
        <ul>
          <li><strong>Oversizing:</strong> Causes short cycling, poor humidity control</li>
          <li><strong>Undersizing:</strong> Results in inadequate comfort, high bills</li>
          <li><strong>Rule of thumb:</strong> Don't rely on square footage alone</li>
        </ul>
        
        <h2>Efficiency Ratings</h2>
        <h3>Cooling Efficiency (SEER)</h3>
        <ul>
          <li><strong>Minimum:</strong> SEER 14-15 (varies by region)</li>
          <li><strong>High efficiency:</strong> SEER 16-20+</li>
          <li><strong>Premium:</strong> SEER 21+ for maximum savings</li>
        </ul>
        
        <h3>Heating Efficiency</h3>
        <ul>
          <li><strong>Gas furnaces:</strong> AFUE 80-98%</li>
          <li><strong>Heat pumps:</strong> HSPF 8-13+</li>
          <li><strong>Electric:</strong> Consider heat pump over resistance</li>
        </ul>
        
        <h2>Budget Considerations</h2>
        <h3>Initial Investment</h3>
        <ul>
          <li><strong>Basic systems:</strong> $3,000-8,000</li>
          <li><strong>Mid-range:</strong> $8,000-15,000</li>
          <li><strong>High-end:</strong> $15,000-25,000+</li>
          <li><strong>Geothermal:</strong> $20,000-40,000</li>
        </ul>
        
        <h3>Operating Costs</h3>
        <ul>
          <li>Higher efficiency = lower monthly bills</li>
          <li>Consider 10-year total cost of ownership</li>
          <li>Factor in maintenance costs</li>
          <li>Account for utility rate increases</li>
        </ul>
        
        <h2>Installation Considerations</h2>
        <h3>Contractor Selection</h3>
        <ul>
          <li>Licensed and insured professionals</li>
          <li>NATE certification preferred</li>
          <li>Local references and reviews</li>
          <li>Detailed written estimates</li>
        </ul>
        
        <h3>Quality Installation</h3>
        <ul>
          <li>Proper refrigerant charging</li>
          <li>Correct ductwork design</li>
          <li>Electrical connections to code</li>
          <li>Complete system commissioning</li>
        </ul>
        
        <h2>Rebates and Incentives</h2>
        <ul>
          <li>Federal tax credits for high-efficiency equipment</li>
          <li>Utility company rebate programs</li>
          <li>State and local incentives</li>
          <li>Manufacturer promotional offers</li>
          <li>Financing options available</li>
        </ul>
      `,
      'common-hvac-problems': `
        <p>Understanding common HVAC problems helps you identify issues early and know when professional help is needed. Here's a guide to the most frequent issues homeowners encounter and how to address them.</p>
        
        <h2>Heating System Problems</h2>
        <h3>No Heat</h3>
        <p><strong>DIY Checks:</strong></p>
        <ul>
          <li>Verify thermostat settings and batteries</li>
          <li>Check circuit breakers and fuses</li>
          <li>Ensure gas valve is open (gas systems)</li>
          <li>Check pilot light (older systems)</li>
        </ul>
        <p><strong>Call Professional for:</strong></p>
        <ul>
          <li>Gas odors or suspected leaks</li>
          <li>Electrical issues</li>
          <li>Ignition system problems</li>
          <li>Heat exchanger concerns</li>
        </ul>
        
        <h3>Insufficient Heat</h3>
        <p><strong>DIY Solutions:</strong></p>
        <ul>
          <li>Replace dirty air filter</li>
          <li>Check and open all vents</li>
          <li>Verify thermostat programming</li>
          <li>Clear obstructions around outdoor unit</li>
        </ul>
        
        <h2>Cooling System Problems</h2>
        <h3>AC Not Cooling</h3>
        <p><strong>DIY Troubleshooting:</strong></p>
        <ul>
          <li>Check thermostat settings (cooling mode, temperature)</li>
          <li>Replace air filter if dirty</li>
          <li>Inspect outdoor unit for debris</li>
          <li>Check circuit breakers</li>
        </ul>
        <p><strong>Professional Service Needed:</strong></p>
        <ul>
          <li>Refrigerant leaks</li>
          <li>Compressor issues</li>
          <li>Electrical problems</li>
          <li>Frozen coils</li>
        </ul>
        
        <h3>Poor Cooling Performance</h3>
        <p><strong>Common Causes:</strong></p>
        <ul>
          <li>Dirty or clogged air filter</li>
          <li>Blocked outdoor unit</li>
          <li>Leaky ductwork</li>
          <li>Incorrect refrigerant levels</li>
          <li>Aging equipment</li>
        </ul>
        
        <h2>Airflow Issues</h2>
        <h3>Weak Airflow</h3>
        <p><strong>DIY Fixes:</strong></p>
        <ul>
          <li>Replace clogged air filter</li>
          <li>Open all supply vents</li>
          <li>Check return air grilles for blockages</li>
          <li>Ensure furniture isn't blocking vents</li>
        </ul>
        
        <h3>Uneven Temperatures</h3>
        <p><strong>Possible Solutions:</strong></p>
        <ul>
          <li>Balance dampers in ductwork</li>
          <li>Seal air leaks in ducts</li>
          <li>Add insulation to problem areas</li>
          <li>Consider zoning system</li>
        </ul>
        
        <h2>Strange Noises</h2>
        <h3>When to Call Immediately</h3>
        <ul>
          <li><strong>Grinding:</strong> Motor bearing problems</li>
          <li><strong>Squealing:</strong> Belt issues</li>
          <li><strong>Banging:</strong> Loose components</li>
          <li><strong>Hissing:</strong> Possible refrigerant leak</li>
        </ul>
        
        <h3>Less Urgent Sounds</h3>
        <ul>
          <li><strong>Clicking:</strong> Normal relay operation</li>
          <li><strong>Whooshing:</strong> Air movement (normal)</li>
          <li><strong>Humming:</strong> Electrical components (usually normal)</li>
        </ul>
        
        <h2>Thermostat Problems</h2>
        <h3>Common Issues</h3>
        <ul>
          <li>Incorrect temperature readings</li>
          <li>System not responding to settings</li>
          <li>Blank display</li>
          <li>Short cycling</li>
        </ul>
        
        <h3>DIY Solutions</h3>
        <ul>
          <li>Replace batteries</li>
          <li>Check wiring connections</li>
          <li>Clean dust from components</li>
          <li>Verify programming settings</li>
        </ul>
        
        <h2>High Energy Bills</h2>
        <h3>Efficiency Killers</h3>
        <ul>
          <li>Dirty air filters</li>
          <li>Leaky ductwork</li>
          <li>Poor insulation</li>
          <li>Aging equipment</li>
          <li>Incorrect system sizing</li>
        </ul>
        
        <h3>Energy Saving Actions</h3>
        <ul>
          <li>Regular filter changes</li>
          <li>Programmable thermostat use</li>
          <li>Annual professional maintenance</li>
          <li>Duct sealing</li>
          <li>Home weatherization</li>
        </ul>
        
        <h2>When to Call a Professional</h2>
        <h3>Safety Concerns</h3>
        <ul>
          <li>Gas odors</li>
          <li>Electrical issues</li>
          <li>Carbon monoxide alarms</li>
          <li>Strange chemical smells</li>
        </ul>
        
        <h3>Complex Repairs</h3>
        <ul>
          <li>Refrigerant system work</li>
          <li>Electrical repairs</li>
          <li>Gas system repairs</li>
          <li>Ductwork modifications</li>
        </ul>
        
        <h2>Preventive Maintenance</h2>
        <h3>Monthly Tasks</h3>
        <ul>
          <li>Check and replace air filters</li>
          <li>Clear debris from outdoor unit</li>
          <li>Check thermostat operation</li>
        </ul>
        
        <h3>Seasonal Tasks</h3>
        <ul>
          <li>Schedule professional tune-ups</li>
          <li>Test system operation</li>
          <li>Clean vents and registers</li>
          <li>Inspect ductwork</li>
        </ul>
      `,
      'guide-to-hvac-air-filters': `
        <p>HVAC air filters are crucial for maintaining indoor air quality and protecting your equipment. Understanding filter types, ratings, and replacement schedules helps you make the best choices for your home and health.</p>
        
        <h2>How Air Filters Work</h2>
        <p>Air filters remove particles from the air as it circulates through your HVAC system:</p>
        <ul>
          <li>Trap dust, pollen, and other airborne particles</li>
          <li>Protect HVAC equipment from contamination</li>
          <li>Improve indoor air quality</li>
          <li>Reduce allergens and irritants</li>
        </ul>
        
        <h2>Filter Efficiency Ratings</h2>
        <h3>MERV Ratings (1-16)</h3>
        <p>Minimum Efficiency Reporting Value indicates particle capture effectiveness:</p>
        <ul>
          <li><strong>MERV 1-4:</strong> Basic protection, large particles only</li>
          <li><strong>MERV 5-8:</strong> Good for residential use, captures dust and pollen</li>
          <li><strong>MERV 9-12:</strong> Better filtration, removes smaller particles</li>
          <li><strong>MERV 13-16:</strong> High efficiency, hospital-grade filtration</li>
        </ul>
        
        <h3>HEPA Filters</h3>
        <p>High-Efficiency Particulate Air filters:</p>
        <ul>
          <li>Remove 99.97% of particles 0.3 microns or larger</li>
          <li>Excellent for allergies and asthma</li>
          <li>May require system modifications</li>
          <li>Higher cost and replacement frequency</li>
        </ul>
        
        <h2>Types of Air Filters</h2>
        <h3>Fiberglass Filters</h3>
        <p><strong>MERV 1-4, $1-5 each</strong></p>
        <ul>
          <li>Lowest cost option</li>
          <li>Disposable, 30-day replacement</li>
          <li>Basic equipment protection only</li>
          <li>Minimal air quality improvement</li>
        </ul>
        
        <h3>Pleated Filters</h3>
        <p><strong>MERV 5-12, $5-20 each</strong></p>
        <ul>
          <li>Increased surface area for better filtration</li>
          <li>Good balance of efficiency and airflow</li>
          <li>30-90 day replacement intervals</li>
          <li>Most popular residential choice</li>
        </ul>
        
        <h3>Electrostatic Filters</h3>
        <p><strong>MERV 4-10, $15-50 each</strong></p>
        <ul>
          <li>Washable and reusable</li>
          <li>Self-charging fibers attract particles</li>
          <li>Long-term cost savings</li>
          <li>Require regular cleaning</li>
        </ul>
        
        <h3>Carbon Filters</h3>
        <p><strong>MERV 8-13, $20-50 each</strong></p>
        <ul>
          <li>Activated carbon removes odors</li>
          <li>Good for pet odors and cooking smells</li>
          <li>Combines particle and odor removal</li>
          <li>Higher cost, shorter lifespan</li>
        </ul>
        
        <h3>UV Filters</h3>
        <p><strong>$200-800 installed</strong></p>
        <ul>
          <li>UV light kills bacteria and viruses</li>
          <li>Works with standard filters</li>
          <li>Continuous operation</li>
          <li>Professional installation required</li>
        </ul>
        
        <h2>Choosing the Right Filter</h2>
        <h3>Consider Your Needs</h3>
        <ul>
          <li><strong>Basic protection:</strong> MERV 5-8 pleated filters</li>
          <li><strong>Allergies/asthma:</strong> MERV 11-13 or HEPA</li>
          <li><strong>Pet owners:</strong> MERV 8-11 with carbon</li>
          <li><strong>Budget conscious:</strong> MERV 5-8 pleated</li>
          <li><strong>Maximum filtration:</strong> MERV 13+ or HEPA</li>
        </ul>
        
        <h3>System Compatibility</h3>
        <ul>
          <li>Check manufacturer recommendations</li>
          <li>Consider airflow restrictions</li>
          <li>Verify filter size compatibility</li>
          <li>Consult HVAC professional if unsure</li>
        </ul>
        
        <h2>Replacement Schedule</h2>
        <h3>Factors Affecting Replacement Frequency</h3>
        <ul>
          <li><strong>Filter type:</strong> Fiberglass (30 days), pleated (60-90 days)</li>
          <li><strong>Home occupancy:</strong> More people = more frequent changes</li>
          <li><strong>Pets:</strong> Increase replacement frequency</li>
          <li><strong>Allergies:</strong> Change more often during high pollen seasons</li>
          <li><strong>Construction/remodeling:</strong> Dust requires frequent changes</li>
        </ul>
        
        <h3>Signs It's Time to Replace</h3>
        <ul>
          <li>Visible dirt accumulation</li>
          <li>Reduced airflow from vents</li>
          <li>Increased allergy symptoms</li>
          <li>System running more frequently</li>
          <li>Higher energy bills</li>
        </ul>
        
        <h2>Installation Tips</h2>
        <h3>Proper Installation</h3>
        <ul>
          <li>Turn off system before changing filter</li>
          <li>Note airflow direction arrows</li>
          <li>Ensure proper fit with no gaps</li>
          <li>Mark calendar for next replacement</li>
        </ul>
        
        <h3>Common Mistakes</h3>
        <ul>
          <li>Installing filter backwards</li>
          <li>Using wrong size filter</li>
          <li>Forgetting to remove packaging</li>
          <li>Running system without filter</li>
        </ul>
        
        <h2>Cost-Benefit Analysis</h2>
        <h3>Filter Cost vs. System Protection</h3>
        <ul>
          <li>Higher quality filters protect expensive equipment</li>
          <li>Improved efficiency reduces energy costs</li>
          <li>Better air quality improves health</li>
          <li>Extended equipment life saves money long-term</li>
        </ul>
        
        <h2>Special Considerations</h2>
        <h3>High-Efficiency Filters</h3>
        <ul>
          <li>May reduce airflow in older systems</li>
          <li>Could cause system strain</li>
          <li>Consult professional before upgrading</li>
          <li>Consider system modifications if needed</li>
        </ul>
        
        <h3>Whole-House Air Purifiers</h3>
        <ul>
          <li>Electronic air cleaners</li>
          <li>Media air cleaners</li>
          <li>UV germicidal lights</li>
          <li>Professional installation recommended</li>
        </ul>
      `
    };
    
    return contentMap[slug] || '<p>Content not available.</p>';
  }

  // CMS Methods
  getAllPosts(options = {}) {
    const { category = 'All', featured = null, status = 'published', limit = null, offset = 0 } = options;
    
    let filteredPosts = this.posts.filter(post => {
      if (post.status !== status) return false;
      if (category !== 'All' && post.category !== category) return false;
      if (featured !== null && post.featured !== featured) return false;
      return true;
    });

    // Sort by published date (newest first)
    filteredPosts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    // Apply pagination
    if (limit) {
      filteredPosts = filteredPosts.slice(offset, offset + limit);
    }

    return filteredPosts;
  }

  getPostBySlug(slug) {
    return this.posts.find(post => post.slug === slug && post.status === 'published');
  }

  getFeaturedPosts() {
    return this.getAllPosts({ featured: true });
  }

  getRelatedPosts(currentPostId, category, limit = 3) {
    return this.posts
      .filter(post => 
        post.id !== currentPostId && 
        post.category === category && 
        post.status === 'published'
      )
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      .slice(0, limit);
  }

  searchPosts(query) {
    const searchTerms = query.toLowerCase().split(' ');
    
    return this.posts.filter(post => {
      if (post.status !== 'published') return false;
      
      const searchableContent = [
        post.title,
        post.excerpt,
        post.content,
        post.category,
        ...post.tags,
        post.author.name
      ].join(' ').toLowerCase();

      return searchTerms.some(term => searchableContent.includes(term));
    });
  }

  getCategories() {
    return this.categories;
  }

  getPostsByTag(tag) {
    return this.posts.filter(post => 
      post.tags.includes(tag) && post.status === 'published'
    );
  }

  getPostsByAuthor(authorName) {
    return this.posts.filter(post => 
      post.author.name === authorName && post.status === 'published'
    );
  }

  // Generate sitemap data
  getSitemapData() {
    return this.posts
      .filter(post => post.status === 'published')
      .map(post => ({
        url: `/blog/${post.slug}`,
        lastModified: post.updatedAt,
        priority: post.featured ? 0.8 : 0.6
      }));
  }
}

export default new BlogCMS();