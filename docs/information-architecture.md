# Heaven Furniture Mart | Information Architecture & UX Blueprint
**Document:** `docs/information-architecture.md`  
**Phase:** Phase 2 — Information Architecture  
**Status:** Completed & Approved Architecture  

---

## 1. The Core UX Philosophy: One Continuous Architectural Story

The website is designed not as a set of fragmented, disconnected landing-page blocks, but as a **single, fluid editorial tour** through Heaven Furniture Mart's atelier. 

Every single section answers a specific question in the customer's mind within their 30-second decision window:
1. **0–5s (Hero):** *"Who are you and what do you do?"* → Bespoke Furniture & Interior Styling in Chattogram.
2. **5–12s (Atelier Difference):** *"Why shouldn't I just buy ready-made furniture?"* → Standard furniture never fits your blueprint; we design backwards from your floor plan.
3. **12–18s (Curated Spaces):** *"What does your work look like in real rooms?"* → Living, Dining, Bedroom, and Custom Cabinetry portfolio.
4. **18–22s (The Process):** *"Is ordering custom furniture complicated?"* → 4 transparent, white-glove steps from measurement to installation.
5. **22–26s (Provenance & Trust):** *"Can I trust you with my money and home?"* → 2003 heritage, MD statement, BFMA 2024 recognition, CCCI membership.
6. **26–30s (Showroom & Conversion):** *"Where are you located and how do I start?"* → 2-story Agrabad showroom + Free Design Consultation / WhatsApp.

---

## 2. Navigation Architecture

### Desktop Header (Sticky, Glassmorphic / Grounded):
* **Left Brand Identity:** Official white/gold Heaven Furniture Mart brandmark (`heaven-logo-white.png`) with link to `#top`.
* **Center Editorial Nav Links:**
  * `Why Bespoke` (`#why-bespoke`)
  * `Curated Spaces` (`#spaces`)
  * `The Process` (`#process`)
  * `Provenance` (`#provenance`)
  * `Showroom` (`#showroom`)
* **Right Quick-Action Cluster:**
  * Telephone hotline badge (`+880 1900-481898`) with phone icon.
  * Primary Action Button: `Book Consultation` (triggers smooth scroll to consultation form or opens accessible modal).

### Mobile Navigation (Top Bar + Fullscreen / Bottom Drawer):
* **Compact Header:** Brandmark left, Call Icon center-right, Accessible Hamburger button right.
* **Drawer State:** Clean slide-over displaying the 5 anchor links, direct WhatsApp link with green accent, telephone button, and showroom hours.
* **Touch Targets:** All interactive links and buttons are minimum **48px × 48px** for effortless single-thumb tapping.

---

## 3. Hero Section Hierarchy

```
[Header Navigation]
--------------------------------------------------------------------------------
[KICKER BADGE]  BESPOKE FURNITURE · AGRABAD, CHATTOGRAM · EST. 2003
--------------------------------------------------------------------------------
[H1 HEADLINE]   Furniture, Crafted Around You.
--------------------------------------------------------------------------------
[LEDE COPY]     We don't pull furniture off a shelf. From solid Chittagong 
                Teak living suites to tailored bedroom sanctuaries, every piece 
                is custom-designed and built to fit your room's exact dimensions, 
                lifestyle, and taste.
--------------------------------------------------------------------------------
[ACTION ROW]    [ Book a Free Design Consultation ]   [ Chat on WhatsApp → ]
--------------------------------------------------------------------------------
[TRUST PILLS]   ✔ Sized to Blueprint  |  ✔ Chittagong Teak  |  ✔ Turnkey Setup
--------------------------------------------------------------------------------
[PRIMARY VISUAL] Full-width / editorial card showing authentic solid teak 
                living room suite (public/assets/hero/heaven-classic-living-hero.jpg)
```

---

## 4. Section Order & Narrative Architecture

