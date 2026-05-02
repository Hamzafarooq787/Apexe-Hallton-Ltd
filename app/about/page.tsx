// app/about/page.tsx
'use client';

export default function AboutPage() {
  return (
    <>
      <style>{`
        /* ===== Custom classes from the original HTML ===== */
        .max-w-1280 { max-width: 1280px; }
        .bg-surface-tint { background-color: #f1c100; }
        .bg-surface-container-low { background-color: #1a1c1c; }
        .bg-surface-container { background-color: #1e2020; }
        .bg-surface-container-highest { background-color: #333535; }
        .border-surface-tint { border-color: #f1c100; }
        .border-outline-variant { border-color: #4e4632; }
        .text-surface-tint { color: #f1c100; }
        .text-on-surface { color: #e2e2e2; }
        .text-on-surface-variant { color: #d2c5ab; }
        .text-background { color: #121414; }
        .hover\\:bg-surface-container-high:hover { background-color: #282a2b; }
        .hover\\:text-surface-tint:hover { color: #f1c100; }
        .group-hover\\:text-surface-tint:hover .group-hover\\:text-surface-tint { color: #f1c100; }

        /* Fonts */
        .font-label-bold {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 14px;
          line-height: 1.2;
        }
        .font-headline-lg {
          font-family: 'Newsreader', serif;
          font-weight: 700;
          font-size: 40px;
          line-height: 1.2;
        }
        .font-headline-md {
          font-family: 'Newsreader', serif;
          font-weight: 700;
          font-size: 32px;
          line-height: 1.2;
        }
        .font-body-lg {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 18px;
          line-height: 1.6;
        }
        .font-display-lg {
          font-family: 'Newsreader', serif;
          font-weight: 800;
          font-size: 64px;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        .font-body-md {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.6;
        }
        .font-serif { font-family: 'Newsreader', serif; }

        /* Hazard stripe */
        .hazard-stripe {
          background: repeating-linear-gradient(45deg, #f1c100, #f1c100 10px, #121414 10px, #121414 20px);
        }

        /* Material icons support */
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
          display: inline-block;
          line-height: 1;
        }

        /* Transitions & effects */
        .transition-none { transition: none; }
        .active\\:translate-y-1:active { transform: translateY(1px); }
        .group-hover\\:grayscale-0:hover .group-hover\\:grayscale-0 { filter: grayscale(0); }
        .brightness-75 { filter: brightness(0.75); }
        .group-hover\\:brightness-100:hover .group-hover\\:brightness-100 { filter: brightness(1); }
        .grayscale { filter: grayscale(1); }
        .contrast-125 { filter: contrast(1.25); }
        .bg-gradient-to-t { background-image: linear-gradient(to top, black, transparent); }
      `}</style>

      <main className="max-w-1280 mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-surface-tint"></div>
              <span className="font-label-bold uppercase tracking-widest text-surface-tint">
                ESTABLISHED IN STOKE-ON-TRENT
              </span>
            </div>
            <h1 className="font-display-lg text-on-surface uppercase mb-8">
              OUR LEGACY &amp; VISION
            </h1>
            <div className="grid md:grid-cols-2 gap-8 border-l-4 border-surface-tint pl-8 py-2">
              <p className="font-body-lg text-on-surface-variant">
                Founded amidst the industrial heartland of Stoke-on-Trent, APEXE HALLTON
                LTD began with a single mission: to redefine the structural integrity
                of commercial developments. Our roots are firmly planted in the grit
                and determination of British manufacturing, where precision isn't just
                a requirement—it's our heritage.
              </p>
              <p className="font-body-lg text-on-surface-variant">
                Today, we stand as a beacon of reliability and technical excellence.
                Our commitment to safety is uncompromising, ensuring that every bolt,
                beam, and blueprint exceeds industry standards. We don't just build
                structures; we forge the foundations of future commerce with an
                ironclad promise of quality.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="border-4 border-surface-tint p-2 bg-surface-container-low">
              <img
                className="w-full h-[500px] object-cover grayscale contrast-125 brightness-75"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0WIwbLoiT74EUXh2iSXkSSl2y7egXGFGCmZ9YGYhphhpLc7mRYVZVPmE_Ur8Aa8vVvS2_bfrBwPpOMXuK4gZJOfLToqw6SIlr-B5a8Q1j-3F2C5rOtcKVbBs2OwNMua2z16yu-VmuoiNvS_uA9n6k4PnxMCUiv1VrbpQRKGCvkZneQC_TiUevNaiNpi6RgBmRIw87sPeK0CLQOKfpI_TgD8ugBlg_nmXN4b_gNT9Ukrg7yY706nEPbnvDGaYh8iQhUnBB2uUIqQ"
                alt="Modern industrial headquarters"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 hazard-stripe border-4 border-black hidden md:block"></div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline-lg uppercase text-on-surface mb-2">
                Core Values
              </h2>
              <p className="font-body-md text-surface-tint uppercase font-bold tracking-widest">
                Built to Last. Engineered to Win.
              </p>
            </div>
            <div className="h-px flex-grow mx-12 mb-4 bg-outline-variant hidden lg:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-outline-variant">
            {/* Reliability */}
            <div className="p-10 border-b-4 md:border-b-0 md:border-r-4 border-outline-variant hover:bg-surface-container-high transition-none group">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-surface-container-highest border-2 border-surface-tint">
                <span className="material-symbols-outlined text-surface-tint text-4xl">
                  construction
                </span>
              </div>
              <h3 className="font-headline-md uppercase text-on-surface mb-4 group-hover:text-surface-tint">
                Reliability
              </h3>
              <p className="font-body-md text-on-surface-variant">
                Our reputation is built on consistency. We deliver on time, within spec,
                and without excuses. When we commit to a project, our word is as solid
                as the concrete we pour.
              </p>
            </div>

            {/* Integrity */}
            <div className="p-10 border-b-4 md:border-b-0 md:border-r-4 border-outline-variant hover:bg-surface-container-high transition-none group">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-surface-container-highest border-2 border-surface-tint">
                <span className="material-symbols-outlined text-surface-tint text-4xl">
                  shield
                </span>
              </div>
              <h3 className="font-headline-md uppercase text-on-surface mb-4 group-hover:text-surface-tint">
                Integrity
              </h3>
              <p className="font-body-md text-on-surface-variant">
                Transparency at every stage. We operate with an open‑ledger policy and
                maintain the highest ethical standards in procurement, labor, and
                engineering practices.
              </p>
            </div>

            {/* Excellence */}
            <div className="p-10 hover:bg-surface-container-high transition-none group">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-surface-container-highest border-2 border-surface-tint">
                <span className="material-symbols-outlined text-surface-tint text-4xl">
                  precision_manufacturing
                </span>
              </div>
              <h3 className="font-headline-md uppercase text-on-surface mb-4 group-hover:text-surface-tint">
                Excellence
              </h3>
              <p className="font-body-md text-on-surface-variant">
                Good enough is never enough. We employ state‑of‑the‑art diagnostic tools
                and master craftsmen to ensure every project is a masterclass in
                structural engineering.
              </p>
            </div>
          </div>
        </section>

        {/* Team / Action Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-surface-container p-12 border-4 border-surface-tint flex flex-col justify-center">
            <h2 className="font-headline-lg uppercase text-on-surface mb-6">
              UNYIELDING STANDARDS
            </h2>
            <p className="font-body-lg text-on-surface mb-8">
              Our team consists of veteran site managers, accredited structural
              engineers, and logistics specialists who have spent decades in the field.
              We don't hire just for skill; we hire for the "Apexe Mindset"—a relentless
              pursuit of perfection and a deep respect for safety protocols.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-surface-tint">
                  check_circle
                </span>
                <span className="font-label-bold uppercase tracking-widest">
                  ISO 9001 CERTIFIED OPERATIONS
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-surface-tint">
                  check_circle
                </span>
                <span className="font-label-bold uppercase tracking-widest">
                  ADVANCED SEISMIC ANALYSIS
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-surface-tint">
                  check_circle
                </span>
                <span className="font-label-bold uppercase tracking-widest">
                  24/7 SITE SURVEILLANCE &amp; SAFETY
                </span>
              </div>
            </div>
            <button className="w-fit bg-surface-tint text-background font-serif uppercase tracking-tighter font-black px-10 py-4 border-2 border-surface-tint hover:bg-background hover:text-surface-tint transition-none active:translate-y-1">
              MEET THE ARCHITECTS
            </button>
          </div>

          <div className="relative overflow-hidden group border-4 border-outline-variant">
            <img
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-75 group-hover:brightness-100"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdsgtE5BlnVRPbHRpmq-n8xW1IK-iazyfNJJJv28lv9X31Q56es31kwUersYrJl6q-_4TMvi0pNHWdIJNojvd2i3e7Rp0NDFARe9ETSSOhnoTtTzmMuRlTQ0zxm3mEfMdhL7fkszk5oY7HF8deY2ZsZehuCE_b-wg1Y5shbKJw5q3VHlnQT0tV3Rzr7i_2zDxrbLMW-Z6NW2Y4KzhzC9JK7KnvMNmU32vzVUizKoHPjF8UT1EnSKmEmS_PD13t9nZjdSiXUh2alA"
              alt="Team portrait"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <div className="bg-surface-tint text-black font-black uppercase text-xs px-3 py-1 mb-2 inline-block">
                ON-SITE OPS
              </div>
              <h4 className="text-white font-headline-md uppercase">PRECISION IN MOTION</h4>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}