"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";
import logo from "../../../public/logo_dark.svg";
import Image from "next/image";
import {
  Boxes,
  Building2,
  Cannabis,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  Compass,
  ExternalLink,
  HeartHandshake,
  LayoutGrid,
  LayoutList,
  LogOut,
  MonitorPlay,
  ScanSearch,
  SendToBack,
  Slack,
  Truck,
  User,
  User2,
  UserSquare2,
  Users2,
  Warehouse,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { CompanyModule } from "@faker-js/faker";
import { signOut, useSession } from "next-auth/react";

export default function sidebar({ showSidebar, setShowSidebar }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const role = session?.user?.role;

  let sidebarLinks = [
    {
      title: "Customers",
      icon: Users2,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: UserSquare2,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders",
    },
    {
      title: "Sales",
      icon: Truck,
      href: "/dashboard/sales",
    },
    {
      title: "Our Staff",
      icon: User,
      href: "/dashboard/staff",
    },
    {
      title: "Limi Community",
      icon: Building2,
      href: "/dashboard/community",
    },
    {
      title: "Wallet",
      icon: CircleDollarSign,
      href: "/dashboard/wallet",
    },
    {
      title: "Farmer Support",
      icon: HeartHandshake,
      href: "/dashboard/farmer-support",
    },
    {
      title: "Settings",
      icon: LayoutGrid,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: ExternalLink,
      href: "/",
    },
  ];
  let catalogueLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: LayoutList,
      href: "/dashboard/categories",
    },
    // {
    //   title: "Attributes",
    //   icon: SendToBack,
    //   href: "/dashboard/attributes",
    // },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons",
    },
    {
      title: "Store Banners",
      icon: MonitorPlay,
      href: "/dashboard/banners",
    },
  ];

  if (role === "FARMER") {
    sidebarLinks = [
      {
        title: "Sales",
        icon: Truck,
        href: "/dashboard/sales",
      },
      {
        title: "My Orders",
        icon: Truck,
        href: "/dashboard/orders",
      },
      {
        title: "Wallet",
        icon: CircleDollarSign,
        href: "/dashboard/wallet",
      },
      {
        title: "Farmer Support",
        icon: HeartHandshake,
        href: "/dashboard/farmer-support",
      },
      {
        title: "Settings",
        icon: LayoutGrid,
        href: "/dashboard/settings",
      },
      {
        title: "Online Store",
        icon: ExternalLink,
        href: "/",
      },
    ];
    catalogueLinks = [
      {
        title: "Products",
        icon: Boxes,
        href: "/dashboard/products",
      },
      {
        title: "Coupons",
        icon: ScanSearch,
        href: "/dashboard/coupons",
      },
    ];
  }
  if (role === "USER") {
    sidebarLinks = [
      {
        title: "My Orders",
        icon: Truck,
        href: "/dashboard/orders",
      },
      {
        title: "Profile",
        icon: Truck,
        href: "/dashboard/profile",
      },

      {
        title: "Online Store",
        icon: ExternalLink,
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
    <div
      className={
        showSidebar
          ? "    space-y-6 w-64  bg-[#f8f8f8] dark:bg-[#2b2b2b] dark:text-white text-[#249a38] ml-6 mt-6    border border-[#000000] dark:border-[#303030] z-50 overflow-y-scroll"
          : " hidden lg:block space-y-6 w-64  bg-white dark:bg-[#2b2b2b] dark:text-white text-[#249a38]    border border-[#000000] dark:border-[#303030] z-50 overflow-y-scroll"
      }
    >
      <div className="pt-2 pl-2 hidden lg:block  ">
        <Link
          onClick={() => setShowSidebar(false)}
          className=""
          href="/dashboard"
        >
          {/* <Image src={logo} alt="logo" width={40} height={40} /> */}
          <Cannabis size={32} color="#249a38" strokeWidth={1} />
        </Link>
      </div>
      <div className="space-y-3 flex flex-col mt-12">
        <Link
          onClick={() => setShowSidebar(false)}
          href="/dashboard"
          className={
            pathname === "/dashboard"
              ? "flex items-center space-x-3 px-6 py-2 mt-10 lg:mt-0 border-l-8 border-[#666666] text-[#249a38]"
              : "flex items-center space-x-3 px-6 py-2 "
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        {catalogueLinks.length > 0 && (
          <Collapsible className="px-6 py-2">
            <CollapsibleTrigger
              asChild
              className=""
              onClick={() => setOpenMenu(!openMenu)}
            >
              <button className="flex items-center space-x-5  py-2   ">
                <div className="flex items-center space-x-3">
                  <Warehouse />
                  <span>Catalogue</span>
                </div>
                {openMenu ? <ChevronDown /> : <ChevronRight />}
              </button>
            </CollapsibleTrigger>

            <CollapsibleContent className="px-3 pl-4 py-3 dark:bg-[#252525] dark:text-slate-100 rounded-sm">
              {catalogueLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Link
                    onClick={() => setShowSidebar(false)}
                    key={i}
                    href={item.href}
                    className={
                      pathname === item.href
                        ? "flex items-center space-x-3  py-1 text-sm  text-[#666666]"
                        : "flex items-center space-x-3  py-1 text-sm"
                    }
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </CollapsibleContent>
          </Collapsible>
        )}

        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              onClick={() => setShowSidebar(false)}
              key={i}
              href={item.href}
              className={
                item.href == pathname
                  ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-[#666666] text-[#666666]"
                  : "flex items-center space-x-3 px-6 py-2 "
              }
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3  bg-[#12a049] text-white rounded-md px-6 py-3"
          >
            <LogOut />
            <span className="">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
