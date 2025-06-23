import SideBar from "@/components/common/SideBar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return <main className="h-full w-full flex-1"> 
  <SidebarProvider>

    <SideBar />
    <SidebarInset className="overflow-hidden">
    <div id="padding-for-content-under-navbar" className="pt-12">
      {children}
    </div>
    </SidebarInset>
    {/* Overlays */}
  </SidebarProvider>
  </main>
}