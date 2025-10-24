# Epic 3: Core Portfolio Sections - Brownfield Enhancement

**Epic ID:** EPIC-3
**Status:** Ready for Story Development
**Created:** 2025-10-21
**Owner:** Sarah (PO Agent)

---

## Epic Goal

Finalize all core portfolio sections (Hero, About, Experience, Skills, Awards, Contact) with polished content, implement working contact form with email integration, add resume download functionality, integrate social media links, and ensure full responsive behavior across all devices.

---

## Existing System Context

### Current Relevant Functionality

- Skeleton components exist for all major sections:
  - Hero
  - About
  - Experience
  - Skills
  - Projects
  - Contact
  - Testimonials
- Basic layout components:
  - Header with navigation
  - Footer
  - Container
  - Section wrapper
- Additional components:
  - ThemeToggle for dark mode
  - ScrollReveal for animations
  - ErrorMessage for error handling
  - ProjectCard for project display
- Strapi API integration partially implemented for dynamic content

### Technology Stack

- **Frontend Framework:** React 18.3 with TypeScript 5+
- **Build Tool:** Vite 5.2
- **Styling:** Tailwind CSS 3.4+
- **Animation Library:** Framer Motion
- **CMS:** Strapi v4 headless CMS
- **State Management:** React Context + hooks, TanStack Query (React Query) for server state
- **Forms:** React Hook Form with Zod validation (to be implemented)
- **Email Service:** SendGrid or Mailgun (to be integrated)

### Integration Points

- Header navigation with smooth scroll links to sections
- ThemeToggle for light/dark mode switching
- Strapi CMS API for dynamic content (Projects, potentially Testimonials/Experience)
- Existing layout structure (Container, Section wrappers)
- ScrollReveal animations for section entrance effects
- Footer with social links

---

## Enhancement Details

### What's Being Added/Changed

1. **Hero Section Completion**
   - Display full name: "Dave Charm Bulaquena"
   - Professional title: "Full Stack Developer & Solutions Designer"
   - Primary CTAs: "View My Work" (smooth scroll to Projects), "Contact Me" (smooth scroll to Contact)
   - Social media icons with links (GitHub, LinkedIn, Twitter)
   - Responsive hero with visual impact

2. **About Section Finalization**
   - Professional bio highlighting development and solutions design expertise
   - Personal interests section
   - Visual elements (professional photo, design accents)
   - Responsive layout (split layout on desktop, stacked on mobile)

3. **Experience Section Implementation**
   - Chronological work history timeline
   - Job titles, companies, employment dates
   - Role descriptions with key accomplishments
   - Visual timeline design using existing timeline component
   - Responsive behavior across devices

4. **Skills Section Completion**
   - Visual representation of technical competencies
   - Grouped categories: Frontend, Backend, Design Tools, Frameworks
   - Tech stack badges/cards
   - Responsive grid layout

5. **Awards Section Creation**
   - Display professional recognition, certifications, achievements
   - Visual card or timeline layout
   - Icons or badges for awards
   - Responsive presentation

6. **Contact Section with Functional Form**
   - Contact form with fields: name, email, subject, message
   - React Hook Form integration with Zod validation
   - Input validation with clear error messages (required fields, email format)
   - Form submission to serverless function (Vercel function)
   - SendGrid/Mailgun integration for email sending
   - Success/error state handling with user feedback
   - Rate limiting: max 5 submissions per IP per hour (backend logic)
   - Direct email address display as alternative contact method
   - Social media links reiteration

7. **Resume Download Functionality**
   - Resume download button/link in Header navigation
   - PDF file hosted in public directory or CDN
   - Download triggers on click (opens in new tab or downloads directly)

8. **Social Media Integration**
   - GitHub, LinkedIn, Twitter links throughout sections
   - Icon components (Lucide React icons)
   - Links open in new tabs (target="_blank", rel="noopener noreferrer")
   - Consistent styling across sections

