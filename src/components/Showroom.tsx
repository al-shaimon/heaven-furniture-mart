"use client";

import { useState } from "react";
import Image from "next/image";
import { BRAND_CONFIG } from "@/content/brand";
import { TRANSLATIONS } from "@/content/translations";
import { useLanguage } from "@/context/LanguageContext";
import { PhoneIcon } from "@/components/icons";

export default function Showroom() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"photo" | "map">("photo");

  const loc = BRAND_CONFIG.location;
  const hours = BRAND_CONFIG.operatingHours;
  const contact = BRAND_CONFIG.contact;
  const ts = TRANSLATIONS.showroom;

  return (
    <section id="showroom" className="bg-surface-ecru-paper py-12 sm:py-16 lg:py-20 border-t border-neutral-200">
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-8 lg:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="max-w-2xl reveal-on-scroll">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-brass-dark/10 px-3 py-1 text-xs font-bold text-accent-brass-dark uppercase tracking-wider mb-2">
            📍 {t("আগ্রাবাদ ফ্ল্যাগশিপ শোরুম", "Agrabad Flagship Showroom")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary-dark">
            {t(ts.title.bn, ts.title.en)}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-text-secondary-dark leading-relaxed">
            {t(ts.subtitle.bn, ts.subtitle.en)}
          </p>
        </div>

        {/* Showroom Visual & Info Grid */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          {/* Left Column: Interactive Tabbed Visual (Building Photo VS Live Google Map) */}
          <div className="flex flex-col rounded-sm border border-neutral-200 bg-white shadow-xs lg:col-span-7 reveal-on-scroll delay-100 overflow-hidden">
            {/* Tab Controls */}
            <div className="flex items-center justify-between border-b border-neutral-200 bg-surface-ecru-light px-3 py-2 sm:px-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("photo")}
                  className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "photo"
                      ? "bg-brand-slate-deep text-white shadow-xs"
                      : "bg-white text-text-secondary-dark hover:bg-neutral-100"
                  }`}
                >
                  <span>{t(ts.tabPhoto.bn, ts.tabPhoto.en)}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("map")}
                  className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "map"
                      ? "bg-brand-slate-deep text-white shadow-xs"
                      : "bg-white text-text-secondary-dark hover:bg-neutral-100"
                  }`}
                >
                  <span>{t(ts.tabMap.bn, ts.tabMap.en)}</span>
                </button>
              </div>

              {activeTab === "map" && (
                <a
                  href={loc.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-accent-brass-dark hover:underline flex items-center gap-1"
                >
                  <span>{t("গুগল ম্যাপে বড় করে দেখুন ↗", "Open in Google Maps ↗")}</span>
                </a>
              )}
            </div>

            {/* Visual Container */}
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-full lg:min-h-[460px] bg-neutral-100">
              {activeTab === "photo" ? (
                <>
                  <Image
                    src="/assets/showroom/heaven-agrabad-flagship-building.webp"
                    alt="হেভেন ফার্নিচার মার্ট শোরুম ভবন · আগ্রাবাদ, চট্টগ্রাম"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 rounded-xs bg-brand-slate-deep/90 px-3 py-1.5 text-xs font-semibold text-accent-brass backdrop-blur-xs shadow-xs">
                    {t(ts.buildingBadge.bn, ts.buildingBadge.en)}
                  </div>
                  <div className="absolute bottom-3 right-3 rounded-md bg-black/75 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-xs">
                    📷 {t("আগ্রাবাদ এক্সেস রোড, চট্টগ্রাম", "Agrabad Access Road, Chattogram")}
                  </div>
                </>
              ) : (
                /* Interactive Google Map Preview */
                <div className="relative w-full h-full">
                  <iframe
                    title="Heaven Furniture Mart Google Maps Location"
                    src="https://maps.google.com/maps?q=Heaven%20Furniture%20Mart%20Agrabad%20Access%20Road%20Chattogram&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-brand-slate-deep/90 px-3 py-1.5 text-xs font-semibold text-accent-brass backdrop-blur-xs shadow-xs pointer-events-none">
                    {t(ts.mapBadge.bn, ts.mapBadge.en)}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Location & Hours Card */}
          <div className="flex flex-col justify-between rounded-sm border border-neutral-200 bg-white p-6 shadow-xs sm:p-8 lg:col-span-5 reveal-on-scroll delay-200">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary-dark">
                {t(ts.cardTitle.bn, ts.cardTitle.en)}
              </h3>

              {/* Address details */}
              <div className="mt-6 space-y-4 text-sm text-text-secondary-dark">
                <div className="flex gap-3">
                  <span className="text-base shrink-0">📍</span>
                  <div>
                    <p className="font-bold text-text-primary-dark">
                      {t(ts.address.label.bn, ts.address.label.en)}
                    </p>
                    <p className="mt-0.5 leading-relaxed">
                      {t(loc.fullAddressBn, loc.fullAddressEn)}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-accent-brass-dark">
                      {t(ts.address.landmark.label.bn, ts.address.landmark.label.en)}{" "}
                      {t(loc.landmarkBn, loc.landmarkEn)}
                    </p>
                  </div>
                </div>

                {/* Operating hours */}
                <div className="flex gap-3 border-t border-neutral-100 pt-4">
                  <span className="text-base shrink-0">🕒</span>
                  <div>
                    <p className="font-bold text-text-primary-dark">
                      {t(ts.hours.label.bn, ts.hours.label.en)}
                    </p>
                    <p className="mt-0.5">
                      {t(hours.daysBn, hours.daysEn)}: {t(hours.timeBn, hours.timeEn)}
                    </p>
                    <p className="mt-0.5 text-xs font-semibold text-red-600">
                      ({t(hours.closedBn, hours.closedEn)})
                    </p>
                    <p className="mt-1 text-xs text-text-secondary-dark italic">
                      {t(hours.advisoryBn, ts.hours.advisory.en)}
                    </p>
                  </div>
                </div>

                {/* Hotlines */}
                <div className="flex gap-3 border-t border-neutral-100 pt-4">
                  <span className="text-base shrink-0">📞</span>
                  <div>
                    <p className="font-bold text-text-primary-dark">
                      {t(ts.phones.label.bn, ts.phones.label.en)}
                    </p>
                    <div className="mt-1 space-y-1">
                      <p>
                        {t(ts.phones.primary.bn, ts.phones.primary.en)}{" "}
                        <a
                          href={contact.phoneUrl}
                          className="font-bold text-accent-whatsapp-dark hover:underline"
                        >
                          {contact.primaryPhoneDisplay}
                        </a>
                      </p>
                      <p>
                        {t(ts.phones.secondary.bn, ts.phones.secondary.en)}{" "}
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
              <button
                type="button"
                onClick={() => setActiveTab("map")}
                className="inline-flex h-[50px] items-center justify-center gap-2 rounded-xl bg-brand-slate-deep px-5 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-brand-slate-surface focus-visible:ring-2 focus-visible:ring-brand-slate-deep cursor-pointer"
              >
                <span>🗺️ {t(ts.btnMap.bn, ts.btnMap.en)}</span>
              </button>
              <a
                href={contact.phoneUrl}
                className="inline-flex h-[50px] items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-surface-ecru-light px-5 text-sm sm:text-base font-bold text-brand-slate-deep transition-colors hover:bg-neutral-100 shadow-2xs"
              >
                <PhoneIcon />
                <span>{t(ts.btnCall.bn, ts.btnCall.en)}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
