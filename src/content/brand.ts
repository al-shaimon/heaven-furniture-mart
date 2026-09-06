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
  category: "living" | "bedroom" | "dining" | "office" | "custom";
  categoryLabelBn: string;
  titleBn: string;
  descriptionBn: string;
  imageSrc: string;
  imageAlt: string;
  additionalImages: string[];
  badge?: string;
}

export interface CustomStep {
  stepNumber: string;
  titleBn: string;
  descriptionBn: string;
}

export interface TimelineMilestone {
  year: string;
  titleBn: string;
  descriptionBn: string;
  imageSrc: string;
  imageAlt: string;
  captionBn: string;
}

export interface CraftVideoItem {
  id: string;
  titleBn: string;
  descriptionBn: string;
  posterSrc: string;
  localVideoSrc: string;
  badgeBn: string;
}

export const BRAND_CONFIG = {
  nameBn: "হেভেন ফার্নিচার মার্ট",
  nameEn: "Heaven Furniture Mart",
  taglineBn: "আপনার ঘরের জন্য পছন্দের ফার্নিচার।",
  taglineEn: "Home, Office & Custom Furniture · Agrabad, Chattogram",
  shortSummaryBn: "বাসা বা অফিসের জন্য ফার্নিচার লাগবে? আপনার জায়গার মাপ অনুযায়ী ফার্নিচারও তৈরি করে দিই।",
  
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
      descriptionBn: "বাংলাদেশ ফার্নিচার ম্যানুফ্যাকচারার্স অ্যাসোসিয়েশন স্বীকৃতিপ্রাপ্ত প্রতিষ্ঠান।",
    },
    {
      titleBn: "চেম্বার অব কমার্স সদস্য",
      descriptionBn: "চট্টগ্রাম চেম্বার অব কমার্স অ্যান্ড ইন্ডাস্ট্রিজ-এর সদস্য।",
    },
    {
      titleBn: "ফার্নিচার মেলায় অংশগ্রহণ",
      descriptionBn: "চট্টগ্রাম আন্তর্জাতিক ফার্নিচার মেলায় নিজস্ব প্যাভিলিয়নে অংশগ্রহণ।",
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
      categoryLabelBn: "লিভিং ও ড্রয়িং",
      titleBn: "সেকশনাল ড্রয়িং সোফা সেট",
      descriptionBn: "আরামদায়ক কুশন ও আধুনিক লিভিং রুমের জন্য সোফা সেট।",
      imageSrc: "/furniture/living/living-sectional-sofa-01.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট সেকশনাল ড্রয়িং সোফা সেট",
      additionalImages: [
        "/furniture/living/living-sectional-sofa-01.webp",
        "/furniture/living/living-modern-beige-sofa-03.webp",
        "/furniture/living/living-glass-center-table-09.webp",
      ],
      badge: "জনপ্রিয়",
    },
    {
      id: "living-royal-blue",
      category: "living",
      categoryLabelBn: "লিভিং ও ড্রয়িং",
      titleBn: "খোদাই করা রয়্যাল ব্লু সোফা",
      descriptionBn: "কাঠের ক্লাসিক কারুকাজ ও সফট ব্লু কুশন বিশিষ্ট সোফা।",
      imageSrc: "/furniture/living/living-royal-blue-sofa-02.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট খোদাই করা রয়্যাল ব্লু সোফা",
      additionalImages: [
        "/furniture/living/living-royal-blue-sofa-02.webp",
        "/furniture/living/living-classic-carved-sofa-07.webp",
        "/furniture/living/living-gold-trim-armchair-08.webp",
      ],
      badge: "ক্লাসিক",
    },
    {
      id: "living-modern-beige",
      category: "living",
      categoryLabelBn: "লিভিং ও ড্রয়িং",
      titleBn: "বেইজ কালার কুশন সোফা",
      descriptionBn: "ড্রয়িং রুমের জন্য সিম্পল ও আরামদায়ক সোফা সেট।",
      imageSrc: "/furniture/living/living-modern-beige-sofa-03.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট বেইজ কালার কুশন সোফা",
      additionalImages: [
        "/furniture/living/living-modern-beige-sofa-03.webp",
        "/furniture/living/living-l-shape-sofa-04.webp",
      ],
    },
    {
      id: "living-l-shape",
      category: "living",
      categoryLabelBn: "লিভিং ও ড্রয়িং",
      titleBn: "এল-শেপ ফ্যামিলি সোফা সেট",
      descriptionBn: "পরিবারের সবার একসাথে বসার উপযোগী কর্নার সোফা।",
      imageSrc: "/furniture/living/living-l-shape-sofa-04.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট এল-শেপ ফ্যামিলি সোফা সেট",
      additionalImages: [
        "/furniture/living/living-l-shape-sofa-04.webp",
        "/furniture/living/living-blue-l-shape-06.webp",
        "/furniture/living/living-yellow-sectional-05.webp",
      ],
      badge: "বেস্ট সেলার",
    },
    {
      id: "living-classic-carved",
      category: "living",
      categoryLabelBn: "লিভিং ও ড্রয়িং",
      titleBn: "কাঠের ক্লাসিক নকশার সোফা সেট",
      descriptionBn: "মজবুত কাঠের ফ্রেম ও ঐতিহ্যবাহী খোদাই নকশার সোফা।",
      imageSrc: "/furniture/living/living-classic-carved-sofa-07.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট কাঠের ক্লাসিক নকশার সোফা সেট",
      additionalImages: [
        "/furniture/living/living-classic-carved-sofa-07.webp",
        "/furniture/living/living-white-gold-carved-10.webp",
      ],
    },
    {
      id: "living-glass-center",
      category: "living",
      categoryLabelBn: "লিভিং ও ড্রয়িং",
      titleBn: "কাঠ ও গ্লাসের সেন্টার টেবিল",
      descriptionBn: "সোফা সেটের সাথে মানানসই সেন্টার টেবিল।",
      imageSrc: "/furniture/living/living-glass-center-table-09.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট কাঠ ও গ্লাসের সেন্টার টেবিল",
      additionalImages: [
        "/furniture/living/living-glass-center-table-09.webp",
        "/furniture/living/living-gold-trim-armchair-08.webp",
      ],
    },

    // --- BEDROOM ---
    {
      id: "bedroom-carved",
      category: "bedroom",
      categoryLabelBn: "বেডরুম",
      titleBn: "খোদাই করা কাঠের খাট",
      descriptionBn: "নিপুণ হাতে খোদাই করা মজবুত কাঠের ক্লাসিক খাট।",
      imageSrc: "/furniture/bedroom/bedroom-carved-wooden-bed-01.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট খোদাই করা কাঠের খাট",
      additionalImages: [
        "/furniture/bedroom/bedroom-carved-wooden-bed-01.webp",
        "/furniture/bedroom/bedroom-classic-double-bed-02.webp",
        "/furniture/bedroom/bedroom-traditional-carved-08.webp",
      ],
      badge: "ক্লাসিক",
    },
    {
      id: "bedroom-upholstered",
      category: "bedroom",
      categoryLabelBn: "বেডরুম",
      titleBn: "কুশন হেডবোর্ড আধুনিক খাট",
      descriptionBn: "আধুনিক ফ্ল্যাটের জন্য আরামদায়ক কুশন হেডবোর্ড খাট।",
      imageSrc: "/furniture/bedroom/bedroom-upholstered-modern-bed-03.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট কুশন হেডবোর্ড আধুনিক খাট",
      additionalImages: [
        "/furniture/bedroom/bedroom-upholstered-modern-bed-03.webp",
        "/furniture/bedroom/bedroom-teal-upholstered-bed-06.webp",
        "/furniture/bedroom/bedroom-tufted-fabric-bed-04.webp",
      ],
      badge: "আধুনিক",
    },
    {
      id: "bedroom-classic-double",
      category: "bedroom",
      categoryLabelBn: "বেডরুম",
      titleBn: "ক্লাসিক কাঠের ডাবল বেড",
      descriptionBn: "সহজ ও পরিচ্ছন্ন ডিজাইনের মজবুত কাঠের খাট।",
      imageSrc: "/furniture/bedroom/bedroom-classic-double-bed-02.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট ক্লাসিক কাঠের ডাবল বেড",
      additionalImages: [
        "/furniture/bedroom/bedroom-classic-double-bed-02.webp",
        "/furniture/bedroom/bedroom-storage-bed-05.webp",
      ],
    },
    {
      id: "bedroom-wardrobe",
      category: "bedroom",
      categoryLabelBn: "বেডরুম",
      titleBn: "কাঠের খোদাই করা আলমারি",
      descriptionBn: "কাপড় ও প্রয়োজনীয় জিনিস গোছানোর জন্য মজবুত আলমারি।",
      imageSrc: "/furniture/bedroom/bedroom-carved-wardrobe-07.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট কাঠের খোদাই করা আলমারি",
      additionalImages: [
        "/furniture/bedroom/bedroom-carved-wardrobe-07.webp",
      ],
    },
    {
      id: "bedroom-storage",
      category: "bedroom",
      categoryLabelBn: "বেডরুম",
      titleBn: "স্টোরেজ ড্রয়ারযুক্ত খাট",
      descriptionBn: "নিচে প্রয়োজনীয় জিনিস রাখার সুবিধাসহ স্টোরেজ খাট।",
      imageSrc: "/furniture/bedroom/bedroom-storage-bed-05.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট স্টোরেজ ড্রয়ারযুক্ত খাট",
      additionalImages: [
        "/furniture/bedroom/bedroom-storage-bed-05.webp",
        "/furniture/bedroom/bedroom-tufted-fabric-bed-04.webp",
      ],
    },

    // --- DINING ---
    {
      id: "dining-solid-wood",
      category: "dining",
      categoryLabelBn: "ডাইনিং",
      titleBn: "কাঠের ডাইনিং টেবিল ও চেয়ার সেট",
      descriptionBn: "মজবুত কাঠের তৈরি সম্পূর্ণ পরিবারের ডাইনিং সেট।",
      imageSrc: "/furniture/dining/dining-solid-wood-table-set-01.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট কাঠের ডাইনিং টেবিল ও চেয়ার সেট",
      additionalImages: [
        "/furniture/dining/dining-solid-wood-table-set-01.webp",
        "/furniture/dining/dining-six-seater-wood-table-02.webp",
        "/furniture/dining/dining-dark-wood-dining-set-03.webp",
      ],
      badge: "জনপ্রিয়",
    },
    {
      id: "dining-six-seater",
      category: "dining",
      categoryLabelBn: "ডাইনিং",
      titleBn: "৬ সিটের কাঠের ডাইনিং টেবিল",
      descriptionBn: "পরিবারের জন্য ৬ সিটের আরামদায়ক ডাইনিং সেট।",
      imageSrc: "/furniture/dining/dining-six-seater-wood-table-02.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট ৬ সিটের কাঠের ডাইনিং টেবিল",
      additionalImages: [
        "/furniture/dining/dining-six-seater-wood-table-02.webp",
        "/furniture/dining/dining-cushion-chair-table-04.webp",
      ],
    },
    {
      id: "dining-cushion",
      category: "dining",
      categoryLabelBn: "ডাইনিং",
      titleBn: "কুশন চেয়ার ডাইনিং সেট",
      descriptionBn: "আরামদায়ক কুশন সিটের মার্জিত ডাইনিং টেবিল ও চেয়ার।",
      imageSrc: "/furniture/dining/dining-cushion-chair-table-04.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট কুশন চেয়ার ডাইনিং সেট",
      additionalImages: [
        "/furniture/dining/dining-cushion-chair-table-04.webp",
        "/furniture/dining/dining-round-rotating-table-05.webp",
      ],
    },
    {
      id: "dining-round",
      category: "dining",
      categoryLabelBn: "ডাইনিং",
      titleBn: "গোল ডাইনিং টেবিল সেট",
      descriptionBn: "ঘরোয়া আড্ডা ও খাবারের জন্য রাউন্ড ডাইনিং সেট।",
      imageSrc: "/furniture/dining/dining-round-rotating-table-05.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট গোল ডাইনিং টেবিল সেট",
      additionalImages: [
        "/furniture/dining/dining-round-rotating-table-05.webp",
        "/furniture/dining/dining-oval-polished-set-06.webp",
      ],
    },
    {
      id: "dining-marble",
      category: "dining",
      categoryLabelBn: "ডাইনিং",
      titleBn: "মার্বেল টপ ডাইনিং টেবিল",
      descriptionBn: "মার্বেল টপের আধুনিক ও দৃষ্টিনন্দন ডাইনিং টেবিল।",
      imageSrc: "/furniture/dining/dining-marble-top-table-07.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট মার্বেল টপ ডাইনিং টেবিল",
      additionalImages: [
        "/furniture/dining/dining-marble-top-table-07.webp",
        "/furniture/dining/dining-solid-wood-table-set-01.webp",
      ],
      badge: "শোরুম ডিসপ্লে",
    },
    // --- OFFICE ---
    {
      id: "office-desk",
      category: "office",
      categoryLabelBn: "অফিস",
      titleBn: "এক্সিকিউটিভ অফিস টেবিল",
      descriptionBn: "অফিস ও স্টাডি রুমের জন্য মানানসই এক্সিকিউটিভ ডেস্ক।",
      imageSrc: "/furniture/office/office-executive-desk-01.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট এক্সিকিউটিভ অফিস টেবিল",
      additionalImages: [
        "/furniture/office/office-executive-desk-01.webp",
        "/furniture/office/office-storage-cabinet-03.webp",
      ],
    },
    {
      id: "office-meeting",
      category: "office",
      categoryLabelBn: "অফিস",
      titleBn: "অফিস কনফারেন্স ও মিটিং টেবিল",
      descriptionBn: "টিম মিটিং ও কনফারেন্সের জন্য বড় সাইজের অফিস টেবিল।",
      imageSrc: "/furniture/office/office-meeting-table-02.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট অফিস কনফারেন্স ও মিটিং টেবিল",
      additionalImages: [
        "/furniture/office/office-meeting-table-02.webp",
      ],
    },
    {
      id: "office-cabinet",
      category: "office",
      categoryLabelBn: "অফিস",
      titleBn: "ফাইল ও অফিস স্টোরেজ কেবিনেট",
      descriptionBn: "অফিসের প্রয়োজনীয় ফাইল ও ডকুমেন্টস রাখার কেবিনেট।",
      imageSrc: "/furniture/office/office-storage-cabinet-03.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট ফাইল ও অফিস স্টোরেজ কেবিনেট",
      additionalImages: [
        "/furniture/office/office-storage-cabinet-03.webp",
        "/furniture/office/office-executive-desk-01.webp",
      ],
    },
    // --- CUSTOM ---
    {
      id: "custom-showcase",
      category: "custom",
      categoryLabelBn: "কাস্টম",
      titleBn: "ওয়াল ডিসপ্লে শোকেস",
      descriptionBn: "আপনার ড্রয়িং রুমের মাপ অনুযায়ী কাস্টম ওয়াল শোকেস।",
      imageSrc: "/furniture/custom/custom-wall-showcase-01.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট ওয়াল ডিসপ্লে শোকেস",
      additionalImages: [
        "/furniture/custom/custom-wall-showcase-01.webp",
        "/furniture/custom/custom-glass-showcase-03.webp",
      ],
      badge: "কাস্টম মাপ",
    },
    {
      id: "custom-wall-unit",
      category: "custom",
      categoryLabelBn: "কাস্টম",
      titleBn: "কাস্টম ওয়াল ইউনিট কেবিনেট",
      descriptionBn: "নির্দিষ্ট দেয়ালের মাপে তৈরি টিভি ও স্টোরেজ ইউনিট।",
      imageSrc: "/furniture/custom/custom-cabinet-wall-unit-02.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট কাস্টম ওয়াল ইউনিট কেবিনেট",
      additionalImages: [
        "/furniture/custom/custom-cabinet-wall-unit-02.webp",
        "/furniture/custom/custom-modular-cabinet-04.webp",
      ],
    },
    {
      id: "custom-glass",
      category: "custom",
      categoryLabelBn: "কাস্টম",
      titleBn: "গ্লাস ডোর ডিসপ্লে শোকেস",
      descriptionBn: "শোপিস ও কাঁচের জিনিসপত্র সাজিয়ে রাখার গ্লাস শোকেস।",
      imageSrc: "/furniture/custom/custom-glass-showcase-03.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট গ্লাস ডোর ডিসপ্লে শোকেস",
      additionalImages: [
        "/furniture/custom/custom-glass-showcase-03.webp",
      ],
    },
  ] as GalleryItem[],
} as const;

