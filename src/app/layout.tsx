import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { LocaleProvider } from "@/lib/locale-context";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buddie — Find Buddies and Find Life",
  description: "Buddie is a warm community to make real friends around shared interests. Discover people nearby, share what you love, and connect.",
  keywords: ["make friends", "friend finder", "community", "social", "meet people", "local friends"],
  openGraph: {
    title: "Buddie — Find Buddies and Find Life",
    description: "Discover people nearby who share your interests. Make real friends on Buddie.",
    url: "https://buddie-fod2r3dfd-xjyang01s-projects.vercel.app",
    siteName: "Buddie",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buddie — Find Buddies and Find Life",
    description: "Discover people nearby who share your interests. Make real friends on Buddie.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="min-h-screen" style={{ background: "var(--background)" }}>
        <LocaleProvider>
          <Navbar />
          <main className="max-w-5xl mx-auto px-4 pt-20 pb-12">
            {children}
          </main>
          <footer className="max-w-5xl mx-auto px-4 pb-6 flex justify-end">
            <LanguageSwitcher />
          </footer>
        </LocaleProvider>
      </body>
    </html>
  );
}
