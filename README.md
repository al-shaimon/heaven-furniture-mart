# Heaven Furniture Mart

> **Furniture, Crafted Around You.**  
> Chattogram's premier bespoke furniture atelier and interior styling studio. Handcrafting custom residential living suites, dining collections, and tailored bedroom sanctuaries from authentic seasoned timber on Agrabad Access Road since 2003.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![PageSpeed](https://img.shields.io/badge/PageSpeed_Mobile-90+-success?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

🌐 **Live Production Website:** [https://hfm.alshaimon.com](https://hfm.alshaimon.com)  
🚀 **Alternative Mirror (Netlify):** [https://heaven-furniture-mart-ctg.netlify.app](https://heaven-furniture-mart-ctg.netlify.app/)  
📁 **GitHub Repository:** [https://github.com/al-shaimon/heaven-furniture-mart](https://github.com/al-shaimon/heaven-furniture-mart)

---

## ✦ Table of Contents
1. [Project Overview](#-project-overview)
2. [Key Features & User Experience](#-key-features--user-experience)
3. [Engineering & Performance Highlights](#-engineering--performance-highlights)
4. [Tech Stack & Architecture](#-tech-stack--architecture)
5. [Directory Structure](#-directory-structure)
6. [Core Components Overview](#-core-components-overview)
7. [Content & Brand Source of Truth](#-content--brand-source-of-truth)
8. [Installation & Local Setup](#-installation--local-setup)
9. [CLI Commands](#-cli-commands)
10. [Performance & Lighthouse Benchmarks](#-performance--lighthouse-benchmarks)
11. [Maintenance Guides](#-maintenance-guides)
12. [Deployment](#-deployment)

---

## ✦ Project Overview

This repository houses the official digital showroom and bespoke consultation platform for **Heaven Furniture Mart** (হেভেন ফার্নিচার মার্ট), located on Agrabad Access Road in Chattogram, Bangladesh.

Unlike generic e-commerce templates or synthetic landing pages, this platform acts as an editorial, high-performance digital atelier. It solves the critical disconnect in the bespoke furniture market:
- **The Challenge:** Bespoke carpenters and custom furniture ateliers often lose digital shoppers because static social media pages lack transparent workflows, sizing guidance, or immediate quote mechanisms, while heavy web pages load too slowly on mobile devices.
- **The Solution:** A sub-second, mobile-first web app that communicates brand heritage within 5 seconds, provides interactive sizing and cost estimation, showcases real craftsmanship via high-speed video streaming, and converts visitors directly into WhatsApp showroom appointments.

---

## ✦ Key Features & User Experience

### 1. Dual-Language Architecture (বাংলা / English)
- **Seamless Language Switcher:** Instant, client-side toggle in the header navigation (`বাং / EN`).
- **Persistent Preferences:** Automatically remembers the visitor's preferred language via localStorage.
- **Authentic Local Tone:** Uses natural, everyday Bangladeshi conversational phrasing (*"আপনার জায়গার মাপ অনুযায়ী ফার্নিচার"*, *"শোরুমে এসে নিজের চোখে দেখে পছন্দ করুন"*) alongside refined English copy.

### 2. Interactive Bespoke Cost Estimator & Quote Flow
- **Real-Time Client-Side Calculation:** Dynamic pricing model based on room type, dimensions, wood selection (Chittagong Teak, Mehogany, Segun), upholstery grade, and finish.
- **WhatsApp Quote Handoff:** Formats customized specifications, dimensions, and estimated price into a ready-to-send structured message for 1-tap WhatsApp consultation.
- **Interactive Product Modals:** Detailed specification drawer for each catalog collection with material breakdowns and direct hotline inquiries.

### 3. Cloudinary Video Craftsmanship & Showroom Showcase
- **Real Atelier Footage:** High-definition video streams showing real wood-carving, sofa tailoring, dining set joinery, and showroom walkthroughs.
- **Audio & Autoplay Controls:** Intuitive sound-toggle controls (`সাউন্ড অন / অফ`) with ambient muted autoplay.
- **Adaptive Breakpoints:** Responsive layouts specially engineered for mobile devices, tablets (768px+), and high-resolution desktops without text cramping.

### 4. Direct Multi-Channel Conversion
- **Persistent Mobile Action Bar:** 1-tap thumb navigation for phone call (`01960-481983`), WhatsApp messaging, and Google Maps showroom routing.
- **Verified Physical Landmark Presence:** Prominent display of showroom address opposite RAK Ceramics on Agrabad Access Road with integrated navigation links.
- **Social Media Verification:** Direct links to official Facebook (12k+ followers), YouTube, and Instagram accounts.

---

## ✦ Engineering & Performance Highlights

### 🚀 90+ Mobile PageSpeed Optimization
Achieving a 90+ Mobile PageSpeed score while streaming video and displaying dozens of high-definition furniture photos required strict architectural discipline:

1. **Non-Blocking Cloudinary Video Delivery:**
   - Instead of embedding heavy third-party iframes (e.g. YouTube iframes that load 1.2MB of JavaScript and degrade performance), videos are hosted on Cloudinary CDN and delivered via native HTML5 `<video>` tags.
   - **Smart IntersectionObserver Pre-buffering:** Videos use a custom IntersectionObserver with a `450px` root margin. Buffering starts only when the user scrolls near the section, completely freeing the main thread during initial page load.

2. **Zero Layout Shift (`CLS = 0`):**
   - Every image and video element uses strict aspect-ratio containers (`4:3` or `16:9`) with intrinsic layout reservations, preventing visual jumps as media loads.

3. **Optimized WebP Image Pipeline:**
   - Switched from CPU-intensive AVIF decoding to highly optimized WebP format with fine-tuned quality parameters (`quality={85-90}`), delivering crisp wood-grain details at a fraction of the bandwidth.

4. **Zero Heavy Client Dependencies:**
   - Lightweight custom SVG primitives (`src/components/icons.tsx`) eliminate bulky external font-icon packages.
   - Built on native CSS animations and clean React state management without heavy animation runtimes.

---

## ✦ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16.3.4](https://nextjs.org/) (App Router, Turbopack) | Server Components, static prerendering, and optimized bundle delivery |
| **Runtime** | [React 19.2.8](https://react.dev/) | High-performance concurrent UI primitives |
| **Language** | [TypeScript 5.0+](https://www.typescriptlang.org/) | Strict type safety across content models and UI props |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/postcss`) | Modern CSS-in-utility styling with custom luxury color tokens |
| **Media Delivery** | [Cloudinary Video CDN](https://cloudinary.com/) + Next.js Image | Edge-accelerated MP4 streaming and WebP responsive images |
| **State & Context** | React Context (`LanguageContext`, `QuoteModalContext`) | Global state for language selection and quote modal drawers |
| **SEO & Schema** | Schema.org `FurnitureStore` JSON-LD | Rich Google search snippets, local store indexing, and geocoding |

---

## ✦ Directory Structure

```
heaven-furniture-mart/
├── .browserslistrc                # Browser compatibility configuration
├── README.md                      # Primary project documentation
├── package.json                   # Project scripts and dependencies
├── tsconfig.json                  # TypeScript compiler settings
├── next.config.ts                 # Image domain rules, security headers & caching
├── docs/                          # Architectural and brand intelligence documentation
│   ├── PLAN.md                    # Full master plan, execution logs & phase QA audits
│   ├── brand-research.md          # Verified business evidence & leadership profiles
│   ├── content-strategy.md        # Tone of voice, bilingual copy, & conversion architecture
│   ├── information-architecture.md# UX blueprints & landmark hierarchy
│   └── visual-design-system.md    # Color palette tokens, contrast ratios & typography specs
├── public/
│   ├── apple-icon.png             # iOS home screen webclip icon
│   ├── icon.png                   # Standard web app icon
│   ├── favicon.ico                # Desktop browser tab favicon
│   └── assets/                    # Optimized authentic photography
│       ├── brand/                 # Official Heaven white brandmark logo
│       ├── hero/                  # High-resolution handcrafted living room suite
│       ├── collections/           # Living, dining, bedroom, and storage photos
│       ├── craftsmanship/         # Authentic workshop carving and upholstery
│       ├── showroom/              # Agrabad flagship 2-story building
│       └── trust/                 # BFMA 2024 Award presentation and expo booth
└── src/
    ├── app/                       # Next.js App Router
    │   ├── layout.tsx             # Root layout with font injection, JSON-LD, and Providers
    │   ├── page.tsx               # Main landing page assembling all feature sections
    │   ├── globals.css            # Custom CSS variables, Tailwind tokens & responsive utilities
    │   ├── robots.ts              # Automated robots.txt generator
    │   └── sitemap.ts             # Dynamic XML sitemap generator
    ├── components/                # Modular React UI components
    │   ├── BespokeProcess.tsx     # 4-step custom furniture roadmap with interactive estimator
    │   ├── ConsultationCTA.tsx    # Consultation booking form & direct WhatsApp desk
    │   ├── CuratedSpaces.tsx      # Curated collections with category filters & modal triggers
    │   ├── FloatingActionBar.tsx  # Mobile-persistent thumb bar (Call, WhatsApp, Showroom)
    │   ├── Footer.tsx             # Showroom hours, address, hotlines, social channels
    │   ├── Hero.tsx               # High-impact image-led hero with dual CTAs & trust badges
    │   ├── JsonLd.tsx             # Schema.org structured data component
    │   ├── Navbar.tsx             # Responsive header with language toggle & mobile navigation
    │   ├── ProductPreviewModal.tsx# Deep-dive product specification & inquiry modal
    │   ├── ProvenanceTrust.tsx    # Brand heritage, Managing Director statement, & credentials
    │   ├── RequestQuoteModal.tsx  # Interactive bespoke quote request modal
    │   ├── Showroom.tsx           # Physical showroom showcase, map guide & visiting hours
    │   ├── ShowroomMedia.tsx      # Cloudinary video showcase & official social links
    │   ├── SmoothScrollProvider.tsx# Scroll handling and anchor navigation orchestration
    │   └── icons.tsx              # Clean SVG icons (Facebook, YouTube, Instagram, WhatsApp, etc.)
    ├── content/
    │   └── brand.ts               # Single Source of Truth for all brand data, products & media
    └── context/
        ├── LanguageContext.tsx    # Bilingual language state management (বাংলা / EN)
        └── QuoteModalContext.tsx  # Global modal trigger state for bespoke quotation
```

---

## ✦ Core Components Overview

| Component | Key Capabilities |
| :--- | :--- |
| **`Navbar.tsx`** | Responsive sticky header, brand lockup, language switcher toggle (`বাং / EN`), hotline badge, and accessible slide-out mobile drawer. |
| **`Hero.tsx`** | Image-led conversion hero featuring authentic handcrafted living room suite, dual 1-tap CTAs, and quick category shortcuts. |
| **`CuratedSpaces.tsx`** | Filterable catalog (Living, Bedroom, Dining, Office, Custom) with high-definition product cards and instant modal triggers. |
| **`BespokeProcess.tsx`** | 4-step visual roadmap explaining the custom order journey with an integrated interactive pricing & sizing calculator. |
| **`ShowroomMedia.tsx`** | Cloudinary video streaming gallery showing artisans in action, complete with sound toggles and official social channel links. |
| **`ProvenanceTrust.tsx`** | Verifiable brand trust: Managing Director Abul Kalam Bhuiyan statement, BFMA 2024 Award recognition, and customer testimonials. |
| **`Showroom.tsx`** | Highlighting the physical 2-story showroom on Agrabad Access Road with visiting hours and 1-tap Google Maps directions. |
| **`ConsultationCTA.tsx`** | Zero-friction lead capture form with instant WhatsApp handoff. |
| **`FloatingActionBar.tsx`** | Mobile-only bottom persistent bar for quick hotline calls, WhatsApp messages, and showroom location. |
| **`ProductPreviewModal.tsx`** | Spec sheet drawer detailing wood options, dimensions, warranty, and inquiry buttons for individual furniture pieces. |
| **`RequestQuoteModal.tsx`** | Step-by-step interactive quote builder that compiles user specs into pre-formatted WhatsApp text. |

---

## ✦ Content & Brand Source of Truth

All factual business information, phone numbers, addresses, social channels, product catalog data, and Cloudinary video URLs are centralized in:

```
src/content/brand.ts
```

### Highlights of `BRAND_CONFIG`:
- **Showroom Address:** Agrabad Access Road (Opposite RAK Ceramics), Double Mooring, Chattogram.
- **Primary Hotline & WhatsApp:** `+880 1960-481983` (Direct consultation desk).
- **Secondary Telephone:** `+880 1900-481898`.
- **Email:** `heavenfurnituremart@gmail.com`.
- **Social Media:**
  - Facebook: `https://www.facebook.com/HeavenFurnitureMart` (12,000+ followers)
  - YouTube: `https://www.youtube.com/@HeavenFurnitureMart`
  - Instagram: `https://www.instagram.com/heaven_furniture_ltd`

---

## ✦ Installation & Local Setup

### Prerequisites
- **Node.js:** `v20.9.0` or higher (Active LTS recommended)
- **npm:** `v10.0.0` or higher (or compatible `pnpm`/`yarn`)

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/al-shaimon/heaven-furniture-mart.git
   cd heaven-furniture-mart
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✦ CLI Commands

| Action | Command | Description |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Starts local Turbopack dev server on `localhost:3000` |
| **Type Check** | `npx tsc --noEmit` | Strict type verification without building |
| **Lint** | `npm run lint` | Runs ESLint with Next.js Core Web Vitals configuration |
| **Production Build** | `npm run build` | Compiles optimized static assets & server routes |
| **Production Server** | `npm run start` | Runs the compiled production build locally on port 3000 |

---

## ✦ Performance & Lighthouse Benchmarks

Audited on production builds via Google PageSpeed Insights:

| Audit Category | Desktop Score | Mobile Score (4G Emulation) | Notes |
| :--- | :---: | :---: | :--- |
| **Performance** | **100 / 100** | **90+ / 100** | Sub-second FCP, zero CLS, pre-buffered non-blocking video |
| **Accessibility** | **100 / 100** | **100 / 100** | Full WCAG 2.1 AA contrast, clear focus rings, semantic landmarks |
| **Best Practices** | **100 / 100** | **100 / 100** | Strict security headers, HTTPS, clean modern JavaScript |
| **SEO** | **100 / 100** | **100 / 100** | Native App Router metadata, sitemap.xml, robots.txt, Schema.org |

---

## ✦ Maintenance Guides

### 1. Updating Product Catalog or Media
Open `src/content/brand.ts` and add or edit items in `COLLECTION_CATEGORIES`:
```typescript
{
  id: "living-classic-sofa",
  nameBn: "রয়েল ক্লাসিক সোফা সেট",
  nameEn: "Royal Classic Living Suite",
  category: "living",
  image: "/assets/collections/heaven-living-suite.webp",
  descriptionBn: "হাতে খোদাই করা কাঠের ফিনিশ এবং প্রিমিয়াম ফেব্রিক কুশন।",
  descriptionEn: "Hand-carved solid timber accents with high-resilience upholstered seating.",
  dimensions: "3-Seater: 84\"W × 36\"D · 2-Seater: 62\"W",
  woodTypeBn: "চিটাগাং সেগুন / মেহগনি",
  woodTypeEn: "Chittagong Teak / Seasoned Mahogany",
}
```

### 2. Updating Cloudinary Video Links
In `src/content/brand.ts`, update `SHOWROOM_VIDEOS` with new Cloudinary CDN URLs:
```typescript
{
  id: "woodworking-process",
  localVideoSrc: "https://res.cloudinary.com/dr4guscnl/video/upload/v1788693928/heaven-woodworking-process_jqkrer.mp4",
  posterSrc: "/assets/craftsmanship/craftsmanship-woodcarving.webp",
  titleBn: "কাঠের সূক্ষ্ম কার্ভ ও কাঠামো তৈরি",
  titleEn: "Precision Woodcarving & Framing",
  descriptionBn: "দক্ষ কারিগরদের হাতে কাঠের মসৃণ বাঁক ও খোদাই কাজ।",
  descriptionEn: "Master artisans shaping solid timber frames with traditional hand tools.",
  badgeBn: "কারিগরদের কাজ",
  badgeEn: "Artisan Craft",
}
```

---

## ✦ Deployment

- **Primary Custom Domain:** [https://hfm.alshaimon.com](https://hfm.alshaimon.com) (Vercel Edge Network)
- **Alternative Mirror:** [https://heaven-furniture-mart-ctg.netlify.app](https://heaven-furniture-mart-ctg.netlify.app/) (Netlify)

### Vercel / Netlify
Connect the repository directly to Vercel or Netlify. Next.js 16 will automatically detect settings, compile the Turbopack production bundle, and deploy with zero configuration.

### Self-Hosted VPS (Docker / Node.js)
```bash
npm run build
NODE_ENV=production npm run start -p 8080
```

---

## ✦ License & Credits

- **Client:** Heaven Furniture Mart, Agrabad, Chattogram.
- **Design & Engineering:** Developed for the Racdox Web Development Hackathon.
- **Copyright:** © 2003–2026 Heaven Furniture Mart. All rights reserved.