9. **Responsive Design Validation**
   - All sections responsive on mobile (320px+), tablet (768px+), desktop (1024px+)
   - Touch-friendly tap targets (min 44x44px) on mobile
   - Content reflows gracefully without horizontal scrolling
   - Images optimized and responsive

### How It Integrates

- **Header Navigation:** Smooth scroll links connect to all finalized sections
- **Strapi API:** Projects section already fetches from Strapi; Experience/Awards could optionally use Strapi for dynamic content management
- **Serverless Functions:** Contact form submits to Vercel serverless function which proxies to SendGrid/Mailgun
- **Theme System:** All sections support light/dark mode via existing ThemeToggle
- **Animation System:** ScrollReveal and Framer Motion enhance section presentation
- **Layout Components:** All sections wrapped in Container and Section components for consistency

### Success Criteria

- ✅ All sections display professional, polished content aligned with PRD
- ✅ Contact form successfully sends emails via SendGrid/Mailgun
- ✅ Form includes validation with clear, accessible error messages
- ✅ Resume downloads successfully from Header
- ✅ Social links work correctly and open in new tabs
- ✅ All sections fully responsive on mobile (320px+), tablet (768px+), desktop (1024px+)
- ✅ Smooth scroll navigation works across all sections without janky behavior
- ✅ Rate limiting prevents contact form spam (max 5 submissions/IP/hour)
- ✅ No accessibility violations (WCAG 2.1 AA compliance verified)

---

## Stories

### Story 1: Complete Hero, About, and Skills Sections with Responsive Layout

**Objective:** Finalize Hero, About, and Skills sections with professional content, responsive design, and smooth scroll integration

**Tasks:**
- Complete Hero section with name, title, CTA buttons, social icons
- Finalize About section with bio content and visual layout
- Implement Skills section with tech stack visualization (badges/cards)
- Ensure responsive behavior across mobile, tablet, desktop
- Integrate smooth scroll navigation from Header to sections
- Test dark mode across all three sections
- Verify WCAG 2.1 AA accessibility (keyboard navigation, color contrast, screen reader)

**Estimated Effort:** 4-5 hours

---

### Story 2: Build Experience Timeline and Awards Section

**Objective:** Create visual Experience timeline and Awards section with dynamic content structure

**Tasks:**
- Implement Experience section using timeline component
- Add chronological work history with job titles, companies, dates, descriptions
- Create Awards section with achievement cards or timeline
- Design responsive layout for both sections
- Optionally integrate Strapi CMS for dynamic Experience/Awards content management
- Add ScrollReveal animations for section entrance
- Verify responsive behavior and dark mode support
- Ensure accessibility compliance

**Estimated Effort:** 3-4 hours

---

### Story 3: Implement Functional Contact Form with Email Integration and Resume Download

**Objective:** Build production-ready contact form with email service integration, validation, error handling, and resume download feature

**Tasks:**
- Install and configure React Hook Form with Zod validation
- Create Contact form with fields: name, email, subject, message
- Implement inline validation with error messages
- Create Vercel serverless function for form processing
- Integrate SendGrid or Mailgun for email sending
- Implement rate limiting logic (max 5 submissions/IP/hour) in serverless function
- Add success/error state handling with user feedback
- Display direct email address as alternative contact method
- Add resume download button/link to Header
- Host PDF resume in public directory or CDN
- Implement download functionality (new tab or direct download)
- Test email delivery end-to-end
- Verify form accessibility (labels, error announcements, keyboard navigation)
- Test responsive form layout on all devices
- Add input sanitization to prevent XSS attacks

**Estimated Effort:** 5-6 hours

---

## Compatibility Requirements

- ✅ **Existing Animated UI Components:** 3D card, timeline, lamp, infinite slider integrate seamlessly
- ✅ **Strapi API Integration:** Projects API calls remain functional; new endpoints compatible
- ✅ **ThemeToggle:** Dark mode works across all new sections without visual glitches
- ✅ **Framer Motion Animations:** ScrollReveal and transitions enhance sections without performance degradation
- ✅ **Header/Footer Navigation:** Consistent navigation and footer remain unchanged
- ✅ **Layout Components:** Container and Section wrappers maintain visual rhythm

