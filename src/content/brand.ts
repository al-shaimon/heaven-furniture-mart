/**
 * Heaven Furniture Mart - Single Authoritative Brand Content Layer
 * Sourced strictly from docs/company-deck-notes.txt, brochure, and official channels.
 * Pure, natural Bangladeshi Bangla throughout.
 * ponytail: Lean, zero-abstraction content dictionary.
 */

export interface NavItem {
  label: string;
  labelEn: string;
  href: string;
}

export interface GalleryItem {
  id: string;
  category: "living" | "bedroom" | "dining" | "custom";
  categoryLabelBn: string;
  categoryLabelEn?: string;
  titleBn: string;
  titleEn?: string;
  descriptionBn: string;
  descriptionEn?: string;
  imageSrc: string;
  imageAlt: string;
  additionalImages: string[];
  badge?: string;
  badgeEn?: string;
}

export interface CredentialItem {
  titleBn: string;
  titleEn?: string;
  descriptionBn: string;
  descriptionEn?: string;
}

export interface CustomStep {
  stepNumber: string;
  titleBn: string;
  titleEn?: string;
  descriptionBn: string;
  descriptionEn?: string;
}

export interface TimelineMilestone {
  year: string;
  yearEn?: string;
  titleBn: string;
  titleEn?: string;
  descriptionBn: string;
  descriptionEn?: string;
  imageSrc: string;
  imageAlt: string;
  captionBn: string;
  captionEn?: string;
}

export interface CraftVideoItem {
  id: string;
  titleBn: string;
  titleEn?: string;
  descriptionBn: string;
  descriptionEn?: string;
  posterSrc: string;
  localVideoSrc: string;
  badgeBn: string;
  badgeEn?: string;
}

