import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

import JsonLd from "@/components/JsonLd";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import { QuoteModalProvider } from "@/context/QuoteModalContext";
import RequestQuoteModal from "@/components/RequestQuoteModal";
import { Analytics } from "@vercel/analytics/next";

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

const bengali = Noto_Sans_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heavenfurnituremart.com"),
  title: "হেভেন ফার্নিচার মার্ট | Heaven Furniture Mart — আগ্রাবাদ, চট্টগ্রাম",
  description:
    "আগ্রাবাদ এক্সেস রোড, চট্টগ্রাম। লিভিং, বেডরুম ও ডাইনিং ফার্নিচার এবং আপনার ঘরের নির্দিষ্ট মাপে কাস্টম ফার্নিচার তৈরির বিশ্বস্ত ঠিকানা। সরাসরি কল: 01960-481983।",
  keywords: [
    "Heaven Furniture Mart",
    "হেভেন ফার্নিচার মার্ট",
    "furniture showroom Chittagong",
    "চট্টগ্রাম ফার্নিচার",
    "custom furniture Chattogram",
    "কাস্টম ফার্নিচার চট্টগ্রাম",
    "Agrabad furniture showroom",
    "সোফা সেট চট্টগ্রাম",
    "ডাইনিং টেবিল চট্টগ্রাম",
    "বেডরুম খাট চট্টগ্রাম",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "হেভেন ফার্নিচার মার্ট — আপনার জায়গার জন্য, আপনার পছন্দের ফার্নিচার।",
    description:
      "লিভিং, বেডরুম ও ডাইনিং ফার্নিচার এবং আপনার ঘরের নির্দিষ্ট মাপে কাস্টমাইজেশন। শোরুম: আগ্রাবাদ এক্সেস রোড, চট্টগ্রাম।",
    url: "https://heavenfurnituremart.com",
    siteName: "Heaven Furniture Mart",
    locale: "bn_BD",
    type: "website",
    images: [
      {
        url: "/assets/hero/heaven-classic-living-hero.webp",
        width: 1200,
        height: 630,
        alt: "হেভেন ফার্নিচার মার্ট ড্রয়িং রুম সোফা ও সেন্টার টেবিল সেট",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "হেভেন ফার্নিচার মার্ট | Heaven Furniture Mart",
    description:
      "লিভিং, বেডরুম, ডাইনিং ও কাস্টম ফার্নিচার। আগ্রাবাদ এক্সেস রোড, চট্টগ্রাম।",
    images: ["/assets/hero/heaven-classic-living-hero.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="bn"
      translate="no"
      className={`${playfair.variable} ${jakarta.variable} ${bengali.variable} antialiased notranslate`}
    >
      <head>
        {/* LCP image preload — eliminates element render delay */}
        <link
          rel="preload"
          as="image"
          href="/_next/image?url=%2Fassets%2Fhero%2Fheaven-classic-living-hero.webp&w=1080&q=85"
          type="image/webp"
        />
        {/* Preconnect for Google Fonts (WOFF2 resources) */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          id="hfm-lang-init"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('hfm_language');if(!s){var m=document.cookie.match(/(?:^|; )hfm_language=([^;]*)/);if(m)s=decodeURIComponent(m[1]);}if(s==='en'){document.documentElement.lang='en';document.title='Heaven Furniture Mart | Agrabad, Chattogram — Premium Solid Wood Furniture';}else if(s==='bn'){document.documentElement.lang='bn';document.title='হেভেন ফার্নিচার মার্ট | Heaven Furniture Mart — আগ্রাবাদ, চট্টগ্রাম';}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-surface-ecru-light text-text-primary-dark">
        <LanguageProvider>
          <QuoteModalProvider>
            <JsonLd />
            <SmoothScrollProvider />
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-sm focus:bg-brand-slate-deep focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-whatsapp"
            >
              মূল কন্টেন্টে যান (Skip to main content)
            </a>
            {children}
            <RequestQuoteModal />
          </QuoteModalProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
