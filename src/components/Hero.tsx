import Image from "next/image";
import { BRAND_CONFIG } from "@/content/brand";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

export default function Hero() {
  const categories = [
    { label: "লিভিং রুম", href: "#collection" },
    { label: "বেডরুম", href: "#collection" },
    { label: "ডাইনিং", href: "#collection" },
    { label: "অফিস", href: "#collection" },
    { label: "কাস্টম", href: "#custom" },
  ];

  return (
    <section
      id="top"
      className="relative bg-brand-slate-deep text-white overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20"
    >
      {/* Subtle Warm Background Glow */}
      <div className="pointer-events-none absolute top-0 left-1/4 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-brass/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-96 w-96 translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-8 lg:px-12 2xl:px-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Text Content Column (5 cols on lg/xl) */}
          <div className="flex flex-col justify-center lg:col-span-5 z-10">
            {/* Top Badges: Location & Service Line */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-slate-surface border border-brand-slate-border px-3 py-1 text-xs font-semibold text-neutral-200">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                আগ্রাবাদ, চট্টগ্রাম
              </span>
              <span className="text-xs font-medium text-accent-brass">
                হোম • অফিস • কাস্টম ফার্নিচার
              </span>
            </div>

            {/* Brand Eyebrow */}
            <p className="text-xs sm:text-sm font-bold tracking-widest text-neutral-400 uppercase">
              HEAVEN FURNITURE MART
            </p>

            {/* Main Headline */}
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold leading-[1.2] text-white tracking-tight">
              আপনার ঘরের জন্য <br />
              <span className="text-accent-brass">পছন্দের আসল ফার্নিচার।</span>
            </h1>

            {/* Natural Human Subhead */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-300 font-normal leading-relaxed max-w-xl">
              আগ্রাবাদ শোরুমে সরাসরি এসে দেখুন অথবা আপনার ঘরের জায়গার মাপ অনুযায়ী পছন্দের ফার্নিচার কাস্টম বানিয়ে নিন।
            </p>

            {/* 2 Primary Actions: WhatsApp & Call */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={BRAND_CONFIG.contact.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-sm bg-accent-whatsapp px-6 text-sm sm:text-base font-bold text-brand-slate-deep shadow-lg transition-all hover:bg-accent-whatsapp-hover hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-accent-whatsapp cursor-pointer"
                aria-label="WhatsApp এ কথা বলুন"
              >
                <WhatsAppIcon size={20} className="shrink-0" />
                <span>WhatsApp এ কথা বলুন</span>
              </a>

              <a
                href={BRAND_CONFIG.contact.phoneUrl}
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-sm border border-neutral-600 bg-brand-slate-surface px-5 text-sm sm:text-base font-semibold text-white transition-all hover:border-accent-brass hover:text-accent-brass focus-visible:ring-2 focus-visible:ring-accent-brass cursor-pointer"
                aria-label={`সরাসরি কল করুন: ${BRAND_CONFIG.contact.primaryPhoneDisplay}`}
              >
                <PhoneIcon />
                <span>কল: {BRAND_CONFIG.contact.primaryPhoneDisplay}</span>
              </a>
            </div>

            {/* Category Quick Links (Visually Integrated) */}
            <div className="mt-8 border-t border-brand-slate-border/80 pt-4">
              <p className="text-xs font-semibold text-neutral-400 mb-2">
                ক্যাটাগরি ব্রাউজ করুন:
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <a
                    key={cat.label}
                    href={cat.href}
                    className="rounded-xs bg-brand-slate-surface/80 border border-brand-slate-border px-3 py-1.5 text-xs font-semibold text-neutral-200 transition-colors hover:border-accent-brass hover:text-accent-brass"
                  >
                    {cat.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image Column (Dominant 7-Column Visual Showcase) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/10] overflow-hidden rounded-sm border border-neutral-700/80 bg-black/40 shadow-2xl group">
              <Image
                src="/assets/hero/heaven-classic-living-hero.webp"
                alt="হেভেন ফার্নিচার মার্ট ড্রয়িং রুম সোফা ও সেন্টার টেবিল সেট"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Subtle Depth Vignette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

              {/* Showroom Photo Authenticity Pill */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 flex items-center gap-2 rounded-xs bg-brand-slate-deep/90 px-3.5 py-2 text-xs font-medium text-white backdrop-blur-md border border-neutral-700">
                <span className="text-accent-brass text-sm font-bold">✓</span>
                <span>আগ্রাবাদ শোরুম কালেকশন · আসল কাঠের ফিনিশ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
