"use client";

import { useState, useEffect } from "react";
import { useAuth, SignInButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Instagram, Linkedin } from "lucide-react";

export default function ContactPage() {
  const { userId, isLoaded } = useAuth();
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: string; text: string } | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [showSignInPrompt, setShowSignInPrompt] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isLoaded || !isClient) {
    return null;
  }

  const handleTextareaClick = () => {
    if (!userId) {
      setShowSignInPrompt(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) {
      setShowSignInPrompt(true);
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      
      if (data.error) {
        setStatus({ type: "error", text: data.error });
      } else {
        setStatus({ type: "success", text: "Message sent successfully!" });
        setMessage("");
      }
    } catch (error) {
      setStatus({ type: "error", text: "Failed to send message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="relative">
          <textarea
            placeholder={userId ? "Your message" : "Click to sign in and message"}
            className="w-full max-w-[544px] border border-gray-300 p-3 rounded resize-none dark:bg-gray-800 dark:border-gray-700"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onClick={handleTextareaClick}
            required
          />
          {showSignInPrompt && !userId && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl">
                <p className="mb-3">Please sign in to send a message</p>
                <SignInButton>
                  <button 
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    onClick={() => router.push("/sign-in?redirect_url=/contact")}
                  >
                    Sign In
                  </button>
                </SignInButton>
                <button 
                  onClick={() => setShowSignInPrompt(false)}
                  className="ml-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={loading || !userId}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {status && (
          <p className={`text-sm ${
            status.type === "success" ? "text-green-600" : "text-red-600"
          }`}>
            {status.text}
          </p>
        )}
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
