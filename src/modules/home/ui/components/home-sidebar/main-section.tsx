"use client";

import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";

import { SidebarGroup,
        SidebarGroupContent, 
        SidebarMenu,
        SidebarMenuButton,
        SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";
import { use } from "react";
import { useClerk,useAuth } from "@clerk/nextjs";

const items = [
  {
    title: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    title: "Subscription",
    icon: PlaySquareIcon,
    href: "/feed/subscriptions",
    auth: true,
  },
  {
    title: "Trending",
    icon: FlameIcon,
    href: "/feed/trending",
  },
];
const MainSection = () => {
  const clerk = useClerk();
  const {isSignedIn} = useAuth();
  return (
  <SidebarGroup>
    <SidebarGroupContent>
    <SidebarMenu>
       {items.map((item) =>(
        <SidebarMenuItem key={item.title}>
            <SidebarMenuButton tooltip={item.title}  asChild 
            
            isActive={false}  // You can implement active state logic here
            //Add onClick handler if needed
            onClick={(e)=>{
              if(!isSignedIn && item.auth){
                e.preventDefault();
                clerk.openSignIn();
              }
            }} >
                <Link href={item.href} className="flex items-center gap-4"> 
                    <item.icon/>
                    <span className="text-sm font-medium">{item.title}</span>
                </Link>
            </SidebarMenuButton>
            </SidebarMenuItem>
       ))}
    </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>

  )
};

export default MainSection;
