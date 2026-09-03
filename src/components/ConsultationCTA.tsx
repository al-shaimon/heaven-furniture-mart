"use client";

import { useState } from "react";
import { BRAND_CONFIG } from "@/content/brand";

export default function ConsultationCTA() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [space, setSpace] = useState("living");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Construct prefilled WhatsApp redirect url
    const message = `Hello Heaven Furniture Mart, my name is ${name}. I would like to book a free design consultation for my ${space} space. My phone/WhatsApp is ${phone}.`;
    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${BRAND_CONFIG.contact.whatsAppNumber}?text=${encoded}`;

    setSubmitted(true);

    // Open WhatsApp in new tab after brief acknowledgment
    setTimeout(() => {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }, 600);
  };

  return (
    <section id="consultation" className="relative bg-brand-slate-deep py-16 text-text-primary-light sm:py-24 lg:py-32">
      {/* Subtle top divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-accent-brass/20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 reveal-on-scroll">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Left Column: Heading & Reassurance */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-brass sm:text-sm sm:tracking-[0.2em]">
              Start Your Project
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold leading-[1.15] tracking-tight sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
              {BRAND_CONFIG.cta.headline}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary-light sm:mt-6 sm:text-base md:text-lg sm:leading-relaxed">
              {BRAND_CONFIG.cta.subhead}
            </p>

            {/* Trust Checklist */}
            <div className="mt-6 space-y-2.5 border-t border-brand-slate-border pt-6 sm:mt-8 sm:space-y-3">
              {[
                "100% Free, No-Obligation Design Review",
                "Blueprint & Room Measurement Analysis",
                "Direct Guidance on Chittagong Teak & Finishes",
                "Transparent Quotation With No Hidden Fees",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-text-secondary-light">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-accent-brass"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp Prompt */}
            <div className="mt-6 flex items-center gap-2.5 text-xs text-text-secondary-light sm:mt-8 sm:text-sm">
              <span>Prefer instant messaging?</span>
              <a
                href={BRAND_CONFIG.cta.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-accent-whatsapp hover:underline"
              >
                Chat directly on WhatsApp →
              </a>
            </div>
          </div>

          {/* Right Column: Clean Interactive Form */}
          <div className="lg:col-span-6">
            <div className="rounded-sm border border-brand-slate-border bg-brand-slate-surface p-6 shadow-lg sm:p-8 lg:p-10">
              <h3 className="font-serif text-xl font-semibold text-text-primary-light sm:text-2xl">
                Book a Free Design Consultation
              </h3>
              <p className="mt-1.5 text-xs text-text-secondary-light sm:mt-2 sm:text-sm">
                Fill in your details below and our senior furniture designer will reach out to review your room requirements.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-sm border border-accent-brass/40 bg-brand-slate-deep p-6 text-center sm:mt-8">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto text-accent-brass"
                    aria-hidden="true"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h4 className="mt-4 font-serif text-lg font-semibold text-text-primary-light sm:text-xl">
                    Consultation Request Received
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-text-secondary-light sm:text-sm">
                    Connecting you to our WhatsApp design desk... You can also reach us directly at{" "}
                    <span className="font-medium text-accent-brass">
                      {BRAND_CONFIG.contact.primaryPhoneFormatted}
                    </span>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="consultation-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-text-secondary-light"
                    >
                      Your Full Name *
                    </label>
                    <input
                      id="consultation-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Tanvir Ahmed"
                      className="mt-1.5 w-full rounded-sm border border-brand-slate-border bg-brand-slate-deep px-3.5 py-3 text-base text-text-primary-light placeholder-neutral-500 transition-colors focus:border-accent-brass focus:outline-none focus:ring-1 focus:ring-accent-brass sm:text-sm"
                    />
                  </div>

                  {/* Phone / WhatsApp Field */}
                  <div>
                    <label
                      htmlFor="consultation-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-text-secondary-light"
                    >
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="consultation-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +880 1819-000000"
                      className="mt-1.5 w-full rounded-sm border border-brand-slate-border bg-brand-slate-deep px-3.5 py-3 text-base text-text-primary-light placeholder-neutral-500 transition-colors focus:border-accent-brass focus:outline-none focus:ring-1 focus:ring-accent-brass sm:text-sm"
                    />
                  </div>

                  {/* Space Type Dropdown */}
                  <div>
                    <label
                      htmlFor="consultation-space"
                      className="block text-xs font-semibold uppercase tracking-wider text-text-secondary-light"
                    >
                      What space are you furnishing?
                    </label>
                    <select
                      id="consultation-space"
                      value={space}
                      onChange={(e) => setSpace(e.target.value)}
                      className="mt-1.5 w-full rounded-sm border border-brand-slate-border bg-brand-slate-deep px-3.5 py-3 text-base text-text-primary-light transition-colors focus:border-accent-brass focus:outline-none focus:ring-1 focus:ring-accent-brass sm:text-sm"
                    >
                      <option value="Living Room">Living Room (Sofas, Center Table, TV Console)</option>
                      <option value="Dining Room">Dining Room (Marble/Teak Table &amp; Chairs)</option>
                      <option value="Master Bedroom">Master Bedroom (Bed, Wardrobe, Dressing Table)</option>
                      <option value="Full Apartment / Residence">Full Apartment / Residence Interior</option>
                      <option value="Custom Bespoke Cabinetry">Custom Cabinetry &amp; Display Vitrines</option>
                      <option value="Executive Office">Executive Office &amp; Study</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full rounded-sm border border-accent-brass bg-accent-brass py-3.5 text-sm font-semibold tracking-wide text-brand-slate-deep transition-all duration-300 hover:bg-accent-brass-hover focus-visible:ring-2 focus-visible:ring-accent-brass"
                  >
                    Request Free Design Consultation
                  </button>

                  <p className="text-center text-[11px] text-neutral-400">
                    🔒 We respect your privacy. No spam — only direct design consultation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
