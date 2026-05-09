'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        /* Custom classes from the original HTML (missing in global setup) */
        .max-w-container-max { max-width: 1280px; }
        .bg-surface-container-low { background-color: #1a1c1c; }
        .bg-surface-container { background-color: #1e2020; }
        .bg-surface-container-lowest { background-color: #0c0f0f; }
        .border-surface-container-highest { border-color: #333535; }
        .text-on-surface-variant { color: #d2c5ab; }
        .text-on-surface { color: #e2e2e2; }
        .bg-zinc-950 { background-color: #09090b; }
        .hover\\:bg-surface-container:hover { background-color: #1e2020; }
        .transition-colors { transition-property: background-color; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .transition-none { transition: none; }
        .active\\:translate-y-1:active { transform: translateY(1px); }
        .active\\:translate-y-2:active { transform: translateY(2px); }
        .active\\:border-b-0:active { border-bottom-width: 0; }
        .font-label-bold { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 14px; line-height: 1.2; }
        .font-headline-md { font-family: 'Newsreader', serif; font-weight: 700; font-size: 32px; line-height: 1.2; }
        .font-body-lg { font-family: 'Inter', sans-serif; font-weight: 400; font-size: 18px; line-height: 1.6; }
        .font-display-lg { font-family: 'Newsreader', serif; font-weight: 800; font-size: 64px; line-height: 1.1; letter-spacing: -0.02em; }
        .font-body-md { font-family: 'Inter', sans-serif; font-weight: 400; font-size: 16px; line-height: 1.6; }
        .concrete-texture {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }
        .hazard-pattern {
          background: repeating-linear-gradient(
            45deg,
            #f1c100,
            #f1c100 10px,
            #000000 10px,
            #000000 20px
          );
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
          display: inline-block;
          line-height: 1;
        }
        .hover\\:text-yellow-400:hover { color: #f1c100; }
        .bg-yellow-400 { background-color: #f1c100; }
        .hover\\:bg-white:hover { background-color: white; }
        .border-yellow-400 { border-color: #f1c100; }
        .border-yellow-600 { border-color: #ca8a04; }
        .border-zinc-800 { border-color: #27272a; }
        .border-zinc-700 { border-color: #3f3f46; }
        .text-yellow-400 { color: #f1c100; }
        .text-zinc-500 { color: #71717a; }
        .text-zinc-400 { color: #a1a1aa; }
        .bg-zinc-900 { background-color: #18181b; }
        .bg-black { background-color: black; }
        .mix-blend-luminosity { mix-blend-mode: luminosity; }
        .backdrop-blur-sm { backdrop-filter: blur(4px); }
      `}</style>

      <main className="flex-grow concrete-texture bg-background text-on-background">
        {/* Hero Title Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 border-b-4 border-surface-container-highest">
          <div className="max-w-container-max mx-auto">
            <div className="inline-block hazard-pattern h-4 w-24 mb-6"></div>
            <h1 className="font-display-lg text-yellow-400 uppercase leading-none text-4xl sm:text-5xl md:text-6xl lg:text-[64px] break-words">
              GET IN TOUCH
            </h1>
            <p className="font-body-lg text-on-surface-variant mt-4 max-w-2xl text-base md:text-lg">
              Our structural engineers and project managers are ready to discuss your next industrial venture. Precision is our baseline; excellence is our delivery.
            </p>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b-4 border-surface-container-highest">
          {/* Contact Info Blocks */}
          <div className="lg:col-span-5 border-r-0 lg:border-r-4 border-surface-container-highest">
            {/* Address Block */}
            <div className="p-6 md:p-12 border-b-4 border-surface-container-highest bg-surface-container-low hover:bg-surface-container transition-colors group">
              <span
                className="material-symbols-outlined text-yellow-400 text-4xl mb-4"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                location_on
              </span>
              <h2 className="font-label-bold text-label-bold text-yellow-400 uppercase tracking-widest mb-2">
                Headquarters
              </h2>
              <p className="font-headline-md text-on-surface uppercase break-words text-xl md:text-3xl">
                22 ADAMS AVENUE,<br />
                STOKE-ON-TRENT,<br />
                ST6 5PE
              </p>
            </div>

            {/* Email Block */}
            <div className="p-6 md:p-12 border-b-4 border-surface-container-highest bg-surface-container-low hover:bg-surface-container transition-colors group">
              <span
                className="material-symbols-outlined text-yellow-400 text-4xl mb-4"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                mail
              </span>
              <h2 className="font-label-bold text-label-bold text-yellow-400 uppercase tracking-widest mb-2">
                Electronic Inquiries
              </h2>
              <a
                className="font-headline-md text-on-surface uppercase block hover:text-yellow-400 transition-none underline decoration-2 underline-offset-8 break-all text-lg md:text-2xl"
                href="mailto:sales@apexehalton.co.uk"
              >
                sales@apexehalton.co.uk
              </a>
            </div>

            {/* Action Block */}
            <div className="p-6 md:p-12 bg-zinc-900">
              <a
                href="tel:+441782000000"
                className="w-full py-4 md:py-6 bg-yellow-400 text-black font-black text-base md:text-xl font-serif uppercase tracking-tighter hover:bg-white active:translate-y-2 transition-none border-b-8 border-yellow-600 active:border-b-0 flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined">call</span>
                Call Our Team
              </a>
              <p className="font-label-bold text-zinc-500 mt-6 uppercase text-center text-xs md:text-sm">
                Available Mon-Fri | 08:00 - 18:00 GMT
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-7 bg-surface-container-lowest min-h-[360px] md:min-h-[500px] relative overflow-hidden">
            <iframe
              title="Apexe Hallton Ltd headquarters location"
              src="https://www.google.com/maps?q=22+Adams+Avenue,+Stoke-on-Trent,+ST6+5PE&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0 grayscale contrast-110"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 ring-4 ring-inset ring-yellow-400/20"></div>

            <div className="pointer-events-none absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-auto z-10 max-w-sm">
              <div className="pointer-events-auto bg-zinc-950/90 border-2 border-yellow-400 p-4 md:p-6 backdrop-blur-sm">
                <h3 className="font-label-bold text-yellow-400 uppercase mb-2 text-xs md:text-sm">
                  Location Logistics
                </h3>
                <p className="text-on-surface text-xs md:text-sm mb-3">
                  Our facility is situated in the heart of Stoke-on-Trent&apos;s industrial corridor, optimised for logistics and onsite consultations.
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=22+Adams+Avenue,+Stoke-on-Trent,+ST6+5PE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-400 font-bold uppercase text-xs md:text-sm hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-base">directions</span>
                  Get Directions
                </a>
              </div>
            </div>

            <div className="pointer-events-none absolute top-0 right-0 p-4 opacity-30">
              <div className="border-t-2 border-r-2 border-yellow-400 w-12 h-12"></div>
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 p-4 opacity-30">
              <div className="border-b-2 border-l-2 border-yellow-400 w-12 h-12"></div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 border-b-4 border-surface-container-highest">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            <div className="lg:col-span-5">
              <div className="inline-block hazard-pattern h-2 w-16 mb-4"></div>
              <h2 className="font-display-lg text-on-surface uppercase mb-4 text-3xl md:text-5xl">
                Send Us a <span className="text-yellow-400">Message</span>
              </h2>
              <p className="font-body-md text-on-surface-variant text-sm md:text-base">
                Share a few details about your project and our team will respond within 24 hours with an initial assessment.
              </p>
            </div>
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="border-4 border-yellow-400 bg-surface-container p-6 md:p-8">
                  <h3 className="font-headline-md text-yellow-400 uppercase mb-3 text-xl md:text-2xl">
                    Message received
                  </h3>
                  <p className="text-on-surface-variant text-sm md:text-base">
                    Thank you, {form.name || 'colleague'}. Our team will be in touch shortly at {form.email || 'the address provided'}.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-surface-container border-4 border-surface-container-highest p-5 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
                >
                  <label className="flex flex-col gap-2 text-xs uppercase font-bold tracking-widest text-zinc-400">
                    Name
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-black border-2 border-zinc-700 focus:border-yellow-400 outline-none text-on-surface px-3 py-3 text-sm md:text-base"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-xs uppercase font-bold tracking-widest text-zinc-400">
                    Email
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-black border-2 border-zinc-700 focus:border-yellow-400 outline-none text-on-surface px-3 py-3 text-sm md:text-base"
                    />
                  </label>
                  <label className="sm:col-span-2 flex flex-col gap-2 text-xs uppercase font-bold tracking-widest text-zinc-400">
                    Subject
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-black border-2 border-zinc-700 focus:border-yellow-400 outline-none text-on-surface px-3 py-3 text-sm md:text-base"
                    />
                  </label>
                  <label className="sm:col-span-2 flex flex-col gap-2 text-xs uppercase font-bold tracking-widest text-zinc-400">
                    Project Details
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-black border-2 border-zinc-700 focus:border-yellow-400 outline-none text-on-surface px-3 py-3 text-sm md:text-base resize-y"
                    />
                  </label>
                  <button
                    type="submit"
                    className="sm:col-span-2 w-full sm:w-auto justify-self-start bg-yellow-400 text-black font-black uppercase tracking-tighter px-6 md:px-8 py-3 md:py-4 border-b-8 border-yellow-600 hover:bg-white active:translate-y-1 active:border-b-2 transition-none"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Secondary Info (Grid Style) */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-zinc-950">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="border-l-4 border-zinc-800 pl-6">
              <h4 className="font-label-bold text-label-bold text-zinc-400 uppercase mb-2">
                Safety Standards
              </h4>
              <p className="text-zinc-500 font-body-md">
                Fully compliant with ISO 45001 and CHAS accredited safety protocols for all site operations.
              </p>
            </div>
            <div className="border-l-4 border-zinc-800 pl-6">
              <h4 className="font-label-bold text-label-bold text-zinc-400 uppercase mb-2">
                Registry Details
              </h4>
              <p className="text-zinc-500 font-body-md">
                APEXE HALLTON LTD is registered in England and Wales. Company Registration No. 12345678.
              </p>
            </div>
            <div className="border-l-4 border-zinc-800 pl-6">
              <h4 className="font-label-bold text-label-bold text-zinc-400 uppercase mb-2">
                Media Relations
              </h4>
              <p className="text-zinc-500 font-body-md">
                For press kits or structural photography requests, contact our communications desk at media@apexehalton.co.uk.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}