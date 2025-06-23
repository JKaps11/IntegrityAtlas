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
import { BookUser, BrainCircuit, Calendar, ClipboardList, HelpCircle, LayoutDashboardIcon, LightbulbIcon, Settings, SunMoon, User } from "lucide-react";
import Link from "next/link";
import ThemeSwitch from "../Settings/ThemeSwtich";
import { SignOut } from "../auth/AuthButtons";
import { ProfileAvatar } from "../Settings/ProfileAvatar";
export default function SideBar() {

  const discoveryMenuItems = [
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
      <SidebarHeader className="w-full flex flex-row gap-4 jusify-between items-center">
        <SidebarTrigger />
        <div className="flex flex-row gap-2 items-center">
          <SunMoon className="h-4 w-4" />
          <ThemeSwitch />
        </div>
      </SidebarHeader>
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
        <SidebarGroup className="overflow-hidden">
          <SidebarGroupLabel >Settings</SidebarGroupLabel>
          <SidebarGroupContent className="overflow-hidden">
            <SidebarMenu className="overflow-hidden">
              <SidebarMenuItem key={"theme"} className="flex flex-row justify-between">

              </SidebarMenuItem>
              <SidebarMenuItem key={'help'}>
                <SidebarMenuButton asChild>
                  <Link href={`/help`} className="flex items-center gap-2">
                    <HelpCircle className="h-4 w-4" />
                    <span>Help</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem key={'generalSettings'}>
                <SidebarMenuButton asChild>
                  <Link href={`/authenticated/settings`} className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    <span>GeneralSettings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent >
      <SidebarFooter className="flex flex-row justify-end items-center">
        <SignOut />
        <ProfileAvatar />
      </SidebarFooter>
    </Sidebar>
  );
}