```
1. Persistent Header (Brandmark + Nav + Direct Call + CTA)
   ↓
2. Hero Section (Immediate 5-Second Brand & Category Understanding)
   ↓
3. The Atelier Difference: "Why Bespoke?" (Pain Point vs. Value Proposition)
   ↓
4. Curated Spaces: The Living Portfolio (Living, Dining, Bedroom, Storage)
   ↓
5. The 4-Step Bespoke Journey (Demystifying Custom Ordering)
   ↓
6. Provenance & Trust (Founder Quote, Milestones, BFMA 2024 Award & Team)
   ↓
7. The Flagship Showroom (Physical Building Photo, Agrabad Landmark, Hours)
   ↓
8. Free Design Consultation & Lead Capture (Form + 1-Click WhatsApp)
   ↓
9. Footer (NAP, Social Channels, Local Heritage Notice)
```

---

## 5. CTA Placement & Conversion Paths

1. **Persistent Header:** Always visible on scroll with high-contrast `Book Consultation` button.
2. **Hero Action Row:** High-prominence dual buttons (`Book a Free Design Consultation` + `Chat on WhatsApp`).
3. **Curated Spaces Section Footer:** In-context secondary prompt: *"Have a unique floor plan? Let our designers review your room dimensions."*
4. **The Bespoke Process Footer:** Direct action: *"Start Step 01: Schedule Your Consultation."*
5. **Flagship Showroom Card:** In-person action: `Get Directions on Google Maps` + `Call Showroom Desk`.
6. **Dedicated Final Consultation Sanctuary:** Clean 3-field form (Name, WhatsApp/Phone, Space Type) + 1-click pre-filled WhatsApp link.

---

## 6. Content Hierarchy per Section

| Section | Heading Level | Eyebrow / Kicker | Primary Content Focus |
| :--- | :--- | :--- | :--- |
| **Hero** | `<h1>` | `BESPOKE FURNITURE · AGRABAD, CHATTOGRAM` | Core brand proposition & 30-second clarity |
| **Atelier Difference** | `<h2>` | `THE ATELIER DIFFERENCE` | *Your space isn't standard. Why should your furniture be?* |
| **Curated Spaces** | `<h2>` | `CURATED SPACES` | *Designed for Living. Crafted for Life.* (Categorized cards) |
| **Process** | `<h2>` | `HOW WE WORK` | *From Floor Plan to Finished Home in 4 Steps* |
| **Provenance** | `<h2>` | `PROVENANCE & INTEGRITY` | *Two Decades of Craftsmanship You Can Trust.* (Milestones) |
| **Showroom** | `<h2>` | `VISIT OUR SHOWROOM` | *Experience the Wood, Fabric & Scale in Person.* |
| **Consultation** | `<h2>` | `START YOUR PROJECT` | *Let's make your space truly yours.* |
| **Footer** | `<h3>` | Landmarks | Address, Hours, Legal, and Copyright |

---

## 7. Image Requirements & Strategic Placement

