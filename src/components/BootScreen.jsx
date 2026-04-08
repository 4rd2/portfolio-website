import { useState, useEffect, useRef, useCallback } from "react";
import { BOOT_LINES } from "../constants";

const BootScreen = ({ onComplete }) => {
  const [displayLines, setDisplayLines] = useState([]);
  const [typingText, setTypingText] = useState("");
  const [waitingForKey, setWaitingForKey] = useState(false);

  const lineIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const timerRef = useRef(null);

  const tick = useCallback(() => {
    const lineIdx = lineIndexRef.current;

    if (lineIdx >= BOOT_LINES.length) {
      setWaitingForKey(true);
      return;
    }

    const line = BOOT_LINES[lineIdx];
    const charIdx = charIndexRef.current;

    if (charIdx < line.length) {
      charIndexRef.current++;
      setTypingText(line.slice(0, charIndexRef.current));
      timerRef.current = setTimeout(tick, 40);
    } else {
      setDisplayLines((prev) => [...prev, line]);
      setTypingText("");
      lineIndexRef.current++;
      charIndexRef.current = 0;
      timerRef.current = setTimeout(tick, 300);
    }
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(tick, 200);
    return () => clearTimeout(timerRef.current);
  }, [tick]);

  useEffect(() => {
    if (!waitingForKey) return;
    const handler = () => onComplete();
    window.addEventListener("keydown", handler);
    window.addEventListener("pointerdown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      window.removeEventListener("pointerdown", handler);
    };
  }, [waitingForKey, onComplete]);

  const isLast = (i) => i === BOOT_LINES.length - 1;

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#030d17]">
      <div className="w-full max-w-2xl px-8 flex flex-col gap-1.5">
        {displayLines.map((line, i) => (
          <div
            key={i}
            className={`text-sm tracking-wide lumon-glow-dim ${
              isLast(i) && waitingForKey
                ? "text-[#87dfff] lumon-glow lumon-cursor"
                : isLast(i)
                ? "text-[#87dfff]"
                : "text-[#4fc3f7]"
            }`}
          >
            {line}
          </div>
        ))}

        {!waitingForKey && lineIndexRef.current < BOOT_LINES.length && (
          <div
            className={`text-sm tracking-wide lumon-glow-dim lumon-cursor ${
              lineIndexRef.current === BOOT_LINES.length - 1
                ? "text-[#87dfff]"
                : "text-[#4fc3f7]"
            }`}
          >
            {typingText}
          </div>
        )}
      </div>
    </div>
  );
};

export default BootScreen;
