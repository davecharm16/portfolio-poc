# Technical Assumptions

## Repository Structure: Monorepo

The project shall use a **monorepo** structure to manage both frontend and backend codebases in a single repository:

```
/portfolio
├── /apps
│   ├── /web          # Frontend React app
│   └── /cms          # Strapi CMS (optional if self-hosted)
├── /packages
│   ├── /ui           # shadcn/ui components
│   ├── /types        # Shared TypeScript types
│   └── /utils        # Shared utilities
├── /docs             # Documentation (PRD, architecture, etc.)
└── package.json      # Root package.json with workspaces
```

**Rationale:**
- Shared TypeScript types between frontend and Strapi ensure type safety
- shadcn/ui components managed as internal package for reusability
- Unified dependency management and build orchestration
- Easier local development workflow

**Tools:** pnpm workspaces or npm workspaces (Vite compatible)

## Service Architecture

**Hybrid: Static Frontend + Headless CMS + Serverless Functions**

**Frontend (React SPA):**
- Static site with client-side rendering (CSR) for dynamic content
- Deployed to edge network (Vercel/Netlify)
- Fetches content from Strapi API at runtime

**Backend (Strapi CMS):**
- Self-hosted Strapi v4+ headless CMS
- Separate deployment from frontend
- REST and/or GraphQL API for content delivery
- Admin panel for content management

**Serverless Functions:**
- Contact form processing (email sending)
- Visit counter increment/retrieval
- GitHub API proxy (to hide personal access tokens)
- Analytics event tracking

**External Services:**
- **Strapi Cloud/Railway/Heroku** for Strapi hosting
- **Vercel/Netlify** for frontend hosting and serverless functions
- **SendGrid/Mailgun** for transactional emails
- **GitHub API** for real-time developer stats
- **Plausible/Google Analytics** for advanced analytics (beyond simple visit counter)

**Rationale:**
- Decoupled architecture allows independent scaling and deployment
- Serverless functions keep backend logic minimal
- Strapi provides flexible content modeling without custom backend code
- Edge deployment ensures global performance

## Testing Requirements

**Comprehensive Testing Strategy:**

**Unit Testing:**
- **Frontend:** React components with Vitest + React Testing Library
- **Utilities:** Pure functions and hooks tested in isolation
- **Target Coverage:** 80%+ for critical business logic

**Integration Testing:**
- API integration tests for Strapi endpoints
- Serverless function integration tests
- GitHub API integration validation

**End-to-End Testing:**
- Critical user journeys with Playwright or Cypress
- Contact form submission flow
- Project display from Strapi
- Dark mode toggle
- Responsive breakpoints

**Visual Regression Testing (Optional but Recommended):**
- Chromatic or Percy for component visual diffs
- Ensures design consistency across changes

**Accessibility Testing:**
- Automated: axe-core via jest-axe or @axe-core/playwright
- Manual: Keyboard navigation and screen reader testing

**Performance Testing:**
- Lighthouse CI in pipeline
- Core Web Vitals monitoring
- Bundle size tracking

**Rationale:**
- Full testing pyramid ensures quality and confidence
- Automated testing critical for solo developer workflow
- Visual regression prevents design drift
- Accessibility testing ensures WCAG compliance

## Additional Technical Assumptions and Requests

**Frontend Stack:**
- **Framework:** React 18.3+ with TypeScript 5+
- **Build Tool:** Vite 5+ for fast dev experience and optimized production builds
- **Styling:** Tailwind CSS 3.4+ (required for shadcn/ui)
- **Component Library:** shadcn/ui (copy-paste components, not npm package)
- **UI Primitives:** Radix UI (via shadcn/ui)
- **Icons:** Lucide React
- **State Management:** React Context + hooks for simple state, TanStack Query (React Query) for server state/caching
- **Routing:** React Router v6+ (if multi-page blog, otherwise scroll-based navigation)
- **Forms:** React Hook Form with Zod validation
- **Animations:** Framer Motion (for dark mode transitions, scroll reveals, micro-interactions)

**Backend/CMS Stack:**
- **CMS:** Strapi v4+ (latest stable)
- **Database:** PostgreSQL for production (via Strapi Cloud/Railway), SQLite for local dev
- **API Style:** REST (default Strapi) with optional GraphQL plugin
- **Image Handling:** Strapi media library with cloud storage (Cloudinary or AWS S3)

**Developer Experience:**
- **Package Manager:** pnpm (faster, more efficient) or npm
- **Code Quality:** ESLint + Prettier with shared configs
- **Git Hooks:** Husky + lint-staged for pre-commit checks
- **Commit Convention:** Conventional Commits (feat:, fix:, docs:, etc.)
- **CI/CD:** GitHub Actions for automated testing and deployment
- **Environment Management:** .env files with dotenv, separate configs for dev/staging/prod

**Deployment & Hosting:**
- **Frontend:** Vercel (preferred) or Netlify with automatic preview deployments
- **Strapi:** Strapi Cloud (easiest) or Railway (flexible, good free tier)
- **Database:** Managed PostgreSQL (included with Strapi Cloud/Railway)
- **CDN:** Automatic via Vercel/Netlify edge network
- **DNS:** Custom domain (davebulaquena.com or similar) with SSL/TLS
- **Assets:** Images optimized and served via CDN or Cloudinary

**Security:**
- Environment variables for all secrets (API keys, tokens, DB credentials)
- CORS configuration on Strapi (whitelist frontend domain)
- Rate limiting on contact form and public APIs
- Input sanitization on all user inputs
- Content Security Policy (CSP) headers
- HTTPS enforced everywhere

**Analytics & Monitoring:**
- **Analytics:** Plausible (privacy-friendly) or Google Analytics 4
- **Error Tracking:** Sentry for frontend and serverless function errors
- **Performance Monitoring:** Vercel Analytics or Web Vitals tracking
- **Uptime Monitoring:** UptimeRobot or Vercel monitoring for status checks

**Content Strategy:**
- All dynamic content managed via Strapi (Projects, Blog Posts, Testimonials)
- Static content (About, Skills, Experience) can be hard-coded initially, migrated to Strapi later if needed
- Images optimized for web (WebP format preferred, fallbacks for older browsers)
- Markdown support for blog content with code syntax highlighting

**Dark Mode Implementation:**
- System preference detection (`prefers-color-scheme`)
- Manual toggle with persistence (localStorage)
- Seamless transitions using Tailwind's dark mode utilities
- All shadcn/ui components support dark mode out of the box

**Blog Features (Full Build):**
- Blog post listing page with pagination
- Individual blog post pages with rich content (Markdown/MDX)
- Categories and tags for organization
- Code syntax highlighting (Prism.js or Shiki)
- Estimated reading time
- Social sharing buttons
- SEO optimization per post (meta tags, Open Graph)

**GitHub Integration Enhanced:**
- Real-time contribution graph (GitHub API or embedded)
- Repository showcase with stars, forks, languages
- Recent activity feed (optional)
- Pinned repositories

**Testimonials/Recommendations:**
- Managed via Strapi CMS
- Display with avatar, name, title, company
- Optional: LinkedIn import or manual entry

---
