import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Value Organizer",
  description: "Orgnanize your value structure",
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
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <header className="w-full">
            <NavBar />
          </header>
          <main className="flex-1">
            {children}
          </main>
          {/* TODO get this to work styling wise
          <footer className="w-full text-center mt-auto">
            <span>© 2025 Joshua Kaplan. Code licensed under MIT.</span>
          </footer> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
