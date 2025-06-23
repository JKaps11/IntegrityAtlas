import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers.client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IntegrityAtlas",
  description: "Integration for the integral parts of your life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}
      >
        <Providers>
          {children}
          {/* TODO get this to work styling wise
          <footer className="w-full text-center mt-auto">
            <span>© 2025 Joshua Kaplan. Code licensed under MIT.</span>
          </footer> */}
        </Providers>
      </body>
    </html>
  );
}
