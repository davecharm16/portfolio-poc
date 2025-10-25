# UX Design Specification: Social Sharing Enhancement

**Project:** Portfolio Website - Social Media Preview Feature
**Designer:** Sally (UX Designer)
**Date:** 2025-10-25
**Version:** 1.0.0

---

## 1. Project Vision & Goals

### Vision
Transform social media sharing from basic link previews into compelling, professional visual cards that showcase Dave's expertise and encourage clicks.

### User Goals
- **Primary:** When Dave shares his portfolio link, viewers see rich, professional preview card
- **Secondary:** Different content types (projects, blog posts) show contextual previews
- **Tertiary:** Social previews work consistently across all platforms (Facebook, LinkedIn, Twitter, WhatsApp)

### Success Metrics
- Click-through rate increase from social shares
- Professional appearance across all platforms
- Reduced "what does this person do?" questions
- Increased LinkedIn/Twitter engagement

---

## 2. Target Users & Platforms

### Primary Users
- **Dave (Content Creator):** Shares portfolio on social media, wants professional appearance
- **Recruiters/Hiring Managers:** See shared link, need quick understanding of expertise
- **Professional Network:** LinkedIn connections, Twitter followers wanting to learn more
- **Potential Clients:** Need confidence in Dave's capabilities

### Target Platforms & Specifications

| Platform | Optimal Size | Aspect Ratio | Format | Notes |
|----------|-------------|--------------|--------|-------|
| **Facebook** | 1200×630px | 1.91:1 | JPG/PNG | Most common OG standard |
| **LinkedIn** | 1200×627px | 1.91:1 | JPG/PNG | Very similar to Facebook |
| **Twitter** | 1200×675px | 16:9 | JPG/PNG | Slightly taller for feed |
| **WhatsApp** | 1200×630px | 1.91:1 | JPG | Uses OG tags |
| **Discord** | 1200×630px | 1.91:1 | JPG/PNG | Embed preview |

**Design Decision:** Use 1200×630px as universal size (works well across all platforms)

---

## 3. Core Experience & Emotional Response

### Defining Experience
When someone shares Dave's portfolio link, the platform should display a **visually stunning, information-rich preview card** that immediately communicates:
1. **Who:** Dave Charm Bulaquena
2. **What:** Full Stack Developer & Solutions Designer
3. **Credibility:** Tech stack, experience, professionalism
4. **Action:** Clear value proposition to click

### Desired Emotional Response
- **Impressed:** "This person is professional and detail-oriented"
- **Confident:** "They clearly know their stuff - look at that tech stack"
- **Curious:** "I want to see their projects"
- **Trust:** Clean, modern design = competent developer

---

## 4. Design System & Visual Foundation

### Design System
**Choice:** Custom design system built on existing portfolio theme
**Rationale:** Portfolio already uses shadcn/ui + Tailwind, OG images should match brand

### Color Palette

**OG Image Theme:** "Professional Dark with Vibrant Accents"

```
Primary Background: #0A0A0A (Deep black)
Surface Layer:      #1A1A1A (Elevated dark)
Gradient Accent:    Linear gradient #8B5CF6 → #3B82F6 (Purple to Blue)
Text Primary:       #FFFFFF (Pure white)
Text Secondary:     #A3A3A3 (Neutral 400)
Badge Background:   rgba(255, 255, 255, 0.1) (Glassmorphism)
Badge Border:       rgba(255, 255, 255, 0.2)
```

**Color Psychology:**
- Dark background = sophistication, modern
- Purple-blue gradient = creativity + trust
- High contrast white text = accessibility, readability
- Subtle glassmorphism = contemporary design trends

### Typography System

**For OG Images (1200×630px canvas):**
- **Name/Hero:** Inter/Montserrat Bold, 64px, White
- **Subtitle/Role:** Inter/Montserrat Medium, 36px, Neutral 200
- **Body Text:** Inter/Montserrat Regular, 24px, Neutral 300
- **Badge Labels:** Inter/Montserrat Semibold, 18px, White

**Hierarchy:**
1. Name (largest, bold)
2. Role/Title (medium, clear)
3. Skills/Stats (smaller, badged)

