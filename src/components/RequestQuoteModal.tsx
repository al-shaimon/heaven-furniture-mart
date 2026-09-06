"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { BRAND_CONFIG } from "@/content/brand";
import { TRANSLATIONS } from "@/content/translations";
import { PhoneIcon, WhatsAppIcon, CheckIcon } from "@/components/icons";

export default function RequestQuoteModal() {
  const { lang, t } = useLanguage();
  const { isOpen, initialData, closeQuoteModal } = useQuoteModal();
  const modalRef = useRef<HTMLDivElement>(null);
  const quoteFormRef = useRef<HTMLFormElement>(null);

  // Form State
  const [category, setCategory] = useState<string>("living");
  const [specificItem, setSpecificItem] = useState<string>("");
  const [woodType, setWoodType] = useState<string>("teak");
  const [dimensionsNotes, setDimensionsNotes] = useState<string>("");
  const [customerName, setCustomerName] = useState<string>("");
  const [customerPhone, setCustomerPhone] = useState<string>("");
  const [customerCity, setCustomerCity] = useState<string>("");
  const [errors, setErrors] = useState<{ name?: boolean; phone?: boolean }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [quoteRefId, setQuoteRefId] = useState<string>("");

  // Sync initialData when modal opens
  useEffect(() => {
    const win = typeof window !== "undefined" ? (window as unknown as { __lenis?: { stop: () => void; start: () => void } }) : null;

    if (isOpen) {
      if (initialData.defaultCategory) {
        setCategory(initialData.defaultCategory);
      }
      if (initialData.defaultProductTitle) {
        setSpecificItem(initialData.defaultProductTitle);
      } else {
        setSpecificItem("");
      }
      setErrors({});
      setIsSubmitted(false);
      setQuoteRefId(`HFM-${Math.floor(100000 + Math.random() * 900000)}`);
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (win?.__lenis) {
        win.__lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (win?.__lenis) {
        win.__lenis.start();
      }
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (win?.__lenis) {
        win.__lenis.start();
      }
    };
  }, [isOpen, initialData]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeQuoteModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeQuoteModal]);

  if (!isOpen) return null;

  const tq = TRANSLATIONS.quoteModal;

  const validateFields = () => {
    const newErrors: { name?: boolean; phone?: boolean } = {};
    if (!customerName.trim()) newErrors.name = true;
    if (!customerPhone.trim()) newErrors.phone = true;
    setErrors(newErrors);

    if (quoteFormRef.current) {
      quoteFormRef.current.reportValidity();
    }
    return Object.keys(newErrors).length === 0;
  };

  // Format WhatsApp message
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFields()) return;

    const catName = t(
      tq.categories[category as keyof typeof tq.categories]?.bn || category,
      tq.categories[category as keyof typeof tq.categories]?.en || category
    );
    const woodName = t(
      tq.woods[woodType as keyof typeof tq.woods]?.bn || woodType,
      tq.woods[woodType as keyof typeof tq.woods]?.en || woodType
    );

    const message = [
      `*হেভেন ফার্নিচার মার্ট — কোটেশন রিকোয়েস্ট*`,
      `রেফারেন্স: #${quoteRefId}`,
      `---------------------------------`,
      `👤 গ্রাহকের নাম: ${customerName.trim()}`,
      `📞 ফোন: ${customerPhone.trim()}`,
      `📍 ডেলিভারি এলাকা: ${customerCity || "চট্টগ্রাম"}`,
      `🪑 ফার্নিচারের ধরন: ${catName}`,
      specificItem ? `✨ মডেল / পছন্দ: ${specificItem}` : "",
      `🪵 কাঠ / ম্যাটেরিয়াল: ${woodName}`,
      dimensionsNotes ? `📐 মাপ / বিশেষ চাহিদা: ${dimensionsNotes}` : "",
      `---------------------------------`,
      `আসসালামু আলাইকুম, আমি এই ফার্নিচারের আনুমানিক বাজেট ও ডেলিভারি সময় জানতে চাই।`,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/${BRAND_CONFIG.contact.whatsAppNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setIsSubmitted(true);
  };

  const handleOnlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFields()) return;
    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      data-lenis-prevent
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-slate-deep/80 backdrop-blur-sm transition-opacity -z-10"
        onClick={closeQuoteModal}
      />

      {/* Centering & Scroll Container Wrapper */}
      <div className="flex min-h-full items-center justify-center p-3 sm:p-4 md:p-6 py-6 sm:py-8">
        {/* Modal Card */}
        <div
          ref={modalRef}
          data-lenis-prevent
          className="relative w-full max-w-2xl my-auto rounded-2xl border border-neutral-200 bg-white p-5 sm:p-7 md:p-8 shadow-2xl transition-all overscroll-contain touch-pan-y"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeQuoteModal}
            className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-brand-slate-deep transition-colors cursor-pointer"
            aria-label={t(tq.closeBtn.bn, tq.closeBtn.en)}
          >
            ✕
          </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="border-b border-neutral-100 pb-4 pr-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-brass-dark/10 px-3 py-1 text-xs font-bold text-accent-brass-dark uppercase tracking-wider mb-2">
                📋 {t(tq.modalTitle.bn, tq.modalTitle.en)}
              </span>
              <h2
                id="quote-modal-title"
                className="text-xl sm:text-2xl font-bold text-text-primary-dark tracking-tight"
              >
                {t(tq.modalTitle.bn, tq.modalTitle.en)}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-text-secondary-dark leading-relaxed">
                {t(tq.modalSubtitle.bn, tq.modalSubtitle.en)}
              </p>
            </div>

            {/* Form */}
            <form ref={quoteFormRef} data-lenis-prevent className="mt-5 space-y-4 sm:space-y-5 touch-pan-y">
              {/* If prefilled from a specific product */}
              {specificItem && (
                <div className="flex items-center justify-between rounded-lg border border-accent-brass/40 bg-surface-ecru-light/60 p-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-accent-brass-dark">
                      {t("নির্বাচিত আইটেম:", "Selected Piece:")}
                    </span>
                    <span className="font-semibold text-text-primary-dark">
                      {specificItem}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSpecificItem("")}
                    className="text-xs text-neutral-400 hover:text-red-500 underline"
                  >
                    {t("পরিবর্তন", "Change")}
                  </button>
                </div>
              )}

              {/* Category Selector */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-text-primary-dark mb-1.5">
                  {t(tq.categoryLabel.bn, tq.categoryLabel.en)}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {Object.entries(tq.categories).map(([key, label]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setCategory(key)}
                      className={`p-2.5 rounded-lg border text-left font-medium transition-all cursor-pointer ${
                        category === key
                          ? "border-accent-brass bg-brand-slate-deep text-white shadow-xs"
                          : "border-neutral-200 bg-white text-text-secondary-dark hover:border-neutral-300"
                      }`}
                    >
                      {t(label.bn, label.en)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Wood / Material Preference */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-text-primary-dark mb-1.5">
                  {t(tq.woodLabel.bn, tq.woodLabel.en)}
                </label>
                <select
                  value={woodType}
                  onChange={(e) => setWoodType(e.target.value)}
                  className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-text-primary-dark focus:border-accent-brass focus:outline-none focus:ring-1 focus:ring-accent-brass"
                >
                  {Object.entries(tq.woods).map(([key, item]) => (
                    <option key={key} value={key}>
                      {t(item.bn, item.en)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Dimensions / Notes Textarea */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-text-primary-dark mb-1.5">
                  {t(tq.notesLabel.bn, tq.notesLabel.en)}
                </label>
                <textarea
                  rows={2}
                  value={dimensionsNotes}
                  onChange={(e) => setDimensionsNotes(e.target.value)}
                  placeholder={t(tq.notesPlaceholder.bn, tq.notesPlaceholder.en)}
                  className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-xs sm:text-sm text-text-primary-dark focus:border-accent-brass focus:outline-none focus:ring-1 focus:ring-accent-brass"
                />
              </div>

              {/* Customer Info: Grid of 2 cols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="quote-customer-name" className="block text-xs font-bold text-text-primary-dark mb-1">
                    {t(tq.nameLabel.bn, tq.nameLabel.en)} *
                  </label>
                  <input
                    id="quote-customer-name"
                    name="customerName"
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: false }));
                    }}
                    placeholder={t(tq.namePlaceholder.bn, tq.namePlaceholder.en)}
                    className={`w-full rounded-lg border bg-white px-3 py-2 text-xs sm:text-sm text-text-primary-dark focus:outline-none focus:ring-1 transition-colors ${
                      errors.name
                        ? "border-red-500 focus:border-red-500 focus:ring-red-400 bg-red-50/20"
                        : "border-neutral-300 focus:border-accent-brass focus:ring-accent-brass"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-[11px] font-medium text-red-600 flex items-center gap-1">
                      <span>⚠️</span>
                      <span>{t("দয়া করে আপনার নাম লিখুন", "Please enter your name")}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="quote-customer-phone" className="block text-xs font-bold text-text-primary-dark mb-1">
                    {t(tq.phoneLabel.bn, tq.phoneLabel.en)} *
                  </label>
                  <input
                    id="quote-customer-phone"
                    name="customerPhone"
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => {
                      setCustomerPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: false }));
                    }}
                    placeholder={t(tq.phonePlaceholder.bn, tq.phonePlaceholder.en)}
                    className={`w-full rounded-lg border bg-white px-3 py-2 text-xs sm:text-sm text-text-primary-dark focus:outline-none focus:ring-1 transition-colors ${
                      errors.phone
                        ? "border-red-500 focus:border-red-500 focus:ring-red-400 bg-red-50/20"
                        : "border-neutral-300 focus:border-accent-brass focus:ring-accent-brass"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-[11px] font-medium text-red-600 flex items-center gap-1">
                      <span>⚠️</span>
                      <span>{t("দয়া করে মোবাইল নম্বর লিখুন", "Please enter your phone number")}</span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="quote-customer-city" className="block text-xs font-bold text-text-primary-dark mb-1">
                  {t(tq.cityLabel.bn, tq.cityLabel.en)}
                </label>
                <input
                  id="quote-customer-city"
                  name="customerCity"
                  type="text"
                  value={customerCity}
                  onChange={(e) => setCustomerCity(e.target.value)}
                  placeholder={t(tq.cityPlaceholder.bn, tq.cityPlaceholder.en)}
                  className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs sm:text-sm text-text-primary-dark focus:border-accent-brass focus:outline-none focus:ring-1 focus:ring-accent-brass"
                />
              </div>

              {/* Dual Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 w-full">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 rounded-xl bg-accent-whatsapp py-3 px-4 text-xs sm:text-sm font-bold text-brand-slate-deep shadow-md hover:bg-accent-whatsapp-hover transition-all cursor-pointer"
                >
                  <WhatsAppIcon size={18} />
                  <span>{t(tq.btnWhatsApp.bn, tq.btnWhatsApp.en)}</span>
                </button>

                <button
                  type="button"
                  onClick={handleOnlineSubmit}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 rounded-xl bg-brand-slate-deep py-3 px-4 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-brand-slate-surface transition-all cursor-pointer border border-neutral-700"
                >
                  <span>{t(tq.btnOnlineSubmit.bn, tq.btnOnlineSubmit.en)}</span>
                </button>
              </div>

              <p className="text-center text-[11px] text-text-secondary-dark">
                🔒 {t("আপনার তথ্য সম্পূর্ণ সুরক্ষিত থাকবে। কোনো স্প্যাম মেসেজ পাঠানো হবে না।", "Your information is secure. No spam, only genuine quotation details.")}
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-6 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
              <CheckIcon />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-text-primary-dark">
              {t(tq.successTitle.bn, tq.successTitle.en)}
            </h3>

            <div className="mx-auto max-w-md rounded-xl bg-surface-ecru-light p-4 border border-neutral-200 text-xs sm:text-sm text-text-primary-dark space-y-1">
              <p className="text-text-secondary-dark">{t(tq.refLabel.bn, tq.refLabel.en)}</p>
              <p className="font-mono text-base font-bold text-accent-brass-dark">{quoteRefId}</p>
            </div>

            <p className="mx-auto max-w-md text-xs sm:text-sm text-text-secondary-dark leading-relaxed">
              {t(tq.successDesc.bn, tq.successDesc.en)}
            </p>

            <div className="pt-3 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={BRAND_CONFIG.contact.phoneUrl}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-brand-slate-deep hover:bg-neutral-50 shadow-2xs"
              >
                <PhoneIcon className="h-4 w-4 text-accent-brass-dark" />
                <span>{t(tq.callHotline.bn, tq.callHotline.en)}: {BRAND_CONFIG.contact.primaryPhoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={closeQuoteModal}
                className="inline-flex items-center justify-center rounded-xl bg-brand-slate-deep px-6 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-brand-slate-surface shadow-xs cursor-pointer"
              >
                {t(tq.closeBtn.bn, tq.closeBtn.en)}
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
