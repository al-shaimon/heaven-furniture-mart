"use client";

import { useState, useEffect } from "react";
import { BRAND_CONFIG } from "@/content/brand";
import { TRANSLATIONS } from "@/content/translations";
import { useLanguage } from "@/context/LanguageContext";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

export default function FloatingActionBar() {
  const { lang, t } = useLanguage();
  const { openQuoteModal } = useQuoteModal();
  const tf = TRANSLATIONS.floating;

  const [bubbleDismissed, setBubbleDismissed] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    let started = false;

    const handleScroll = () => {
      if (!started && window.scrollY > 40) {
        started = true;
        const randomDelayMs = Math.floor(Math.random() * 4500) + 3500;
        timer = setTimeout(() => {
          setShowBubble(true);
        }, randomDelayMs);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const isBubbleVisible = !bubbleDismissed && showBubble;

  return (
    <>
      {/* Mobile Fixed Bottom Action Bar (Call | WhatsApp | Quote | Showroom) */}
      <aside
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-brand-slate-border bg-brand-slate-deep/98 px-2 pt-2 pb-2 backdrop-blur-md safe-bottom md:hidden shadow-2xl"
        aria-label={t("মোবাইল কুইক অ্যাকশন", "Mobile Quick Actions")}
      >
        <div className="mx-auto flex max-w-md items-center gap-1.5">
          {/* Direct Call Button */}
          <a
            href={BRAND_CONFIG.contact.phoneUrl}
            className="flex h-[48px] flex-1 flex-col items-center justify-center rounded-lg border border-neutral-700 bg-brand-slate-surface text-[11px] font-bold text-white transition-colors hover:border-accent-brass"
            aria-label={t("সরাসরি কল করুন", "Call directly")}
          >
            <PhoneIcon className="h-4 w-4 text-accent-brass" />
            <span className="mt-0.5">{t(tf.call.bn, tf.call.en)}</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={BRAND_CONFIG.contact.getWhatsAppUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[48px] flex-[1.2] flex-col items-center justify-center rounded-lg bg-accent-whatsapp text-[11px] font-bold text-brand-slate-deep shadow-xs transition-colors hover:bg-accent-whatsapp-hover"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={16} />
            <span className="mt-0.5">{t(tf.whatsapp.bn, tf.whatsapp.en)}</span>
          </a>

          {/* Request Quote Button */}
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="flex h-[48px] flex-1 flex-col items-center justify-center rounded-lg border border-accent-brass/50 bg-brand-slate-surface text-[11px] font-bold text-accent-brass transition-colors hover:bg-accent-brass hover:text-brand-slate-deep cursor-pointer"
            aria-label={t("কোটেশন রিকোয়েস্ট", "Request Quote")}
          >
            <span className="text-sm leading-none">📋</span>
            <span className="mt-0.5">{t(tf.quote.bn, tf.quote.en)}</span>
          </button>

          {/* Showroom Button */}
          <a
            href="#showroom"
            className="flex h-[48px] flex-1 flex-col items-center justify-center rounded-lg border border-neutral-700 bg-brand-slate-surface text-[11px] font-bold text-neutral-300 transition-colors hover:text-white"
            aria-label={t("শোরুমের লোকেশন দেখুন", "View Showroom Location")}
          >
            <span className="text-sm leading-none">📍</span>
            <span className="mt-0.5">{t(tf.showroom.bn, tf.showroom.en)}</span>
          </a>
        </div>
      </aside>

      {/* Desktop Floating WhatsApp Button & Incoming Message Bubble (Desktop Only) */}
      <aside
        className="fixed bottom-8 right-8 z-40 hidden lg:flex flex-col items-end gap-2.5 pointer-events-none"
        aria-label={t("ডেস্কটপ দ্রুত যোগাযোগ", "Desktop Quick Contact")}
      >
        {/* Incoming WhatsApp Message Bubble */}
        {isBubbleVisible && (
          <div className="pointer-events-auto relative max-w-[290px] animate-bubble-float transition-all duration-300">
            <div className="relative rounded-2xl rounded-br-xs border border-neutral-200/90 bg-white/98 p-3.5 shadow-2xl backdrop-blur-md">
              {/* Header inside Bubble */}
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
                      {t("অনলাইন • সরাসরি সাপোর্ট", "Online • Live Support")}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setBubbleDismissed(true)}
                  className="flex h-5 w-5 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition-colors cursor-pointer text-xs"
                  aria-label="Close message"
                >
                  ✕
                </button>
              </div>

              {/* Message Body */}
              <a
                href={BRAND_CONFIG.contact.getWhatsAppUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs font-medium text-text-primary-dark hover:text-accent-whatsapp-dark transition-colors leading-relaxed group"
              >
                <p>
                  {t(tf.bubblePrompt.bn, tf.bubblePrompt.en)}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-accent-whatsapp-dark group-hover:underline">
                  <span>{t("WhatsApp এ মেসেজ করুন", "Chat on WhatsApp")}</span>
                  <span>→</span>
                </span>
              </a>

              {/* Secondary Request Quote Link inside Bubble */}
              <div className="mt-2.5 pt-2 border-t border-neutral-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="text-[11px] font-semibold text-accent-brass-dark hover:text-brand-slate-deep transition-colors inline-flex items-center gap-1 cursor-pointer hover:underline"
                >
                  <span>📋 {t("কোটেশন রিকোয়েস্ট করুন", "Request a Quote")}</span>
                  <span>→</span>
                </button>
              </div>

              {/* Subtle Pointer Tail */}
              <div className="absolute -bottom-2 right-5 h-3 w-3 rotate-45 border-r border-b border-neutral-200/90 bg-white" />
            </div>
          </div>
        )}

        {/* Floating WhatsApp Action Button */}
        <div className="pointer-events-auto relative">
          {/* Subtle Looping Radar Ping Effect */}
          <div className="pointer-events-none absolute inset-0 -m-1 rounded-full bg-accent-whatsapp/30 animate-radar" />

          {/* Floating WhatsApp Button */}
          <a
            href={BRAND_CONFIG.contact.getWhatsAppUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent-whatsapp text-brand-slate-deep shadow-2xl transition-all duration-300 hover:scale-108 hover:bg-accent-whatsapp-hover active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-whatsapp/50 group cursor-pointer"
            aria-label="WhatsApp Support"
          >
            <WhatsAppIcon size={28} className="transition-transform group-hover:scale-110" />
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500 border-2 border-white shadow-xs" />
            </span>
          </a>
        </div>
      </aside>
    </>
  );
}
