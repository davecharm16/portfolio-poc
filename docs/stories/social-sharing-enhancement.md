# Story: Social Sharing Enhancement

**Status:** Approved
**Created:** 2025-10-25
**Type:** Feature
**Assignee:** Amelia (Dev Agent)

## User Story

**As** Dave (portfolio owner)
**I want** rich social media previews when sharing my portfolio links
**So that** my shares look professional and encourage click-throughs

## Acceptance Criteria

- [ ] **AC1:** Static OG image (1200x630px) created and placed in `/apps/web/public/`
- [ ] **AC2:** Enhanced meta tags added to `index.html` (OG image dimensions, alt text, locale, Twitter card)
- [ ] **AC3:** SEO component updated with additional meta tags
- [ ] **AC4:** Social previews tested on Facebook, LinkedIn, and Twitter
- [ ] **AC5:** (Tier 2) Dynamic OG image generation API implemented
- [ ] **AC6:** (Tier 2) Route-specific OG images work for projects

## Tasks

- [ ] Create static OG image following UX design specs
- [ ] Add enhanced Open Graph meta tags to index.html
- [ ] Update SEO component with platform-specific tags
- [ ] (Tier 2) Install and configure OG image generation library
- [ ] (Tier 2) Create OG image API route
- [ ] (Tier 2) Build React templates for different OG types
- [ ] Test on Facebook Sharing Debugger
- [ ] Test on Twitter Card Validator
- [ ] Test on LinkedIn Post Inspector

## Design Reference

See: `/docs/ux-social-sharing-feature.md`

## Technical Notes

**Tier 1 (Static):**
- Image specs: 1200x630px, <100KB, JPEG/PNG
- Colors: Dark theme (#0A0A0A bg, gradient #8B5CF6→#3B82F6)
- Content: Name, role, skills, stats

**Tier 2 (Dynamic):**
- Library: `@vercel/og` or `satori`
- API Route: `/api/og?type={type}&id={id}`
- Caching: 7 days
- Integration: Strapi CMS for project data

## Dev Agent Record

**Context Reference:** `/docs/ux-social-sharing-feature.md` (UX Specification)
**Status:** Approved for implementation
