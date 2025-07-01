# Pro HVAC Services Website

A professional HVAC service website built with React, featuring a complete content management system for blog posts and optimized service area management.

## Features

### 🏠 Core Website
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance**: Optimized images and lazy loading
- **Accessibility**: WCAG compliant with proper ARIA labels

### 📝 Content Management System (CMS)
- **Blog Management**: Create, edit, delete, and publish blog posts
- **Rich Editor**: HTML content editor with preview
- **Categories & Tags**: Organize content with categories and tags
- **SEO Controls**: Meta titles, descriptions, and keywords
- **Featured Posts**: Highlight important content
- **Import/Export**: Backup and restore blog content

### 🗺️ Location Management
- **Service Areas**: Detailed coverage areas with response times
- **Dynamic Routing**: SEO-friendly URLs for each location
- **Location SEO**: Optimized metadata for local search
- **Interactive Features**: Service availability by area

### 🔧 Services
- **Service Pages**: Dedicated pages for each HVAC service
- **Emergency Services**: 24/7 emergency service information
- **Residential & Commercial**: Separate service categories
- **Pricing Information**: Transparent pricing displays

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the development server:
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

## CMS Access

### Accessing the CMS Admin Panel

1. **Navigate to Admin**: Go to `/#/admin/cms` in your browser
2. **No Authentication Required**: For development, the CMS is open access
3. **Local Storage**: Content is stored in browser's localStorage

### Managing Blog Posts

#### Creating a New Post
1. Click "New Post" button
2. Fill in required fields:
   - **Title**: Post headline
   - **Excerpt**: Brief description for previews
   - **Content**: Full HTML content
   - **Category**: Choose from predefined categories
   - **Tags**: Comma-separated tags
   - **Image**: Featured image URL
   - **Featured**: Mark as featured post
   - **Status**: Draft or Published

#### Editing Posts
1. Click the edit icon next to any post
2. Modify content as needed
3. Save changes

#### Publishing/Unpublishing
- Use the eye icon to toggle publish status
- Published posts appear on the public blog
- Draft posts are hidden from public view

#### Export/Import Data
- **Export**: Download all blog data as JSON
- **Import**: Upload previously exported JSON file
- Useful for backups and content migration

### Content Guidelines

#### Writing Blog Posts
- **SEO-Friendly Titles**: Include relevant keywords
- **Engaging Excerpts**: Write compelling summaries
- **HTML Content**: Use proper HTML structure:
  ```html
  <h2>Section Heading</h2>
  <p>Paragraph content...</p>
  <ul>
    <li>List item</li>
  </ul>
  ```

#### Image Requirements
- **Format**: JPEG or PNG
- **Size**: Recommended 1200x600px for featured images
- **Sources**: Use Unsplash URLs or upload to your CDN
- **Alt Text**: Include in HTML img tags

#### Categories
- Maintenance Tips
- Energy Efficiency
- Seasonal Tips
- Installation Guide
- Troubleshooting
- Air Quality
- Commercial HVAC
- Residential HVAC

## Location Management

### Service Areas Configuration

Service areas are managed in `src/lib/locations.js`:

```javascript
{
  id: 'downtown',
  name: 'Downtown',
  slug: 'downtown',
  description: 'Complete HVAC services...',
  responseTime: '30 minutes',
  neighborhoods: ['Financial District', 'Arts Quarter'],
  services: ['Residential HVAC', 'Commercial HVAC'],
  // ... more configuration
}
```

### Adding New Service Areas
1. Edit `src/lib/locations.js`
2. Add new area object to `serviceAreas` array
3. Include all required fields
4. Update routing if needed

### SEO for Locations
- Automatic meta tag generation
- Structured data for local business
- Location-specific keywords
- Canonical URLs

## Technical Architecture

### Tech Stack
- **Frontend**: React 18 with Hooks
- **Routing**: React Router v7 (Hash routing for static hosting)
- **Styling**: Tailwind CSS
- **Icons**: React Icons (Feather Icons)
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **SEO**: React Helmet Async

### Key Libraries
```json
{
  "react": "^18.3.1",
  "react-router-dom": "^7.1.0", 
  "tailwindcss": "^3.4.17",
  "framer-motion": "^11.0.8",
  "react-helmet-async": "^2.0.4",
  "react-hook-form": "^7.48.2",
  "react-icons": "^5.4.0"
}
```

### File Structure
```
src/
├── components/
│   ├── home/           # Homepage sections
│   ├── layout/         # Header, Footer
│   └── common/         # Reusable components
├── pages/
│   ├── services/       # Service-specific pages
│   └── admin/          # CMS admin interface
├── lib/
│   ├── cms.js         # Blog content management
│   ├── cms-admin.js   # Admin interface logic
│   └── locations.js   # Service area management
└── styles/            # Global styles
```

## Deployment

### Static Hosting
The site is configured for static hosting (GitHub Pages, Netlify, Vercel):

- **Hash Routing**: Uses `/#/` URLs for client-side routing
- **Base Path**: Configured for subdirectory deployment
- **Build Output**: Static files in `dist/` directory

### Environment Setup
No environment variables required for basic functionality.

### SEO Considerations
- Prerendering not required (static content)
- Meta tags included in each page
- Sitemap.xml can be generated from route data
- robots.txt should be added to public directory

## Customization

### Branding
- **Colors**: Edit `tailwind.config.js` for brand colors
- **Logo**: Update logo in Header component
- **Contact Info**: Update phone numbers and addresses throughout

### Content
- **Company Info**: Edit in About page and Footer
- **Services**: Modify service pages and data
- **Blog**: Use CMS admin panel for blog content
- **Locations**: Edit `locations.js` for service areas

### Styling
- **Theme**: Tailwind utility classes
- **Components**: Styled with CSS-in-JS approach
- **Responsive**: Mobile-first breakpoints
- **Animations**: Framer Motion for smooth transitions

## Production Considerations

### Performance Optimization
- **Image Optimization**: Use WebP format when possible
- **Code Splitting**: Implement lazy loading for routes
- **Bundle Analysis**: Use webpack-bundle-analyzer
- **CDN**: Serve static assets from CDN

### SEO Enhancement
- **Schema Markup**: Implement relevant structured data
- **Local SEO**: Add Google My Business integration
- **Page Speed**: Optimize Core Web Vitals
- **Analytics**: Add Google Analytics or similar

### Security
- **Input Validation**: Sanitize all user inputs
- **XSS Protection**: Validate HTML content in CMS
- **HTTPS**: Ensure SSL certificate
- **Headers**: Set appropriate security headers

## Support

For technical support or questions about the CMS:

1. **Documentation**: Check this README
2. **Code Comments**: Review inline documentation
3. **Issue Tracking**: Use GitHub issues
4. **Contact**: Reach out to the development team

## License

This project is proprietary software owned by Pro HVAC Services.