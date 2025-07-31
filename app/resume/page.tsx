// app/resume/page.tsx

"use client";

import { useEffect } from "react";

export default function ResumePage() {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/Visruthresume.pdf"; // relative to public/
    link.download = "Visruth_Resume.pdf";
    link.click();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Downloading Resume...</h1>
      <p className="text-gray-600">If the download didn’t start, <a href="/Visruthresume.pdf" download className="text-blue-600 underline">click here</a>.</p>
    </main>
  );
}

