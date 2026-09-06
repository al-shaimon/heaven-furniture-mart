import { BRAND_CONFIG } from "@/content/brand";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: BRAND_CONFIG.nameEn,
    alternateName: BRAND_CONFIG.nameBn,
    url: "https://heavenfurnituremart.com",
    logo: "https://heavenfurnituremart.com/assets/brand/heaven-logo-white.png",
    image: "https://heavenfurnituremart.com/assets/hero/heaven-classic-living-hero.webp",
    description:
      "Home and Custom Furniture showroom on Agrabad Access Road, Chattogram, Bangladesh. Tailored furniture crafted for your space.",
    telephone: BRAND_CONFIG.contact.primaryPhone.replace(/[\s-]/g, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND_CONFIG.location.fullAddressEn,
      addressLocality: BRAND_CONFIG.location.cityEn,
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
      name: BRAND_CONFIG.founder.nameEn,
      jobTitle: BRAND_CONFIG.founder.titleEn,
    },
    sameAs: [
      BRAND_CONFIG.social.facebook.url,
      BRAND_CONFIG.social.youtube.url,
      BRAND_CONFIG.social.instagram.url,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
