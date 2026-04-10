const PROJECTS = [
  { label: "CARD GAME", type: "INDIVIDUAL", url: "https://ruthless-colors-game-production.up.railway.app/" },
  { label: "MOBILE WATER TRACKER", type: "INDIVIDUAL", url: "https://github.com/4rd2/SimpleWaterTracker" },
  { label: "ECOMMERCE WEBSITE", type: "TEAM", url: "https://github.com/Boxure/Boxure" },
  { label: "AI RESUME BUILDER", type: "TEAM", url: "https://au24-web-resume-builder-x8vx.onrender.com/" },
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
