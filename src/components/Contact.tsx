"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 px-8 pb-28 max-w-lg mx-auto text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <p className="font-mono text-accent text-xs tracking-widest mb-4">
        04. What&apos;s Next?
      </p>
      <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-5">
        Get In Touch
      </h2>
      <p className="text-muted leading-relaxed mb-10">
        I&apos;m currently open to new full-time opportunities. Whether you have
        a role, a project, or just want to connect — my inbox is always open.
      </p>
      <a
        href="mailto:timothylkchan@gmail.com"
        className="inline-block bg-accent/10 text-accent border border-accent/50 px-9 py-4 rounded-lg text-base font-semibold hover:bg-accent/20 transition-colors"
      >
        Say Hello →
      </a>
      <div className="mt-12 flex justify-center gap-8">
        <a href="https://bold.pro/my/timothy-chan-260403203458/156r" target="_blank" className="text-muted text-sm font-medium hover:text-white transition-colors">
          Portfolio
        </a>
        <a href="https://github.com/timothylkchan" target="_blank" className="text-muted text-sm font-medium hover:text-white transition-colors">
          GitHub
        </a>
        <a href="https://linkedin.com/in/timothylkchan" target="_blank" className="text-muted text-sm font-medium hover:text-white transition-colors">
          LinkedIn
        </a>
      </div>
    </motion.section>
  );
}