import Image from "next/image";
import { BRAND_CONFIG } from "@/content/brand";
import { WhatsAppIcon } from "@/components/icons";

export default function BespokeProcess() {
  const steps = BRAND_CONFIG.customSteps;

  return (
    <section id="custom" className="bg-surface-ecru-light py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1560px] px-4 sm:px-8 lg:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary-dark">
            আপনার জায়গার মাপ অনুযায়ী ফার্নিচার
          </h2>
          <p className="mt-2 text-base text-text-secondary-dark leading-relaxed">
            রেডিমেড ফার্নিচার অনেক সময় ঘরের মাপে খাপ খায় না। আমাদের জানান আপনার কতটুকু জায়গা আছে—আমরা সঠিক মাপে নিখুঁতভাবে বানিয়ে দেব।
          </p>
        </div>

        {/* 4 Steps Grid & Real Craftsmanship Showcase */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Steps Timeline Column */}
          <div className="space-y-6 lg:col-span-7">
            {steps.map((step) => (
              <div
                key={step.stepNumber}
                className="flex gap-4 border-b border-neutral-200/80 pb-5 last:border-0 last:pb-0 sm:gap-5"
              >
                {/* Step Number Badge */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-brand-slate-deep text-base font-bold text-accent-brass">
                  {step.stepNumber}
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-text-primary-dark">
                    {step.titleBn}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary-dark leading-relaxed">
                    {step.descriptionBn}
                  </p>
                </div>
              </div>
            ))}

            {/* Custom Furniture CTA */}
            <div className="pt-3">
              <a
                href={`https://wa.me/8801960481983?text=${encodeURIComponent(
                  "আসসালামু আলাইকুম, আমি আমার জায়গার মাপে কাস্টম ফার্নিচার তৈরি করাতে চাই। কীভাবে শুরু করব?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-sm bg-accent-whatsapp px-6 text-base font-bold text-brand-slate-deep shadow-xs transition-colors hover:bg-accent-whatsapp-hover"
                aria-label="আপনার মাপ বা ছবি পাঠাতে হোয়াটসঅ্যাপ করুন"
              >
                <WhatsAppIcon size={20} className="shrink-0" />
                <span>আপনার মাপ বা ছবি পাঠাতে হোয়াটসঅ্যাপ করুন</span>
              </a>
            </div>
          </div>

          {/* Authentic Craftsmanship Image Showcase */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-sm border border-neutral-200 bg-white shadow-xs">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-neutral-100">
                <Image
                  src="/assets/craftsmanship/heaven-handcrafted-sofa-process.webp"
                  alt="হেভেন ফার্নিচার মার্টের কারিগরদের কাজের দৃশ্য"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="p-4 sm:p-5">
                <h4 className="text-base font-bold text-text-primary-dark">
                  দক্ষ কারিগরের যত্নে তৈরি
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-text-secondary-dark leading-relaxed">
                  আমাদের কারিগররা প্রতিটি কাঠ, জোড়া ও ফিনিশিং নিজেদের চোখে দেখে নিখুঁতভাবে তৈরি করেন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
