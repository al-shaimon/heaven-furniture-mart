"use client";

import { useState } from "react";
import Image from "next/image";
import { BRAND_CONFIG } from "@/content/brand";
import { PhoneIcon } from "@/components/icons";

export default function ShowroomVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = BRAND_CONFIG.social.youtube.tourVideoId;

  return (
    <section id="showroom-tour" className="bg-brand-slate-deep text-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-8 lg:px-12 text-center">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            শোরুমটা আগে একবার দেখে নিন
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-neutral-300 leading-relaxed">
            চট্টগ্রামের আগ্রাবাদ শোরুমে কী কী আছে, ভিডিওতে একবার দেখে নিতে পারেন।
          </p>
        </div>

        {/* Video Player Container */}
        <div className="mt-8 sm:mt-10 overflow-hidden rounded-sm border border-neutral-700 bg-black shadow-2xl">
          <div className="relative aspect-video w-full">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                title={BRAND_CONFIG.social.youtube.tourVideoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
              />
            ) : (
              <div
                className="group relative h-full w-full cursor-pointer"
                onClick={() => setIsPlaying(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setIsPlaying(true);
                }}
                aria-label="শোরুম ট্যুর ভিডিও প্লে করুন"
              >
                <Image
                  src={BRAND_CONFIG.social.youtube.tourThumbnail}
                  alt={BRAND_CONFIG.social.youtube.tourVideoTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02] opacity-90"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/20" />

                {/* Big Red/White YouTube Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-500">
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
                  </div>
                </div>

                {/* Video Title Overlay */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-4 text-left">
                  <span className="rounded-xs bg-black/80 px-2.5 py-1 text-xs sm:text-sm font-semibold text-white backdrop-blur-xs">
                    📹 হেভেন ফার্নিচার মার্ট — ভার্চুয়াল শোরুম ট্যুর
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Prompt */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#showroom"
            className="inline-flex h-[48px] items-center justify-center rounded-sm bg-accent-brass px-6 text-sm sm:text-base font-bold text-brand-slate-deep transition-colors hover:bg-accent-brass-hover"
          >
            📍 শোরুমে আসার পথ ও ঠিকানা
          </a>
          <a
            href={BRAND_CONFIG.contact.phoneUrl}
            className="inline-flex h-[48px] items-center justify-center gap-2 rounded-sm border border-neutral-500 bg-brand-slate-surface px-5 text-sm sm:text-base font-semibold text-white transition-colors hover:border-accent-brass hover:text-accent-brass"
          >
            <PhoneIcon />
            <span>কল করুন: {BRAND_CONFIG.contact.primaryPhoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
