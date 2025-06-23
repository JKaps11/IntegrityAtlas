import Navbar from "@/components/LandingPage/NavBar";

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return <>
        <header className="w-full">
            <Navbar />
          </header>
          <main className="flex-1">
            {children}
          </main>
    </>
}