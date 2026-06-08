import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buddie — Find Your People",
  description: "A warm community to make real friends around shared interests.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="min-h-screen" style={{ background: "var(--background)" }}>
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 pt-20 pb-12">
          {children}
        </main>
      </body>
    </html>
  );
}
