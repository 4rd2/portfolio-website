import { motion } from "framer-motion";

const BINS = [
  { id: "about", label: "ABOUT ME" },
  { id: "projects", label: "PROJECTS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "contacts", label: "CONTACTS" },
];

const FLAP_DURATION = 0.4;
const FLAP_EASE = "easeInOut";

// Left flap: anchor at top-left corner, swings up (counterclockwise)
const leftFlapVariants = {
  closed: { rotate: 0, transition: { duration: FLAP_DURATION, ease: FLAP_EASE } },
  open: { rotate: -120, transition: { duration: FLAP_DURATION, ease: FLAP_EASE } },
};

// Right flap: anchor at top-right corner, swings up (clockwise)
const rightFlapVariants = {
  closed: { rotate: 0, transition: { duration: FLAP_DURATION, ease: FLAP_EASE } },
  open: { rotate: 120, transition: { duration: FLAP_DURATION, ease: FLAP_EASE } },
};

const BinBar = ({ onOpenSection, openingId, closingId, onFlapOpenComplete, onFlapCloseComplete }) => {
  return (
    <div className="w-full h-[68px] flex border-t border-[#1a4a6a] bg-[#040f1c] shrink-0 items-center justify-evenly">
      {BINS.map((bin) => {
        const isOpening = openingId === bin.id;
        const isClosing = closingId === bin.id;
        const showFlaps = isOpening || isClosing;
        const animState = isOpening ? "open" : "closed";
        const initState = isOpening ? "closed" : "open";

        return (
          <div key={bin.id} className="relative">
            <button
              onClick={() => onOpenSection(bin.id)}
              className="w-[130px] h-[44px] border border-[#1a4a6a]
                         text-[#4fc3f7] font-mono text-sm font-bold tracking-widest
                         hover:bg-[#0a2035] hover:text-[#87dfff]
                         transition-colors duration-150 cursor-pointer lumon-glow-dim"
            >
              {bin.label}
            </button>

            {showFlaps && (
              <>
                {/* Left flap — anchored at top-left corner */}
                <motion.div
                  className="absolute bg-[#1a4a6a]"
                  style={{
                    top: 0,
                    left: 0,
                    width: "50%",
                    height: "1px",
                    transformOrigin: "0% 0%",
                  }}
                  variants={leftFlapVariants}
                  initial={initState}
                  animate={animState}
                />

                {/* Right flap — anchored at top-right corner, fires callback */}
                <motion.div
                  className="absolute bg-[#1a4a6a]"
                  style={{
                    top: 0,
                    right: 0,
                    width: "50%",
                    height: "1px",
                    transformOrigin: "100% 0%",
                  }}
                  variants={rightFlapVariants}
                  initial={initState}
                  animate={animState}
                  onAnimationComplete={isOpening ? onFlapOpenComplete : onFlapCloseComplete}
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BinBar;
