"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

import { BRAND_CONFIG, type GalleryItem } from "@/content/brand";
import { TRANSLATIONS } from "@/content/translations";
import { useLanguage } from "@/context/LanguageContext";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

const CATEGORIES = [
  { key: "all", labelBn: "সব ফার্নিচার", labelEn: "All Pieces" },
  { key: "living", labelBn: "লিভিং রুম", labelEn: "Living Room" },
  { key: "bedroom", labelBn: "বেডরুম", labelEn: "Bedroom" },
  { key: "dining", labelBn: "ডাইনিং", labelEn: "Dining" },
  { key: "custom", labelBn: "কাস্টম তৈরি", labelEn: "Custom Made" },
];

interface ProductPreviewModalProps {
  product: GalleryItem;
  onClose: () => void;
}

const WOOD_FINISH_OPTIONS = [
  { id: "teak", nameBn: "ন্যাচারাল সেগুন ফিনিশ", nameEn: "Natural Teak Finish", swatch: "#A05A2C" },
  { id: "walnut", nameBn: "ডার্ক ওয়ালনাট পলিশ", nameEn: "Dark Walnut Polish", swatch: "#4A2E1B" },
  { id: "antique", nameBn: "ভিক্টোরিয়ান অ্যান্টিক", nameEn: "Victorian Antique", swatch: "#6E261B" },
];

