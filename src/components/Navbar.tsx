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
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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
          aria-label="প্রধান নেভিগেশন"
        >
          {/* ================= DESKTOP VIEW ================= */}
          {/* Desktop Brand Text */}
          <div className="hidden lg:flex items-center">
            <a
              href="#top"
              className="flex flex-col focus-visible:outline-none group"
              aria-label="Heaven Furniture Mart — হেভেন ফার্নিচার মার্ট · আগ্রাবাদ"
            >
              <span className="font-sans text-lg sm:text-xl font-bold tracking-normal text-white group-hover:text-accent-brass transition-colors leading-tight">
                Heaven Furniture Mart
              </span>
              <span className="text-xs text-neutral-300 font-normal leading-normal mt-1">
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
                  className="text-sm font-medium tracking-normal text-neutral-300 hover:text-white transition-colors focus-visible:text-accent-brass"
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

          {/* ================= MOBILE VIEW TOP BAR ================= */}
          {/* Layout: Text on Left | Call icon + Hamburger on Right */}
          <div className="flex w-full items-center justify-between lg:hidden">
            {/* Brand Text on Left */}
            <a
              href="#top"
              className="flex flex-col focus-visible:outline-none text-left"
              aria-label="Heaven Furniture Mart — হেভেন ফার্নিচার মার্ট · আগ্রাবাদ"
            >
              <span className="font-sans text-base font-bold tracking-normal text-white leading-tight">
                Heaven Furniture Mart
              </span>
              <span className="text-[11px] text-neutral-300 font-normal leading-normal mt-0.5">
                হেভেন ফার্নিচার মার্ট · আগ্রাবাদ
              </span>
            </a>

            {/* Call icon + Hamburger on Right */}
            <div className="flex items-center gap-1.5">
              {/* Call icon */}
              <a
                href={BRAND_CONFIG.contact.phoneUrl}
                className="flex h-11 w-11 items-center justify-center rounded-sm text-neutral-200 hover:text-white hover:bg-brand-slate-surface active:scale-95 transition-transform focus-visible:ring-2 focus-visible:ring-accent-whatsapp cursor-pointer"
                aria-label="সরাসরি কল করুন"
              >
                <PhoneIcon />
              </a>

              {/* Hamburger button */}
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-sm text-neutral-200 hover:text-white hover:bg-brand-slate-surface active:scale-95 transition-transform focus-visible:ring-2 focus-visible:ring-accent-whatsapp cursor-pointer"
                aria-label="মেনু খুলুন"
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
      {/* Placed outside header to avoid backdrop-filter containing block truncation */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-brand-slate-deep text-white lg:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="মোবাইল নেভিগেশন মেনু"
        >
          {/* Top Bar inside Drawer matching the header */}
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
                হেভেন ফার্নিচার মার্ট · আগ্রাবাদ
              </span>
            </a>

            {/* Call icon + Close icon on Right */}
            <div className="flex items-center gap-1">
              <a
                href={BRAND_CONFIG.contact.phoneUrl}
                className="flex h-10 w-10 items-center justify-center rounded-sm text-neutral-200 hover:text-white hover:bg-brand-slate-surface focus-visible:ring-2 focus-visible:ring-accent-whatsapp"
                aria-label="সরাসরি কল করুন"
              >
                <PhoneIcon />
              </a>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-sm text-neutral-200 hover:text-white hover:bg-brand-slate-surface active:scale-95 transition-transform focus-visible:ring-2 focus-visible:ring-accent-whatsapp cursor-pointer"
                aria-label="মেনু বন্ধ করুন"
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
                  className="border-b border-brand-slate-border/70 py-4 text-base font-medium text-white transition-colors hover:text-accent-brass active:text-accent-brass"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Direct Call Button in Drawer */}
            <div className="mt-8 pb-20 space-y-4">
              <a
                href={BRAND_CONFIG.contact.phoneUrl}
                className="flex h-12 items-center justify-center gap-2 rounded-sm border border-neutral-600 bg-brand-slate-surface px-6 text-sm font-semibold text-white transition-colors hover:border-accent-brass"
              >
                <PhoneIcon />
                <span>কল করুন: {BRAND_CONFIG.contact.primaryPhoneDisplay}</span>
              </a>

              <div className="border-t border-brand-slate-border/80 pt-4 text-xs text-neutral-400 space-y-1.5">
                <p className="text-neutral-300">
                  📍 {BRAND_CONFIG.location.fullAddressBn}
                </p>
                <p>
                  🕒 {BRAND_CONFIG.operatingHours.daysBn}: {BRAND_CONFIG.operatingHours.timeBn}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
