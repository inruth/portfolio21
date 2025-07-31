// app/projects/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <Link
          href="/projects/portweb"
          className="group relative block bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
        >
          <div className="aspect-square overflow-hidden">
            <Image
              src="/webpro.png"
              alt="Portfolio Project"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="bg-gray-900 text-center py-2 overflow-hidden">
            <div className="whitespace-nowrap overflow-hidden group-hover:animate-marquee">
              Portfolio Website Creation
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}

