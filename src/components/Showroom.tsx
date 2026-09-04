import Image from "next/image";
import { BRAND_CONFIG } from "@/content/brand";
import { PhoneIcon } from "@/components/icons";

export default function Showroom() {
  const loc = BRAND_CONFIG.location;
  const hours = BRAND_CONFIG.operatingHours;
  const contact = BRAND_CONFIG.contact;

  return (
    <section id="showroom" className="bg-surface-ecru-paper py-14 sm:py-20 lg:py-24 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary-dark">
            শোরুমে এসে নিজের চোখে দেখে পছন্দ করুন
          </h2>
          <p className="mt-2 text-base text-text-secondary-dark leading-relaxed">
            চট্টগ্রামের আগ্রাবাদ এক্সেস রোডে আমাদের শোরুম। সরাসরি এসে ফার্নিচারের কাঠ, ফিনিশিং ও মাপ দেখে শুনে নিশ্চিন্তে পছন্দ করতে পারবেন।
          </p>
        </div>

        {/* Showroom Visual & Info Grid */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          {/* Building Photo */}
          <div className="relative overflow-hidden rounded-sm border border-neutral-200 bg-white shadow-xs lg:col-span-7">
            <div className="relative aspect-[4/3] w-full lg:h-full lg:min-h-[420px]">
              <Image
                src="/assets/showroom/heaven-agrabad-flagship-building.webp"
                alt="হেভেন ফার্নিচার মার্ট শোরুম ভবন · আগ্রাবাদ, চট্টগ্রাম"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
            <div className="absolute top-3 left-3 rounded-xs bg-brand-slate-deep/90 px-3 py-1.5 text-xs font-semibold text-accent-brass backdrop-blur-xs">
              আগ্রাবাদ শোরুম ভবন
            </div>
          </div>

          {/* Location & Hours Card */}
          <div className="flex flex-col justify-between rounded-sm border border-neutral-200 bg-white p-6 shadow-xs sm:p-8 lg:col-span-5">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary-dark">
                আগ্রাবাদ শোরুম
              </h3>

              {/* Address details */}
              <div className="mt-6 space-y-4 text-sm text-text-secondary-dark">
                <div className="flex gap-3">
                  <span className="text-base shrink-0">📍</span>
                  <div>
                    <p className="font-bold text-text-primary-dark">ঠিকানা</p>
                    <p className="mt-0.5 leading-relaxed">{loc.fullAddressBn}</p>
                    <p className="mt-1 text-xs font-semibold text-accent-brass-dark">
                      ল্যান্ডমার্ক: {loc.landmarkBn}
                    </p>
                  </div>
                </div>

                {/* Operating hours */}
                <div className="flex gap-3 border-t border-neutral-100 pt-4">
                  <span className="text-base shrink-0">🕒</span>
                  <div>
                    <p className="font-bold text-text-primary-dark">কখন খোলা থাকে</p>
                    <p className="mt-0.5">{hours.daysBn}: {hours.timeBn}</p>
                    <p className="mt-0.5 text-xs font-semibold text-red-600">({hours.closedBn})</p>
                    <p className="mt-1 text-xs text-text-secondary-dark italic">{hours.advisoryBn}</p>
                  </div>
                </div>

                {/* Hotlines */}
                <div className="flex gap-3 border-t border-neutral-100 pt-4">
                  <span className="text-base shrink-0">📞</span>
                  <div>
                    <p className="font-bold text-text-primary-dark">যোগাযোগের ফোন নম্বর</p>
                    <div className="mt-1 space-y-1">
                      <p>
                        হটলাইন ও WhatsApp:{" "}
                        <a
                          href={contact.phoneUrl}
                          className="font-bold text-accent-whatsapp-dark hover:underline"
                        >
                          {contact.primaryPhoneDisplay}
                        </a>
                      </p>
                      <p>
                        শোরুম লাইন:{" "}
                        <a
                          href={contact.secondaryPhoneUrl}
                          className="font-bold text-text-primary-dark hover:underline"
                        >
                          {contact.secondaryPhoneDisplay}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col pt-4 border-t border-neutral-100">
              <a
                href={loc.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-sm bg-brand-slate-deep px-5 text-base font-semibold text-white transition-colors hover:bg-brand-slate-surface focus-visible:ring-2 focus-visible:ring-brand-slate-deep"
              >
                <span>🗺️ গুগল ম্যাপে শোরুমের লোকেশন দেখুন</span>
              </a>
              <a
                href={contact.phoneUrl}
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-sm border border-neutral-300 bg-surface-ecru-light px-5 text-base font-bold text-brand-slate-deep transition-colors hover:bg-neutral-100"
              >
                <PhoneIcon />
                <span>শোরুমে আসার আগে কল করুন</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
