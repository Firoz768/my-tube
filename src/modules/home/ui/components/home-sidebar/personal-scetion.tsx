"use client";

import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const items = [
  {
    title: "History",
    icon: HistoryIcon,
    href: "/playlists/history",
    auth: true,
  },
  {
    title: "Liked Videos",
    icon: ThumbsUpIcon,
    href: "/playlists/liked",
    auth: true,
  },
  {
    title: "Playlists",
    icon: ListVideoIcon,
    href: "/feed/trending",
    auth: true,
  },
];
const PersonalSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>You</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false} // You can implement active state logic here
                //Add onClick handler if needed
                onClick={() => {}}
              >
                <Link href={item.href} className="flex items-center gap-4">
                  <item.icon />
                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default PersonalSection;
