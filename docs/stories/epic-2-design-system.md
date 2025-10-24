# Epic 2: Design System & Component Library - Brownfield Enhancement

**Epic ID:** EPIC-2
**Status:** Ready for Story Development
**Created:** 2025-10-21
**Owner:** Sarah (PO Agent)

---

## Epic Goal

Finalize the portfolio's design system by integrating shadcn/ui components, defining a custom color palette with full dark mode support, establishing complete typography system, and ensuring WCAG 2.1 AA accessibility compliance across all UI primitives.

---

## Existing System Context

### Current Relevant Functionality

- Basic Tailwind CSS configuration with Inter font family
- Custom animations (gradient, fade-in, slide transitions) defined in Tailwind config
- Dark mode toggle component (`ThemeToggle`) already implemented
- Several animated UI components exist:
  - 3D cards
  - Timeline
  - Lamp effect
  - Infinite slider
  - Animated cards stack
- Basic color tokens (border, background, foreground) using CSS variables

### Technology Stack

- **Frontend Framework:** React 18.3 with TypeScript 5+
- **Build Tool:** Vite 5.2
- **Styling:** Tailwind CSS 3.4+
- **Animation Library:** Framer Motion
- **Component Approach:** Currently custom components, migrating to shadcn/ui

### Integration Points

- All section components (Hero, About, Experience, Skills, Projects, Contact, Testimonials)
- Layout components (Header, Footer, Container, Section)
- Theme context for dark mode management
- Existing custom animation keyframes and transitions

---

## Enhancement Details

### What's Being Added/Changed

1. **shadcn/ui Installation & Configuration**
   - Install shadcn/ui CLI
   - Configure components.json for project structure
   - Set up Radix UI primitives foundation

2. **Custom Color Palette Definition**
   - Define primary, secondary, accent, and neutral color scales
   - Create light mode and dark mode variants
   - Ensure WCAG 2.1 AA contrast compliance (4.5:1 for normal text, 3:1 for large text)
   - Document color tokens in CSS variables

3. **Complete Typography System**
   - Establish full type scale (h1-h6, body, caption, labels)
   - Define font weights, line heights, letter spacing
   - Ensure Inter font loads correctly with fallbacks
   - Create responsive typography utilities

4. **Core UI Primitives**
   - Install and customize shadcn/ui components:
     - Button (with variants: primary, secondary, outline, ghost)
     - Card (with header, content, footer)
     - Input (text, email, textarea)
     - Badge (for skills, tags)
     - Separator (visual dividers)
     - Label (form labels)
   - Configure dark mode for all primitives

5. **Component Refactoring**
   - Update existing sections to use new design system components
   - Replace custom buttons with shadcn/ui Button
   - Standardize spacing and visual rhythm
   - Ensure consistent theming across all sections

6. **Design Documentation**
   - Document design tokens (colors, typography, spacing)
   - Create component usage guidelines
   - Add Storybook or component showcase (optional)

### How It Integrates

- **Tailwind Config:** Extends existing configuration with new color palette and typography tokens
- **Theme Context:** Integrates with existing ThemeToggle component for dark mode switching
- **Component Architecture:** Provides standardized primitives for all sections to consume
- **Animation System:** Works alongside existing Framer Motion animations without conflicts
- **Accessibility:** Radix UI primitives provide keyboard navigation and ARIA attributes by default

### Success Criteria

- ✅ shadcn/ui CLI configured and all core components installed
- ✅ Custom color system defined with WCAG 2.1 AA compliance verified using automated tools
- ✅ Complete typography scale implemented and responsive across breakpoints
- ✅ All existing sections successfully refactored to use new design system components
- ✅ Dark mode toggles seamlessly with no visual glitches
- ✅ No visual regressions in existing functionality verified through manual testing
- ✅ Design tokens documented in markdown file with examples

---

## Stories

### Story 1: Install shadcn/ui and Configure Custom Color Palette & Typography System

**Objective:** Set up shadcn/ui foundation with custom color palette and typography that meets WCAG AA standards

**Tasks:**
- Install shadcn/ui CLI and initialize configuration
- Define custom color palette (primary, secondary, accent, neutrals) for light/dark modes
- Verify WCAG 2.1 AA contrast compliance using color contrast checker
- Establish complete typography scale with Inter font
- Update Tailwind config with new design tokens
- Test theme switching between light and dark modes

