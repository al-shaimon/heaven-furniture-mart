"use client";

import Image from "next/image";
import { BRAND_CONFIG } from "@/content/brand";
import { TRANSLATIONS } from "@/content/translations";
import { useLanguage } from "@/context/LanguageContext";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

export default function Hero() {
  const { lang, t } = useLanguage();
  const { openQuoteModal } = useQuoteModal();
  const th = TRANSLATIONS.hero;

  const categories = [
    { key: "living", labelBn: "লিভিং", labelEn: "Living" },
    { key: "bedroom", labelBn: "বেডরুম", labelEn: "Bedroom" },
    { key: "dining", labelBn: "ডাইনিং", labelEn: "Dining" },
    { key: "custom", labelBn: "কাস্টম", labelEn: "Custom" },
  ];

  const handleCategoryClick = (e: React.MouseEvent, catKey: string) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("filter-category", { detail: catKey }));
    const collectionSection = document.getElementById("collection");
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="top"
      className="relative bg-brand-slate-deep text-white overflow-hidden pt-20 sm:pt-24 lg:pt-24 pb-8 sm:pb-12 lg:pb-14"
    >
      {/* Subtle Warm Background Ambient Glow */}
      <div className="pointer-events-none absolute top-0 left-1/4 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-accent-brass/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-80 w-80 translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-8 lg:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-5 sm:gap-y-6 lg:gap-x-10 xl:gap-x-14 lg:items-center">
          {/* 1. Header Text Block (Order 1 on Mobile, Left Column Row 1 on Desktop) */}
          <div className="order-1 lg:col-span-5 lg:row-start-1 flex flex-col justify-center space-y-2.5 sm:space-y-3.5">
            {/* Small Label with Location */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-accent-brass uppercase">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                HEAVEN FURNITURE MART • {t("আগ্রাবাদ, চট্টগ্রাম", "Agrabad, Chattogram")}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] font-extrabold leading-[1.2] text-white tracking-tight">
              {t(th.titlePrefix.bn, th.titlePrefix.en)} <br className="hidden sm:inline" />
              <span className="text-accent-brass">
                {t(th.titleHighlight.bn, th.titleHighlight.en)}
              </span>
            </h1>

            {/* Natural Human Copy */}
            <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed max-w-xl">
              {t(th.description.bn, th.description.en)}
            </p>
          </div>

          {/* 2. Dominant Large Real Heaven Furniture Image (Order 2 on Mobile, 7-Column Visual Hero on Desktop) */}
          <div className="order-2 lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-3 w-full">
            <div className="relative aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/10] w-full overflow-hidden rounded-xl lg:rounded-2xl border border-neutral-700/60 bg-brand-slate-surface shadow-2xl shadow-black/40 group">
              <Image
                src="/assets/hero/heaven-classic-living-hero.webp"
                alt="হেভেন ফার্নিচার মার্ট ড্রয়িং রুম সোফা ও সেন্টার টেবিল সেট"
                fill
                priority
                fetchPriority="high"
                quality={80}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Natural subtle bottom vignette for depth */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* 3. Hero CTAs: Max Actions (Order 3 on Mobile, Left Column Row 2 on Desktop) */}
          <div className="order-3 lg:col-span-5 lg:row-start-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="inline-flex h-12 sm:h-13 items-center justify-center gap-2 rounded-xl bg-accent-brass px-5 text-sm sm:text-base font-bold text-brand-slate-deep shadow-md transition-all hover:bg-accent-brass-dark hover:text-white active:scale-[0.99] cursor-pointer"
            >
              <span>📋 {t(th.ctaQuote.bn, th.ctaQuote.en)}</span>
            </button>

            <a
              href={BRAND_CONFIG.contact.getWhatsAppUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 sm:h-13 items-center justify-center gap-2 rounded-xl bg-accent-whatsapp px-5 text-sm sm:text-base font-bold text-brand-slate-deep shadow-md transition-all hover:bg-accent-whatsapp-hover active:scale-[0.99] cursor-pointer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={19} className="shrink-0" />
              <span>WhatsApp</span>
            </a>

            <a
              href={BRAND_CONFIG.contact.phoneUrl}
              className="inline-flex h-12 sm:h-13 items-center justify-center gap-2 rounded-xl border border-neutral-600 bg-brand-slate-surface/90 px-4 text-sm sm:text-base font-semibold text-neutral-200 transition-all hover:border-accent-brass hover:text-accent-brass active:scale-[0.99] cursor-pointer"
              aria-label={`কল করুন: ${BRAND_CONFIG.contact.primaryPhoneDisplay}`}
            >
              <PhoneIcon className="h-4 w-4 shrink-0 text-accent-brass" />
              <span>{t("কল করুন", "Call")}</span>
            </a>
          </div>

          {/* 4. Subtle Category Navigation (Order 4 on Mobile, Left Column Row 3 on Desktop) */}
          <div className="order-4 lg:col-span-5 lg:row-start-3 pt-3 border-t border-brand-slate-border/70">
            <nav
              aria-label={t("ফার্নিচার ক্যাটাগরি দ্রুত নেভিগেশন", "Quick Category Navigation")}
              className="flex items-center flex-wrap gap-y-1 text-xs sm:text-sm text-neutral-300"
            >
              <span className="text-neutral-400 font-medium mr-2">
                {t("কালেকশন:", "Collections:")}
              </span>
              {categories.map((cat, idx) => (
                <span key={cat.key} className="inline-flex items-center">
                  <button
                    type="button"
                    onClick={(e) => handleCategoryClick(e, cat.key)}
                    className="font-medium text-neutral-200 hover:text-accent-brass transition-colors py-0.5 cursor-pointer"
                  >
                    {t(cat.labelBn, cat.labelEn)}
                  </button>
                  {idx < categories.length - 1 && (
                    <span className="mx-2 text-neutral-500 select-none">·</span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
