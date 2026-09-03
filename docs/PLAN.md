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

## Hero requirements

Within approximately 5 seconds, the visitor should understand:

- This is a furniture brand
- It is premium
- It offers custom/bespoke solutions
- It serves real spaces/interiors
- There is a clear next action

## Copywriting rules

Use:

- Short sentences
- Specific language
- Human language
- Confident language
- Real business information

Avoid:

- Generic AI marketing language
- "Elevate your lifestyle"
- "Transform your world"
- Empty luxury buzzwords
- Excessive adjectives
- Fake statistics
- Fake testimonials

---

# PHASE 2: INFORMATION ARCHITECTURE

Create a clear hierarchy.

Recommended structure:

## Hero

Eyebrow:
`BESPOKE FURNITURE · CHATTOGRAM`

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

# PHASE 3: VISUAL DESIGN SYSTEM

Create the design system before building every section independently.

Define:

- Colors
- Typography
- Spacing scale
- Border radius
- Shadows
- Buttons
- Cards
- Section labels
- Icons
- Image ratios
- Container widths
- Responsive breakpoints

The design system should feel consistent throughout the entire page.

---

# PHASE 4: HERO DESIGN

The hero is the highest-priority section.

Use the strongest authentic Heaven Furniture image available.

Priority:

1. Real Heaven furniture photography
2. Real Heaven showroom/interior photography
3. Official brand media
4. High-quality fallback imagery only if absolutely necessary

Hero requirements:

- Immediate brand understanding
- Strong typography
- Premium composition
- Clear CTA
- Excellent contrast
- Mobile-first layout
- Fast loading

Avoid:

- Excessive sliders
- Carousels
- Multiple competing CTAs
- Huge unnecessary animations
- Stock-photo feeling

---

# PHASE 5: CORE DEVELOPMENT

## Recommended stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion where genuinely useful
- Lucide icons where appropriate

Use modern, maintainable React architecture.

Recommended structure:

app/
page.tsx
layout.tsx
globals.css

components/
Navbar/
Hero/
BrandIntro/
Collections/
Bespoke/
Craftsmanship/
WhyHeaven/
BrandStatement/
Timeline/
Showroom/
FinalCTA/
Footer/

content/
brand.ts
sections.ts

lib/
utils.ts

public/
assets/

docs/
brand-research.md
design-notes.md

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

# PHASE 7: RESPONSIVE DESIGN

Mobile is NOT an afterthought.

Design and test:

- 320px
- 375px
- 390px
- 414px
- 768px
- 1024px
- 1280px
- 1440px+

Pay special attention to:

- Hero typography
- Navigation
- Image cropping
- CTA size
- Section spacing
- Horizontal overflow
- Cards
- Timeline
- Footer
- Touch targets

No accidental horizontal scrolling.

---

# PHASE 8: ANIMATION & INTERACTION

Animations should communicate quality, not technical ability.

Preferred:

- Gentle fade-up
- Image reveal
- Subtle image scale
- Smooth hover states
- Scroll-triggered section reveals
- Subtle button interaction

Avoid:

- Excessive parallax
- Constant movement
- Large spinning objects
- Aggressive cursor effects
- Scroll hijacking
- Long loading animations
- Animation on every element

Luxury should feel calm.

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
