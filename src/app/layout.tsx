import type { Metadata } from "next";
import localFont from "next/font/local";

import Footer from "@/layout/Footer";
import { Header } from "@/layout/Header";
import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import "./globals.css";

// Font setup
const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2",
  variable: "--font-alpino",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fizz - Soda for Gutsy People",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`bg-yellow-300 overflow-x-hidden ${alpino.className}`}>
        <Header />
        <main>{children}</main>
        <PrismicPreview repositoryName={repositoryName} />
        <Footer />
      </body>
    </html>
  );
}
