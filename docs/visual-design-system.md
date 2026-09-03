# Heaven Furniture Mart | Visual Design System & Direction
**Document:** `docs/visual-design-system.md`  
**Phase:** Phase 3 — Visual Design System  
**Status:** Approved & Tokenized  

---

## 1. Design Direction Exploration & Decision Matrix

To guarantee Heaven Furniture Mart does NOT look like a generic AI-generated landing page, we conceptually evaluated three distinct directions:

| Evaluation Criteria | Direction A: Neo-Dark Cyber Luxury | Direction B: Scandinavian Flat Minimalist | Direction C: The Architectural Atelier (SELECTED) |
| :--- | :--- | :--- | :--- |
| **Aesthetic Mood** | Pitch black (`#0A0A0A`), neon gold glows, floating glass cards | Stark white (`#FFFFFF`), cold grey, sterile clinic grid | Warm ecru, deep forest slate, antique brass hairlines, editorial whitespace |
| **Authenticity to Brand** | Poor. Looks like an AI crypto/SaaS template | Poor. Clashes with rich Chittagong Teak and ornate wood carvings | **Exceptional.** Matches official logo, showroom signage, and real furniture |
| **Material Resonance** | Dulls natural teak wood grain; feels synthetic | Makes luxury velvet and marble look out of place | **Flawless.** Wood, marble, and velvet breathe naturally |
| **Target Customer Fit** | Confuses local Chattogram homeowners | Feels like budget flat-pack furniture | **Inspires.** Evokes a private upscale interior design studio |
| **Performance Target** | Heavy shadows, glows, and backdrop filters drop FPS | Fast, but devoid of brand character | **Blazing fast (100 Lighthouse).** Pure CSS tokens, zero heavy filters |

### Why "The Architectural Atelier" Direction Fits Heaven Furniture Mart
1. **Respects the Real Craft:** Heaven Furniture Mart is known for authentic Chittagong Teak (Segun), hand-carved floral motifs, and Italian marble. Warm, natural tactile tones (unbleached ecru, forest slate, warm parchment) make these materials look rich and authentic.
2. **Rejects Generic AI Tropes:** No giant bubbly `rounded-3xl` cards, no floating glassmorphism blobs, no purple-blue gradients, and no neon glowing borders.
3. **Editorial Authority:** Generous whitespace, asymmetric column pacing, and disciplined serif typography convey 20+ years of quiet prestige and craftsmanship.

---

## 2. Color System & Design Tokens

The palette is derived directly from Heaven's verified brand identity, showroom architecture, and natural wood species:

```
[DEEP SLATE TEAK]         [WARM ECRU / LINEN]       [ANTIQUE BRASS ACCENT]    [DEEP CHARCOAL ESPRESSO]
#142420 / #1B2F29         #FAF8F5 / #F3EFEB         #C5A869 / #D8BA7B         #161817 / #222524
(Dark Grounding Base)     (Tactile Paper Surface)   (Fine Hairline Restraint) (High-Contrast Typography)
```

### Exact Token Definitions (CSS Variables)

```css
:root {
  /* Brand Primary Bases */
  --brand-slate-deep: #142420;      /* Grounding dark luxury slate-teal (from logo) */
  --brand-slate-surface: #1b2f29;   /* Slightly elevated dark container */
  --brand-slate-border: #28423a;    /* Subtle dark border */
  
  /* Warm Neutral Surfaces */
  --surface-ecru-light: #faf8f5;    /* Pristine warm alabaster page background */
  --surface-ecru-paper: #f4efea;    /* Warm tactile card / section background */
  --surface-ecru-muted: #e9e2d8;    /* Muted divider / subtle pill background */

  /* Typography Colors */
  --text-primary-dark: #161817;     /* High-contrast charcoal for light mode (WCAG AAA) */
  --text-secondary-dark: #525754;   /* Muted editorial commentary on light */
  --text-primary-light: #faf8f5;    /* Clean warm white text on dark slate (WCAG AAA) */
  --text-secondary-light: #b3bdb7;  /* Soft sage-tinted muted text on dark slate */

  /* Metallic Accent - Antique Brass (Used with Extreme Restraint) */
  --accent-brass: #c5a869;          /* Refined champagne brass (no gaudy gold) */
  --accent-brass-hover: #d8ba7b;    /* Warm hover state */
  --accent-brass-muted: rgba(197, 168, 105, 0.2); /* 1px hairline accents */

  /* Functional WhatsApp & Status */
  --accent-whatsapp: #25d366;       /* Official WhatsApp green for primary contact */
  --accent-whatsapp-hover: #20ba5a;
}
```