// Verified Milestones from Company Deck (Page 6 Highlights)
export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "২০২০",
    titleBn: "হেভেন ফার্নিচার মার্টের সূচনা",
    descriptionBn: "ব্যবস্থাপনা পরিচালক আবুল কালাম ভূঁইয়ার উদ্যোগে চট্টগ্রামে যাত্রা শুরু।",
    imageSrc: "/assets/craftsmanship/heaven-handcrafted-sofa-process.webp",
    imageAlt: "হেভেন ফার্নিচার মার্ট কারিগরদের কাজের দৃশ্য",
    captionBn: "দক্ষ কারিগরের হাতে তৈরি কাঠের ফ্রেম",
  },
  {
    year: "২০২১",
    titleBn: "আগ্রাবাদ শোরুম উদ্বোধন",
    descriptionBn: "চট্টগ্রামের আগ্রাবাদ এক্সেস রোডে আমাদের নিজস্ব শোরুমের শুভ সূচনা ও নিবন্ধন।",
    imageSrc: "/assets/showroom/heaven-agrabad-flagship-building.webp",
    imageAlt: "হেভেন ফার্নিচার মার্ট আগ্রাবাদ শোরুম ভবন",
    captionBn: "আগ্রাবাদ এক্সেস রোডে আমাদের শোরুম ভবন",
  },
  {
    year: "২০২৪ ও ২০২৫",
    titleBn: "আন্তর্জাতিক ফার্নিচার মেলায় অংশগ্রহণ",
    descriptionBn: "চট্টগ্রাম আন্তর্জাতিক ফার্নিচার মেলায় নিজস্ব প্যাভিলিয়ন নিয়ে সরাসরি অংশগ্রহণ।",
    imageSrc: "/assets/trust/fairs/heaven-fair-pavilion-team-standing.webp",
    imageAlt: "চট্টগ্রাম ফার্নিচার মেলায় হেভেন ফার্নিচার মার্টের প্যাভিলিয়ন ও টিম",
    captionBn: "মেলায় হেভেন প্যাভিলিয়নের সামনে আমাদের টিম",
  },
  {
    year: "২০২৫",
    titleBn: "চেম্বার অব কমার্স সদস্যভুক্ত",
    descriptionBn: "চট্টগ্রাম চেম্বার অব কমার্স অ্যান্ড ইন্ডাস্ট্রিজ-এর সম্মানিত সদস্যপদ লাভ।",
    imageSrc: "/assets/trust/fairs/heaven-fair-booth-team-seated.webp",
    imageAlt: "চট্টগ্রাম ফার্নিচার মেলা স্টলে আমাদের টিম",
    captionBn: "মেলা প্রাঙ্গণে হেভেন স্টলে আমাদের টিম",
  },
  {
    year: "২০২৬",
    titleBn: "BFIOA স্বীকৃতি ও সম্মাননা",
    descriptionBn: "বাংলাদেশ ফার্নিচার শিল্প মালিক সমিতি (BFIOA) থেকে দেশব্যাপী সম্মাননা স্মারক গ্রহণ।",
    imageSrc: "/assets/trust/recognition/heaven-md-receiving-fair-crest.webp",
    imageAlt: "মঞ্চে সম্মাননা স্মারক গ্রহণ করছেন ব্যবস্থাপনা পরিচালক আবুল কালাম ভূঁইয়া",
    captionBn: "মঞ্চে ক্রেস্ট গ্রহণকালে ব্যবস্থাপনা পরিচালক আবুল কালাম ভূঁইয়া",
  },
];

