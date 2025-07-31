// app/components/Header.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Mail,
  Briefcase,
  FileText,
} from "lucide-react";

const routeIcons: Record<string, JSX.Element> = {
  "/Home": <Home className="w-6 h-6" />,
  "/about": <User className="w-6 h-6" />,
  "/contact": <Mail className="w-6 h-6" />,
  "/projects": <Briefcase className="w-6 h-6" />,
  "/resume": <FileText className="w-6 h-6" />,
};

const navLinks = [
  { href: "/Home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const currentIcon = routeIcons[pathname] || <Home className="w-6 h-6" />;

  return (
    <header className="w-full flex items-center justify-between px-4 py-3 shadow-md bg-white dark:bg-gray-900">
      <div className="flex items-center gap-2 text-xl font-semibold">
        {currentIcon}
        <span className="hidden sm:inline">Visruth Kelambeth</span>
      </div>

      <nav className="flex gap-4">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-sm font-medium hover:text-blue-600 transition ${
              pathname === href ? "text-blue-600 font-bold" : "text-gray-700 dark:text-gray-200"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

