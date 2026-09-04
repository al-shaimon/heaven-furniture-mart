import Image from "next/image";
import { BRAND_CONFIG } from "@/content/brand";

export default function ProvenanceTrust() {
  const { founder, credentials } = BRAND_CONFIG;

  return (
    <section id="trust" className="bg-surface-ecru-light py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* Section Eyebrow & Headline */}
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary-dark">
            আমাদের পরিচয় ও নির্ভরযোগ্যতা
          </h2>
          <p className="mt-2 text-base text-text-secondary-dark leading-relaxed">
            চট্টগ্রামে দীর্ঘদিন ধরে বিশ্বস্ততার সাথে গ্রাহকদের পছন্দের ফার্নিচার সরবরাহ করে আসছি।
          </p>
        </div>

        {/* Leadership Statement Card */}
        <div className="mt-10 rounded-sm border border-neutral-200 bg-white p-6 shadow-xs sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Quote Body */}
            <div className="lg:col-span-7 xl:col-span-8">
              <span className="text-3xl sm:text-4xl text-accent-brass-dark font-serif block mb-2">“</span>
              <blockquote className="font-serif text-base sm:text-lg md:text-xl font-medium leading-relaxed text-text-primary-dark">
                {founder.quoteBn}
              </blockquote>
              <p className="mt-3 text-xs text-text-secondary-dark italic">
                &ldquo;{founder.verbatimQuoteEn}&rdquo;
              </p>

              <div className="mt-5 border-t border-neutral-100 pt-4">
                <p className="font-serif text-base sm:text-lg font-bold text-text-primary-dark">
                  {founder.nameBn} ({founder.nameEn})
                </p>
                <p className="text-xs font-semibold text-accent-brass-dark">
                  {founder.titleBn}
                </p>
              </div>
            </div>

            {/* Award Photo with Caption */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="overflow-hidden rounded-sm border border-neutral-200 bg-surface-ecru-paper">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/assets/trust/heaven-md-receiving-bfma-award.webp"
                    alt="BFMA স্বীকৃতি ক্রেস্ট গ্রহণকালে ব্যবস্থাপনা পরিচালক আবুল কালাম ভূঁইয়া"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-center bg-surface-ecru-paper">
                  <p className="text-xs font-semibold text-text-primary-dark">
                    BFMA স্বীকৃতি ক্রেস্ট গ্রহণের ছবি
                  </p>
                  <p className="text-[11px] text-text-secondary-dark">
                    ব্যবস্থাপনা পরিচালক আবুল কালাম ভূঁইয়া
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials & Team Expo Photo Row */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* 3 Verified Badges */}
          <div className="space-y-4 lg:col-span-7">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-text-primary-dark">
              স্বীকৃতি ও সম্মাননা
            </h3>
            <div className="grid gap-3 sm:grid-cols-3">
              {credentials.map((cred) => (
                <div
                  key={cred.titleBn}
                  className="rounded-sm border border-neutral-200 bg-white p-4 shadow-2xs"
                >
                  <div className="text-xl mb-1.5">🏅</div>
                  <h4 className="text-sm font-bold text-text-primary-dark">
                    {cred.titleBn}
                  </h4>
                  <p className="mt-1 text-xs text-text-secondary-dark leading-relaxed">
                    {cred.descriptionBn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Expo Booth Photo */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-sm border border-neutral-200 bg-white shadow-2xs">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/assets/trust/heaven-team-expo-booth.webp"
                  alt="চট্টগ্রাম ফার্নিচার মেলায় হেভেন ফার্নিচার মার্টের প্যাভিলিয়ন ও টিম"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="p-3 text-center bg-surface-ecru-paper">
                <p className="text-xs font-semibold text-text-primary-dark">
                  চট্টগ্রাম ফার্নিচার মেলায় আমাদের টিম
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
