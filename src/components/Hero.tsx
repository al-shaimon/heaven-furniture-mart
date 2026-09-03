import Image from "next/image";
import { BRAND_CONFIG } from "@/content/brand";

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
            <p className="animate-fade-up mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent-brass sm:mb-5 sm:text-xs md:text-sm sm:tracking-[0.2em]">
              Bespoke Furniture · Agrabad, Chattogram · Est. 2003
            </p>

            {/* Headline */}
            <h1 className="animate-fade-up delay-100 font-serif text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust Chips */}
            <div className="animate-fade-up delay-400 mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-brand-slate-border pt-6">
              {BRAND_CONFIG.trustChips.map((chip) => (
                <span
                  key={chip}
                  className="flex items-center gap-2 text-xs font-medium tracking-wide text-text-secondary-light sm:text-sm"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 text-accent-brass">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image Column */}
          <div className="animate-fade-in delay-200 relative lg:col-span-6 xl:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm lg:aspect-[4/3]">
              <Image
                src="/assets/hero/heaven-classic-living-hero.jpg"
                alt="Heaven Furniture Mart handcrafted solid Chittagong Teak living room suite with silk damask cushions and carved coffee table in an ambient luxury setting"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                preload
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
