// app/Home/page.tsx

"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/robotic_automation.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/30" /> {/* optional dark overlay */}

      <div className="relative z-10 h-full w-full flex items-center justify-start p-8 sm:p-16">
        <div className="max-w-xl space-y-6 bg-white/80 dark:bg-gray-900/80 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Where code meets motion, and intelligence finds purpose.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
          >
            Learn more about me
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

