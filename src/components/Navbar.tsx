"use client";

import { useState, useEffect } from "react";
import { BRAND_CONFIG } from "@/content/brand";
import { PhoneIcon } from "@/components/icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "bg-brand-slate-deep/98 backdrop-blur-md shadow-md py-2.5 sm:py-3"
          : "bg-brand-slate-deep/90 sm:bg-brand-slate-deep/80 backdrop-blur-sm py-3 sm:py-3.5"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-12"
        aria-label="প্রধান নেভিগেশন"
      >
        {/* ================= DESKTOP VIEW ================= */}
        {/* Desktop Brand Text (no logo) */}
        <div className="hidden lg:flex items-center">
          <a
            href="#top"
            className="flex flex-col focus-visible:outline-none group"
            aria-label="Heaven Furniture Mart — হেভেন ফার্নিচার মার্ট · আগ্রাবাদ"
          >
            <span className="font-sans text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-accent-brass transition-colors leading-tight">
              Heaven Furniture Mart
            </span>
            <span className="font-sans text-[11px] sm:text-xs text-neutral-300 font-normal leading-tight mt-0.5">
              হেভেন ফার্নিচার মার্ট · আগ্রাবাদ
            </span>
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-7">
          {BRAND_CONFIG.navigation.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-neutral-300 hover:text-white transition-colors focus-visible:text-accent-brass"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Hotline Action */}
        <div className="hidden lg:flex items-center">
          <a
            href={BRAND_CONFIG.contact.phoneUrl}
            className="flex items-center gap-2 rounded-sm border border-neutral-600 bg-brand-slate-surface px-4 py-2 text-sm font-semibold text-white transition-all hover:border-accent-brass hover:text-accent-brass"
            aria-label={`সরাসরি কল করুন: ${BRAND_CONFIG.contact.primaryPhoneDisplay}`}
          >
            <PhoneIcon />
            <span>কল: {BRAND_CONFIG.contact.primaryPhoneDisplay}</span>
          </a>
        </div>

        {/* ================= MOBILE VIEW ================= */}
        {/* Layout: Text on Left | Call icon + Hamburger on Right */}
        <div className="flex w-full items-center justify-between lg:hidden">
          {/* Brand Text on Left */}
          <a
            href="#top"
            className="flex flex-col focus-visible:outline-none text-left"
            aria-label="Heaven Furniture Mart — হেভেন ফার্নিচার মার্ট · আগ্রাবাদ"
          >
            <span className="font-sans text-sm sm:text-base font-bold tracking-tight text-white leading-tight">
              Heaven Furniture Mart
            </span>
            <span className="font-sans text-[11px] text-neutral-300 font-normal leading-tight mt-0.5">
              হেভেন ফার্নিচার মার্ট · আগ্রাবাদ
            </span>
          </a>

          {/* Call icon + Hamburger on Right */}
          <div className="flex items-center gap-1">
            {/* Call icon */}
            <a
              href={BRAND_CONFIG.contact.phoneUrl}
              className="flex h-10 w-10 items-center justify-center rounded-sm text-neutral-200 hover:text-white hover:bg-brand-slate-surface focus-visible:ring-2 focus-visible:ring-accent-whatsapp"
              aria-label="সরাসরি কল করুন"
            >
              <PhoneIcon />
            </a>

            {/* Hamburger button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-sm text-neutral-200 hover:text-white hover:bg-brand-slate-surface focus-visible:ring-2 focus-visible:ring-accent-whatsapp"
              aria-label={mobileOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-[56px] bottom-0 z-40 overflow-y-auto bg-brand-slate-deep/98 px-6 pb-24 pt-4 backdrop-blur-md transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100 translate-y-0 visible"
            : "pointer-events-none opacity-0 -translate-y-4 invisible"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col gap-1 pt-2">
          {BRAND_CONFIG.navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={mobileOpen ? 0 : -1}
              onClick={() => setMobileOpen(false)}
              className="border-b border-brand-slate-border py-4 text-base font-medium text-white transition-colors hover:text-accent-brass"
            >
              {link.label}
            </a>
          ))}

          {/* Direct Call Button in Drawer */}
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={BRAND_CONFIG.contact.phoneUrl}
              tabIndex={mobileOpen ? 0 : -1}
              className="flex h-12 items-center justify-center gap-2 rounded-sm border border-neutral-600 bg-brand-slate-surface px-6 text-sm font-semibold text-white transition-colors hover:border-accent-brass"
            >
              <PhoneIcon />
              <span>কল করুন: {BRAND_CONFIG.contact.primaryPhoneDisplay}</span>
            </a>
          </div>

          <div className="mt-8 border-t border-brand-slate-border pt-5">
            <p className="text-xs text-neutral-300">
              📍 {BRAND_CONFIG.location.fullAddressBn}
            </p>
            <p className="mt-2 text-xs text-neutral-400">
              🕒 {BRAND_CONFIG.operatingHours.daysBn}: {BRAND_CONFIG.operatingHours.timeBn}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
