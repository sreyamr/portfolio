import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "State Management",
    skills: ["Provider", "BLoC", "GetX"]
  },
  {
    title: "Backend & Services",
    skills: ["Firebase Auth", "Push Notification", "Crashlytics", "Cloud Storage", "REST API"]
  },
  {
    title: "Database",
    skills: ["SQLite", "Hive"]
  },
  {
    title: "Dev Tools",
    skills: ["Git", "CI/CD Pipeline", "Clean Architecture"]
  },
  {
    title: "UI/UX",
    skills: ["Responsive UI", "Figma Design", "App Development"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14"
        >
          My Skills
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/20 transition"
            >

              {/* Category Title */}
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-gray-200 border border-cyan-500/30 hover:bg-cyan-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}