### Spacing & Layout
- **Container Padding:** 60px all sides
- **Element Spacing:** 24px vertical rhythm
- **Badge Gap:** 12px between skill badges
- **Border Radius:** 12px for modern feel

---

## 5. Design Directions & Layout Patterns

### Pattern A: Homepage Share (Default)

**Layout:** Split layout with profile + content

```
┌──────────────────────────────────────────────────────┐
│  [Gradient Background]                               │
│                                                       │
│   ┌────────┐                                         │
│   │ Photo  │   DAVE CHARM BULAQUENA                  │
│   │ 180px  │   Full Stack Developer &                │
│   │ Circle │   Solutions Designer                    │
│   └────────┘                                         │
│                                                       │
│   [React] [TypeScript] [Node.js] [Tailwind]         │
│   [PostgreSQL] [AWS] [Docker] [Strapi]              │
│                                                       │
│   ⭐ 15+ Projects  │  📊 5+ Years  │  🎓 Certified   │
│                                                       │
│   davebulaquena.com                                  │
└──────────────────────────────────────────────────────┘
```

**Components:**
1. **Background:** Dark gradient (top-left to bottom-right)
2. **Profile Photo:** 180px circle, positioned left-center
3. **Name:** Bold, 64px, right of photo
4. **Subtitle:** 36px, below name
5. **Skill Badges:** Glassmorphism style, wrapped layout
6. **Stats Row:** Icons + numbers, bottom section
7. **URL:** Subtle, bottom-right corner

### Pattern B: Project Share (Dynamic)

**Layout:** Featured project showcase

```
┌──────────────────────────────────────────────────────┐
│  [Project Screenshot - blurred background]           │
│                                                       │
│   ┌─────────────────────────────────────────┐       │
│   │                                          │       │
│   │   [Project Thumbnail]                    │       │
│   │                                          │       │
│   └─────────────────────────────────────────┘       │
│                                                       │
│   PROJECT NAME                                       │
│   by Dave Charm Bulaquena                           │
│                                                       │
│   Built with: React • TypeScript • AWS              │
│   View project →                                     │
└──────────────────────────────────────────────────────┘
```

**Dynamic Elements:**
- Project name from Strapi CMS
- Project thumbnail/screenshot
- Tech stack from project metadata
- Project description (truncated to 100 chars)

### Pattern C: Blog Post Share (Future Enhancement)

**Layout:** Editorial style

```
┌──────────────────────────────────────────────────────┐
│   Blog Post Title Goes Here in                      │
│   Large Bold Typography                             │
│                                                       │
│   ┌─────────────────────────────────────────┐       │
│   │                                          │       │
│   │   [Featured Image]                       │       │
│   │                                          │       │
│   └─────────────────────────────────────────┘       │
│                                                       │
│   Dave Charm Bulaquena                              │
│   🕒 5 min read  │  React • TypeScript • DevOps     │
└──────────────────────────────────────────────────────┘
```

---

## 6. Component Library Strategy

### Required Components

#### From shadcn/ui (existing)
- Badge component (for skills)
- Card primitives (for structure)

#### Custom Components for OG Image Generation

**OG Image Generator Component** (React component rendered to image)
```tsx
<OGImageTemplate
  type="homepage" | "project" | "blog"
  data={{
    name: string
    role: string
    skills: string[]
    stats: { projects: number, years: number }
    image?: string // profile or project
    projectName?: string
    techStack?: string[]
  }}
/>
```

**Skill Badge Component**
- Glassmorphism background
- White text, semibold
- 12px border radius
- 8px padding vertical, 16px horizontal

**Stat Display Component**
- Icon (emoji or lucide-react)
- Number value
- Label text
- Horizontal layout

---

## 7. User Journey Flows

### Journey 1: Dave Shares Portfolio Homepage

**Goal:** Share portfolio link on LinkedIn to promote availability for work

**Flow:**
1. **Dave copies portfolio URL** → `https://davebulaquena.com`
2. **Dave pastes into LinkedIn post**
3. **LinkedIn scrapes meta tags** → Reads `og:image` URL
4. **LinkedIn fetches OG image** → `/og-image.jpg` or `/api/og?type=homepage`
5. **Rich preview appears** showing:
   - Dave's photo
   - Name & title
   - Skill badges
   - Stats (projects, experience)
