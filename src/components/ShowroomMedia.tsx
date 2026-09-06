"use client";

import { useState, useRef, useEffect } from "react";
import { BRAND_CONFIG, CRAFT_VIDEOS, CraftVideoItem } from "@/content/brand";
import { TRANSLATIONS } from "@/content/translations";
import { useLanguage } from "@/context/LanguageContext";

interface AutoPlayVideoProps {
  src: string;
  poster: string;
  title: string;
  description?: string;
  badge?: string;
  isPrimary?: boolean;
}

function LocalAutoVideo({
  src,
  poster,
  title,
  description,
  badge,
  isPrimary = false,
}: AutoPlayVideoProps) {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Optimize poster URL using Next.js image optimizer so we don't load 500KB+ raw files
  const optimizedPoster = poster
    ? `/_next/image?url=${encodeURIComponent(poster)}&w=640&q=75`
    : undefined;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Viewport Autoplay / Pause Observer - only loads video data when actually visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Lazy attach video src on first viewport entry
          setActiveSrc((prev) => prev || src);
          const video = videoRef.current;
          if (video) {
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {
                // Autoplay might be blocked if unmuted; handled safely
              });
          }
        } else {
          const video = videoRef.current;
          if (video) {
            video.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: isPrimary ? 0.2 : 0.3 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [isPrimary, src]);

  const togglePlay = () => {
    // If not loaded yet, load it now on user click
    if (!activeSrc) {
      setActiveSrc(src);
    }
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  const toggleMute = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
    if (!video.muted && video.paused) {
      video.play().catch(() => {});
    }
  };

  return (
    <div
      ref={containerRef}
      className={`group relative overflow-hidden rounded-xl border border-neutral-700/80 bg-brand-slate-surface shadow-xl flex flex-col ${
        isPrimary ? "w-full" : "h-full"
      }`}
    >
      {/* Video Container */}
      <div
        className={`relative ${
          isPrimary ? "aspect-video w-full" : "aspect-[16/10] w-full"
        } bg-black cursor-pointer overflow-hidden select-none shrink-0`}
        onClick={togglePlay}
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        <video
          ref={videoRef}
          src={activeSrc || undefined}
          poster={optimizedPoster}
          muted={isMuted}
          playsInline
          loop
          preload="none"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
        >
          {/* Captions track required for accessibility */}
          <track kind="captions" srcLang="bn" label="Bengali" />
        </video>

        {/* Video Overlay Badge */}
        {badge && (
          <div className="absolute top-3 left-3 z-10 rounded-md bg-brand-slate-deep/85 backdrop-blur-xs px-2.5 py-1 text-xs font-bold text-accent-brass shadow-xs">
            {badge}
          </div>
        )}

        {/* Play/Pause Center Indicator */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity pointer-events-none ${
            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xs border border-white/20 shadow-lg">
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
          aria-label={isMuted ? t("সাউন্ড অন করুন", "Unmute audio") : t("সাউন্ড অফ করুন", "Mute audio")}
        >
          <span>{isMuted ? `🔇 ${t("সাউন্ড অন", "Sound On")}` : `🔊 ${t("সাউন্ড অফ", "Sound Off")}`}</span>
        </button>
      </div>

      {/* Narrative Footer */}
      {(title || description) && (
        <div className="flex-1 flex flex-col justify-start p-4 bg-brand-slate-surface border-t border-neutral-800/80">
          <p className="text-sm sm:text-base font-bold text-white line-clamp-1">
            {title}
          </p>
          {description && (
            <p className="mt-1 text-xs text-neutral-300 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function ShowroomMedia() {
  const { lang, t } = useLanguage();
  const tt = TRANSLATIONS.tour;

  const tourVideoSrc = "/videos/showroom/heaven-virtual-showroom-tour.mp4";
  const tourPoster = "/assets/showroom/heaven-virtual-showroom-tour.webp";

  return (
    <section
      id="showroom-tour"
      className="bg-brand-slate-deep text-white py-12 sm:py-16 lg:py-20 border-b border-neutral-800"
    >
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-8 lg:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 reveal-on-scroll">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-accent-brass uppercase">
            {t(tt.badge.bn, tt.badge.en)}
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {t(tt.title.bn, tt.title.en)}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-300 leading-relaxed">
            {t(tt.subtitle.bn, tt.subtitle.en)}
          </p>
        </div>

        {/* Primary Virtual Tour Video */}
        <div className="mb-8 sm:mb-12 reveal-on-scroll delay-100">
          <LocalAutoVideo
            src={tourVideoSrc}
            poster={tourPoster}
            title={t("আগ্রাবাদ শোরুম — ভার্চুয়াল ট্যুর ভিডিও", "Agrabad Showroom — Virtual Tour Video")}
            badge={t("ভার্চুয়াল শোরুম ট্যুর", "Virtual Showroom Tour")}
            isPrimary={true}
          />
        </div>

        {/* Secondary Videos */}
        <div className="reveal-on-scroll delay-150">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {t("কারিগরদের কাজ ও শোরুমের আরও কিছু ভিডিও", "Craftsmanship & Showroom Floor Highlights")}
            </h3>
            <span className="text-xs text-neutral-300">
              {t("স্ক্রোল করলে স্বয়ংক্রিয়ভাবে প্লে হবে", "Autoplays on viewport scroll")}
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CRAFT_VIDEOS.map((video: CraftVideoItem) => (
              <LocalAutoVideo
                key={video.id}
                src={video.localVideoSrc}
                poster={video.posterSrc}
                title={lang === "en" && video.titleEn ? video.titleEn : video.titleBn}
                description={lang === "en" && video.descriptionEn ? video.descriptionEn : video.descriptionBn}
                badge={lang === "en" && video.badgeEn ? video.badgeEn : video.badgeBn}
              />
            ))}
          </div>
        </div>

        {/* Bottom Showroom Action & Official Social Links */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-brand-slate-border bg-brand-slate-surface p-5 sm:p-6">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {t("ভালো লাগলে সরাসরি আগ্রাবাদ শোরুমে এসে দেখে যান", "Experience It Firsthand at Our Agrabad Showroom")}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-neutral-300">
              {t(BRAND_CONFIG.location.fullAddressBn, BRAND_CONFIG.location.fullAddressEn)}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#showroom"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-accent-brass px-5 text-xs sm:text-sm font-bold text-brand-slate-deep hover:bg-accent-brass-hover transition-colors"
            >
              📍 {t("শোরুমের ঠিকানা ও ম্যাপ", "Showroom Address & Map")}
            </a>

            <a
              href={BRAND_CONFIG.social.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-neutral-600 bg-brand-slate-deep px-4 text-xs font-semibold text-neutral-200 hover:text-white hover:border-neutral-400 transition-colors"
            >
              Facebook ↗
            </a>

            <a
              href={BRAND_CONFIG.social.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-neutral-600 bg-brand-slate-deep px-4 text-xs font-semibold text-neutral-200 hover:text-white hover:border-neutral-400 transition-colors"
            >
              YouTube ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
