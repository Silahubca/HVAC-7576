import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

console.log('🔧 Fixing MIME type issues...');

// Create nginx configuration
const createNginxConfig = () => {
  const nginxConfig = `# Nginx configuration snippet
location / {
    try_files $uri $uri/ /index.html;
}

# CRITICAL: JavaScript MIME types
location ~* \\.js$ {
    add_header Content-Type "text/javascript; charset=utf-8";
    expires 1y;
    add_header Cache-Control "public, immutable";
}

location ~* \\.mjs$ {
    add_header Content-Type "text/javascript; charset=utf-8";
    expires 1y;
    add_header Cache-Control "public, immutable";
}

location ~* \\.css$ {
    add_header Content-Type "text/css; charset=utf-8";
    expires 1y;
    add_header Cache-Control "public, immutable";
}

location ~* \\.wasm$ {
    add_header Content-Type "application/wasm";
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Security headers
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;`;

  try {
    fs.writeFileSync(path.join(distDir, 'nginx.conf'), nginxConfig);
    console.log('✅ Created nginx.conf');
  } catch (error) {
    console.error('❌ Error creating nginx config:', error.message);
  }
};

// Create deployment instructions
const createDeploymentInstructions = () => {
  const instructions = `# MIME Type Error Fix Instructions

## Problem
Server serving JavaScript modules with wrong MIME type (application/octet-stream instead of text/javascript).

## Solutions by Hosting Platform:

### 1. Netlify
- ✅ Use netlify.toml (already configured)
- ✅ Use public/_headers (already configured)
- Deploy: Drag dist/ folder to Netlify

### 2. Vercel  
- ✅ Use vercel.json (already configured)
- Deploy: \`vercel --prod\`

### 3. Apache/cPanel
- ✅ Use .htaccess (already configured)
- Upload dist/ contents to public_html/
- Include .htaccess file

### 4. Nginx
- ✅ Use nginx.conf snippet (generated)
- Add configuration to your nginx server block

### 5. IIS/Azure
- ✅ Use web.config (already configured)
- Upload to Azure App Service

### 6. GitHub Pages
- May have MIME type issues
- Consider using Netlify instead

## Quick Test:
1. Open browser dev tools
2. Check Network tab
3. Verify .js files have Content-Type: text/javascript

## If still having issues:
1. Clear browser cache
2. Check server logs
3. Verify file extensions are .js (not .mjs)
4. Contact hosting support about MIME types
`;

  try {
    fs.writeFileSync(path.join(distDir, 'DEPLOYMENT-MIME-FIX.md'), instructions);
    console.log('✅ Created deployment instructions');
  } catch (error) {
    console.error('❌ Error creating instructions:', error.message);
  }
};

// Verify JavaScript files have correct extensions
const verifyJavaScriptFiles = () => {
  console.log('🔍 Verifying JavaScript file extensions...');
  
  const assetsDir = path.join(distDir, 'assets');
  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    const jsFiles = files.filter(file => file.endsWith('.js'));
    const mjsFiles = files.filter(file => file.endsWith('.mjs'));
    
    console.log(`✅ Found ${jsFiles.length} .js files`);
    if (mjsFiles.length > 0) {
      console.log(`⚠️ Found ${mjsFiles.length} .mjs files - may cause MIME issues`);
    }
    
    jsFiles.forEach(file => {
      console.log(`   - ${file}`);
    });
  }
};

// Run all fixes
try {
  createNginxConfig();
  createDeploymentInstructions();
  verifyJavaScriptFiles();
  
  console.log('🎉 MIME type fix completed!');
  console.log('📁 Check DEPLOYMENT-MIME-FIX.md for hosting-specific instructions');
} catch (error) {
  console.error('❌ Error during MIME fix:', error);
}