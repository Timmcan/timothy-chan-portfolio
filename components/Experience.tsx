"use client";
import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "Astrion / NASA — Mountain View, CA",
    period: "04/2024 – 03/2026",
    desc: "Architected and deployed Praxis Web Risk, a full-stack risk tracking application for NASA teams using React and Node.js on AWS, with REST APIs and embedded Power BI dashboards. Led migration of a legacy C# Windows desktop tool to a browser-based platform, mentoring a team of 5 interns through the full Agile lifecycle. Maintained C# VSTO tooling (SMART Tool) and NASA's SharePoint/Project Server infrastructure in a federal high-compliance environment.",
    tags: ["React", "Node.js", "AWS", "REST APIs", "Power BI", "C#", "SharePoint"],
  },
  {
    role: "Network Technician",
    company: "University of California, Merced",
    period: "08/2022 – 05/2023",
    desc: "Optimized campus network systems and documented infrastructure, equipment, and troubleshooting processes to improve reliability across the university network.",
    tags: ["Networking", "Infrastructure", "Documentation"],
  },
  {
    role: "Student Technology Consultant",
    company: "University of California, Merced",
    period: "08/2021 – 05/2022",
    desc: "Delivered technical support to faculty, staff, and students — resolving hardware and software issues efficiently under real-world service constraints.",
    tags: ["Technical Support", "Hardware", "Software"],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-20 px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-10">
        <span className="font-mono text-accent text-base">02.</span>
        <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
        <div className="flex-1 h-px bg-white/7 ml-2" />
      </div>
      <div className="flex flex-col gap-3">
        {EXPERIENCE.map((e, i) => (
          <div
            key={i}
            className="bg-surface border border-white/7 rounded-xl p-6 hover:border-accent/25 hover:translate-x-1 transition-all duration-200"
          >
            <div className="flex justify-between items-start flex-wrap gap-2 mb-1.5">
              <div>
                <p className="font-semibold text-base">{e.role}</p>
                <p className="text-accent text-sm font-medium">{e.company}</p>
              </div>
              <span className="font-mono text-xs text-muted bg-white/4 px-3 py-1 rounded">
                {e.period}
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed mt-3 mb-4">{e.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {e.tags.map((t) => (
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