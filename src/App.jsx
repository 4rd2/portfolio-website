import { useState, useRef } from "react";
import BootScreen from "./components/BootScreen";
import MainScreen from "./components/MainScreen";
import CRTEffects from "./components/CRTEffects";

const App = () => {
  const [phase, setPhase] = useState("boot");
  const [activeSection, setActiveSection] = useState(null);
  const [openingId, setOpeningId] = useState(null);
  const [closingId, setClosingId] = useState(null);
  const lastSectionRef = useRef(null);

  const handleOpenSection = (id) => {
    if (openingId || closingId || activeSection) return;
    setOpeningId(id);
  };

  const handleFlapOpenComplete = () => {
    setActiveSection(openingId);
    lastSectionRef.current = openingId;
    setOpeningId(null);
  };

  const handleCloseSection = () => {
    setActiveSection(null);
  };

  const handleContentExitComplete = () => {
    setClosingId(lastSectionRef.current);
  };

  const handleFlapCloseComplete = () => {
    setClosingId(null);
    lastSectionRef.current = null;
  };

  return (
    <>
      <CRTEffects />

      <div
        className="bg-[#030d17] text-[#4fc3f7] font-mono overflow-hidden relative"
        style={{ position: "fixed", inset: 0, filter: "url(#crt-effects)" }}
      >
        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none z-[9999]"
          style={{ background: "radial-gradient(ellipse at center, transparent 65%, rgba(0,0,0,0.5) 100%)" }}
        />

        {/* Specular glare */}
        <div
          className="absolute inset-0 pointer-events-none z-[9998]"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 25%, transparent 55%)",
          }}
        />

        <div className="lumon-scanlines" />

        {phase === "boot" && (
          <BootScreen onComplete={() => setPhase("main")} />
        )}
        {phase === "main" && (
          <MainScreen
            activeSection={activeSection}
            openingId={openingId}
            closingId={closingId}
            onOpenSection={handleOpenSection}
            onFlapOpenComplete={handleFlapOpenComplete}
            onCloseSection={handleCloseSection}
            onContentExitComplete={handleContentExitComplete}
            onFlapCloseComplete={handleFlapCloseComplete}
          />
        )}
      </div>
    </>
  );
};

export default App;
