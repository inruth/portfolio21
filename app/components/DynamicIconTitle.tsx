"use client";

import { usePathname } from "next/navigation";
import { Home, User, Mail, BookOpenText, Briefcase } from "lucide-react";

export default function DynamicIconTitle() {
  const pathname = usePathname();

  const iconMap: Record<string, { icon: JSX.Element }> = {
    "/Home": { icon: <Home className="w-6 h-6" /> },
    "/about": { icon: <User className="w-6 h-6" /> },
    "/contact": { icon: <Mail className="w-6 h-6" /> },
    "/projects": { icon: <Briefcase className="w-6 h-6" /> },
    "/blog": { icon: <BookOpenText className="w-6 h-6" /> },
  };

  const currentIcon = iconMap[pathname]?.icon ?? <Home className="w-6 h-6" />;

  return (
    <div className="flex items-center space-x-2">
      {currentIcon}
      <span className="text-lg font-semibold hidden sm:inline">
        {pathname === "/"
          ? "Home"
          : pathname.charAt(1).toUpperCase() + pathname.slice(2)}
      </span>
    </div>
  );
}

