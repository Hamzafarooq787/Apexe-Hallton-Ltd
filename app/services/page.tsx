'use client';

export default function ServicesPage() {
  return (
    <>
      <style>{`
        /* Custom classes from original HTML */
        .max-w-container-max { max-width: 1280px; }
        .industrial-grid {
          background-image: linear-gradient(#1a1c1c 2px, transparent 2px),
            linear-gradient(90deg, #1a1c1c 2px, transparent 2px);
          background-size: 40px 40px;
        }
        .decoration-8 { text-decoration-thickness: 8px; }
        .bg-surface-container-lowest { background-color: #0c0f0f; }
        .bg-surface-container { background-color: #1e2020; }
        .bg-surface-container-highest { background-color: #333535; }
        .border-surface-container-high { border-color: #282a2b; }
        .text-primary-fixed-dim { color: #f1c100; }
        .text-on-surface { color: #e2e2e2; }
        .text-on-surface-variant { color: #d2c5ab; }
        .font-label-bold { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 14px; line-height: 1.2; }
        .font-headline-lg { font-family: 'Newsreader', serif; font-weight: 700; font-size: 40px; line-height: 1.2; }
        .font-headline-md { font-family: 'Newsreader', serif; font-weight: 700; font-size: 32px; line-height: 1.2; }
        .font-body-lg { font-family: 'Inter', sans-serif; font-weight: 400; font-size: 18px; line-height: 1.6; }
        .font-display-lg { font-family: 'Newsreader', serif; font-weight: 800; font-size: 64px; line-height: 1.1; letter-spacing: -0.02em; }
        .font-body-md { font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 1.6; }
        .bg-primary-fixed-dim { background-color: #f1c100; }
        .text-on-primary-fixed { color: #241a00; }
        .hover\\:bg-primary-fixed-dim:hover { background-color: #f1c100; }
        .hover\\:text-black:hover { color: #000; }
        .transition-none { transition: none; }
        .active\\:translate-y-1:active { transform: translateY(1px); }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
          display: inline-block;
          line-height: 1;
        }
      `}</style>

      <main className="pt-24 min-h-screen industrial-grid">
        {/* Hero Section */}
        <header className="max-w-container-max mx-auto px-6 py-20 border-x-4 border-surface-container-high bg-surface-container-lowest">
          <div className="max-w-4xl">
            <p className="text-primary-fixed-dim font-label-bold mb-4 tracking-widest uppercase">
              PRECISION ENGINEERING • STRUCTURAL INTEGRITY
            </p>
            <h1 className="font-display-lg uppercase mb-8 text-on-surface">
              CORE CONSTRUCTION{" "}
              <span className="text-primary-fixed-dim underline decoration-8">
                SERVICES
              </span>
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl">
              Forging the future through heavy-duty industrial expertise and
              uncompromising quality standards. Our services span the entire lifecycle
              of major structural developments.
            </p>
          </div>
        </header>

        {/* Services Grid – same as before, unchanged */}
        <section className="max-w-container-max mx-auto border-x-4 border-surface-container-high bg-background">
          {/* 1. Residential Construction */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b-4 border-surface-container-high">
            <div className="p-12 flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-surface-container-high bg-surface-container">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary-fixed-dim text-on-primary-fixed text-4xl font-black p-4 leading-none">
                  01
                </span>
                <h2 className="font-headline-lg uppercase text-on-surface">
                  Residential Construction
                </h2>
              </div>
              <p className="text-body-lg text-on-surface-variant mb-10 leading-relaxed">
                We specialize in high-spec custom homes and large-scale residential
                extensions. Our approach combines architectural ambition with
                structural permanence, ensuring every domestic project meets
                industrial-grade safety and finish standards. From foundational slabs
                to complex roof systems, we build for longevity.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3 text-on-surface font-label-bold">
                  <span className="material-symbols-outlined text-primary-fixed-dim">
                    architecture
                  </span>
                  CUSTOM ARCHITECTURAL HOMES
                </li>
                <li className="flex items-center gap-3 text-on-surface font-label-bold">
                  <span className="material-symbols-outlined text-primary-fixed-dim">
                    straighten
                  </span>
                  STRUCTURAL EXTENSIONS
                </li>
                <li className="flex items-center gap-3 text-on-surface font-label-bold">
                  <span className="material-symbols-outlined text-primary-fixed-dim">
                    foundation
                  </span>
                  REINFORCED FOUNDATIONS
                </li>
              </ul>
              <button className="w-fit bg-transparent border-4 border-primary-fixed-dim text-primary-fixed-dim px-8 py-4 font-black uppercase hover:bg-primary-fixed-dim hover:text-black transition-none active:translate-y-1">
                VIEW RESIDENTIAL PORTFOLIO
              </button>
            </div>
            <div className="h-[500px] md:h-auto bg-surface-container-highest overflow-hidden">
              <img
                alt="Modern Residential Construction"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnIPcEOlxLsQoMRjin2edhQ2CX-RKq1oyOiVRkbCvhc5O6B77jFu31ZNfhi23Dy2U2WbsEGZu0TK21CWh-2eno_DDbxWEFdO9DMEAuyel8uNPa4vXtCwXY6mq_yFDNDe56lVJKV9__Aw7USV0A4yuV7ArRX7vBaPbdq7HtNRvuL8ZE2afXu_QsU4I6kjvXkgZGO8kztqGEDwnbeNnm3GFfQDlTQcFXKDpOdEcp_yLKYFlNSFA6373DpC2N96zyJ2NQlGDpKK1YFA"
              />
            </div>
          </div>

          {/* 2. Commercial Developments */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b-4 border-surface-container-high">
            <div className="h-[500px] md:h-auto bg-surface-container-highest overflow-hidden order-2 md:order-1">
              <img
                alt="Commercial Development"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0PAM9aZ7BMkRQ44mKE5WZJrYczs3RJl5eE7SErvAaUCG6XwtlqMp97xPNnoh4UeNf2ifTEj7RwOi983nqldUh9EGvWv3EBum3vnZtxjRYO1mNVGSi2GT6vRExd3dTLEvSDAhair7aPHIJ1xftTMOYCUgU1ViO5uAxK_16XKi9m2mNT7tyytYUkPYkxVf-wVqHWfdXP5IlY4DFfrUkAxmzsTWIVbzmzjAcynD6GfkZMmub6vHUvT5VEQ5ue8vOYnw33KqmEU18Xw"
              />
            </div>
            <div className="p-12 flex flex-col justify-center bg-surface-container order-1 md:order-2 border-b-4 md:border-b-0 border-surface-container-high">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary-fixed-dim text-on-primary-fixed text-4xl font-black p-4 leading-none">
                  02
                </span>
                <h2 className="font-headline-lg uppercase text-on-surface">
                  Commercial Developments
                </h2>
              </div>
              <p className="text-body-lg text-on-surface-variant mb-10 leading-relaxed">
                Precision-engineered workspaces, retail hubs, and commercial complexes.
                APEXE HALLTON LTD manages the end-to-end development of commercial
                assets, prioritizing operational efficiency and structural durability.
                We work with developers to deliver high-yield infrastructure that
                stands the test of time.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3 text-on-surface font-label-bold">
                  <span className="material-symbols-outlined text-primary-fixed-dim">
                    corporate_fare
                  </span>
                  MULTI-STOREY OFFICE BLOCKS
                </li>
                <li className="flex items-center gap-3 text-on-surface font-label-bold">
                  <span className="material-symbols-outlined text-primary-fixed-dim">
                    warehouse
                  </span>
                  LOGISTICS &amp; WAREHOUSING
                </li>
                <li className="flex items-center gap-3 text-on-surface font-label-bold">
                  <span className="material-symbols-outlined text-primary-fixed-dim">
                    store
                  </span>
                  RETAIL INFRASTRUCTURE
                </li>
              </ul>
              <button className="w-fit bg-primary-fixed-dim text-black px-8 py-4 font-black uppercase hover:bg-white transition-none active:translate-y-1">
                COMMERCIAL SPECS
              </button>
            </div>
          </div>

          {/* 3. Renovation & Restoration */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b-4 border-surface-container-high">
            <div className="p-12 flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-surface-container-high bg-surface-container">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary-fixed-dim text-on-primary-fixed text-4xl font-black p-4 leading-none">
                  03
                </span>
                <h2 className="font-headline-lg uppercase text-on-surface">
                  Renovation &amp; Restoration
                </h2>
              </div>
              <p className="text-body-lg text-on-surface-variant mb-10 leading-relaxed">
                Restoring heritage structures and modernizing aging industrial assets.
                Our renovation team specializes in seismic retrofitting, structural
                reinforcement, and modern interior integration for existing builds. We
                respect the history of the site while infusing it with contemporary
                engineering standards.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3 text-on-surface font-label-bold">
                  <span className="material-symbols-outlined text-primary-fixed-dim">
                    history_edu
                  </span>
                  HERITAGE FACADE RESTORATION
                </li>
                <li className="flex items-center gap-3 text-on-surface font-label-bold">
                  <span className="material-symbols-outlined text-primary-fixed-dim">
                    build
                  </span>
                  STRUCTURAL RETROFITTING
                </li>
                <li className="flex items-center gap-3 text-on-surface font-label-bold">
                  <span className="material-symbols-outlined text-primary-fixed-dim">
                    visibility
                  </span>
                  MODERN INTERIOR REFITS
                </li>
              </ul>
              <button className="w-fit bg-transparent border-4 border-primary-fixed-dim text-primary-fixed-dim px-8 py-4 font-black uppercase hover:bg-primary-fixed-dim hover:text-black transition-none active:translate-y-1">
                CONSULT ON RESTORATION
              </button>
            </div>
            <div className="h-[500px] md:h-auto bg-surface-container-highest overflow-hidden">
              <img
                alt="Industrial Renovation"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW5f_N04BAOSyCwPPSHVY_VSC8Lr6vsLWHjPS3CCe8xSIXeHLjNnHkT28xUtIEZwthiNQwxMjJ98TKEreemuqpfpzw3QtCFKl1-2PEh5cmpTo8zblNgJCPwuyXAK4-8X7t2oKlNrwjtSFz2st6eLDITcUsNJIIweVD7bBLywwZvYFb2QpjCkjKsFPMI0vB8X-bYKMCrQbXEbA0S9Q9S1W-liRXyQMIrv95ueGZRFvyEQrlgL3gleUjvOpN1U8ivCDAlTmNCy7HyA"
              />
            </div>
          </div>

          {/* 4. Industrial Engineering */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-[500px] md:h-auto bg-surface-container-highest overflow-hidden order-2 md:order-1">
              <img
                alt="Industrial Engineering"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCd58_j0PhP34_-77hefYpbuu8hENINEoEqx3q44D8TUjHzieD2SoP44cVcb1CSMiW80cSyF-FTMyUVZNvPzWF7iZS44t6-62UYG1HATJh_3ieiXr1NkAS1ozfmPZIkZC6ddkbUE-FYwZTuwZXvy3Y3qLCcrGiErGaQkX_KyJtu0aA57PI7BPH_m-8hXc1UW183c0soeqB1YjO8Sb0v5HorEcxzil39lmsYhy234fT5fK9GGEEUgKAKe3DPrGAUYVfmtgVkuFQZQ"
              />
            </div>
            <div className="p-12 flex flex-col justify-center bg-surface-container order-1 md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary-fixed-dim text-on-primary-fixed text-4xl font-black p-4 leading-none">
                  04
                </span>
                <h2 className="font-headline-lg uppercase text-on-surface">
                  Industrial Engineering
                </h2>
              </div>
              <p className="text-body-lg text-on-surface-variant mb-10 leading-relaxed">
                Heavy-duty infrastructure for the industrial sector. From manufacturing
                plants to technical power facilities, our engineering division delivers
                the specialized environments required for high-intensity industrial
                operations. We focus on load-bearing capacity, vibration control, and
                specialized utility integration.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3 text-on-surface font-label-bold">
                  <span className="material-symbols-outlined text-primary-fixed-dim">
                    factory
                  </span>
                  HEAVY MANUFACTURING PLANTS
                </li>
                <li className="flex items-center gap-3 text-on-surface font-label-bold">
                  <span className="material-symbols-outlined text-primary-fixed-dim">
                    settings_input_component
                  </span>
                  UTILITY HUB CONSTRUCTION
                </li>
                <li className="flex items-center gap-3 text-on-surface font-label-bold">
                  <span className="material-symbols-outlined text-primary-fixed-dim">
                    shield
                  </span>
                  HAZARDOUS MATERIAL FACILITIES
                </li>
              </ul>
              <button className="w-fit bg-primary-fixed-dim text-black px-8 py-4 font-black uppercase hover:bg-white transition-none active:translate-y-1">
                ENGINEERING CAPABILITIES
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-container-max mx-auto px-6 py-24 border-x-4 border-surface-container-high bg-zinc-950">
          <div className="border-4 border-yellow-400 p-12 text-center bg-surface-container-lowest">
            <h2 className="font-display-lg text-headline-lg uppercase mb-6 text-yellow-400">
              BUILD WITH AUTHORITY
            </h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
              Our team is ready to discuss the structural requirements of your next
              project. We provide detailed technical specifications and uncompromising
              project management.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <button className="bg-yellow-400 text-black px-10 py-5 font-black uppercase tracking-tighter hover:bg-white transition-none">
                START PROJECT CONSULTATION
              </button>
              <button className="border-4 border-white text-white px-10 py-5 font-black uppercase tracking-tighter hover:bg-white hover:text-black transition-none">
                DOWNLOAD BROCHURE
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}