"use client";

import { useState } from "react";
import Image from "next/image";
import { BRAND_CONFIG, GalleryItem } from "@/content/brand";
import { WhatsAppIcon } from "@/components/icons";

const CATEGORIES = [
  { key: "all", labelBn: "সব ফার্নিচার" },
  { key: "living", labelBn: "লিভিং ও ড্রয়িং" },
  { key: "bedroom", labelBn: "বেডরুম" },
  { key: "dining", labelBn: "ডাইনিং" },
  { key: "office", labelBn: "অফিস ও স্টোরেজ" },
  { key: "custom", labelBn: "কাস্টম ফার্নিচার" },
] as const;

export default function CuratedSpaces() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const items =
    activeCategory === "all"
      ? BRAND_CONFIG.gallery
      : BRAND_CONFIG.gallery.filter((item) => item.category === activeCategory);

  return (
    <section id="collection" className="bg-surface-ecru-paper py-14 sm:py-20 lg:py-24 border-t border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary-dark">
              আমাদের ফার্নিচার কালেকশন
            </h2>
            <p className="mt-2 text-base text-text-secondary-dark">
              আগ্রাবাদ শোরুমে থাকা আমাদের তৈরি ফার্নিচার। ছবি দেখুন, পছন্দ হলে সরাসরি শোরুমে আসুন বা দাম ও সাইজ জানতে মেসেজ দিন।
            </p>
          </div>

          {/* Simple Category Tabs */}
          <div
            className="flex gap-2 overflow-x-auto pb-1 scrollbar-none sm:flex-wrap"
            role="tablist"
            aria-label="ফার্নিচার ক্যাটাগরি"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                role="tab"
                aria-selected={activeCategory === cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`shrink-0 rounded-sm px-4 py-2 text-sm font-semibold transition-colors cursor-pointer ${
                  activeCategory === cat.key
                    ? "bg-brand-slate-deep text-white"
                    : "border border-neutral-300 bg-white text-text-secondary-dark hover:border-neutral-500 hover:text-text-primary-dark"
                }`}
              >
                {cat.labelBn}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid — Photography First */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item: GalleryItem) => {
            const itemWhatsAppUrl = `https://wa.me/8801960481983?text=${encodeURIComponent(
              `আসসালামু আলাইকুম, আমি হেভেন ফার্নিচার মার্টের "${item.titleBn}" এর দাম আর সাইজ সম্পর্কে জানতে চাই।`
            )}`;

            return (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-sm border border-neutral-200 bg-white shadow-xs transition-shadow duration-200 hover:shadow-md"
              >
                {/* Real Photo Dominates */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 rounded-xs bg-brand-slate-deep/90 px-2.5 py-1 text-[11px] font-semibold text-accent-brass backdrop-blur-xs">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Short Product Info & Single Clear Action */}
                <div className="flex flex-1 flex-col p-4 sm:p-5 justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-text-primary-dark">
                      {item.titleBn}
                    </h3>
                    <p className="mt-1 text-xs text-text-secondary-dark leading-relaxed">
                      {item.descriptionBn}
                    </p>
                  </div>

                  {/* Clean Human Action */}
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <a
                      href={itemWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-accent-whatsapp-dark hover:text-accent-whatsapp transition-colors"
                      aria-label={`${item.titleBn} এর দাম আর সাইজ জানতে হোয়াটসঅ্যাপ করুন`}
                    >
                      <WhatsAppIcon size={16} className="text-accent-whatsapp shrink-0" />
                      <span>দাম আর সাইজ জানতে মেসেজ করুন</span>
                    </a>

                    <span className="text-[11px] text-neutral-400">
                      {item.categoryLabelBn}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
