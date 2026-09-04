import Image from "next/image";
import { BRAND_CONFIG } from "@/content/brand";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-brand-slate-deep text-white overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-center">
          {/* Text Column (5 cols on lg, 6 on xl) */}
          <div className="flex flex-col justify-center lg:col-span-6">
            {/* Brand Eyebrow */}
            <p className="font-serif text-lg sm:text-xl font-bold tracking-wide text-accent-brass mb-1">
              হেভেন ফার্নিচার মার্ট
            </p>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold leading-[1.2] tracking-tight text-white mt-1">
              আপনার ঘরের জন্য
              <br />
              <span className="text-accent-brass">পছন্দের ফার্নিচার।</span>
            </h1>

            {/* Natural Human Subhead */}
            <p className="mt-3 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              বাসা, অফিস বা আপনার জায়গার মাপ অনুযায়ী কাস্টম ফার্নিচার।
            </p>

            {/* Location Line */}
            <p className="mt-2 text-sm font-semibold text-neutral-400">
              📍 আগ্রাবাদ, চট্টগ্রাম
            </p>

            {/* 2 Primary Actions: WhatsApp & Call */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={BRAND_CONFIG.contact.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-sm bg-accent-whatsapp px-6 text-base font-bold text-brand-slate-deep shadow-md transition-all hover:bg-accent-whatsapp-hover focus-visible:ring-2 focus-visible:ring-accent-whatsapp"
                aria-label="WhatsApp এ মেসেজ দিন"
              >
                <WhatsAppIcon size={20} className="shrink-0" />
                <span>WhatsApp এ মেসেজ দিন</span>
              </a>

              <a
                href={BRAND_CONFIG.contact.phoneUrl}
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-sm border border-neutral-500 bg-brand-slate-surface px-6 text-base font-semibold text-white transition-all hover:border-accent-brass hover:text-accent-brass"
                aria-label={`সরাসরি কল করুন: ${BRAND_CONFIG.contact.primaryPhoneDisplay}`}
              >
                <PhoneIcon />
                <span>কল করুন: {BRAND_CONFIG.contact.primaryPhoneDisplay}</span>
              </a>
            </div>

            {/* Category Anchor Line */}
            <div className="mt-8 border-t border-brand-slate-border pt-4">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 text-xs sm:text-sm font-semibold text-neutral-300">
                <a href="#collection" className="hover:text-accent-brass transition-colors">
                  লিভিং
                </a>
                <span className="text-neutral-600">·</span>
                <a href="#collection" className="hover:text-accent-brass transition-colors">
                  বেডরুম
                </a>
                <span className="text-neutral-600">·</span>
                <a href="#collection" className="hover:text-accent-brass transition-colors">
                  ডাইনিং
                </a>
                <span className="text-neutral-600">·</span>
                <a href="#collection" className="hover:text-accent-brass transition-colors">
                  অফিস
                </a>
                <span className="text-neutral-600">·</span>
                <a href="#custom" className="hover:text-accent-brass transition-colors">
                  কাস্টম
                </a>
              </div>
            </div>
          </div>

          {/* Hero Image Column (Significantly More Image-Led) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden rounded-sm border border-neutral-700 shadow-2xl">
              <Image
                src="/assets/hero/heaven-classic-living-hero.webp"
                alt="হেভেন ফার্নিচার মার্ট ড্রয়িং রুম সোফা ও সেন্টার টেবিল সেট"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-brand-slate-deep/90 px-3 py-1.5 rounded-xs text-xs font-medium text-neutral-200 backdrop-blur-xs">
                আগ্রাবাদ শোরুম কালেকশন
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
