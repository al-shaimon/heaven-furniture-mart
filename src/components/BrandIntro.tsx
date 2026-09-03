export default function BrandIntro() {
  const comparisons = [
    {
      aspect: "Architectural Scale",
      retail: "Fixed factory sizes resulting in dead corners and clearance bottlenecks.",
      heaven: "100% tailored to your floor plan dimensions, wall spans, and ceiling heights.",
    },
    {
      aspect: "Timber & Durability",
      retail: "Commercial veneers and mixed hardwoods vulnerable to Chattogram's coastal humidity.",
      heaven: "Seasoned solid Chittagong Teak (Segun) and premium hardwoods, naturally pest-resistant.",
    },
    {
      aspect: "Crafting Artistry",
      retail: "Generic mass-produced profiles stamped out by automated factory lines.",
      heaven: "Computerized numeric precision joinery combined with master hand-chiseled wood relief.",
    },
    {
      aspect: "In-Home Installation",
      retail: "Curbside drop-off with hurried third-party assembly contractors.",
      heaven: "White-glove delivery, uncrating, room placement, and leveling by our specialized team.",
    },
  ];

  return (
    <section
      id="why-bespoke"
      className="relative bg-surface-ecru-light py-16 sm:py-24 lg:py-32"
    >
      {/* Editorial top accent hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-brass/25 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 reveal-on-scroll">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* Left Column: Atelier Manifesto */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-brass-dark sm:text-sm sm:tracking-[0.2em]">
              The Atelier Difference
            </p>

            <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight tracking-tight text-text-primary-dark sm:mt-4 sm:text-3xl md:text-4xl">
              Your space isn&apos;t standard.{" "}
              <span className="text-text-secondary-dark italic">
                Why should your furniture be?
              </span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-text-secondary-dark sm:mt-5 sm:text-base sm:leading-relaxed">
              Standard retail furniture is manufactured for generic warehouses, not your home&apos;s living architecture. It forces you to accept awkward clearance gaps, commercial veneers that swell in Chattogram&apos;s coastal air, and cookie-cutter proportions.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-text-secondary-dark sm:text-base sm:leading-relaxed">
              At Heaven Furniture Mart, we design backwards from your floor plan. Every sofa depth, dining table width, and bed frame is sculpted around the exact geometry of your residence.
            </p>

            {/* Editorial Architectural Quote */}
            <div className="mt-6 border-l-2 border-accent-brass-dark/70 pl-4 sm:mt-8">
              <p className="font-serif text-base italic text-text-primary-dark sm:text-lg">
                &ldquo;Furniture sculpted into your architecture — never forced into it.&rdquo;
              </p>
            </div>

            {/* Local authority endorsement */}
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-accent-brass-dark sm:text-sm">
              ✦ Furnishing fine residences across Khulshi, Nasirabad, Panchlaish, Halishahar &amp; Agrabad
            </p>
          </div>

          {/* Right Column: Architectural Specification Ledger */}
          <div className="lg:col-span-7">
            <div className="rounded-sm border border-neutral-200/90 bg-surface-ecru-paper p-6 shadow-xs sm:p-8">
              <div className="flex items-center justify-between border-b border-neutral-200/70 pb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-text-primary-dark">
                  Architectural Specification
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-accent-brass-dark">
                  Atelier vs. Mass Retail
                </span>
              </div>

              <div className="divide-y divide-neutral-200/70">
                {comparisons.map((item, idx) => (
                  <div key={idx} className="py-5 sm:py-6">
                    <h3 className="font-serif text-base font-semibold text-text-primary-dark sm:text-lg">
                      {item.aspect}
                    </h3>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2 sm:gap-6">
                      {/* Retail Shortcoming */}
                      <div className="rounded-xs bg-neutral-200/30 p-3 text-xs leading-relaxed text-text-secondary-dark">
                        <span className="block font-semibold uppercase tracking-wider text-neutral-600 text-[10px]">
                          Mass Showroom Retail
                        </span>
                        <p className="mt-1">{item.retail}</p>
                      </div>

                      {/* Heaven Atelier Standard */}
                      <div className="rounded-xs border border-accent-brass-dark/30 bg-surface-ecru-light p-3 text-xs leading-relaxed text-text-primary-dark">
                        <span className="block font-semibold uppercase tracking-wider text-accent-brass-dark text-[10px]">
                          Heaven Atelier Standard
                        </span>
                        <p className="mt-1 font-medium">{item.heaven}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
