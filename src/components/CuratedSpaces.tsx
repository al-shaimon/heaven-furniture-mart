"use client";

import { useState } from "react";
import Image from "next/image";
import { BRAND_CONFIG, CollectionItem } from "@/content/brand";

const CATEGORIES = [
  { key: "all", label: "All Spaces" },
  { key: "living", label: "Living Room" },
  { key: "dining", label: "Dining Room" },
  { key: "bedroom", label: "Bedrooms" },
  { key: "bespoke", label: "Bespoke & Storage" },
] as const;

export default function CuratedSpaces() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems =
    activeCategory === "all"
      ? BRAND_CONFIG.collections
      : BRAND_CONFIG.collections.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section id="spaces" className="bg-surface-ecru-paper py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 reveal-on-scroll">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-brass sm:text-sm sm:tracking-[0.2em]">
              Curated Spaces
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight tracking-tight text-text-primary-dark sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
              Designed for Living.{" "}
              <span className="text-text-secondary-dark italic">
                Crafted for Life.
              </span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary-dark sm:mt-4 sm:text-base md:text-lg">
              Explore bespoke environments crafted for discerning Chattogram homes.
              Every piece can be dimensioned to your room&apos;s blueprint.
            </p>
          </div>

          {/* Category Filter Pills — Smooth horizontal swipe on mobile */}
          <div
            className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap sm:pb-0 md:mt-0"
            role="tablist"
            aria-label="Furniture spaces filter"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                role="tab"
                aria-selected={activeCategory === cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`shrink-0 rounded-sm px-3.5 py-2 text-xs font-semibold tracking-wide transition-all duration-300 sm:px-4 sm:text-sm ${
                  activeCategory === cat.key
                    ? "bg-brand-slate-deep text-text-primary-light shadow-sm"
                    : "border border-neutral-300 bg-transparent text-text-secondary-dark hover:border-accent-brass hover:text-text-primary-dark"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Collections Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {filteredItems.map((item: CollectionItem) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-sm border border-neutral-200/80 bg-surface-ecru-light transition-all duration-300 hover:border-accent-brass/40 hover:shadow-md"
            >
              {/* Image Container with Natural Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <span className="absolute top-3 left-3 rounded-xs bg-brand-slate-deep/85 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-brass backdrop-blur-xs">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-serif text-xl font-semibold tracking-tight text-text-primary-dark sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent-brass">
                  {item.headline}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary-dark">
                  {item.description}
                </p>

                {/* Features list */}
                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-neutral-200/60 pt-4">
                  {item.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="rounded-xs bg-surface-ecru-paper px-2 py-0.5 text-[11px] font-medium text-text-secondary-dark"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Card Action */}
                <div className="mt-6 flex items-center justify-between pt-2">
                  <a
                    href="#consultation"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-slate-deep transition-colors group-hover:text-accent-brass"
                  >
                    Request Custom Sizing
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* In-Context Micro Prompt */}
        <div className="mt-14 rounded-sm border border-accent-brass/20 bg-surface-ecru-light p-6 text-center sm:p-8">
          <p className="font-serif text-lg font-medium text-text-primary-dark sm:text-xl">
            Have a unique architectural blueprint or room dimension?
          </p>
          <p className="mt-2 text-sm text-text-secondary-dark sm:text-base">
            Every piece above can be engineered to your exact room measurements, with your choice of Chittagong Teak, marble slabs, or luxury fabrics.
          </p>
          <a
            href="#consultation"
            className="mt-5 inline-flex items-center gap-2 rounded-sm border border-accent-brass/40 bg-brand-slate-deep px-6 py-2.5 text-xs font-semibold tracking-wide text-text-primary-light transition-all hover:bg-brand-slate-surface sm:text-sm"
          >
            Review Your Floor Plan With Us
          </a>
        </div>
      </div>
    </section>
  );
}