---

## Risk Mitigation

### Primary Risk
Email service integration fails or exposes API keys; form validation inadequate allowing spam or malicious input

### Mitigation Strategy
- **Environment Variables:** All API keys (SendGrid/Mailgun) stored in environment variables, never committed to git
- **Serverless Function Proxy:** Contact form submits to Vercel serverless function which handles email sending server-side
- **Rate Limiting:** Implement rate limiting (max 5 submissions/IP/hour) in serverless function to prevent spam
- **Input Sanitization:** Comprehensive sanitization of all user inputs to prevent XSS and injection attacks
- **Validation:** Client-side validation with React Hook Form + Zod; server-side validation in serverless function
- **Error Handling:** Graceful error messages for users; detailed error logging for debugging (Sentry)
- **Fallback Contact:** Direct email address always visible as backup contact method

### Rollback Plan
- Contact form can be disabled, displaying only direct email address as fallback
- Sections can be deployed independently; incomplete sections can be hidden via feature flags
- Resume download can use simple anchor tag to hosted PDF if download logic fails

---

## Definition of Done

- ✅ Hero section complete with full name, professional title, CTA buttons, social icons
- ✅ About section with professional bio, personal interests, visual elements
- ✅ Experience section with chronological work history timeline
- ✅ Skills section with tech stack visualization (grouped categories, badges)
- ✅ Awards section displaying professional achievements and certifications
- ✅ Contact form sends emails successfully via SendGrid/Mailgun
- ✅ Form validation prevents invalid submissions with clear error messages
- ✅ Rate limiting prevents spam (max 5 submissions per IP per hour verified through testing)
- ✅ Resume PDF downloads successfully from Header
- ✅ All sections responsive on mobile (320px+), tablet (768px+), desktop (1024px+)
- ✅ Smooth scroll navigation functional from Header to all sections
- ✅ Social media links (GitHub, LinkedIn, Twitter) work correctly and open in new tabs
- ✅ No accessibility violations (WCAG 2.1 AA verified with axe DevTools or Lighthouse)
- ✅ Dark mode works seamlessly across all sections
- ✅ Input sanitization prevents XSS attacks
- ✅ Serverless function handles errors gracefully with appropriate user feedback

---

## Story Manager Handoff

**Handoff Message:**

"Please develop detailed user stories for this brownfield epic. Key considerations:

- This is an enhancement to an existing portfolio system running **React 18.3 + TypeScript + Vite + Tailwind CSS + Framer Motion + Strapi CMS**
- Integration points:
  - Header navigation with smooth scroll links
  - ThemeToggle for light/dark mode
  - Strapi CMS API for dynamic content (Projects, potentially Experience/Awards)
  - Existing layout structure (Container, Section wrappers)
  - ScrollReveal animations for section entrance effects
  - Footer with social links
- Existing patterns to follow:
  - Component composition with layout wrappers
  - Dark mode using 'class' strategy in Tailwind
  - TypeScript strict typing for all components
  - Framer Motion for animations and transitions
  - Error handling with ErrorMessage component
- Critical compatibility requirements:
  - Contact form must use environment variables for API keys (no secrets in code)
  - Rate limiting required (max 5 submissions/IP/hour) to prevent spam
  - Input sanitization mandatory to prevent XSS attacks
  - Form must work even if JavaScript fails (progressive enhancement)
  - Resume download must not expose file system paths
  - Social links must use security best practices (noopener noreferrer)
- Each story must include verification that existing functionality remains intact

The epic should maintain system integrity while delivering complete, production-ready portfolio sections that demonstrate Full Stack Developer & Solutions Designer expertise."

---

**Epic Ready for Story Development**
