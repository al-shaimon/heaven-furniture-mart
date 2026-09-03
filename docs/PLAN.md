# Heaven Furniture Mart | Crafted Around You

## Project Plan

Repository: `heaven-furniture-mart-landing`

Brand: `Heaven Furniture Mart`

Project Type: Premium single-page brand landing page

Primary Goal: Build a real-world, production-quality landing page for Heaven Furniture Mart that makes a completely new visitor understand the brand, its offering, its differentiation, and the next action within 30 seconds.

---

# THE ONE RULE

> **You're not designing for judges. Design for a real customer who's never heard of Heaven Furniture Mart. They should understand exactly what this brand is within 30 seconds.**

This is the most important rule of the entire project.

Do NOT optimize the website primarily for:

- Hackathon trends
- Excessive animations
- Dribbble-style visual tricks
- AI-generated design gimmicks
- Unnecessary technical complexity
- Showing off the tech stack
- Copying the reference website literally

Optimize for:

- Clarity
- Trust
- Premium perception
- Brand authenticity
- Real customer understanding
- Strong visual hierarchy
- Excellent mobile UX
- Fast loading
- Clear conversion path

The final website should feel like the official digital home of an established premium furniture and interior studio in Chattogram.

---

# 1. BRAND UNDERSTANDING

Heaven Furniture Mart is NOT simply an online furniture shop.

Position the brand as:

> A premium, bespoke furniture and interior styling brand that creates furniture around the customer's space, lifestyle, dimensions, preferences, and taste.

Core brand characteristics:

- Bespoke
- Premium
- Warm
- Trustworthy
- Crafted
- Personal
- Modern
- Established
- Local to Chattogram
- Customer-focused

The website should communicate:

**"We don't simply sell furniture. We create furniture specifically for your space and lifestyle."**

---

# 2. PRIMARY CUSTOMER QUESTION

A first-time visitor should be able to answer all of these questions quickly:

1. What is Heaven Furniture Mart?
2. What do they sell?
3. Do they make custom/bespoke furniture?
4. Why should I trust them?
5. Where are they located?
6. How can I contact them?
7. What should I do next?

If the answer to any of these is unclear, improve the page.

---

# 3. PRIMARY CONVERSION GOAL

The primary conversion action is:

> **Book a Free Design Consultation**

Secondary actions:

- Call
- WhatsApp
- Visit Showroom
- Explore Collections
- View Social Media
- Get Directions

Do NOT create multiple competing primary CTAs.

The entire page should naturally lead toward:

**Book a Free Design Consultation**

---

# 4. PROJECT IDENTITY

## Project Name

**Heaven Furniture Mart | Crafted Around You**

## Repository

**heaven-furniture-mart-landing**

## Core Campaign/Creative Concept

**Crafted Around You**

This phrase should influence the visual and copy direction throughout the page.

It should communicate:

- Customization
- Personalization
- Lifestyle
- Space
- Craftsmanship

---

# 5. SOURCE OF TRUTH

Before writing website copy or creating visuals, research Heaven Furniture Mart thoroughly.

Use the following official/public sources:

### YouTube

https://www.youtube.com/@HeavenFurnitureMart

### Facebook

https://www.facebook.com/HeavenFurnitureMart

### Instagram

https://www.instagram.com/heaven_furniture_ltd

Also use the company brief supplied with this project as a primary source of business information.

IMPORTANT:

Do NOT invent:

- Products
- Awards
- Statistics
- Testimonials
- Customer counts
- Locations
- Services
- Materials
- Certifications
- Business milestones
- Prices
- Claims about quality

If information is not available from the supplied brief or reliable public sources, do not fabricate it.

---

# 6. SOCIAL MEDIA RESEARCH & ASSET COLLECTION

Before serious UI implementation, inspect the public social media profiles.

The goal is to make the landing page feel authentic to Heaven Furniture Mart rather than like a generic furniture template.

Research:

- Brand logo
- Furniture photography
- Showroom photography
- Interior photography
- Workshop/craftsmanship photography
- Product categories
- Custom furniture examples
- Team/craftsmanship content
- Videos
- Reels
- Brand colors
- Existing slogans
- Contact information
- Address
- Social proof
- Customer interactions
- Relevant company milestones
- Existing visual style

## Asset Download Requirement

Where technically and legally appropriate, download publicly accessible, high-quality brand assets from the supplied social sources for use in the project.

Prefer:

