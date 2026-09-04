/**
 * Heaven Furniture Mart - Single Authoritative Brand Content Layer
 * Sourced strictly from Section 35 of docs/PLAN.md, company deck, brochure, and official channels.
 * Pure, natural Bangladeshi Bangla throughout.
 */

export interface NavItem {
  label: string;
  labelEn: string;
  href: string;
}

export interface GalleryItem {
  id: string;
  category: "living" | "dining" | "bedroom" | "office" | "custom";
  categoryLabelBn: string;
  titleBn: string;
  titleEn: string;
  descriptionBn: string;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
}

export interface CustomStep {
  stepNumber: string;
  titleBn: string;
  descriptionBn: string;
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
    whatsAppUrl: "https://wa.me/8801960481983?text=%E0%A6%86%E0%A6%B8%E0%A6%B8%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A7%81%20%E0%A6%86%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%95%E0%A7%81%E0%A6%AE%2C%20%E0%A6%B9%E0%A7%87%E0%A6%AD%E0%A7%87%E0%A6%A8%20%E0%A6%AB%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A8%E0%A6%BF%E0%A6%9 displacement%8B%E0%A6%BE%E0%A6%B0%20%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%9F%E0%A7%87%20%E0%A6%AB%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%A8%E0%A6%BF%E0%A6%9 displacement%8B%E0%A6%BE%E0%A6%B0%20%E0%A6%B8%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A6%B0%E0%A7%8D%E0%A6%95%E0%A7%87%20%E0%A6%9C%E0%A6%BE%E0%A6%A8%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A7%84",
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
      descriptionBn: "চট্টগ্রাম চেম্বার অব কমার্সের অনুমোদিত সদস্য।",
    },
    {
      titleBn: "ফার্নিচার মেলায় অংশগ্রহণ",
      descriptionBn: "চট্টগ্রামের আন্তর্জাতিক ফার্নিচার মেলায় নিজস্ব প্যাভিলিয়নে অংশগ্রহণ।",
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

  // Full authentic photography gallery spanning Living, Bedroom, Dining, Office, and Custom
  gallery: [
    // Living
    {
      id: "living-hero",
      category: "living",
      categoryLabelBn: "লিভিং ও ড্রয়িং",
      titleBn: "ড্রয়িং রুম সোফা ও সেন্টার টেবিল সেট",
      titleEn: "Living Room Sofa & Center Table Set",
      descriptionBn: "আরামদায়ক কুশন ও ম্যাচিং সেন্টার টেবিল সহ সম্পূর্ণ ড্রয়িং রুম সোফা সেট।",
      imageSrc: "/assets/hero/heaven-classic-living-hero.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট ড্রয়িং রুম সোফা ও সেন্টার টেবিল সেট",
      badge: "জনপ্রিয়",
    },
    {
      id: "living-embroidery",
      category: "living",
      categoryLabelBn: "লিভিং ও ড্রয়িং",
      titleBn: "লাক্সারি এমব্রয়ডারি সোফা সেট",
      titleEn: "Luxury Embroidery Sofa Set",
      descriptionBn: "সুন্দর কারুকাজ ও প্রিমিয়াম ফ্যাব্রিক ফিনিশের লাক্সারি সোফা।",
      imageSrc: "/assets/gallery/luxury-embroidery-sofa-set-jpeg.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট লাক্সারি এমব্রয়ডারি সোফা সেট",
    },
    {
      id: "living-classic",
      category: "living",
      categoryLabelBn: "লিভিং ও ড্রয়িং",
      titleBn: "ক্লাসিক সোফা সেট",
      titleEn: "Classic Furniture Sofa Set",
      descriptionBn: "মজবুত কাঠের ফ্রেমের ক্লাসিক ড্রয়িং রুম সোফা সেট।",
      imageSrc: "/assets/gallery/classic-furniture-sofa-set-jpeg.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট ক্লাসিক সোফা সেট",
    },

    // Dining
    {
      id: "dining-marble",
      category: "dining",
      categoryLabelBn: "ডাইনিং রুম",
      titleBn: "মার্বেল টপ ডাইনিং টেবিল ও চেয়ার সেট",
      titleEn: "Marble Top Dining Table & Chairs",
      descriptionBn: "মার্বেল টপ ডাইনিং টেবিল ও আরামদায়ক কুশন চেয়ার সেট। পরিবারের প্রয়োজন অনুযায়ী যেকোনো সিটে তৈরি করা যায়।",
      imageSrc: "/assets/collections/heaven-dining-marble-luxury.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট মার্বেল টপ ডাইনিং টেবিল ও চেয়ার সেট",
      badge: "শোরুম ডিসপ্লে",
    },
    {
      id: "dining-luxury",
      category: "dining",
      categoryLabelBn: "ডাইনিং রুম",
      titleBn: "লাক্সারি ডাইনিং সেট",
      titleEn: "Luxury Dining Table Suite",
      descriptionBn: "আধুনিক অ্যাপার্টমেন্টের জন্য মানানসই মার্জিত ডিজাইনের ডাইনিং সেট।",
      imageSrc: "/assets/gallery/luxury-dining-set-jpeg.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট লাক্সারি ডাইনিং সেট",
    },
    {
      id: "dining-table",
      category: "dining",
      categoryLabelBn: "ডাইনিং রুম",
      titleBn: "ডাইনিং টেবিল সেট",
      titleEn: "Luxury Dining Table Set",
      descriptionBn: "মজবুত ফিনিশিং ও প্রিমিয়াম ডিজাইনের ডাইনিং সেট।",
      imageSrc: "/assets/gallery/luxury-dining-table-set-png.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট ডাইনিং টেবিল সেট",
    },

    // Bedroom
    {
      id: "bedroom-carved",
      category: "bedroom",
      categoryLabelBn: "বেডরুম",
      titleBn: "খোদাই করা ক্লাসিক বেড সেট",
      titleEn: "Hand-Carved Bedroom Suite",
      descriptionBn: "খোদাই নকশার খাট, ম্যাচিং আলমারি ও ড্রেসিং টেবিল সহ বেডরুম সেট।",
      imageSrc: "/assets/collections/heaven-bedroom-royal-carved.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট খোদাই করা ক্লাসিক কাঠের খাট",
      badge: "ক্লাসিক",
    },
    {
      id: "bedroom-modern",
      category: "bedroom",
      categoryLabelBn: "বেডরুম",
      titleBn: "কুশনযুক্ত মডার্ন বেড সেট",
      titleEn: "Modern Upholstered Bed",
      descriptionBn: "আধুনিক ফ্ল্যাটের জন্য আরামদায়ক কুশন হেডবোর্ড বিশিষ্ট বেড সেট।",
      imageSrc: "/assets/collections/heaven-bedroom-emerald-modern.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট আধুনিক কুশনযুক্ত বেড",
    },
    {
      id: "bedroom-luxury",
      category: "bedroom",
      categoryLabelBn: "বেডরুম",
      titleBn: "লাক্সারি বেড সেট",
      titleEn: "Luxury Bed Set",
      descriptionBn: "অভিজাত বেডরুমের জন্য প্রিমিয়াম ডিজাইনের খাট।",
      imageSrc: "/assets/gallery/luxury-bed-png.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট লাক্সারি বেড সেট",
    },
    {
      id: "bedroom-minimalist",
      category: "bedroom",
      categoryLabelBn: "বেডরুম",
      titleBn: "মিনিমালিস্ট বেড সেট",
      titleEn: "Minimalist Bed Set",
      descriptionBn: "সিম্পল ও রুচিশীল আধুনিক বেড সেট।",
      imageSrc: "/assets/gallery/minimalist-bed-set-jpeg.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট মিনিমালিস্ট বেড সেট",
    },

    // Office & Storage
    {
      id: "office-modular",
      category: "office",
      categoryLabelBn: "অফিস ও স্টোরেজ",
      titleBn: "অফিস স্টোরেজ ও ফাইল কেবিনেট",
      titleEn: "Office Modular Storage Cabinet",
      descriptionBn: "অফিস ও স্টাডি রুমের জন্য কার্যকরী স্টোরেজ ও কেবিনেট।",
      imageSrc: "/assets/bespoke/heaven-bespoke-modular-cabinet.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট অফিস স্টোরেজ কেবিনেট",
    },
    {
      id: "storage-shoe-box",
      category: "office",
      categoryLabelBn: "অফিস ও স্টোরেজ",
      titleBn: "মিনিমালিস্ট শু বক্স ও কেবিনেট",
      titleEn: "Minimalist Storage & Shoe Cabinet",
      descriptionBn: "ঘরের এন্ট্রিওয়ের জন্য প্রয়োজনীয় মাল্টি-পারপাস স্টোরেজ কেবিনেট।",
      imageSrc: "/assets/gallery/minimal-shoe-box-jpeg.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট মিনিমালিস্ট শু বক্স ও কেবিনেট",
    },

    // Custom
    {
      id: "custom-vitrine",
      category: "custom",
      categoryLabelBn: "কাস্টম ফার্নিচার",
      titleBn: "গ্লাস শোকেস ও ডিসপ্লে কেবিনেট",
      titleEn: "Glass Vitrine Showcase",
      descriptionBn: "আপনার দেয়ালের নির্দিষ্ট মাপে তৈরি গ্লাস ডিসপ্লে শোকেস।",
      imageSrc: "/assets/bespoke/heaven-bespoke-vitrine-showcase.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট গ্লাস শোকেস",
      badge: "কাস্টম সাইজ",
    },
    {
      id: "custom-showcase",
      category: "custom",
      categoryLabelBn: "কাস্টম ফার্নিচার",
      titleBn: "লাক্সারি ওয়াল শোকেস",
      titleEn: "Luxury Showcase Cabinet",
      descriptionBn: "ড্রয়িং রুমের জন্য দৃষ্টিনন্দন ওয়াল শোকেস কেবিনেট।",
      imageSrc: "/assets/gallery/luxury-showcase-jpeg.webp",
      imageAlt: "হেভেন ফার্নিচার মার্ট লাক্সারি শোকেস",
    },
  ] as GalleryItem[],
} as const;