| Section | Required Asset | Exact File Path | Native Dimensions | Purpose & Performance Rule |
| :--- | :--- | :--- | :--- | :--- |
| **Brand** | Official Logo | `/assets/brand/heaven-logo-white.png` | 500×500 PNG | Nav & Footer. Crisp on retina displays. |
| **Hero** | Classic Teak Living | `/assets/hero/heaven-classic-living-hero.jpg` | 1440×1080 JPG | `priority={true}` in `next/image`. LCP anchor. |
| **Living** | Editorial Living Room | `/assets/hero/heaven-luxury-living-editorial.png` | 1184×864 PNG | Curated Space card 1. Lazy loaded. |
| **Dining** | Marble Dining Table | `/assets/collections/heaven-dining-marble-luxury.png` | 2000×2600 PNG | Curated Space card 2. Ultra-HD detail. |
| **Bedroom** | Royal Carved Teak Bed | `/assets/collections/heaven-bedroom-royal-carved.png` | 2000×2500 PNG | Curated Space card 3. Deep cyan velvet contrast. |
| **Modern Bed** | Emerald Quilted Bed | `/assets/collections/heaven-bedroom-emerald-modern.jpg` | 1080×1350 JPG | Curated Space card 4. Architectural symmetry. |
| **Bespoke** | Gold Embroidery Sofa | `/assets/bespoke/heaven-bespoke-gold-embroidery-sofa.jpg` | 1024×1024 JPG | Bespoke craftsmanship card. Hand embroidery. |
| **Bespoke** | Minimalist Credenza | `/assets/bespoke/heaven-bespoke-modular-cabinet.jpg` | 1024×1024 JPG | Bespoke storage card. Matte black modern. |
| **Craft** | Artisan Stud Hammering| `/assets/craftsmanship/heaven-handcrafted-sofa-process.jpg` | 1080×1920 JPG | Process section. Authentic human hand. |
| **Showroom** | 2-Story Building | `/assets/showroom/heaven-agrabad-flagship-building.jpg` | 1388×1041 JPG | Showroom section. Physical building proof. |
| **Trust** | MD Receiving Award | `/assets/trust/heaven-md-receiving-bfma-award.jpg` | 800×600 JPG | Provenance section. BFMA 2024 award proof. |
| **Trust** | Leadership & Team | `/assets/trust/heaven-team-expo-booth.jpg` | 800×511 JPG | Provenance section. Social proof & hospitality. |

---

## 8. Desktop vs. Mobile Behavior

### Desktop (1024px – 1440px+):
* **Layout:** Generous margins, maximum content width `1280px` (`max-w-7xl`), editorial whitespace, multi-column asymmetric layouts.
* **Collections:** 2-column or 3-column masonry grid with hover zoom on images.
* **Process:** 4-step horizontal progression with connecting hairline track.
* **Showroom:** Split 50/50 layout: Left photo of Agrabad building, right location card with live hours badge and interactive directions.

### Mobile (320px – 768px):
* **Layout:** Single-column fluid stacked layout with strictly **zero horizontal overflow** (`overflow-x: hidden`).
* **Hero:** Text first with high-contrast typography, followed immediately by the living room hero image.
* **Collections:** Single-column cards with swipeable or stacked category tabs.
* **Process:** Vertical numbered timeline cards with bold step indicators (`01`, `02`, `03`, `04`).
* **Bottom Floating Quick Actions:** Fixed, discreet bottom utility bar on mobile:
  * Left: Direct WhatsApp Quick-Chat button.
  * Right: One-tap `Book Consultation` modal trigger.

---

## 9. Interaction Opportunities (Subtle, High-End & Dignified)

* **Pre-requisite:** No flashy Dribbble gimmicks, no cursor balls, no scroll-hijacking.
* **Header Blur:** Smooth transition from transparent to subtle blurred dark backdrop upon scrolling 50px.
* **Image Hover Lift:** Gentle `scale-[1.02]` with smooth CSS ease-out on collection cards.
* **Active Category Filter:** Instant tab switching for Curated Spaces (Living / Dining / Bedroom / Bespoke) without page reload.
* **Consultation Modal / Drawers:** Smooth opacity fade-in with backdrop blur.
* **Accordion / Expandable Process Details:** Optional expansion for material specifications.

---

## 10. Accessibility & Standards (WCAG AA Compliance)

1. **Semantic Landmark Elements:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
2. **Heading Hierarchy:** Strictly one `<h1>` per page (Hero), followed by `<h2>` for major sections and `<h3>` for individual cards.
3. **Color Contrast:** All text passes WCAG AA contrast ratio of at least **4.5:1** (e.g. warm ecru text `#FBF9F5` on dark slate `#1E332F`, and dark bronze `#1A1C1B` on light parchment `#F4EFEA`).
4. **Keyboard Navigability:** Full keyboard tab support with visible `:focus-visible` outline rings on all buttons, links, and form fields.
5. **Reduced Motion:** Automatic adherence to `@media (prefers-reduced-motion: reduce)` by disabling transforms and transitions.
6. **Descriptive Image Alt Text:** Every photograph has descriptive, non-empty alt text describing the furniture type, material, and craftsmanship.
