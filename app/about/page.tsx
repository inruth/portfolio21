export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-16">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image Placeholder */}
        <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-300 shadow-lg">
          {/* <img src="/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover" /> */}
        </div>

        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Translating imagination into intelligent machines.
          </h1>
          <p className="text-gray-300 text-lg">
            I'm an engineer driven by the synergy of robotics, automation, and frontier tech. From embedded systems to full-scale intelligent machines, I connect hardware with code to create systems that sense, decide, and act.
          </p>
          <p className="text-gray-400 text-base">
            Every build starts with purpose—grounded in real-world needs and future-facing thinking. My work balances precision and possibility, crafting solutions that evolve with the edge of innovation.
          </p>
        </div>
      </div>
    </div>
  );
}

