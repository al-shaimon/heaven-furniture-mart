import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Heaven Furniture Mart | Bespoke Furniture & Interior Styling — Chattogram",
  description:
    "Chattogram's premier bespoke furniture atelier. Custom-designed living room, dining, and bedroom furniture handcrafted from authentic Chittagong Teak. Book a free design consultation.",
  keywords: [
    "bespoke furniture Chattogram",
    "custom furniture Bangladesh",
    "Chittagong Teak furniture",
    "Heaven Furniture Mart",
    "luxury furniture Chattogram",
    "interior styling Agrabad",
  ],
  openGraph: {
    title: "Heaven Furniture Mart — Furniture, Crafted Around You",
    description:
      "Custom-designed and handcrafted furniture for discerning Chattogram homeowners since 2003.",
    type: "website",
    locale: "en_BD",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface-ecru-light text-text-primary-dark">
        {children}
      </body>
    </html>
  );
}
