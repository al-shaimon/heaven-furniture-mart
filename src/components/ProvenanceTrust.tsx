import Image from "next/image";
import { BRAND_CONFIG } from "@/content/brand";

export default function ProvenanceTrust() {
  const milestones = BRAND_CONFIG.milestones;

  return (
    <section id="provenance" className="bg-surface-ecru-paper py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 reveal-on-scroll">
        {/* Section Eyebrow & Headline */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-brass sm:text-sm sm:tracking-[0.2em]">
            Provenance & Trust
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight tracking-tight text-text-primary-dark sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Two Decades of Craftsmanship{" "}
            <span className="text-text-secondary-dark italic">
              You Can See & Touch.
            </span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary-dark sm:mt-4 sm:text-base md:text-lg">
            Founded in 2003 in Chattogram, Heaven Furniture Mart has grown from a specialized woodworking workshop into one of the region&apos;s most respected bespoke furniture ateliers.
          </p>
        </div>

        {/* Leadership Statement Card */}
        <div className="mt-10 rounded-sm border border-neutral-200/80 bg-surface-ecru-light p-6 shadow-xs sm:p-8 lg:mt-16 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Quote Body */}
            <div className="lg:col-span-8">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-accent-brass/50 sm:h-9 sm:w-9"
                aria-hidden="true"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              </svg>
              <blockquote className="mt-3 font-serif text-lg leading-relaxed text-text-primary-dark sm:mt-4 sm:text-xl md:text-2xl sm:leading-relaxed">
                &ldquo;{BRAND_CONFIG.mdQuote.text}&rdquo;
              </blockquote>
              <div className="mt-5 border-t border-neutral-200/60 pt-4">
                <p className="font-semibold text-text-primary-dark sm:text-lg">
                  {BRAND_CONFIG.mdQuote.author}
                </p>
                <p className="text-xs uppercase tracking-wider text-accent-brass sm:text-sm">
                  {BRAND_CONFIG.mdQuote.title}
                </p>
              </div>
            </div>

            {/* Award Photo with Caption */}
            <div className="lg:col-span-4">
              <div className="relative overflow-hidden rounded-sm border border-neutral-200 bg-surface-ecru-paper">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/assets/trust/heaven-md-receiving-bfma-award.jpg"
                    alt="Managing Director Abul Kalam Bhuiyan receiving the official BFMA recognition crest at the 13th Chattogram Furniture Fair 2024"
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-3.5 text-center sm:p-4">
                  <span className="inline-block rounded-xs bg-accent-brass/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand-slate-deep">
                    BFMA Recognition · 2024
                  </span>
                  <p className="mt-1 text-xs text-text-secondary-dark">
                    Awarded at the 13th Chattogram Furniture Fair
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestones & Team Row */}
        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* Milestones Timeline */}
          <div className="space-y-4 sm:space-y-6 lg:col-span-7">
            <h3 className="font-serif text-xl font-semibold tracking-tight text-text-primary-dark sm:text-2xl">
              Key Historical Milestones
            </h3>
            <div className="divide-y divide-surface-ecru-muted border-t border-surface-ecru-muted">
              {milestones.map((m) => (
                <div key={m.year} className="flex flex-col gap-1.5 py-4 sm:flex-row sm:items-baseline sm:gap-6 sm:py-5">
                  <div className="shrink-0 sm:w-20">
                    <span className="font-serif text-lg font-bold text-accent-brass sm:text-2xl">
                      {m.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-semibold text-text-primary-dark text-sm sm:text-base">
                        {m.title}
                      </h4>
                      {m.verifiedBadge && (
                        <span className="rounded-xs bg-accent-brass/20 px-2 py-0.5 text-[10px] font-semibold text-brand-slate-deep">
                          {m.verifiedBadge}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-text-secondary-dark sm:text-sm">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Photo Card */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-sm border border-neutral-200/80 bg-surface-ecru-light shadow-xs">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/assets/trust/heaven-team-expo-booth.jpg"
                  alt="Heaven Furniture Mart leadership and craftsmanship team at their official exposition pavilion"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-lg font-semibold text-text-primary-dark">
                  Our Dedicated Atelier Team
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-text-secondary-dark sm:text-sm">
                  From master wood carvers and upholstery seamstresses to in-house interior consultants, our 30+ team members work under one unified vision of craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