export const BRAND_CONFIG = {
  nameBn: "হেভেন ফার্নিচার মার্ট",
  nameEn: "Heaven Furniture Mart",
  taglineBn: "আপনার ঘরের জন্য পছন্দের ফার্নিচার।",
  taglineEn: "Living, Bedroom & Custom Furniture · Agrabad, Chattogram",
  shortSummaryBn: "বাসা-বাড়ির জন্য ফার্নিচার লাগবে? আপনার জায়গার মাপ অনুযায়ী কাস্টম ফার্নিচারও তৈরি করে দিই।",
  
  location: {
    cityBn: "চট্টগ্রাম",
    cityEn: "Chattogram",
    areaBn: "আগ্রাবাদ",
    areaEn: "Agrabad",
    fullAddressBn: "আগ্রাবাদ এক্সেস রোড (RAK সিরামিক্সের বিপরীতে), ডবলমুরিং, চট্টগ্রাম",
    fullAddressEn: "Agrabad Access Road (Opposite RAK Ceramics), Double Mooring, Chattogram, Bangladesh",
    landmarkBn: "RAK সিরামিক্সের ঠিক বিপরীতে",
    landmarkEn: "Opposite RAK Ceramics",
    googleMapsUrl: "https://maps.google.com/?q=Heaven+Furniture+Mart+Agrabad+Access+Road+Chattogram",
  },

  operatingHours: {
    daysBn: "শনিবার – বৃহস্পতিবার",
    daysEn: "Saturday – Thursday",
    timeBn: "সকাল ৯:০০ – রাত ৯:৩০",
    timeEn: "9:00 AM – 9:30 PM",
    closedBn: "শুক্রবার বন্ধ",
    closedEn: "Friday Closed",
    advisoryBn: "শোরুমে আসার আগে কল করে নিশ্চিত হয়ে নিন।",
  },

  contact: {
    primaryPhone: "+880 1960-481983",
    primaryPhoneDisplay: "01960-481983",
    secondaryPhone: "+880 1900-481898",
    secondaryPhoneDisplay: "01900-481898",
    email: "heavenfurnituremart@gmail.com",
    whatsAppNumber: "8801960481983",
    whatsAppPreFillBn: "আসসালামু আলাইকুম, হেভেন ফার্নিচার মার্টে ফার্নিচার সম্পর্কে জানতে চাই।",
    whatsAppUrl: "https://wa.me/8801960481983?text=" + encodeURIComponent("আসসালামু আলাইকুম, হেভেন ফার্নিচার মার্টে ফার্নিচার সম্পর্কে জানতে চাই।"),
    phoneUrl: "tel:+8801960481983",
    secondaryPhoneUrl: "tel:+8801900481898",
  },

  social: {
    facebook: {
      url: "https://www.facebook.com/HeavenFurnitureMart",
      handle: "@HeavenFurnitureMart",
      label: "ফেসবুক পেজ (১২,০০০+ ফলোয়ার)",
    },
    youtube: {
      url: "https://www.youtube.com/@HeavenFurnitureMart",
      handle: "@HeavenFurnitureMart",
      label: "ইউটিউব চ্যানেল",
      tourVideoId: "qEwoJWbXSTs",
      tourVideoTitle: "Heaven Furniture Mart Chattogram – Virtual Showroom Tour",
      tourThumbnail: "/assets/showroom/heaven-virtual-showroom-tour.webp",
      tourLocalVideoSrc: "/videos/showroom/heaven-virtual-showroom-tour.mp4",
    },
    instagram: {
      url: "https://www.instagram.com/heaven_furniture_ltd",
      handle: "@heaven_furniture_ltd",
      label: "ইনস্টাগ্রাম প্রোফাইল",
    },
  },

  navigation: [
    { label: "ফার্নিচার কালেকশন", labelEn: "Collections", href: "#collection" },
    { label: "কাস্টম তৈরি", labelEn: "Custom Furniture", href: "#custom" },
    { label: "শোরুম ভিডিও", labelEn: "Showroom Tour", href: "#showroom-tour" },
    { label: "শোরুম", labelEn: "Showroom", href: "#showroom" },
    { label: "স্বীকৃতি", labelEn: "Milestones", href: "#trust" },
    { label: "যোগাযোগ", labelEn: "Contact", href: "#contact" },
  ] as NavItem[],

  founder: {
    nameBn: "আবুল কালাম ভূঁইয়া",
    nameEn: "Abul Kalam Bhuiyan",
    titleBn: "ব্যবস্থাপনা পরিচালক ও প্রতিষ্ঠাতা",
    titleEn: "Founder & Managing Director",
    quoteBn:
      "হেভেন ফার্নিচার মার্টে আমরা বিশ্বাস করি ফার্নিচার কেবল ব্যবহারের জিনিস নয়; এটি আপনার জীবনযাপন, রুচি ও আরামের প্রতিফলন। আমাদের প্রতিটি ফার্নিচার ক্লায়েন্টদের ঘরে দীর্ঘস্থায়ী সৌন্দর্য পৌঁছে দেওয়ার লক্ষ্যে তৈরি।",
    verbatimQuoteEn:
      "At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.",
  },

  credentials: [
    {
      titleBn: "BFMA স্বীকৃতিপ্রাপ্ত",
      titleEn: "BFMA Certified Manufacturer",
      descriptionBn: "বাংলাদেশ ফার্নিচার ম্যানুফ্যাকচারার্স অ্যাসোসিয়েশন স্বীকৃতিপ্রাপ্ত প্রতিষ্ঠান।",
      descriptionEn: "Recognized manufacturer of the Bangladesh Furniture Manufacturers Association.",
    },
    {
      titleBn: "চেম্বার অব কমার্স সদস্য",
      titleEn: "Chamber of Commerce Member",
      descriptionBn: "চট্টগ্রাম চেম্বার অব কমার্স অ্যান্ড ইন্ডাস্ট্রিজ-এর সদস্য।",
      descriptionEn: "Active member of the Chittagong Chamber of Commerce & Industry.",
    },
    {
      titleBn: "ফার্নিচার মেলায় অংশগ্রহণ",
      titleEn: "International Fair Participant",
      descriptionBn: "চট্টগ্রাম আন্তর্জাতিক ফার্নিচার মেলায় নিজস্ব প্যাভিলিয়নে অংশগ্রহণ।",
      descriptionEn: "Prominent exclusive exhibitor at Chattogram International Furniture Fair.",
    },
  ],

  customSteps: [
    {
      stepNumber: "১",
      titleBn: "ঘরের মাপ বা পছন্দের ছবি পাঠান",
      descriptionBn: "আপনার রুমের মাপ বা যে ফার্নিচার পছন্দ, তার একটি ছবি আমাদের হোয়াটসঅ্যাপে পাঠিয়ে দিন।",
    },
    {
      stepNumber: "২",
      titleBn: "কাঠ ও কালার পছন্দ করুন",
      descriptionBn: "আপনার বাজেট ও পছন্দ অনুযায়ী কাঠ, কাপড়ের ধরন ও পলিশের কালার বেছে নিন।",
    },
    {
      stepNumber: "৩",
      titleBn: "দক্ষ কারিগরের যত্নে তৈরি",
      descriptionBn: "আমাদের অভিজ্ঞ কারিগররা পরম যত্নে প্রতিটি জোড়া ও ফিনিশিং নিখুঁতভাবে তৈরি করবেন।",
    },
    {
      stepNumber: "৪",
      titleBn: "ডেলিভারি ও সেটআপ",
      descriptionBn: "নিরাপদে আপনার বাসায় পৌঁছে ঘরে সুন্দরভাবে সেটআপ করে দেওয়া হবে।",
    },
  ] as CustomStep[],

  // Curated, 100% verified real photography from Heaven Furniture Mart
  gallery: [
    // --- LIVING ROOM ---
    {
      id: "living-sectional",
      category: "living",
      categoryLabelBn: "লিভিং রুম",
      categoryLabelEn: "Living Room",
      titleBn: "সেকশনাল সোফা সেট",
      titleEn: "Sectional Sofa Set",
      descriptionBn: "আরামদায়ক কুশন ও আধুনিক লিভিং রুমের জন্য সোফা সেট।",
      descriptionEn: "Comfortable high-density cushions and contemporary sectional sofa design.",
      imageSrc: "/assets/hero/heaven-classic-living-hero.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট সেকশনাল সোফা সেট",
      additionalImages: [
        "/assets/hero/heaven-classic-living-hero.webp",
        "/furniture/living/living-sectional-sofa-01.webp",
        "/furniture/living/living-yellow-sectional-05.webp",
        "/furniture/living/living-glass-center-table-09.webp",
      ],
      badge: "জনপ্রিয়",
      badgeEn: "Popular",
    },
    {
      id: "living-royal-blue",
      category: "living",
      categoryLabelBn: "লিভিং রুম",
      categoryLabelEn: "Living Room",
      titleBn: "খোদাই করা ক্লাসিক সোফা",
      titleEn: "Hand-Carved Classic Sofa",
      descriptionBn: "কাঠের ক্লাসিক কারুকাজ ও আরামদায়ক কুশন বিশিষ্ট সোফা।",
      descriptionEn: "Heritage hand-carved solid wood frame with opulent velvet upholstery.",
      imageSrc: "/assets/gallery/luxury-embroidery-sofa-set-jpeg.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট খোদাই করা ক্লাসিক সোফা",
      additionalImages: [
        "/assets/gallery/luxury-embroidery-sofa-set-jpeg.webp",
        "/furniture/living/living-royal-blue-sofa-02.webp",
        "/furniture/living/living-gold-trim-armchair-08.webp",
        "/furniture/living/living-white-gold-carved-10.webp",
      ],
      badge: "ক্লাসিক",
      badgeEn: "Classic",
    },
    {
      id: "living-modern-beige",
      category: "living",
      categoryLabelBn: "লিভিং রুম",
      categoryLabelEn: "Living Room",
      titleBn: "মডার্ন কুশন সোফা সেট",
      titleEn: "Modern Cushioned Sofa Set",
      descriptionBn: "ড্রয়িং রুমের জন্য পরিচ্ছন্ন ও আরামদায়ক সোফা সেট।",
      descriptionEn: "Clean-lined aesthetic with breathable fabric and ergonomic lumbar support.",
      imageSrc: "/furniture/living/living-modern-beige-sofa-03.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট মডার্ন কুশন সোফা সেট",
      additionalImages: [
        "/furniture/living/living-modern-beige-sofa-03.webp",
        "/furniture/living/living-l-shape-sofa-04.webp",
        "/assets/gallery/emroiydery-sofa-set-jpeg.webp",
        "/furniture/living/living-glass-center-table-09.webp",
      ],
    },
    {
      id: "living-l-shape",
      category: "living",
      categoryLabelBn: "লিভিং রুম",
      categoryLabelEn: "Living Room",
      titleBn: "এল-শেপ ফ্যামিলি সোফা সেট",
      titleEn: "L-Shape Family Corner Sofa",
      descriptionBn: "পরিবারের সবার একসাথে বসার উপযোগী কর্নার সোফা সেট।",
      descriptionEn: "Spacious corner sofa configuration designed for comfortable family living.",
      imageSrc: "/furniture/living/living-l-shape-sofa-04.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট এল-শেপ ফ্যামিলি সোফা সেট",
      additionalImages: [
        "/furniture/living/living-l-shape-sofa-04.webp",
        "/furniture/living/living-yellow-sectional-05.webp",
        "/furniture/living/living-blue-l-shape-06.webp",
        "/furniture/living/living-sectional-sofa-01.webp",
      ],
      badge: "বেস্ট সেলার",
      badgeEn: "Best Seller",
    },
    {
      id: "living-yellow-sectional",
      category: "living",
      categoryLabelBn: "লিভিং রুম",
      categoryLabelEn: "Living Room",
      titleBn: "মডার্ন সেকশনাল সোফা",
      titleEn: "Curved Modern Sectional",
      descriptionBn: "আরামদায়ক কুশন ও আকর্ষণীয় আধুনিক লিভিং সোফা সেট।",
      descriptionEn: "Vibrant and plush modular seating arrangement for dynamic living spaces.",
      imageSrc: "/furniture/living/living-yellow-sectional-05.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট মডার্ন সেকশনাল সোফা",
      additionalImages: [
        "/furniture/living/living-yellow-sectional-05.webp",
        "/furniture/living/living-sectional-sofa-01.webp",
        "/furniture/living/living-glass-center-table-09.webp",
        "/assets/hero/heaven-classic-living-hero.webp",
      ],
    },
    {
      id: "living-blue-l-shape",
      category: "living",
      categoryLabelBn: "লিভিং রুম",
      categoryLabelEn: "Living Room",
      titleBn: "লাক্সারি  কর্নার সোফা",
      titleEn: "Luxury Corner Sofa",
      descriptionBn: "স্পেস সেভিং ডিজাইনের মার্জিত ড্রয়িং সোফা সেট।",
      descriptionEn: "Space-saving elegant corner sofa built with reinforced seasoned timber.",
      imageSrc: "/furniture/living/living-blue-l-shape-06.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট লাক্সারি কর্নার সোফা",
      additionalImages: [
        "/furniture/living/living-blue-l-shape-06.webp",
        "/furniture/living/living-l-shape-sofa-04.webp",
        "/furniture/living/living-modern-beige-sofa-03.webp",
        "/furniture/living/living-glass-center-table-09.webp",
      ],
    },
    {
      id: "living-classic-carved",
      category: "living",
      categoryLabelBn: "লিভিং রুম",
      categoryLabelEn: "Living Room",
      titleBn: "কাঠের ক্লাসিক নকশার সোফা",
      titleEn: "Traditional Carved Wood Sofa",
      descriptionBn: "মজবুত কাঠের ফ্রেম ও ঐতিহ্যবাহী খোদাই নকশার সোফা সেট।",
      descriptionEn: "Solid seasoned hardwood construction with intricate heritage floral carvings.",
      imageSrc: "/furniture/custom/custom-cabinet-wall-unit-02.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট কাঠের ক্লাসিক নকশার সোফা",
      additionalImages: [
        "/furniture/custom/custom-cabinet-wall-unit-02.webp",
        "/furniture/living/living-classic-carved-sofa-07.webp",
        "/furniture/living/living-white-gold-carved-10.webp",
        "/furniture/living/living-gold-trim-armchair-08.webp",
      ],
    },
    {
      id: "living-gold-trim",
      category: "living",
      categoryLabelBn: "লিভিং রুম",
      categoryLabelEn: "Living Room",
      titleBn: "কার্ভড লাক্সারি আর্মচেয়ার",
      titleEn: "Curved Luxury Armchair",
      descriptionBn: "ড্রয়িং রুমের আভিজাত্যের জন্য ক্লাসিক নকশার কাঠের আর্মচেয়ার।",
      descriptionEn: "Aristocratic accent armchair with golden trim contours and plush seating.",
      imageSrc: "/furniture/living/living-gold-trim-armchair-08.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট কার্ভড লাক্সারি আর্মচেয়ার",
      additionalImages: [
        "/furniture/living/living-gold-trim-armchair-08.webp",
        "/furniture/living/living-royal-blue-sofa-02.webp",
        "/assets/gallery/luxury-embroidery-sofa-set-jpeg.webp",
        "/furniture/living/living-white-gold-carved-10.webp",
      ],
    },
    {
      id: "living-glass-center",
      category: "living",
      categoryLabelBn: "লিভিং রুম",
      categoryLabelEn: "Living Room",
      titleBn: "কাঠ ও গ্লাসের সেন্টার টেবিল",
      titleEn: "Glass Top Hardwood Center Table",
      descriptionBn: "সোফা সেটের সাথে মানানসই কাঠের ও গ্লাসের সেন্টার টেবিল।",
      descriptionEn: "Sturdy hardwood frame paired with a tempered glass top for modern drawing rooms.",
      imageSrc: "/furniture/living/living-glass-center-table-09.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট কাঠ ও গ্লাসের সেন্টার টেবিল",
      additionalImages: [
        "/furniture/living/living-glass-center-table-09.webp",
        "/furniture/living/living-sectional-sofa-01.webp",
        "/assets/hero/heaven-classic-living-hero.webp",
        "/furniture/living/living-yellow-sectional-05.webp",
      ],
    },
    {
      id: "living-white-gold",
      category: "living",
      categoryLabelBn: "লিভিং রুম",
      categoryLabelEn: "Living Room",
      titleBn: "রয়্যাল কার্ভড নকশা সোফা",
      titleEn: "Royal White & Gold Carved Sofa",
      descriptionBn: "বিশেষ কারুকাজ খচিত রাজকীয় ক্লাসিক সোফা সেট।",
      descriptionEn: "Regal artisan-carved wooden sofa finished with heated Italian white-gold lacquer.",
      imageSrc: "/furniture/living/living-white-gold-carved-10.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট রয়্যাল কার্ভড নকশা সোফা",
      additionalImages: [
        "/furniture/living/living-white-gold-carved-10.webp",
        "/furniture/living/living-classic-carved-sofa-07.webp",
        "/furniture/living/living-gold-trim-armchair-08.webp",
        "/furniture/custom/custom-wall-showcase-01.webp",
      ],
    },

    // --- BEDROOM ---
    {
      id: "bedroom-carved",
      category: "bedroom",
      categoryLabelBn: "বেডরুম",
      categoryLabelEn: "Bedroom",
      titleBn: "খোদাই করা কাঠের খাট",
      titleEn: "Hand-Carved Solid Wood Bed",
      descriptionBn: "নিপুণ হাতে খোদাই করা মজবুত কাঠের ক্লাসিক খাট।",
      descriptionEn: "Master-crafted king size bed featuring intricate hand-carved solid timber.",
      imageSrc: "/furniture/bedroom/bedroom-carved-wooden-bed-01.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট খোদাই করা কাঠের খাট",
      additionalImages: [
        "/furniture/bedroom/bedroom-carved-wooden-bed-01.webp",
        "/furniture/bedroom/bedroom-carved-wardrobe-07.webp",
        "/assets/collections/heaven-bedroom-royal-carved.webp",
        "/furniture/bedroom/bedroom-traditional-carved-08.webp",
      ],
      badge: "ক্লাসিক",
      badgeEn: "Classic",
    },
    {
      id: "bedroom-classic-double",
      category: "bedroom",
      categoryLabelBn: "বেডরুম",
      categoryLabelEn: "Bedroom",
      titleBn: "ক্লাসিক কাঠের ডাবল বেড",
      titleEn: "Classic Minimalist Double Bed",
      descriptionBn: "সহজ ও পরিচ্ছন্ন ডিজাইনের মজবুত কাঠের কিং সাইজ খাট।",
      descriptionEn: "Clean architectural geometry with enduring seasoned solid wood craftsmanship.",
      imageSrc: "/furniture/bedroom/bedroom-classic-double-bed-02.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট ক্লাসিক কাঠের ডাবল বেড",
      additionalImages: [
        "/furniture/bedroom/bedroom-classic-double-bed-02.webp",
        "/furniture/bedroom/bedroom-storage-bed-05.webp",
        "/assets/gallery/minimalist-bed-set-jpeg.webp",
        "/furniture/bedroom/bedroom-traditional-carved-08.webp",
      ],
    },
    {
      id: "bedroom-upholstered",
      category: "bedroom",
      categoryLabelBn: "বেডরুম",
      categoryLabelEn: "Bedroom",
      titleBn: "কুশন হেডবোর্ড আধুনিক খাট",
      titleEn: "Modern Upholstered Headboard Bed",
      descriptionBn: "আধুনিক ফ্ল্যাটের জন্য আরামদায়ক সফট কুশন হেডবোর্ড খাট।",
      descriptionEn: "Soft padded headboard offering supreme backrest comfort for contemporary apartments.",
      imageSrc: "/furniture/bedroom/bedroom-upholstered-modern-bed-03.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট কুশন হেডবোর্ড আধুনিক খাট",
      additionalImages: [
        "/furniture/bedroom/bedroom-upholstered-modern-bed-03.webp",
        "/furniture/bedroom/bedroom-teal-upholstered-bed-06.webp",
        "/furniture/bedroom/bedroom-tufted-fabric-bed-04.webp",
        "/assets/collections/heaven-bedroom-emerald-modern.webp",
      ],
      badge: "আধুনিক",
      badgeEn: "Modern",
    },
    {
      id: "bedroom-tufted",
      category: "bedroom",
      categoryLabelBn: "বেডরুম",
      categoryLabelEn: "Bedroom",
      titleBn: "ফ্যাব্রিক টাফটেড আধুনিক খাট",
      titleEn: "Fabric Tufted Luxury Bed",
      descriptionBn: "মার্জিত ফিনিশিং ও আরামদায়ক ফ্যাব্রিক হেডবোর্ডযুক্ত খাট।",
      descriptionEn: "Diamond-tufted upholstered headboard with polished solid wood support rails.",
      imageSrc: "/furniture/bedroom/bedroom-tufted-fabric-bed-04.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট ফ্যাব্রিক টাফটেড আধুনিক খাট",
      additionalImages: [
        "/furniture/bedroom/bedroom-tufted-fabric-bed-04.webp",
        "/furniture/bedroom/bedroom-upholstered-modern-bed-03.webp",
        "/assets/gallery/minimalist-bed-set-jpeg.webp",
        "/furniture/bedroom/bedroom-storage-bed-05.webp",
      ],
    },
    {
      id: "bedroom-storage",
      category: "bedroom",
      categoryLabelBn: "বেডরুম",
      categoryLabelEn: "Bedroom",
      titleBn: "স্টোরেজ ড্রয়ারযুক্ত খাট",
      titleEn: "Solid Wood Bed with Under-Storage",
      descriptionBn: "নিচে প্রয়োজনীয় জিনিস রাখার ড্রয়ার সুবিধাসহ মজবুত খাট।",
      descriptionEn: "Heavy-duty bed frame with smoothly gliding under-bed storage drawers.",
      imageSrc: "/furniture/bedroom/bedroom-storage-bed-05.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট স্টোরেজ ড্রয়ারযুক্ত খাট",
      additionalImages: [
        "/furniture/bedroom/bedroom-storage-bed-05.webp",
        "/furniture/bedroom/bedroom-classic-double-bed-02.webp",
        "/furniture/bedroom/bedroom-tufted-fabric-bed-04.webp",
        "/furniture/bedroom/bedroom-carved-wardrobe-07.webp",
      ],
    },
    {
      id: "bedroom-teal-upholstered",
      category: "bedroom",
      categoryLabelBn: "বেডরুম",
      categoryLabelEn: "Bedroom",
      titleBn: "ভেলভেট কুশন বিলাসবহুল খাট",
      titleEn: "Velvet Upholstered Luxury Bed",
      descriptionBn: "প্রিমিয়াম ভেলভেট ফেব্রিকের হেডবোর্ডযুক্ত আধুনিক খাট।",
      descriptionEn: "Plush velvet headboard paired with solid wood base and refined aesthetic.",
      imageSrc: "/furniture/bedroom/bedroom-teal-upholstered-bed-06.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট ভেলভেট কুশন বিলাসবহুল খাট",
      additionalImages: [
        "/furniture/bedroom/bedroom-teal-upholstered-bed-06.webp",
        "/furniture/bedroom/bedroom-upholstered-modern-bed-03.webp",
        "/assets/collections/heaven-bedroom-emerald-modern.webp",
        "/assets/gallery/luxury-bed-png.webp",
      ],
    },
    {
      id: "bedroom-wardrobe",
      category: "bedroom",
      categoryLabelBn: "বেডরুম",
      categoryLabelEn: "Bedroom",
      titleBn: "কাঠের খোদাই করা আলমারি",
      titleEn: "Hand-Carved Wooden Wardrobe",
      descriptionBn: "পোশাক ও প্রয়োজনীয় সামগ্রী গোছানোর মজবুত কাঠের আলমারি।",
      descriptionEn: "High-capacity solid hardwood wardrobe with deep shelving and hanging chambers.",
      imageSrc: "/furniture/bedroom/bedroom-carved-wardrobe-07.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট কাঠের খোদাই করা আলমারি",
      additionalImages: [
        "/furniture/bedroom/bedroom-carved-wardrobe-07.webp",
        "/furniture/bedroom/bedroom-carved-wooden-bed-01.webp",
        "/assets/collections/heaven-bedroom-royal-carved.webp",
        "/furniture/bedroom/bedroom-traditional-carved-08.webp",
      ],
    },
    {
      id: "bedroom-traditional-carved",
      category: "bedroom",
      categoryLabelBn: "বেডরুম",
      categoryLabelEn: "Bedroom",
      titleBn: "ঐতিহ্যবাহী নকশার কাঠের খাট",
      titleEn: "Heritage Royal Carved Bed",
      descriptionBn: "আসল কাঠের দীর্ঘস্থায়ী ঐতিহ্যবাহী খোদাই নকশার খাট।",
      descriptionEn: "100% seasoned Chittagong timber bed with authentic royal arch carvings.",
      imageSrc: "/furniture/bedroom/bedroom-traditional-carved-08.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট ঐতিহ্যবাহী নকশার কাঠের খাট",
      additionalImages: [
        "/furniture/bedroom/bedroom-traditional-carved-08.webp",
        "/furniture/bedroom/bedroom-carved-wooden-bed-01.webp",
        "/furniture/bedroom/bedroom-carved-wardrobe-07.webp",
        "/assets/collections/heaven-bedroom-royal-carved.webp",
      ],
    },

    // --- DINING ---
    {
      id: "dining-solid-wood",
      category: "dining",
      categoryLabelBn: "ডাইনিং",
      categoryLabelEn: "Dining",
      titleBn: "কাঠের ডাইনিং টেবিল ও চেয়ার সেট",
      titleEn: "Solid Wood Dining Table & Chairs",
      descriptionBn: "মজবুত কাঠের সম্পূর্ণ পরিবারের ডাইনিং সেট।",
      descriptionEn: "Heavy seasoned timber dining suite crafted for lasting family gatherings.",
      imageSrc: "/furniture/dining/dining-solid-wood-table-set-01.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট কাঠের ডাইনিং টেবিল ও চেয়ার সেট",
      additionalImages: [
        "/furniture/dining/dining-solid-wood-table-set-01.webp",
        "/furniture/dining/dining-six-seater-wood-table-02.webp",
        "/furniture/dining/dining-cushion-chair-table-04.webp",
        "/furniture/dining/dining-dark-wood-dining-set-03.webp",
      ],
      badge: "জনপ্রিয়",
      badgeEn: "Popular",
    },
    {
      id: "dining-six-seater",
      category: "dining",
      categoryLabelBn: "ডাইনিং",
      categoryLabelEn: "Dining",
      titleBn: "৬ সিটের কাঠের ডাইনিং টেবিল",
      titleEn: "6-Seater Family Dining Table",
      descriptionBn: "পরিবারের জন্য ৬ সিটের আরামদায়ক কাঠের ডাইনিং সেট।",
      descriptionEn: "Spacious 6-chair dining arrangement with heat-resistant lacquer finish.",
      imageSrc: "/furniture/dining/dining-six-seater-wood-table-02.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট ৬ সিটের কাঠের ডাইনিং টেবিল",
      additionalImages: [
        "/furniture/dining/dining-six-seater-wood-table-02.webp",
        "/furniture/dining/dining-solid-wood-table-set-01.webp",
        "/furniture/dining/dining-cushion-chair-table-04.webp",
        "/furniture/dining/dining-dark-wood-dining-set-03.webp",
      ],
    },
    {
      id: "dining-dark-wood",
      category: "dining",
      categoryLabelBn: "ডাইনিং",
      categoryLabelEn: "Dining",
      titleBn: "ক্লাসিক কাঠের ডাইনিং টেবিল সেট",
      titleEn: "Classic Polished Dining Set",
      descriptionBn: "মসৃণ ফিনিশের মার্জিত ও টেকসই কাঠের ডাইনিং সেট।",
      descriptionEn: "Rich walnut polished dining table with ergonomically curved supportive chairs.",
      imageSrc: "/furniture/dining/dining-dark-wood-dining-set-03.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট ক্লাসিক কাঠের ডাইনিং টেবিল সেট",
      additionalImages: [
        "/furniture/dining/dining-dark-wood-dining-set-03.webp",
        "/furniture/dining/dining-solid-wood-table-set-01.webp",
        "/furniture/dining/dining-six-seater-wood-table-02.webp",
        "/furniture/dining/dining-cushion-chair-table-04.webp",
      ],
    },
    {
      id: "dining-cushion",
      category: "dining",
      categoryLabelBn: "ডাইনিং",
      categoryLabelEn: "Dining",
      titleBn: "কুশন চেয়ার ডাইনিং সেট",
      titleEn: "Cushioned Chair Dining Suite",
      descriptionBn: "আরামদায়ক কুশন সিটের মার্জিত ডাইনিং টেবিল ও চেয়ার।",
      descriptionEn: "High-density cushioned chairs providing long meal comfort and modern elegance.",
      imageSrc: "/furniture/dining/dining-cushion-chair-table-04.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট কুশন চেয়ার ডাইনিং সেট",
      additionalImages: [
        "/furniture/dining/dining-cushion-chair-table-04.webp",
        "/furniture/dining/dining-six-seater-wood-table-02.webp",
        "/furniture/dining/dining-dark-wood-dining-set-03.webp",
        "/furniture/dining/dining-round-rotating-table-05.webp",
      ],
    },
    {
      id: "dining-round",
      category: "dining",
      categoryLabelBn: "ডাইনিং",
      categoryLabelEn: "Dining",
      titleBn: "গোল ডাইনিং টেবিল সেট",
      titleEn: "Round Hardwood Dining Table",
      descriptionBn: "ঘরোয়া খাবার ও আড্ডার জন্য রাউন্ড ডাইনিং টেবিল সেট।",
      descriptionEn: "Intimate circular dining table perfect for cozy family conversations and dining.",
      imageSrc: "/furniture/dining/dining-round-rotating-table-05.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট গোল ডাইনিং টেবিল সেট",
      additionalImages: [
        "/furniture/dining/dining-round-rotating-table-05.webp",
        "/furniture/dining/dining-oval-polished-set-06.webp",
        "/furniture/dining/dining-cushion-chair-table-04.webp",
        "/furniture/dining/dining-solid-wood-table-set-01.webp",
      ],
    },
    {
      id: "dining-oval",
      category: "dining",
      categoryLabelBn: "ডাইনিং",
      categoryLabelEn: "Dining",
      titleBn: "ওভাল সাইজ ডাইনিং টেবিল সেট",
      titleEn: "Oval Polished Dining Suite",
      descriptionBn: "মসৃণ ফিনিশ ও দৃষ্টিনন্দন ডিজাইনের ওভাল ডাইনিং সেট।",
      descriptionEn: "Graceful oval profile with rounded corners and hand-buffed smooth lacquer.",
      imageSrc: "/furniture/dining/dining-oval-polished-set-06.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট ওভাল সাইজ ডাইনিং টেবিল সেট",
      additionalImages: [
        "/furniture/dining/dining-oval-polished-set-06.webp",
        "/furniture/dining/dining-round-rotating-table-05.webp",
        "/furniture/dining/dining-solid-wood-table-set-01.webp",
        "/assets/collections/heaven-dining-marble-luxury.webp",
      ],
    },
    {
      id: "dining-marble",
      category: "dining",
      categoryLabelBn: "ডাইনিং",
      categoryLabelEn: "Dining",
      titleBn: "মার্বেল টপ ডাইনিং টেবিল",
      titleEn: "Marble Top Luxury Dining Table",
      descriptionBn: "মার্বেল টপের আধুনিক ও দৃষ্টিনন্দন ডাইনিং সেট।",
      descriptionEn: "Polished composite marble tabletop anchored on reinforced solid wood legs.",
      imageSrc: "/furniture/dining/dining-marble-top-table-07.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট মার্বেল টপ ডাইনিং টেবিল",
      additionalImages: [
        "/furniture/dining/dining-marble-top-table-07.webp",
        "/assets/collections/heaven-dining-marble-luxury.webp",
        "/assets/gallery/luxury-dining-set-jpeg.webp",
        "/furniture/dining/dining-oval-polished-set-06.webp",
      ],
      badge: "শোরুম ডিসপ্লে",
      badgeEn: "Showroom Display",
    },

    // --- CUSTOM ---
    {
      id: "custom-showcase",
      category: "custom",
      categoryLabelBn: "কাস্টম",
      categoryLabelEn: "Custom Made",
      titleBn: "ওয়াল ডিসপ্লে শোকেস",
      titleEn: "Bespoke Wall Display Showcase",
      descriptionBn: "আপনার ড্রয়িং রুমের দেয়ালের মাপ অনুযায়ী কাস্টম ওয়াল শোকেস।",
      descriptionEn: "Tailored to your exact drawing room wall dimensions with integrated display shelving.",
      imageSrc: "/furniture/custom/custom-wall-showcase-bespoke.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট ওয়াল ডিসপ্লে শোকেস",
      additionalImages: [
        "/furniture/custom/custom-wall-showcase-bespoke.webp",
        "/furniture/custom/custom-glass-showcase-03.webp",
        "/furniture/custom/custom-wall-unit-storage.webp",
        "/furniture/bedroom/bedroom-carved-wardrobe-07.webp",
      ],
      badge: "কাস্টম মাপ",
      badgeEn: "Custom Size",
    },
    {
      id: "custom-wall-unit",
      category: "custom",
      categoryLabelBn: "কাস্টম",
      categoryLabelEn: "Custom Made",
      titleBn: "কাস্টম ওয়াল ইউনিট কেবিনেট",
      titleEn: "Custom TV Wall Unit & Cabinet",
      descriptionBn: "নির্দিষ্ট দেয়ালের মাপে তৈরি টিভি ও স্টোরেজ ইউনিট।",
      descriptionEn: "Custom built-in media console and storage cabinet customized to your space.",
      imageSrc: "/furniture/custom/custom-wall-unit-storage.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট কাস্টম ওয়াল ইউনিট কেবিনেট",
      additionalImages: [
        "/furniture/custom/custom-wall-unit-storage.webp",
        "/furniture/custom/custom-modular-cabinet-04.webp",
        "/furniture/custom/custom-credenza-sideboard.webp",
        "/furniture/custom/custom-wall-showcase-bespoke.webp",
      ],
    },
    {
      id: "custom-glass",
      category: "custom",
      categoryLabelBn: "কাস্টম",
      categoryLabelEn: "Custom Made",
      titleBn: "গ্লাস ডোর ডিসপ্লে শোকেস",
      titleEn: "Glass Door Display Showcase",
      descriptionBn: "শোপিস ও কাঁচের তৈজসপত্র সাজিয়ে রাখার গ্লাস শোকেস।",
      descriptionEn: "Illuminated glass cabinetry for showpieces, porcelain, and curated dinnerware.",
      imageSrc: "/furniture/custom/custom-glass-showcase-03.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট গ্লাস ডোর ডিসপ্লে শোকেস",
      additionalImages: [
        "/furniture/custom/custom-glass-showcase-03.webp",
        "/furniture/custom/custom-wall-showcase-bespoke.webp",
        "/furniture/custom/custom-credenza-sideboard.webp",
        "/furniture/custom/custom-modular-cabinet-04.webp",
      ],
    },
    {
      id: "custom-modular",
      category: "custom",
      categoryLabelBn: "কাস্টম",
      categoryLabelEn: "Custom Made",
      titleBn: "মডুলার স্টোরেজ ক্যাবিনেট",
      titleEn: "Modular Storage Cabinet",
      descriptionBn: "ঘরের প্রয়োজন ও জায়গা অনুযায়ী সাইজ পরিবর্তনযোগ্য ক্যাবিনেট।",
      descriptionEn: "Versatile modular storage cabinetry adaptable to room dimensions and storage needs.",
      imageSrc: "/furniture/custom/custom-modular-cabinet-04.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট মডুলার স্টোরেজ ক্যাবিনেট",
      additionalImages: [
        "/furniture/custom/custom-modular-cabinet-04.webp",
        "/furniture/custom/custom-credenza-sideboard.webp",
        "/furniture/custom/custom-wall-unit-storage.webp",
        "/furniture/custom/custom-glass-showcase-03.webp",
      ],
    },
  ] as GalleryItem[],
} as const;