- Original/high-resolution images
- Official brand assets
- Publicly available videos
- Public showroom imagery
- Public product imagery

Do NOT:

- Bypass authentication
- Circumvent access restrictions
- Scrape private content
- Attempt to evade platform restrictions
- Download restricted/private content
- Misrepresent third-party content as company-owned

If direct scraping/downloading from a platform is technically unavailable, use publicly accessible content or manually available assets rather than wasting development time attempting to bypass restrictions.

Keep downloaded assets organized.

Recommended structure:

public/
assets/
brand/
hero/
collections/
bespoke/
craftsmanship/
showroom/
social/
videos/

Rename files descriptively.

Bad:
IMG_8293.jpg

Good:
heaven-showroom-agrabad.jpg
heaven-custom-sofa.jpg
heaven-bedroom-furniture.jpg
heaven-dining-space.jpg

---

# 7. CONTENT EXTRACTION

Extract actual business information from the supplied brief and public sources.

Create a structured content source before implementing the page.

Recommended file:

`content/brand.ts`

or:

`content/brand.json`

It should contain:

- Brand name
- Tagline
- Description
- Location
- Address
- Phone
- Email
- Social links
- Services
- Product categories
- Brand story
- Milestones
- CTA text
- Consultation information
- Showroom information

Do NOT scatter hardcoded business information throughout React components.

If the information changes, it should be possible to update it from one central content source.

---

# 8. DESIGN DIRECTION

The website should feel like:

**Luxury furniture showroom + interior design studio + editorial architecture magazine**

NOT:

- SaaS landing page
- E-commerce marketplace
- Generic furniture template
- Startup website
- Over-designed hackathon project

Visual keywords:

- Premium
- Editorial
- Architectural
- Warm
- Minimal
- Sophisticated
- Human
- Authentic

---

# 9. COLOR SYSTEM

Start with a warm luxury palette.

Suggested direction:

- Deep Charcoal
- Warm Ivory
- Soft White
- Deep Brown
- Wood/Tan
- Muted Gold

Avoid excessive gold.

Gold should behave like a subtle accent, not the dominant brand color.

Create design tokens/CSS variables rather than scattering hex values throughout the project.

---

# 10. TYPOGRAPHY

Use a premium serif for major editorial headings.

Possible heading fonts:

- Cormorant Garamond
- Playfair Display
- DM Serif Display

Use a modern sans-serif for body/UI:

- Inter
- Manrope
- DM Sans

Typography must prioritize:

- Readability
- Hierarchy
- Premium feel
- Mobile readability

Do not use too many font families.

---

# 11. PAGE STRUCTURE

The recommended page architecture is:

1. Navigation
2. Hero
3. Brand Introduction
4. Collections / Spaces
5. Bespoke Furniture
6. Craftsmanship Process
7. Why Heaven
8. Brand Statement / Trust
9. Timeline / Milestones
10. Showroom
11. Final CTA
12. Footer

The exact structure can evolve during implementation if research suggests a better customer journey.

---

# PHASE 0: PROJECT AUDIT & RESEARCH

## Objective

Understand the company before designing anything.

## Tasks

- [x] Inspect the supplied company brief.
- [x] Inspect official social channels (YouTube, Facebook, Instagram, local business index).
- [x] Collect and organize available brand assets in `public/assets/`.
- [x] Research furniture categories (Living, Bedroom, Dining, Office, Bespoke).
- [x] Identify strongest visual assets (Showroom exterior with signage, CTG Teak Victorian, Artisan hammering studs, Marble dining, Master bedroom).
- [x] Identify real differentiators (Made-to-order, Chittagong Teak, CNC precision + hand carving, free consultation, turnkey installation).
- [x] Extract verified contact information (+880 1900-481898, Agrabad Access Road opposite RAK Ceramics).
- [x] Extract verified milestones (2003 founding, 2011 Agrabad showroom, 2018 500+ projects, 2022 CCCI, 2024 BFMA recognition).
- [x] Identify existing brand language ("Designed. Crafted. Customized.", "Furniture, Crafted Around You").
- [x] Identify repeated visual patterns from social media (Deep slate-teal background, warm gold accents, Chittagong Segun wood).
- [x] Identify what makes Heaven different from a generic furniture retailer (Custom atelier vs. static off-the-shelf inventory).

## Deliverables

Created:
- [x] `docs/brand-research.md`
- [x] Downloaded official assets into `public/assets/` structure

## Phase 0 Status: COMPLETE

