"use client";
const links = ["About", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(11,11,18,0.88)] backdrop-blur-lg border-b border-white/5 flex justify-between items-center px-8 h-16">
      <span className="font-mono text-accent text-sm font-medium tracking-wide">TC.dev</span>
      <div className="flex items-center gap-6">
        {links.map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            className="text-muted text-sm font-medium hover:text-white transition-colors"
          >
            {l}
          </button>
        ))}
        <a
          href="/timothy-chan-portfolio/TC_AI_Fellowship_resume.pdf"
          target="_blank"
          className="text-accent border border-accent/50 px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-accent/10 transition-colors"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}