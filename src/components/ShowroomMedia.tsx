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

  // High-definition crisp poster optimization (85 quality, retina responsive sizing)
  const posterWidth = isPrimary ? 1080 : 828;
  const optimizedPoster = poster
    ? `/_next/image?url=${encodeURIComponent(poster)}&w=${posterWidth}&q=85`
    : undefined;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Proactive Stream Preload Observer: Attach Cloudinary stream 450px BEFORE user enters section
    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSrc((prev) => prev || src);
          preloadObserver.disconnect();
        }
      },
      { rootMargin: "450px 0px 450px 0px" }
    );
    preloadObserver.observe(container);

    // 2. Playback Observer: Autoplay the instant the video enters screen, pause when scrolled away
    const playbackObserver = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          setActiveSrc((prev) => prev || src);
          video
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => {
              // Autoplay safety fallback if browser restricts unmuted audio
            });
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: isPrimary ? 0.15 : 0.2 }
    );
    playbackObserver.observe(container);

    return () => {
      preloadObserver.disconnect();
      playbackObserver.disconnect();
    };
  }, [isPrimary, src]);

  const togglePlay = () => {
    if (!activeSrc) {
      setActiveSrc(src);
    }
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
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
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
        >
          {/* Captions track required for accessibility */}
          <track kind="captions" srcLang="bn" label="Bengali" />
        </video>

        {/* Video Type / Category Badge */}
        {badge && (
          <div className="absolute top-3 left-3 z-10 rounded-md bg-brand-slate-deep/90 backdrop-blur-xs px-2.5 py-1 text-xs font-bold text-accent-brass shadow-md border border-neutral-700/50">
            {badge}
          </div>
        )}

        {/* Live Status Indicator Badge (Top Right) */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 rounded-full bg-black/75 backdrop-blur-xs px-2.5 py-1 text-[11px] font-bold text-white border border-white/20 shadow-md">
          <span
            className={`h-2 w-2 rounded-full ${
              isPlaying ? "bg-emerald-400 animate-pulse" : "bg-red-500 animate-pulse"
            }`}
          />
          <span>{isPlaying ? t("ভিডিও চলছে", "PLAYING") : t("ভিডিও", "VIDEO")}</span>
        </div>

        {/* Play/Pause Center Indicator */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity pointer-events-none ${
            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-black/65 text-white backdrop-blur-xs border border-accent-brass/60 shadow-2xl transition-transform duration-300 group-hover:scale-110">
            {!isPlaying && (
              <span className="absolute -inset-1 rounded-full border border-accent-brass/40 animate-ping pointer-events-none opacity-40" />
            )}
            {isPlaying ? (
              <span className="text-base font-bold">❚❚</span>
            ) : (
              <span className="text-xl font-bold ml-1 text-accent-brass">▶</span>
            )}
          </div>
        </div>

        {/* Bottom Audio Toggle Button */}
        <button
          type="button"
          onClick={toggleMute}
          className="absolute bottom-3 right-3 z-10 flex h-8 items-center gap-1.5 rounded-full bg-black/75 backdrop-blur-xs px-3 text-xs font-semibold text-white border border-white/20 hover:bg-black/90 transition-colors cursor-pointer"
          aria-label={isMuted ? t("সাউন্ড অন করুন", "Unmute audio") : t("সাউন্ড অফ করুন", "Mute audio")}
        >
          <span>{isMuted ? `🔇 ${t("সাউন্ড অন", "Sound On")}` : `🔊 ${t("সাউন্ড অফ", "Sound Off")}`}</span>
        </button>

        {/* Click-to-play subtle guidance bar */}
        {!isPlaying && (
          <div className="absolute bottom-3 left-3 z-10 rounded-md bg-black/60 backdrop-blur-xs px-2 py-0.5 text-[10px] text-neutral-300 pointer-events-none hidden sm:block">
            {t("ট্যাপ করে প্লে করুন", "Tap to play")}
          </div>
        )}
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

  const tourVideoSrc = BRAND_CONFIG.social.youtube.tourLocalVideoSrc;
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

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            {/* Primary Action Button */}
            <a
              href="#showroom"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-accent-brass px-5 text-xs sm:text-sm font-bold text-brand-slate-deep hover:bg-accent-brass-hover transition-colors w-full sm:w-auto text-center"
            >
              📍 {t("শোরুমের ঠিকানা ও ম্যাপ", "Showroom Address & Map")}
            </a>

            {/* Social Channels: Grouped together on the 2nd line on mobile */}
            <div className="flex items-center gap-2 sm:gap-2.5 w-full sm:w-auto">
              <a
                href={BRAND_CONFIG.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex h-11 items-center justify-center rounded-xl border border-neutral-600 bg-brand-slate-deep px-3 sm:px-4 text-xs font-semibold text-neutral-200 hover:text-white hover:border-neutral-400 transition-colors text-center"
              >
                Facebook ↗
              </a>

              <a
                href={BRAND_CONFIG.social.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex h-11 items-center justify-center rounded-xl border border-neutral-600 bg-brand-slate-deep px-3 sm:px-4 text-xs font-semibold text-neutral-200 hover:text-white hover:border-neutral-400 transition-colors text-center"
              >
                YouTube ↗
              </a>

              <a
                href={BRAND_CONFIG.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex h-11 items-center justify-center rounded-xl border border-neutral-600 bg-brand-slate-deep px-3 sm:px-4 text-xs font-semibold text-neutral-200 hover:text-white hover:border-neutral-400 transition-colors text-center"
              >
                Instagram ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
