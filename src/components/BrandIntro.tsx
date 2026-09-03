import { BRAND_CONFIG } from "@/content/brand";

export default function BrandIntro() {
  const pillars = BRAND_CONFIG.differentiators.slice(0, 3);

  return (
    <section
      id="why-bespoke"
      className="bg-surface-ecru-light py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 reveal-on-scroll">
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-brass sm:text-sm sm:tracking-[0.2em]">
          The Atelier Difference
        </p>

        {/* Headline */}
        <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight tracking-tight text-text-primary-dark sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
          Your space isn&apos;t standard.{" "}
          <span className="text-text-secondary-dark">
            Why should your furniture be?
          </span>
        </h2>

        {/* Lede */}
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary-dark sm:text-lg sm:leading-relaxed">
          Mass-produced furniture forces you to compromise on scale, wood quality,
          and fabric. At Heaven Furniture Mart, we design backwards from your
          floor plan. We craft each sofa, dining table, and bed around the exact
          proportions of your home — ensuring seamless flow, enduring comfort, and
          heirloom quality.
        </p>

        {/* Differentiator Pillars */}
        <div className="mt-14 grid gap-8 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-12">
          {pillars.map((pillar, i) => (
            <article
              key={i}
              className="group border-t border-surface-ecru-muted pt-6"
            >
              {/* Step Index */}
              <span className="text-xs font-semibold tracking-widest text-accent-brass">
                0{i + 1}
              </span>

              {/* Title */}
              <h3 className="mt-3 font-serif text-xl font-semibold tracking-tight text-text-primary-dark sm:text-2xl">
                {pillar.title}
              </h3>

              {/* Subtitle */}
              <p className="mt-1 text-sm font-medium text-accent-brass">
                {pillar.subtitle}
              </p>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-text-secondary-dark sm:text-base sm:leading-relaxed">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
