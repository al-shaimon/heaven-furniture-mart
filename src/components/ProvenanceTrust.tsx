import Image from "next/image";
import { BRAND_CONFIG, TIMELINE_MILESTONES, TimelineMilestone } from "@/content/brand";

export default function ProvenanceTrust() {
  const { founder, credentials, social } = BRAND_CONFIG;

  return (
    <section id="trust" className="bg-surface-ecru-light py-12 sm:py-16 lg:py-20 border-t border-neutral-200">
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-8 lg:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-accent-brass-dark uppercase">
            আমাদের পথচলা
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary-dark">
            স্বীকৃতি, মেলা আর আমাদের কিছু স্মৃতি
          </h2>
          <p className="mt-2 text-sm sm:text-base text-text-secondary-dark leading-relaxed">
            শুধু ফার্নিচার বিক্রি নয়, বিভিন্ন মেলা ও আয়োজনের মধ্য দিয়েও আমাদের পথচলা হয়েছে।
            এই ছবিগুলো সেই পথচলার কিছু বাস্তব মুহূর্ত।
          </p>
        </div>

        {/* Leadership Statement Card (Verbatim MD Quote from Company Deck) */}
        <div className="mt-8 sm:mt-10 rounded-sm border border-neutral-200 bg-white p-5 sm:p-8 shadow-xs">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            {/* Quote Body */}
            <div className="lg:col-span-7 xl:col-span-8">
              <span className="text-3xl sm:text-4xl text-accent-brass-dark font-serif block mb-1">
                “
              </span>
              <blockquote className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-text-primary-dark">
                {founder.quoteBn}
              </blockquote>
              <p className="mt-2.5 text-xs text-text-secondary-dark italic leading-relaxed">
                &ldquo;{founder.verbatimQuoteEn}&rdquo;
              </p>

              <div className="mt-4 border-t border-neutral-100 pt-3">
                <p className="text-base font-bold text-text-primary-dark">
                  {founder.nameBn} ({founder.nameEn})
                </p>
                <p className="text-xs font-semibold text-accent-brass-dark">
                  {founder.titleBn}
                </p>
              </div>
            </div>

            {/* Award Ceremony Photo */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="overflow-hidden rounded-sm border border-neutral-200 bg-surface-ecru-paper">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/assets/trust/recognition/heaven-md-receiving-fair-crest.webp"
                    alt="সম্মাননা ক্রেস্ট গ্রহণকালে ব্যবস্থাপনা পরিচালক আবুল কালাম ভূঁইয়া"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-2.5 text-center bg-surface-ecru-paper">
                  <p className="text-xs font-semibold text-text-primary-dark">
                    সম্মাননা স্মারক গ্রহণকালে ব্যবস্থাপনা পরিচালক
                  </p>
                  <p className="text-[11px] text-text-secondary-dark">
                    ব্যবস্থাপনা পরিচালক আবুল কালাম ভূঁইয়া
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Verified Credibility Badges */}
        <div className="mt-6 grid gap-3.5 sm:grid-cols-3">
          {credentials.map((cred) => (
            <div
              key={cred.titleBn}
              className="flex items-start gap-3 rounded-sm border border-neutral-200 bg-white p-3.5 shadow-2xs"
            >
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent-brass-dark/10 flex items-center justify-center text-accent-brass-dark font-bold text-xs">
                ✓
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-text-primary-dark">
                  {cred.titleBn}
                </h4>
                <p className="mt-0.5 text-[11px] sm:text-xs text-text-secondary-dark leading-relaxed">
                  {cred.descriptionBn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vertical Timeline Journey Header */}
        <div className="mt-14 sm:mt-18 text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-text-primary-dark">
            আমাদের পথচলার সময়রেখা
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-text-secondary-dark">
            ২০২০ থেকে আজ পর্যন্ত হেভেন ফার্নিচার মার্টের কিছু বাস্তব মাইলফলক ও মেলার স্মৃতি।
          </p>
        </div>

        {/* Desktop Vertical Timeline (lg:block with central track) */}
        <div className="hidden lg:block relative max-w-5xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-neutral-300 -translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE_MILESTONES.map((item: TimelineMilestone, idx: number) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={item.year} className="relative grid grid-cols-12 gap-8 items-center">
                  {/* Central Year Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 flex h-10 px-3 items-center justify-center rounded-full border-2 border-white bg-accent-brass-dark text-xs font-bold text-white shadow-sm">
                    {item.year}
                  </div>

                  {isEven ? (
                    <>
                      {/* Left: Narrative */}
                      <div className="col-span-5 text-right pr-6">
                        <span className="text-xs font-semibold text-accent-brass-dark">
                          {item.year}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-text-primary-dark mt-0.5">
                          {item.titleBn}
                        </h4>
                        <p className="mt-1 text-xs sm:text-sm text-text-secondary-dark leading-relaxed">
                          {item.descriptionBn}
                        </p>
                      </div>

                      {/* Middle Spacer */}
                      <div className="col-span-2" />

                      {/* Right: Real Photograph */}
                      <div className="col-span-5 pl-6">
                        <div className="overflow-hidden rounded-sm border border-neutral-200 bg-white shadow-2xs">
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                            <Image
                              src={item.imageSrc}
                              alt={item.imageAlt}
                              fill
                              sizes="420px"
                              className="object-cover"
                            />
                          </div>
                          <div className="p-2.5 bg-surface-ecru-paper text-center">
                            <p className="text-xs font-medium text-text-secondary-dark">
                              {item.captionBn}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left: Real Photograph */}
                      <div className="col-span-5 pr-6">
                        <div className="overflow-hidden rounded-sm border border-neutral-200 bg-white shadow-2xs">
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                            <Image
                              src={item.imageSrc}
                              alt={item.imageAlt}
                              fill
                              sizes="420px"
                              className="object-cover"
                            />
                          </div>
                          <div className="p-2.5 bg-surface-ecru-paper text-center">
                            <p className="text-xs font-medium text-text-secondary-dark">
                              {item.captionBn}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Middle Spacer */}
                      <div className="col-span-2" />

                      {/* Right: Narrative */}
                      <div className="col-span-5 text-left pl-6">
                        <span className="text-xs font-semibold text-accent-brass-dark">
                          {item.year}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-text-primary-dark mt-0.5">
                          {item.titleBn}
                        </h4>
                        <p className="mt-1 text-xs sm:text-sm text-text-secondary-dark leading-relaxed">
                          {item.descriptionBn}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Feed (lg:hidden) */}
        <div className="lg:hidden space-y-6">
          {TIMELINE_MILESTONES.map((item: TimelineMilestone) => (
            <div
              key={item.year}
              className="rounded-sm border border-neutral-200 bg-white p-4 shadow-2xs"
            >
              {/* Year Badge */}
              <div className="flex items-center gap-2 mb-2.5">
                <span className="rounded bg-accent-brass-dark px-2.5 py-0.5 text-xs font-bold text-white">
                  {item.year}
                </span>
                <span className="text-xs font-bold text-text-primary-dark">
                  {item.titleBn}
                </span>
              </div>

              {/* Large Mobile Photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-neutral-100">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
              </div>

              {/* Description & Caption */}
              <div className="mt-3">
                <p className="text-xs sm:text-sm text-text-secondary-dark leading-relaxed">
                  {item.descriptionBn}
                </p>
                <p className="mt-1 text-[11px] text-accent-brass-dark font-medium">
                  📷 {item.captionBn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* More Real Photos Social CTA */}
        <div className="mt-10 sm:mt-14 rounded-sm border border-neutral-200 bg-white p-5 sm:p-7 text-center shadow-xs">
          <h4 className="text-sm sm:text-base font-bold text-text-primary-dark">
            আরও ছবি ও মেলার ভিডিও দেখতে চান?
          </h4>
          <p className="mt-1 text-xs sm:text-sm text-text-secondary-dark max-w-lg mx-auto">
            আমাদের অফিসিয়াল ফেসবুক পেজে শোরুম ও মেলার নিয়মিত ছবি ও ভিডিও দেখতে পাবেন।
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={social.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-[#1877F2] px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-2xs hover:bg-[#166fe5] transition-colors"
            >
              <span>Facebook পেজ দেখুন</span>
            </a>
            <a
              href={social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-neutral-300 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-text-primary-dark shadow-2xs hover:bg-neutral-50 transition-colors"
            >
              <span>Instagram প্রোফাইল</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
