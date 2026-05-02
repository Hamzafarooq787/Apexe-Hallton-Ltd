// app/page.tsx
'use client';

import HeroSection from '@/components/HeroSection';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Apexe Hallton's core expertise?",
      a: "We specialise in heavy structural engineering, commercial developments, and industrial infrastructure. From reinforced foundations to multi‑storey steel frames, our team delivers precision‑engineered solutions for demanding projects.",
    },
    {
      q: "Are you ISO certified?",
      a: "Yes, we hold ISO 9001:2021 (Quality Management) and ISO 45001 (Occupational Health & Safety). All our sites follow CHAS accredited protocols.",
    },
    {
      q: "Do you work on residential projects?",
      a: "Absolutely. Our Residential Construction division builds high‑spec custom homes, extensions, and luxury developments. Every domestic project meets the same industrial‑grade safety and quality standards.",
    },
    {
      q: "How can I request a project consultation?",
      a: "Use the 'REQUEST SPECS' button on our header or visit our Contact page. Our engineering team responds within 24 hours with a detailed preliminary assessment.",
    },
    {
      q: "Where is your headquarters?",
      a: "22 Adams Avenue, Stoke‑on‑Trent, ST6 5PE – right in the heart of the UK's industrial corridor.",
    },
  ];

  return (
    <>
      <style jsx>{`
        /* ---------- Custom classes from original brand ---------- */
        .max-w-1280 { max-width: 1280px; }
        
        /* Backgrounds & containers */
        .bg-surface-tint { background-color: #f1c100; }
        .bg-surface-container-low { background-color: #1a1c1c; }
        .bg-surface-container { background-color: #1e2020; }
        .bg-surface-container-high { background-color: #282a2b; }
        .bg-surface-container-highest { background-color: #333535; }
        .bg-surface-container-lowest { background-color: #0c0f0f; }
        .bg-background { background-color: #121414; }
        
        /* Borders */
        .border-surface-tint { border-color: #f1c100; }
        .border-outline-variant { border-color: #4e4632; }
        
        /* Text colours */
        .text-surface-tint { color: #f1c100; }
        .text-on-surface { color: #e2e2e2; }
        .text-on-surface-variant { color: #d2c5ab; }
        .text-background { color: #121414; }
        
        /* Font styles (matching original) */
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
        
        /* Hazard stripe pattern */
        .hazard-stripe {
          background: repeating-linear-gradient(45deg, #f1c100, #f1c100 10px, #121414 10px, #121414 20px);
        }
        .hazard-pattern {
          background: repeating-linear-gradient(45deg, #f1c100, #f1c100 10px, #000000 10px, #000000 20px);
        }
        
        /* Material icons */
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
          display: inline-block;
          line-height: 1;
        }
        
        /* Hover & transitions */
        .transition-none { transition: none; }
        .active\\:translate-y-1:active { transform: translateY(1px); }
        .hover\\:bg-surface-container-high:hover { background-color: #282a2b; }
        .hover\\:text-surface-tint:hover { color: #f1c100; }
        .group-hover\\:text-surface-tint:hover .group-hover\\:text-surface-tint { color: #f1c100; }
        .grayscale { filter: grayscale(1); }
        .group-hover\\:grayscale-0:hover .group-hover\\:grayscale-0 { filter: grayscale(0); }
        .brightness-75 { filter: brightness(0.75); }
        .group-hover\\:brightness-100:hover .group-hover\\:brightness-100 { filter: brightness(1); }
        
        /* FAQ accordion custom */
        .faq-item {
          border-bottom: 1px solid #4e4632;
          transition: all 0.2s ease;
        }
        .faq-question {
          cursor: pointer;
          user-select: none;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }
        .faq-answer.open {
          max-height: 300px;
          transition: max-height 0.3s ease-in;
        }
        .rotate-icon {
          transition: transform 0.2s ease;
        }
        .rotate-icon.open {
          transform: rotate(180deg);
        }

        /* Responsive text adjustments */
        @media (max-width: 768px) {
          .font-display-lg {
            font-size: 40px;
          }
          .font-headline-lg {
            font-size: 32px;
          }
          .font-headline-md {
            font-size: 24px;
          }
          .font-body-lg {
            font-size: 16px;
          }
          .text-5xl {
            font-size: 2rem;
          }
        }
      `}</style>

      {/* HERO SECTION (fullscreen with background image) */}
     <HeroSection />

      {/* STATS SECTION */}
      <section className="bg-zinc-900 border-b-4 border-zinc-800 py-12 md:py-16">
        <div className="max-w-1280 mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="space-y-2 border-l-4 border-yellow-400 pl-4 md:pl-6">
            <div className="text-3xl md:text-5xl text-yellow-400 font-extrabold">25+</div>
            <div className="text-xs md:text-sm text-zinc-400 uppercase tracking-widest font-bold">Years Experience</div>
          </div>
          <div className="space-y-2 border-l-4 border-yellow-400 pl-4 md:pl-6">
            <div className="text-3xl md:text-5xl text-yellow-400 font-extrabold">480</div>
            <div className="text-xs md:text-sm text-zinc-400 uppercase tracking-widest font-bold">Projects Completed</div>
          </div>
          <div className="space-y-2 border-l-4 border-yellow-400 pl-4 md:pl-6">
            <div className="text-3xl md:text-5xl text-yellow-400 font-extrabold">12</div>
            <div className="text-xs md:text-sm text-zinc-400 uppercase tracking-widest font-bold">Award Nominations</div>
          </div>
          <div className="space-y-2 border-l-4 border-yellow-400 pl-4 md:pl-6">
            <div className="text-3xl md:text-5xl text-yellow-400 font-extrabold">100%</div>
            <div className="text-xs md:text-sm text-zinc-400 uppercase tracking-widest font-bold">Safety Compliance</div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-1280 mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7 space-y-6 md:space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-yellow-400 font-black text-lg">01</span>
              <div className="h-px w-8 md:w-12 bg-yellow-400"></div>
              <h2 className="text-2xl md:text-3xl uppercase font-bold">Structural Excellence</h2>
            </div>
            <p className="text-base md:text-lg text-zinc-400">
              APEXE HALLTON LTD stands at the intersection of traditional craftsmanship and modern industrial technology. We specialize in high-impact developments that define skylines and provide the essential infrastructure for tomorrow's industries.
            </p>
            <p className="text-sm md:text-base text-zinc-500">
              From heavy-duty excavation in challenging terrains to the precise execution of complex residential structures, our team ensures every rivet, beam, and foundation is engineered for permanence.
            </p>
          </div>
          <div className="md:col-span-5 relative">
            <div className="border-4 border-yellow-400 p-2">
              <img
                className="w-full h-[250px] md:h-[400px] object-cover grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfIE1k3FXoKIIcl-Tr_Im6VmHjjGjP9mMET3EOEjBmoKJuu6jHSx_8YeMOr7enXmfqnCvx8o4-WMnCG3Y7GaWU5EnyGE0uKzcsEEZvucvrwNL86pgWSRI1WYNDqE9FGTZWsgkg8CYz2v0-IAc6KnJaT6LZ0YKsT3ddHtu4twj22BiMvq1-eayumoLAf7_RK8IhSB2L1OmJ10Vmsf2d03X8UdBpEAaWwOdKEequJnYbjcgYDvh6XOb1uM8jxz2xBqOv0B8_SPQsJQ"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 hazard-pattern w-16 h-16 md:w-24 md:h-24 -z-10"></div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 md:py-24 bg-zinc-950 border-t-4 border-zinc-800">
        <div className="max-w-1280 mx-auto px-6 md:px-10">
          <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <h2 className="text-3xl md:text-4xl uppercase italic font-extrabold max-w-md">
              Our Core <span className="text-yellow-400 not-italic">Capacities</span>
            </h2>
            <div className="text-xs md:text-sm text-yellow-400 uppercase tracking-widest font-bold">
              Precision Engineering
            </div>
          </div>
          <div className="grid md:grid-cols-3 border border-zinc-800 md:border-4">
            <div className="border-b md:border-b-0 md:border-r border-zinc-800 p-6 md:p-10 hover:bg-yellow-400 transition-colors">
              <h3 className="text-xl md:text-2xl uppercase font-bold mb-3 md:mb-4">Excavation</h3>
              <p className="text-sm md:text-base text-zinc-400">Advanced earth-moving and site preparation using high-tonnage machinery.</p>
            </div>
            <div className="border-b md:border-b-0 md:border-r border-zinc-800 p-6 md:p-10 hover:bg-yellow-400 transition-colors">
              <h3 className="text-xl md:text-2xl uppercase font-bold mb-3 md:mb-4">Structural Engineering</h3>
              <p className="text-sm md:text-base text-zinc-400">Developing robust frameworks and reinforced foundations.</p>
            </div>
            <div className="p-6 md:p-10 hover:bg-yellow-400 transition-colors">
              <h3 className="text-xl md:text-2xl uppercase font-bold mb-3 md:mb-4">Site Management</h3>
              <p className="text-sm md:text-base text-zinc-400">Managing complex construction sites with strict safety protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION (full width) */}
      <section className="relative py-16 md:py-24 border-b-4 border-yellow-400">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover grayscale opacity-20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC77I_76F0LAYK9Ov03OlrrlThfvVk-9j91AIbp2nP8Le_vfStY4x-ufJNn54Jh3ZgBXnUEQ2DEiJYEHxGhriJA5ho2LaMtgdduT7yJG0UDDFJWFzedcbwo6skeFrxvO2CuCZolTEh03yN6oSYxPR4swl9i143tmo-C7ftVtA4liBmyKR-x3gIempsPX-xH2WovLfUBrTF0FtLWjeGlkI6VYC84-1NEiX73SGx3ztX210ogO6w6IYt2DV8c4TDVMMCTvgfeMujRQg"
          />
        </div>
        <div className="relative z-10 text-center space-y-6 md:space-y-8 max-w-1280 mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-5xl uppercase italic font-extrabold">
            Ready for <span className="text-yellow-400 not-italic">Execution</span>?
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto">
            Consult with our engineers to review your project specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <button className="bg-yellow-400 px-6 md:px-12 py-3 md:py-5 text-base md:text-xl font-bold uppercase hover:bg-black hover:text-yellow-400 transition-none active:translate-y-1">
              GET IN TOUCH
            </button>
            <button className="border-4 border-yellow-400 px-6 md:px-12 py-3 md:py-5 text-base md:text-xl font-bold uppercase text-yellow-400 hover:bg-yellow-400 hover:text-black transition-none active:translate-y-1">
              DOWNLOAD BROCHURE
            </button>
          </div>
        </div>
      </section>

      {/* ========== NEW SECTION 1: OUR WORKFLOW ========== */}
      <section className="py-16 md:py-24">
        <div className="max-w-1280 mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="font-headline-lg uppercase text-on-surface mb-2 text-3xl md:text-4xl">Our Workflow</h2>
              <p className="font-body-md text-surface-tint uppercase font-bold tracking-widest text-xs md:text-sm">FROM BLUEPRINT TO COMPLETION</p>
            </div>
            <div className="h-px flex-grow mx-0 md:mx-12 mb-0 md:mb-4 bg-outline-variant hidden lg:block"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-surface-container p-6 md:p-8 border-l-4 border-surface-tint hover:bg-surface-container-high transition-none group">
              <span className="material-symbols-outlined text-surface-tint text-4xl md:text-5xl mb-4">draw</span>
              <h3 className="font-headline-md uppercase text-on-surface mb-3 group-hover:text-surface-tint text-xl md:text-2xl">Technical Design</h3>
              <p className="font-body-md text-on-surface-variant text-sm md:text-base">In‑house structural engineers produce detailed CAD/BIM models, load calculations, and material schedules.</p>
            </div>
            <div className="bg-surface-container p-6 md:p-8 border-l-4 border-surface-tint hover:bg-surface-container-high transition-none group">
              <span className="material-symbols-outlined text-surface-tint text-4xl md:text-5xl mb-4">precision_manufacturing</span>
              <h3 className="font-headline-md uppercase text-on-surface mb-3 group-hover:text-surface-tint text-xl md:text-2xl">Precision Fabrication</h3>
              <p className="font-body-md text-on-surface-variant text-sm md:text-base">Off‑site manufacturing of steel frames, pre‑cast concrete, and modular components under ISO control.</p>
            </div>
            <div className="bg-surface-container p-6 md:p-8 border-l-4 border-surface-tint hover:bg-surface-container-high transition-none group">
              <span className="material-symbols-outlined text-surface-tint text-4xl md:text-5xl mb-4">construction</span>
              <h3 className="font-headline-md uppercase text-on-surface mb-3 group-hover:text-surface-tint text-xl md:text-2xl">Site Execution</h3>
              <p className="font-body-md text-on-surface-variant text-sm md:text-base">Certified site managers oversee every pour, weld, and lift with 24/7 safety surveillance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== NEW SECTION 2: INDUSTRY RECOGNITION ========== */}
      <section className="py-16 md:py-24 bg-surface-container-lowest border-y-4 border-surface-tint">
        <div className="max-w-1280 mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="inline-block hazard-stripe h-2 w-16 md:w-20 mb-4 md:mb-6"></div>
            <h2 className="font-display-lg uppercase text-on-surface mb-4 md:mb-6 text-3xl md:text-5xl">
              Recognised by<br />
              <span className="text-surface-tint">Industry Leaders</span>
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-6 md:mb-8 text-sm md:text-base">
              Apexe Halton has been awarded multiple safety and engineering accolades, including the <strong>British Construction Industry Award</strong> for Structural Excellence (2023) and <strong>RoSPA Gold Medal</strong> for occupational health.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <div className="flex items-center gap-2 md:gap-3">
                <span className="material-symbols-outlined text-surface-tint text-xl md:text-2xl">emoji_events</span>
                <span className="font-label-bold uppercase text-xs md:text-sm">BCIA WINNER '23</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <span className="material-symbols-outlined text-surface-tint text-xl md:text-2xl">verified</span>
                <span className="font-label-bold uppercase text-xs md:text-sm">ISO 9001/45001</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <span className="material-symbols-outlined text-surface-tint text-xl md:text-2xl">groups</span>
                <span className="font-label-bold uppercase text-xs md:text-sm">CHAS ACCREDITED</span>
              </div>
            </div>
          </div>
          <div className="relative mt-6 lg:mt-0">
            <div className="border-4 border-surface-tint p-2 bg-surface-container">
              <img
                className="w-full h-[200px] md:h-[300px] object-cover grayscale brightness-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdsgtE5BlnVRPbHRpmq-n8xW1IK-iazyfNJJJv28lv9X31Q56es31kwUersYrJl6q-_4TMvi0pNHWdIJNojvd2i3e7Rp0NDFARe9ETSSOhnoTtTzmMuRlTQ0zxm3mEfMdhL7fkszk5oY7HF8deY2ZsZehuCE_b-wg1Y5shbKJw5q3VHlnQT0tV3Rzr7i_2zDxrbLMW-Z6NW2Y4KzhzC9JK7KnvMNmU32vzVUizKoHPjF8UT1EnSKmEmS_PD13t9nZjdSiXUh2alA"
                alt="Team receiving award"
              />
            </div>
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-16 h-16 md:w-24 md:h-24 bg-surface-tint opacity-20"></div>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-16 md:py-24">
        <div className="max-w-1280 mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg uppercase text-on-surface mb-3 text-3xl md:text-4xl">Frequently Asked Questions</h2>
            <div className="h-1 w-16 md:w-20 bg-surface-tint mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item py-4 md:py-5">
                <div
                  className="faq-question flex justify-between items-center gap-4"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <h3 className="font-headline-md text-on-surface text-lg md:text-2xl uppercase">{faq.q}</h3>
                  <span className={`material-symbols-outlined text-surface-tint text-2xl md:text-3xl rotate-icon ${openFaq === idx ? 'open' : ''}`}>
                    expand_more
                  </span>
                </div>
                <div className={`faq-answer ${openFaq === idx ? 'open' : ''}`}>
                  <p className="font-body-md text-on-surface-variant pt-2 md:pt-3 pb-1 text-sm md:text-base">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="bg-surface-container-high border-t-4 border-surface-tint py-10 md:py-12 px-6 text-center">
        <div className="max-w-1280 mx-auto">
          <h3 className="font-display-lg text-on-surface uppercase text-2xl md:text-5xl mb-4">Ready to build with authority?</h3>
          <button className="bg-surface-tint text-background font-serif uppercase tracking-tighter font-black px-6 md:px-10 py-3 md:py-4 border-2 border-surface-tint hover:bg-background hover:text-surface-tint transition-none active:translate-y-1 text-sm md:text-base">
            START YOUR PROJECT
          </button>
        </div>
      </section>
    </>
  );
}