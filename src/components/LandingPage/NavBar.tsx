import { H2 } from "../ui/typography";
import { HelpCircle, Info } from "lucide-react";
import Link from "next/link";
import ThemeSwitch from "../Settings/ThemeSwtich";
import { usePathname } from "next/navigation";
import Image from "next/image";
export default async function Navbar() {
  return (
    <div className="fixed top-0 w-full h-12 px-6 flex items-center justify-between border-b bg-sidebar z-50">
      <div className="w-10 h-10 relative overflow-hidden rounded-full">
          <Image
            src="/IntegrityAtlasLogoV1.png"
            alt="IntegrityAtlas Logo"
            fill
            sizes="40px"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      <H2>IntegrityAtlas</H2>
      <div className="flex items-center gap-4 ml-auto">
        <ThemeSwitch/>
        <Link href="/help" aria-label="Help">
          <HelpCircle className="w-5 h-5 hover:text-primary transition-colors" />
        </Link>
        <Link href="/about" aria-label="About">
          <Info className="w-5 h-5 hover:text-primary transition-colors" />
        </Link>
      </div>
    </div>
  );
}