"use client";

import { BRAND_CONFIG } from "@/content/brand";
import { TRANSLATIONS } from "@/content/translations";
import { useLanguage } from "@/context/LanguageContext";

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

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
