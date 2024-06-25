"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

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

export default function sidebar({ showSidebar, setShowSidebar }) {
  const pathname = usePathname();
  const sidebarLinks = [
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
  const catalogueLinks = [
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
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      className={
        showSidebar
          ? " lg:block mt-10 sm:mt-0  space-y-6 w-64 h-screen bg-white dark:bg-black dark:text-white text-black   fixed left-0 top-0 border-r border-gray-300 dark:border-[#666666] overflow-y-scroll"
          : "mt-10 sm:mt-0 hidden lg:block space-y-6 w-64 h-screen bg-white dark:bg-black dark:text-white text-black   fixed left-0 top-0 border-r border-gray-300 dark:border-[#666666] overflow-y-scroll"
      }
    >
      <div className="pt-2 pl-2 hidden lg:block">
        <Link
          onClick={() => setShowSidebar(false)}
          className=""
          href="/dashboard"
        >
          {/* <Image src={logo} alt="logo" width={40} height={40} /> */}
          <Cannabis size={48} color="#008e00" strokeWidth={1} />
        </Link>
      </div>
      <div className="space-y-3 flex flex-col mt-12">
        <Link
          onClick={() => setShowSidebar(false)}
          href="/dashboard"
          className={
            pathname === "/dashboard"
              ? "flex items-center space-x-3 px-6 py-2 mt-10 lg:mt-0 border-l-8 border-[#666666] text-[#666666]"
              : "flex items-center space-x-3 px-6 py-2 "
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
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
          <CollapsibleContent className="px-3 pl-4 py-3 dark:bg-black dark:text-slate-100 rounded-sm">
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
          <button className="flex items-center space-x-3  bg-green-500 rounded-md px-6 py-3">
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