> **Core Answer:**
> Heaven Furniture Mart is an established bespoke furniture atelier and interior studio on Agrabad Access Road, Chattogram. Founded in 2003 by Abul Kalam Bhasani, they design and handcraft custom residential and office furniture tailored to the homeowner's exact room dimensions, materials, and lifestyle—using authentic Chittagong Teak, CNC precision, and master finishing. Homeowners care because standard off-the-shelf furniture rarely fits modern apartment layouts or delivers generational heirloom durability.

---

# PHASE 1: CONTENT STRATEGY

## Objective

Write content around the customer's questions rather than filling predefined UI sections.

## Primary message

Potential direction:

> **Furniture, Crafted Around You.**

Supporting message:

> Bespoke furniture and interior styling designed around your space, lifestyle, and taste.

Primary CTA:

> **Book a Free Design Consultation**

## Tasks & Decisions

- [x] Determine exact brand positioning (Chattogram's premier bespoke furniture atelier vs. mass-market retailer).
- [x] Identify primary customer (homeowners, apartment buyers, and villa renovators across Chattogram).
- [x] Articulate primary customer problem (dimension mismatches, particle-board decay, lack of customization, trust deficits with informal carpenters).
- [x] Define primary value proposition ("Furniture, Crafted Around You" — 100% custom-sized from authentic Chittagong Teak with master finishings).
- [x] Establish single primary CTA ("Book a Free Design Consultation").
- [x] Establish secondary CTAs (WhatsApp direct link, telephone hotline, showroom visit).
- [x] Formulate Hero messaging for 5-second clarity test.
- [x] Create section-by-section copywriting blueprint for all 9 sections.
- [x] Define above-the-fold content requirements (First 5 seconds test).
- [x] Document intentionally excluded elements (no e-commerce carts, no fake pricing, no fake model reviews, no SaaS gimmicks).
- [x] Map out 30-second customer journey (0-5s discovery, 5-12s pain point, 12-18s curation, 18-24s provenance, 24-30s conversion).

## Deliverables

Created:
- [x] `docs/content-strategy.md`

## Phase 1 Status: COMPLETE

> **Core Decision Record:**
> All website copy will be driven by real business facts from the company brief, brochure, and company deck. No generic AI buzzwords ("elevate your lifestyle", "synergy", "cutting-edge"). Every claim is backed by 20+ years of heritage, real Chittagong Teak, physical Agrabad showroom proof, and BFMA 2024 recognition.

---

# PHASE 2: INFORMATION ARCHITECTURE & UX BLUEPRINT

## Tasks & Decisions

- [x] Streamline section order into one continuous architectural story (eliminating fragmented isolated text sections).
- [x] Define navigation structure (persistent desktop header with quick call badge + mobile slide-over drawer).
- [x] Establish strict Hero hierarchy for the 5-second clarity test.
- [x] Map out the 30-second customer journey (Discover → Differentiate → Aspire → Demystify → Trust → Convert).
- [x] Standardize CTA placement across the page (Primary: Book a Free Design Consultation; Secondary: WhatsApp & Showroom).
- [x] Map out content and heading hierarchy (`<h1>` Hero, `<h2>` sections, `<h3>` space cards).
- [x] Establish image specifications and performance rules for every section.
- [x] Define desktop (1280px max-width, editorial whitespace) and mobile (fluid single-column, minimum 48px touch targets) behaviors.
- [x] Identify subtle, dignified interaction opportunities (header scroll blur, card hover lift, tab filters).
- [x] Establish accessibility standards (WCAG AA contrast, keyboard navigation, reduced-motion queries, semantic HTML).
- [x] Create centralized content source of truth: `src/content/brand.ts`.

## Deliverables

Created:
- [x] `src/content/brand.ts` (Single source of truth for all business details, milestones, collections, and copy)
- [x] `docs/information-architecture.md` (Complete Information Architecture & UX Blueprint)

## Phase 2 Status: COMPLETE

---

## Final Architecture Overview:

Headline:
`Furniture, Crafted Around You.`

Supporting copy:
Explain the business in one concise paragraph.

Primary CTA:
`Book a Free Design Consultation`

Secondary:
`Explore Our Craft`

Trust indicators:
`Custom Designed · Expertly Crafted · Installed With Care`

---

## Brand Introduction

Heading direction:

`More than furniture. It's your space, made personal.`

Explain:

- What Heaven does
- Who they serve
- What makes them different

---

## Collections

Present spaces rather than an e-commerce catalog.

Possible categories:

- Living
- Bedroom
- Dining
- Office

Each should communicate the type of furniture available without overwhelming the visitor.

---

## Bespoke Section

This is a major differentiator.

Potential headline:

`Your space isn't standard. Why should your furniture be?`

Explain the custom process.

CTA:

`Start Your Custom Piece`

---

## Craftsmanship

Show the process:

01 Understand  
02 Design  
03 Craft

Use real photography wherever possible.

---

## Why Heaven

Possible benefits:

- Free Design Consultation
- Fully Bespoke
- Premium Materials
- Skilled Craftsmanship
- Showroom Experience
- Delivery & Installation

Only include claims supported by the company brief or verified sources.

---

## Brand Statement

Use verified leadership/company messaging from the brief.

Make it feel like a brand statement, not a generic testimonial card.

---

## Timeline

Use verified milestones from the company brief.

Present them elegantly and minimally.

---

## Showroom

Clearly communicate:

- Showroom location
- Address
- Phone
- Directions
- Visit CTA

The visitor should understand that Heaven has a physical showroom.

---

## Final CTA

Suggested direction:

`Let's make your space yours.`

CTA:

`Book a Free Design Consultation`

Include:

- Phone
- WhatsApp
- Location

---

# PHASE 3: VISUAL DESIGN SYSTEM & DIRECTION

## Tasks & Decisions

- [x] Conceptualize and evaluate 3 distinct directions (Neo-Dark Cyber, Scandinavian Flat, and The Architectural Atelier).
- [x] Select "The Architectural Atelier: Warm Editorial Sanctuary" as the authentic, high-converting direction for Heaven Furniture Mart.
- [x] Define exact Color System (Deep Forest Slate `#142420`, Warm Ecru `#FAF8F5`, Antique Brass `#C5A869`, Espresso `#161817`).
- [x] Define Typography system (Display: Playfair Display / Cormorant Garamond serif; Body & UI: Plus Jakarta Sans).
- [x] Establish Spacing & Grid scale (`max-w-7xl` container, asymmetric 7/5 editorial grid, 120px section breathing room).
- [x] Define Container & Border treatment (crisp architectural 0–4px radii, 1px drafting hairlines, zero heavy drop shadows).
- [x] Define Button design (Primary solid slate with fine brass border; Secondary ghost with directional arrow).
- [x] Establish Image treatment rules (uncropped furniture integrity, warm backplates, zero artificial muddy overlays).
- [x] Standardize Section transitions (Dark slate hero → Daylight ecru atelier → Alabaster gallery → Slate sanctuary finale).
- [x] Define Animation philosophy (subtle 500ms opacity & micro-hover lift; strict reduced-motion adherence; zero gimmickry).
- [x] Configure CSS tokens and typography variables in `src/app/globals.css`.

## Deliverables

Created:
- [x] `docs/visual-design-system.md` (Comprehensive Design Token and Visual Specification Document)
- [x] `src/app/globals.css` (Configured with all architectural color tokens, typography variables, and Tailwind theme)

## Phase 3 Status: COMPLETE

---

# PHASE 4: HERO DESIGN & INITIAL IMPLEMENTATION

## Batch 1: Foundation (Layout + Navigation + Hero + Brand Intro)

- [x] Configure `layout.tsx` with Playfair Display (serif) + Plus Jakarta Sans (sans-serif) via `next/font/google`
- [x] Configure SEO metadata (title, description, keywords, openGraph) for Heaven Furniture Mart
- [x] Build `Navbar.tsx` (only client component): sticky header, scroll-aware backdrop, desktop nav, phone badge, mobile drawer
- [x] Build `Hero.tsx` (pure server component): editorial headline, dual CTAs, trust chips, LCP-optimized preload image
- [x] Build `BrandIntro.tsx` (pure server component): 3 differentiator pillars with eyebrow, editorial headings
- [x] Wire `page.tsx` with Navbar → Hero → BrandIntro
- [x] Production build: ✅ 0 errors, 0 warnings (Next.js 16.3.4 Turbopack, compiled in 569ms)
- [x] ESLint: ✅ 0 issues
- [x] TypeScript: ✅ Clean
- [x] Client component audit: Only `Navbar.tsx` uses `"use client"` (for scroll listener + mobile menu state). All other components are pure React Server Components.

### Architecture Notes:
- Hero image uses `preload` prop (Next.js 16 replaces `priority`) for optimal LCP
- `src/content/brand.ts` drives all copy — zero hardcoded strings in components
- `globals.css` contains all design tokens registered with Tailwind v4 `@theme inline`
- Font variables: `--font-playfair` (serif) + `--font-jakarta` (sans)

## Batch 2: Core Sections Implementation (COMPLETE)

- [x] `CuratedSpaces.tsx`: Interactive category filtering ("All Spaces", "Living", "Dining", "Bedrooms", "Bespoke & Storage"), feature chips, blueprint review prompt.
- [x] `BespokeProcess.tsx`: 4 sequential transparent steps (Consult & Measure → Materials & Detailing → Atelier Crafting → Turnkey Delivery) with artisan brass-stud hammering photography.
- [x] `ProvenanceTrust.tsx`: Founder statement from Managing Director Abul Kalam Bhuiyan, historical milestones (2003–2024), authentic BFMA 2024 recognition crest photo, and leadership/craftsmanship team pavilion photo.
- [x] `Showroom.tsx`: Flagship 2-story showroom building photo on Agrabad Access Road (opposite RAK Ceramics), operating hours, direct call hotlines, and Google Maps directions link.
- [x] `ConsultationCTA.tsx`: Frictionless 3-field consultation request form (Name, Phone/WhatsApp, Space selection) + direct prefilled WhatsApp trigger.
- [x] `Footer.tsx`: Official white/gold logo, navigation links, space categories, verified NAP, official social links (FB 12k+, YouTube, IG), and local pride statement.
- [x] `FloatingActionBar.tsx`: Persistent mobile utility bar with 1-tap WhatsApp and 1-tap Consultation actions.
- [x] `page.tsx`: Seamlessly wires all 9 core architectural sections into one continuous narrative flow.

## Verification Checklist:
- [x] TypeScript Checks: ✅ 0 errors
- [x] ESLint Audit: ✅ 0 warnings, 0 errors
- [x] Production Build (`npm run build`): ✅ Turbopack compiled in 491ms, static generation in 578ms
- [x] Server-Side Rendering: ✅ HTTP 200 on all section matches
- [x] Hydration Mismatches: ✅ 0 runtime errors
- [x] Responsive Layout: ✅ Single-column fluid mobile up to 1280px desktop, zero horizontal overflow
- [x] Client Component Isolation: Over 75% pure RSC; `"use client"` restricted only to interactive state (Navbar, CuratedSpaces filter, Consultation form, FloatingActionBar)

## Phase 5 Status: CORE SECTIONS IMPLEMENTED & VERIFIED

---

---

# PHASE 6: COMPONENT IMPLEMENTATION

Implement components in this order:

1. Global layout
2. Navigation
3. Hero
4. Brand Introduction
5. Collections
6. Bespoke
7. Craftsmanship
8. Why Heaven
9. Brand Statement
10. Timeline
11. Showroom
12. Final CTA
13. Footer

Do not polish animations before the entire information architecture works.

First make it:

- Correct
- Responsive
- Clear
- Functional

Then make it beautiful.

---

# PHASE 7: RESPONSIVE DESIGN & MULTI-VIEWPORT AUDIT

## Viewports Tested & Verified:
- [x] **320px (Small Mobile / iPhone SE 1st Gen):** Container padding tightened to `px-4` (16px margins), hero headline scaled to `text-3xl` (30px) to prevent awkward wrapping, category pills enable smooth horizontal touch swipe, milestone years flex cleanly without column crushing, all input font sizes set to `text-base` (16px) to eliminate iOS Safari auto-zoom, and 48px touch targets enforced.
- [x] **375px (iPhone 8 / SE 2nd Gen):** Flawless fluid layout with generous vertical rhythm and clean typography.
- [x] **390px (iPhone 12 / 13 / 14):** Natural card margins, crisp serif headers, and clear CTA button sizing.
- [x] **414px (iPhone Plus / Max):** Balanced fluid typography transitioning smoothly toward tablet breakpoints.
- [x] **768px (iPad Mini / Portrait Tablets):** 2-column grid activated for CuratedSpaces and Differentiators, hero CTA switches to inline row, mobile floating action bar automatically hides (`md:hidden`).
- [x] **1024px (iPad Pro / Small Laptop):** Desktop navigation bar appears (`lg:flex`), mobile hamburger disappears, 12-column asymmetric desktop layouts activate (5-col text + 7-col media), CuratedSpaces expands to 3-column grid.
- [x] **1280px (Standard Desktop):** Global maximum width (`max-w-7xl`) centered with generous outer margins.
- [x] **1440px+ (Wide Desktop):** Architecture remains centered with disciplined whitespace and zero image distortion.

## Critical Issues Identified & Fixed:
1. **iOS Safari Input Auto-Zoom:** Previously inputs used `text-sm` (14px), which triggers an automatic, jarring viewport zoom on iOS Safari. Fixed by setting `text-base sm:text-sm` (16px on mobile viewports).
2. **Mobile Nav Drawer Overflow:** On short mobile viewports (e.g. 568px height), the mobile menu could clip bottom content. Fixed by adding `overflow-y-auto max-h-[calc(100vh-60px)]` and bottom padding.
3. **Category Pill Clutter on 320px:** 5 wrapped category filter buttons took up excessive vertical space. Fixed by converting to a smooth horizontal touch-scrollable strip (`overflow-x-auto pb-2 scrollbar-none sm:flex-wrap sm:pb-0`).
4. **Milestone Year Squeezing:** 12-column grid on 320px screens squeezed the "2003" year badge into ~50px. Fixed by replacing with responsive flex layout (`flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-6`).
5. **Horizontal Overflow Prevention:** Ensured `html, body { width: 100%; max-width: 100%; overflow-x: hidden; }` and zero hardcoded pixel widths exceeding viewport bounds across all components.
6. **Mobile Safe Area & Touch Targets:** Added iOS `.safe-bottom` support and elevated all interactive button heights to minimum 48px (`h-12`).

## Phase 7 Status: COMPLETE & VERIFIED

---

# PHASE 8: ANIMATION & INTERACTION (COMPLETE & VERIFIED)

## Implemented Micro-Interactions:
- [x] **Hero Editorial Staggered Entrance:** Gentle hardware-accelerated CSS keyframe fade-up (`animate-fade-up`) with progressive delays (`100ms`, `200ms`, `300ms`, `400ms`) across eyebrow, headline, copy, and CTAs.
- [x] **Calm Scroll-Triggered Section Reveal:** Lightweight zero-dependency `ScrollRevealProvider.tsx` using a single native `IntersectionObserver` instance (threshold 0.08, rootMargin 0px 0px -30px 0px) to gracefully reveal sections with 600ms cubic-bezier transition as the user scrolls, unobserving each immediately after entrance to free browser resources.
- [x] **Tactile Button Press Interaction:** Added `active:scale-[0.98]` on all primary CTAs, secondary links, and floating action bar triggers for immediate haptic visual feedback.
- [x] **Subtle Portfolio Image Reveal:** Smooth 700ms micro-scale transition (`group-hover:scale-[1.015]`) on collection and showroom photography, providing calm depth without aggressive motion.
- [x] **Keyboard Focus Rings:** Clear high-contrast `:focus-visible` rings with antique brass outlines (`ring-2 ring-accent-brass ring-offset-2 ring-offset-brand-slate-deep`) ensuring full keyboard accessibility.

## Strict `prefers-reduced-motion` Compliance:
- [x] Fully respected in CSS via `@media (prefers-reduced-motion: reduce)`:
  - Animation durations and transitions instantly reduced to `0.001ms`.
  - Smooth scrolling disabled (`scroll-behavior: auto !important`).
  - `.reveal-on-scroll` elements immediately rendered at `opacity: 1` and `transform: none`.
- [x] `ScrollRevealProvider` checks `window.matchMedia("(prefers-reduced-motion: reduce)").matches` on mount; if true, the observer is completely bypassed and all elements are immediately marked `.is-revealed`.

## Performance & Architecture Verification:
- [x] **Zero Third-Party Animation Libraries:** No Framer Motion or GSAP bundle overhead added; 100% powered by pure CSS3 GPU transitions and native browser APIs.
- [x] **Production Build:** ✅ Turbopack compiled in 484ms, static generation in 580ms.
- [x] **ESLint & TypeScript:** ✅ 0 errors, 0 warnings.

## Phase 8 Status: COMPLETE & VERIFIED

---

# PHASE 9: IMAGE OPTIMIZATION

Every image must be treated as a performance asset.

Requirements:

- Use modern formats where appropriate
- Compress large images
- Use responsive image sizes
- Use Next.js Image where appropriate
- Lazy-load below-the-fold imagery
- Give every meaningful image useful alt text
- Avoid serving unnecessarily huge images

Hero images must receive special optimization attention.

---

# PHASE 10: ACCESSIBILITY

Target:

**WCAG-conscious production quality**

Check:

- Semantic HTML
- Heading hierarchy
- Keyboard navigation
- Focus states
- Color contrast
- Accessible buttons
- Accessible links
- Image alt text
- Reduced-motion preference
- Form accessibility if forms are added

Do not sacrifice accessibility for visual effects.

---

# PHASE 11: SEO

Implement:

- Proper title
- Meta description
- Open Graph metadata
- Favicon
- Semantic headings
- Descriptive image alt text
- Canonical URL when deployment URL is known
- Local business information where appropriate
- Structured data where useful and factually supported

Potential title direction:

`Heaven Furniture Mart | Bespoke Furniture in Chattogram`

Do not finalize SEO copy until business information is verified.

---

# PHASE 12: CTA & CONTACT EXPERIENCE

The customer should never wonder:

> "How do I contact them?"

Provide persistent access to:

- Phone
- WhatsApp
- Consultation CTA

The primary CTA should be visually obvious without becoming annoying.

If a consultation form is implemented, keep it short.

Potential fields:

- Name
- Phone/WhatsApp
- What are you looking for?
- Optional message

Do not create a long lead-generation form.

---

# PHASE 13: SOCIAL MEDIA INTEGRATION

Use the official social channels naturally.

Links:

YouTube:
https://www.youtube.com/@HeavenFurnitureMart

Facebook:
https://www.facebook.com/HeavenFurnitureMart

Instagram:
https://www.instagram.com/heaven_furniture_ltd

Do not embed heavy social widgets if they hurt performance.

Instead, use carefully selected official imagery and clear links.

---

# PHASE 14: TRUST & AUTHENTICITY CHECK

Before final polish, ask:

### Does this look like Heaven Furniture Mart?

Or does it look like:

> "AI generated luxury furniture website #472"?

If it feels generic, improve:

- Photography
- Copy
- Brand details
- Local context
- Real company history
- Real showroom
- Real products
- Real craftsmanship

Authenticity is more important than visual complexity.

---

# PHASE 15: PERFORMANCE

Target Lighthouse:

Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+

Optimize:

- Images
- Fonts
- JavaScript
- CSS
- Third-party scripts
- Video
- Animation

Avoid unnecessary dependencies.

---

# PHASE 16: REAL CUSTOMER TEST

This phase is mandatory.

Pretend you have never heard of Heaven Furniture Mart.

Open the page and answer:

### After 5 seconds:

What is this company?

### After 10 seconds:

What do they sell?

### After 15 seconds:

Can they make custom furniture?

### After 20 seconds:

Why should I trust them?

### After 30 seconds:

What should I do next?

If any answer is unclear:

**STOP POLISHING AND FIX THE INFORMATION ARCHITECTURE.**

---

# PHASE 17: COMPETITIVE QUALITY REVIEW

Review the website against:

- Premium furniture brands
- Interior design studios
- Luxury home brands
- High-end architecture studios

Evaluate:

- Typography
- Photography
- Whitespace
- Navigation
- CTA
- Brand storytelling
- Mobile UX
- Loading speed

Do not blindly copy competitors.

Use them only as quality references.

---

# PHASE 18: FINAL POLISH

Only after functionality and content are correct:

Polish:

- Typography
- Letter spacing
- Section spacing
- Image cropping
- Border details
- Hover states
- Button interactions
- Scroll transitions
- Micro animations
- Mobile spacing
- Footer
- Navigation

Every detail should support the premium positioning.

---

# PHASE 19: FINAL QA

Test:

## Functional

- All links work
- All CTAs work
- Phone link works
- WhatsApp link works
- Social links work
- Navigation works
- Mobile menu works
- No broken images
- No console errors

## Responsive

Test all major viewport sizes.

## Browser

Test:

- Chrome
- Firefox
- Safari if available
- Mobile browser

## Accessibility

Run Lighthouse and keyboard navigation.

## Performance

Run Lighthouse.

## SEO

Verify:

- Title
- Description
- OG metadata
- Favicon
- Semantic structure

---

# PHASE 20: CONTENT & BUSINESS INFORMATION AUDIT

Before declaring the project complete, compare every business claim against the company brief and researched sources.

Check:

- Company name
- Address
- Phone
- Email
- Social links
- Services
- Categories
- Milestones
- Leadership names
- Awards/recognition
- Years
- Statistics
- Testimonials
- Product claims

Remove anything that cannot be verified.

NO FABRICATION.

---

# PHASE 21: REPOSITORY CLEANUP

Before final submission:

Remove:

- Unused components
- Unused packages
- Unused images
- Duplicate images
- Temporary files
- Debug logs
- Console logs
- Placeholder text
- Lorem ipsum
- Unused CSS
- Unused imports
- Development-only content

Ensure the repository looks like a professional production project.

---

# PHASE 22: DOCUMENTATION

Update:

`README.md`

Include:

- Project overview
- Tech stack
- Installation
- Development commands
- Build command
- Project structure
- Asset/source notes
- Deployment instructions
- Important content-editing locations

Also update:

`PLAN.md`

with a final implementation status.

Example:

- [x] Phase 0
- [x] Phase 1
- [x] Phase 2
- [x] Phase 3
- ...

---

# 23. PLAN.md MAINTENANCE RULE

This PLAN.md is a living project document.

After completing every phase:

1. Mark completed tasks.
2. Record important decisions.
3. Record deviations from the original plan.
4. Record unresolved issues.
5. Record new verified information.
6. Record any content that still needs confirmation.

Do not silently change the project direction.

If a significant design or architecture decision changes, document it.

---

# 24. CONTENT MAINTENANCE RULE

Business information must have a single source of truth.

If the phone number, address, social links, CTA, brand description, or other business information changes:

**Update the central content source first.**

Do not manually change the same information in multiple components.

---

# 25. ASSET MAINTENANCE RULE

Every downloaded asset should have:

- Descriptive filename
- Correct location
- Appropriate compression
- Appropriate format
- Alt text where applicable

Do not leave random downloaded social-media files throughout the repository.

---

# 26. DEVELOPMENT PRINCIPLES

Always prioritize in this order:

1. Customer clarity
2. Brand authenticity
3. Visual hierarchy
4. Conversion
5. Mobile UX
6. Performance
7. Accessibility
8. SEO
9. Animation
10. Technical sophistication

A simple solution that improves customer experience is better than a technically impressive solution that does not.

---

# 27. ANTI-PATTERNS

Do NOT:

- Copy the reference website section-for-section
- Create unnecessary dashboards
- Create fake reviews
- Create fake statistics
- Create fake awards
- Create fake product prices
- Add unnecessary ecommerce functionality
- Add login/signup
- Add a shopping cart unless explicitly required
- Add excessive animations
- Use generic stock photography when official assets are available
- Use AI-generated people pretending to be company staff
- Invent company history
- Invent customer testimonials
- Overuse gradients
- Overuse glassmorphism
- Overuse gold
- Add unnecessary 3D effects
- Optimize for screenshots instead of real users

---

# 28. QUALITY BAR

The final website should pass this mental test:

### First impression

"That looks premium."

### 5 seconds

"I understand they sell furniture."

### 10 seconds

"They create custom furniture."

### 15 seconds

"They care about my space and requirements."

### 20 seconds

"They appear established and trustworthy."

### 30 seconds

"I know exactly how to contact them or book a consultation."

If this does not happen, the project is not finished.

---

# 29. DEFINITION OF DONE

The project is DONE only when:

- [ ] Brand positioning is clear
- [ ] Real company information is used
- [ ] Official/public assets have been researched
- [ ] Strong authentic photography is used
- [ ] Hero communicates the business immediately
- [ ] Bespoke offering is obvious
- [ ] Product categories are understandable
- [ ] Trust is established
- [ ] Showroom/location is clear
- [ ] Primary CTA is obvious
- [ ] Mobile experience is excellent
- [ ] No horizontal overflow
- [ ] Images are optimized
- [ ] Accessibility is acceptable
- [ ] SEO metadata is implemented
- [ ] Lighthouse has been reviewed
- [ ] No console errors remain
- [ ] No placeholder content remains
- [ ] No fabricated business claims remain
- [ ] README is updated
- [ ] PLAN.md is updated
- [ ] Repository is clean
- [ ] Production build succeeds

---

# 30. FINAL INSTRUCTION TO THE IMPLEMENTER

Do not rush into coding.

First understand Heaven Furniture Mart.

Then understand the customer.

Then create the information architecture.

Then establish the visual system.

Then build.

Then test.

Then polish.

The final product should not communicate:

> "Look what I can build."

It should communicate:

> **"This is a premium furniture brand I can trust with my home."**

And above everything else:

# THE ONE RULE

> **You're not designing for judges. Design for a real customer who's never heard of Heaven Furniture Mart — they should understand exactly what this brand is within 30 seconds.**
