import "./globals.css";
import Link from "next/link";
import { Inter, Newsreader } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-news",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Material Symbols font – REQUIRED for icons to work */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png"></link>
      </head>
      <body className={`${inter.variable} ${newsreader.variable}`}>
        {/* Noise Overlay */}
        <div className="fixed inset-0 noise-overlay z-50 pointer-events-none"></div>

        <header className="bg-black border-b-4 border-yellow-400 fixed top-0 w-full z-40">
          <nav className="flex justify-between items-center px-4 md:px-10 py-4 max-w-[1280px] mx-auto">

            {/* LOGO IMAGE */}
            <div className="flex items-center">
              <Image
                src="/logo.webp"
                alt="Apexe Hallton Ltd"
                width={160}
                height={40}
                className="object-contain"
                priority
              />
            </div>

            {/* NAV */}
            <div className="hidden md:flex gap-8 text-sm font-bold uppercase">
              <Link href="/" className="text-yellow-400 border-b-4 border-yellow-400 pb-1">
                Home
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white">
                About
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-white">
                Services
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </div>

            {/* BUTTON */}
            <button className="bg-yellow-400 text-black px-4 md:px-6 py-2 font-bold uppercase text-xs md:text-sm hover:bg-yellow-500">
              Request Specs
            </button>

          </nav>
        </header>

        {/* MAIN – pt-[80px] accounts for fixed header */}
        <main className="pt-[80px]">{children}</main>

        <footer className="bg-zinc-900 border-t-4 border-zinc-800 mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-10 gap-6 max-w-[1280px] mx-auto">

            <div className="text-center md:text-left flex flex-col items-center md:items-start">

              {/* LOGO IMAGE */}
              <Image
                src="/logo.webp"
                alt="Apexe Hallton Ltd"
                width={140}
                height={40}
                className="object-contain mb-2"
              />

              <p className="text-gray-500 text-sm">© 2024 Apexe Hallton Ltd</p>
            </div>

            <div className="flex gap-6 text-sm uppercase text-gray-500">
              <Link href="#">Privacy</Link>
              <Link href="#">Terms</Link>
            </div>
          </div>

          <div className="hazard-pattern h-2 w-full"></div>
        </footer>
      </body>
    </html>
  );
}