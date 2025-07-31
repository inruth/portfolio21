export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* Placeholder for photograph */}
        <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200">
          {/* Replace this div with <img src="/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover" /> */}
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Translating imagination into intelligent machines.
          </h1>
          <p className="text-gray-300">
            I’m an engineer thriving at the crossroads of robotics, automation, and cutting edge technology. Whether it's developing embedded systems or bringing intelligent machines to life, I bridge physical systems with code to make them move, think and respond.
          </p>
          <p className="text-gray-400">
            I design with intention, focused on how innovation meets real-world utility. My work reflects a blend of curiosity, care and craft—shaped to build the future, As the cutting edge shifts, so does what I build.
          </p>
        </div>
      </div>
    </div>
  );
}

