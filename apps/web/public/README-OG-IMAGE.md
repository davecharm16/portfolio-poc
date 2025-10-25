# Social Sharing Open Graph Image

## Overview

This directory contains the Open Graph (OG) image used for social media previews when sharing the portfolio website.

## Files

- **`og-image.svg`** - Production OG image (1200×630px)
  - SVG format for crisp display and small file size
  - Dark theme with gradient accents matching portfolio brand
  - Displays: Name, role, skills, stats

- **`og-image-template.html`** - HTML template for generating OG images
  - Can be opened in browser and screenshot at 1200×630px
  - Useful for quickly updating content without design tools

## Image Specifications

- **Dimensions:** 1200×630px (optimal for all platforms)
- **Format:** SVG (with PNG/JPG fallback option)
- **File Size:** <50KB (SVG), <300KB (if converted to PNG/JPG)
- **Color Scheme:**
  - Background: #0A0A0A (dark)
  - Gradient: #8B5CF6 → #3B82F6 (purple-blue)
  - Text: #FFFFFF (white)

## Usage

The OG image is automatically referenced in:

1. **`index.html`** - Static meta tags for homepage
2. **`SEO.tsx` component** - Dynamic meta tags for routes

### Testing Social Previews

**Facebook Sharing Debugger:**
```
https://developers.facebook.com/tools/debug/
```
Enter your URL and click "Scrape Again" to refresh cache.

**Twitter Card Validator:**
```
https://cards-dev.twitter.com/validator
```
Enter your URL to see how the card will appear.

**LinkedIn Post Inspector:**
```
https://www.linkedin.com/post-inspector/
```
Enter your URL to preview LinkedIn sharing.

**Manual Testing:**
- WhatsApp: Send link to yourself
- Discord: Post link in a channel
- Slack: Post link in a channel

## Updating the OG Image

### Option 1: Edit the SVG directly
```svg
<!-- Edit text, colors, or layout in og-image.svg -->
<text x="300" y="200">YOUR NAME HERE</text>
```

### Option 2: Use the HTML template
1. Open `og-image-template.html` in browser
2. Edit HTML/CSS as needed
3. Set browser window to exactly 1200×630px
4. Take screenshot or use browser dev tools
5. Export as PNG/JPG

### Option 3: Use design tools
- **Canva:** Use "Custom Size" → 1200×630px
- **Figma:** Create 1200×630px frame
- **Photoshop:** New file → 1200×630px

## Platform-Specific Notes

### Facebook
- Caches OG images for ~7 days
- Use Sharing Debugger to force refresh
- Prefers JPG/PNG over SVG (may not render SVG)

### Twitter
- Caches cards for ~1 week
- `summary_large_image` card type shows full image
- Alternative: `summary` for smaller square

### LinkedIn
- Very similar to Facebook
- Professional platform - keep content business-focused
- Caches aggressively

### WhatsApp
- Uses OG tags
- Compresses images heavily
- Keep text large and legible

## Converting SVG to PNG/JPG

If social platforms don't render the SVG properly:

### Using Browser
1. Open `og-image.svg` in Chrome/Firefox
2. Open DevTools → Set device to 1200×630px
3. Take screenshot

### Using Command Line (if you have ImageMagick)
```bash
convert -density 300 og-image.svg -resize 1200x630 og-image.png
```

### Using Online Tools
- https://svgtopng.com/
- https://cloudconvert.com/svg-to-png

## Meta Tags Reference

Current implementation includes:

```html
<!-- Open Graph -->
<meta property="og:image" content="https://davebulaquena.com/og-image.svg" />
<meta property="og:image:secure_url" content="https://davebulaquena.com/og-image.svg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="..." />
<meta property="og:image:type" content="image/svg+xml" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://davebulaquena.com/og-image.svg" />
<meta name="twitter:image:alt" content="..." />
```

## Troubleshooting

### Image not showing on social platforms

1. **Check image URL is absolute:** Must start with `https://`
2. **Verify image exists:** Visit the URL directly in browser
3. **Clear platform cache:** Use debugging tools
4. **Check file size:** Should be <300KB for PNG/JPG
5. **Verify dimensions:** Exactly 1200×630px

### Image looks blurry

- Increase resolution when exporting
- Use PNG instead of JPG for text-heavy images
- Ensure original SVG has crisp text rendering

### Different image on different platforms

- Platforms cache independently
- Clear cache on each platform's debugger
- Wait 24 hours for natural cache expiration

## Future Enhancement: Dynamic OG Images

See `/docs/ux-social-sharing-feature.md` for Tier 2 implementation plan:
- Dynamic image generation per route
- Project-specific OG images
- Blog post-specific OG images
- Integration with Strapi CMS

## Resources

- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Facebook Sharing Best Practices](https://developers.facebook.com/docs/sharing/webmasters)
- [LinkedIn Post Inspector](https://www.linkedin.com/help/linkedin/answer/a521928)
