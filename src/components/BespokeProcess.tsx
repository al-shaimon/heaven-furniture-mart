"use client";

import { useState, useRef } from "react";
import { TRANSLATIONS } from "@/content/translations";
import { useLanguage } from "@/context/LanguageContext";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { WhatsAppIcon } from "@/components/icons";

export default function BespokeProcess() {
  const { lang, t } = useLanguage();
  const { openQuoteModal } = useQuoteModal();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const tb = TRANSLATIONS.bespoke;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

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
            <div className="pt-3 flex flex-col sm:flex-row gap-3 w-full">
              <button
                type="button"
                onClick={() =>
                  openQuoteModal({
                    defaultCategory: "custom",
                    defaultProductTitle: t("কাস্টম ফার্নিচার রিকোয়েস্ট", "Custom Furniture Request"),
                  })
                }
                className="w-full sm:w-auto inline-flex h-[50px] items-center justify-center gap-2 rounded-xl bg-brand-slate-deep px-6 text-sm sm:text-base font-bold text-white shadow-md transition-all hover:bg-brand-slate-surface active:scale-[0.99] cursor-pointer border border-neutral-700"
              >
                <span>📋 {t(tb.ctaBespoke.bn, tb.ctaBespoke.en)}</span>
              </button>

              <a
                href={`https://wa.me/8801960481983?text=${encodeURIComponent(
                  lang === "en"
                    ? "Hello Heaven Furniture Mart, I would like to discuss custom bespoke furniture dimensions and wood requirements."
                    : "আসসালামু আলাইকুম হেভেন ফার্নিচার মার্ট, আমি কাস্টম মাপের ফার্নিচার ও কাঠের বিষয়ে বিস্তারিত কথা বলতে চাই।"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex h-[50px] items-center justify-center gap-2 rounded-xl bg-accent-whatsapp px-6 text-sm sm:text-base font-bold text-brand-slate-deep shadow-md transition-all hover:bg-accent-whatsapp-hover active:scale-[0.99]"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={19} className="shrink-0" />
                <span>{t("মাপ বা ছবি পাঠাতে WhatsApp", "Send Measurements via WhatsApp")}</span>
              </a>
            </div>
          </div>

          {/* Authentic Craftsmanship Video Showcase */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xs">
              <div
                className="group relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-neutral-950 cursor-pointer select-none"
                onClick={togglePlay}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    togglePlay();
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                <video
                  ref={videoRef}
                  src="/videos/craftsmanship/heaven-sofa-detailing.mp4"
                  poster="/assets/craftsmanship/heaven-handcrafted-sofa-process.webp"
                  muted={isMuted}
                  autoPlay
                  playsInline
                  loop
                  preload="none"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
                >
                  <track kind="captions" srcLang="bn" label="Bengali" />
                </video>

                {/* Video Overlay Badge */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-md bg-brand-slate-deep/90 backdrop-blur-xs px-2.5 py-1 text-xs font-bold text-accent-brass shadow-xs">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span>{t("বাস্তব কারিগরি ভিডিও", "Live Workshop Craftsmanship")}</span>
                </div>

                {/* Play/Pause Center Indicator */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity pointer-events-none ${
                    isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                  }`}
                >
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xs border border-white/20 shadow-lg transition-transform group-hover:scale-110">
                    {isPlaying ? (
                      <span className="text-sm font-bold">❚❚</span>
                    ) : (
                      <span className="text-base font-bold ml-0.5">▶</span>
                    )}
                  </div>
                </div>

                {/* Bottom Audio Toggle Button */}
                <button
                  type="button"
                  onClick={toggleMute}
                  className="absolute bottom-3 right-3 z-10 flex h-8 items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-xs px-3 text-xs font-semibold text-white border border-white/10 hover:bg-black/90 transition-colors cursor-pointer"
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                >
                  <span>{isMuted ? `🔇 ${t("সাউন্ড অন", "Sound On")}` : `🔊 ${t("সাউন্ড অফ", "Sound Off")}`}</span>
                </button>
              </div>

              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-base font-bold text-text-primary-dark">
                    {t("দক্ষ কারিগরের যত্নে তৈরি", "Artisanal Heritage Craftsmanship")}
                  </h4>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {t("হাতে তৈরি", "Handcrafted")}
                  </span>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm text-text-secondary-dark leading-relaxed">
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
