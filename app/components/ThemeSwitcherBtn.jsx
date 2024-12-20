"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, SunIcon } from "lucide-react";
import { MaskOffIcon, MaskOnIcon, MoonIcon } from "@radix-ui/react-icons";

export default function ThemeSwitcherBtn() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log(theme);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="border-l border-black  flex items-center justify-center">
      <button
        className="text-[#000000] dark:text-white font-bold relative overflow-hidden transition-all duration-200 hover:bg-black hover:text-white px-5 py-3"
        style={{ transitionTimingFunction: "cubic-bezier(0.2, 1, 0.2, 1)" }}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? (
          <MoonIcon className="w-4 h-4" />
        ) : (
          <SunIcon className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