6. **LinkedIn users see professional card** → Higher click-through
7. **User clicks** → Lands on portfolio with full content

**Success State:** Professional preview card displays, users click link

**Error States:**
- Image fails to load → Fallback to text-only preview (handled by platform)
- Outdated cache → Force refresh with `og:image:updated_time` meta tag

### Journey 2: Dave Shares Specific Project

**Goal:** Share a portfolio project on Twitter to showcase work

**Flow:**
1. **Dave navigates to project detail page** → `/projects/awesome-app`
2. **Dave clicks share button** → Copies URL
3. **Dave pastes into Twitter**
4. **Twitter scrapes route-specific meta tags**
5. **SEO component injects project-specific OG data:**
   - `og:title` → Project name
   - `og:description` → Project description
   - `og:image` → `/api/og?type=project&id=awesome-app`
6. **Dynamic OG image generated** with project details
7. **Twitter preview shows project card**
8. **Followers click** → Land on project detail page

**Success State:** Project-specific preview displays with thumbnail and tech stack

---

## 8. UX Pattern Decisions

### Meta Tag Patterns

**Static Meta Tags (index.html):**
- ✅ Core OG tags (type, site_name, locale)
- ✅ Default fallback values
- ✅ Twitter card type

**Dynamic Meta Tags (SEO component):**
- ✅ Route-specific title, description, image
- ✅ Canonical URL for current route
- ✅ JSON-LD structured data

**Pattern Decision:** Hybrid approach
- Default tags in HTML for homepage
- SEO component overrides for dynamic routes
- Ensures all pages have proper meta tags

### Image Generation Patterns

**Two-Tier Implementation:**

**Tier 1: Static OG Image (MVP)**
- Single, hand-crafted 1200×630px image
- Placed in `public/og-image.jpg`
- Referenced by all pages initially
- **Pros:** Fast to implement, always works
- **Cons:** Not personalized per route

**Tier 2: Dynamic OG Image API (Enhancement)**
- API route: `/api/og?type=homepage|project|blog&id={id}`
- Uses `@vercel/og` or `satori` library
- Generates images on-demand
- Caches with 7-day expiration
- **Pros:** Personalized, dynamic, scalable
- **Cons:** Requires server-side rendering, more complex

**Chosen Approach:** Start with Tier 1, implement Tier 2 as enhancement

### Caching & Performance Patterns

**OG Image Caching:**
- Static image → Browser cache + CDN
- Dynamic API → Cache-Control: public, max-age=604800 (7 days)
- Invalidation → Update `og:image:updated_time` meta tag

**Platform Refresh Patterns:**
- Facebook → Use Sharing Debugger to force refresh
- LinkedIn → Cache clears after ~7 days
- Twitter → Cards cache for ~1 week

---

## 9. Responsive & Accessibility Strategy

### Responsive Strategy

**OG images are not responsive** - platforms expect fixed size
**Design Decision:** Create single 1200×630px image optimized for all platforms

**Adaptation Patterns:**
- Desktop preview → Shows full 1200×630px
- Mobile preview → Platform scales to fit, maintains aspect ratio
- Thumbnail → Platform crops to smaller size if needed

**Safe Zone:** Keep critical content (name, role) in center 80% of image to avoid platform cropping

### Accessibility Strategy

**WCAG Compliance:** Level AA (matching portfolio standard)

**OG Image Accessibility:**
- ✅ **High Contrast:** White text on dark background (>7:1 ratio)
- ✅ **Large Text:** Minimum 24px for all body text
- ✅ **Clear Hierarchy:** Bold name, medium role, regular skills
- ✅ **Alt Text:** `og:image:alt` meta tag with descriptive text

**Meta Tag Accessibility:**
```html
<meta property="og:image:alt" content="Dave Charm Bulaquena - Full Stack Developer specializing in React, TypeScript, and Node.js. Professional portfolio card showing tech stack and experience." />
```

