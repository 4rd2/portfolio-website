const PROJECTS = [
  { label: "SOCIAL LINKS PROFILE",  type: "INDIVIDUAL", url: "https://4rd2.github.io/Social-Links-Profile/" },
  { label: "ROCK PAPER SCISSORS",   type: "INDIVIDUAL", url: "https://4rd2.github.io/Rock-Paper-Scissors/" },
  { label: "ETCH-A-SKETCH",         type: "INDIVIDUAL", url: "https://4rd2.github.io/Etch-A-Sketch/" },
  { label: "CALCULATOR",            type: "INDIVIDUAL", url: "https://4rd2.github.io/Calculator/" },
  { label: "CV APP",                type: "INDIVIDUAL", url: "https://4rd-cv-app.netlify.app/" },
  { label: "AI RESUME BUILDER",     type: "TEAM",       url: "https://au24-web-resume-builder-x8vx.onrender.com/" },
];

const ProjectsSection = () => {
  return (
    <div className="flex flex-col gap-3 text-sm leading-7">
      <div className="text-[#1e6a8a]">&gt; ls ./projects</div>
      <div className="flex flex-col gap-2 pl-4">
        {PROJECTS.map((p, i) => (
          <div key={p.url} className="flex items-baseline gap-3">
            <span className="text-[#1e6a8a] w-6 shrink-0">[{String(i + 1).padStart(2, "0")}]</span>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4fc3f7] hover:text-[#87dfff] hover:lumon-glow transition-colors duration-150"
            >
              {p.label}
            </a>
            <span className="text-[#1e6a8a] text-xs">— {p.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
