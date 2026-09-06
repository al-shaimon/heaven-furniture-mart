"use client";

import { useState, useRef, useEffect } from "react";
import { BRAND_CONFIG, CRAFT_VIDEOS, CraftVideoItem } from "@/content/brand";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Viewport Autoplay / Pause Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => {
              // Autoplay might be blocked if unmuted; handled safely
            });
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: isPrimary ? 0.3 : 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [isPrimary]);

  const togglePlay = () => {
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
      className={`group relative overflow-hidden rounded-sm border border-neutral-700/80 bg-neutral-950 shadow-xl ${
        isPrimary ? "w-full" : "flex flex-col"
      }`}
    >
      {/* Video Container */}
      <div
        className={`relative ${
          isPrimary ? "aspect-video w-full" : "aspect-[16/10] w-full"
        } bg-black cursor-pointer overflow-hidden select-none`}
        onClick={togglePlay}
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? "ভিডিও পজ করুন" : "ভিডিও প্লে করুন"}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted={isMuted}
          autoPlay
          playsInline
          loop
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="pointer-events-none h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {/* Play Button Overlay (Prominent, High z-index, Interactive) */}
        {!isPlaying && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 transition-opacity">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-brand-slate-deep/95 text-accent-brass shadow-2xl border-2 border-accent-brass/80 backdrop-blur-xs transition-transform active:scale-95 hover:scale-105 cursor-pointer"
              aria-label="ভিডিও প্লে করুন"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-1"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        )}

        {/* Top Badges & Sound Toggle */}
        <div className="absolute top-3 left-3 right-3 z-30 flex items-center justify-between pointer-events-none">
          {badge && (
            <span className="rounded-xs bg-brand-slate-deep/90 border border-neutral-700 px-2.5 py-1 text-[11px] font-semibold text-accent-brass backdrop-blur-xs">
              {badge}
            </span>
          )}

          {/* Sound Toggle Button (Interactive) */}
          <button
            type="button"
            onClick={toggleMute}
            className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white hover:bg-black active:scale-95 transition-all backdrop-blur-xs text-sm cursor-pointer ml-auto border border-neutral-600 shadow-md"
            aria-label={isMuted ? "সাউন্ড অন করুন" : "মিউট করুন"}
            title={isMuted ? "সাউন্ড অন করুন" : "মিউট করুন"}
          >
            {isMuted ? "🔇" : "🔊"}
          </button>
        </div>

        {/* Bottom Title Bar for Primary Video */}
        {isPrimary && (
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-4 z-10 pointer-events-none">
            <span className="rounded-xs bg-brand-slate-deep/90 border border-neutral-700 px-3 py-1.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md">
              📹 {title}
            </span>
          </div>
        )}
      </div>

      {/* Info Card for Secondary Videos */}
      {!isPrimary && (
        <div className="p-4 bg-brand-slate-surface flex-1 flex flex-col justify-between border-t border-brand-slate-border">
          <div>
            <h4 className="text-sm font-bold text-white group-hover:text-accent-brass transition-colors">
              {title}
            </h4>
            {description && (
              <p className="mt-1 text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                {description}
              </p>
            )}
          </div>
          <div className="mt-3 pt-2 border-t border-neutral-700/60 flex items-center justify-between text-[11px] text-neutral-400">
            <span>আসল ভিডিও ক্লিপ</span>
            <span className="text-accent-whatsapp font-medium">
              {isPlaying ? "চলছে..." : "প্লে করতে ট্যাপ করুন"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShowroomMedia() {
  const tourVideoSrc = "/videos/showroom/heaven-virtual-showroom-tour.mp4";
  const tourPoster = "/assets/showroom/heaven-virtual-showroom-tour.webp";

  return (
    <section
      id="showroom-tour"
      className="bg-brand-slate-deep text-white py-12 sm:py-16 lg:py-20 border-b border-neutral-800"
    >
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-8 lg:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-accent-brass uppercase">
            বাস্তব ভিডিও ও ভার্চুয়াল ট্যুর
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            আমাদের শোরুম ও কারিগরির কিছু মুহূর্ত
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-300 leading-relaxed">
            কোনো সোশ্যাল মিডিয়া এম্বেড নয়; সরাসরি দেখে নিন আমাদের আগ্রাবাদ শোরুম এবং দেখুন কীভাবে প্রতিটি কাঠের জোড়া, নকশা ও কুশন যত্নসহকারে তৈরি হয়।
          </p>
        </div>

        {/* Visual Hierarchy: Grand Primary Virtual Tour Video */}
        <div className="mb-8 sm:mb-12">
          <LocalAutoVideo
            src={tourVideoSrc}
            poster={tourPoster}
            title="আগ্রাবাদ শোরুম — ভার্চুয়াল ট্যুর ভিডিও"
            badge="ভার্চুয়াল শোরুম ট্যুর"
            isPrimary={true}
          />
        </div>

        {/* Secondary Craftsmanship & Showroom Display Videos */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              কারিগরদের কাজ ও শোরুমের আরও কিছু ভিডিও
            </h3>
            <span className="text-xs text-neutral-400">স্ক্রোল করলে স্বয়ংক্রিয়ভাবে প্লে হবে</span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CRAFT_VIDEOS.map((video: CraftVideoItem) => (
              <LocalAutoVideo
                key={video.id}
                src={video.localVideoSrc}
                poster={video.posterSrc}
                title={video.titleBn}
                description={video.descriptionBn}
                badge={video.badgeBn}
              />
            ))}
          </div>
        </div>

        {/* Bottom Showroom Action & Official Social Links */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-sm border border-brand-slate-border bg-brand-slate-surface p-5 sm:p-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              ভালো লাগলে সরাসরি আগ্রাবাদ শোরুমে এসে দেখে যান
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-neutral-300">
              আগ্রাবাদ এক্সেস রোড (RAK সিরামিক্সের বিপরীতে), আগ্রাবাদ, চট্টগ্রাম
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#showroom"
              className="inline-flex h-11 items-center justify-center rounded-sm bg-accent-brass px-5 text-xs sm:text-sm font-bold text-brand-slate-deep hover:bg-accent-brass-hover transition-colors"
            >
              📍 শোরুমের ঠিকানা ও সময়
            </a>

            <a
              href={BRAND_CONFIG.social.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-sm border border-neutral-600 bg-brand-slate-deep px-4 text-xs font-semibold text-neutral-200 hover:text-white hover:border-neutral-400 transition-colors"
            >
              ফেসবুক পেজ ↗
            </a>

            <a
              href={BRAND_CONFIG.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-sm border border-neutral-600 bg-brand-slate-deep px-4 text-xs font-semibold text-neutral-200 hover:text-white hover:border-neutral-400 transition-colors"
            >
              ইনস্টাগ্রাম ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
