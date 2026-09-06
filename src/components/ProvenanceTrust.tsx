"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { BRAND_CONFIG, TIMELINE_MILESTONES, TimelineMilestone } from "@/content/brand";
import { TRANSLATIONS } from "@/content/translations";
import { useLanguage } from "@/context/LanguageContext";
import { WhatsAppIcon, PhoneIcon } from "@/components/icons";

export default function ProvenanceTrust() {
  const { lang, t } = useLanguage();
  const { founder, credentials, social } = BRAND_CONFIG;
  const [activeMilestoneIdx, setActiveMilestoneIdx] = useState<number>(0);
  const [revealedSet, setRevealedSet] = useState<Set<number>>(new Set([0]));

  const timelineContainerRef = useRef<HTMLDivElement>(null);
  // Direct DOM refs for buttery-smooth spine animation (no React re-renders)
  const spineDesktopRef = useRef<HTMLDivElement>(null);
  const spineMobileRef = useRef<HTMLDivElement>(null);
  const beadRef = useRef<HTMLDivElement>(null);
  // Interpolation target for silky animation
  const currentProgress = useRef(0);
  const targetProgress = useRef(0);
  const rafId = useRef<number | null>(null);

  // Lerp loop — runs outside React render cycle for 60fps smoothness
  const animateSpine = useCallback(() => {
    const lerp = 0.08; // lower = silkier (0.06–0.12 sweet spot)
    currentProgress.current += (targetProgress.current - currentProgress.current) * lerp;

    const p = Math.max(0, Math.min(currentProgress.current * 100, 100));

    if (spineDesktopRef.current) {
      spineDesktopRef.current.style.height = `${Math.max(4, p)}%`;
    }
    if (spineMobileRef.current) {
      spineMobileRef.current.style.height = `${Math.max(4, p)}%`;
    }
    if (beadRef.current) {
      beadRef.current.style.top = `calc(1rem + ${Math.max(0, p) * 0.96}%)`;
    }

    rafId.current = requestAnimationFrame(animateSpine);
  }, []);

  useEffect(() => {
    rafId.current = requestAnimationFrame(animateSpine);
    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [animateSpine]);

  // Scroll listener — only updates targetProgress and milestone state
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineContainerRef.current) return;
      const rect = timelineContainerRef.current.getBoundingClientRect();
      const wh = window.innerHeight;

      const startTrigger = wh * 0.75;
      const endTrigger = wh * 0.35;
      const scrollOffset = startTrigger - rect.top;
      const raw = scrollOffset / (rect.height + (startTrigger - endTrigger));
      const progress = Math.min(Math.max(raw, 0), 1);
      targetProgress.current = progress;

      // Pick the correct set of nodes based on viewport (lg = 1024px)
      const isMobile = window.innerWidth < 1024;
      const prefix = isMobile ? "mobile-milestone-node-" : "milestone-node-";

      // Active milestone = highest-index node whose fractional position
      // the spine has already reached or passed.
      // nodeFraction = (node top - container top) / container height
      let newActiveIdx = 0;

      TIMELINE_MILESTONES.forEach((_, idx) => {
        const el = document.getElementById(`${prefix}${idx}`);
        if (!el) return;

        const elRect = el.getBoundingClientRect();

        // Position of this node as a fraction of the container height
        const nodeFraction = (elRect.top - rect.top) / rect.height;

        // Spine reaches this node when progress >= nodeFraction (with small tolerance)
        if (progress >= nodeFraction - 0.015) {
          newActiveIdx = idx;
        }

        // Reveal when approaching viewport
        if (elRect.top < wh * 0.92) {
          setRevealedSet((prev) => {
            if (prev.has(idx)) return prev;
            const next = new Set(prev);
            next.add(idx);
            return next;
          });
        }
      });

      setActiveMilestoneIdx(newActiveIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tt = TRANSLATIONS.trust;

  return (
    <section id="trust" className="bg-surface-ecru-light py-12 sm:py-16 lg:py-20 border-t border-neutral-200 overflow-hidden">
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-8 lg:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="max-w-3xl reveal-on-scroll">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-accent-brass-dark uppercase">
            {t(tt.badge.bn, tt.badge.en)}
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary-dark">
            {t("স্বীকৃতি, মেলা আর আমাদের কিছু স্মৃতি", "Recognition, Fair Pavilions & Trusted Memories")}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-text-secondary-dark leading-relaxed">
            {t(
              "শুধু ফার্নিচার বিক্রি নয়, বিগত ১৫+ বছর ধরে বিভিন্ন মেলা ও প্রাতিষ্ঠানিক স্বীকৃতির মধ্য দিয়েও আমাদের পথচলা হয়েছে। এই ছবিগুলো সেই পথচলার কিছু বাস্তব মুহূর্ত।",
              "Beyond crafting furniture, Heaven Furniture Mart has been celebrated across regional and international furniture exhibitions. These photographs document our genuine heritage."
            )}
          </p>
        </div>

        {/* Leadership & Credibility Showcase */}
        <div className="mt-8 sm:mt-10 rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-9 lg:p-10 shadow-xs reveal-on-scroll">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left: Founder's Philosophy & Integrated Credibility Strip */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between space-y-6">
              <div>
                {/* Badge & Quotation Mark */}
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-brass-dark/10 px-3 py-1 text-xs font-bold text-accent-brass-dark uppercase tracking-wider">
                    ⭐ {t("১৫+ বছরের সুনাম ও অঙ্গীকার", "15+ Years Heritage & Commitment")}
                  </span>
                  <span className="text-3xl text-accent-brass-dark/30 font-serif select-none">&ldquo;</span>
                </div>

                {/* Quote Body */}
                <blockquote className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-text-primary-dark">
                  &ldquo;{lang === "en" ? founder.verbatimQuoteEn : founder.quoteBn}&rdquo;
                </blockquote>

                {/* Founder Signature Block */}
                <div className="mt-5 border-t border-neutral-100 pt-3.5 flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-slate-deep text-accent-brass text-sm font-bold shadow-xs">
                    HFM
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-text-primary-dark">
                      {lang === "en" ? founder.nameEn : founder.nameBn}
                    </h4>
                    <p className="text-xs font-semibold text-accent-brass-dark">
                      {lang === "en" ? founder.titleEn : founder.titleBn}
                    </p>
                    <p className="text-[11px] text-text-secondary-dark">
                      {t("হেভেন ফার্নিচার মার্ট · আগ্রাবাদ, চট্টগ্রাম", "Heaven Furniture Mart · Agrabad, Chattogram")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Integrated Verified Institutional Badges */}
              <div className="border-t border-neutral-100 pt-5">
                <span className="text-[11px] font-bold text-text-secondary-dark uppercase tracking-wider block mb-2.5">
                  {t("প্রাতিষ্ঠানিক স্বীকৃতি ও সদস্যপদ:", "Institutional Recognition & Memberships:")}
                </span>
                <div className="grid sm:grid-cols-3 gap-3">
                  {credentials.map((cred) => (
                    <div
                      key={cred.titleBn}
                      className="rounded-lg border border-neutral-200/80 bg-surface-ecru-light/60 p-3 transition hover:border-neutral-300"
                    >
                      <div className="flex items-center gap-1.5 text-xs font-bold text-text-primary-dark">
                        <span className="text-emerald-600 font-extrabold text-sm">✓</span>
                        <span>{lang === "en" && cred.titleEn ? cred.titleEn : cred.titleBn}</span>
                      </div>
                      <p className="mt-1 text-[11px] text-text-secondary-dark leading-relaxed">
                        {lang === "en" && cred.descriptionEn ? cred.descriptionEn : cred.descriptionBn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Real Award Ceremony Portrait */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="overflow-hidden rounded-xl border border-neutral-200 bg-surface-ecru-paper shadow-xs">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/assets/trust/recognition/heaven-md-receiving-fair-crest.webp"
                    alt={t(tt.mdHonour.title.bn, tt.mdHonour.title.en)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-103"
                  />
                  <div className="absolute top-2.5 left-2.5 rounded-full bg-brand-slate-deep/85 backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-bold text-accent-brass shadow-xs">
                    {t(tt.mdHonour.crestBadge.bn, tt.mdHonour.crestBadge.en)}
                  </div>
                </div>
                <div className="p-3 text-center bg-surface-ecru-paper border-t border-neutral-100">
                  <p className="text-xs font-bold text-text-primary-dark">
                    {t(tt.mdHonour.title.bn, tt.mdHonour.title.en)}
                  </p>
                  <p className="text-[11px] text-text-secondary-dark mt-0.5">
                    {t(tt.mdHonour.subtitle.bn, tt.mdHonour.subtitle.en)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Timeline Journey Section Header */}
        <div className="mt-16 sm:mt-20 text-center max-w-2xl mx-auto mb-10 sm:mb-14 reveal-on-scroll">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-brass-dark/10 px-3 py-1 text-xs font-bold text-accent-brass-dark uppercase tracking-wider mb-2">
            {t(tt.badge.bn, tt.badge.en)}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary-dark">
            {t(tt.title.bn, tt.title.en)}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-text-secondary-dark leading-relaxed">
            {t(tt.subtitle.bn, tt.subtitle.en)}
          </p>
        </div>

        {/* Continuous Scroll-Driven Timeline Container */}
        <div ref={timelineContainerRef} className="relative max-w-5xl mx-auto">
          {/* ================= DESKTOP TIMELINE (lg:block) ================= */}
          <div className="hidden lg:block relative py-6">
            {/* Background Central Track Line */}
            <div className="absolute left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 rounded-full bg-neutral-200/80" />

            {/* Glowing Active Progress Spine — animated via ref, no React state */}
            <div
              ref={spineDesktopRef}
              className="absolute left-1/2 top-4 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-accent-brass via-amber-400 to-accent-brass-dark shadow-[0_0_10px_rgba(197,168,105,0.7)]"
              style={{ height: "4%", willChange: "height" }}
            />

            {/* Traveling Glowing Head Bead — animated via ref */}
            <div
              ref={beadRef}
              className="absolute left-1/2 w-3.5 h-3.5 -translate-x-1/2 rounded-full bg-accent-brass border-2 border-white shadow-[0_0_14px_rgba(197,168,105,0.95)] pointer-events-none z-20"
              style={{ top: "1rem", willChange: "top" }}
            />

            <div className="space-y-16">
              {TIMELINE_MILESTONES.map((item: TimelineMilestone, idx: number) => {
                const isEven = idx % 2 === 0;
                const isHighlighted = activeMilestoneIdx === idx;
                const isPastOrCurrent = idx <= activeMilestoneIdx;
                const isRevealed = revealedSet.has(idx);

                const itemYear = lang === "en" && item.yearEn ? item.yearEn : item.year;
                const itemTitle = lang === "en" && item.titleEn ? item.titleEn : item.titleBn;
                const itemDesc = lang === "en" && item.descriptionEn ? item.descriptionEn : item.descriptionBn;
                const itemCaption = lang === "en" && item.captionEn ? item.captionEn : item.captionBn;

                // Stagger delay per milestone for cascading reveal
                const staggerDelay = `${idx * 80}ms`;

                return (
                  <div
                    id={`milestone-node-${idx}`}
                    key={item.year}
                    className="relative grid grid-cols-12 gap-8 items-center scroll-mt-32"
                    data-milestone-idx={idx}
                  >
                    {/* Central Year Glowing Node */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 z-10 flex h-11 px-3.5 items-center justify-center rounded-full border-2 transition-all duration-700 ease-out shadow-md ${
                        isHighlighted
                          ? "border-accent-brass bg-brand-slate-deep text-accent-brass scale-110 ring-4 ring-accent-brass/25 shadow-[0_0_15px_rgba(197,168,105,0.5)]"
                          : isPastOrCurrent
                          ? "border-accent-brass/70 bg-brand-slate-surface text-accent-brass scale-100"
                          : "border-neutral-300 bg-white text-neutral-400 scale-95 opacity-70"
                      } text-xs font-bold`}
                    >
                      <span>{itemYear}</span>
                    </div>

                    {isEven ? (
                      <>
                        {/* Left: Narrative Card */}
                        <div className="col-span-5 text-right pr-6">
                          <div
                            className={`rounded-xl border p-5 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                              isRevealed
                                ? "opacity-100 translate-x-0 translate-y-0"
                                : "opacity-0 -translate-x-8 translate-y-5"
                            } ${
                              isHighlighted
                                ? "border-accent-brass-dark/50 bg-white shadow-md ring-1 ring-accent-brass/20"
                                : "border-neutral-200/80 bg-white/95 shadow-2xs"
                            }`}
                            style={{ transitionDelay: isRevealed ? "0ms" : staggerDelay }}
                          >
                            <span className="text-xs font-bold text-accent-brass-dark uppercase tracking-wider">
                              {itemYear} {t("মাইলফলক", "Milestone")}
                            </span>
                            <h4 className="text-base sm:text-lg font-bold text-text-primary-dark mt-1">
                              {itemTitle}
                            </h4>
                            <p className="mt-1.5 text-xs sm:text-sm text-text-secondary-dark leading-relaxed">
                              {itemDesc}
                            </p>
                          </div>
                        </div>

                        {/* Middle Spacer */}
                        <div className="col-span-2" />

                        {/* Right: Photograph Card */}
                        <div className="col-span-5 pl-6">
                          <div
                            className={`group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xs transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-md ${
                              isRevealed
                                ? "opacity-100 translate-x-0 translate-y-0"
                                : "opacity-0 translate-x-8 translate-y-5"
                            } ${isHighlighted ? "border-accent-brass/50 ring-1 ring-accent-brass/20" : ""}`}
                            style={{ transitionDelay: isRevealed ? "0ms" : `${idx * 80 + 120}ms` }}
                          >
                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                              <Image
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                fill
                                sizes="420px"
                                className="object-cover transition-transform duration-500 group-hover:scale-103"
                              />
                            </div>
                            <div className="p-3 bg-surface-ecru-paper text-center border-t border-neutral-100">
                              <p className="text-xs font-medium text-text-secondary-dark">
                                📷 {itemCaption}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Left: Photograph Card */}
                        <div className="col-span-5 pr-6">
                          <div
                            className={`group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xs transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-md ${
                              isRevealed
                                ? "opacity-100 translate-x-0 translate-y-0"
                                : "opacity-0 -translate-x-8 translate-y-5"
                            } ${isHighlighted ? "border-accent-brass/50 ring-1 ring-accent-brass/20" : ""}`}
                            style={{ transitionDelay: isRevealed ? "0ms" : `${idx * 80 + 120}ms` }}
                          >
                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                              <Image
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                fill
                                sizes="420px"
                                className="object-cover transition-transform duration-500 group-hover:scale-103"
                              />
                            </div>
                            <div className="p-3 bg-surface-ecru-paper text-center border-t border-neutral-100">
                              <p className="text-xs font-medium text-text-secondary-dark">
                                📷 {itemCaption}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Middle Spacer */}
                        <div className="col-span-2" />

                        {/* Right: Narrative Card */}
                        <div className="col-span-5 text-left pl-6">
                          <div
                            className={`rounded-xl border p-5 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                              isRevealed
                                ? "opacity-100 translate-x-0 translate-y-0"
                                : "opacity-0 translate-x-8 translate-y-5"
                            } ${
                              isHighlighted
                                ? "border-accent-brass-dark/50 bg-white shadow-md ring-1 ring-accent-brass/20"
                                : "border-neutral-200/80 bg-white/95 shadow-2xs"
                            }`}
                            style={{ transitionDelay: isRevealed ? "0ms" : staggerDelay }}
                          >
                            <span className="text-xs font-bold text-accent-brass-dark uppercase tracking-wider">
                              {itemYear} {t("মাইলফলক", "Milestone")}
                            </span>
                            <h4 className="text-base sm:text-lg font-bold text-text-primary-dark mt-1">
                              {itemTitle}
                            </h4>
                            <p className="mt-1.5 text-xs sm:text-sm text-text-secondary-dark leading-relaxed">
                              {itemDesc}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= MOBILE TIMELINE (lg:hidden) ================= */}
          <div className="lg:hidden py-4 space-y-1">
            {TIMELINE_MILESTONES.map((item: TimelineMilestone, idx: number) => {
              const isHighlighted = activeMilestoneIdx === idx;
              const isPastOrCurrent = idx <= activeMilestoneIdx;
              const isRevealed = revealedSet.has(idx);

              const itemYear = lang === "en" && item.yearEn ? item.yearEn : item.year;
              const itemTitle = lang === "en" && item.titleEn ? item.titleEn : item.titleBn;
              const itemDesc = lang === "en" && item.descriptionEn ? item.descriptionEn : item.descriptionBn;
              const itemCaption = lang === "en" && item.captionEn ? item.captionEn : item.captionBn;

              return (
                <div key={item.year}>
                  {/* Horizontal Year Separator — acts as the "spine" for mobile */}
                  <div
                    id={`mobile-milestone-node-${idx}`}
                    className="flex items-center gap-2.5 py-3"
                    data-milestone-idx={idx}
                  >
                    {/* Left line — turns gold when this milestone is reached */}
                    <div
                      className={`flex-1 h-px rounded-full transition-colors duration-700 ${
                        isPastOrCurrent
                          ? "bg-gradient-to-r from-accent-brass/80 to-accent-brass"
                          : "bg-neutral-200"
                      }`}
                    />

                    {/* Year Badge */}
                    <div
                      className={`flex-none flex items-center px-3 py-1 rounded-full border-2 text-[11px] font-bold whitespace-nowrap transition-all duration-500 ease-out ${
                        isHighlighted
                          ? "border-accent-brass bg-brand-slate-deep text-accent-brass scale-105 shadow-[0_0_12px_rgba(197,168,105,0.5)] ring-2 ring-accent-brass/25"
                          : isPastOrCurrent
                          ? "border-accent-brass/60 bg-brand-slate-surface text-accent-brass"
                          : "border-neutral-300 bg-white text-neutral-400 opacity-70"
                      }`}
                    >
                      {itemYear}
                    </div>

                    {/* Right line — always neutral */}
                    <div className="flex-1 h-px rounded-full bg-neutral-200" />
                  </div>

                  {/* Full-width Milestone Card */}
                  <div
                    className={`overflow-hidden rounded-xl border bg-white transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    } ${
                      isHighlighted
                        ? "border-accent-brass/40 shadow-sm ring-1 ring-accent-brass/15"
                        : "border-neutral-200 shadow-2xs"
                    }`}
                    style={{ transitionDelay: isRevealed ? "0ms" : `${idx * 60}ms` }}
                  >
                    {/* Photo — full width, prominent */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h4 className="text-sm font-bold text-text-primary-dark leading-snug">
                        {itemTitle}
                      </h4>
                      <p className="mt-1.5 text-xs text-text-secondary-dark leading-relaxed">
                        {itemDesc}
                      </p>
                      <p className="mt-2 text-[11px] text-accent-brass-dark font-medium">
                        📷 {itemCaption}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        {/* Customer-Centric Trust Callout & Social Links */}
        <div className="mt-14 sm:mt-18 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 text-center shadow-xs max-w-3xl mx-auto reveal-on-scroll">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 mb-2">
            📍 {t("আগ্রাবাদ শোরুমে স্বাগতম", "Welcome to Our Agrabad Showroom")}
          </span>
          <h4 className="text-base sm:text-lg font-bold text-text-primary-dark">
            {t("সরাসরি শোরুমে এসে কাঠের কোয়ালিটি দেখে নিতে চান?", "Prefer to Inspect Wood Quality Firsthand?")}
          </h4>
          <p className="mt-1.5 text-xs sm:text-sm text-text-secondary-dark max-w-lg mx-auto leading-relaxed">
            {t(
              "চট্টগ্রামের আগ্রাবাদ এক্সেস রোডে আমাদের শোরুমে সরাসরি ডিসপ্লে দেখে পছন্দ করতে পারেন অথবা আপনার পছন্দের সাইজ ও কালার অনুযায়ী অর্ডার করতে পারেন।",
              "Visit our showroom on Agrabad Access Road, Chattogram to explore floor collections or commission bespoke furniture tailored to your residence."
            )}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href={BRAND_CONFIG.contact.getWhatsAppUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent-whatsapp px-4 py-2.5 text-xs sm:text-sm font-bold text-brand-slate-deep shadow-xs hover:bg-accent-whatsapp-hover transition-colors"
            >
              <WhatsAppIcon size={18} />
              <span>{t("WhatsApp এ যোগাযোগ", "Contact on WhatsApp")}</span>
            </a>

            <a
              href={BRAND_CONFIG.contact.phoneUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-bold text-text-primary-dark shadow-2xs hover:bg-neutral-50 transition-colors"
            >
              <PhoneIcon className="h-4 w-4 text-accent-brass-dark" />
              <span>{t("সরাসরি কল:", "Call Directly:")} {BRAND_CONFIG.contact.primaryPhoneDisplay}</span>
            </a>

            <a
              href={social.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1877F2] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-2xs hover:bg-[#166fe5] transition-colors"
            >
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
