"use client";

import React from "react"; // Added React import
import { usePathname } from "next/navigation";
import { Home, User, Mail, BookOpenText, Briefcase } from "lucide-react";

export default function DynamicIconTitle() {
  const pathname = usePathname();

  // Changed JSX.Element to React.ReactNode which is more accurate for this case
  const iconMap: Record<string, { icon: React.ReactNode }> = {
    "/": { icon: <Home className="w-6 h-6" /> }, // Added root path case
    "/home": { icon: <Home className="w-6 h-6" /> },
    "/about": { icon: <User className="w-6 h-6" /> },
    "/contact": { icon: <Mail className="w-6 h-6" /> },
    "/projects": { icon: <Briefcase className="w-6 h-6" /> },
    "/blog": { icon: <BookOpenText className="w-6 h-6" /> },
  };

  // Improved pathname handling
  const normalizedPathname = pathname?.toLowerCase() || "/";
  const currentIcon = iconMap[normalizedPathname]?.icon ?? <Home className="w-6 h-6" />;

  // Improved title generation
  const getTitle = () => {
    if (!pathname || pathname === "/") return "Home";
    const cleanPath = pathname.split("/")[1];
    return cleanPath.charAt(0).toUpperCase() + cleanPath.slice(1);
  };

  return (
    <div className="flex items-center space-x-2">
      {currentIcon}
      <span className="text-lg font-semibold hidden sm:inline">
        {getTitle()}
      </span>
    </div>
  );
}
