"use client";
import { motion } from "framer-motion";

const SKILLS = {
  "Web Development": ["React", "Node.js", "Express.js", "JavaScript", "HTML/CSS", "REST APIs"],
  Languages: ["C#", "Python", "Java", "C++", "SQL", "R"],
  "Cloud & Data": ["AWS", "MySQL", "Dataverse", "Power BI", "SharePoint"],
  Tools: ["Git", "GitLab", "VS Code", "Agile/Scrum", "Photoshop"],
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-accent text-base">01.</span>
        <h2 className="text-2xl font-bold tracking-tight">About Me</h2>
        <div className="flex-1 h-px bg-white/7 ml-2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="text-muted leading-relaxed mb-4">
            I'm a full-stack engineer based in San Ramon, CA who has spent the
            last few years building tools that real teams depend on — from NASA
            program risk tracking to campus network infrastructure.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            I care about clean architecture, intuitive interfaces, and writing
            code that the next person (or intern I'm mentoring) can actually
            understand and extend.
          </p>
          <p className="text-muted leading-relaxed">
            I thrive in environments where the stakes are high and the problems
            are complex — federal compliance requirements included.
          </p>
        </div>
        <div>
          {Object.entries(SKILLS).map(([cat, skills]) => (
            <div key={cat} className="mb-5">
              <p className="font-mono text-accent text-[10px] tracking-widest uppercase mb-2">
                {cat}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="bg-white/4 border border-white/8 rounded px-3 py-1 text-xs text-soft hover:border-accent/40 hover:text-white transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}