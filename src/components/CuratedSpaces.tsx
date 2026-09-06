"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { BRAND_CONFIG, GalleryItem } from "@/content/brand";
import { WhatsAppIcon, PhoneIcon } from "@/components/icons";

const CATEGORIES = [
  { key: "all", labelBn: "সব কালেকশন" },
  { key: "living", labelBn: "লিভিং রুম" },
  { key: "bedroom", labelBn: "বেডরুম" },
  { key: "dining", labelBn: "ডাইনিং" },
  { key: "office", labelBn: "অফিস" },
  { key: "custom", labelBn: "কাস্টম" },
] as const;

export default function CuratedSpaces() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showAll, setShowAll] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<GalleryItem | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const openPreview = (product: GalleryItem) => {
    setSelectedProduct(product);
    setSelectedImageIndex(0);
  };

  const closePreview = useCallback(() => {
    setSelectedProduct(null);
    setSelectedImageIndex(0);
  }, []);

  // Keyboard navigation: ESC to close, Left/Right arrows to cycle thumbnails
  useEffect(() => {
    if (!selectedProduct) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closePreview();
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) =>
          prev < selectedProduct.additionalImages.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) =>
          prev > 0 ? prev - 1 : selectedProduct.additionalImages.length - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProduct, closePreview]);

  const items =
    activeCategory === "all"
      ? BRAND_CONFIG.gallery
      : BRAND_CONFIG.gallery.filter((item) => item.category === activeCategory);

  return (
    <section
      id="collection"
      className="bg-surface-ecru-paper py-12 sm:py-16 lg:py-20 border-t border-b border-neutral-200"
    >
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-8 lg:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-accent-brass-dark uppercase">
              আগ্রাবাদ শোরুম কালেকশন
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary-dark">
              আমাদের ফার্নিচার কালেকশন
            </h2>
            <p className="mt-2 text-sm sm:text-base text-text-secondary-dark leading-relaxed">
              আসল ফার্নিচারের ছবি দেখুন। যেকোনো মডেলের বিস্তারিত ছবি ও সাইজ জানতে কার্ডে ক্লিক করুন।
            </p>
          </div>

          {/* Simple Category Tabs */}
          <div
            className="flex gap-2 overflow-x-auto pb-1 no-scrollbar sm:flex-wrap"
            role="tablist"
            aria-label="ফার্নিচার ক্যাটাগরি"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                role="tab"
                aria-selected={activeCategory === cat.key}
                onClick={() => {
                  setActiveCategory(cat.key);
                  setShowAll(false);
                }}
                className={`shrink-0 rounded-sm px-4 py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  activeCategory === cat.key
                    ? "bg-brand-slate-deep text-white shadow-xs"
                    : "border border-neutral-300 bg-white text-text-secondary-dark hover:border-neutral-500 hover:text-text-primary-dark"
                }`}
              >
                {cat.labelBn}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid — 4 Columns on 1920px Full HD (8 items initial on desktop, 6 on mobile) */}
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {items.map((item: GalleryItem, index: number) => {
            const visibilityClass = showAll
              ? "flex"
              : index < 6
              ? "flex"
              : index < 8
              ? "hidden sm:flex"
              : "hidden";

            return (
              <button
                type="button"
                key={item.id}
                onClick={() => openPreview(item)}
                className={`${visibilityClass} group flex-col overflow-hidden rounded-sm border border-neutral-200 bg-white shadow-2xs transition-all duration-200 hover:border-accent-brass hover:shadow-md active:scale-[0.99] active:opacity-95 cursor-pointer text-left w-full`}
              >
                {/* Real Photography Dominates */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 rounded-xs bg-brand-slate-deep/90 px-2.5 py-1 text-[11px] font-semibold text-accent-brass backdrop-blur-xs">
                      {item.badge}
                    </span>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/15 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      🔍 বিস্তারিত দেখুন
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-1 flex-col p-4 sm:p-5 justify-between w-full">
                  <div>
                    <span className="text-[11px] font-semibold text-accent-brass-dark uppercase tracking-wider">
                      {item.categoryLabelBn}
                    </span>
                    <span
                      role="heading"
                      aria-level={3}
                      className="block mt-1 text-base sm:text-lg font-bold text-text-primary-dark group-hover:text-accent-brass-dark transition-colors"
                    >
                      {item.titleBn}
                    </span>
                    <span className="block mt-1 text-xs sm:text-sm text-text-secondary-dark leading-relaxed line-clamp-2">
                      {item.descriptionBn}
                    </span>
                  </div>

                  {/* Subtle Action Link */}
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between w-full">
                    <span className="text-xs sm:text-sm font-semibold text-accent-brass-dark group-hover:underline">
                      দাম ও সাইজ জানতে →
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      {item.additionalImages.length}টি ছবি
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Show More / Show Less Button */}
        {items.length > 6 && (
          <div
            className={`mt-8 sm:mt-10 flex justify-center ${
              !showAll && items.length <= 8 ? "sm:hidden" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-neutral-300 bg-white px-6 text-sm sm:text-base font-bold text-text-primary-dark shadow-2xs hover:border-brand-slate-deep hover:bg-neutral-50 transition-colors cursor-pointer"
              aria-expanded={showAll}
            >
              <span>{showAll ? "সংক্ষেপে দেখুন" : "আরও ফার্নিচার দেখুন"}</span>
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${
                  showAll ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Modern Product Lightbox (NO SWIPER, 2-Column Desktop, Stacked Mobile) */}
      {selectedProduct && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-product-title"
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-2 sm:p-4 lg:p-6 backdrop-blur-sm"
          onClick={closePreview}
        >
          <div
            className="relative max-h-[94vh] w-full max-w-5xl overflow-y-auto lg:overflow-hidden rounded-md bg-white border border-neutral-200 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Bar */}
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3 sm:px-6 bg-surface-ecru-light">
              <div className="flex items-center gap-2">
                <span className="rounded-xs bg-white border border-neutral-200 px-2.5 py-0.5 text-xs font-semibold text-text-primary-dark">
                  {selectedProduct.categoryLabelBn}
                </span>
                <span className="text-xs text-neutral-500 font-medium">
                  ছবি {selectedImageIndex + 1} / {selectedProduct.additionalImages.length}
                </span>
              </div>

              <button
                type="button"
                onClick={closePreview}
                className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-200 hover:text-text-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent-brass-dark cursor-pointer text-xl font-bold active:scale-95"
                aria-label="বন্ধ করুন"
              >
                ✕
              </button>
            </div>

            {/* 2-Column Responsive Body */}
            <div className="grid lg:grid-cols-12 gap-0 lg:items-stretch overflow-hidden">
              {/* Left Column: Large Image + Thumbnails Strip (7 cols on desktop) */}
              <div className="lg:col-span-7 bg-neutral-950 p-3 sm:p-4 flex flex-col justify-between">
                {/* Large Featured Photo (clean, no giant swiper arrows) */}
                <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-xs bg-black">
                  <Image
                    src={selectedProduct.additionalImages[selectedImageIndex] || selectedProduct.imageSrc}
                    alt={`${selectedProduct.titleBn} - ছবি ${selectedImageIndex + 1}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-contain"
                  />
                </div>

                {/* Clean Thumbnail Navigation Strip */}
                {selectedProduct.additionalImages.length > 1 && (
                  <div className="mt-3 flex gap-2 overflow-x-auto py-1 no-scrollbar">
                    {selectedProduct.additionalImages.map((src, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-xs border-2 transition-all cursor-pointer ${
                          selectedImageIndex === idx
                            ? "border-accent-brass shadow-md scale-105"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                        aria-label={`ছবি ${idx + 1} দেখুন`}
                      >
                        <Image
                          src={src}
                          alt={`ছবি ${idx + 1}`}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Product Info & Direct WhatsApp CTA (5 cols on desktop) */}
              <div className="lg:col-span-5 p-5 sm:p-6 lg:p-8 flex flex-col justify-between bg-white">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-accent-brass-dark uppercase tracking-wider">
                      {selectedProduct.categoryLabelBn}
                    </span>
                    <h3
                      id="modal-product-title"
                      className="mt-1 text-xl sm:text-2xl font-bold text-text-primary-dark"
                    >
                      {selectedProduct.titleBn}
                    </h3>
                  </div>

                  <p className="text-sm text-text-secondary-dark leading-relaxed">
                    {selectedProduct.descriptionBn}
                  </p>

                  {/* Custom Sizing & Finish Note */}
                  <div className="rounded-sm bg-surface-ecru-light p-3.5 border border-neutral-200 text-xs text-text-secondary-dark space-y-1">
                    <p className="font-bold text-text-primary-dark flex items-center gap-1.5">
                      <span>📐</span>
                      <span>কাস্টম সাইজ ও ফিনিশ সম্ভব</span>
                    </p>
                    <p className="leading-relaxed">
                      আপনার ঘরের জায়গার মাপ, পছন্দের কাঠ বা কালার ফিনিশিং অনুযায়ী এই মডেলটি বানিয়ে দেওয়া যাবে।
                    </p>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="mt-6 pt-4 border-t border-neutral-200 space-y-2.5">
                  <a
                    href={`https://wa.me/8801960481983?text=${encodeURIComponent(
                      `আসসালামু আলাইকুম, আমি হেভেন ফার্নিচার মার্টের "${selectedProduct.titleBn}" সম্পর্কে জানতে চাই। এর বর্তমান দাম ও মাপ জানাবেন কি?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-[48px] w-full items-center justify-center gap-2 rounded-sm bg-accent-whatsapp px-5 text-sm font-bold text-brand-slate-deep shadow-xs transition-colors hover:bg-accent-whatsapp-hover cursor-pointer"
                  >
                    <WhatsAppIcon size={18} />
                    <span>দাম ও মাপ জানতে WhatsApp করুন</span>
                  </a>

                  <a
                    href={BRAND_CONFIG.contact.phoneUrl}
                    className="flex h-[44px] w-full items-center justify-center gap-2 rounded-sm border border-neutral-300 bg-white px-5 text-xs font-semibold text-text-primary-dark transition-colors hover:border-neutral-500 hover:bg-neutral-50 cursor-pointer"
                  >
                    <PhoneIcon />
                    <span>সরাসরি শোরুমে কল দিন</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
