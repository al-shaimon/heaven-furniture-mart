"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BRAND_CONFIG } from "@/content/brand";

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
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-4"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col gap-1 px-6 pt-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
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
              className="flex h-12 items-center justify-center gap-2 rounded-sm bg-accent-whatsapp px-6 text-sm font-semibold text-white transition-colors hover:bg-accent-whatsapp-hover"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
            <a
              href="#consultation"
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

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}
