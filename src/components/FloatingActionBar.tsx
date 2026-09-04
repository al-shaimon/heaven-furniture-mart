import { BRAND_CONFIG } from "@/content/brand";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

export default function FloatingActionBar() {
  return (
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
  );
}
