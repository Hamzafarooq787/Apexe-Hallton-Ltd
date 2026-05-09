'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-black border-b-4 border-yellow-400 fixed top-0 left-0 right-0 w-full z-40">
      <nav className="flex justify-between items-center px-4 sm:px-6 md:px-10 py-3 md:py-4 max-w-[1280px] mx-auto gap-3">
        <Link href="/" className="flex items-center shrink-0" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo.webp"
            alt="Apexe Hallton Ltd"
            width={160}
            height={40}
            className="object-contain h-8 sm:h-9 md:h-10 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-bold uppercase">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  active
                    ? "text-yellow-400 border-b-4 border-yellow-400 pb-1"
                    : "text-gray-400 hover:text-white transition-colors"
                }
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden sm:inline-block bg-yellow-400 text-black px-3 md:px-6 py-2 font-bold uppercase text-xs md:text-sm hover:bg-yellow-500 transition-colors"
          >
            Request Specs
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="square"
            >
              {menuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden bg-black border-t-2 border-yellow-400 transition-[max-height] duration-300 ease-in-out ${
          menuOpen ? "max-h-[480px]" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1 text-sm font-bold uppercase">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-3 border-l-4 ${
                  active
                    ? "text-yellow-400 border-yellow-400 bg-zinc-900"
                    : "text-gray-300 border-transparent hover:text-yellow-400 hover:border-yellow-400 hover:bg-zinc-900"
                } transition-colors`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 sm:hidden bg-yellow-400 text-black text-center px-4 py-3 font-bold uppercase text-sm hover:bg-yellow-500 transition-colors"
          >
            Request Specs
          </Link>
        </div>
      </div>
    </header>
  );
}