**Estimated Effort:** 3-4 hours

---

### Story 2: Implement Core shadcn/ui Primitives with Dark Mode Support

**Objective:** Install and customize essential shadcn/ui components with full dark mode theming

**Tasks:**
- Install shadcn/ui components: Button, Card, Input, Badge, Label, Separator
- Customize component variants to match brand identity
- Configure dark mode CSS variables for all components
- Create component demonstration page for visual testing
- Verify keyboard navigation and accessibility features
- Document component usage patterns

**Estimated Effort:** 3-4 hours

---

### Story 3: Refactor Existing Sections to Use Design System Components

**Objective:** Update all portfolio sections to use new shadcn/ui primitives and validate visual consistency

**Tasks:**
- Refactor Hero section to use new Button and typography styles
- Update About, Skills, Experience sections with Card and Badge components
- Replace custom form inputs with shadcn/ui Input components in Contact section
- Apply consistent spacing using design system tokens
- Verify all animations work with new components
- Perform visual regression testing across all sections
- Update component documentation with design system usage

**Estimated Effort:** 4-5 hours

---

## Compatibility Requirements

- ✅ **Existing Animations:** Tailwind animations (gradient, fade-in, slides) remain functional
- ✅ **Theme Toggle:** Current ThemeToggle component integrates with new color system
- ✅ **Framer Motion:** Animation library works seamlessly with shadcn/ui components
- ✅ **Component APIs:** No breaking changes to existing section component interfaces
- ✅ **Performance:** No degradation in bundle size or runtime performance

---

## Risk Mitigation

### Primary Risk
Design system changes break existing section layouts or animations, requiring extensive rework

### Mitigation Strategy
- **Incremental Refactoring:** Migrate components one section at a time
- **Visual Testing:** Manual verification and screenshots before/after changes
- **Backward Compatibility:** Maintain wrapper components during transition period
- **Feature Flags:** Use conditional rendering to toggle between old/new components during development
- **Git Branching:** Work in feature branch with frequent commits for easy rollback

### Rollback Plan
- Git branch strategy allows reverting to pre-shadcn state
- Component-by-component migration means partial rollback is possible
- CSS variables approach allows quick theme switching without code changes

---

## Definition of Done

- ✅ shadcn/ui CLI configured and documented in project README
- ✅ Custom color palette defined for light/dark modes with WCAG AA verified
- ✅ Typography system implemented with Inter font and responsive sizing
- ✅ All core UI primitives (Button, Card, Input, Badge, Label, Separator) created and documented
- ✅ Existing sections (Hero, About, Experience, Skills, Contact, Projects, Testimonials) successfully use new components
- ✅ Dark mode toggles seamlessly across all components without visual glitches
- ✅ No visual regressions in existing functionality verified through manual testing
- ✅ Design system documentation created with color tokens, typography scale, and component usage examples
- ✅ All components keyboard accessible and screen reader compatible

---

## Story Manager Handoff

**Handoff Message:**

"Please develop detailed user stories for this brownfield epic. Key considerations:

- This is an enhancement to an existing portfolio system running **React 18.3 + TypeScript + Vite + Tailwind CSS + Framer Motion**
- Integration points:
  - Existing ThemeToggle component for dark mode
  - All section components (Hero, About, Experience, Skills, Projects, Contact, Testimonials)
  - Layout components (Header, Footer, Container, Section)
  - Custom Tailwind animations (gradient, fade-in, slide transitions)
- Existing patterns to follow:
  - Dark mode using 'class' strategy in Tailwind
  - CSS variables for theming (--border, --background, --foreground)
  - Component composition with layout and section components
  - Framer Motion for animations
- Critical compatibility requirements:
  - No breaking changes to existing component APIs
  - Maintain all current animations
  - Preserve dark mode functionality
  - Ensure WCAG 2.1 AA compliance
- Each story must include verification that existing functionality remains intact

The epic should maintain system integrity while delivering a professional, accessible design system using shadcn/ui that demonstrates both technical proficiency and design sensibility."

---

**Epic Ready for Story Development**
