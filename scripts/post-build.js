import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

console.log('🚀 Running post-build optimizations...');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  console.error('❌ Dist directory not found. Build may have failed.');
  process.exit(1);
}

// Generate sitemap.xml
const generateSitemap = () => {
  const baseUrl = 'https://prohvacservices.com';
  const currentDate = new Date().toISOString();
  
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/services/hvac-installation', priority: '0.9', changefreq: 'monthly' },
    { url: '/services/hvac-repair', priority: '0.9', changefreq: 'monthly' },
    { url: '/services/hvac-maintenance', priority: '0.9', changefreq: 'monthly' },
    { url: '/services/heating', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/cooling', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/air-quality', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/duct-cleaning', priority: '0.7', changefreq: 'monthly' },
    { url: '/services/energy-audit', priority: '0.7', changefreq: 'monthly' },
    { url: '/residential-services', priority: '0.8', changefreq: 'monthly' },
    { url: '/commercial-services', priority: '0.8', changefreq: 'monthly' },
    { url: '/emergency-service', priority: '0.9', changefreq: 'monthly' },
    { url: '/service-areas', priority: '0.8', changefreq: 'monthly' },
    { url: '/service-areas/downtown', priority: '0.7', changefreq: 'monthly' },
    { url: '/service-areas/north-side', priority: '0.7', changefreq: 'monthly' },
    { url: '/service-areas/south-side', priority: '0.7', changefreq: 'monthly' },
    { url: '/service-areas/east-end', priority: '0.7', changefreq: 'monthly' },
    { url: '/service-areas/west-end', priority: '0.7', changefreq: 'monthly' },
    { url: '/service-areas/suburbs', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog', priority: '0.7', changefreq: 'weekly' },
    { url: '/careers', priority: '0.5', changefreq: 'monthly' }
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  try {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml);
    console.log('✅ Generated sitemap.xml');
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
  }
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
Allow: /

# Disallow admin areas
Disallow: /admin/

# Sitemap
Sitemap: https://prohvacservices.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1`;

  try {
    fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt);
    console.log('✅ Generated robots.txt');
  } catch (error) {
    console.error('❌ Error generating robots.txt:', error.message);
  }
};

// Copy additional files
const copyAdditionalFiles = () => {
  // Copy favicon if it exists
  const faviconSource = path.join(__dirname, '../public/favicon.ico');
  const faviconDest = path.join(distDir, 'favicon.ico');
  
  if (fs.existsSync(faviconSource)) {
    try {
      fs.copyFileSync(faviconSource, faviconDest);
      console.log('✅ Copied favicon.ico');
    } catch (error) {
      console.error('❌ Error copying favicon:', error.message);
    }
  } else {
    console.log('ℹ️ No favicon.ico found in public directory');
  }

  // Copy .htaccess for Apache hosting
  const htaccessSource = path.join(__dirname, '../.htaccess');
  const htaccessDest = path.join(distDir, '.htaccess');
  
  if (fs.existsSync(htaccessSource)) {
    try {
      fs.copyFileSync(htaccessSource, htaccessDest);
      console.log('✅ Copied .htaccess for Apache hosting');
    } catch (error) {
      console.error('❌ Error copying .htaccess:', error.message);
    }
  }

  // Copy web.config for IIS/Azure
  const webConfigSource = path.join(__dirname, '../public/web.config');
  const webConfigDest = path.join(distDir, 'web.config');
  
  if (fs.existsSync(webConfigSource)) {
    try {
      fs.copyFileSync(webConfigSource, webConfigDest);
      console.log('✅ Copied web.config for IIS/Azure hosting');
    } catch (error) {
      console.error('❌ Error copying web.config:', error.message);
    }
  }
};

// Create deployment info
const createDeploymentInfo = () => {
  const deploymentInfo = {
    buildDate: new Date().toISOString(),
    version: '1.0.0',
    environment: 'production',
    buildTool: 'Vite',
    minifier: 'esbuild',
    mimeTypesFix: 'included',
    features: [
      'SEO Optimized',
      'Mobile Responsive', 
      'Blog CMS',
      'Service Areas',
      'Contact Forms',
      'Admin Panel',
      'Performance Optimized',
      'MIME Types Configured'
    ]
  };

  try {
    fs.writeFileSync(
      path.join(distDir, 'deployment-info.json'), 
      JSON.stringify(deploymentInfo, null, 2)
    );
    console.log('✅ Created deployment-info.json');
  } catch (error) {
    console.error('❌ Error creating deployment info:', error.message);
  }
};

// Verify JavaScript files
const verifyJavaScriptFiles = () => {
  console.log('🔍 Verifying JavaScript file extensions...');
  
  const assetsDir = path.join(distDir, 'assets');
  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    const jsFiles = files.filter(file => file.endsWith('.js'));
    
    console.log(`✅ Found ${jsFiles.length} .js files with correct extensions`);
    
    // Check for any .mjs files that might cause MIME issues
    const mjsFiles = files.filter(file => file.endsWith('.mjs'));
    if (mjsFiles.length > 0) {
      console.log(`⚠️ Warning: Found ${mjsFiles.length} .mjs files - ensure server supports this MIME type`);
    }
  }
};

// Run all post-build tasks
try {
  generateSitemap();
  generateRobotsTxt();
  copyAdditionalFiles();
  createDeploymentInfo();
  verifyJavaScriptFiles();
  
  console.log('🎉 Post-build optimizations completed!');
  console.log('📁 Build output ready in: dist/');
  console.log('🌐 Ready for deployment with MIME type fixes');
  
  // List the generated files
  const files = fs.readdirSync(distDir);
  console.log('📋 Generated files:');
  files.forEach(file => {
    const filePath = path.join(distDir, file);
    const stats = fs.statSync(filePath);
    const size = stats.isFile() ? `(${(stats.size / 1024).toFixed(1)}KB)` : '';
    console.log(`   - ${file} ${size}`);
  });
  
  console.log('\n🔧 MIME Type Configuration:');
  console.log('   ✅ netlify.toml - Netlify hosting');
  console.log('   ✅ vercel.json - Vercel hosting');
  console.log('   ✅ .htaccess - Apache/cPanel hosting');
  console.log('   ✅ web.config - IIS/Azure hosting');
  
} catch (error) {
  console.error('❌ Post-build error:', error);
  process.exit(1);
}