---

## 3. Typography Hierarchy

We pair an authoritative, high-fashion display serif with a crisp, geometric humanist sans-serif loaded via Next.js Google Fonts for zero layout shift (CLS: 0.0):

* **Display & Headings:** `Playfair Display` or `Cormorant Garamond` (Serif)
  * *Feeling:* Editorial prestige, architectural craftsmanship, brochure approved.
  * *Tracking:* Slightly tight tracking on large headings (`tracking-tight` or `-0.02em`).
* **Body, UI & Meta:** `Plus Jakarta Sans` or `Inter` (Sans-Serif)
  * *Feeling:* Modern, highly legible, accessible on mobile screens down to 320px.
  * *Leading:* Relaxed line height (`leading-relaxed` or `1.6`) for effortless readability.

### Type Scale Scale
* **Hero Display `<h1>`:** `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` (Font Weight: 600)
* **Section Heading `<h2>`:** `text-3xl sm:text-4xl md:text-5xl` (Font Weight: 500)
* **Card Title `<h3>`:** `text-xl sm:text-2xl` (Font Weight: 600)
* **Eyebrow / Kicker:** `text-xs sm:text-sm font-semibold tracking-widest uppercase text-accent-brass`
* **Lede Paragraph:** `text-lg sm:text-xl text-neutral-700 leading-relaxed font-normal`
* **Body Copy:** `text-base text-neutral-600 leading-relaxed`
* **UI & Caption:** `text-xs sm:text-sm font-medium tracking-wide`

---

## 4. Spacing Scale & Grid Layout

* **Container System:**
  * Maximum Content Width: `max-w-7xl` (`1280px`).
  * Editorial Narrow Text Width: `max-w-3xl` (`768px`) for reading comfort.
  * Section Horizontal Padding: `px-6 sm:px-8 lg:px-12`.
* **Vertical Section Rhythm:**
  * Major Section Padding: `py-20 sm:py-28 lg:py-36` (Generous editorial whitespace).
  * Component Gap: `gap-8 sm:gap-12 lg:gap-16`.
* **Grid Standards:**
  * 12-column responsive layout on desktop.
  * Asymmetric pairings: 7-column image + 5-column editorial text block.
  * Curated spaces: 3-column or 2-column balanced grid with no cramped cards.

---

## 5. Architectural Container & Border Treatment

* **NO Giant Rounded Bubbles:** Standard SaaS `rounded-3xl` (24px–32px) feels playful and childish. Heaven Furniture Mart uses **crisp, architectural geometry**:
  * Cards & Containers: `rounded-none` or subtle `rounded-sm` / `rounded-md` (maximum 4px–6px).
  * Subtle Hairline Borders: `border border-[#c5a869]/20` or `border-neutral-200/80` (1px clean drafting line).
  * Zero Heavy Drop Shadows: We use ambient, diffuse contact shadows (`shadow-sm` or subtle `box-shadow: 0 8px 30px rgba(0,0,0,0.04)`) to keep the page feeling flat, editorial, and fast.

---

## 6. Image Treatment & Art Direction