**Screen Reader Considerations:**
- OG images are visual-only (platforms don't provide alt text to users)
- Ensure meta description conveys same info as image

---

## 10. Implementation Specification

### Tier 1: Static OG Image (Immediate)

**Deliverables:**
1. **Design static OG image** (1200×630px PNG/JPG)
   - Use Figma, Canva, or Photoshop
   - Follow design system: dark background, gradient accent, profile photo
   - Include: Name, role, top 8 skills, stats
2. **Export image** as `apps/web/public/og-image.jpg`
3. **Verify meta tags** reference correct path
4. **Test on platforms:**
   - Facebook Sharing Debugger
   - Twitter Card Validator
   - LinkedIn Post Inspector

**Estimated Time:** 30 minutes

### Tier 2: Dynamic OG Image Generation (Enhancement)

**Technical Requirements:**
- Install `@vercel/og` or `satori` library
- Create API route handler
- Design React components for image templates
- Implement caching strategy
- Test with various content types

**Deliverables:**
1. **API Route:** `apps/web/src/pages/api/og.tsx` (if using Vite with SSR plugin)
2. **OG Template Components:**
   - `HomepageOGTemplate.tsx`
   - `ProjectOGTemplate.tsx`
   - `BlogOGTemplate.tsx`
3. **Updated SEO Component:**
   - Dynamic `og:image` URL based on route
   - Route-specific meta tags
4. **Strapi Integration:**
   - Fetch project data for dynamic images
   - Cache project metadata

**Estimated Time:** 2-3 hours

### Enhanced Meta Tags (All Tiers)

**Additional Meta Tags to Implement:**

```html
<!-- Enhanced OG Tags -->
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Dave Charm Bulaquena - Full Stack Developer portfolio" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:locale" content="en_US" />
<meta property="og:site_name" content="Dave Charm Bulaquena" />
<meta property="og:updated_time" content="2025-10-25T00:00:00Z" />

<!-- Enhanced Twitter Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@davebulaquena" />
<meta name="twitter:creator" content="@davebulaquena" />
<meta name="twitter:image:alt" content="Dave Charm Bulaquena - Full Stack Developer" />

<!-- LinkedIn-Specific -->
<meta property="og:type" content="profile" />
<meta property="profile:first_name" content="Dave Charm" />
<meta property="profile:last_name" content="Bulaquena" />
<meta property="profile:username" content="davebulaquena" />

<!-- WhatsApp Preview Optimization -->
<meta property="og:image:secure_url" content="https://davebulaquena.com/og-image.jpg" />
```

---

## 11. Testing & Validation Strategy

### Platform Testing Tools

**Must Test On:**
1. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Tests: OG image loads, correct size, title/description
   - Action: Scrape again to clear cache

2. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Tests: Large image card, proper attribution

3. **LinkedIn Post Inspector**
   - URL: https://www.linkedin.com/post-inspector/
   - Tests: Professional preview, image quality

4. **WhatsApp Link Preview**
   - Method: Send link to yourself in WhatsApp
   - Tests: Image displays, text is readable

5. **Discord Embed Tester**
   - Method: Send link in Discord channel
   - Tests: Rich embed renders correctly

### Validation Checklist

**Image Quality:**
- [ ] Image is exactly 1200×630px
- [ ] File size < 300KB (ideally < 100KB)
- [ ] Text is legible even when scaled down
- [ ] Colors match portfolio brand
- [ ] Profile photo is clear and professional

**Meta Tag Verification:**
- [ ] All OG tags present
- [ ] Twitter tags present
- [ ] Image URLs are absolute (https://)
- [ ] Descriptions are 150-200 characters
- [ ] Titles are 60-70 characters

**Cross-Platform Consistency:**
- [ ] Preview looks good on Facebook
- [ ] Preview looks good on LinkedIn
- [ ] Preview looks good on Twitter
- [ ] Preview looks good on WhatsApp
- [ ] Preview looks good on Discord

**Functional Testing:**
- [ ] Click on preview → correct landing page
- [ ] Image loads quickly
- [ ] No broken images
- [ ] Cache invalidation works

---

## 12. Recommended Next Steps

### Immediate Actions (Tier 1 - 30 minutes)

1. **Create Static OG Image**
   - Use Canva Pro or Figma
   - Follow design specs from Section 5
   - Export as `og-image.jpg`

2. **Add Enhanced Meta Tags**
   - Update `index.html` with complete OG/Twitter tags
   - Add image dimensions, alt text, locale

3. **Test on 3 Platforms**
   - Facebook, LinkedIn, Twitter
   - Verify image displays correctly

### Future Enhancements (Tier 2 - 2-3 hours)

4. **Implement Dynamic OG Generation**
   - Research `@vercel/og` vs `satori`
   - Create API route
   - Build React templates

5. **Project-Specific Previews**
   - Integrate with Strapi CMS
   - Generate unique OG images per project
   - Test with real project data

6. **Analytics Tracking**
   - Add UTM parameters to social shares
   - Track click-through rates
   - Measure engagement improvement

---

## 13. Design Rationale & Decision Log

### Why This Design Direction?

**Professional Dark Theme:**
- Aligns with current portfolio design
- Stands out in social feeds (most are light)
- Conveys sophistication and modernity
- High contrast for readability

**Skill Badges Prominent:**
- Immediately communicates technical expertise
- Visual hierarchy: Name → Role → Skills
- Glassmorphism style feels contemporary
- Easy to scan quickly

**Stats Row:**
- Builds credibility ("15+ projects, 5+ years")
- Uses icons for quick recognition
- Compact format doesn't overwhelm

**Two-Tier Approach:**
- Tier 1 = Immediate value, low effort
- Tier 2 = Long-term scalability, higher effort
- Allows incremental improvement
- Doesn't block current sharing needs

### Alternative Approaches Considered

**Alternative 1: Light Theme**
- ❌ Rejected - Doesn't match portfolio brand
- ❌ Less distinctive in social feeds

**Alternative 2: Full-Screenshot Approach**
- ❌ Rejected - Doesn't scale down well
- ❌ Text becomes unreadable at small sizes

**Alternative 3: Illustration-Heavy Design**
- ❌ Rejected - Doesn't convey professionalism
- ✅ Could work for blog posts (future)

---

## 14. Success Metrics

### Qualitative Metrics
- Professional appearance in social feeds
- Positive feedback from network
- Reduced "what do you do?" questions
- Increased profile visit requests

### Quantitative Metrics (if tracking)
- Click-through rate on social shares
- Time on site from social traffic
- Social share frequency
- Platform-specific engagement (likes, comments on shared links)

---

## 15. Handoff to Development

### Developer Tasks

**Phase 1: Static Implementation (Immediate)**
- [ ] Create static OG image using design specs
- [ ] Place image in `apps/web/public/og-image.jpg`
- [ ] Add enhanced meta tags to `index.html`
- [ ] Update SEO component with additional tags
- [ ] Test on Facebook, LinkedIn, Twitter

**Phase 2: Dynamic Implementation (Future)**
- [ ] Research `@vercel/og` vs `satori` library
- [ ] Install chosen library
- [ ] Create OG image API route
- [ ] Build React templates for each OG type
- [ ] Integrate with Strapi for project data
- [ ] Implement caching strategy
- [ ] Update SEO component for route-specific images
- [ ] Test dynamic generation across platforms

### Design Assets Provided
- UX specification (this document)
- Layout patterns and component specs
- Color palette with exact hex codes
- Typography specifications
- Example layouts for each context type

### Questions for Developer
1. Prefer Tier 1 static first, or jump to Tier 2 dynamic?
2. Need Figma/Canva template for OG image, or design directly in code?
3. Using Vercel deployment? (affects API route implementation)
4. Want to add social share buttons to portfolio pages?

---

## Appendix: Resources & References

### Design Tools
- **Canva Pro:** Social media graphics templates
- **Figma:** Professional design tool
- **Open Graph Image Generator:** https://og-playground.vercel.app/

### Testing Tools
- **Facebook Sharing Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/
- **Open Graph Protocol Docs:** https://ogp.me/

### Technical Resources
- **@vercel/og Documentation:** https://vercel.com/docs/functions/edge-functions/og-image-generation
- **Satori Library:** https://github.com/vercel/satori
- **OG Image Best Practices:** https://www.opengraph.xyz/

---

**✅ UX Design Specification Complete**

**Status:** Ready for developer handoff
**Next Workflow:** Developer implementation phase
**Contact:** Sally (UX Designer) for design questions or clarifications

---

*This specification provides everything needed to implement professional social sharing previews. Start with Tier 1 for immediate wins, then enhance with Tier 2 for dynamic, scalable solution.*
