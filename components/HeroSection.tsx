'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <>
      <style jsx>{`
        .hazard-pattern {
          background: repeating-linear-gradient(45deg, #f1c100, #f1c100 10px, #000000 10px, #000000 20px);
        }
      `}</style>

      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden border-b-4 border-yellow-400">
        {/* Background Image with Grayscale */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKlS7L5NlrAD03JmtiXEP2gBt0nL4koxvAlHt0uNY_KmaiFXxw6kFVJmIXcxtlgwZ51W2HrBnuaC4AJ6xGbSJlGby_onYDAQGPq6vw3mlbqfUZLB3bhz9hFslS0jS29Kr3KwxkP-Q9x_vwkI3RskFY2dW3_VnwzkcqkmOaauhU10DSPB2a6lQtPtZ3bbgEp3jQzjAFX_wEHjIg3Spc_XK9Xp2poRSDnp8uyRzvhjbvScVWGb79gdx4x4-R_b5VoNgkHLC1OyL0FQ"
            alt="Industrial construction site"
          />
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 px-6 text-center max-w-4xl mx-auto">
          {/* Hazard pattern accent */}
          <div className="hazard-pattern h-1 w-24 mx-auto mb-6"></div>

          {/* Main heading - smaller, centered */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight">
            <span className="text-white">BUILDING THE FUTURE</span><br />
            WITH <span className="text-yellow-400">PRECISION</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-4 md:mt-6 max-w-2xl mx-auto">
            Heavy-duty engineering for industrial, commercial, and residential developments. We build with structural integrity and uncompromising quality.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mt-6 md:mt-8">
            <Link
              href="/services"
              className="bg-yellow-400 text-black px-6 md:px-8 py-3 text-sm md:text-base font-bold uppercase hover:bg-white hover:text-black transition-all duration-200 active:scale-95 inline-block"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-yellow-400 text-yellow-400 px-6 md:px-8 py-3 text-sm md:text-base font-bold uppercase hover:bg-yellow-400 hover:text-black transition-all duration-200 active:scale-95 inline-block"
            >
              Request a Consultation
            </Link>
          </div>
        </div>

        {/* Decorative hazard corner */}
        <div className="absolute bottom-0 right-0 w-24 h-24 hazard-pattern opacity-30 hidden md:block"></div>
      </section>
    </>
  );
}