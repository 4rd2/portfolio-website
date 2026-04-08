import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SECTIONS } from "../constants";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactsSection from "./sections/ContactsSection";

const overlayVariants = {
  initial: { clipPath: "inset(0% 0% 100% 0%)" },
  animate: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: { duration: 0.35, ease: "easeIn" },
  },
};

const contentVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const SectionOverlay = ({ section, onClose, onExitComplete }) => {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {section && (
        <motion.div
          key={section}
          className="absolute inset-0 z-20 flex flex-col lumon-flicker"
          style={{ paddingBottom: "68px", backgroundColor: "rgba(3, 13, 23, 0.96)" }}
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Section header */}
          <motion.div
            className="flex items-center justify-between px-6 py-3 border-b border-[#1a4a6a] shrink-0"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <span className="lumon-glow text-[#87dfff] font-bold text-lg tracking-[0.2em]">
              {SECTIONS[section]}
            </span>
            <button
              onClick={onClose}
              className="text-[#1e6a8a] hover:text-[#4fc3f7] text-sm tracking-wider transition-colors duration-150 cursor-pointer"
            >
              [ESC] CLOSE
            </button>
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex-1 overflow-y-auto px-8 py-6 text-[#4fc3f7]"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {section === "about"      && <AboutSection />}
            {section === "projects"   && <ProjectsSection />}
            {section === "experience" && <ExperienceSection />}
            {section === "contacts"   && <ContactsSection />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SectionOverlay;
