import Image from "next/image";
import { BRAND_CONFIG } from "@/content/brand";

export default function Footer() {
  const loc = BRAND_CONFIG.location;
  const hours = BRAND_CONFIG.operatingHours;
  const contact = BRAND_CONFIG.contact;
  const social = BRAND_CONFIG.social;

  return (
    <footer className="border-t border-brand-slate-border bg-brand-slate-deep text-text-primary-light">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Col 1: Brandmark & Philosophy (4 cols) */}
          <div className="lg:col-span-4">
            <a href="#top" className="inline-flex items-center gap-2.5 sm:gap-3">
              <Image
                src="/assets/brand/heaven-logo-white.png"
                alt="Heaven Furniture Mart"
                width={48}
                height={48}
                className="h-10 w-10 object-contain sm:h-12 sm:w-12"
              />
              <span className="font-serif text-xl font-semibold tracking-tight text-text-primary-light">
                Heaven
              </span>
            </a>
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-accent-brass sm:mt-4">
              {BRAND_CONFIG.tagline}
            </p>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-text-secondary-light sm:mt-4 sm:text-sm sm:leading-relaxed">
              Chattogram&apos;s premier bespoke furniture atelier. Designing and handcrafting custom furniture from authentic seasoned Chittagong Teak, Italian marble, and luxury fabrics since 2003.
            </p>

            {/* Social Channels */}
            <div className="mt-5 flex items-center gap-3 sm:mt-6 sm:gap-4">
              <a
                href={social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Heaven Furniture Mart on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xs border border-brand-slate-border text-text-secondary-light transition-colors hover:border-accent-brass hover:text-accent-brass"
              >
                <FacebookIcon />
              </a>
              <a
                href={social.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to Heaven Furniture Mart on YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-xs border border-brand-slate-border text-text-secondary-light transition-colors hover:border-accent-brass hover:text-accent-brass"
              >
                <YouTubeIcon />
              </a>
              <a
                href={social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Heaven Furniture Mart on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xs border border-brand-slate-border text-text-secondary-light transition-colors hover:border-accent-brass hover:text-accent-brass"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-brass">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-text-secondary-light">
              {BRAND_CONFIG.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-accent-brass"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#consultation"
                  className="text-accent-brass transition-colors hover:underline"
                >
                  Book Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Furniture Spaces (2 cols) */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-brass">
              Bespoke Spaces
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-text-secondary-light">
              <li>
                <a href="#spaces" className="transition-colors hover:text-accent-brass">
                  Living Room Suites
                </a>
              </li>
              <li>
                <a href="#spaces" className="transition-colors hover:text-accent-brass">
                  Marble Dining Tables
                </a>
              </li>
              <li>
                <a href="#spaces" className="transition-colors hover:text-accent-brass">
                  Master Bedroom Beds
                </a>
              </li>
              <li>
                <a href="#spaces" className="transition-colors hover:text-accent-brass">
                  Display Vitrines
                </a>
              </li>
              <li>
                <a href="#spaces" className="transition-colors hover:text-accent-brass">
                  Executive Desks
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Flagship Showroom Contact (4 cols) */}
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-brass">
              Flagship Showroom
            </p>
            <div className="mt-4 space-y-3 text-sm text-text-secondary-light">
              <p className="leading-relaxed">
                <strong className="text-text-primary-light">Address:</strong> {loc.fullAddress}
              </p>
              <p className="text-xs text-accent-brass">
                Landmark: {loc.landmark}
              </p>
              <p>
                <strong className="text-text-primary-light">Hours:</strong> {hours.days}, {hours.hours} ({hours.weekendNote})
              </p>
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-brass">
                  Direct Lines:
                </p>
                <p className="mt-1">
                  <a
                    href={`tel:${contact.primaryPhone.replace(/[\s-]/g, "")}`}
                    className="hover:text-accent-brass"
                  >
                    {contact.primaryPhoneFormatted}
                  </a>{" "}
                  ·{" "}
                  <a
                    href={`tel:${contact.hotlinePhone.replace(/[\s-]/g, "")}`}
                    className="hover:text-accent-brass"
                  >
                    {contact.hotlineFormatted}
                  </a>
                </p>
                <p className="mt-1 text-xs">
                  Email:{" "}
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-accent-brass"
                  >
                    {contact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-brand-slate-border pt-8 text-xs text-text-secondary-light sm:flex-row">
          <p>
            © {new Date().getFullYear()} Heaven Furniture Mart. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-accent-brass">
            <span>Crafted with pride in Chattogram, Bangladesh</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
