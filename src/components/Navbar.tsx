"use client";

import { useState, useEffect } from "react";
import { BRAND_CONFIG } from "@/content/brand";
import { TRANSLATIONS } from "@/content/translations";
import { useLanguage } from "@/context/LanguageContext";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { PhoneIcon } from "@/components/icons";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { openQuoteModal } = useQuoteModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const tn = TRANSLATIONS.nav;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          scrolled
            ? "bg-brand-slate-deep/98 backdrop-blur-md shadow-md py-2.5 sm:py-3"
            : "bg-brand-slate-deep/90 sm:bg-brand-slate-deep/80 backdrop-blur-sm py-3 sm:py-3.5"
        }`}
      >
        <nav
          className="mx-auto flex w-full max-w-[1560px] items-center justify-between px-4 sm:px-8 lg:px-12 2xl:px-16"
          aria-label={t("প্রধান নেভিগেশন", "Main Navigation")}
        >
          {/* ================= DESKTOP VIEW ================= */}
          {/* Desktop Brand Text */}
          <div className="hidden lg:flex items-center">
            <a
              href="#top"
              className="flex flex-col focus-visible:outline-none group"
              aria-label="Heaven Furniture Mart — আগ্রাবাদ, চট্টগ্রাম"
            >
              <span className="font-sans text-lg sm:text-xl font-bold tracking-normal text-white group-hover:text-accent-brass transition-colors leading-tight">
                Heaven Furniture Mart
              </span>
              <span className="text-xs text-neutral-300 font-normal leading-normal mt-0.5">
                {t(tn.brandSubtitle.bn, tn.brandSubtitle.en)}
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-7">
            {BRAND_CONFIG.navigation.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium tracking-normal text-neutral-300 hover:text-white transition-colors focus-visible:text-accent-brass"
                >
                  {t(link.label, link.labelEn || link.label)}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions: Language Switcher + Quote Button + Hotline */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher Pill */}
            <div
              className="flex items-center rounded-full border border-neutral-700 bg-brand-slate-surface/90 p-0.5 text-xs font-semibold shadow-2xs"
              role="group"
              aria-label={t(tn.languageLabel.bn, tn.languageLabel.en)}
            >
              <button
                type="button"
                onClick={() => setLang("bn")}
                className={`rounded-full px-2.5 py-1 transition-all cursor-pointer ${
                  lang === "bn"
                    ? "bg-accent-brass text-brand-slate-deep font-bold shadow-xs"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                বাং
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-2.5 py-1 transition-all cursor-pointer ${
                  lang === "en"
                    ? "bg-accent-brass text-brand-slate-deep font-bold shadow-xs"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Request Quote Button */}
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="flex items-center gap-1.5 rounded-lg border border-accent-brass/40 bg-brand-slate-surface px-3 py-2 text-xs font-bold text-accent-brass transition-all hover:bg-accent-brass hover:text-brand-slate-deep cursor-pointer"
            >
              <span>📋 {t(tn.requestQuote.bn, tn.requestQuote.en)}</span>
            </button>

            {/* Hotline Direct Call */}
            <a
              href={BRAND_CONFIG.contact.phoneUrl}
              className="flex items-center gap-2 rounded-lg border border-neutral-600 bg-brand-slate-surface px-3.5 py-2 text-xs font-semibold text-white transition-all hover:border-accent-brass hover:text-accent-brass"
              aria-label={`${t(tn.hotline.bn, tn.hotline.en)} ${BRAND_CONFIG.contact.primaryPhoneDisplay}`}
            >
              <PhoneIcon />
              <span>{t(tn.hotline.bn, tn.hotline.en)} {BRAND_CONFIG.contact.primaryPhoneDisplay}</span>
            </a>
          </div>

          {/* ================= MOBILE VIEW TOP BAR ================= */}
          <div className="flex w-full items-center justify-between lg:hidden">
            {/* Brand Text on Left */}
            <a
              href="#top"
              className="flex flex-col focus-visible:outline-none text-left"
              aria-label="Heaven Furniture Mart — আগ্রাবাদ, চট্টগ্রাম"
            >
              <span className="font-sans text-base font-bold tracking-normal text-white leading-tight">
                Heaven Furniture Mart
              </span>
              <span className="text-[11px] text-neutral-300 font-normal leading-normal mt-0.5">
                {t(tn.brandSubtitle.bn, tn.brandSubtitle.en)}
              </span>
            </a>

            {/* Mobile Actions: Language Switcher + Call + Hamburger */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Mobile Language Toggle */}
              <button
                type="button"
                onClick={() => setLang(lang === "bn" ? "en" : "bn")}
                className="flex h-9 items-center justify-center rounded-md border border-neutral-700 bg-brand-slate-surface px-2 text-xs font-bold text-accent-brass active:scale-95 transition-transform"
                aria-label={t(tn.languageLabel.bn, tn.languageLabel.en)}
              >
                <span>{lang === "bn" ? "বাং / EN" : "EN / বাং"}</span>
              </button>

              {/* Call icon */}
              <a
                href={BRAND_CONFIG.contact.phoneUrl}
                className="flex h-9 w-9 items-center justify-center rounded-md text-neutral-200 hover:text-white hover:bg-brand-slate-surface active:scale-95 transition-transform cursor-pointer"
                aria-label={t("সরাসরি কল করুন", "Direct Call")}
              >
                <PhoneIcon />
              </a>

              {/* Hamburger button */}
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md text-neutral-200 hover:text-white hover:bg-brand-slate-surface active:scale-95 transition-transform cursor-pointer"
                aria-label={t("মেনু খুলুন", "Open Menu")}
                aria-expanded={mobileOpen}
              >
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ================= FULLSCREEN MOBILE DRAWER ================= */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-brand-slate-deep text-white lg:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={t("মোবাইল নেভিগেশন মেনু", "Mobile Navigation Menu")}
        >
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between px-4 py-3 sm:px-8 border-b border-brand-slate-border bg-brand-slate-deep shrink-0">
            {/* Brand on Left */}
            <a
              href="#top"
              onClick={() => setMobileOpen(false)}
              className="flex flex-col text-left"
            >
              <span className="font-sans text-base font-bold tracking-normal text-white leading-tight">
                Heaven Furniture Mart
              </span>
              <span className="text-[11px] text-neutral-300 font-normal leading-normal mt-0.5">
                {t(tn.brandSubtitle.bn, tn.brandSubtitle.en)}
              </span>
            </a>

            {/* Language Switcher + Close icon on Right */}
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-md border border-neutral-700 bg-brand-slate-surface p-0.5 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setLang("bn")}
                  className={`px-2 py-0.5 rounded ${lang === "bn" ? "bg-accent-brass text-brand-slate-deep font-bold" : "text-neutral-400"}`}
                >
                  বাং
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-2 py-0.5 rounded ${lang === "en" ? "bg-accent-brass text-brand-slate-deep font-bold" : "text-neutral-400"}`}
                >
                  EN
                </button>
              </div>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-200 hover:text-white hover:bg-brand-slate-surface active:scale-95 transition-transform cursor-pointer"
                aria-label={t("মেনু বন্ধ করুন", "Close Menu")}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Scrollable Navigation Links */}
          <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col justify-between">
            <nav className="flex flex-col">
              {BRAND_CONFIG.navigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-brand-slate-border/70 py-3.5 text-base font-medium text-white transition-colors hover:text-accent-brass active:text-accent-brass"
                >
                  {t(link.label, link.labelEn || link.label)}
                </a>
              ))}
            </nav>

            {/* Mobile Actions: Quote + Call */}
            <div className="mt-8 pb-20 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  openQuoteModal();
                }}
                className="w-full flex h-12 items-center justify-center gap-2 rounded-xl bg-accent-brass py-3 text-sm font-bold text-brand-slate-deep shadow-md active:scale-98 transition-all cursor-pointer"
              >
                <span>📋 {t(tn.requestQuote.bn, tn.requestQuote.en)}</span>
              </button>

              <a
                href={BRAND_CONFIG.contact.phoneUrl}
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-neutral-600 bg-brand-slate-surface px-6 text-sm font-semibold text-white transition-colors hover:border-accent-brass"
              >
                <PhoneIcon />
                <span>{t(tn.hotline.bn, tn.hotline.en)} {BRAND_CONFIG.contact.primaryPhoneDisplay}</span>
              </a>

              <div className="border-t border-brand-slate-border/80 pt-4 text-xs text-neutral-400 space-y-1">
                <p className="text-neutral-300">
                  📍 {t(BRAND_CONFIG.location.fullAddressBn, BRAND_CONFIG.location.fullAddressEn)}
                </p>
                <p>
                  🕒 {t(BRAND_CONFIG.operatingHours.daysBn, BRAND_CONFIG.operatingHours.daysEn)}: {t(BRAND_CONFIG.operatingHours.timeBn, BRAND_CONFIG.operatingHours.timeEn)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
