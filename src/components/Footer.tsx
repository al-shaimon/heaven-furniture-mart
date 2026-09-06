"use client";

import { BRAND_CONFIG } from "@/content/brand";
import { TRANSLATIONS } from "@/content/translations";
import { useLanguage } from "@/context/LanguageContext";
import { FacebookIcon, YouTubeIcon, InstagramIcon } from "@/components/icons";

export default function Footer() {
  const { lang, t } = useLanguage();
  const tf = TRANSLATIONS.footer;
  const loc = BRAND_CONFIG.location;
  const hours = BRAND_CONFIG.operatingHours;
  const contact = BRAND_CONFIG.contact;
  const social = BRAND_CONFIG.social;

  return (
    <footer className="border-t border-brand-slate-border bg-brand-slate-deep text-text-primary-light">
      <div className="mx-auto w-full max-w-[1560px] px-4 pt-12 pb-24 sm:px-8 sm:py-16 lg:px-12 2xl:px-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Col 1: Brand & Social (5 cols) */}
          <div className="lg:col-span-5">
            <a href="#top" className="inline-flex flex-col focus-visible:outline-none group">
              <span className="font-sans text-lg sm:text-xl font-bold tracking-normal text-white group-hover:text-accent-brass transition-colors leading-tight">
                Heaven Furniture Mart
              </span>
              <span className="text-xs text-neutral-300 font-normal leading-normal mt-1">
                {t("হেভেন ফার্নিচার মার্ট · আগ্রাবাদ", "Heaven Furniture Mart · Agrabad")}
              </span>
            </a>
            <p className="mt-3 text-sm text-neutral-300 max-w-sm leading-relaxed">
              {t(
                BRAND_CONFIG.shortSummaryBn,
                "Quality seasoned hardwood furniture for your home and custom furniture tailored to your exact measurements. Located on Agrabad Access Road, Chattogram."
              )}
            </p>

            {/* Official Social Links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-slate-border text-neutral-300 transition-colors hover:border-accent-brass hover:text-white"
              >
                <FacebookIcon />
              </a>
              <a
                href={social.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-slate-border text-neutral-300 transition-colors hover:border-accent-brass hover:text-white"
              >
                <YouTubeIcon />
              </a>
              <a
                href={social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-slate-border text-neutral-300 transition-colors hover:border-accent-brass hover:text-white"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-wider text-accent-brass">
              {t(tf.quickLinks.bn, tf.quickLinks.en)}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-neutral-300">
              {BRAND_CONFIG.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-accent-brass"
                  >
                    {t(item.label, item.labelEn || item.label)}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={contact.getWhatsAppUrl(lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-whatsapp hover:underline font-semibold"
                >
                  {t("WhatsApp এ মেসেজ দিন", "Message on WhatsApp")}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Showroom & Contact (4 cols) */}
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-wider text-accent-brass">
              {t(tf.location.bn, tf.location.en)}
            </p>
            <div className="mt-4 space-y-2 text-xs sm:text-sm text-neutral-300">
              <p className="leading-relaxed">
                📍 {t(loc.fullAddressBn, loc.fullAddressEn)}
              </p>
              <p className="text-accent-brass">
                {t("ল্যান্ডমার্ক:", "Landmark:")} {t(loc.landmarkBn, loc.landmarkEn)}
              </p>
              <p>
                🕒 {t(hours.daysBn, hours.daysEn)}: {t(hours.timeBn, hours.timeEn)} ({t(hours.closedBn, hours.closedEn)})
              </p>
              <div className="pt-2">
                <p className="font-semibold text-white">
                  📞 {t("কল করুন:", "Call Us:")}{" "}
                  <a href={contact.phoneUrl} className="text-accent-brass hover:underline">
                    {contact.primaryPhoneDisplay}
                  </a>
                  {" "}·{" "}
                  <a href={contact.secondaryPhoneUrl} className="hover:underline">
                    {contact.secondaryPhoneDisplay}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-brand-slate-border pt-6 text-xs text-neutral-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND_CONFIG.nameEn}. {t("সর্বস্বত্ব সংরক্ষিত।", "All rights reserved.")}
          </p>
          <p className="text-accent-brass">
            {t("আগ্রাবাদ, চট্টগ্রাম, বাংলাদেশ", "Agrabad, Chattogram, Bangladesh")}
          </p>
        </div>
      </div>
    </footer>
  );
}
