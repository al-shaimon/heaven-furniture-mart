import Image from "next/image";
import { BRAND_CONFIG } from "@/content/brand";

export default function BespokeProcess() {
  const steps = BRAND_CONFIG.bespokeProcess;

  return (
    <section id="process" className="bg-surface-ecru-light py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 reveal-on-scroll">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-brass-dark sm:text-sm sm:tracking-[0.2em]">
            How We Work
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight tracking-tight text-text-primary-dark sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
            From Floor Plan to Finished Home in{" "}
            <span className="italic text-accent-brass-dark">4 Transparent Steps.</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary-dark sm:mt-4 sm:text-base md:text-lg">
            Custom furniture shouldn&apos;t be an uncertain gamble. We take you through a structured, collaborative design process with clear milestones and dedicated craftsmen.
          </p>
        </div>

        {/* 4 Steps Grid & Craftsmanship Feature */}
        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* Steps Timeline Column */}
          <div className="space-y-6 sm:space-y-8 lg:col-span-7">
            {steps.map((step) => (
              <div
                key={step.stepNumber}
                className="group relative flex gap-4 border-b border-surface-ecru-muted pb-6 last:border-0 last:pb-0 sm:gap-6 sm:pb-8"
              >
                {/* Step Number Badge */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-accent-brass-dark/40 bg-surface-ecru-paper font-serif text-base font-bold text-accent-brass-dark transition-colors group-hover:border-accent-brass group-hover:bg-brand-slate-deep group-hover:text-text-primary-light sm:h-14 sm:w-14 sm:text-xl">
                  {step.stepNumber}
                </div>

                {/* Step Body */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-serif text-xl font-semibold tracking-tight text-text-primary-dark sm:text-2xl">
                      {step.title}
                    </h3>
                    {step.duration && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent-brass-dark">
                        {step.duration}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-text-secondary-dark">
                    {step.headline}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary-dark sm:text-base sm:leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Authentic Craftsmanship Image Showcase */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-sm border border-neutral-200/80 bg-surface-ecru-paper shadow-sm">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/assets/craftsmanship/heaven-handcrafted-sofa-process.webp"
                  alt="Master woodworker and upholsterer at Heaven Furniture Mart atelier hammering individual brass upholstery studs into custom teak furniture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Caption Card */}
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent-brass-dark" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent-brass-dark">
                    The Atelier Benchmark
                  </p>
                </div>
                <h3 className="mt-2 font-serif text-lg font-semibold text-text-primary-dark sm:text-xl">
                  Human Hands. CNC Precision.
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-text-secondary-dark sm:text-sm">
                  While our CNC cutters ensure sub-millimeter structural joints, every curve, button tuft, and brass nail is placed by hand by master craftsmen with decades of woodworking heritage in Chattogram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
