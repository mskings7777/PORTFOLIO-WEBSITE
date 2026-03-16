import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEV.FOLIO | Trading-Themed Developer Portfolio",
  description:
    "A unique developer portfolio designed as a professional trading dashboard. Skills, projects, and achievements displayed as financial metrics and analytics.",
  keywords: [
    "developer portfolio",
    "trading dashboard",
    "full stack developer",
    "react",
    "next.js",
    "web developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0e17] text-[#f1f5f9]`}
      >
        {children}
      </body>
    </html>
  );
}
