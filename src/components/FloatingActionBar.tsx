import { BRAND_CONFIG } from "@/content/brand";
import { WhatsAppIcon } from "@/components/icons";

export default function FloatingActionBar() {
  return (
    <aside
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-brand-slate-border/80 bg-brand-slate-deep/95 px-4 pt-2.5 pb-2.5 backdrop-blur-md safe-bottom md:hidden"
      aria-label="Quick mobile contact actions"
    >
      <div className="mx-auto flex max-w-md items-center gap-3">
        {/* WhatsApp Button */}
        <a
          href={BRAND_CONFIG.cta.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-sm bg-accent-whatsapp px-4 text-xs font-bold text-brand-slate-deep shadow-sm transition-colors hover:bg-accent-whatsapp-hover active:scale-[0.98]"
        >
          <WhatsAppIcon size={18} />
          <span>WhatsApp Chat</span>
        </a>

        {/* Book Consultation Button */}
        <a
          href="#consultation"
          className="flex h-12 flex-1 items-center justify-center rounded-sm border border-accent-brass bg-accent-brass px-4 text-xs font-semibold tracking-wide text-brand-slate-deep shadow-sm transition-colors hover:bg-accent-brass-hover active:scale-[0.98]"
        >
          <span>Book Consultation</span>
        </a>
      </div>
    </aside>
  );
}
