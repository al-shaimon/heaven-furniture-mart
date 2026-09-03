import Image from "next/image";
import { BRAND_CONFIG } from "@/content/brand";
import { WhatsAppIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-brand-slate-deep text-text-primary-light"
    >
      {/* Content Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid gap-8 pt-24 pb-14 sm:pt-30 sm:pb-20 lg:grid-cols-12 lg:gap-12 lg:pt-36 lg:pb-24">
          {/* Text Column */}
          <div className="flex flex-col justify-center lg:col-span-6 xl:col-span-5">
            {/* Eyebrow */}
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent-brass sm:mb-4 sm:text-xs md:text-sm sm:tracking-[0.2em]">
              Bespoke Furniture · Agrabad, Chattogram · Est. 2003
            </p>

            {/* Headline */}
            <h1 className="font-serif text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Furniture, Crafted
              <br />
              Around{" "}
              <span className="italic text-accent-brass">You.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="animate-fade-up delay-200 mt-4 max-w-xl text-sm leading-relaxed text-text-secondary-light sm:mt-6 sm:text-base md:text-lg sm:leading-relaxed">
              We don&apos;t pull furniture off a shelf. From solid Chittagong
              Teak living suites to tailored bedroom sanctuaries, every piece is
              custom-designed and built to fit your room&apos;s exact dimensions,
              lifestyle, and taste.
            </p>

            {/* CTA Row */}
            <div className="animate-fade-up delay-300 mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#consultation"
                className="inline-flex h-12 w-full items-center justify-center rounded-sm border border-accent-brass/40 bg-accent-brass px-6 text-xs font-semibold tracking-wide text-brand-slate-deep transition-all duration-300 hover:bg-accent-brass-hover active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent-brass focus-visible:ring-offset-2 focus-visible:ring-offset-brand-slate-deep sm:h-[52px] sm:w-auto sm:px-7 sm:text-sm"
              >
                Book a Free Design Consultation
              </a>
              <a
                href={BRAND_CONFIG.cta.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm border border-text-secondary-light/30 px-5 text-xs font-medium text-text-primary-light transition-all duration-300 hover:border-accent-whatsapp hover:text-accent-whatsapp active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent-brass focus-visible:ring-offset-2 focus-visible:ring-offset-brand-slate-deep sm:h-[52px] sm:w-auto sm:px-6 sm:text-sm"
              >
                <WhatsAppIcon size={16} className="shrink-0" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Zero-obligation micro-reassurance */}
            <p className="mt-2.5 text-[11px] text-text-secondary-light/80 sm:text-xs">
              ✦ Zero obligation · Bring your floor plan or room dimensions · Direct atelier guidance
            </p>

            {/* Atelier Verification Strip */}
            <div className="animate-fade-up delay-400 mt-8 flex flex-wrap items-center gap-x-3.5 gap-y-2 border-t border-brand-slate-border pt-6 text-xs text-text-secondary-light sm:text-sm">
              <span className="font-medium text-text-primary-light tracking-wider uppercase text-[11px] sm:text-xs">
                Standards:
              </span>
              {BRAND_CONFIG.trustChips.map((chip, idx) => (
                <span key={chip} className="flex items-center gap-2.5">
                  {idx > 0 && (
                    <span className="text-[8px] text-accent-brass/70" aria-hidden="true">
                      ◆
                    </span>
                  )}
                  <span className="tracking-wide text-neutral-300">{chip}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image Column */}
          <div className="relative lg:col-span-6 xl:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm lg:aspect-[4/3]">
              <Image
                src="/assets/hero/heaven-classic-living-hero.webp"
                alt="Heaven Furniture Mart handcrafted solid Chittagong Teak living room suite with silk damask cushions and carved coffee table in an ambient luxury setting"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-1000 ease-out hover:scale-[1.015]"
              />
              {/* Subtle bottom gradient for text legibility on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-slate-deep/20 via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Edge Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-accent-brass/15" />
    </section>
  );
}
