import { useState, useRef } from "react";
import BootScreen from "./components/BootScreen";
import MainScreen from "./components/MainScreen";

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
    <div className="bg-[#030d17] text-[#4fc3f7] font-mono w-screen h-screen overflow-hidden relative">
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
  );
};

export default App;