// Curated Real Craftsmanship & Showroom Local Videos (Local MP4, No Iframes)
export const CRAFT_VIDEOS: CraftVideoItem[] = [
  {
    id: "dining-craft",
    titleBn: "ডাইনিং টেবিল কাস্টমাইজেশন ও নিখুঁত ফিনিশিং",
    descriptionBn: "আমাদের দক্ষ কারিগরের হাতে তৈরি কাস্টমাইজড ডাইনিং টেবিল সেট।",
    posterSrc: "/furniture/dining/dining-solid-wood-table-set-01.webp",
    localVideoSrc: "/videos/craftsmanship/heaven-dining-craftsmanship.mp4",
    badgeBn: "ডাইনিং কারিগরি",
  },
  {
    id: "sofa-detailing",
    titleBn: "সোফা সেলাই ও নিখুঁত ডিটেইলিং",
    descriptionBn: "প্রতিটি কুশন পিন ও নিখুঁত স্টিচিংয়ের বাস্তব দৃশ্য।",
    posterSrc: "/assets/craftsmanship/heaven-handcrafted-sofa-process.webp",
    localVideoSrc: "/videos/craftsmanship/heaven-sofa-detailing.mp4",
    badgeBn: "সোফা ফিনিশিং",
  },
  {
    id: "woodworking",
    titleBn: "কাঠের সূক্ষ্ম কার্ভ ও কাঠামো তৈরি",
    descriptionBn: "দক্ষ কারিগরদের হাতে কাঠের মসৃণ বাঁক ও খোদাই কাজ।",
    posterSrc: "/furniture/custom/custom-wall-showcase-01.webp",
    localVideoSrc: "/videos/craftsmanship/heaven-woodworking-process.mp4",
    badgeBn: "কাঠের কাজ",
  },
  {
    id: "bedroom-showroom",
    titleBn: "আগ্রাবাদ শোরুমে বেডরুম ডিসপ্লে",
    descriptionBn: "আগ্রাবাদ শোরুমে সরাসরি সাজানো মাস্টার বেডরুম সেটের ভিডিও।",
    posterSrc: "/furniture/bedroom/bedroom-classic-double-bed-02.webp",
    localVideoSrc: "/videos/showroom/heaven-bedroom-showroom.mp4",
    badgeBn: "শোরুম ডিসপ্লে",
  },
];
