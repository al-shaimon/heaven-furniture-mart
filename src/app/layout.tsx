import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Noto_Sans_Bengali } from "next/font/google";
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
    "আগ্রাবাদ এক্সেস রোড, চট্টগ্রাম। হোম ও অফিস ফার্নিচার এবং আপনার ঘরের নির্দিষ্ট মাপে কাস্টম ফার্নিচার তৈরির বিশ্বস্ত ঠিকানা। সরাসরি কল: 01960-481983।",
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
    "অফিস ফার্নিচার",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "হেভেন ফার্নিচার মার্ট — আপনার জায়গার জন্য, আপনার পছন্দের ফার্নিচার।",
    description:
      "হোম ও অফিস ফার্নিচার এবং আপনার ঘরের নির্দিষ্ট মাপে কাস্টমাইজেশন। শোরুম: আগ্রাবাদ এক্সেস রোড, চট্টগ্রাম।",
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
      "হোম ও অফিস ফার্নিচার এবং কাস্টম ফার্নিচার। আগ্রাবাদ এক্সেস রোড, চট্টগ্রাম।",
    images: ["/assets/hero/heaven-classic-living-hero.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="bn"
      className={`${playfair.variable} ${jakarta.variable} ${bengali.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface-ecru-light text-text-primary-dark">
        <JsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-sm focus:bg-brand-slate-deep focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-whatsapp"
        >
          মূল কন্টেন্টে যান (Skip to main content)
        </a>
        {children}
      </body>
    </html>
  );
}