// Verified Milestones from Company Deck (Page 6 Highlights)
export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "২০২০",
    yearEn: "2020",
    titleBn: "হেভেন ফার্নিচার মার্টের সূচনা",
    titleEn: "Inception of Heaven Furniture Mart",
    descriptionBn: "ব্যবস্থাপনা পরিচালক আবুল কালাম ভূঁইয়ার উদ্যোগে চট্টগ্রামে যাত্রা শুরু।",
    descriptionEn: "Founded in Chattogram under the vision of Managing Director Abul Kalam Bhuiyan.",
    imageSrc: "/assets/craftsmanship/heaven-handcrafted-sofa-process.webp",
    imageAlt: "হেভেন ফার্নিচার মার্ট কারিগরদের কাজের দৃশ্য",
    captionBn: "দক্ষ কারিগরের হাতে তৈরি কাঠের ফ্রেম",
    captionEn: "Artisanal wooden frames crafted by master woodworkers",
  },
  {
    year: "২০২১",
    yearEn: "2021",
    titleBn: "আগ্রাবাদ শোরুম উদ্বোধন",
    titleEn: "Agrabad Flagship Showroom Inauguration",
    descriptionBn: "চট্টগ্রামের আগ্রাবাদ এক্সেস রোডে আমাদের নিজস্ব শোরুমের শুভ সূচনা ও নিবন্ধন।",
    descriptionEn: "Grand opening and registration of our flagship showroom on Agrabad Access Road.",
    imageSrc: "/assets/showroom/heaven-agrabad-flagship-building.webp",
    imageAlt: "হেভেন ফার্নিচার মার্ট আগ্রাবাদ শোরুম ভবন",
    captionBn: "আগ্রাবাদ এক্সেস রোডে আমাদের শোরুম ভবন",
    captionEn: "Our flagship showroom building on Agrabad Access Road",
  },
  {
    year: "২০২৪ ও ২০২৫",
    yearEn: "2024 & 2025",
    titleBn: "আন্তর্জাতিক ফার্নিচার মেলায় অংশগ্রহণ",
    titleEn: "International Furniture Fair Pavilions",
    descriptionBn: "চট্টগ্রাম আন্তর্জাতিক ফার্নিচার মেলায় নিজস্ব প্যাভিলিয়ন নিয়ে সরাসরি অংশগ্রহণ।",
    descriptionEn: "Exclusive pavilions showcased at the Chattogram International Furniture Fair.",
    imageSrc: "/assets/trust/fairs/heaven-fair-pavilion-team-standing.webp",
    imageAlt: "চট্টগ্রাম ফার্নিচার মেলায় হেভেন ফার্নিচার মার্টের প্যাভিলিয়ন ও টিম",
    captionBn: "মেলায় হেভেন প্যাভিলিয়নের সামনে আমাদের টিম",
    captionEn: "Our team standing proudly at the Heaven Furniture pavilion",
  },
  {
    year: "২০২৫",
    yearEn: "2025",
    titleBn: "চেম্বার অব কমার্স সদস্যভুক্ত",
    titleEn: "Chamber of Commerce Membership",
    descriptionBn: "চট্টগ্রাম চেম্বার অব কমার্স অ্যান্ড ইন্ডাস্ট্রিজ-এর সম্মানিত সদস্যপদ লাভ।",
    descriptionEn: "Inducted into the Chattogram Chamber of Commerce & Industry.",
    imageSrc: "/assets/trust/fairs/heaven-fair-booth-team-seated.webp",
    imageAlt: "চট্টগ্রাম ফার্নিচার মেলা স্টলে আমাদের টিম",
    captionBn: "মেলা প্রাঙ্গণে হেভেন স্টলে আমাদের টিম",
    captionEn: "Heaven Furniture consultation team at the exhibition booth",
  },
  {
    year: "২০২৬",
    yearEn: "2026",
    titleBn: "BFIOA স্বীকৃতি ও সম্মাননা",
    titleEn: "BFIOA Recognition & Award Crest",
    descriptionBn: "বাংলাদেশ ফার্নিচার শিল্প মালিক সমিতি (BFIOA) থেকে দেশব্যাপী সম্মাননা স্মারক গ্রহণ।",
    descriptionEn: "Honoured with national memorial crest by Bangladesh Furniture Industry Owners Association.",
    imageSrc: "/assets/trust/recognition/heaven-fair-participant-crest-bfioa.webp",
    imageAlt: "BFMA ও মেলা কর্তৃপক্ষ কর্তৃক প্রদত্ত সম্মাননা ক্রেস্ট",
    captionBn: "BFMA ও মেলা সম্মাননা স্মারক ক্রেস্ট",
    captionEn: "BFMA & Fair Authority Honour Crest",
  },
];

