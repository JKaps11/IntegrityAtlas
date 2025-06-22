'use client'

import { H2 } from "../ui/typography";
import { HelpCircle, Info, User } from "lucide-react";
import Link from "next/link";
import { Switch } from "../ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useTheme } from "next-themes";
import { SidebarTrigger } from "../ui/sidebar";
import { useConfigStore } from "@/lib/stores";

export default function NavBar() {
  const isLandingPage = useConfigStore(state => state.appMode === 'global')
  return isLandingPage ? <LandingNavBar /> : <ProjectNavBar />
}

function LandingNavBar() {
  const { setTheme, theme } = useTheme()
  return (
    <div className="fixed top-0 w-full h-12 px-6 flex items-center justify-between border-b bg-sidebar z-50">
      <H2>IntegrityAtlas</H2>
      <div className="flex items-center gap-4 ml-auto">
        <Switch checked={theme === 'dark'}
          onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
          aria-label="Toggle dark mode" />
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

function ProjectNavBar() {
  const { setTheme, theme } = useTheme()
  return (
    <div className="fixed top-0 w-full h-12 px-[9px] flex items-center justify-between border-b bg-sidebar z-50">
      <H2 className="px-4">IntegrityAtlas</H2>

      <div className="flex items-center gap-4 ml-auto">
        <Switch checked={theme === 'dark'}
          onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
          aria-label="Toggle dark mode" />
        <Link href="/help" aria-label="Help">
          <HelpCircle className="w-5 h-5 hover:text-primary transition-colors" />
        </Link>
        <Link href="/about" aria-label="About">
          <Info className="w-5 h-5 hover:text-primary transition-colors" />
        </Link>
        <ProfileAvatar />
      </div>
    </div>
  );
}


export function ProfileAvatar({ src, alt }: { src?: string, alt?: string }) {
  return (
    <Avatar>
      {src ? (
        <AvatarImage src={src} alt={alt} />
      ) : (
        <AvatarFallback>
          <User className="w-6 h-6 text-muted-background" />
        </AvatarFallback>
      )}
    </Avatar>
  )
}
