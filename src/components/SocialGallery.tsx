import Image from "next/image";
import { BRAND_CONFIG } from "@/content/brand";

const SOCIAL_PHOTOS = [
  {
    src: "/assets/gallery/luxury-dining-table-set-png.webp",
    alt: "হেভেন ফার্নিচার মার্ট ডাইনিং টেবিল সেট",
    label: "ডাইনিং কালেকশন",
  },
  {
    src: "/assets/gallery/classic-furniture-sofa-set-jpeg.webp",
    alt: "হেভেন ফার্নিচার মার্ট ক্লাসিক সোফা সেট",
    label: "ড্রয়িং রুম সোফা",
  },
  {
    src: "/assets/gallery/luxury-bed-png.webp",
    alt: "হেভেন ফার্নিচার মার্ট লাক্সারি খাট",
    label: "বেডরুম খাট",
  },
  {
    src: "/assets/gallery/luxury-showcase-jpeg.webp",
    alt: "হেভেন ফার্নিচার মার্ট শোকেস",
    label: "ওয়াল শোকেস",
  },
  {
    src: "/assets/gallery/minimal-shoe-box-jpeg.webp",
    alt: "হেভেন ফার্নিচার মার্ট স্টোরেজ কেবিনেট",
    label: "স্টোরেজ কেবিনেট",
  },
  {
    src: "/assets/gallery/emroiydery-sofa-set-jpeg.webp",
    alt: "হেভেন ফার্নিচার মার্ট এমব্রয়ডারি সোফা সেট",
    label: "এমব্রয়ডারি সোফা",
  },
];

export default function SocialGallery() {
  const social = BRAND_CONFIG.social;

  return (
    <section className="bg-surface-ecru-paper py-14 sm:py-20 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-text-primary-dark">
              আরও কিছু ফার্নিচার দেখুন
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-text-secondary-dark">
              আমাদের ফেসবুক ও ইনস্টাগ্রামে আরও অনেক ছবি এবং প্রতিনিয়ত নতুন ফার্নিচারের আপডেট পাবেন।
            </p>
          </div>

          {/* Social Channels Row */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={social.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm border border-neutral-300 bg-white px-3.5 py-2 text-xs sm:text-sm font-semibold text-text-primary-dark hover:border-brand-slate-deep hover:text-blue-700 transition-colors"
            >
              <span>📘 ফেসবুক (১২,০০০+ ফলোয়ার)</span>
            </a>
            <a
              href={social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm border border-neutral-300 bg-white px-3.5 py-2 text-xs sm:text-sm font-semibold text-text-primary-dark hover:border-brand-slate-deep hover:text-pink-600 transition-colors"
            >
              <span>📸 ইনস্টাগ্রাম</span>
            </a>
          </div>
        </div>

        {/* 6 Real Photos Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {SOCIAL_PHOTOS.map((photo, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-sm border border-neutral-200 bg-neutral-100 shadow-2xs"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-2 text-center">
                <span className="text-[11px] font-medium text-white drop-shadow-xs">
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