1. **Uncropped Integrity:** Furniture is about proportion. Images must never be aggressively cropped to cut off chair legs, headboards, or sofa arms.
2. **Warm Tonal Calibration:** Photographs are framed with generous neutral borders or subtle warm ecru backplates (`bg-[#f4efea]`) to blend seamlessly into the page background.
3. **Zero Artificial Overlays:** We do NOT wash beautiful furniture in dark gradients or color filters. Real wood, natural marble, and silk embroidery speak for themselves.
4. **Responsive Aspect Ratios:**
   * Hero: `16:9` / `4:3` wide landscape.
   * Space & Product Cards: `4:5` vertical portrait or `1:1` square.
   * Showroom Exterior: `16:10` landscape.

---

## 7. Button & Interactive Component Design

### Primary Button (`Book a Free Design Consultation`):
* **Appearance:** Solid dark forest slate (`#142420`) with warm ecru text (`#FAF8F5`) and a subtle 1px antique brass border.
* **Hover State:** Smooth background shift to elevated slate (`#1B2F29`) with slight brass illumination (`border-[#C5A869]`) and gentle `translate-y-[-1px]`.
* **Dimensions:** Minimum height `50px`, horizontal padding `px-7`, font weight `font-medium`, tracking `tracking-wide`.
* **Focus State:** Visible, high-contrast double outline (`focus-visible:ring-2 focus-visible:ring-[#C5A869] focus-visible:ring-offset-2`).

### Secondary Button (`Chat on WhatsApp` / `Explore Craft`):
* **Appearance:** Transparent background with refined 1px border (`border-neutral-300` or `border-[#C5A869]/40`), paired with an inline directional arrow (`→`).
* **Hover State:** Subtle warm fill (`bg-neutral-100` or `bg-[#C5A869]/10`), arrow translates right by `3px`.

---

## 8. Section Transitions & Flow

Instead of jarring horizontal color blocks, sections transition with intentional architectural harmony:
1. **Hero (Dark Editorial Slate):** Deep, immersive first impression that commands attention and makes wood and marble gleam.
2. **The Atelier Difference (Warm Ecru/Parchment):** Gentle shift into daylight. Clear, bright, easy to read, highlighting the floor plan customization.
3. **Curated Spaces (Warm Alabaster):** Pure, clean gallery presentation where each room is framed like an architectural exhibit.
4. **The Bespoke Process (Muted Slate / Parchment):** Clean, sequential timeline with connecting hairline tracks.
5. **Provenance & Showroom (Warm Neutral + Flagship Photography):** Real building and award photography anchored in local Chattogram reality.
6. **Final CTA Sanctuary (Deep Forest Slate):** Closing with an intimate, confident, dark atelier environment that focuses all attention on the consultation action.

---

## 9. Animation Philosophy

* **Rule:** Animation must communicate calm and dignity.
* **Allowed:**
  * Gentle opacity fade-in with subtle upward translation (`10px` to `0px` over `500ms`, `cubic-bezier(0.16, 1, 0.3, 1)`).
  * Micro-hover scale on collection images (`scale-[1.015]` with `transition-transform duration-500 ease-out`).
  * Smooth accordion or tab cross-fade without layout shift.
* **Prohibited:**
  * Continuous spinning icons or floating blobs.
  * Parallax scroll-jacking that disrupts trackpad/mousewheel control.
  * Distracting cursor followers.
* **Reduced Motion:** Fully honored via `motion-reduce:transition-none` and `prefers-reduced-motion: reduce`.

---

## 10. Mobile Visual Standards

* Viewport Range Tested: `320px` to `428px`.
* Layout: Single-column fluid stacked layout with strictly `overflow-x: hidden`.
* Typography: Fluid typography using standard Tailwind responsive steps (`text-3xl sm:text-5xl`) to prevent awkward hyphenation or 1-word wrapped lines.
* Touch Targets: Every interactive link, phone number, and button has a minimum hit target of `48px × 48px`.
* Persistent Floating Action: Subtle, non-intrusive bottom utility bar on mobile with 1-tap WhatsApp consultation.
