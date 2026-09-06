import Image from "next/image";

export default function FurnitureTourSlider() {
  return (
    <section className="bg-surface-ecru-light py-12 sm:py-16 lg:py-20 border-b border-neutral-200">
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-8 lg:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-accent-brass-dark uppercase">
            স্পেস অনুযায়ী ফার্নিচার
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary-dark">
            আপনার ঘরের জন্য পছন্দের ফার্নিচার বেছে নিন
          </h2>
          <p className="mt-2 text-sm sm:text-base text-text-secondary-dark leading-relaxed">
            লিভিং, বেডরুম, ডাইনিং থেকে অফিস—প্রতিটি স্পেসের জন্য রয়েছে আমাদের নিজস্ব কারিগরে তৈরি আসল ফার্নিচার কালেকশন।
          </p>
        </div>

        {/* Asymmetrical Visual Grid Showcase (Requirement 15 & 16) */}
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-12">
          {/* Main Hero Card: Living Room (7 cols on lg/xl) */}
          <a
            href="#collection"
            className="group relative overflow-hidden rounded-sm border border-neutral-300 bg-black lg:col-span-7 aspect-[4/3] sm:aspect-[16/10] flex flex-col justify-end shadow-xs hover:border-accent-brass transition-all duration-300"
          >
            <Image
              src="/furniture/living/living-sectional-sofa-01.webp"
              alt="হেভেন ফার্নিচার মার্ট লিভিং রুম সোফা কালেকশন"
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            <div className="relative z-10 p-5 sm:p-7">
              <span className="inline-block rounded-xs bg-accent-brass px-2.5 py-1 text-xs font-bold text-brand-slate-deep uppercase tracking-wider mb-2">
                প্রধান আকর্ষণ
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-accent-brass transition-colors">
                লিভিং রুম ও ড্রয়িং কালেকশন
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-neutral-200 line-clamp-2 max-w-lg">
                সেকশনাল এল-শেপ সোফা • সেন্টার টেবিল • রয়্যাল সোফা সেট • টিভি ওয়াল ইউনিট
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-accent-brass group-hover:translate-x-1 transition-transform">
                মডেলগুলো দেখুন →
              </span>
            </div>
          </a>

          {/* Right Column: 2 Stacked Cards (Bedroom & Dining, 5 cols on lg/xl) */}
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:col-span-5">
            {/* Bedroom Card */}
            <a
              href="#collection"
              className="group relative overflow-hidden rounded-sm border border-neutral-300 bg-black aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:h-[calc(50%-12px)] flex flex-col justify-end shadow-xs hover:border-accent-brass transition-all duration-300"
            >
              <Image
                src="/furniture/bedroom/bedroom-carved-wooden-bed-01.webp"
                alt="হেভেন ফার্নিচার মার্ট বেডরুম খাট ও আলমারি"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="relative z-10 p-4 sm:p-5">
                <span className="text-[11px] font-bold text-accent-brass uppercase tracking-wider">
                  বেডরুম
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-accent-brass transition-colors">
                  মাস্টার বেড ও আলমারি সেট
                </h4>
                <p className="mt-1 text-xs text-neutral-200">
                  সলিড কাঠের খাট • আলমারি • আধুনিক ড্রেসিং ইউনিট
                </p>
              </div>
            </a>

            {/* Dining Card */}
            <a
              href="#collection"
              className="group relative overflow-hidden rounded-sm border border-neutral-300 bg-black aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:h-[calc(50%-12px)] flex flex-col justify-end shadow-xs hover:border-accent-brass transition-all duration-300"
            >
              <Image
                src="/furniture/dining/dining-solid-wood-table-set-01.webp"
                alt="হেভেন ফার্নিচার মার্ট ডাইনিং টেবিল ও চেয়ার সেট"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="relative z-10 p-4 sm:p-5">
                <span className="text-[11px] font-bold text-accent-brass uppercase tracking-wider">
                  ডাইনিং
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-accent-brass transition-colors">
                  কাঠের ডাইনিং টেবিল ও চেয়ার
                </h4>
                <p className="mt-1 text-xs text-neutral-200">
                  ৪ ও ৬ সিটের ডাইনিং টেবিল • মার্বেল ও উড টপ সেট
                </p>
              </div>
            </a>
          </div>

          {/* Bottom Row: Office & Custom Space-Saving Units (6 cols each on lg/xl) */}
          <div className="lg:col-span-6">
            <a
              href="#collection"
              className="group relative overflow-hidden rounded-sm border border-neutral-300 bg-black aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9] flex flex-col justify-end shadow-xs hover:border-accent-brass transition-all duration-300 block"
            >
              <Image
                src="/furniture/office/office-executive-desk-01.webp"
                alt="হেভেন ফার্নিচার মার্ট অফিস এক্সিকিউটিভ ডেস্ক"
                fill
                sizes="(max-width: 1024px) 100vw, 750px"
                className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="relative z-10 p-4 sm:p-6">
                <span className="text-[11px] font-bold text-accent-brass uppercase tracking-wider">
                  অফিস ফার্নিচার
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-accent-brass transition-colors">
                  এক্সিকিউটিভ ডেস্ক ও কনফারেন্স টেবিল
                </h4>
                <p className="mt-1 text-xs text-neutral-200">
                  ম্যানেজার ও ডিরেক্টর টেবিল • মিটিং টেবিল • ফাইল কেবিনেট
                </p>
              </div>
            </a>
          </div>

          <div className="lg:col-span-6">
            <a
              href="#custom"
              className="group relative overflow-hidden rounded-sm border border-neutral-300 bg-black aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9] flex flex-col justify-end shadow-xs hover:border-accent-brass transition-all duration-300 block"
            >
              <Image
                src="/furniture/custom/custom-wall-showcase-01.webp"
                alt="হেভেন ফার্নিচার মার্ট কাস্টম ওয়াল শোকেস ও কেবিনেট"
                fill
                sizes="(max-width: 1024px) 100vw, 750px"
                className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="relative z-10 p-4 sm:p-6">
                <span className="text-[11px] font-bold text-accent-brass uppercase tracking-wider">
                  কাস্টম ফার্নিচার
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-accent-brass transition-colors">
                  আপনার নির্দিষ্ট ঘরের মাপে তৈরি
                </h4>
                <p className="mt-1 text-xs text-neutral-200">
                  ওয়াল শোকেস • টিভি কেবিনেট ইউনিট • স্পেস-সেভিং সমাধান
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
