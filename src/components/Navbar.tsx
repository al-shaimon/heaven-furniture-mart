"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BRAND_CONFIG } from "@/content/brand";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

const NAV_LINKS = BRAND_CONFIG.navigation;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-brand-slate-deep/95 backdrop-blur-sm shadow-[0_1px_0_rgba(197,168,105,0.15)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-12 py-3.5 sm:py-4"
        aria-label="Primary navigation"
      >
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-2.5 sm:gap-3 shrink-0" aria-label="Heaven Furniture Mart — Back to top">
          <Image
            src="/assets/brand/heaven-logo-white.png"
            alt="Heaven Furniture Mart"
            width={44}
            height={44}
            className="h-9 w-9 object-contain sm:h-11 sm:w-11"
          />
          <span className="hidden font-serif text-lg font-semibold tracking-tight text-text-primary-light sm:block">
            Heaven
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-text-secondary-light transition-colors duration-300 hover:text-accent-brass"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Cluster */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Phone badge — desktop only */}
          <a
            href={`tel:${BRAND_CONFIG.contact.primaryPhone.replace(/[\s-]/g, "")}`}
            className="hidden items-center gap-2 text-sm font-medium text-text-secondary-light transition-colors hover:text-accent-brass lg:flex"
            aria-label={`Call Heaven Furniture Mart at ${BRAND_CONFIG.contact.primaryPhone}`}
          >
            <PhoneIcon />
            <span>{BRAND_CONFIG.contact.primaryPhoneFormatted}</span>
          </a>

          {/* Primary CTA — desktop */}
          <a
            href="#consultation"
            className="hidden rounded-sm border border-accent-brass/40 bg-brand-slate-deep px-5 py-2.5 text-sm font-medium tracking-wide text-text-primary-light transition-all duration-300 hover:border-accent-brass hover:bg-brand-slate-surface focus-visible:ring-2 focus-visible:ring-accent-brass focus-visible:ring-offset-2 focus-visible:ring-offset-brand-slate-deep lg:inline-flex"
          >
            Book Consultation
          </a>

          {/* Mobile: Call icon */}
          <a
            href={`tel:${BRAND_CONFIG.contact.primaryPhone.replace(/[\s-]/g, "")}`}
            className="flex h-11 w-11 items-center justify-center text-text-primary-light transition-colors hover:text-accent-brass lg:hidden"
            aria-label="Call showroom"
          >
            <PhoneIcon />
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-0.5 w-5 bg-text-primary-light transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-text-primary-light transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-text-primary-light transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer with Scroll Support */}
      <div
        className={`fixed inset-x-0 top-[60px] sm:top-[72px] bottom-0 z-40 overflow-y-auto bg-brand-slate-deep/98 px-6 pb-20 pt-4 backdrop-blur-md transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100 translate-y-0 visible"
            : "pointer-events-none opacity-0 -translate-y-4 invisible"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col gap-1 px-6 pt-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={mobileOpen ? 0 : -1}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-brand-slate-border py-4 text-lg font-medium text-text-primary-light transition-colors hover:text-accent-brass"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={BRAND_CONFIG.cta.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={mobileOpen ? 0 : -1}
              className="flex h-12 items-center justify-center gap-2 rounded-sm bg-accent-whatsapp px-6 text-sm font-bold text-brand-slate-deep transition-colors hover:bg-accent-whatsapp-hover"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
            <a
              href="#consultation"
              tabIndex={mobileOpen ? 0 : -1}
              onClick={() => setMobileOpen(false)}
              className="flex h-12 items-center justify-center rounded-sm border border-accent-brass/40 bg-brand-slate-surface px-6 text-sm font-medium text-text-primary-light transition-colors hover:border-accent-brass"
            >
              Book a Free Consultation
            </a>
          </div>

          <div className="mt-8 border-t border-brand-slate-border pt-6">
            <p className="text-xs text-text-secondary-light">
              {BRAND_CONFIG.operatingHours.days}: {BRAND_CONFIG.operatingHours.hours}
            </p>
            <p className="mt-1 text-xs text-text-secondary-light">
              {BRAND_CONFIG.operatingHours.weekendNote}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
