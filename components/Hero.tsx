"use client";
import { useState, useEffect } from "react";

const ROLES = ["Full-Stack Engineer", "React Developer", "AWS Builder", "Software Developer"];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      }, isDeleting ? 45 : 75);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="min-h-screen flex items-center px-8 max-w-4xl mx-auto">
      <div>
        <p className="font-mono text-accent text-sm tracking-widest mb-6">
          Hi, my name is
        </p>
        <h1 className="text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-3">
          Timothy Chan.
        </h1>
        <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-muted mb-7">
          I build things as a{" "}
          <span className="text-violet">
            {displayText}
            <span className="inline-block w-0.5 h-[1em] bg-violet ml-0.5 align-bottom animate-pulse" />
          </span>
        </h2>
        <p className="max-w-lg text-muted leading-relaxed text-base mb-10">
          Full-Stack Engineer with 2+ years designing and deploying scalable
          React and Node.js applications on AWS. I've shipped production tools
          for NASA, led teams, and migrated legacy systems — all in
          high-compliance federal environments.
        </p>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => scrollTo("projects")}
            className="bg-accent/10 text-accent border border-accent/50 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-accent/20 transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-transparent text-white border border-white/10 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-white/5 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}