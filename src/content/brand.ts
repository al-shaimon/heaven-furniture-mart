/**
 * Heaven Furniture Mart - Central Brand Content Layer
 * Single Source of Truth for all verified business information,
 * contact details, milestones, collections, and copy.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface CollectionItem {
  id: string;
  title: string;
  category: "living" | "dining" | "bedroom" | "bespoke";
  categoryLabel: string;
  headline: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  aspectRatio: string;
  features: string[];
  indicativePrice?: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  headline: string;
  description: string;
  duration?: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  verifiedBadge?: string;
}

export interface TrustPillar {
  title: string;
  subtitle: string;
  description: string;
}

export const BRAND_CONFIG = {
  name: "Heaven Furniture Mart",
  tagline: "Designed. Crafted. Customized.",
  campaignAnchor: "Furniture, Crafted Around You.",
  category: "Luxury Bespoke Furniture & Interior Styling",
  foundedYear: 2003,
  founderAndMd: "Abul Kalam Bhuiyan",
  mdQuote: {
    text: "At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.",
    author: "Abul Kalam Bhuiyan",
    title: "Managing Director & Founder",
  },
  location: {
    shortLocation: "Agrabad, Chattogram",
    fullAddress: "Agrabad Access Road (Opposite RAK Ceramics), Double Mooring, Chattogram, Bangladesh",
    landmark: "Opposite RAK Ceramics",
    city: "Chattogram",
    country: "Bangladesh",
    coordinates: {
      lat: 22.3245,
      lng: 91.8123,
    },
    googleMapsUrl: "https://maps.google.com/?q=Heaven+Furniture+Mart+Agrabad+Access+Road+Chattogram",
  },
  operatingHours: {
    days: "Saturday – Thursday",
    hours: "9:00 AM – 9:30 PM",
    weekendNote: "Friday: Closed",
  },
  contact: {
    primaryPhone: "+880 1960-481983",
    primaryPhoneFormatted: "+880 1960-481983",
    hotlinePhone: "+880 1900-481898",
    hotlineFormatted: "+880 1900-481898",
    email: "heavenfurnituremart@gmail.com",
    whatsAppNumber: "8801960481983",
    whatsAppPreFill: "Hello Heaven Furniture Mart, I would like to inquire about a custom furniture design consultation for my home.",
  },
  social: {
    facebook: {
      url: "https://www.facebook.com/HeavenFurnitureMart",
      handle: "@HeavenFurnitureMart",
      followersCount: "12,000+",
    },
    youtube: {
      url: "https://www.youtube.com/@HeavenFurnitureMart",
      handle: "@HeavenFurnitureMart",
    },
    instagram: {
      url: "https://www.instagram.com/heaven_furniture_ltd",
      handle: "@heaven_furniture_ltd",
    },
  },
  navigation: [
    { label: "Why Bespoke", href: "#why-bespoke" },
    { label: "Curated Spaces", href: "#spaces" },
    { label: "The Process", href: "#process" },
    { label: "Provenance", href: "#provenance" },
    { label: "Showroom", href: "#showroom" },
  ] as NavItem[],
  trustChips: [
    "100% Sized to Your Blueprint",
    "Seasoned Chittagong Teak & Hardwoods",
    "White-Glove Delivery & Setup",
    "Agrabad Flagship Showroom",
  ],
  differentiators: [
    {
      title: "Tailored to the Centimeter",
      subtitle: "Zero Compromise on Scale",
      description: "Standard furniture creates dead zones and awkward clearances. We design backwards from your floor plan, tailoring widths, depths, and heights to match your exact room architecture.",
    },
    {
      title: "Authentic Chittagong Teak",
      subtitle: "Heirloom Material Integrity",
      description: "We utilize seasoned, pest-resistant Chittagong Teak (Segun), premium hardwoods, imported natural marble slabs, and high-density foam that withstand decades of family life without sagging.",
    },
    {
      title: "CNC Precision + Hand Carving",
      subtitle: "The Master Atelier Standard",
      description: "Computerized numeric cutting guarantees millimeter-perfect structural joinery, paired with traditional hand-chiseled wood relief artistry that machine-only furniture cannot replicate.",
    },
    {
      title: "Turnkey Delivery & Assembly",
      subtitle: "White-Glove In-Home Service",
      description: "Our dedicated logistics and assembly specialists transport, position, level, and inspect every piece in your home across Chattogram with zero hassle.",
    },
  ] as TrustPillar[],
  bespokeProcess: [
    {
      stepNumber: "01",
      title: "Consult & Measure",
      headline: "Reviewing Your Blueprint",
      description: "Share your room dimensions, floor plan, or inspirational sketches with our in-house designers in our Agrabad showroom or via WhatsApp.",
      duration: "Day 1–2",
    },
    {
      stepNumber: "02",
      title: "Materials & Detailing",
      headline: "Wood, Stone & Fabric Curation",
      description: "Hand-select your timber species (seasoned Chittagong Teak, Mahogany), marble slabs, upholstery weaves, velvet tones, and custom hardware.",
      duration: "Day 3–5",
    },
    {
      stepNumber: "03",
      title: "Atelier Crafting",
      headline: "Precision Joinery & Hand Finishing",
      description: "Master woodworkers and CNC technicians carve, assemble, upholster, and hand-polish your piece with meticulous structural quality checks.",
      duration: "Day 6–20",
    },
    {
      stepNumber: "04",
      title: "Delivery & Setup",
      headline: "White-Glove Installation",
      description: "Our specialized in-house delivery team handles transport, uncrating, room positioning, and final inspection inside your residence.",
      duration: "Turnkey",
    },
  ] as ProcessStep[],
  collections: [
    {
      id: "living-classic",
      category: "living",
      categoryLabel: "Living Room",
      title: "Handcrafted Living Suites",
      headline: "Solid Chittagong Teak with Damask Weaves",
      description: "Custom-proportioned sofas, carved coffee tables, and Chesterfield tufted armchairs designed to anchor your family living room in timeless comfort.",
      imageSrc: "/assets/hero/heaven-classic-living-hero.webp",
      imageAlt: "Heaven Furniture Mart handcrafted solid teak living room suite with ambient lighting",
      aspectRatio: "4/3",
      features: ["Solid Teak Frame", "Custom Fabric Selection", "CNC + Hand Carving", "High-Density Foam"],
      indicativePrice: "Custom suites from ৳1,45,000",
    },
    {
      id: "dining-marble",
      category: "dining",
      categoryLabel: "Dining Room",
      title: "Natural Marble Dining Suites",
      headline: "Italian Marble with Pearlescent Lacquer",
      description: "Heavy polished natural marble dining tables paired with ergonomically sculpted dining chairs featuring hand-embroidered floral backs.",
      imageSrc: "/assets/collections/heaven-dining-marble-luxury.webp",
      imageAlt: "Heaven Furniture Mart pearlescent marble dining table set with chandelier",
      aspectRatio: "4/5",
      features: ["Natural Marble Slab", "Embroidered Velvet Chairs", "High-Gloss Lacquer Finish", "Seats 6 to 12"],
      indicativePrice: "Custom suites from ৳1,85,000",
    },
    {
      id: "bedroom-royal",
      category: "bedroom",
      categoryLabel: "Master Bedroom",
      title: "Royal Carved Bed Suites",
      headline: "Solid Teak Frame with Tufted Headboard",
      description: "Custom headboards with gold floral crests, geometric brass inlays, paired with full-height sliding mirror wardrobes and matching vanities.",
      imageSrc: "/assets/collections/heaven-bedroom-royal-carved.webp",
      imageAlt: "Heaven Furniture Mart hand-carved teak bed with cyan velvet headboard",
      aspectRatio: "4/5",
      features: ["Solid Teak Posts", "Velvet Headboard", "Anti-Sag Slat Support", "Full-Height Wardrobes"],
      indicativePrice: "Custom suites from ৳1,60,000",
    },
    {
      id: "bedroom-modern",
      category: "bedroom",
      categoryLabel: "Contemporary Bedroom",
      title: "Emerald Quilted Velvet Bed",
      headline: "Hardwood Structure with Diamond Quilted Velvet",
      description: "Clean contemporary lines featuring a channel-tufted emerald velvet headboard, diamond-quilted footboard, and integrated ambient illumination.",
      imageSrc: "/assets/collections/heaven-bedroom-emerald-modern.webp",
      imageAlt: "Heaven Furniture Mart modern emerald green velvet bed set",
      aspectRatio: "4/5",
      features: ["Channel Tufting", "Diamond Quilted Footboard", "Sound-Dampened Frame", "Custom Sizing"],
      indicativePrice: "Custom suites from ৳1,35,000",
    },
    {
      id: "bespoke-vitrine",
      category: "bespoke",
      categoryLabel: "Custom Cabinetry",
      title: "Curved Vitrine Showcases",
      headline: "Solid Teak Vitrine with Curved Tempered Glass",
      description: "Custom glass-front display showcases with gold leaf accents and integrated warm lighting for treasured heirloom porcelain and crystal.",
      imageSrc: "/assets/bespoke/heaven-bespoke-vitrine-showcase.webp",
      imageAlt: "Heaven Furniture Mart bespoke curved glass illuminated display vitrine",
      aspectRatio: "1/1",
      features: ["Curved Tempered Glass", "Integrated LED Strip", "Gold Leaf Relief", "Adjustable Glass Shelves"],
      indicativePrice: "Custom vitrines from ৳85,000",
    },
    {
      id: "bespoke-cabinet",
      category: "bespoke",
      categoryLabel: "Modular Storage",
      title: "Minimalist Entryway Credenzas",
      headline: "Bespoke Entryway Storage with Blum Soft-Close",
      description: "Space-saving footwear and accessory cabinetry engineered with soft-close Blum hardware, open display niches, and wipe-clean lacquer.",
      imageSrc: "/assets/bespoke/heaven-bespoke-modular-cabinet.webp",
      imageAlt: "Heaven Furniture Mart minimalist matte black shoe cabinet with brushed brass handles",
      aspectRatio: "1/1",
      features: ["Matte Black Finish", "Brushed Brass Pulls", "Ventilated Storage", "Soft-Close Hinges"],
      indicativePrice: "Custom credenzas from ৳45,000",
    },
  ] as CollectionItem[],
  milestones: [
    {
      year: "2003",
      title: "Atelier Founded in Chattogram",
      description: "Established by Abul Kalam Bhuiyan as a bespoke woodworking atelier dedicated to crafted Chittagong Teak residential furniture.",
    },
    {
      year: "2011",
      title: "Agrabad Flagship Showroom",
      description: "Opened the multi-level flagship gallery on Agrabad Access Road to showcase fully styled room vignettes to homeowners.",
    },
    {
      year: "2018",
      title: "Hundreds of Fine Residences Furnished",
      description: "Trusted by hundreds of homeowners across Khulshi, Nasirabad, Panchlaish, and Agrabad for complete bespoke home furnishing solutions.",
    },
    {
      year: "2022",
      title: "Chittagong Chamber of Commerce",
      description: "Inducted as an official member of the Chittagong Chamber of Commerce & Industry (CCCI), reinforcing corporate standing.",
    },
    {
      year: "2024",
      title: "BFMA Nationwide Recognition",
      description: "Honored with official recognition at the 13th & 14th Chattogram Furniture Fair organized by the Bangladesh Furniture Manufacturers Association.",
      verifiedBadge: "BFMA Award 2024",
    },
  ] as Milestone[],
  cta: {
    primaryText: "Book a Free Design Consultation",
    secondaryText: "Chat on WhatsApp",
    headline: "Let's make your space truly yours.",
    subhead: "Whether you are furnishing a new apartment or crafting a single signature piece, our design consultation is completely free with zero obligation.",
    whatsappUrl: "https://wa.me/8801960481983?text=Hello%20Heaven%20Furniture%20Mart,%20I%20would%20like%20to%20book%20a%20free%20design%20consultation%20for%20my%20home.",
    phoneUrl: "tel:+8801960481983",
    showroomPhoneUrl: "tel:+8801900481898",
  },
} as const;