// Curated Real Craftsmanship & Showroom Local Videos (Local MP4, No Iframes)
export const CRAFT_VIDEOS: CraftVideoItem[] = [
  {
    id: "dining-craft",
    titleBn: "ডাইনিং টেবিল কাস্টমাইজেশন ও নিখুঁত ফিনিশিং",
    titleEn: "Dining Table Craftsmanship & Lacquer Finishing",
    descriptionBn: "আমাদের দক্ষ কারিগরের হাতে তৈরি কাস্টমাইজড ডাইনিং টেবিল সেট।",
    descriptionEn: "Master artisan hand-crafting a customized solid hardwood dining suite.",
    posterSrc: "/furniture/dining/dining-solid-wood-table-set-01.webp",
    localVideoSrc: "/videos/craftsmanship/heaven-dining-craftsmanship.mp4",
    badgeBn: "ডাইনিং কারিগরি",
    badgeEn: "Dining Craft",
  },
  {
    id: "sofa-detailing",
    titleBn: "সোফা সেলাই ও নিখুঁত ডিটেইলিং",
    titleEn: "Sofa Upholstery & Precision Detailing",
    descriptionBn: "প্রতিটি কুশন পিন ও নিখুঁত স্টিচিংয়ের বাস্তব দৃশ্য।",
    descriptionEn: "Authentic workshop footage of precision cushion tufting and trim nailing.",
    posterSrc: "/assets/craftsmanship/heaven-handcrafted-sofa-process.webp",
    localVideoSrc: "/videos/craftsmanship/heaven-sofa-detailing.mp4",
    badgeBn: "সোফা ফিনিশিং",
    badgeEn: "Sofa Finishing",
  },
  {
    id: "woodworking",
    titleBn: "কাঠের সূক্ষ্ম কার্ভ ও কাঠামো তৈরি",
    titleEn: "Hardwood Carving & Frame Architecture",
    descriptionBn: "দক্ষ কারিগরদের হাতে কাঠের মসৃণ বাঁক ও খোদাই কাজ।",
    descriptionEn: "Artisans shaping seasoned timber curves and intricate heritage relief carvings.",
    posterSrc: "/furniture/bedroom/bedroom-carved-wooden-bed-01.webp",
    localVideoSrc: "/videos/craftsmanship/heaven-woodworking-process.mp4",
    badgeBn: "কাঠের কাজ",
    badgeEn: "Woodworking",
  },
  {
    id: "bedroom-showroom",
    titleBn: "আগ্রাবাদ শোরুমে বেডরুম ডিসপ্লে",
    titleEn: "Agrabad Showroom Bedroom Suite Display",
    descriptionBn: "আগ্রাবাদ শোরুমে সরাসরি সাজানো মাস্টার বেডরুম সেটের ভিডিও।",
    descriptionEn: "Walkthrough of authentic luxury master bedroom suites displayed on our showroom floor.",
    posterSrc: "/furniture/bedroom/bedroom-classic-double-bed-02.webp",
    localVideoSrc: "/videos/showroom/heaven-bedroom-showroom.mp4",
    badgeBn: "শোরুম ডিসপ্লে",
    badgeEn: "Showroom Display",
  },
];
