"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Mail, Briefcase, FileText } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";

const routeIcons: Record<string, React.ReactNode> = {
  "/": <Home className="w-6 h-6" />,
  "/about": <User className="w-6 h-6" />,
  "/contact": <Mail className="w-6 h-6" />,
  "/projects": <Briefcase className="w-6 h-6" />,
  "/resume": <FileText className="w-6 h-6" />,
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { isLoaded, isSignedIn } = useUser();
  const normalizedPath = pathname?.toLowerCase() || "/";
  const currentIcon = routeIcons[normalizedPath] || <Home className="w-6 h-6" />;

  return (
    <header className="w-full flex items-center justify-between px-4 py-3 shadow-md bg-white dark:bg-gray-900 sticky top-0 z-50">
      <Link href="/home" className="flex items-center gap-2 text-xl font-semibold">
        {currentIcon}
        <span className="hidden sm:inline">Visruth Kelambeth</span>
      </Link>

      <div className="flex items-center gap-6">
        <nav className="flex gap-4">
          {navLinks.map(({ href, label }) => {
            const isActive = normalizedPath === href.toLowerCase();
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium hover:text-blue-600 transition ${
                  isActive ? "text-blue-600 font-bold" : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {isLoaded && (
          <div className="ml-4">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Link href="/sign-in" className="text-sm font-medium text-blue-600">
                Sign In
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
