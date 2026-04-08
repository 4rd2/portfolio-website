import { useMemo } from "react";
import { GRID } from "../constants";

const NumberField = () => {
  const digits = useMemo(() => {
    return Array.from({ length: GRID.cols * GRID.rows }, () => ({
      digit: Math.floor(Math.random() * 9) + 1,
      delay: Math.random() * 800,
      duration: 180 + Math.random() * 120,
      opacity: 0.35 + Math.random() * 0.45,
    }));
  }, []);

  return (
    <div
      className="absolute inset-0"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${GRID.cols}, 1fr)`,
        gridTemplateRows: `repeat(${GRID.rows}, 1fr)`,
        paddingTop: "8px",
        paddingBottom: "8px",
      }}
    >
      {digits.map((d, i) => (
        <span
          key={i}
          className="lumon-digit lumon-glow-dim flex items-center justify-center text-[#4fc3f7] text-lg select-none"
          style={{
            animationDelay: `${d.delay}ms`,
            animationDuration: `${d.duration}ms`,
            opacity: d.opacity,
          }}
        >
          {d.digit}
        </span>
      ))}
    </div>
  );
};

export default NumberField;
