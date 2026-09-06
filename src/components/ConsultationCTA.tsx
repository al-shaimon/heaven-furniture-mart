"use client";

import { useState, useRef } from "react";
import { BRAND_CONFIG } from "@/content/brand";
import { TRANSLATIONS } from "@/content/translations";
import { useLanguage } from "@/context/LanguageContext";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { PhoneIcon, WhatsAppIcon, CheckIcon } from "@/components/icons";

export default function ConsultationCTA() {
  const { lang, t } = useLanguage();
  const { openQuoteModal } = useQuoteModal();
  const tc = TRANSLATIONS.consultation;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("living");
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  const categoryLabels: Record<string, { bn: string; en: string }> = {
    living: { bn: "লিভিং রুম সোফা সেট", en: "Living Room Sofa Set" },
    bedroom: { bn: "বেডরুম খাট ও আলমারি", en: "Bedroom Bed & Wardrobe" },
    dining: { bn: "ডাইনিং টেবিল ও চেয়ার", en: "Dining Table & Chairs" },
    custom: { bn: "কাস্টম মাপের ফার্নিচার", en: "Custom Dimensions Furniture" },
  };

  const handleWhatsAppSend = (e: React.MouseEvent) => {
    e.preventDefault();
    if (formRef.current && !formRef.current.reportValidity()) {
      return;
    }
    if (!name.trim() || !phone.trim()) {
      return;
    }

    const catText = categoryLabels[category]
      ? (lang === "en" ? categoryLabels[category].en : categoryLabels[category].bn)
      : category;

    const message = lang === "en"
      ? `Hello Heaven Furniture Mart,\nMy Name: ${name.trim()}\nPhone: ${phone.trim()}\nInterested in: ${catText}\nI would like to inquire about pricing and custom options.`
      : `আসসালামু আলাইকুম হেভেন ফার্নিচার মার্ট,\nআমার নাম: ${name.trim()}\nফোন: ${phone.trim()}\nআগ্রহের ফার্নিচার: ${catText}\nআমি এই ফার্নিচারের দাম ও বিস্তারিত জানতে চাই।`;

    const waUrl = `https://wa.me/${BRAND_CONFIG.contact.whatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-brand-slate-deep py-12 text-white sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-8 lg:px-12 2xl:px-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-6 reveal-on-scroll">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-brass/20 px-3 py-1 text-xs font-bold text-accent-brass uppercase tracking-wider mb-2">
              💬 {t("সরাসরি পরামর্শ", "Direct Consultation")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              {t(tc.title.bn, tc.title.en)}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-300 leading-relaxed">
              {t(tc.subtitle.bn, tc.subtitle.en)}
            </p>

            {/* Direct Contact Cards */}
            <div className="mt-6 space-y-3">
              <a
                href={BRAND_CONFIG.contact.phoneUrl}
                className="flex items-center gap-3 rounded-xl border border-brand-slate-border bg-brand-slate-surface p-3.5 transition-colors hover:border-accent-brass group"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-slate-deep text-accent-brass group-hover:text-accent-whatsapp">
                  <PhoneIcon />
                </span>
                <div>
                  <p className="text-xs text-neutral-400">{t(tc.callCard.label.bn, tc.callCard.label.en)}</p>
                  <p className="text-base font-bold text-white group-hover:text-accent-brass transition-colors">
                    {BRAND_CONFIG.contact.primaryPhoneDisplay}
                  </p>
                </div>
              </a>

              <a
                href={BRAND_CONFIG.contact.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-accent-whatsapp/40 bg-brand-slate-surface p-3.5 transition-colors hover:border-accent-whatsapp group"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-whatsapp text-brand-slate-deep">
                  <WhatsAppIcon size={20} />
                </span>
                <div>
                  <p className="text-xs text-neutral-400">{t(tc.whatsAppCard.label.bn, tc.whatsAppCard.label.en)}</p>
                  <p className="text-base font-bold text-accent-whatsapp group-hover:underline">
                    {BRAND_CONFIG.contact.primaryPhoneDisplay}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 rounded-xl border border-brand-slate-border bg-brand-slate-surface p-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-slate-deep text-base">
                  📍
                </span>
                <div>
                  <p className="text-xs text-neutral-400">{t(tc.addressCard.label.bn, tc.addressCard.label.en)}</p>
                  <p className="text-sm font-medium text-white">
                    {t(BRAND_CONFIG.location.fullAddressBn, BRAND_CONFIG.location.fullAddressEn)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Callback & Quote Request Card */}
          <div className="lg:col-span-6 reveal-on-scroll delay-150">
            <div className="rounded-2xl border border-neutral-700 bg-brand-slate-surface p-6 shadow-xl sm:p-8">
              {!submitted ? (
                <>
                  <div className="flex items-center justify-between border-b border-neutral-700 pb-3 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {t(tc.formTitle.bn, tc.formTitle.en)}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-neutral-400">
                        {t(tc.formSubtitle.bn, tc.formSubtitle.en)}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => openQuoteModal()}
                      className="hidden sm:inline-flex items-center gap-1 rounded-lg bg-accent-brass/20 border border-accent-brass/50 px-3 py-1.5 text-xs font-bold text-accent-brass hover:bg-accent-brass hover:text-brand-slate-deep transition-all cursor-pointer"
                    >
                      <span>📋 {t("পূর্ণাঙ্গ কোটেশন", "Full Quote Form")}</span>
                    </button>
                  </div>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="customer-name" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {t("আপনার নাম", "Your Name")} *
                      </label>
                      <input
                        id="customer-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t("আপনার পুরো নাম লিখুন", "Enter your full name")}
                        className="w-full rounded-xl border border-neutral-600 bg-brand-slate-deep px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-accent-brass focus:outline-none focus:ring-1 focus:ring-accent-brass"
                      />
                    </div>

                    <div>
                      <label htmlFor="customer-phone" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {t("মোবাইল নম্বর (WhatsApp)", "Mobile Number (WhatsApp)")} *
                      </label>
                      <input
                        id="customer-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="01XXXXXXXXX"
                        className="w-full rounded-xl border border-neutral-600 bg-brand-slate-deep px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-accent-brass focus:outline-none focus:ring-1 focus:ring-accent-brass"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {t("কোন ধরনের ফার্নিচার খুঁজছেন?", "What Furniture Are You Looking For?")}
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full rounded-xl border border-neutral-600 bg-brand-slate-deep px-4 py-3 text-sm text-white focus:border-accent-brass focus:outline-none focus:ring-1 focus:ring-accent-brass"
                      >
                        <option value="living">{t("🛋️ লিভিং রুম সোফা সেট", "🛋️ Living Room Sofa Set")}</option>
                        <option value="bedroom">{t("🛏️ বেডরুম খাট ও আলমারি", "🛏️ Bedroom Bed & Wardrobe")}</option>
                        <option value="dining">{t("🍽️ ডাইনিং টেবিল ও চেয়ার", "🍽️ Dining Table & Chairs")}</option>
                        <option value="custom">{t("📐 কাস্টম মাপের ফার্নিচার", "📐 Custom Dimensions Furniture")}</option>
                      </select>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3 w-full">
                      <button
                        type="submit"
                        className="w-full sm:flex-1 h-[48px] flex items-center justify-center gap-2 rounded-xl bg-accent-brass px-5 text-sm sm:text-base font-bold text-brand-slate-deep transition-all hover:bg-accent-brass-dark hover:text-white cursor-pointer shadow-md"
                      >
                        <span className="leading-none">📞</span>
                        <span>{t("আমাকে কল করুন", "Request Callback")}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppSend}
                        className="w-full sm:flex-1 h-[48px] flex items-center justify-center gap-2 rounded-xl bg-accent-whatsapp px-5 text-sm sm:text-base font-bold text-brand-slate-deep transition-all hover:bg-accent-whatsapp-hover cursor-pointer shadow-md"
                      >
                        <WhatsAppIcon size={18} />
                        <span>WhatsApp</span>
                      </button>
                    </div>

                    <div className="text-center pt-1">
                      <button
                        type="button"
                        onClick={() => openQuoteModal({ defaultCategory: category })}
                        className="text-xs text-accent-brass hover:underline cursor-pointer font-medium"
                      >
                        📋 {t("কাঠের ধরন ও মাপসহ বিস্তারিত কোটেশন চান? এখানে ক্লিক করুন →", "Need an itemized quote with wood species & dimensions? Click here →")}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-6 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-whatsapp/20 text-accent-whatsapp mb-2">
                    <CheckIcon size={28} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {t(tc.successTitle.bn, tc.successTitle.en)}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
                    {t(
                      "আপনার দেওয়া নম্বরে আমাদের বিক্রয় প্রতিনিধি আগামী ৩০-৬০ মিনিটের মধ্যে কল করবেন।",
                      "Our sales consultant will contact your provided number within 30-60 minutes."
                    )}
                  </p>
                  <div className="pt-2">
                    <a
                      href={BRAND_CONFIG.contact.phoneUrl}
                      className="inline-flex items-center gap-2 rounded-xl border border-neutral-600 bg-brand-slate-deep px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:border-accent-brass hover:text-accent-brass"
                    >
                      <PhoneIcon />
                      <span>{t("জরুরি হলে কল দিন:", "For immediate queries:")} {BRAND_CONFIG.contact.primaryPhoneDisplay}</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
