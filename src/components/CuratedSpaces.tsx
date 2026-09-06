"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import { BRAND_CONFIG, type GalleryItem } from "@/content/brand";
import { TRANSLATIONS } from "@/content/translations";
import { useLanguage } from "@/context/LanguageContext";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

const ProductPreviewModal = dynamic(() => import("./ProductPreviewModal"), { ssr: false });

const CATEGORIES = [
  { key: "all", labelBn: "সব ফার্নিচার", labelEn: "All Pieces" },
  { key: "living", labelBn: "লিভিং রুম", labelEn: "Living Room" },
  { key: "bedroom", labelBn: "বেডরুম", labelEn: "Bedroom" },
  { key: "dining", labelBn: "ডাইনিং", labelEn: "Dining" },
  { key: "custom", labelBn: "কাস্টম তৈরি", labelEn: "Custom Made" },
];

export default function CuratedSpaces() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showAll, setShowAll] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<GalleryItem | null>(null);

  const tc = TRANSLATIONS.collections;

  const openPreview = (product: GalleryItem) => {
    setSelectedProduct(product);
  };

  const closePreview = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  // Listen to category filter events from Hero or other triggers
  useEffect(() => {
    const handleFilterCategory = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setActiveCategory(customEvent.detail);
        setShowAll(false);
      }
    };

    window.addEventListener("filter-category", handleFilterCategory);
    return () => window.removeEventListener("filter-category", handleFilterCategory);
  }, []);

  const items =
    activeCategory === "all"
      ? BRAND_CONFIG.gallery
      : BRAND_CONFIG.gallery.filter((item) => item.category === activeCategory);

  return (
    <section
      id="collection"
      className="bg-surface-ecru-paper py-10 sm:py-14 lg:py-16 border-t border-b border-neutral-200"
    >
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-8 lg:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-7 sm:mb-9 reveal-on-scroll">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-accent-brass-dark uppercase">
              {t(tc.badge.bn, tc.badge.en)}
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary-dark">
              {t(tc.title.bn, tc.title.en)}
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-text-secondary-dark leading-relaxed">
              {t(tc.subtitle.bn, tc.subtitle.en)}
            </p>
          </div>

          {/* Category Tabs */}
          <div
            className="flex gap-2 overflow-x-auto pb-1 no-scrollbar sm:flex-wrap"
            role="tablist"
            aria-label={t("ফার্নিচার ক্যাটাগরি", "Furniture Categories")}
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
                className={`shrink-0 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  activeCategory === cat.key
                    ? "bg-brand-slate-deep text-white shadow-xs"
                    : "border border-neutral-300 bg-white text-text-secondary-dark hover:border-neutral-500 hover:text-text-primary-dark"
                }`}
              >
                {t(cat.labelBn, cat.labelEn)}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {items.map((item: GalleryItem, index: number) => {
            const visibilityClass = showAll
              ? "flex"
              : index < 6
              ? "flex"
              : index < 8
              ? "hidden sm:flex"
              : "hidden";

            const itemTitle = lang === "en" && item.titleEn ? item.titleEn : item.titleBn;
            const itemDesc = lang === "en" && item.descriptionEn ? item.descriptionEn : item.descriptionBn;
            const itemCatLabel = lang === "en" && item.categoryLabelEn ? item.categoryLabelEn : item.categoryLabelBn;
            const itemBadge = lang === "en" ? (item.badgeEn || item.badge) : (item.badge || item.badgeEn);

            return (
              <button
                type="button"
                key={item.id}
                onClick={() => openPreview(item)}
                className={`${visibilityClass} group flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xs transition-all duration-200 hover:border-accent-brass hover:shadow-md active:scale-[0.99] cursor-pointer text-left w-full`}
              >
                {/* Product Photo */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    quality={85}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {itemBadge && (
                    <span className="absolute top-3 left-3 rounded-xs bg-brand-slate-deep/90 px-2.5 py-1 text-[11px] font-semibold text-accent-brass backdrop-blur-xs">
                      {itemBadge}
                    </span>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/15 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      🔍 {t(tc.viewDetails.bn, tc.viewDetails.en)}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-1 flex-col p-4 sm:p-5 justify-between w-full">
                  <div>
                    <span className="text-[11px] font-semibold text-accent-brass-dark uppercase tracking-wider">
                      {itemCatLabel}
                    </span>
                    <span
                      role="heading"
                      aria-level={3}
                      className="block mt-1 text-base sm:text-lg font-bold text-text-primary-dark group-hover:text-accent-brass-dark transition-colors"
                    >
                      {itemTitle}
                    </span>
                    <span className="block mt-1 text-xs sm:text-sm text-text-secondary-dark leading-relaxed line-clamp-2">
                      {itemDesc}
                    </span>
                  </div>

                  {/* Action Link */}
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between w-full">
                    <span className="text-xs sm:text-sm font-semibold text-accent-brass-dark group-hover:underline">
                      {t("দাম ও সাইজ জানতে →", "View Details & Price →")}
                    </span>
                    {item.additionalImages.length > 1 && (
                      <span className="text-[11px] text-neutral-400">
                        {item.additionalImages.length} {t("টি ছবি", "photos")}
                      </span>
                    )}
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
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 text-sm sm:text-base font-bold text-text-primary-dark shadow-2xs hover:border-brand-slate-deep hover:bg-neutral-50 transition-colors cursor-pointer"
              aria-expanded={showAll}
            >
              <span>{showAll ? t("সংক্ষেপে দেখুন", "Show Less") : t("আরও ফার্নিচার দেখুন", "View More Furniture")}</span>
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

      {/* Lightbox Preview Modal */}
      {selectedProduct && (
        <ProductPreviewModal
          product={selectedProduct}
          onClose={closePreview}
        />
      )}
    </section>
  );
}
