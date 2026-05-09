import "./globals.css";
import Image from "next/image";
import { Inter, Newsreader } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";

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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
      </head>
      <body className={`${inter.variable} ${newsreader.variable} overflow-x-hidden`}>
        <div className="fixed inset-0 noise-overlay z-50 pointer-events-none"></div>

        <SiteHeader />

        <main className="pt-[64px] md:pt-[80px]">{children}</main>

        <footer className="bg-zinc-900 border-t-4 border-zinc-800 mt-20">
          <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-8 md:py-10 gap-6 max-w-[1280px] mx-auto">
            <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
              <Image
                src="/logo.webp"
                alt="Apexe Hallton Ltd"
                width={140}
                height={40}
                className="object-contain h-8 w-auto"
              />
              <p className="text-gray-500 text-sm">© 2026 Apexe Hallton Ltd</p>
            </div>

            <div className="text-sm uppercase text-gray-500">
              Designed by{" "}
              <a
                href="https://linkedo.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 font-bold hover:text-white hover:underline underline-offset-4 transition-colors"
              >
                Linkedo
              </a>
            </div>
          </div>

          <div className="hazard-pattern h-2 w-full"></div>
        </footer>
      </body>
    </html>
  );
}
