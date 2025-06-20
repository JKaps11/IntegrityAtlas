import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { BookUser, BrainCircuit, Calendar, ClipboardList, LayoutDashboardIcon, LightbulbIcon } from "lucide-react";
import Link from "next/link";
import { title } from "process";

export default function SideBar() {


  const discoveryMenuItems= [
    {
      title: "Dashboard",
      url: "/project",
      icon: LayoutDashboardIcon
    },
    {
      title: "Learning Modules",
      url: "/project/learningModules",
      icon: BookUser,
    },
    {
      title: "Value Organizer",
      url: "/project/valueOrganizer",
      icon: LightbulbIcon
    },
    {
      title: "Value Mind Map",
      url: "/project/mindMap",
      icon: BrainCircuit
    }
  ]

  const manageMenuItems = [
    {
      title: "Tasks",
      url: "/project/tasks",
      icon: ClipboardList
    },
    {
      title: "Calendar",
      url: "/project/calendar",
      icon: Calendar
    },
  ]

  return (
    <Sidebar side="left" collapsible="icon">
      <SidebarHeader className="h-12" />
      <SidebarContent className="overflow-hidden">
        <SidebarGroup className="overflow-hidden">
          <SidebarGroupLabel >Self Discovery</SidebarGroupLabel>
          <SidebarGroupContent className="overflow-hidden">
            <SidebarMenu className="overflow-hidden">
              {discoveryMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={`/${item.url}`} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="overflow-hidden">
          <SidebarGroupLabel >Self Management</SidebarGroupLabel>
          <SidebarGroupContent className="overflow-hidden">
            <SidebarMenu className="overflow-hidden">
              {manageMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={`/${item.url}`} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent >
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  );
}

