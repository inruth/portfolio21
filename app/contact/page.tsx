"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Instagram, Linkedin } from "lucide-react";

export default function ContactPage() {
  const { userId, isLoaded } = useAuth();
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/");
    }
  }, [isLoaded, userId, router]);

  if (!isLoaded || !userId) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setStatus("✅ Message sent successfully!");
      setMessage("");
    } else {
      setStatus("❌ Failed to send message.");
    }
  };

  return (
    <section className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <textarea
          placeholder="Your message"
          className="border border-gray-300 p-3 rounded resize-none"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {status && <p className="text-sm text-gray-700">{status}</p>}
      </form>

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-2">Connect with me</h3>
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/visruth_kelambeth/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-pink-600 hover:text-pink-800"
          >
            <Instagram />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/visruthkelambeth123/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-blue-700 hover:text-blue-900"
          >
            <Linkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

