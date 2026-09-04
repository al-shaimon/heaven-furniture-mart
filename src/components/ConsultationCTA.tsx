"use client";

import { useState } from "react";
import { BRAND_CONFIG } from "@/content/brand";
import { PhoneIcon, WhatsAppIcon, CheckIcon } from "@/components/icons";

export default function ConsultationCTA() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setSubmitted(true);
  };

  const whatsappDirectUrl = `https://wa.me/8801960481983?text=${encodeURIComponent(
    `আসসালামু আলাইকুম, আমার নাম ${name || "গ্রাহক"}। আমি হেভেন ফার্নিচার মার্ট থেকে ফার্নিচার সম্পর্কে জানতে চাই। আমার ফোন: ${phone || ""}`
  )}`;

  return (
    <section id="contact" className="relative bg-brand-slate-deep py-14 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              কথা বলুন বা মেসেজ দিন
            </h2>
            <p className="mt-2 text-base text-neutral-300 leading-relaxed">
              যেকোনো ফার্নিচারের দাম, সাইজ বা কাস্টমাইজেশন সম্পর্কে জানতে আমাদের সরাসরি কল করতে পারেন বা হোয়াটসঅ্যাপে মেসেজ পাঠাতে পারেন।
            </p>

            {/* Direct Contact Cards */}
            <div className="mt-6 space-y-3">
              <a
                href={BRAND_CONFIG.contact.phoneUrl}
                className="flex items-center gap-3 rounded-sm border border-brand-slate-border bg-brand-slate-surface p-3.5 transition-colors hover:border-accent-brass group"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-slate-deep text-accent-brass group-hover:text-accent-whatsapp">
                  <PhoneIcon />
                </span>
                <div>
                  <p className="text-xs text-neutral-400">সরাসরি কল দিন</p>
                  <p className="text-base font-bold text-white group-hover:text-accent-brass transition-colors">
                    {BRAND_CONFIG.contact.primaryPhoneDisplay}
                  </p>
                </div>
              </a>

              <a
                href={BRAND_CONFIG.contact.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-sm border border-accent-whatsapp/40 bg-brand-slate-surface p-3.5 transition-colors hover:border-accent-whatsapp group"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-whatsapp text-brand-slate-deep">
                  <WhatsAppIcon size={20} />
                </span>
                <div>
                  <p className="text-xs text-neutral-400">হোয়াটসঅ্যাপ মেসেজ</p>
                  <p className="text-base font-bold text-accent-whatsapp group-hover:underline">
                    {BRAND_CONFIG.contact.primaryPhoneDisplay}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 rounded-sm border border-brand-slate-border bg-brand-slate-surface p-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-slate-deep text-base">
                  📍
                </span>
                <div>
                  <p className="text-xs text-neutral-400">শোরুমের ঠিকানা</p>
                  <p className="text-sm font-medium text-white">
                    {BRAND_CONFIG.location.fullAddressBn}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Simple 2-Field Callback Form */}
          <div className="lg:col-span-6">
            <div className="rounded-sm border border-neutral-700 bg-brand-slate-surface p-6 shadow-xl sm:p-8">
              {!submitted ? (
                <>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    কলব্যাক চান?
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-400">
                    আপনার নাম ও নম্বর দিলে আমাদের টিম থেকে আপনাকে কল করা হবে।
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="customer-name" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        আপনার নাম
                      </label>
                      <input
                        id="customer-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="আপনার নাম লিখুন"
                        className="w-full rounded-sm border border-neutral-600 bg-brand-slate-deep px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-accent-whatsapp focus:outline-none focus:ring-1 focus:ring-accent-whatsapp"
                      />
                    </div>

                    <div>
                      <label htmlFor="customer-phone" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        মোবাইল নম্বর
                      </label>
                      <input
                        id="customer-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="01XXXXXXXXX"
                        className="w-full rounded-sm border border-neutral-600 bg-brand-slate-deep px-4 py-3 text-sm text-white placeholder-neutral-500 focus:border-accent-whatsapp focus:outline-none focus:ring-1 focus:ring-accent-whatsapp"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full h-[52px] rounded-sm bg-accent-whatsapp px-6 text-base font-bold text-brand-slate-deep transition-colors hover:bg-accent-whatsapp-hover cursor-pointer"
                    >
                      📞 আমাকে কল করুন
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-whatsapp/20 text-accent-whatsapp mb-4">
                    <CheckIcon size={28} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    ধন্যবাদ, {name}!
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    আপনার নম্বরটি পেয়েছি। আমাদের টিম খুব দ্রুত আপনার সাথে কথা বলবে।
                  </p>

                  <div className="mt-6 pt-4 border-t border-brand-slate-border">
                    <p className="text-xs text-neutral-400 mb-3">
                      এখনই মেসেজ পাঠাতে চাইলে:
                    </p>
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-accent-whatsapp px-5 text-sm font-bold text-brand-slate-deep transition-colors hover:bg-accent-whatsapp-hover"
                    >
                      <WhatsAppIcon size={18} />
                      <span>হোয়াটসঅ্যাপে সরাসরি মেসেজ দিন</span>
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
