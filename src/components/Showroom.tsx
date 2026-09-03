import Image from "next/image";
import { BRAND_CONFIG } from "@/content/brand";

export default function Showroom() {
  const loc = BRAND_CONFIG.location;
  const hours = BRAND_CONFIG.operatingHours;
  const contact = BRAND_CONFIG.contact;

  return (
    <section id="showroom" className="bg-surface-ecru-light py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 reveal-on-scroll">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-brass-dark sm:text-sm sm:tracking-[0.2em]">
            Physical Showroom
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight tracking-tight text-text-primary-dark sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Experience the Wood, Fabric &amp; Scale{" "}
            <span className="text-text-secondary-dark italic">in Person.</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary-dark sm:mt-4 sm:text-base md:text-lg">
            Nothing replaces running your fingers over seasoned Chittagong Teak or testing cushion firmness. Visit our 2-story flagship showroom on Agrabad Access Road to inspect completed living, dining, and bedroom settings.
          </p>
        </div>

        {/* Showroom Visual & Info Grid */}
        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* Building Photo */}
          <div className="relative overflow-hidden rounded-sm border border-neutral-200/80 bg-surface-ecru-paper shadow-xs lg:col-span-7">
            <div className="relative aspect-[4/3] w-full lg:h-full lg:min-h-[420px]">
              <Image
                src="/assets/showroom/heaven-agrabad-flagship-building.webp"
                alt="Heaven Furniture Mart multi-level flagship building and showroom on Agrabad Access Road, Chattogram"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
            {/* Showroom Label */}
            <div className="absolute top-3 left-3 rounded-xs bg-brand-slate-deep/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-brass backdrop-blur-xs sm:top-4 sm:left-4 sm:px-3 sm:py-1.5 sm:text-xs">
              Flagship Showroom · Agrabad Access Road
            </div>
          </div>

          {/* Location & Hours Card */}
          <div className="flex flex-col justify-between rounded-sm border border-neutral-200/80 bg-surface-ecru-paper p-6 shadow-xs sm:p-8 lg:col-span-5 lg:p-10">
            <div>
              {/* Landmark Header */}
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent-brass-dark" />
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-brass-dark">
                  Prime Chattogram Location
                </p>
              </div>

              <h3 className="mt-3 font-serif text-2xl font-semibold text-text-primary-dark">
                Agrabad Flagship
              </h3>

              {/* Address details */}
              <div className="mt-6 space-y-4 text-sm text-text-secondary-dark">
                <div className="flex gap-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0 text-accent-brass-dark"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className="font-semibold text-text-primary-dark">Address</p>
                    <p className="mt-0.5 leading-relaxed">{loc.fullAddress}</p>
                    <p className="mt-1 text-xs text-accent-brass-dark font-semibold">Landmark: {loc.landmark}</p>
                  </div>
                </div>

                {/* Operating hours */}
                <div className="flex gap-3 border-t border-neutral-200/60 pt-4">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0 text-accent-brass"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div>
                    <p className="font-semibold text-text-primary-dark">Opening Hours</p>
                    <p className="mt-0.5">{hours.days}: {hours.hours}</p>
                    <p className="mt-0.5 text-xs text-neutral-500">{hours.weekendNote}</p>
                  </div>
                </div>

                {/* Direct Hotlines */}
                <div className="flex gap-3 border-t border-neutral-200/60 pt-4">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0 text-accent-brass"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-text-primary-dark">Direct Hotlines</p>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                      <a
                        href={`tel:${contact.primaryPhone.replace(/[\s-]/g, "")}`}
                        className="font-medium text-text-primary-dark hover:text-accent-brass transition-colors"
                      >
                        {contact.primaryPhoneFormatted}{" "}
                        <span className="text-xs text-text-secondary-dark">(01960-481983 · WhatsApp)</span>
                      </a>
                      <span className="text-neutral-300">·</span>
                      <a
                        href={`tel:${contact.hotlinePhone.replace(/[\s-]/g, "")}`}
                        className="font-medium text-text-primary-dark hover:text-accent-brass transition-colors"
                      >
                        {contact.hotlineFormatted}{" "}
                        <span className="text-xs text-text-secondary-dark">(01900-481898)</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3 pt-4 sm:flex-row">
              <a
                href={loc.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-sm border border-neutral-300 bg-white text-xs font-semibold tracking-wide text-text-primary-dark transition-all hover:border-accent-brass hover:bg-neutral-50 sm:text-sm"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                Google Maps Directions
              </a>
              <a
                href="#consultation"
                className="inline-flex h-11 flex-1 items-center justify-center rounded-sm border border-accent-brass/40 bg-brand-slate-deep text-xs font-semibold tracking-wide text-text-primary-light transition-all hover:bg-brand-slate-surface sm:text-sm"
              >
                Schedule Showroom Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