function ProductPreviewModal({ product, onClose }: ProductPreviewModalProps) {
  const { lang, t } = useLanguage();
  const { openQuoteModal } = useQuoteModal();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedFinish, setSelectedFinish] = useState(WOOD_FINISH_OPTIONS[0]);

  // Fullscreen Preview Lightbox state
  const [isFullscreen, setIsFullscreen] = useState(false);
  const modalScrollContainerRef = useRef<HTMLDivElement>(null);

  const tc = TRANSLATIONS.collections;

  const images =
    product.additionalImages && product.additionalImages.length > 0
      ? product.additionalImages
      : [product.imageSrc];

  const hasMultipleImages = images.length > 1;

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const snap = emblaApi.selectedScrollSnap();
    setSelectedIndex(snap);
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    requestAnimationFrame(() => onSelect());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const openFullscreen = useCallback(
    (index?: number) => {
      const targetIdx = typeof index === "number" ? index : selectedIndex;
      setSelectedIndex(targetIdx);
      setIsFullscreen(true);
    },
    [selectedIndex]
  );

  // Keyboard navigation for main modal when lightbox is not active
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFullscreen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        if (emblaApi && hasMultipleImages) {
          emblaApi.scrollPrev();
        }
      } else if (e.key === "ArrowRight") {
        if (emblaApi && hasMultipleImages) {
          emblaApi.scrollNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, isFullscreen, emblaApi, hasMultipleImages]);

  // Lock background body scroll and pause Lenis
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Pause Lenis smooth scrolling for page while modal is open
    const win = window as unknown as { __lenis?: { stop: () => void; start: () => void } };
    if (win.__lenis) {
      win.__lenis.stop();
    }

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      if (win.__lenis) {
        win.__lenis.start();
      }
    };
  }, []);

  const productTitle = lang === "en" && product.titleEn ? product.titleEn : product.titleBn;
  const productDesc = lang === "en" && product.descriptionEn ? product.descriptionEn : product.descriptionBn;
  const categoryLabel = lang === "en" && product.categoryLabelEn ? product.categoryLabelEn : product.categoryLabelBn;
  const finishName = lang === "en" ? selectedFinish.nameEn : selectedFinish.nameBn;

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
        data-lenis-prevent
        className="fixed inset-0 z-[100] flex items-stretch sm:items-center justify-center bg-black/80 p-0 sm:p-4 lg:p-6 backdrop-blur-xs animate-fade-in overscroll-contain overflow-hidden"
        onClick={onClose}
      >
        {/* Modal Card - Single Unified Scrollable Container on Mobile */}
        <div
          ref={modalScrollContainerRef}
          data-lenis-prevent
          className="relative flex h-[100dvh] sm:h-auto w-full max-w-5xl max-h-[100dvh] sm:max-h-[92vh] lg:max-h-[88vh] flex-col overflow-y-auto lg:overflow-hidden rounded-none sm:rounded-2xl bg-white shadow-2xl transition-all overscroll-contain scrollbar-thin-brass"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Floating Close Button - fixed on mobile top-right so it stays accessible when scrolling */}
          <button
            type="button"
            onClick={onClose}
            className="fixed sm:absolute top-3 right-3 z-40 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white lg:bg-neutral-100 lg:text-neutral-600 shadow-md backdrop-blur-xs transition-colors hover:bg-black/90 lg:hover:bg-neutral-200 hover:text-white lg:hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-brand-slate-deep cursor-pointer border border-white/20 lg:border-neutral-200"
            aria-label={t(tc.modal.close.bn, tc.modal.close.en)}
          >
            ✕
          </button>

          <div
            className="flex flex-col lg:grid lg:grid-cols-12 w-full min-h-full lg:h-[650px] xl:h-[680px] lg:overflow-hidden"
          >
            {/* Left Column: Visual Swiper */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-neutral-900 p-2.5 sm:p-4 lg:p-4 xl:p-5 relative select-none shrink-0 h-[58dvh] xs:h-[62dvh] sm:h-[66dvh] lg:h-full min-h-[450px] xs:min-h-[490px] sm:min-h-[530px] lg:min-h-0">
              {/* Embla Viewport Container with consistent height and backdrop */}
              <div className="relative w-full flex-1 min-h-[350px] xs:min-h-[390px] sm:min-h-[430px] lg:min-h-0 flex items-center justify-center overflow-hidden rounded-lg sm:rounded-xl bg-neutral-950 border border-neutral-800">
                <div className="overflow-hidden w-full h-full" ref={emblaRef}>
                  <div className="flex h-full touch-pan-y">
                    {images.map((src, idx) => (
                      <div
                        key={idx}
                        onClick={() => openFullscreen(idx)}
                        className="relative flex-[0_0_100%] min-w-0 h-full w-full flex items-center justify-center overflow-hidden cursor-zoom-in group select-none"
                        title={t("পূর্ণ পর্দায় দেখতে ক্লিক করুন", "Click to view full screen")}
                      >
                        {/* Ambient Blurred Aura for Consistent Visual Harmony */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <Image
                            src={src}
                            alt=""
                            fill
                            aria-hidden="true"
                            className="object-cover blur-md sm:blur-xl opacity-20 scale-110 transform-gpu"
                          />
                          <div className="absolute inset-0 bg-neutral-950/30" />
                        </div>

                        {/* Foreground Sharp Image */}
                        <div className="relative w-full h-full p-1.5 sm:p-3.5 flex items-center justify-center z-10">
                          <Image
                            src={src}
                            alt={`${productTitle} - ${idx + 1}`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 650px"
                            priority={idx === 0}
                            className="object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prev/Next Navigation Arrows on Modal */}
                {hasMultipleImages && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        emblaApi?.scrollPrev();
                      }}
                      disabled={!canScrollPrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xs transition-all hover:bg-black/90 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                      aria-label="Previous image"
                    >
                      ❮
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        emblaApi?.scrollNext();
                      }}
                      disabled={!canScrollNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-xs transition-all hover:bg-black/90 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                      aria-label="Next image"
                    >
                      ❯
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              {hasMultipleImages && (
                <div className="mt-2.5 flex gap-2 sm:gap-2.5 overflow-x-auto pb-0.5 pt-0.5 scrollbar-thin-brass justify-start sm:justify-center items-center shrink-0">
                  {images.map((src, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => scrollTo(idx)}
                      className={`relative h-10 w-14 xs:h-11 xs:w-16 sm:h-12 sm:w-18 shrink-0 overflow-hidden rounded-xs border-2 transition-all cursor-pointer bg-neutral-950 ${
                        selectedIndex === idx
                          ? "border-accent-brass shadow-sm scale-105 ring-1 ring-accent-brass/50"
                          : "border-white/15 opacity-60 hover:opacity-100 hover:border-white/40"
                      }`}
                      aria-label={`View photo ${idx + 1}`}
                    >
                      <Image
                        src={src}
                        alt={`${productTitle} thumbnail ${idx + 1}`}
                        fill
                        sizes="64px"
                        className="object-contain p-0.5"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Product Story, Specs & CTAs (Natural Flow on Mobile, Scrollable on Desktop) */}
            <div
              className="lg:col-span-5 p-4 sm:p-5 lg:p-5 xl:p-6 flex flex-col justify-between bg-white space-y-4 pb-12 sm:pb-5 safe-bottom lg:overflow-y-auto lg:min-h-0 lg:scrollbar-thin-brass"
            >
              <div className="space-y-3">
                {/* Category & Showroom Status */}
                <div className="flex items-center justify-between gap-2 border-b border-neutral-100 pb-2 lg:pr-11">
                  <span className="text-[11px] sm:text-xs font-bold text-accent-brass-dark uppercase tracking-wider truncate min-w-0">
                    {lang === "en" ? `${categoryLabel} Collection` : `${categoryLabel} কালেকশন`}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 sm:px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {t(tc.showroomStatus.bn, tc.showroomStatus.en)}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3
                    id="modal-product-title"
                    className="text-xl sm:text-2xl font-extrabold text-brand-slate-deep tracking-tight leading-snug"
                  >
                    {productTitle}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-text-secondary-dark leading-relaxed">
                    {productDesc}
                  </p>
                </div>

                {/* Craftsmanship Specifications List */}
                <div className="rounded-lg bg-surface-ecru-light/60 p-2.5 sm:p-3 border border-neutral-200/70 space-y-1.5 text-xs text-text-primary-dark">
                  <div className="flex items-start gap-2">
                    <span className="text-sm leading-none mt-0.5">🪵</span>
                    <div>
                      <span className="font-bold">{t(tc.specs.frame.label.bn, tc.specs.frame.label.en)}</span>
                      <span className="text-text-secondary-dark ml-1">{t(tc.specs.frame.val.bn, tc.specs.frame.val.en)}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-sm leading-none mt-0.5">✨</span>
                    <div>
                      <span className="font-bold">{t(tc.specs.finish.label.bn, tc.specs.finish.label.en)}</span>
                      <span className="text-text-secondary-dark ml-1">{t(tc.specs.finish.val.bn, tc.specs.finish.val.en)}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-sm leading-none mt-0.5">📐</span>
                    <div>
                      <span className="font-bold">{t("কাস্টম মাপ:", "Custom Sizing:")}</span>
                      <span className="text-text-secondary-dark ml-1">{t("আপনার রুমের নির্দিষ্ট মাপ অনুযায়ী তৈরি সম্ভব", "Custom crafted to fit your room dimensions")}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-sm leading-none mt-0.5">🛡️</span>
                    <div>
                      <span className="font-bold">{t(tc.specs.warranty.label.bn, tc.specs.warranty.label.en)}</span>
                      <span className="text-text-secondary-dark ml-1">{t(tc.specs.warranty.val.bn, tc.specs.warranty.val.en)}</span>
                    </div>
                  </div>
                </div>

                {/* Finish & Custom Polish Palette */}
                <div className="pt-1">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-bold text-text-primary-dark">{t("পছন্দের পলিশ ফিনিশ:", "Wood Finish Color:")}</span>
                    <span className="text-[11px] font-semibold text-accent-brass-dark">{finishName}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {WOOD_FINISH_OPTIONS.map((finish) => {
                      const isSelected = selectedFinish.id === finish.id;
                      return (
                        <button
                          key={finish.id}
                          type="button"
                          onClick={() => setSelectedFinish(finish)}
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? "bg-brand-slate-deep text-white shadow-xs ring-2 ring-accent-brass"
                              : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200/80"
                          }`}
                        >
                          <span
                            className="h-2.5 w-2.5 rounded-full border border-white/40 shrink-0"
                            style={{ backgroundColor: finish.swatch }}
                            aria-hidden="true"
                          />
                          <span>{t(finish.nameBn, finish.nameEn)}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Action CTAs: WhatsApp + Request Quote Modal Trigger */}
              <div className="pt-2.5 border-t border-neutral-200 space-y-2">
                <a
                  href={`https://wa.me/8801960481983?text=${encodeURIComponent(
                    lang === "en"
                      ? `Hello, I would like to inquire about Heaven Furniture Mart's "${productTitle}" (${finishName}). Could you please share the current price and sizing details?`
                      : `আসসালামু আলাইকুম, আমি হেভেন ফার্নিচার মার্টের "${productTitle}" (${finishName}) সম্পর্কে জানতে চাই। এর বর্তমান দাম ও সাইজ সম্পর্কে বিস্তারিত জানাবেন কি?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 sm:h-10.5 w-full items-center justify-center gap-2 rounded-xl bg-accent-whatsapp px-4 text-xs sm:text-sm font-bold text-brand-slate-deep shadow-xs transition-all hover:bg-accent-whatsapp-hover active:scale-[0.99] cursor-pointer"
                  aria-label={t(tc.modal.askWhatsApp.bn, tc.modal.askWhatsApp.en)}
                >
                  <WhatsAppIcon size={18} className="shrink-0" />
                  <span>{t(tc.modal.askWhatsApp.bn, tc.modal.askWhatsApp.en)}</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    openQuoteModal({
                      defaultCategory: product.category,
                      defaultProductTitle: productTitle,
                    });
                  }}
                  className="flex h-10 sm:h-10.5 w-full items-center justify-center gap-2 rounded-xl bg-brand-slate-deep px-4 text-xs sm:text-sm font-bold text-white shadow-xs transition-all hover:bg-brand-slate-surface active:scale-[0.99] cursor-pointer border border-neutral-700"
                >
                  <span>📋 {t(tc.modal.requestQuote.bn, tc.modal.requestQuote.en)}</span>
                </button>

                <div className="flex items-center justify-between text-[11px] sm:text-xs text-text-secondary-dark px-0.5 pt-0.5">
                  <a
                    href={BRAND_CONFIG.contact.phoneUrl}
                    className="hover:text-text-primary-dark transition-colors inline-flex items-center gap-1.5 font-bold hover:underline cursor-pointer"
                  >
                    <PhoneIcon className="h-3.5 w-3.5 text-accent-brass-dark" />
                    <span>{t("কল দিন:", "Call:")} {BRAND_CONFIG.contact.primaryPhoneDisplay}</span>
                  </a>

                  <span className="text-neutral-400">
                    📍 {t("আগ্রাবাদ এক্সেস রোড", "Agrabad Access Road")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Preview Lightbox using yet-another-react-lightbox */}
      <Lightbox
        open={isFullscreen}
        close={() => setIsFullscreen(false)}
        index={selectedIndex}
        slides={images.map((src) => ({
          src,
          alt: productTitle,
        }))}
        plugins={hasMultipleImages ? [Zoom, Thumbnails, Counter] : [Zoom]}
        on={{
          view: ({ index }) => {
            setSelectedIndex(index);
            emblaApi?.scrollTo(index);
          },
        }}
        controller={{
          closeOnBackdropClick: true,
          closeOnPullDown: true,
          closeOnPullUp: true,
        }}
        carousel={{
          finite: false,
          preload: 2,
          padding: "0px",
        }}
        zoom={{
          maxZoomPixelRatio: 3.5,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          scrollToZoom: true,
        }}
        thumbnails={
          hasMultipleImages
            ? {
                position: "bottom",
                width: 72,
                height: 52,
                border: 2,
                borderRadius: 6,
                padding: 0,
                gap: 8,
                showToggle: false,
              }
            : undefined
        }
        animation={{
          fade: 220,
          swipe: 240,
        }}
      />
    </>
  );
}

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
