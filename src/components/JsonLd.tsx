import { BRAND_CONFIG } from "@/content/brand";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: BRAND_CONFIG.name,
    alternateName: "Heaven Furniture",
    url: "https://heavenfurnituremart.com",
    logo: "https://heavenfurnituremart.com/assets/brand/heaven-logo-white.png",
    image: "https://heavenfurnituremart.com/assets/hero/heaven-classic-living-hero.webp",
    description:
      "Bespoke woodworking atelier in Chattogram, Bangladesh crafting custom solid Chittagong Teak furniture, natural marble dining sets, and luxury bedroom suites tailored to residential floor plans since 2003.",
    telephone: BRAND_CONFIG.contact.primaryPhone.replace(/[\s-]/g, ""),
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND_CONFIG.location.fullAddress,
      addressLocality: BRAND_CONFIG.location.city,
      addressRegion: "Chittagong Division",
      postalCode: "4100",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.327,
      longitude: 91.812,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "09:00",
        closes: "21:30",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Abul Kalam Bhuiyan",
      jobTitle: "Managing Director",
    },
    sameAs: [
      BRAND_CONFIG.social.facebook.url,
      BRAND_CONFIG.social.youtube.url,
      BRAND_CONFIG.social.instagram.url,
    ],
    knowsAbout: [
      "Bespoke Woodworking",
      "Chittagong Teak (Segun) Crafting",
      "Floor Plan Dimensioning",
      "Custom Living Suites",
      "Natural Marble Dining Tables",
      "Luxury Bedroom Furniture",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
