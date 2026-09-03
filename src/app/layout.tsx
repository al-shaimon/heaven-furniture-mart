import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import JsonLd from "@/components/JsonLd";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heavenfurnituremart.com"),
  title: "Heaven Furniture Mart | Bespoke Furniture & Interior Styling — Chattogram",
  description:
    "Chattogram's premier bespoke furniture atelier. Custom-designed living room, dining, and bedroom furniture handcrafted from authentic Chittagong Teak. Flagship showroom on Agrabad Access Road.",
  keywords: [
    "bespoke furniture Chattogram",
    "custom furniture Bangladesh",
    "Chittagong Teak furniture",
    "Heaven Furniture Mart",
    "luxury furniture Chattogram",
    "Agrabad furniture showroom",
    "made to order furniture",
    "interior styling Chattogram",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Heaven Furniture Mart — Furniture, Crafted Around You",
    description:
      "Custom-designed and handcrafted furniture for discerning Chattogram residences since 2003. Flagship showroom on Agrabad Access Road.",
    url: "https://heavenfurnituremart.com",
    siteName: "Heaven Furniture Mart",
    locale: "en_BD",
    type: "website",
    images: [
      {
        url: "/assets/hero/heaven-classic-living-hero.webp",
        width: 1200,
        height: 630,
        alt: "Heaven Furniture Mart handcrafted solid Chittagong Teak living room suite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heaven Furniture Mart — Furniture, Crafted Around You",
    description:
      "Custom-designed and handcrafted furniture for discerning Chattogram residences since 2003.",
    images: ["/assets/hero/heaven-classic-living-hero.webp"],
  },
  icons: {
    icon: "/assets/brand/heaven-logo-white.png",
    apple: "/assets/brand/heaven-logo-white.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface-ecru-light text-text-primary-dark">
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-sm focus:bg-accent-brass focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-slate-deep focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-brass"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
