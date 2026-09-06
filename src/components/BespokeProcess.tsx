"use client";

import Image from "next/image";
import { TRANSLATIONS } from "@/content/translations";
import { useLanguage } from "@/context/LanguageContext";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { WhatsAppIcon } from "@/components/icons";

export default function BespokeProcess() {
  const { lang, t } = useLanguage();
  const { openQuoteModal } = useQuoteModal();
  const tb = TRANSLATIONS.bespoke;

  return (
    <section id="custom" className="bg-surface-ecru-light py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-8 lg:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="max-w-2xl reveal-on-scroll">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-brass-dark/10 px-3 py-1 text-xs font-bold text-accent-brass-dark uppercase tracking-wider mb-2">
            {t(tb.badge.bn, tb.badge.en)}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary-dark">
            {t(tb.title.bn, tb.title.en)}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-text-secondary-dark leading-relaxed">
            {t(tb.subtitle.bn, tb.subtitle.en)}
          </p>
        </div>

        {/* 4 Steps Grid & Real Craftsmanship Showcase */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12 reveal-on-scroll delay-100">
          {/* Steps Timeline Column */}
          <div className="space-y-6 lg:col-span-7">
            {tb.steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-4 border-b border-neutral-200/80 pb-5 last:border-0 last:pb-0 sm:gap-5"
              >
                {/* Step Number Badge */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-slate-deep text-base font-bold text-accent-brass shadow-xs">
                  {step.num}
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-text-primary-dark">
                    {t(step.title.bn, step.title.en)}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-text-secondary-dark leading-relaxed">
                    {t(step.desc.bn, step.desc.en)}
                  </p>
                </div>
              </div>
            ))}

            {/* Custom Furniture CTAs: Dual WhatsApp + Modal */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() =>
                  openQuoteModal({
                    defaultCategory: "custom",
                    defaultProductTitle: t("কাস্টম ফার্নিচার রিকোয়েস্ট", "Custom Furniture Request"),
                  })
                }
                className="inline-flex h-[50px] items-center justify-center gap-2 rounded-xl bg-brand-slate-deep px-6 text-sm sm:text-base font-bold text-white shadow-md transition-all hover:bg-brand-slate-surface active:scale-[0.99] cursor-pointer border border-neutral-700"
              >
                <span>📋 {t(tb.ctaBespoke.bn, tb.ctaBespoke.en)}</span>
              </button>

              <a
                href={`https://wa.me/8801960481983?text=${encodeURIComponent(
                  lang === "en"
                    ? "Hello, I would like to order bespoke custom furniture crafted to my room dimensions. How do I get started?"
                    : "আসসালামু আলাইকুম, আমি আমার জায়গার মাপে কাস্টম ফার্নিচার তৈরি করাতে চাই। কীভাবে শুরু করব?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[50px] items-center justify-center gap-2 rounded-xl bg-accent-whatsapp px-6 text-sm sm:text-base font-bold text-brand-slate-deep shadow-xs transition-colors hover:bg-accent-whatsapp-hover active:scale-[0.99]"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={19} className="shrink-0" />
                <span>{t("মাপ বা ছবি পাঠাতে WhatsApp", "Send Measurements via WhatsApp")}</span>
              </a>
            </div>
          </div>

          {/* Authentic Craftsmanship Image Showcase */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xs">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-neutral-100">
                <Image
                  src="/assets/craftsmanship/heaven-handcrafted-sofa-process.webp"
                  alt="হেভেন ফার্নিচার মার্টের কারিগরদের কাজের দৃশ্য"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="p-4 sm:p-5">
                <h4 className="text-base font-bold text-text-primary-dark">
                  {t("দক্ষ কারিগরের যত্নে তৈরি", "Artisanal Heritage Craftsmanship")}
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-text-secondary-dark leading-relaxed">
                  {t(
                    "আমাদের কারিগররা প্রতিটি কাঠ, জোড়া ও ফিনিশিং নিজেদের চোখে দেখে নিখুঁতভাবে তৈরি করেন।",
                    "Our master woodworkers inspect every grain, joint, and hand-rubbed finish to ensure generational longevity."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
