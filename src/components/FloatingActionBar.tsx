"use client";

import { useState } from "react";
import { BRAND_CONFIG } from "@/content/brand";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

export default function FloatingActionBar() {
  const [bubbleDismissed, setBubbleDismissed] = useState(false);

  return (
    <>
      {/* Mobile Fixed Bottom Action Bar (Call | WhatsApp | Showroom) - Hidden on desktop */}
      <aside
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-brand-slate-border bg-brand-slate-deep/98 px-3 pt-2 pb-2 backdrop-blur-md safe-bottom md:hidden shadow-2xl"
        aria-label="মোবাইল কুইক অ্যাকশন"
      >
        <div className="mx-auto flex max-w-md items-center gap-2">
          {/* Direct Call Button */}
          <a
            href={BRAND_CONFIG.contact.phoneUrl}
            className="flex h-[52px] flex-1 items-center justify-center gap-1.5 rounded-sm border border-neutral-600 bg-brand-slate-surface px-2 text-xs font-bold text-white transition-colors hover:border-accent-brass"
            aria-label="সরাসরি কল করুন"
          >
            <PhoneIcon />
            <span>কল করুন</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={BRAND_CONFIG.contact.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[52px] flex-[1.4] items-center justify-center gap-1.5 rounded-sm bg-accent-whatsapp px-3 text-sm font-bold text-brand-slate-deep shadow-xs transition-colors hover:bg-accent-whatsapp-hover"
            aria-label="WhatsApp এ মেসেজ দিন"
          >
            <WhatsAppIcon size={18} />
            <span>WhatsApp</span>
          </a>

          {/* Showroom Button */}
          <a
            href="#showroom"
            className="flex h-[52px] flex-1 items-center justify-center gap-1 rounded-sm border border-neutral-600 bg-brand-slate-surface px-2 text-xs font-bold text-neutral-200 transition-colors hover:text-white"
            aria-label="শোরুমের লোকেশন দেখুন"
          >
            <span>📍 শোরুম</span>
          </a>
        </div>
      </aside>

      {/* Desktop Floating WhatsApp Button & Incoming Message Bubble (Desktop Only) */}
      <aside
        className="fixed bottom-8 right-8 z-40 hidden lg:flex flex-col items-end gap-2.5 pointer-events-none"
        aria-label="ডেস্কটপ দ্রুত যোগাযোগ"
      >
        {/* Realistic Incoming WhatsApp Message Bubble */}
        {!bubbleDismissed && (
          <div className="pointer-events-auto relative max-w-[285px] animate-bubble-float transition-all duration-300">
            <div className="relative rounded-2xl rounded-br-xs border border-neutral-200/90 bg-white/98 p-3.5 shadow-2xl backdrop-blur-md">
              {/* Header inside Bubble: Brand Name & Online Status */}
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100 mb-2">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-whatsapp text-white shadow-xs">
                    <WhatsAppIcon size={14} />
                    <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-500 ring-1 ring-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-primary-dark leading-tight">
                      Heaven Furniture Mart
                    </p>
                    <p className="text-[10px] text-emerald-600 font-medium leading-none mt-0.5">
                      অনলাইন • সরাসরি সাপোর্ট
                    </p>
                  </div>
                </div>

                {/* Dismiss button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setBubbleDismissed(true);
                  }}
                  className="flex h-5 w-5 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition-colors cursor-pointer text-xs"
                  aria-label="মেসেজ বন্ধ করুন"
                  title="বন্ধ করুন"
                >
                  ✕
                </button>
              </div>

              {/* Message text with link */}
              <a
                href={BRAND_CONFIG.contact.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-pointer"
              >
                <p className="text-xs text-text-primary-dark font-medium leading-relaxed group-hover:text-accent-whatsapp-dark transition-colors">
                  আসসালামু আলাইকুম! কোনো ফার্নিচারের দাম বা সাইজ জানতে চান? সরাসরি WhatsApp-এ মেসেজ দিন 👋
                </p>

                {/* Timestamp & WhatsApp Blue Double Ticks */}
                <div className="mt-2 flex items-center justify-end gap-1 text-[10px] text-neutral-400">
                  <span>এখনই</span>
                  <span className="font-bold text-sky-500 tracking-tighter" aria-label="দেখা হয়েছে">
                    ✓✓
                  </span>
                </div>
              </a>

              {/* Chat Bubble Tail pointing directly to the WhatsApp circle button below */}
              <div
                className="absolute -bottom-2 right-6 h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-white drop-shadow-sm"
                aria-hidden="true"
              />
            </div>
          </div>
        )}

        {/* Circular Floating WhatsApp Button (Only Icon, No Text, Looping Radar Pulse) */}
        <div className="pointer-events-auto relative flex items-center justify-center">
          {/* Looping Radar Pulse Rings */}
          <span
            className="pointer-events-none absolute h-16 w-16 rounded-full bg-accent-whatsapp/40 animate-radar"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute h-16 w-16 rounded-full bg-accent-whatsapp/25 animate-radar [animation-delay:1.3s]"
            aria-hidden="true"
          />

          {/* Main Circular Button */}
          <a
            href={BRAND_CONFIG.contact.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-accent-whatsapp text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-accent-whatsapp-hover hover:shadow-emerald-500/40 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-whatsapp/50 cursor-pointer"
            aria-label="WhatsApp এ সরাসরি কথা বলুন"
          >
            <WhatsAppIcon size={34} className="transition-transform duration-300 group-hover:rotate-6" />

            {/* Unread Message Count "1" Badge with Ping */}
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[11px] font-extrabold text-white shadow-md ring-2 ring-white">
              1
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60 pointer-events-none" />
            </span>
          </a>
        </div>
      </aside>
    </>
  );
}
