# Michael Altamirano - Personal Website

Portfolio site for Michael Altamirano, Systems/Reliability Engineer with 25+ years of experience in FAA infrastructure, satellite systems, power semiconductors, and cloud/ML engineering.

🌐 **Live site:** [highviewone.github.io](https://highviewone.github.io)

## Tech Stack

- HTML5 / CSS3 (no JavaScript framework)
- Vanilla JavaScript for theme switching and interactions
- Hosted on GitHub Pages
- Lighthouse Performance: A (94+)
- Cross-browser compatible (Chrome, Firefox, Safari, Edge)

## Features

- **Dark/Light Mode Toggle** – Theme preference saved to localStorage
- **Responsive Design** – Mobile-first, optimized for all screen sizes
- **Semantic HTML** – Proper heading hierarchy and accessibility
- **SEO Optimized** – Open Graph tags, JSON-LD schema, canonical URLs, sitemap, robots.txt
- **Performance** – Font preloading, smooth scroll behavior, minimal JavaScript

## Sections

- **About** – Background and current work
- **Projects** – Engineering and business projects
- **Experience** – Work history
- **Skills** – Technical skills grid
- **Education** – Degrees and professional development
- **Credentials** – Clickable thumbnails for degrees, certificates, and documents
- **Contact** – Email, LinkedIn, GitHub

## Assets

```
assets/
├── certificates/   # Professional certifications (JPG/PDF)
├── degrees/        # Degree scans (PDF)
├── documents/      # Resume and letters of recommendation
└── projects/       # Project images and reports
```

## Local Development

Open `index.html` directly in a browser — no build step required.

```bash
xdg-open index.html   # Linux
open index.html        # macOS
```

## Deployment

This site is deployed to GitHub Pages via the `main` branch. Any push to `main` automatically deploys the site.

### GitHub Pages Setup
- Repository: `HighviewOne/HighviewOne.github.io`
- Branch: `main`
- Custom domain: Not configured (using default)

### Performance Metrics
- **Lighthouse Score**: 94+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized
- **Bundle Size**: <50KB total (HTML + CSS + JS)

## Browser Compatibility

- ✅ Chrome/Edge 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

Tested with:
- CSS Grid and Flexbox
- Modern CSS variables (custom properties)
- LocalStorage API
- SVG support

## Files Structure

```
.
├── index.html           # Main HTML file
├── styles.css           # All styling
├── robots.txt           # SEO crawler directives
├── sitemap.xml          # XML sitemap for search engines
├── .gitignore           # Git ignore rules
├── favicon.svg          # Site icon
├── README.md            # This file
└── assets/              # Images, PDFs, documents
```

## Recent Updates

- Added dark/light mode toggle with localStorage persistence
- Added back-to-top button for better navigation
- Improved SEO with JSON-LD structured data
- Added sitemap.xml and robots.txt
- Implemented font preloading for performance
- Updated all external links with security attributes (rel="noopener noreferrer")

## License

This is a personal portfolio. Feel free to fork and adapt for your own use.

