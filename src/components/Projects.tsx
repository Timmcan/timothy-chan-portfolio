"use client";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    icon: "🚀",
    name: "Praxis Web Risk",
    desc: "Full-stack NASA risk tracking app with React frontend, Node.js REST APIs on AWS, and embedded Power BI dashboards for program-level visibility.",
    tags: ["React", "Node.js", "AWS", "Power BI"],
    gh: "https://github.com/timothylkchan",
    live: null,
    note: "Internal / NDA",
  },
  {
    icon: "🛠️",
    name: "SMART Tool",
    desc: "C# VSTO add-in for NASA program managers providing critical schedule analysis, task isolation filters, and resource tracking inside Microsoft Project.",
    tags: ["C#", "VSTO", "MS Project"],
    gh: "https://github.com/timothylkchan",
    live: null,
    note: "Internal / NDA",
  },
  {
    icon: "📍",
    name: "NUTSTAR",
    desc: "Capstone project lead — built a C# Windows Forms location app integrating real-time Bluetooth data for tracking and visualization.",
    tags: ["C#", "Windows Forms", "Bluetooth"],
    gh: "https://github.com/timothylkchan",
    live: null,
  },
  {
    icon: "🗄️",
    name: "C++ SQL Interpreter",
    desc: "Custom SQL interpreter built in C++ from scratch, with optimized query performance through efficient catalog design and aggregation handling.",
    tags: ["C++", "SQL", "Database"],
    gh: "https://github.com/timothylkchan",
    live: null,
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-accent text-base">03.</span>
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        <div className="flex-1 h-px bg-white/7 ml-2" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {PROJECTS.map((p, i) => (
          <div
            key={i}
            className="bg-surface border border-white/7 rounded-xl p-6 flex flex-col gap-2.5 hover:border-accent/25 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="flex justify-between items-center">
              <span className="text-2xl">{p.icon}</span>
              <div className="flex gap-4 items-center">
                {p.note && (
                  <span className="font-mono text-[10px] text-muted border border-white/10 px-2 py-0.5 rounded">
                    {p.note}
                  </span>
                )}
                <a href={p.gh} className="text-xs font-semibold text-muted hover:text-accent transition-colors">
                  GitHub ↗
                </a>
                {p.live && (
                  <a href={p.live} className="text-xs font-semibold text-violet hover:text-white transition-colors">
                    Live ↗
                  </a>
                )}
              </div>
            </div>
            <p className="font-semibold text-base tracking-tight">{p.name}</p>
            <p className="text-muted text-sm leading-relaxed flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] text-accent bg-accent/7 border border-accent/18 rounded px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}