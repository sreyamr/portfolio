import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-slate-950 text-white px-6 relative overflow-hidden">

      {/* Animated Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <p className="text-cyan-400 font-medium mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Sreya M R
          </h1>

          <h2 className="text-2xl mt-3 text-gray-300">
            Flutter Developer & Mobile App Engineer
          </h2>

          <p className="text-gray-400 mt-5 leading-relaxed">
            I build high-performance, scalable mobile applications using Flutter,
            Dart, Firebase, and modern architecture patterns like BLoC,GetX & Provider.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full font-medium transition"
            >
              🚀 View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 hover:bg-white/10 rounded-full transition"
            >
              Contact Me
            </a>
          </div>

      
        </motion.div>

        {/* RIGHT IMAGE */}
       {/* RIGHT IMAGE */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  className="flex justify-center"
>

  <div className="relative">

    {/* Outer Glow Ring */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 blur-2xl opacity-40 animate-pulse"></div>

    {/* Rotating Border Ring */}
    <div className="absolute inset-[-10px] rounded-full border-2 border-dashed border-cyan-400/40 animate-spin-slow"></div>

    {/* Profile Circle */}
    <div className="relative w-72 h-72 rounded-full p-2 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">

      <img
        src="/profile.png"
        alt="profile"
        className="w-full h-full object-cover rounded-full border-4 border-cyan-400"
      />

    </div>

  </div>
</motion.div>

      </div>
    </section>
  );
}