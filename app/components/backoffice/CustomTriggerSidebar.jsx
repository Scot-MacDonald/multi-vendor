import { useSidebar } from "@/components/ui/sidebar";
import React from "react";

export default function CustomTriggerSidebar() {
  const { toggleSidebar } = useSidebar();

  return <button onClick={toggleSidebar}>Toggle Sidebar</button>;
}
