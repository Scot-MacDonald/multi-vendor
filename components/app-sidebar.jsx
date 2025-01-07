import * as React from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ChevronDown } from "lucide-react"; // Assuming you're using Lucide for icons

import { signOut, useSession } from "next-auth/react";

export function AppSidebar(props) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const role = session?.user?.role;

  // Role-based links
  let sidebarLinks = [
    {
      title: "Customers",
      icon: "Users2",
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: "Warehouse",
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: "UserSquare2",
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: "Truck",
      href: "/dashboard/orders",
    },
    {
      title: "Sales",
      icon: "Truck",
      href: "/dashboard/sales",
    },
    {
      title: "Our Staff",
      icon: "User",
      href: "/dashboard/staff",
    },
    {
      title: "Limi Community",
      icon: "Building2",
      href: "/dashboard/community",
    },
    {
      title: "Wallet",
      icon: "CircleDollarSign",
      href: "/dashboard/wallet",
    },
    {
      title: "Farmer Support",
      icon: "HeartHandshake",
      href: "/dashboard/farmer-support",
    },
    {
      title: "Settings",
      icon: "LayoutGrid",
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: "ExternalLink",
      href: "/",
    },
  ];

  let catalogueLinks = [
    {
      title: "Products",
      icon: "Boxes",
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: "LayoutList",
      href: "/dashboard/categories",
    },
    {
      title: "Coupons",
      icon: "ScanSearch",
      href: "/dashboard/coupons",
    },
    {
      title: "Store Banners",
      icon: "MonitorPlay",
      href: "/dashboard/banners",
    },
  ];

  if (role === "FARMER") {
    sidebarLinks = [
      {
        title: "Sales",
        icon: "Truck",
        href: "/dashboard/sales",
      },
      {
        title: "Wallet",
        icon: "CircleDollarSign",
        href: "/dashboard/wallet",
      },
      {
        title: "Farmer Support",
        icon: "HeartHandshake",
        href: "/dashboard/farmer-support",
      },
      {
        title: "Settings",
        icon: "LayoutGrid",
        href: "/dashboard/settings",
      },
      {
        title: "Online Store",
        icon: "ExternalLink",
        href: "/",
      },
    ];
    catalogueLinks = [
      {
        title: "Products",
        icon: "Boxes",
        href: "/dashboard/products",
      },
      {
        title: "Coupons",
        icon: "ScanSearch",
        href: "/dashboard/coupons",
      },
    ];
  }

  if (role === "USER") {
    sidebarLinks = [
      {
        title: "My Orders",
        icon: "Truck",
        href: "/dashboard/orders",
      },
      {
        title: "Profile",
        icon: "Truck",
        href: "/dashboard/profile",
      },
      {
        title: "Online Store",
        icon: "ExternalLink",
        href: "/",
      },
    ];
    catalogueLinks = [];
  }

  async function handleLogout() {
    await signOut();
    router.push("/");
  }

  return (
    <Sidebar
      style={{
        border: "1px solid black",
        margin: "90px 0px 0 24px",
        height: "750px",
        background: "white",
      }}
      variant="inset"
      {...props}
    >
      <SidebarHeader />
      <SidebarContent>
        {/* Sidebar Links */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarLinks.map((link) => (
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton asChild>
                    <a href={link.href}>{link.title}</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Collapsible Catalogue Links */}
        {catalogueLinks.length > 0 && (
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger className="flex items-center w-full">
                  Catalogue
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {catalogueLinks.map((link) => (
                      <SidebarMenuItem key={link.title}>
                        <SidebarMenuButton asChild>
                          <a href={link.href}>{link.title}</a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        )}
      </SidebarContent>
      <SidebarFooter>
        {" "}
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 bg-[#12a049] text-white rounded-md px-6 py-3"
        >
          <span>Logout</span>
        </button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
