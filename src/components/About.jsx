import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl"
        >

          {/* Left Accent Line */}
          <div className="absolute left-0 top-0 h-full w-1 bg-cyan-500 rounded-l-2xl"></div>

          <p className="text-gray-300 leading-relaxed">
            Flutter Developer with <span className="text-cyan-400 font-semibold">2.5+ years</span> of experience
            building high-quality and scalable mobile applications for Android and iOS using Flutter and Dart.
            Experienced in implementing clean and maintainable code using MVVM and Clean Architecture principles.
          </p>

          <p className="mt-5 text-gray-300 leading-relaxed">
            Skilled in integrating REST APIs, Firebase services, and implementing efficient state management
            solutions such as <span className="text-cyan-400">BLoC, Provider, and GetX</span>. Hands-on experience
            with Hive and SQLite for offline data storage.
          </p>

          <p className="mt-5 text-gray-300 leading-relaxed">
            Experienced in building responsive UIs, smooth animations, and maintaining clean architecture for
            scalable applications.
          </p>

          <p className="mt-5 text-gray-300 leading-relaxed">
            Familiar with CI/CD pipelines using GitHub Actions for automated builds and deployments.
          </p>

          <p className="mt-5 text-gray-300 leading-relaxed">
            Passionate about performance optimization, user-friendly design, and continuous learning.
          </p>



        </motion.div>
      </div>
    </section>
  );
}
